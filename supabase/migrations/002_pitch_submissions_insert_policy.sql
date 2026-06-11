-- Least-privilege access for the pitch form.
--
-- RLS is already enabled on pitch_submissions (migration 001) with no
-- policies, so the anon key could do nothing at all and the server
-- action had to use the service-role key — which bypasses RLS and can
-- read/write every table. This policy lets the anon key INSERT (and
-- only insert) into this one table, so the website no longer needs the
-- service-role key at runtime.
--
-- After applying this migration, remove SUPABASE_SERVICE_ROLE_KEY from
-- the deployment environment; the code falls back to it only when the
-- anon insert is rejected.

-- Note: the live table predates migration 001 and has no `source`
-- column, so the check is limited to columns that exist in production.
create policy "Allow pitch form submissions"
  on public.pitch_submissions
  for insert
  to anon
  with check (
    consent = true
    and accepted_terms = true
  );

-- The form never reads submissions back (inserts use return=minimal),
-- so make sure the public roles cannot select, update, or delete even
-- if a permissive policy is added by mistake later.
revoke select, update, delete on public.pitch_submissions from anon;
revoke select, update, delete on public.pitch_submissions from authenticated;
