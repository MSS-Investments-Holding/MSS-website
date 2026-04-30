# MSS Investments Holding — Project Briefing for Claude

## Before You Do Anything

Read the relevant docs files before executing any task. The `docs/` folder is the single source of truth for this project. **Minimum required reading before any task:** `docs/03-rules-and-standards.md`. For UI work, also read `docs/05-design-tokens.md` and pull Figma context for the specific node before writing a single line of markup.

## Docs Index

| File | What It Covers | Read It When |
|---|---|---|
| `docs/01-brand-overview.md` | Brand identity, personas, tone of voice, competitive positioning | Writing copy, making design decisions, onboarding to the project |
| `docs/02-architecture.md` | Tech stack, folder structure, data model, env vars, deployment | Starting any development task, setting up the project, adding integrations |
| `docs/03-rules-and-standards.md` | Validation checklist, code quality rules, responsiveness, accessibility, SEO | Before marking any task done — this is the gate |
| `docs/04-execution-plan.md` | Project phases, task lists, success criteria, definition of done | Planning work, checking what's next, estimating scope |
| `docs/05-design-tokens.md` | Colour tokens, typography scale, CSS variables, Tailwind config mapping | Any UI implementation task |

## Project Snapshot

**Brand:** MSS Investments Holding — a global holding company backing businesses and platforms shaping modern economies, with interests in payments, financial services, AI, technology, digital asset infrastructure, and venture.

**Stack:** Next.js 14+ (App Router) · TypeScript (strict) · Tailwind CSS · *[ASSUMED: Sanity CMS — not yet confirmed by client]* · Vercel deployment · Git-based workflow

**Fonts:** **Merriweather Light (300)** for all headings · **Inter Regular (400)** for all body/UI · Both via `next/font/google`. Desktop scale confirmed. Mobile/tablet scale pending Figma update.

**Colours:** 3 groups confirmed. Brand: Navy `#0B1738` · Silver `#BDCADB` · Warm Beige `#F5E9DC`. Greys: `#1C1C1F` (Black) · `#67686B` (500) · `#E8E9EB` (200). Neutrals: `#F0F2F5`–`#373738` scale + `#FFFFFF`. Full semantic mapping in `docs/05-design-tokens.md`.

**Pages (current working sitemap):**
- Home
- About Us
- What We Do / Investments
- Portfolio
- News & Media
- Pitch to Us
- Chairman's Message
- Legal
- Careers

**Primary personas:** Investors · Strategic Partners · Founders / Venture Opportunities · Institutional Stakeholders

**Client technical ability:** *[ASSUMED: non-technical — client should be able to manage content without touching code once CMS is set up]*

**Domain:** Not yet assigned · Deployment target: Vercel

**Figma file:** `MSS — Website Design` · Key: `Z93tjoEwFle6ES0irBFQy3` · Authenticated account: `brio.org@gmail.com`

## Standing Rules

1. **Figma is law** — pull design context from the relevant Figma node before implementing any UI component or page. Never guess spacing, colour, or type.
2. **Mobile first** — 375px is the primary viewport. Build up with `md:` (768px), `lg:` (1024px — layout structure only, proportional units), and `xl:` (1280px — Figma-exact px values). The Figma design targets 1440px but Tailwind's `lg:` fires at 1024px — never apply raw Figma pixel values at `lg:`, only at `xl:`. See `docs/03-rules-and-standards.md` Responsiveness Rules for the full breakdown.
3. **Tokens only** — no hardcoded hex values, arbitrary `px` sizes, or magic numbers anywhere in the codebase. All values must reference a CSS custom property or Tailwind token.
4. **TypeScript strict** — no `any`, no `@ts-ignore` without a written justification comment explaining why.
5. **Validation loop** — every task must pass the checklist in `docs/03-rules-and-standards.md` before being marked done. No exceptions.
6. **No new colours or type styles without sign-off** — if a design gap appears, flag it and ask before improvising.
7. **Client-facing content must be editable without code** — once CMS is confirmed, all copy, portfolio entries, news articles, team members, and page metadata go through the CMS.
8. **No layout shift** — images must always have explicit dimensions or aspect-ratio containers. Font loading must use `font-display: swap`.
9. **Performance first** — the site's credibility depends on it loading fast. No unoptimised images, no render-blocking scripts, no unnecessary client components.
10. **Institutional tone** — all copy must be measured, authoritative, and free of casual language. Refer to `docs/01-brand-overview.md` tone-of-voice section.

## Figma File

**File name:** MSS — Website Design
**File key:** `Z93tjoEwFle6ES0irBFQy3`
**Authenticated account:** `brio.org@gmail.com`

**Known node IDs:**
| Node | Purpose |
|---|---|
| `18-7` | Sitemap |
| `242-4783` | Homepage — most current design iteration (use this for homepage implementation) |
| `244-5305` | Colour styles / palette |
| `244-5346` | Typography styles |
| `1-7` | Research page — client references, old website versions, strategic direction |

**Access note:** Figma files require desktop app or authenticated browser session. WebFetch cannot access them. Open in Figma desktop using the account above before any UI task.
