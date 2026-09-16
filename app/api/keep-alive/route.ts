import { NextResponse } from "next/server";

/*
 * Supabase keep-alive.
 *
 * Free-plan Supabase projects are auto-paused after 7 days with no
 * database activity, which takes the pitch form offline until someone
 * manually resumes the project in the dashboard. This route performs a
 * single lightweight READ (a HEAD count, zero rows returned, nothing
 * written) so Supabase registers activity and resets the idle timer.
 *
 * Triggered daily by Vercel Cron (see vercel.json) — well inside the
 * 7-day window. It touches no user data and inserts nothing into
 * pitch_submissions; only real form submissions ever add rows.
 *
 * Primary ping uses the service-role key server-side to run a real
 * COUNT against the table (the strongest activity signal). If that key
 * is absent, it falls back to the project's auth health endpoint so the
 * project still receives a request. The service-role key never leaves
 * this server route.
 */

export const dynamic = "force-dynamic";

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl) {
    return NextResponse.json(
      { ok: false, reason: "not_configured" },
      { status: 200 }
    );
  }

  try {
    if (serviceRoleKey) {
      // HEAD + count=exact: runs a COUNT on the table, returns no rows.
      // This is genuine database activity that resets the idle timer.
      const response = await fetch(
        `${supabaseUrl}/rest/v1/pitch_submissions?select=id`,
        {
          method: "HEAD",
          headers: {
            apikey: serviceRoleKey,
            Authorization: `Bearer ${serviceRoleKey}`,
            Prefer: "count=exact",
          },
          cache: "no-store",
        }
      );

      return NextResponse.json(
        { ok: true, method: "db_count", pinged: response.ok, status: response.status },
        { status: 200 }
      );
    }

    // Fallback: no service-role key — hit the auth health endpoint so the
    // project still receives a request.
    const health = await fetch(`${supabaseUrl}/auth/v1/health`, {
      headers: anonKey ? { apikey: anonKey } : undefined,
      cache: "no-store",
    });

    return NextResponse.json(
      { ok: true, method: "auth_health", pinged: health.ok, status: health.status },
      { status: 200 }
    );
  } catch (error) {
    console.error("Supabase keep-alive ping failed", error);
    return NextResponse.json({ ok: false, reason: "ping_failed" }, { status: 200 });
  }
}
