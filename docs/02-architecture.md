# Architecture — MSS Investments Holding

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| **Framework** | Next.js 14+ (App Router) | SSG/ISR for marketing pages; SSR where needed |
| **Language** | TypeScript (strict mode) | `strict: true` in tsconfig, no `any` |
| **Styling** | Tailwind CSS v3 | Custom token config; no inline style props |
| **CMS** | *[ASSUMED: Sanity v3 — not yet confirmed]* | For news, portfolio entries, careers, and page metadata |
| **Deployment** | Vercel | Preview deployments per branch; production on main |
| **Version Control** | Git (GitHub) | Branch strategy: `main` = production, `dev` = staging, feature branches for tasks |
| **Package Manager** | *[ASSUMED: pnpm]* | Faster installs, strict hoisting |
| **Linting** | ESLint + Prettier | Enforced on commit via husky + lint-staged |

## Folder Structure

```
mss-website/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # Route group — all public-facing pages
│   │   ├── page.tsx              # Home
│   │   ├── about/page.tsx        # About Us
│   │   ├── investments/page.tsx  # What We Do / Investments
│   │   ├── portfolio/
│   │   │   ├── page.tsx          # Portfolio index
│   │   │   └── [slug]/page.tsx   # Individual portfolio entry
│   │   ├── news/
│   │   │   ├── page.tsx          # News & Media index
│   │   │   └── [slug]/page.tsx   # Individual article
│   │   ├── pitch/page.tsx        # Pitch to Us
│   │   ├── chairman/page.tsx     # Chairman's Message
│   │   ├── legal/page.tsx        # Legal
│   │   └── careers/
│   │       ├── page.tsx          # Careers index
│   │       └── [slug]/page.tsx   # Individual role (if needed)
│   ├── api/                      # API routes (contact form, pitch submission)
│   │   └── contact/route.ts
│   ├── layout.tsx                # Root layout — fonts, metadata, nav, footer
│   ├── globals.css               # CSS custom properties + Tailwind base
│   └── not-found.tsx
├── components/
│   ├── ui/                       # Primitive components (Button, Badge, Tag)
│   ├── layout/                   # Header, Footer, Navigation
│   ├── sections/                 # Page-level section components (Hero, PortfolioGrid, etc.)
│   └── [feature]/                # Feature-specific components (NewsCard, TeamMember, etc.)
├── lib/
│   ├── sanity/                   # Sanity client, queries, types
│   │   ├── client.ts
│   │   ├── queries.ts
│   │   └── types.ts
│   ├── utils.ts                  # Shared utility functions
│   └── constants.ts              # Site-wide constants (nav links, social links, etc.)
├── public/
│   ├── fonts/                    # Self-hosted font files (if applicable)
│   └── images/                   # Static assets (logo, og-image, etc.)
├── styles/                       # Token overrides if not using globals.css
├── sanity/                       # [ASSUMED] Sanity Studio config (co-located)
│   ├── schemas/
│   └── sanity.config.ts
├── .env.local                    # Local secrets — never committed
├── .env.example                  # Template with variable names, no values
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── CLAUDE.md
└── docs/
```

## CMS Setup — *[ASSUMED: Sanity v3]*

*Note: CMS choice is not yet confirmed by client. Sanity is assumed based on project profile (corporate site, manageable content types, Next.js native integration). Validate before scaffolding.*

**Content types (schemas) needed:**

| Schema | Fields | Managed by client? |
|---|---|---|
| `portfolioCompany` | name, slug, logo, sector, description, website, featured | Yes |
| `newsArticle` | title, slug, publishedAt, excerpt, body (Portable Text), category, externalUrl | Yes |
| `careerRole` | title, slug, location, type, description, applicationUrl, active | Yes |
| `teamMember` | name, role, bio, photo, order | Yes |
| `siteSettings` | siteName, defaultOgImage, contactEmail, socialLinks | Yes |
| `legalPage` | title, body (Portable Text), lastUpdated | Yes |

**Sanity Studio:** Embedded at `/studio` route or as a separate Vercel deployment. *[ASSUMED: co-located for simplicity; revisit if client needs a separate CMS login URL.]*

## Data Model — Key Entities

```
PortfolioCompany
  id: string
  name: string
  slug: string
  logo: Image
  sector: 'payments' | 'financial-services' | 'ai-technology' | 'digital-assets' | 'venture'
  description: string
  website?: string
  featured: boolean

NewsArticle
  id: string
  title: string
  slug: string
  publishedAt: Date
  excerpt: string
  body: PortableText
  category: 'press-release' | 'news' | 'announcement'
  externalUrl?: string   // if pointing to external coverage

CareerRole
  id: string
  title: string
  slug: string
  location: string
  type: 'full-time' | 'part-time' | 'contract'
  department: string
  description: PortableText
  applicationUrl: string
  active: boolean
```

## Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID (public — safe for browser) |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name (usually `production`) |
| `SANITY_API_TOKEN` | Read/write token for server-side Sanity queries |
| `SANITY_WEBHOOK_SECRET` | Secret for on-demand ISR revalidation webhook |
| `CONTACT_FORM_EMAIL` | Destination email for contact/pitch form submissions |
| `RESEND_API_KEY` | *[ASSUMED]* Email sending service for form submissions |

**Never commit actual values.** Store in `.env.local` locally and in Vercel project settings for deployments. `.env.example` lists all variable names with placeholder values only.

## Data Fetching Patterns

- **Static pages with no dynamic content** (About, Chairman's Message, Legal, Investments) → fully static (`generateStaticParams` + no revalidation needed)
- **CMS-driven pages** (Portfolio, News, Careers) → ISR with `revalidate: 60` (60 seconds) or on-demand revalidation via Sanity webhook
- **Dynamic routes** (`/portfolio/[slug]`, `/news/[slug]`) → `generateStaticParams` at build time + ISR fallback for new entries
- **Contact / Pitch form** → Server Action or API route, no client-side fetch

## Deployment Pipeline

```
git push → GitHub
  → Vercel (automatic)
      ├── Preview deploy (every branch/PR)
      └── Production deploy (main branch only)
```

- **Environment:** `dev` branch maps to a staging Vercel environment; `main` maps to production
- **Domain:** Not yet assigned. *[ASSUMED: client will provide domain; configure custom domain in Vercel once available]*
- **Build command:** `pnpm build`
- **Output directory:** `.next` (Vercel handles automatically)

## Caching & Revalidation Strategy

| Content Type | Strategy | Revalidation Trigger |
|---|---|---|
| Static pages | Full static generation | Rebuild on deploy |
| Portfolio index | ISR `revalidate: 60` | Sanity webhook on publish |
| Portfolio `[slug]` | ISR `revalidate: 60` | Sanity webhook on publish |
| News index | ISR `revalidate: 60` | Sanity webhook on publish |
| News `[slug]` | ISR `revalidate: 60` | Sanity webhook on publish |
| Careers | ISR `revalidate: 300` | Manual rebuild or Sanity webhook |

On-demand revalidation uses Next.js `revalidateTag()` triggered by a Sanity GROQ-powered webhook hitting `/api/revalidate`.

## Next.js Config Notes

- **Image domains:** Configure `next.config.ts` to allow Sanity CDN (`cdn.sanity.io`) and any other image sources
- **Strict mode:** `reactStrictMode: true`
- **Trailing slash:** `trailingSlash: false` (Vercel default)
- **Bundle analysis:** Add `@next/bundle-analyzer` for periodic auditing
