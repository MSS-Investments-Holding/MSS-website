"use server";

import { createHash } from "node:crypto";
import { headers } from "next/headers";

type PitchActionState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

const inquiryLabels: Record<string, string> = {
  founders: "Founders & Ventures",
  partners: "Strategic Partners",
  investment: "Investment Opportunities",
  advisory: "Advisory Requests",
};

const requiredFields = [
  "first_name",
  "last_name",
  "email",
  "location",
  "inquiry_type",
  "message",
] as const;

/* Mirrors the maxLength attributes on the form inputs; enforced again
 * here because the client attributes are trivially bypassed. */
const fieldLimits: Record<string, number> = {
  first_name: 100,
  last_name: 100,
  email: 254,
  location: 32,
  business_name: 200,
  business_url: 2048,
  inquiry_type: 32,
  message: 5000,
};

function readValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/* Only http(s) URLs are stored — anything else (javascript:, data:,
 * unparseable input) becomes null so no dangerous scheme can reach a
 * future admin view as a clickable link. */
function normalizeOptionalUrl(value: string) {
  if (!value) return null;

  for (const candidate of [value, `https://${value}`]) {
    try {
      const url = new URL(candidate);
      if (url.protocol === "http:" || url.protocol === "https:") {
        return url.toString();
      }
    } catch {
      // try the next candidate
    }
  }

  return null;
}

function hashIp(ip: string) {
  return createHash("sha256")
    .update(`${ip}:${process.env.PITCH_FORM_IP_SALT ?? "mss-pitch-form"}`)
    .digest("hex");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/* Per-IP sliding window: counts only submissions that reach the
 * insert/email path, so validation retries are never penalised.
 * In-memory state is per serverless instance — a determined
 * distributed attacker needs an edge/WAF layer on top, but this
 * stops the single-source floods that burn email quota. */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_SUBMISSIONS = 3;
const submissionTimes = new Map<string, number[]>();

function isRateLimited(ipHash: string) {
  const now = Date.now();
  const recent = (submissionTimes.get(ipHash) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT_MAX_SUBMISSIONS) {
    submissionTimes.set(ipHash, recent);
    return true;
  }

  recent.push(now);
  submissionTimes.set(ipHash, recent);

  if (submissionTimes.size > 5000) {
    for (const [key, times] of submissionTimes) {
      if (times.every((time) => now - time >= RATE_LIMIT_WINDOW_MS)) {
        submissionTimes.delete(key);
      }
    }
  }

  return false;
}

function buildEmailHtml(payload: Record<string, string | boolean | null>) {
  const rows = [
    ["Name", `${payload.first_name} ${payload.last_name}`],
    ["Email", payload.email],
    ["Location", payload.location],
    ["Inquiry Type", inquiryLabels[String(payload.inquiry_type)]],
    ["Business Name", payload.business_name || "Not provided"],
    ["Business URL", payload.business_url || "Not provided"],
    ["Message", payload.message],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #1C1C1F; line-height: 1.5;">
      <h1 style="font-size: 22px; margin: 0 0 20px;">New pitch submission</h1>
      <table style="width: 100%; border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="width: 160px; padding: 10px 0; color: #67686B; vertical-align: top;">${escapeHtml(String(label))}</td>
                <td style="padding: 10px 0; color: #1C1C1F; white-space: pre-wrap;">${escapeHtml(String(value))}</td>
              </tr>
            `
          )
          .join("")}
      </table>
    </div>
  `;
}

export async function submitPitch(
  _previousState: PitchActionState,
  formData: FormData
): Promise<PitchActionState> {
  if (readValue(formData, "company_website")) {
    return {
      ok: true,
      message: "Thank you. Your pitch has been received.",
    };
  }

  const fieldErrors: Record<string, string> = {};
  const payload = {
    first_name: readValue(formData, "first_name"),
    last_name: readValue(formData, "last_name"),
    email: readValue(formData, "email").toLowerCase(),
    location: readValue(formData, "location"),
    business_name: readValue(formData, "business_name") || null,
    business_url: normalizeOptionalUrl(readValue(formData, "business_url")),
    inquiry_type: readValue(formData, "inquiry_type"),
    message: readValue(formData, "message"),
    consent: formData.get("consent") === "on",
    accepted_terms: formData.get("terms") === "on",
  };

  for (const field of requiredFields) {
    if (!payload[field]) {
      fieldErrors[field] = "Required";
    }
  }

  for (const [field, limit] of Object.entries(fieldLimits)) {
    const value = payload[field as keyof typeof payload];
    if (typeof value === "string" && value.length > limit) {
      fieldErrors[field] = `Must be ${limit} characters or fewer`;
    }
  }

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    fieldErrors.email = "Enter a valid email";
  }

  if (!Object.hasOwn(inquiryLabels, payload.inquiry_type)) {
    fieldErrors.inquiry_type = "Select an inquiry type";
  }

  if (!payload.consent) {
    fieldErrors.consent = "Consent is required";
  }

  if (!payload.accepted_terms) {
    fieldErrors.terms = "Terms agreement is required";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Please complete the required fields.",
      fieldErrors,
    };
  }

  const headerList = await headers();
  const forwardedFor = headerList.get("x-forwarded-for") ?? "";
  const ip = forwardedFor.split(",")[0]?.trim() || headerList.get("x-real-ip") || "unknown";
  const userAgent = headerList.get("user-agent") ?? null;
  const ipHash = hashIp(ip);

  if (isRateLimited(ipHash)) {
    return {
      ok: false,
      message: "Too many submissions from your network. Please wait a few minutes and try again.",
    };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.PITCH_FORM_FROM_EMAIL ?? "MSS Website <onboarding@resend.dev>";
  const toEmail = process.env.PITCH_FORM_TO_EMAIL;

  if (!supabaseUrl || (!anonKey && !serviceRoleKey)) {
    return {
      ok: false,
      message: "The pitch form is not configured yet. Please try again later.",
    };
  }

  const insertBody = JSON.stringify({
    ...payload,
    user_agent: userAgent,
    ip_hash: ipHash,
  });

  const insertWith = (key: string) =>
    fetch(`${supabaseUrl}/rest/v1/pitch_submissions`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: insertBody,
    });

  /* Least privilege: insert with the anon key, which RLS restricts to
   * insert-only (migration 002). The service-role fallback exists only
   * for the window before that migration is applied — once it is, the
   * service key can be removed from the deployment environment. */
  let insertResponse = await insertWith(anonKey ?? serviceRoleKey!);

  if (
    !insertResponse.ok &&
    anonKey &&
    serviceRoleKey &&
    (insertResponse.status === 401 || insertResponse.status === 403)
  ) {
    console.warn(
      "Pitch insert with anon key was rejected — apply supabase/migrations/002_pitch_submissions_insert_policy.sql. Falling back to service role key."
    );
    insertResponse = await insertWith(serviceRoleKey);
  }

  if (!insertResponse.ok) {
    return {
      ok: false,
      message: "We could not submit your pitch right now. Please try again shortly.",
    };
  }

  if (resendApiKey && toEmail) {
    try {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: payload.email,
          subject: `New pitch submission: ${inquiryLabels[payload.inquiry_type]}`,
          html: buildEmailHtml(payload),
        }),
      });

      if (!emailResponse.ok) {
        console.error("Pitch notification email failed", await emailResponse.text());
      }
    } catch (error) {
      console.error("Pitch notification email failed", error);
    }
  }

  return {
    ok: true,
    message: "Thank you. Your pitch has been received.",
  };
}
