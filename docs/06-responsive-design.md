# Responsive Design System — MSS Website

> Complete rules, values, breakpoints, and patterns established while making the homepage fully responsive. Apply these to every subsequent page without deviation.

## Breakpoints (Tailwind prefixes)

| Prefix | Min-width | Use |
|--------|-----------|-----|
| (none) | 0px — 639px | Mobile phones |
| `sm:` | 640px | Small tablet / landscape phone |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Desktop — layout structure changes here |
| `xl:` | 1280px | Figma-exact px values |
| (CSS) | 1440px+ | Wide-screen scaling via globals.css |

---

## Global Side Margins (horizontal padding on content sections)

**Pattern:** `px-5 md:px-12 lg:px-20`

| Breakpoint | Class | Value |
|------------|-------|-------|
| Mobile < 768px | `px-5` | 20px |
| Tablet 768–1023px | `md:px-12` | 48px |
| Desktop 1024px+ | `lg:px-20` | 80px |

**Same pattern for dividers/separators:** `mx-5 md:mx-12 lg:mx-20`

### Wide-screen scaling (globals.css override — unlayered CSS wins cascade)
```css
@media (min-width: 1440px) {
  .lg\:px-20 { padding: max(5rem, calc(100vw/3 - 25rem), calc((100vw - 100rem)/2)); }
  .lg\:mx-20 { margin:  max(5rem, calc(100vw/3 - 25rem), calc((100vw - 100rem)/2)); }
  .lg\:mr-20 { margin-right: same formula; }
  .lg\:right-20 { right: same formula; }
}
```

| Viewport | Margin each side | Content width |
|----------|-----------------|---------------|
| 1440px | 80px | 1280px |
| 1920px | 240px | 1440px |
| 2400px | 400px | 1600px (cap) |
| 3840px | 1120px | 1600px (fixed) |

Formula: `max(5rem, calc(100vw / 3 - 25rem), calc((100vw - 100rem) / 2))`
- Content is always ≤ 1600px (100rem) beyond 2400px viewport.

---

## Navbar

| | Mobile < 768px | Desktop 768px+ |
|---|---|---|
| Header height | 72px (`h-[72px]`) | 94px (`md:h-[94px]`) |
| Logo | 42px wide (`w-[42px] h-auto`) | 60px wide (`md:w-[60px]`) |
| Padding | `px-5` (20px) | `md:px-12 lg:px-20` |
| Nav control | MENU text button (54×28px, 12px, rgba(255,255,255,0.10) bg) | Desktop nav pill |

### Mobile Menu Overlay
- Background: `#0B1738` (navy)
- `fixed inset-0 z-50 h-screen overflow-hidden` — exactly viewport height
- Body scroll locked via `document.body.style.overflow = "hidden"` in useEffect
- Top bar: same 72px, logo + "Close" button (58×28px, same style as MENU)
- **80px paddingTop** on nav links container (gap between top bar and first link)
- Links: Merriweather 300, 18px, full-width button for items with dropdowns
- Sub-items: Inter 400, 14px, expandable chevron
- Dividers: `rgba(255,255,255,0.15)` between each item
- EN language selector at bottom
- Items with dropdowns (`hasDropdown: true`): button only, NO page navigation — sub-items navigate
- Items without dropdowns: full-width Link, navigates and closes menu

### Desktop Nav — Dropdown Behaviour
- Items with dropdowns use `<button>` not `<Link>` — hover shows dropdown, clicking does NOT navigate
- Sub-items are the navigable links

---

## Typography — Mobile Scale

Defined in `globals.css` under `@media (max-width: 767px)`:

| Token | Mobile size | Line height |
|-------|-------------|-------------|
| `text-h1` | 48px / 3rem | 54px |
| `text-h2` | 36px / 2.25rem | 40px |
| `text-h3` | 28px / 1.75rem | 34px |
| `text-h4` | 22px / 1.375rem | 28px |
| `text-body-lg` | 17px / 1.0625rem | 26px |
| `text-body-sm` | 14px / 0.875rem | 20px |

**Heading clamp pattern for fluid desktop headings:**
`clamp(1.75rem, 3.2vw, 2.875rem)` → 28px mobile → 46px desktop

**text-wrap: balance** applied globally to `.font-heading` — use `em`-based `maxWidth` when a specific headline needs exactly N lines.

**Button text:** 14px on mobile (fs=14 in Figma mobile). Desktop buttons keep token sizes.

---

## Homepage Section Rules

### Hero
- Container for news articles: `w-[200px] self-end` on mobile (right-aligned, narrow)
- Mobile: show only 1 news article (`idx >= 1 ? "hidden md:flex" : ""`)
- Desktop: 2 articles at 416px right column (`lg:w-[416px]`)

### About the Company (CompanySection)
- Headline column: `w-full md:w-[60%] lg:w-[60%]` — 60% at tablet+
- Content (body+stats+button): `md:w-[70%] md:ml-auto` — 70% right-aligned at tablet
- Stats value font: `clamp(1.5rem, 3.32vw, 2.25rem)` — 34px at 1023px, 36px at desktop
- Desktop: 41% left spacer, content in `flex-1` right column

### Investment Sectors (InvestmentsSection)
- Mobile/tablet: `grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden`
- Desktop: two separate flex rows inside `hidden lg:block`
  - Row 1: 3 cards, `maxWidth: "1280px"`, `flex-grow: 0` (leaves 140px right margin at 1440px)
  - Row 2: ghost (`flex-grow: 1`) + 2 cards, no maxWidth (fills full width, flush right)
  - Card width: `clamp(320px, calc((100% - 48px) / 3), 364px)`, wraps at 320px min
- Header: `flex flex-col md:flex-row md:items-start` — 50/50 from `md`
- How We Invest button: `flex justify-end lg:justify-start` (right on tablet, left on desktop)

### Global Footprint (FootprintSection)
- Section height: `h-[920px] md:h-[766px]` — taller on mobile for globe
- Scroll animation: disabled on mobile via `if (window.innerWidth < 768) return`
- Card padding: `px-5 pt-5` (no bottom padding mobile) → `md:pl-10 md:pt-10 md:pb-10 md:pr-[260px]`
- Globe mobile: below content, 64px gap from button, `height: "200px" overflow: "hidden"` — shows top half only
- Globe tablet+: absolute `right: "-220px"`, `hidden md:block`
- Card margins: `mx-5 md:mx-12 lg:mx-0 lg:ml-[33.3%] lg:mr-20`
- H2 font: `clamp(1.75rem, 3.5vw, 2.25rem)` — 28px mobile, 36px desktop

### News & Media (NewsSection)
- Header: `flex flex-col md:flex-row md:items-start md:gap-10` — 50/50 at `md`
- Articles grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 sm:gap-x-[43px]`
- Column dividers: separate `sm:block lg:hidden` (2-col logic) and `hidden lg:block` (3-col logic)
- Top spacing: `pt-24 md:pt-32 lg:pt-36` (generous gap from Footprint section)

### Portfolio Process (PortfolioProcessSection)
- Portfolio headline H2: `maxWidth: "15em"` to prevent 1-line collapse
- Draggable cards: scrollbar hidden, drag-scroll on desktop

### Footer
**Mobile (< 768px):**
- No absolute image — image in normal flow below links (`md:hidden`, 280px height)
- Copyright below image with `mt-6 pb-10`

**Tablet (768–1023px):**
- Image visible: `hidden md:block right-12 lg:right-20`, `md:min-h-[570px]`
- Left content: `md:pl-12 md:pr-[calc(43.5%_+_72px)]` — dynamic right padding prevents overlap
- Copyright in bottom row: `hidden md:flex justify-end px-12 lg:px-20`

**Desktop (1024px+):**
- Image: `right-20`, 43.5% width, 570px height (absolute)
- 80px footer gap: `mt-20` on `<footer>` — enforced at component level, never add to last section

---

## Key Implementation Rules

1. **Never apply desktop Figma px values at `lg:` breakpoint** — only at `xl:`. Use proportional values at `lg:`.

2. **Padding hierarchy is always `px-5 md:px-12 lg:px-20`** — never skip a breakpoint.

3. **`lg:px-20`, `lg:mx-20` are auto-scaled by globals.css** beyond 1440px — no per-component handling needed.

4. **Footer `mt-20` (80px gap) is owned by the Footer component** — never add bottom padding to the last section on a page.

5. **Two-column side-by-side layout starts at `md:`** for section headers (headline + body text). Use `md:w-1/2` on each.

6. **Width constraints for below-desktop columns:** use `md:w-[X%] md:ml-auto` pattern for right-aligned content at tablet (e.g. 60%, 70%).

7. **`text-wrap: balance` is global on `.font-heading`** — when a specific headline needs forced N-line wrap, use `em`-based `maxWidth` (scales with clamp font-size) and/or an explicit `<br className="hidden lg:block" />`.

8. **Investment cards desktop layout** uses two separate flex containers inside `hidden lg:block` with a mobile/tablet CSS grid as `lg:hidden` fallback.

9. **Scroll-driven animations (FootprintSection, etc.) must check `window.innerWidth < 768`** and exit early to disable on mobile.

10. **Mobile menu**: always `fixed inset-0 h-screen overflow-hidden` — body scroll must be locked when open.
