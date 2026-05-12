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

function readValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function normalizeOptionalUrl(value: string) {
  if (!value) return null;

  try {
    return new URL(value).toString();
  } catch {
    try {
      return new URL(`https://${value}`).toString();
    } catch {
      return value;
    }
  }
}

function hashIp(ip: string) {
  return createHash("sha256")
    .update(`${ip}:${process.env.PITCH_FORM_IP_SALT ?? "mss-pitch-form"}`)
    .digest("hex");
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
                <td style="width: 160px; padding: 10px 0; color: #67686B; vertical-align: top;">${label}</td>
                <td style="padding: 10px 0; color: #1C1C1F; white-space: pre-wrap;">${String(value)}</td>
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

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.PITCH_FORM_FROM_EMAIL ?? "MSS Website <onboarding@resend.dev>";
  const toEmail = process.env.PITCH_FORM_TO_EMAIL;

  if (!supabaseUrl || !serviceRoleKey) {
    return {
      ok: false,
      message: "The pitch form is not configured yet. Please try again later.",
    };
  }

  const insertResponse = await fetch(`${supabaseUrl}/rest/v1/pitch_submissions`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      ...payload,
      user_agent: userAgent,
      ip_hash: hashIp(ip),
    }),
  });

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
