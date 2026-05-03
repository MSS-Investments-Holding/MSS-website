import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "What We Do | MSS Investments Holding",
  description:
    "MSS works where opportunity needs more than funding — providing direction, access, and execution support to ventures and businesses across priority sectors.",
};

/*
 * Figma node 458-366 · Page h=5791
 * Page left: x=21388 · Content left: x=21468 (80px) · Content width: 1280px
 *
 * Sections:
 *  Hero (930px)   — H1 bottom-aligned (justify-end pb-[40px])
 *  Features       — pt-24, right col at xl:ml-[560px], 4 icon items with dividers
 *  How We Operate — full-bleed #C5D3E5, h=670px, vertical line + label + H2
 *  Focus + CTAs   — centered label/H2, two 628px image tiles with text below
 *  By the Numbers — label + H2 + divider + 4 stat cards (302px, 24px gaps)
 *  CTA            — content-width 612px frame, centered text
 *  Footer
 */

/* ── Data ───────────────────────────────────────────────────────── */

const features = [
  {
    icon: "/images/icons/wwd-capital.svg",
    title: "Capital with Context",
    body: "We invest with an understanding of the market, the business model, and the role MSS can play beyond funding.",
  },
  {
    icon: "/images/icons/wwd-direction.svg",
    title: "Direction at Critical Moments",
    body: "We help teams make clearer decisions when the next stage of growth requires focus, structure, and alignment.",
  },
  {
    icon: "/images/icons/wwd-access.svg",
    title: "Access That Opens Doors",
    body: "We bring relationships, market perspective, and ecosystem reach that can help businesses move faster and smarter.",
  },
  {
    icon: "/images/icons/wwd-execution.svg",
    title: "Execution That Holds Up",
    body: "We support the practical work behind growth, from refining operations to preparing ventures for scale.",
  },
];

const stats = [
  { value: "$1.5B+", label: "Strategic capital across the broader financial ecosystem.", bg: "#F5E9DC", valueColor: "#1C1C1F", labelColor: "#373738" },
  { value: "7+",     label: "Ventures operating across emerging, priority sectors.",    bg: "#0B1738", valueColor: "#FFFFFF",  labelColor: "#E8E9EB" },
  { value: "200+",   label: "Collective workforce driving execution across the MSS ecosystem.", bg: "#C5D3E5", valueColor: "#1C1C1F", labelColor: "#373738" },
  { value: "8+",     label: "Markets represented across the MSS footprint.",            bg: "#E8E9EB", valueColor: "#1C1C1F", labelColor: "#373738" },
];

/* ── Page ───────────────────────────────────────────────────────── */
export default function InvestmentsPage() {
  return (
    <main id="main-content">

      {/* ══════════════════════════════════════════════════════════
          1 · HERO  h=930px, bg=#1C1C1F + image
          H1 bottom-aligned — justify-end pb-[40px]
          (Figma: H1 y=397 abs → 738px from section top → 644px below nav
           H1 h=152px → bottom at 796px → pb=836-796=40px)
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="What We Do Hero"
        className="relative w-full overflow-hidden flex flex-col"
        style={{ minHeight: "930px", backgroundColor: "#1C1C1F" }}
      >
        <Image
          src="/images/investments/hero-bg.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-end px-5 md:px-10 lg:px-20 pb-10 lg:pb-[40px]">
          <h1
            className="font-heading text-white"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              lineHeight: "1.056",
              fontWeight: 300,
              maxWidth: "630px",
            }}
          >
            The Work Behind the Growth
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2 · FEATURES  (bg-white)
          pt-24 (96px from hero bottom).
          Large intro text + 4 items all indented xl:ml-[560px] lg:ml-[44%]
          (Figma: all content starts at x=22028 = 560px from content left)
          Each item: icon (80×80) · gap-6 · heading + body + divider
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="What We Do Features"
        className="w-full bg-white px-5 md:px-10 lg:px-20 pt-24 pb-[120px]"
      >
        {/*
         * The entire block is right-aligned: xl:ml-[560px] (= 560/1280 = 43.75%).
         * This matches Figma where the intro text and items all start at x=560
         * from content left, leaving the left 560px as intentional whitespace.
         */}
        <div className="lg:ml-[44%] xl:ml-[560px]">

          {/* Intro text — Merriweather 26px/32px, #1C1C1F */}
          {/*
           * Figma: x=22028 (560 from content), y=685 (96px from hero bottom), w=720, h=160
           */}
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(1.25rem, 1.8vw, 1.625rem)",
              lineHeight: "1.231",
              fontWeight: 300,
              color: "#1C1C1F",
              margin: 0,
              maxWidth: "720px",
            }}
          >
            MSS works where opportunity needs more than funding — it needs
            direction, access, and execution support. We support ventures and
            businesses through the practical elements that turn ideas and
            potential into stronger commercial outcomes.
          </h2>

          {/* 4 feature items — mt-16 (64px gap from intro text bottom) */}
          {/*
           * Each item: icon (80×80, white bg) at x=560, heading at x=664 (24px gap)
           * Divider: 1px #D2D5D9, full width after each item (w=616 in Figma = flex-1)
           * Item vertical rhythm: icon+heading at same y, then body mt-[8px], divider mt-10
           */}
          <div className="mt-16">
            {features.map((item, i) => (
              <div key={item.title}>
                <div className="flex gap-6 items-start">
                  {/* Icon — 80×80px white bg, grey SVG icon */}
                  <div className="flex-shrink-0 w-20 h-20">
                    <img
                      src={item.icon}
                      alt=""
                      width={80}
                      height={80}
                      style={{ width: "80px", height: "80px", objectFit: "contain" }}
                    />
                  </div>
                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-heading"
                      style={{
                        fontSize: "20px",
                        lineHeight: "26px",
                        fontWeight: 300,
                        color: "#1C1C1F",
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-body"
                      style={{
                        fontSize: "15px",
                        lineHeight: "22px",
                        color: "#67686B",
                        margin: 0,
                        marginTop: "8px",
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
                {/* Divider */}
                <div style={{ height: "1px", backgroundColor: "#D2D5D9", marginTop: "40px", marginBottom: i < features.length - 1 ? "40px" : "0" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3 · HOW WE OPERATE  full-bleed #C5D3E5, h=670px
          Background image + vertical line at content-left + label + H2 + body
          Content indented pl-10 (40px from content left).
          Figma: label pt-[120px], H2 at mt-[120px] from label bottom,
                 body at mt-4 (16px from H2 bottom).
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="How We Operate"
        className="relative w-full overflow-hidden px-5 md:px-10 lg:px-20"
        style={{ height: "670px", backgroundColor: "#C5D3E5" }}
      >
        <Image
          src="/images/investments/how-we-operate-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />

        {/*
         * Content container — px-20 already on section.
         * Vertical line: absolute left-0 of this div = content left of page.
         * Text: pl-10 (40px extra indent from content left, matching Figma x=40 from content left)
         */}
        <div className="relative z-10 h-full">
          {/* Vertical decorative line at content left, y=120px, h=430px */}
          <div
            className="absolute hidden lg:block"
            style={{ left: 0, top: "120px", width: "1px", height: "430px", backgroundColor: "rgba(255,255,255,0.40)" }}
          />

          {/* Text content */}
          <div className="pl-0 lg:pl-10 pt-[120px]" style={{ maxWidth: "560px" }}>
            <span className="text-label font-body block text-white" style={{ color: "rgba(255,255,255,0.90)" }}>
              How We Operate
            </span>
            {/*
             * H2: label ends at 120+16=136px, H2 at 256px → gap=120px → mt-[120px]
             * Merriweather 36px/42px, white
             */}
            <h2
              className="font-heading text-white"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                lineHeight: "1.167",
                fontWeight: 300,
                margin: 0,
                marginTop: "120px",
                maxWidth: "520px",
              }}
            >
              We turn promising opportunities into focused plans, tested models,
              and executable ventures.
            </h2>

            {/* Body — mt-4 (16px from H2 bottom), Inter 15px, #E8E9EB */}
            <p
              className="font-body"
              style={{
                fontSize: "15px",
                lineHeight: "22px",
                color: "#E8E9EB",
                margin: 0,
                marginTop: "16px",
                maxWidth: "520px",
              }}
            >
              We look for opportunities that align with our ecosystem, demonstrate
              a clear business model, and address a real market need. The strongest
              ideas show execution potential, room to scale across customers,
              markets, or partnerships, and a focus on building long-term value
              rather than short-term momentum.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4 · OUR FOCUS + CTAs  (bg-white)
          pt-[140px] (140px from Frame 55 bottom to label)
          Label, H2, body all CENTERED (Figma confirms: center=640=content center)
          Two 628px image tiles side-by-side, content below each
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Our Investment Focus"
        className="w-full bg-white px-5 md:px-10 lg:px-20 pt-[140px]"
      >
        {/* Centered header */}
        <div className="flex flex-col items-center text-center">
          <span className="text-label font-body" style={{ color: "#373738" }}>
            Our Focus
          </span>
          {/* H2: Merriweather 48px/52px, #1C1C1F, max-w-[524px] centered */}
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(2rem, 3.3vw, 3rem)",
              lineHeight: "1.083",
              fontWeight: 300,
              color: "#1C1C1F",
              margin: 0,
              marginTop: "8px",
              maxWidth: "524px",
            }}
          >
            Investing at the forefront of technology
          </h2>
          {/* Body: max-w-[758px] centered */}
          <p
            className="font-body"
            style={{
              fontSize: "15px",
              lineHeight: "22px",
              color: "#67686B",
              margin: 0,
              marginTop: "16px",
              maxWidth: "758px",
            }}
          >
            We are interested in sectors where technology solves practical problems
            and creates lasting commercial utility. Our investment focus is shaped
            by businesses that can move beyond short-term attention and become part
            of the everyday systems people and companies rely on.
          </p>
        </div>

        {/* Two CTA tiles — mt-20 (80px below body) */}
        {/*
         * Figma: tiles at y=2737 (80px below body bottom 2657)
         * Each tile: 628×480px image + content below
         * Gap between tiles: 24px (1280-628-628=24 ✓)
         * Tile content positions (relative to image bottom):
         *   title mt-6 (24px) · body mt-3 · button mt-8 (32px from body bottom)
         */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20 pb-[160px]">

          {/* LEFT — Our Portfolio */}
          <div className="flex flex-col">
            {/* Image — 628×480 aspect */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "628/480", backgroundColor: "#0B1738" }}
            >
              <Image
                src="/images/investments/portfolio-tile.jpg"
                alt="MSS Portfolio"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 628px"
              />
              <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />
            </div>
            <h3
              className="font-heading"
              style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px" }}
            >
              Our Portfolio
            </h3>
            <p
              className="font-body"
              style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
            >
              Discover the ventures, platforms, and businesses within the MSS
              ecosystem, and the role they play across our wider growth story.
            </p>
            <div style={{ marginTop: "32px" }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center font-body text-white"
                style={{
                  height: "40px",
                  backgroundColor: "#1C1C1F",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "-0.32px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  whiteSpace: "nowrap",
                }}
              >
                Visit Portfolio →
              </Link>
            </div>
          </div>

          {/* RIGHT — Our Investments */}
          <div className="flex flex-col">
            {/* Image — 628×480 aspect */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "628/480", backgroundColor: "#0B1738" }}
            >
              <Image
                src="/images/investments/investments-tile.jpg"
                alt="MSS Investment Focus"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 628px"
              />
              <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.10)" }} />
            </div>
            <h3
              className="font-heading"
              style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px" }}
            >
              How We Invest
            </h3>
            <p
              className="font-body"
              style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
            >
              Explore the sectors, themes, and investment focus shaping how MSS
              identifies opportunity and builds long-term value.
            </p>
            <div style={{ marginTop: "32px" }}>
              <Link
                href="/investments/how-we-invest"
                className="inline-flex items-center font-body text-white"
                style={{
                  height: "40px",
                  backgroundColor: "#1C1C1F",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "-0.32px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  whiteSpace: "nowrap",
                }}
              >
                Visit Investments →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5 · MSS BY THE NUMBERS  (bg-white)
          Label + H2 (Merriweather 36px) + divider + 4 stat cards (302px, gap-6)
          Figma: label at x=0, H2 at x=0, both LEFT-aligned at content left
          Stats: 4×302px with 24px gaps = 1280px ✓
          Each stat: value Merriweather 46px/50px + label Inter 15px
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="MSS By the Numbers"
        className="w-full bg-white px-5 md:px-10 lg:px-20 pt-0 pb-0"
      >
        <span className="text-label font-body block" style={{ color: "#373738" }}>
          MSS By the Numbers
        </span>

        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
            lineHeight: "1.167",
            fontWeight: 300,
            color: "#1C1C1F",
            margin: 0,
            marginTop: "40px",
          }}
        >
          A Growing Ecosystem with Measurable Weight
        </h2>

        {/* Divider — mt-10 (40px from H2 bottom) */}
        <div style={{ height: "1px", backgroundColor: "#D2D5D9", marginTop: "40px" }} />

        {/* 4 stat cards — mt-10 (40px from divider), no gap (flush) */}
        {/*
         * Figma: 4 cards, each 302px, 24px gaps → gap-6 in Tailwind ✓
         * Heights vary: 174/174/196/174. Use auto height (content-driven).
         * Each card: pt-8 (32px from card top to value) then value + label.
         */}
        <div className="flex flex-col sm:flex-row gap-6 mt-10 mb-0">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col"
              style={{ backgroundColor: stat.bg, padding: "32px 32px 32px 32px", flex: "1" }}
            >
              <span
                className="font-heading"
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 2.875rem)",
                  lineHeight: "1.087",
                  fontWeight: 300,
                  color: stat.valueColor,
                  margin: 0,
                  display: "block",
                }}
              >
                {stat.value}
              </span>
              <p
                className="font-body"
                style={{
                  fontSize: "15px",
                  lineHeight: "22px",
                  color: stat.labelColor,
                  margin: 0,
                  marginTop: "16px",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6 · CTA  content-width 612px frame with full-bleed image
          Figma: Frame 2147227504, x=content left, w=1280, h=612
          H2 centered, body + button below
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Start the Conversation"
        className="w-full bg-white px-5 md:px-10 lg:px-20 py-24"
      >
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "612px" }}
        >
          <Image
            src="/images/investments/cta-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 1280px"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
            <h2
              className="font-heading text-white"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                lineHeight: "1.167",
                fontWeight: 300,
                margin: 0,
                maxWidth: "520px",
              }}
            >
              Let&apos;s Start the Right Conversation!
            </h2>
            <p
              className="font-body text-white"
              style={{ fontSize: "15px", lineHeight: "22px", margin: 0, marginTop: "16px", maxWidth: "520px" }}
            >
              If you are building, scaling, or exploring a strategic path forward,
              we welcome opportunities that align with the MSS ecosystem.
            </p>
            <div style={{ marginTop: "32px" }}>
              <Link
                href="/pitch"
                className="inline-flex items-center font-body"
                style={{
                  height: "40px",
                  backgroundColor: "#FFFFFF",
                  color: "#1C1C1F",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "-0.32px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  whiteSpace: "nowrap",
                }}
              >
                Pitch to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
