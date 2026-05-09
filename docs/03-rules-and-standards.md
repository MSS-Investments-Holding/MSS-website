# Rules & Standards — MSS Investments Holding

## The Validation Loop

**Every task — without exception — must pass all items in this checklist before it is marked done.**

### Checklist

#### Figma Fidelity
- [ ] Opened the correct Figma node for this component or page before writing any markup
- [ ] Spacing matches Figma (no eyeballing — use the exact values from Figma as tokens)
- [ ] Colours match Figma tokens exactly — no hardcoded hex values
- [ ] Typography matches Figma style (family, weight, size, line-height, letter-spacing)
- [ ] Component states (hover, active, disabled, focus) match Figma where defined
- [ ] If Figma is ambiguous or missing a state, it is flagged and not guessed

#### Responsiveness
- [ ] Tested at 375px (mobile) — layout does not break, text is readable, tap targets are ≥44px
- [ ] Tested at 768px (tablet) — layout transitions are intentional, not accidental
- [ ] Tested at 1440px (desktop) — matches Figma design at its intended viewport
- [ ] Tested at 1920px+ — margins scale correctly per `docs/06-responsive-design.md`
- [ ] No horizontal scroll at any breakpoint
- [ ] Mobile type scale follows tokens defined in `docs/06-responsive-design.md`

#### Code Quality
- [ ] No `any` in TypeScript — all types are explicit
- [ ] No `@ts-ignore` without a justification comment
- [ ] No hardcoded hex values, px sizes, or magic numbers — tokens only
- [ ] No unused imports, variables, or components
- [ ] ESLint passes with zero errors (warnings reviewed and addressed or documented)
- [ ] Prettier formatting applied
- [ ] No `console.log` statements in production code

#### Design Token Compliance
- [ ] All colours use CSS custom property tokens (e.g., `var(--color-primary)`) or Tailwind token classes
- [ ] All font sizes use the type scale tokens — no `text-[17px]` or equivalent arbitrary values
- [ ] All spacing uses the spacing scale — no arbitrary `mt-[23px]`
- [ ] No inline `style` props that hardcode values

#### Performance
- [ ] All images use `next/image` with explicit `width`, `height`, or `fill` + sized container
- [ ] Images have descriptive `alt` text (empty string only for decorative images)
- [ ] No render-blocking scripts added to `<head>`
- [ ] No unnecessary `"use client"` directives — default to Server Components
- [ ] Web Vitals not visually regressed (check in browser DevTools Lighthouse if making layout changes)

#### Accessibility
- [ ] Interactive elements are keyboard-navigable (Tab, Enter, Space, Escape)
- [ ] Focus styles are visible — not removed with `outline: none` without a replacement
- [ ] All images have appropriate `alt` attributes
- [ ] Heading hierarchy is correct (one `<h1>` per page, logical `h2/h3` nesting)
- [ ] Colour contrast meets WCAG AA minimum (4.5:1 for body text, 3:1 for large text / UI components)
- [ ] ARIA labels used for icon-only buttons and ambiguous interactive elements

#### SEO
- [ ] Page has a `<title>` and `<meta name="description">` via Next.js `generateMetadata`
- [ ] Canonical URL is set
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`) are set
- [ ] Headings contain meaningful, keyword-relevant copy — not placeholder text
- [ ] No `noindex` accidentally applied to production pages

#### Brand Compliance
- [ ] Copy is reviewed against tone-of-voice rules in `docs/01-brand-overview.md`
- [ ] No casual language, contractions in formal sections, or filler phrases
- [ ] No new colours or type styles introduced without sign-off

---

## Code Quality Rules

### TypeScript
- Strict mode is on — honour it
- Define explicit return types on all functions and components
- Use `interface` for object shapes that may be extended; `type` for unions, tuples, and aliases
- Keep types co-located with the file that uses them unless shared across 3+ files (then `lib/types.ts`)
- Zod for runtime validation at API boundaries and form submissions

### Component Rules
- One component per file
- Components are Server Components by default — add `"use client"` only when browser APIs or React hooks are needed
- Props interfaces declared above the component in the same file
- No prop drilling beyond 2 levels — use composition or context
- Prefer named exports over default exports for all components

### File Naming
- Components: `PascalCase.tsx`
- Utilities and hooks: `camelCase.ts`
- Pages: `page.tsx` (Next.js App Router convention)
- Layouts: `layout.tsx`

### Styling Rules
- Tailwind utility classes only — no custom CSS modules unless absolutely necessary (document the reason)
- Responsive prefixes always in `sm:` / `md:` / `lg:` / `xl:` order within a className string
- Conditional classes via `clsx` or `cn()` helper — no string template literals for class toggling
- No `!important` anywhere

---

## Design Fidelity Rules

- **Figma is the source of truth.** If there is a conflict between a Figma value and a token, the Figma value wins — update the token, don't compromise the design.
- **Report discrepancies.** If a Figma design is ambiguous, inconsistent across breakpoints, or missing a state, note it as a comment in the code and raise it in the relevant task thread. Never resolve it silently by guessing.
- **No creative interpretation.** Developers do not make design decisions. Spacing, colour, layout, and component choices all come from Figma. If Figma is silent, ask.
- **Pixel precision matters here.** This is an institutional corporate site. Slight misalignments in a startup MVP are acceptable; on this site they signal unprofessionalism.

---

> **Responsiveness rules have moved.** See `docs/06-responsive-design.md` for the complete, up-to-date responsive system — breakpoints, global margins, wide-screen scaling, navbar rules, and all section-by-section patterns.

---

## Performance Targets

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| FID / INP | < 200ms |
| Lighthouse Performance (desktop) | ≥ 90 |
| Lighthouse Performance (mobile) | ≥ 80 |

- Hero images: use WebP, sized appropriately, `priority` prop on `next/image`
- Fonts: preloaded in `layout.tsx`, `font-display: swap`
- Third-party scripts: deferred or loaded in `afterInteractive` strategy via `next/script`

---

## Security Rules

- All form inputs validated server-side (never trust client-only validation)
- Contact / pitch form: rate-limit API route, honeypot field, server-side Zod schema validation
- No secrets in client-side code — `NEXT_PUBLIC_` prefix only for truly public values
- Content Security Policy headers configured in `next.config.ts`
- No user-generated content rendered as raw HTML

---

## Accessibility Baseline

- WCAG 2.1 AA compliance minimum
- Screen reader testing: VoiceOver (macOS/iOS) for key flows
- All form fields have associated `<label>` elements
- Error messages are programmatically associated with their input (`aria-describedby`)
- Skip-to-content link at top of page

---

## SEO Baseline

- Every page has a unique `<title>` (format: `Page Name | MSS Investments Holding`)
- Every page has a unique `<meta name="description">` (150–160 characters)
- `robots.txt` allows indexing of all public pages; excludes `/studio`, `/api`
- `sitemap.xml` generated dynamically via Next.js and submitted to Google Search Console
- Structured data (`Organization` schema) on homepage
- All internal links use `<Link>` from `next/link` — no `<a href>` for internal navigation

---

## Pre-Shipping Checklist

Before any page or feature goes to production:

- [ ] All validation loop items above pass
- [ ] Cross-browser tested: Chrome, Safari, Firefox (latest)
- [ ] Mobile tested on a real device (not just browser DevTools resize)
- [ ] All CMS-driven content renders correctly with real data, not placeholders
- [ ] 404 page implemented and styled
- [ ] All links (internal and external) verified — no broken links
- [ ] `.env.example` updated if new environment variables were added
- [ ] `CLAUDE.md` and relevant docs updated if architecture or standards changed
- [ ] No `console.log` or debug code in the build
- [ ] Lighthouse audit run on production build — scores meet targets
