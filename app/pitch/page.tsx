import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PitchForm from "@/components/pitch/PitchForm";
import PitchScrollButton from "@/components/pitch/PitchScrollButton";

export const metadata: Metadata = {
  title: "Pitch to Us | MSS Investments Holding",
  description:
    "MSS welcomes relevant opportunities from founders, operators, partners, and institutions aligned with the sectors shaping modern economies.",
};

/* ─── Static data ──────────────────────────────────────────────── */

const conversations = [
  {
    number: "1",
    title: "Founders & Ventures",
    body: "For entrepreneurs building businesses with clear market potential and long-term growth ambition.",
  },
  {
    number: "2",
    title: "Strategic Partners",
    body: "For companies, institutions, and operators exploring collaboration, market access, or ecosystem alignment.",
  },
  {
    number: "3",
    title: "Investment Opportunities",
    body: "For businesses seeking capital, strategic backing, or support to move into the next stage of growth.",
  },
  {
    number: "4",
    title: "Advisory Requests",
    body: "For organizations looking for guidance, business input, or strategic perspective from the MSS network.",
  },
];

const steps = [
  {
    icon: "/images/icons/pitch-step-submit.svg",
    title: "Submit",
    body: "Share your business, opportunity, or inquiry with us",
  },
  {
    icon: "/images/icons/pitch-step-review.svg",
    title: "Review",
    body: "We assess the details for relevance, fit, and next-step potential.",
  },
  {
    icon: "/images/icons/pitch-step-connect.svg",
    title: "Connect",
    body: "If aligned, we arrange a meeting to better understand the opportunity.",
  },
  {
    icon: "/images/icons/pitch-step-explore.svg",
    title: "Explore",
    body: "Identify steps to support via capital, partnership, or strategic direction.",
  },
];

/* ─── Page ─────────────────────────────────────────────────────── */

export default function PitchPage() {
  return (
    <main id="main-content" className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════
          1 · HERO  (h=880px mobile, 930px md+)
          Figma: H1 at absolute y=-61 → 280px from section top
                 Nav h=94px → H1 pt = 280-94 = 186px below nav
                 Body at y=742px, button at y=850px from section top
                 Right col body x=800/1280=62.5% → xl:w-[560px]
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Pitch to Us Hero"
        className="pitch-hero-section relative w-full overflow-hidden"
      >
        <div className="pitch-hero-media" aria-hidden="true">
          <Image
            src="/images/pitch/pitch-hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-fill"
          />
        </div>
        <div className="absolute inset-0 mix-blend-overlay" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />

        <div className="relative z-20">
          <Navbar />
        </div>

        <h1 className="pitch-hero-title font-heading text-white">
          A Starting Point for Strategic Growth
        </h1>

        <div className="pitch-hero-copy">
          <p className="font-body m-0">
            MSS welcomes relevant opportunities from founders, operators, partners, and institutions aligned with the sectors shaping modern economies.
          </p>
          <PitchScrollButton />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2 · RELEVANT CONVERSATIONS
          Figma: pt=96px (hero bottom → label), pb=120px (last divider → Frame55)
          Full-width H2: Merriweather 36px/42px
          4 numbered rows: divider → py-10 → [number col 52%] [content]
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Relevant Conversations"
        className="w-full bg-white px-5 md:px-12 lg:px-20 pt-24 pb-[120px]"
      >
        <span className="text-label font-body block" style={{ color: "#373738" }}>
          Relevant Conversations
        </span>

        {/*
         * H3 token: desktop 36px/42px, mobile 28px/34px.
         * Spans the full 1280px content width.
         */}
        <h2
          className="font-heading text-h3 max-w-full"
          style={{
            fontWeight: 300,
            color: "#1C1C1F",
            margin: 0,
            marginTop: "24px",
          }}
        >
          From investment opportunities and venture pitches to partnerships and
          advisory requests, we welcome conversations where our capital, network,
          and strategic perspective may be relevant.
        </h2>

        {/*
         * Numbered rows. Figma rhythm per row:
         *   divider → 40px (pt-10) → heading(32px) + 12px + body(44px) → 40px (pb-10) → divider
         *   Total per row = 168px.
         * Two-col at lg+: left spacer = 52% (≈660px of 1280px ≈ Figma x=660 heading position).
         *   At xl (1440px content=1280px): 52% × 1280 = 665px ≈ 660px ✓
         */}
        <div className="mt-12">
          {conversations.map((item) => (
            <div key={item.number}>
              <div style={{ height: "1px", backgroundColor: "#D2D5D9" }} />
              <div className="flex flex-col md:flex-row py-10 gap-3 md:gap-0">
                {/* Number column — left side from tablet up, full width stacked at mobile */}
                <div className="md:w-1/2 md:flex-shrink-0 lg:w-[52%]">
                  <span
                    className="font-heading"
                    style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#C5D3E5" }}
                  >
                    {item.number}
                  </span>
                </div>
                {/* Content — right side from tablet up, matching the desktop row organization */}
                <div className="flex-1 min-w-0 md:w-1/2 md:flex-none lg:flex-1">
                  <h3
                    className="font-heading text-h4 break-words"
                    style={{ fontWeight: 300, color: "#1C1C1F", margin: 0 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-body break-words"
                    style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Bottom divider after last row */}
          <div style={{ height: "1px", backgroundColor: "#D2D5D9" }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3 · WHAT WE LOOK FOR  (Frame 55, h=702px desktop, responsive)
          Figma: bg=#F5E9DC + full-bleed image + rgba(0,0,0,0.20) overlay
          Text at x=104 from frame left (8.1%); decor line at x=64 (5%)
          Globe at x=800 (62.5%), y=-249 from frame top, 1200×1200px
          Vertical positions from frame top:
            label 80px · H2 192px · body 376px · button 582px
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="What We Look For"
        className="w-full bg-white px-5 md:px-12 lg:px-20"
      >
        <div className="pitch-look-card relative w-full overflow-hidden">

          <div className="pitch-look-media" aria-hidden="true">
            <Image
              src="/images/pitch/pitch-what-we-look-for-bg.jpg"
              alt=""
              fill
              className="object-fill"
              sizes="100vw"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 mix-blend-overlay" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />


          <div className="pitch-look-content relative z-10">
            <span
              className="text-label font-body block"
              style={{ color: "rgba(255,255,255,0.80)" }}
            >
              What We Look For
            </span>

            {/*
             * H2: label ends at 96px (80+16), H2 at 192px → gap = 96px (mt-24 = 6rem = 96px) ✓
             * Merriweather 36px/42px, white
             */}
            <h2
              className="pitch-look-title font-heading text-white"
              style={{
                fontWeight: 300,
                marginBottom: 0,
              }}
            >
              MSS evaluates opportunities through the lens of strategic fit,
              execution potential, and long-term value creation.
            </h2>

            {/* Body: H2 ends at 360px, body at 376px → gap 16px (mt-4) ✓ */}
            <p
              className="pitch-look-body font-body text-white"
              style={{
                color: "rgba(255,255,255,0.90)",
                marginTop: "16px",
                marginBottom: 0,
              }}
            >
              We look for opportunities that align with our ecosystem, demonstrate
              a clear business model, and address a real market need. The strongest
              submissions usually show execution potential, room to scale across
              customers, markets, or partnerships, and a focus on building long-term
              value rather than short-term momentum.
            </p>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4 · PROCESS STEPS — Submit / Review / Connect / Explore
          Figma: icons 80px below Frame55 bottom → pt-20
          Col grid: 4 equal cols with 32px gap + 32px outer indent (xl:px-8)
          Icon 40×40 centered · title mt-6 (24px) · body mt-1 (4px)
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Pitch Process"
        className="w-full bg-white px-5 md:px-12 lg:px-20 pt-20 pb-28"
      >
        {/*
         * xl:px-8 adds 32px extra indent matching Figma:
         * step icons at x=8620 = page left 80px + content indent 32px = 112px from page left.
         */}
        <div className="xl:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                {/* 40×40 icon — SVG exported with white bg included from Figma */}
                <div className="w-10 h-10 flex-shrink-0">
                  <Image
                    src={step.icon}
                    alt=""
                    width={40}
                    height={40}
                    loading="eager"
                    style={{ width: "40px", height: "40px", objectFit: "contain" }}
                  />
                </div>
                {/* Merriweather 20px/26px — 24px gap from icon bottom */}
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "20px",
                    lineHeight: "26px",
                    fontWeight: 300,
                    color: "#1C1C1F",
                    margin: 0,
                    marginTop: "24px",
                  }}
                >
                  {step.title}
                </h3>
                {/* Inter 15px/22px — 4px gap from title bottom */}
                <p
                  className="font-body max-w-full break-words"
                  style={{
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#67686B",
                    margin: 0,
                    marginTop: "4px",
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5 · PITCH FORM — "Ready when you are."
          Figma: label + H2 (full width), divider 42px below H2,
          form starts 40px below divider, right-aligned at 64% width.
          Fields: 2-col grid (400px ea / 24px gap) for rows 1-3,
                  full-width Inquiry Type + Message (200px tall).
          pb-[120px]: space before contact section divider.
         ══════════════════════════════════════════════════════════ */}
      <section
        id="pitch-form"
        aria-label="Submit Your Pitch"
        className="w-full bg-white px-5 md:px-12 lg:px-20 pt-20 md:pt-24"
        style={{ scrollMarginTop: "94px" }}
      >
        <span className="text-label font-body block" style={{ color: "#373738" }}>
          Submit your pitch
        </span>
        {/*
         * H2 "Ready when you are." — Merriweather 46px/50px.
         * clamp(1.75rem, 3.2vw, 2.875rem): 3.2vw hits 46px at ~1437px ✓
         * maxWidth 56%: H2 w=724px / 1280px = 56.6% ≈ 56% ✓
         */}
        <h2
          className="font-heading max-w-full lg:max-w-[56%]"
          style={{
            fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)",
            lineHeight: "1.087",
            fontWeight: 300,
            color: "#1C1C1F",
            margin: 0,
            marginTop: "24px",
          }}
        >
          Ready when you are.
        </h2>

        {/* Divider — 42px below H2, 40px above form (Figma Vector 6 spacing) */}
        <div className="pitch-form-divider" style={{ height: "1px", backgroundColor: "#D2D5D9", marginBottom: "40px" }} />

        {/*
         * Form right-aligned at 64% content width.
         * Figma: form x=456/1280=35.6% from content left → right 64.4% form.
         * At lg: lg:w-[64%]; at xl 1440px: 64%×1280=819px ≈ 824px (Figma) ✓
         */}
        <div className="flex lg:justify-end pb-[120px]">
          <PitchForm />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6 · FOOTER — shared component (same as homepage)
         ══════════════════════════════════════════════════════════ */}
      <Footer />

    </main>
  );
}
