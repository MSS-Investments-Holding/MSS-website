# Design Tokens — MSS Investments Holding

> Extracted from Figma file `Z93tjoEwFle6ES0irBFQy3` via REST API on 2026-04-29.
> Colour node: `244-5305` · Typography node: `244-5346`
>

---

## Colour Tokens

### Brand Palette

| Token Name | CSS Variable | Hex | RGB | Usage |
|---|---|---|---|---|
| `color-brand-navy` | `--color-brand-navy` | `#0B1738` | 11, 23, 56 | Primary brand — hero backgrounds, nav, dark sections |
| `color-brand-silver` | `--color-brand-silver` | `#BDCADB` | 189, 202, 219 | Secondary brand — subtle accents, borders on dark |
| `color-brand-warm` | `--color-brand-warm` | `#F5E9DC` | 245, 233, 220 | Warm accent — section backgrounds, card tints |

### Greys

| Token Name | CSS Variable | Hex | RGB | Usage |
|---|---|---|---|---|
| `color-grey-200` | `--color-grey-200` | `#E8E9EB` | 232, 233, 235 | Dividers, card borders, subtle separators |
| `color-grey-400` | `--color-grey-400` | `#AEB0B3` | 174, 176, 179 | Placeholder text, disabled states |
| `color-grey-500` | `--color-grey-500` | `#67686B` | 103, 104, 107 | Secondary body text, captions, metadata |
| `color-grey-black` | `--color-grey-black` | `#1C1C1F` | 28, 28, 31 | Primary text colour |

### Neutrals

| Token Name | CSS Variable | Hex | RGB | Usage |
|---|---|---|---|---|
| `color-neutral-100` | `--color-neutral-100` | `#F0F2F5` | 240, 242, 245 | Page background, light section fills |
| `color-neutral-300` | `--color-neutral-300` | `#D2D5D9` | 210, 213, 217 | Borders, input outlines |
| `color-neutral-600` | `--color-neutral-600` | `#373738` | 55, 55, 56 | Dark body text alternative |
| `color-white` | `--color-white` | `#FFFFFF` | 255, 255, 255 | Primary background, text on dark |

### Semantic Aliases

Map these to the raw values above. Use semantic tokens in all component code — never reference raw palette tokens directly in components.

| Semantic Token | CSS Variable | Maps To | Usage |
|---|---|---|---|
| `color-primary` | `--color-primary` | `--color-brand-navy` (`#0B1738`) | Primary CTA backgrounds, header, hero sections |
| `color-background` | `--color-background` | `--color-white` (`#FFFFFF`) | Default page background |
| `color-surface` | `--color-surface` | `--color-neutral-100` (`#F0F2F5`) | Card backgrounds, alternate section fills |
| `color-surface-warm` | `--color-surface-warm` | `--color-brand-warm` (`#F5E9DC`) | Warm section backgrounds |
| `color-border` | `--color-border` | `--color-grey-200` (`#E8E9EB`) | Default borders and dividers |
| `color-border-medium` | `--color-border-medium` | `--color-neutral-300` (`#D2D5D9`) | Input borders, stronger dividers |
| `color-text-primary` | `--color-text-primary` | `--color-grey-black` (`#1C1C1F`) | All primary body and heading text on light bg |
| `color-text-secondary` | `--color-text-secondary` | `--color-grey-500` (`#67686B`) | Captions, metadata, secondary labels |
| `color-text-muted` | `--color-text-muted` | `--color-grey-400` (`#AEB0B3`) | Placeholder text, disabled labels |
| `color-text-inverse` | `--color-text-inverse` | `--color-white` (`#FFFFFF`) | Text on dark/navy backgrounds |
| `color-accent` | `--color-accent` | `--color-brand-silver` (`#BDCADB`) | Accent elements on dark sections |

---

## Typography Tokens

### Font Families

| Role | Font | Weight | Weight Name | Usage |
|---|---|---|---|---|
| Headings | **Merriweather** | 300 | Light | All H1–H6 headings |
| Body / UI | **Inter** | 400 | Regular | Body copy, labels, UI text |

**Source:** Google Fonts (both available). Load both via `next/font/google`.

---

### Desktop Type Scale

All heading styles use **Merriweather Light (300)**. All body styles use **Inter Regular (400)**.

| Token Name | Element | Font | Weight | Size | Line Height | Letter Spacing | When to Use |
|---|---|---|---|---|---|---|---|
| `text-h1` | H1 | Merriweather | 300 | 72px / 4.5rem | 76px | 0 | Hero headlines |
| `text-h2` | H2 | Merriweather | 300 | 48px / 3rem | 52px | 0 | Page-level section headers |
| `text-h3` | H3 | Merriweather | 300 | 36px / 2.25rem | 42px | 0 | Sub-section headers |
| `text-h4` | H4 | Merriweather | 300 | 26px / 1.625rem | 32px | 0 | Card titles, callout heads |
| `text-h5` | H5 | Merriweather | 300 | 20px / 1.25rem | 26px | 0 | Small headers, sidebar titles |
| `text-h6` | H6 | Merriweather | 300 | 16px / 1rem | 22px | 0 | Fine-grain headings, list titles |
| `text-body-lg` | p (large) | Inter | 400 | 18px / 1.125rem | 28px | -1% (≈ -0.18px) | Lead paragraphs, intro text |
| `text-body-sm` | p (small) | Inter | 400 | 15px / 0.9375rem | 22px | 0 | Standard body copy |
| `text-label` | label / span | Inter | 400 | 12px / 0.75rem | 16px | +6% (≈ +0.72px) | Tags, categories, overlines, button labels — **always `text-transform: uppercase`** (confirmed via Figma `textCase: UPPER` on node 242:4822) |

---

### Mobile Type Scale

**Status: CONFIRMED** — Extracted from Figma node `244-5346` on 2026-04-29. All values are final and in production.

| Token | Desktop Size | Desktop LH | Mobile Size | Mobile LH | LS |
|---|---|---|---|---|---|
| `text-h1` | 72px / 4.5rem | 76px | 52px / 3.25rem | 56px | 0 |
| `text-h2` | 48px / 3rem | 52px | 36px / 2.25rem | 40px | 0 |
| `text-h3` | 36px / 2.25rem | 42px | 28px / 1.75rem | 34px | 0 |
| `text-h4` | 26px / 1.625rem | 32px | 22px / 1.375rem | 28px | 0 |
| `text-h5` | 20px / 1.25rem | 26px | 18px / 1.125rem | 24px | 0 |
| `text-h6` | 16px / 1rem | 22px | 14px / 0.875rem | 20px | 0 |
| `text-body-lg` | 18px / 1.125rem | 28px | 17px / 1.0625rem | 26px | −1% |
| `text-body-sm` | 15px / 0.9375rem | 22px | 14px / 0.875rem | 20px | 0 |
| `text-label` | 12px / 0.75rem | 16px | 12px / 0.75rem | 16px | +6% |

---

## Font Loading Strategy

Both fonts loaded via `next/font/google` in `app/layout.tsx`:

```tsx
import { Merriweather, Inter } from 'next/font/google'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-merriweather',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
  display: 'swap',
})

// Apply to <html> in layout.tsx:
// className={`${merriweather.variable} ${inter.variable}`}
```

---

## CSS Custom Properties

Add to `app/globals.css` inside `:root {}`:

```css
:root {
  /* Brand palette */
  --color-brand-navy: #0B1738;
  --color-brand-silver: #BDCADB;
  --color-brand-warm: #F5E9DC;

  /* Greys */
  --color-grey-200: #E8E9EB;
  --color-grey-400: #AEB0B3;
  --color-grey-500: #67686B;
  --color-grey-black: #1C1C1F;

  /* Neutrals */
  --color-neutral-100: #F0F2F5;
  --color-neutral-300: #D2D5D9;
  --color-neutral-600: #373738;
  --color-white: #FFFFFF;

  /* Semantic aliases */
  --color-primary: var(--color-brand-navy);
  --color-background: var(--color-white);
  --color-surface: var(--color-neutral-100);
  --color-surface-warm: var(--color-brand-warm);
  --color-border: var(--color-grey-200);
  --color-border-medium: var(--color-neutral-300);
  --color-text-primary: var(--color-grey-black);
  --color-text-secondary: var(--color-grey-500);
  --color-text-muted: var(--color-grey-400);
  --color-text-inverse: var(--color-white);
  --color-accent: var(--color-brand-silver);

  /* Fonts */
  --font-heading: var(--font-merriweather), Georgia, serif;
  --font-body: var(--font-inter), system-ui, sans-serif;
}
```

---

## Tailwind Config Mapping

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand
        'brand-navy': '#0B1738',
        'brand-silver': '#BDCADB',
        'brand-warm': '#F5E9DC',
        // Greys
        'grey-200': '#E8E9EB',
        'grey-400': '#AEB0B3',
        'grey-500': '#67686B',
        'grey-black': '#1C1C1F',
        // Neutrals
        'neutral-100': '#F0F2F5',
        'neutral-300': '#D2D5D9',
        'neutral-600': '#373738',
        // Semantic (use these in components)
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-warm': 'var(--color-surface-warm)',
        border: 'var(--color-border)',
        'border-medium': 'var(--color-border-medium)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'text-inverse': 'var(--color-text-inverse)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        heading: ['var(--font-merriweather)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['4.5rem', { lineHeight: '76px', letterSpacing: '0' }],          // 72px
        'h2': ['3rem', { lineHeight: '52px', letterSpacing: '0' }],            // 48px
        'h3': ['2.25rem', { lineHeight: '42px', letterSpacing: '0' }],        // 36px
        'h4': ['1.625rem', { lineHeight: '32px', letterSpacing: '0' }],       // 26px
        'h5': ['1.25rem', { lineHeight: '26px', letterSpacing: '0' }],        // 20px
        'h6': ['1rem', { lineHeight: '22px', letterSpacing: '0' }],           // 16px
        'body-lg': ['1.125rem', { lineHeight: '28px', letterSpacing: '-0.18px' }], // 18px
        'body-sm': ['0.9375rem', { lineHeight: '22px', letterSpacing: '0' }], // 15px
        'label': ['0.75rem', { lineHeight: '16px', letterSpacing: '0.72px' }], // 12px
      },
      maxWidth: {
        site: '1440px',
        content: '1280px',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## Usage Rules

1. **Semantic tokens in components** — always use `text-primary`, `bg-surface` etc. in component code. Raw palette tokens (`brand-navy`, `grey-200`) are only referenced in `globals.css` to define the semantic aliases.
2. **Headings always use `font-heading`** — `Merriweather Light` at all times. Never use Inter for a heading.
3. **Body and UI always use `font-body`** — Inter Regular for all prose, labels, buttons, and navigation.
4. **No weight variants yet** — only Merriweather 300 and Inter 400 are loaded. Don't add weight variants without adding them to the font loader first.
5. **Letter spacing on labels** — `text-label` has a positive letter-spacing (`+0.72px`). This is intentional for overlines and category tags — do not override it.
6. **Mobile placeholders** — all mobile sizes above are interim. Mark with `/* TODO: replace with finalised mobile token */` and replace when the designer delivers the mobile type scale.
7. **Portable Text styles** — define `portableTextComponents` in `lib/sanity/portableText.tsx` mapping block types to these token classes. Never write raw `<p>` tags with hardcoded font sizes.
