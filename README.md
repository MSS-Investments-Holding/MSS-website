# MSS Investments Holding — Corporate Website

Corporate website for MSS Investments Holding, a global holding company with interests in payments, financial services, AI, technology, digital asset infrastructure, and venture.

Built and delivered by [HiPortfolio](https://hiportfolio.co/) · Project reference: HP-MSS-2026-001

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| CMS | Sanity (headless, for News and Careers) |
| Database | Supabase (pitch form submissions) |
| Email | Resend (pitch form notifications) |
| Deployment | Vercel |
| Smooth Scroll | Lenis |

---

## Prerequisites

- Node.js 20+
- A [Sanity](https://sanity.io) project
- A [Supabase](https://supabase.com) project with the pitch submissions table provisioned (see `supabase/migrations/`)
- A [Resend](https://resend.com) account with a verified sending domain
- A [Vercel](https://vercel.com) account for deployment

---

## Local Development

**1. Clone and install dependencies**

```bash
git clone <repository-url>
cd mss-investments-holding
npm install
```

**2. Configure environment variables**

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in all values. See the comments in `.env.example` for where to find each value.

**3. Set up the Supabase database**

Run the migration in your Supabase project to create the pitch submissions table:

```bash
# Via the Supabase dashboard SQL editor, run:
supabase/migrations/001_create_pitch_submissions.sql
```

Or use the [Supabase CLI](https://supabase.com/docs/guides/cli) if you have it configured locally.

**4. Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/                    # Next.js App Router pages and layouts
  globals.css           # Global styles and CSS custom properties
components/
  layout/               # Navbar, Footer
  sections/             # Page section components
  icons/                # SVG icon components
lib/
  sanity/               # Sanity client and query helpers
  data.ts               # Static navigation and link data
public/
  images/               # Photography and page-specific images
  icons/                # SVG logomarks and UI icons
  logomarks/            # Brand logo files
  global/               # Shared assets used across pages (CTA, footer)
sanity/
  schemas/              # Sanity content schemas (news, careers)
supabase/
  migrations/           # Database migration SQL files
```

---

## CMS (Sanity)

The Sanity Studio is embedded at `/studio` and manages:

- **News & Media** — articles, publication dates, and inline images
- **Careers** — job listings with department, location, and description

Access the studio at `https://yourdomain.com/studio` after deployment. Log in with a Sanity user account that has editor access to the project.

---

## Deployment

The site is configured for deployment on Vercel.

**1.** Connect the repository to a Vercel project.

**2.** Add all environment variables from `.env.example` in the Vercel project settings under *Settings > Environment Variables*. Apply them to Production, Preview, and Development environments as appropriate.

**3.** Deploy. Vercel detects Next.js automatically — no additional build configuration is required.

**Domain:** Assign your domain in *Vercel > Settings > Domains* and update your DNS records accordingly.

---

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Yes | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Yes | Sanity dataset (e.g. `production`) |
| `SANITY_API_TOKEN` | Yes | Sanity read API token |
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Supabase service role key (server-side only, never expose to client) |
| `RESEND_API_KEY` | Yes | Resend API key for email delivery |
| `PITCH_FORM_FROM_EMAIL` | Yes | Verified sender address for pitch notifications |
| `PITCH_FORM_TO_EMAIL` | Yes | Internal recipient for pitch form submissions |
| `NEXT_PUBLIC_SITE_URL` | No | Production URL (e.g. `https://mssinvestmentsholding.com`) — used for Open Graph and share links |

---

## Support

For technical queries related to this project, contact HiPortfolio at [hiportfolio.co@gmail.com](mailto:hiportfolio.co@gmail.com).
