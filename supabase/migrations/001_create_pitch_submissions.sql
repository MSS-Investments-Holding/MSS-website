create extension if not exists pgcrypto;

create table if not exists public.pitch_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  location text not null,
  business_name text,
  business_url text,
  inquiry_type text not null check (
    inquiry_type in (
      'founders',
      'partners',
      'investment',
      'advisory'
    )
  ),
  message text not null,
  consent boolean not null default false check (consent = true),
  accepted_terms boolean not null default false check (accepted_terms = true),
  status text not null default 'new' check (
    status in (
      'new',
      'reviewed',
      'contacted',
      'archived'
    )
  ),
  source text not null default 'pitch_page',
  user_agent text,
  ip_hash text,
  submitted_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists pitch_submissions_submitted_at_idx
  on public.pitch_submissions (submitted_at desc);

create index if not exists pitch_submissions_status_idx
  on public.pitch_submissions (status);

create index if not exists pitch_submissions_inquiry_type_idx
  on public.pitch_submissions (inquiry_type);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists pitch_submissions_set_updated_at on public.pitch_submissions;

create trigger pitch_submissions_set_updated_at
before update on public.pitch_submissions
for each row
execute function public.set_updated_at();

alter table public.pitch_submissions enable row level security;

comment on table public.pitch_submissions is
  'Submissions from the MSS website Pitch to Us form.';
