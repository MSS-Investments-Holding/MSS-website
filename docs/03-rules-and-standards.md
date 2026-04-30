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
- [ ] No horizontal scroll at any breakpoint
- [ ] Mobile type scale: if mobile token values are not yet in Figma, a sensible default is used and flagged with a `/* TODO: replace with finalised mobile token */` comment

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

## Responsiveness Rules

| Breakpoint | Viewport | Tailwind prefix | Role |
|---|---|---|---|
| Mobile | 375px | (default — no prefix) | Primary design target for mobile |
| Tablet | 768px | `md:` | Tablet layout transitions |
| Intermediate | 1024px | `lg:` | Switch to desktop column structure; **proportional units only** |
| Desktop | 1280px | `xl:` | Apply Figma-exact pixel values |
| Wide | 1440px+ | within `xl:` | Figma design target; content capped at 1280px, centred |

> **Critical — the Figma/Tailwind gap:** The Figma is designed at 1440px. Tailwind's `lg:` fires at 1024px. There is a 416px gap where fixed Figma pixel values will break. Every time you use a pixel value from Figma, decide which breakpoint it belongs to:
> - **`lg:`** — switch layout structure (columns vs stacked), use `%`, `clamp()`, or flex ratios. Never use raw Figma px here.
> - **`xl:`** — apply Figma-exact pixel values (fixed column widths, exact paddings, hardcoded offsets).
> - `clamp()` and `max-width` caps are safe at any breakpoint.
> - If a Figma value is a layout dimension (column width, inner padding), convert to a proportional `%` at `lg:` and defer the exact px to `xl:`.

### Layout implementation rules (learned from homepage)

- **Proportional column widths at lg:** Column widths must be percentages at `lg:`, not fixed px. E.g. a 526px column in a 1280px content area is `lg:w-[41%]`, not `lg:w-[526px]`.
- **Exact Figma px at xl only:** Inner paddings like 154px, fixed data-column widths like 352px go on `xl:`, e.g. `lg:pl-8 xl:pl-[154px]`.
- **Shrinkable fixed-width flex children:** If a flex child must be a specific max width, use `flex: 0 1 Xpx` + `minWidth: 0` (shrinkable) — never `width: Xpx` + `flex-shrink-0` with a Figma px value.
- **No standalone spacer divs for height:** Use `min-height` on the container to accommodate absolutely-positioned children. A sibling spacer div stacks in flow and doubles the height.
- **Clear `w-full` before using flex-basis:** Flex children that use `flex-basis` should also have `sm:w-auto` to prevent `width: 100%` from conflicting with the flex algorithm.
- **Hardcoded widths inside proportional columns:** Any fixed-width element (e.g. a `312px` divider) inside a proportional flex column must use `max-width: Xpx` + `width: 100%`, not `width: Xpx` alone.
- **`overflow-x: hidden` on body:** Required baseline — prevents horizontal scroll from creating a wider scroll-width that makes `w-full` background images appear clipped.

- **Max content width:** Section padding: `px-5` (mobile) `md:px-10` (tablet) `lg:px-20` (desktop). No additional max-width wrapper needed.
- **Mobile type scale:** Until Figma finalises mobile tokens, use sensible step-down ratios (desktop H1 → mobile H1 at ~70%) and mark with `/* TODO */`
- **Touch targets:** All interactive elements ≥ 44×44px on mobile
- **Navigation:** Mobile nav must be a hamburger/drawer pattern — never a horizontal bar at 375px

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
