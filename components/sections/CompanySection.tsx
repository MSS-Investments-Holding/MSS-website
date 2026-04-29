import Link from "next/link";

/*
 * About section — exact layout from Figma (y=930 to y=1946, height=1016px)
 *
 * LEFT COLUMN (x=80):
 *   y=1026 (96px from section): label "ABOUT THE COMPANY"
 *   y=1066 (136px from section): H2 "At the Intersection of Capital and Opportunity"
 *
 * FULL WIDTH:
 *   y=1211 (281px from section): horizontal separator line
 *
 * RIGHT COLUMN (x=680):
 *   y=1274 (344px from section): body text
 *   y=1554 (624px from section): three stat cards side by side
 *   y=1766 (836px from section): "About Us →" button
 */

const SECTION_TOP = 930; // hero bottom

const stats = [
  {
    value: "$1.5B+",
    label: "Strategic capital across the broader financial ecosystem.",
    bg: "#F5E9DC",
    valueColor: "#1C1C1F",
    labelColor: "#373738",
  },
  {
    value: "7+",
    label: "Ventures operating across emerging, priority sectors.",
    bg: "#0B1738",
    valueColor: "#FFFFFF",
    labelColor: "#E8E9EB",
  },
  {
    value: "200+",
    label: "Collective workforce driving execution across the MSS ecosystem.",
    bg: "#BDCADB",
    valueColor: "#1C1C1F",
    labelColor: "#373738",
  },
];

export default function CompanySection() {
  return (
    <section
      aria-label="About MSS Investments Holding"
      className="relative w-full bg-white"
      style={{ height: `${1946 - SECTION_TOP}px` }} /* 1016px */
    >
      {/* ── LEFT COLUMN ── Label + H2 ───────────────────────────── */}
      <div
        className="absolute"
        style={{ left: "80px", top: `${1026 - SECTION_TOP}px` }} /* top: 96px */
      >
        {/* Label — text-label token: 12px, uppercase, ls=0.72px, color=#373738 */}
        <span
          className="text-label font-body block"
          style={{ color: "#373738" }}
        >
          About the Company
        </span>

        {/* H2 — Merriweather 300 48px/52px, color=#1C1C1F, w=526px */}
        {/* margin:0 resets browser default ~32px top/bottom margins that caused separator collision */}
        {/* marginTop:24px matches Figma gap: label bottom y=1042 → H2 top y=1066 = 24px */}
        <h2
          className="font-heading"
          style={{
            fontSize: "48px",
            lineHeight: "52px",
            fontWeight: 300,
            color: "#1C1C1F",
            width: "526px",
            margin: 0,
            marginTop: "24px",
          }}
        >
          At the Intersection of{" "}
          <br />
          Capital and Opportunity
        </h2>
      </div>

      {/* ── SEPARATOR LINE ── y=1211 → 281px from section top ───── */}
      <div
        className="absolute"
        style={{
          left: "80px",
          top: `${1211 - SECTION_TOP}px`, /* 281px */
          width: "1280px",
          height: "1px",
          backgroundColor: "var(--color-border)", /* #E8E9EB */
        }}
      />

      {/* ── RIGHT COLUMN ── Body text (y=1274 → 344px from top) ─── */}
      <div
        className="absolute"
        style={{
          left: "680px",
          top: `${1274 - SECTION_TOP}px`, /* 344px */
          width: "680px",
        }}
      >
        <p
          className="font-body"
          style={{
            fontSize: "18px",
            lineHeight: "28px",
            letterSpacing: "-0.18px",
            color: "#67686B",
          }}
        >
          We are focused on the technologies transforming the foundations of
          modern economies. We deploy capital with conviction. We build for
          permanence and execute with precision. Our portfolio reflects a
          deliberate investment approach shaped by sector relevance, operational
          depth, and strategic market positioning.
          <br />
          <br />
          With a footprint spanning the UAE, Pakistan, the United Kingdom, and
          surrounding growth markets, MSS brings together businesses aligned
          with the structural shifts redefining how modern economies move,
          transact, and scale.
        </p>
      </div>

      {/* ── STAT CARDS ── y=1554 → 624px from section top ────────── */}
      {/* Cards: 216×156px each, 16px gaps, starting at x=680 */}
      <div
        className="absolute flex"
        style={{
          left: "680px",
          top: `${1554 - SECTION_TOP}px`, /* 624px */
          gap: "16px",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="flex flex-col"
            style={{
              width: "216px",
              height: "156px",
              backgroundColor: stat.bg,
              /* Figma: top=16 right=20 bottom=16 left=20, itemSpacing=16 */
              padding: "16px 20px",
              gap: "16px",
            }}
          >
            {/* Metric — Merriweather 300 36px/42px */}
            <span
              className="font-heading"
              style={{
                fontSize: "36px",
                lineHeight: "42px",
                fontWeight: 300,
                color: stat.valueColor,
                display: "block",
                margin: 0,
              }}
            >
              {stat.value}
            </span>
            {/* Description — Inter 400 15px/22px */}
            <p
              className="font-body"
              style={{
                fontSize: "15px",
                lineHeight: "22px",
                color: stat.labelColor,
                margin: 0,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── "ABOUT US →" BUTTON ── y=1766 → 836px from section top ─ */}
      {/* w=128, h=40, bg=#1C1C1F, Inter 400 16px ls=-0.32px */}
      <Link
        href="/about"
        className="absolute flex items-center justify-center font-body text-white"
        style={{
          left: "680px",
          top: `${1766 - SECTION_TOP}px`, /* 836px */
          width: "128px",
          height: "40px",
          backgroundColor: "#1C1C1F",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "-0.32px",
        }}
      >
        About Us →
      </Link>
    </section>
  );
}
