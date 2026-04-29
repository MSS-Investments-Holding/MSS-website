# Execution Plan — MSS Investments Holding

## Overview

The project is a corporate informational website with a structured content model, static-first architecture, and CMS-managed dynamic sections. The plan is organised into five phases: Foundation, Static UI, CMS & Dynamic Content, Integrations & Polish, and Launch.

---

## Phase 1 — Foundation

**Goal:** Repo is initialised, tooling is configured, token system is in place, and the team can start building components without decisions blocking them.

### Tasks

- [ ] Initialise Next.js 14+ project with App Router, TypeScript strict mode, Tailwind CSS
- [ ] Configure `tailwind.config.ts` with colour tokens, typography scale, and spacing from `docs/05-design-tokens.md` (update as Figma tokens are confirmed)
- [ ] Set up `globals.css` with CSS custom properties for all design tokens
- [ ] Configure ESLint (Next.js ruleset + `@typescript-eslint/strict`) and Prettier
- [ ] Set up husky + lint-staged: ESLint + Prettier on pre-commit
- [ ] Install and configure `clsx` + `tailwind-merge` for class composition utility (`cn()`)
- [ ] Set up `next.config.ts`: strict mode, image domains (Sanity CDN), CSP headers
- [ ] Set up `.env.example` with all variable names from `docs/02-architecture.md`
- [ ] Create root `layout.tsx`: font loading (preload, `font-display: swap`), global metadata, skip-to-content link
- [ ] Create placeholder `not-found.tsx`
- [ ] Create `lib/constants.ts`: nav links, social links, site name
- [ ] Connect to GitHub repo; configure Vercel project with preview and production environments
- [ ] Set up environment variables in Vercel (staging and production)

### Success Criteria
- `pnpm dev` runs without errors
- `pnpm build` completes without TypeScript or lint errors
- Tailwind token classes work (spot-check a few colours and font sizes in a test component)
- Vercel preview deploy is live on a `dev` push

### Definition of Done
Foundation phase is done when: a clean build deploys to Vercel, all tooling is configured and enforced on commit, and the token system reflects the confirmed design tokens from Figma.

---

## Phase 2 — Static UI

**Goal:** All pages are built as static components matching the Figma design at all three breakpoints. No real data yet — use static props and placeholder content.

### Tasks

#### Layout Components
- [ ] `Header` / `Navigation` — desktop nav + mobile hamburger/drawer
- [ ] `Footer` — links, legal line, social icons
- [ ] Page wrapper with max-width container and responsive padding

#### Home Page (node `242-4783`)
- [ ] Hero section — headline, sub-headline, CTA(s)
- [ ] Investment verticals / "What We Do" overview section
- [ ] Featured portfolio teaser
- [ ] News / media teaser (latest 2–3 items)
- [ ] CTA section — Pitch to Us or Contact

#### About Us Page
- [ ] Brand statement / mission section
- [ ] Leadership / team section (TeamMember cards)
- [ ] Company history or milestones (if in Figma)

#### What We Do / Investments Page
- [ ] Investment thesis overview
- [ ] Five verticals detailed section (Payments, Financial Services, AI & Tech, Digital Assets, Venture)
- [ ] Supporting visuals or icons per vertical

#### Portfolio Page
- [ ] Portfolio grid (static data first — swap for CMS in Phase 3)
- [ ] Filter by sector (static implementation)
- [ ] Portfolio company card component

#### Portfolio `[slug]` Page
- [ ] Individual company detail layout (if in Figma; else flag)

#### News & Media Page
- [ ] Article grid / list
- [ ] Category filter
- [ ] NewsCard component

#### News `[slug]` Page
- [ ] Article detail layout (Portable Text renderer styles)

#### Pitch to Us Page
- [ ] Process / criteria section
- [ ] Contact / submission form (non-functional in this phase — UI only)

#### Chairman's Message Page
- [ ] Full-width editorial layout — photo, message body, signature

#### Legal Page
- [ ] Clean Portable Text layout for policy content

#### Careers Page
- [ ] Roles list / grid
- [ ] Role card component

#### Careers `[slug]` Page
- [ ] Role detail + apply link

### Success Criteria
- All pages render at 375px, 768px, and 1440px without layout breaks
- All pages match Figma at desktop viewport (primary design breakpoint)
- No hardcoded values — all colours, sizes, and spacing via tokens
- TypeScript and ESLint pass on `pnpm build`
- Vercel preview deploy shows all pages

### Definition of Done
Every page listed above is implemented, passes the full validation loop in `docs/03-rules-and-standards.md`, and the build deploys cleanly.

---

## Phase 3 — CMS & Dynamic Content

**Goal:** Replace all static placeholder data with live CMS-managed content. Client can update portfolio, news, careers, and settings without touching code.

### Tasks

- [ ] Confirm CMS choice with client (*[ASSUMED: Sanity v3]*)
- [ ] Set up Sanity project and dataset
- [ ] Define all schemas per `docs/02-architecture.md`: `portfolioCompany`, `newsArticle`, `careerRole`, `teamMember`, `siteSettings`, `legalPage`
- [ ] Configure Sanity Studio (embedded at `/studio` or separate deployment)
- [ ] Set up `lib/sanity/client.ts`, `queries.ts`, `types.ts`
- [ ] Wire Portfolio page + `[slug]` to Sanity
- [ ] Wire News page + `[slug]` to Sanity
- [ ] Wire Careers page + `[slug]` to Sanity
- [ ] Wire team members on About Us to Sanity
- [ ] Wire Legal page content to Sanity
- [ ] Configure ISR with `revalidate` per `docs/02-architecture.md`
- [ ] Set up Sanity webhook → `/api/revalidate` for on-demand ISR
- [ ] Seed Sanity with initial content (portfolio companies, at least 1 news article, at least 1 career role)
- [ ] Test: publish a new Sanity entry, verify site reflects it within revalidation window

### Success Criteria
- Client can log into Sanity Studio and create/edit/publish entries
- Portfolio, News, and Careers pages reflect Sanity content within revalidation window
- Build passes with real data (no type errors on Sanity response shapes)

### Definition of Done
All CMS-driven pages are live with real content, ISR revalidation is confirmed working end-to-end, and client has been walked through how to manage content in Sanity.

---

## Phase 4 — Integrations & Polish

**Goal:** Forms work, SEO is complete, performance is optimised, accessibility is verified, and the site is ready for a stakeholder review.

### Tasks

#### Forms
- [ ] Contact / Pitch form: server action or API route with Zod validation, rate limiting, honeypot
- [ ] Email delivery (Resend or equivalent) — confirmation to sender, notification to MSS
- [ ] Form success / error states styled

#### SEO
- [ ] `generateMetadata` implemented on every page with unique title + description
- [ ] Open Graph tags on every page
- [ ] `Organization` structured data on homepage
- [ ] `sitemap.xml` generated dynamically (includes CMS-driven pages)
- [ ] `robots.txt` configured (allow public pages, disallow `/studio`, `/api`)

#### Performance
- [ ] All images audited: WebP format, correct sizing, `priority` on above-fold images
- [ ] Fonts confirmed loading with preload + `font-display: swap`
- [ ] Third-party scripts deferred
- [ ] Lighthouse audit: Performance ≥ 90 desktop, ≥ 80 mobile
- [ ] Bundle analysis run; any unexpected large dependencies investigated

#### Accessibility
- [ ] VoiceOver walkthrough of Home, About, Portfolio, and Pitch to Us pages
- [ ] Contrast ratios confirmed on all text/background combinations
- [ ] Keyboard navigation verified on all interactive elements
- [ ] Skip-to-content link verified

#### Polish
- [ ] Scroll-based reveal animations (if in Figma — keep subtle and respect `prefers-reduced-motion`)
- [ ] Hover states on all interactive elements
- [ ] Loading states on form submission
- [ ] Error and empty states on CMS-driven list pages (e.g., no news articles yet)
- [ ] 404 page styled to match brand

#### Mobile Type Scale
- [ ] Once Figma mobile tokens are finalised, replace all `/* TODO */` placeholders with correct values
- [ ] Re-test all pages at 375px

### Success Criteria
- All forms submit successfully and send emails
- Lighthouse scores meet targets
- No WCAG AA failures on key pages
- No `/* TODO */` comments remaining (or all are documented with a known future token)

### Definition of Done
Stakeholder review can be conducted on the Vercel preview URL. All major features work. The site is visually polished and functionally complete.

---

## Phase 5 — Launch

**Goal:** The site is live on the client's domain with production content, monitoring in place, and the client is able to manage it independently.

### Tasks

- [ ] Client provides domain — configure DNS to point to Vercel
- [ ] Configure custom domain in Vercel project; confirm SSL
- [ ] Swap all environment variables to production values
- [ ] Final content pass — all placeholder text replaced with client-approved copy
- [ ] Legal page content reviewed and approved by client
- [ ] Chairman's Message approved by client
- [ ] All team member profiles and photos uploaded to Sanity
- [ ] Portfolio entries reviewed and approved
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Search Console ownership
- [ ] Final Lighthouse audit on production URL
- [ ] Final cross-browser test (Chrome, Safari, Firefox) on production URL
- [ ] Final mobile device test on production URL
- [ ] Confirm Vercel Analytics or equivalent is active (optional but recommended)
- [ ] Handoff session with client: walkthrough of Sanity Studio, how to add news / portfolio / careers
- [ ] Document any future enhancement requests in a separate backlog

### Post-Launch Checklist
- [ ] Monitor Core Web Vitals in Vercel Analytics for first week
- [ ] Confirm contact/pitch form emails are being received
- [ ] Verify no 404s in Google Search Console within first 2 weeks
- [ ] ISR revalidation confirmed working in production (publish a test Sanity entry)

---

## Project Success Definition

The project is successful when:
1. The site is live on the client's domain, loads in under 2.5 seconds on desktop, and passes Lighthouse Performance ≥ 90
2. Every page matches the Figma design at 375px, 768px, and 1440px
3. The client can update portfolio, news, careers, and settings through Sanity Studio without developer involvement
4. The site conveys credibility and institutional trust to its primary personas (investors, strategic partners, founders) within the first 10 seconds of the homepage experience
5. Contact and Pitch to Us forms deliver submissions reliably to the client's inbox
