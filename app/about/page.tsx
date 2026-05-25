import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HeroBackgroundImage from "@/components/ui/HeroBackgroundImage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | MSS Investments Holding",
  description:
    "MSS Investments Holding is a global holding company investing in the platforms and businesses shaping modern economies.",
};

/*
 * Figma node 370-2733 · Page h=7325 · All measurements from API.
 * Page left: x=15868 · Content left: x=15948 (80px margin) · Content width: 1280px
 *
 * Sections (absolute y → relative to page frame top -341):
 *  Hero:           y=-341, h=930
 *  Who We Are:     y=589  to y=1583 (994px)
 *  Mission:        y=1583, h=818  (full-bleed navy)
 *  What Drives Us: y=2401 to y=3351 (950px)
 *  CTAs:           y=3351, h=760  (full-bleed 2 tiles)
 *  Global Footprint y=4111 to y=5607 (1496px)
 *  Conversation CTA y=5607, h=612 (content-width)
 *  Footer:         y=6219
 */

/* ── Data ──────────────────────────────────────────────────────── */

const subItems = [
  "Connected Ecosystem",
  "Operational Perspective",
  "Global Market View",
];

const drivesItems = [
  {
    title: "A More Connected Economy",
    body: "We support businesses that help people, companies, and markets move value and operate across borders with greater ease.",
    image: "/images/about/drives-1.jpg",
  },
  {
    title: "Opportunity Without Borders",
    body: "We believe strong ideas should be able to scale beyond geography, supported by the right capital, structure, and direction.",
    image: "/images/about/drives-2.jpg",
  },
  {
    title: "Ubiquitous Technology",
    body: "We back technology that becomes naturally embedded into everyday systems, making experiences simpler and more useful.",
    image: "/images/about/drives-3.jpg",
  },
  {
    title: "Purposeful Progress",
    body: "We pursue growth with intention, creating value for stakeholders while contributing meaningfully to the markets we serve.",
    image: "/images/about/drives-4.jpg",
  },
];

/*
 * Pin positions as % of map image (1350×540px).
 * Calculated from Figma absolute coords minus map origin (x=15913, y=4443).
 */
const mapPins = [
  { left: "18.1%", top: "31.7%", label: "Canada" },
  { left: "44.4%", top: "23.3%", label: "Switzerland" },
  { left: "48.5%", top: "18.0%", label: "United Kingdom" },
  { left: "55.0%", top: "44.1%", label: "United Arab Emirates" },
  { left: "57.3%", top: "37.4%", label: "Kingdom of Saudi Arabia" },
  { left: "61.6%", top: "32.8%", label: "Pakistan" },
  { left: "67.6%", top: "32.8%", label: "Uganda" },
  { left: "75.9%", top: "35.2%", label: "Nepal" },
];

/* 3-col grid: 405px cols with 32px gaps (Figma-exact at xl) */
const locationCols = [
  [
    { name: "Canada",               sub: "All general enquiries for MSS should be directed to:" },
    { name: "United Arab Emirates", sub: "All general enquiries for MSS should be directed to:" },
    { name: "Nepal",                sub: "All general enquiries for MSS should be directed to:" },
  ],
  [
    { name: "Switzerland",          sub: "All general enquiries for MSS should be directed to:" },
    { name: "Pakistan",             sub: "All general enquiries for MSS should be directed to:" },
    { name: "Kingdom of Saudi Arabia", sub: "All general enquiries for MSS should be directed to:" },
  ],
  [
    { name: "United Kingdom",       sub: "All general enquiries for MSS should be directed to:" },
    { name: "Uganda",               sub: "All general enquiries for MSS should be directed to:" },
  ],
];

/* ── Pin SVG ───────────────────────────────────────────────────── */
function LocationPin({ label }: { label: string }) {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-full" aria-label={label}>
      <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 0C6.268 0 0 6.268 0 14c0 9.33 14 21 14 21S28 23.33 28 14C28 6.268 21.732 0 14 0z" fill="#0B1738" />
        <circle cx="14" cy="13" r="5" fill="#F5E9DC" />
      </svg>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main id="main-content">

      {/* ══════════════════════════════════════════════════════════
          1 · HERO  h=930px, bg=#1C1C1F + image rgba(0,0,0,0.10)
          H1 left:   pt-[166px]  (y=260 section-rel, 166px below nav)
          Body right: xl:w-[540px] lg:w-[42%], pt-[434px]
                      (y=528 section-rel, 434px below nav)
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="About Us Hero"
        className="relative w-full overflow-hidden flex flex-col"
        style={{ minHeight: "930px", backgroundColor: "#1C1C1F" }}
      >
        <HeroBackgroundImage
          src="/images/about/hero-bg.jpg"
          alt=""
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.10)" }} />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex-1 flex flex-col lg:flex-row px-5 md:px-12 lg:px-20">
          {/* LEFT — H1 */}
          <div className="flex-1 pt-16 lg:pt-[166px] pb-10">
            <h1
              className="font-heading text-white"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.375rem)", lineHeight: "1.056", fontWeight: 300, maxWidth: "646px" }}
            >
              Where Capital, Conviction, and Opportunity Align
            </h1>
          </div>

          {/* RIGHT — body, bottom-third area */}
          <div className="w-full lg:w-[42%] xl:w-[540px] flex flex-col pt-10 lg:pt-[434px] pb-10">
            <p
              className="font-body text-white"
              style={{ fontSize: "18px", lineHeight: "28px", letterSpacing: "-0.18px" }}
            >
              We operate with a long-term view, backing ventures and platforms
              where market relevance, execution, and strategic direction come
              together.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2 · WHO WE ARE  (bg-white, 994px total)
          pt-24 (96px → label), two-col at lg:
            LEFT 740px: label + H2 + Frame55 image
            RIGHT 500px: Strategic Ownership heading + body + sub-items
          pb-[120px] before Mission section
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Who We Are"
        className="w-full bg-white px-5 md:px-12 lg:px-20 pt-24 pb-[120px]"
      >
        {/* Label + H2 (always full-width above the two-col area) */}
        <span className="text-label font-body block" style={{ color: "#373738" }}>
          Who are we
        </span>
        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
            lineHeight: "1.167",
            fontWeight: 300,
            color: "#1C1C1F",
            margin: 0,
            marginTop: "24px",
            maxWidth: "600px",
          }}
        >
          A Global Holding Company{"\n"}Shaping Tomorrow&apos;s Economy
        </h2>

        {/*
         * Two-col area — starts 64px below H2 bottom (mt-16).
         * LEFT:  xl:w-[740px] — large image frame (Frame 55, 740×590px)
         * RIGHT: flex-1 — heading + body at top, sub-items at bottom
         * Gap between cols: xl:gap-x-[40px] lg:gap-x-8
         */}
        <div className="flex flex-col lg:flex-row mt-16 lg:gap-x-10 xl:gap-x-[40px]">

          {/* LEFT — Frame 55 image (740×590, bleeds left in Figma) */}
          <div
            className="w-full lg:flex-shrink-0 xl:w-[740px] lg:w-[57%] relative overflow-hidden mb-10 lg:mb-0"
            style={{ aspectRatio: "740/590", backgroundColor: "#0B1738" }}
          >
            <Image
              src="/images/about/who-we-are-img.jpg"
              alt="MSS Investments Holding"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 740px"
            />
          </div>

          {/* RIGHT — flex-col with content at top and sub-items pushed to bottom */}
          <div
            className="flex-1 flex flex-col"
            style={{ minHeight: "590px" }}
          >
            {/* Top content */}
            <div>
              <h3
                className="font-heading"
                style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
              >
                Strategic Ownership
              </h3>
              <p
                className="font-body"
                style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
              >
                MSS invests in and supports businesses with long-term relevance,
                helping shape direction beyond capital alone. The focus is on
                building companies with structure, clarity, and the ability to
                grow within changing markets.
              </p>
            </div>

            {/* Spacer pushes sub-items to the bottom */}
            <div className="flex-1" />

            {/* Bottom: sub-items with dividers */}
            <div>
              {subItems.map((item) => (
                <div key={item} className="border-t border-[#D2D5D9] py-4">
                  <span
                    className="font-heading"
                    style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#67686B" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
              <div className="border-t border-[#D2D5D9]" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3 · MISSION  full-bleed navy, h=818px
          py-[140px] on outer → inner beige frame (content-width, h=538)
          Label "Our Mission" at pt-24, H2 at mt-[120px]
          Vertical line left=5% (64/1280), Globe right at left=78.6%
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Our Mission"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#0B1738" }}
      >
        <Image
          src="/images/about/mission-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />

        {/* py-[140px] creates the 140px navy padding above/below the beige frame */}
        <div className="relative z-10 px-5 md:px-12 lg:px-20 py-[140px]">
          {/*
           * Beige content frame: h=538px, bg=#F5E9DC.
           * Decorative vertical line at x=64 from content left (5%).
           * Text content at x=104 from content left (8.1%).
           * Globe at x=1005 from content left (78.6%), y=-6px (overflows top).
           */}
          <div
            className="relative overflow-hidden w-full"
            style={{ height: "538px", backgroundColor: "#F5E9DC" }}
          >
            {/* Vertical decorative line */}
            <div
              className="absolute hidden lg:block"
              style={{ left: "5%", top: "80px", width: "1px", height: "362px", backgroundColor: "rgba(28,28,31,0.30)" }}
            />

            {/* Text content */}
            <div className="relative z-10 pt-20" style={{ paddingLeft: "8.1%" }}>
              <span className="text-label font-body block" style={{ color: "#1C1C1F" }}>
                Our Mission
              </span>
              {/*
               * H2 gap from label bottom: label ends at 96px (pt-20+16), H2 at 232px
               * gap = 232-96=136px → mt-[136px]
               */}
              <h2
                className="font-heading"
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                  lineHeight: "1.167",
                  fontWeight: 300,
                  color: "#1C1C1F",
                  margin: 0,
                  marginTop: "136px",
                  maxWidth: "640px",
                }}
              >
                We back businesses that create lasting economic value, ideas that
                can endure, scale responsibly, and contribute meaningfully to the
                economies they operate within.
              </h2>
            </div>

            {/* Globe / grid diagram — at x=78.6%, y=-6px */}
            <div
              className="absolute hidden lg:block pointer-events-none"
              style={{ left: "78.6%", top: "-6px", width: "550px", height: "550px" }}
            >
              <img
                src="/images/about/mission-globe.svg"
                alt=""
                width={550}
                height={550}
                style={{ width: "550px", height: "550px", opacity: 0.6 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4 · WHAT DRIVES US  (bg-white)
          pt-[126px] (gap from Mission bottom to H2)
          H2 Merriweather 46px/50px
          4-col image grid (302×400px, gap-6 = 24px, mt-16 below H2)
          Captions: mt-6 title, mt-3 body
          pb-40 (160px before CTAs section)
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="What Drives Us"
        className="w-full bg-white px-5 md:px-12 lg:px-20 pt-[126px] pb-40"
      >
        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)",
            lineHeight: "1.087",
            fontWeight: 300,
            color: "#1C1C1F",
            margin: 0,
          }}
        >
          What drives us.
        </h2>

        {/*
         * 4 frames: 302×400px each (302/1280=23.6% each), gap=24px.
         * Total: 4×302+3×24=1280 ✓
         * At xl: grid-cols-4 with xl:gap-6 — each cell ≈ 302px
         */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {drivesItems.map((item) => (
            <div key={item.title} className="flex flex-col">
              {/* Image frame — 302×400px navy bg */}
              <div
                className="relative w-full overflow-hidden flex-shrink-0"
                style={{ aspectRatio: "302/400", backgroundColor: "#0B1738" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 302px"
                />
              </div>
              {/* Title — Merriweather 20px/26px, mt-6 (24px) */}
              <h3
                className="font-heading"
                style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px" }}
              >
                {item.title}
              </h3>
              {/* Body — Inter 15px/22px, mt-3 (12px) */}
              <p
                className="font-body"
                style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5 · PORTFOLIO + CAREERS CTAS  (full-bleed, 760px each tile)
          Two 50% tiles side by side filling the full page width.
          Portfolio: content at top (pt-[64px])
          Careers:   content at bottom (pt-[424px])
          Both: vertical line at left=40px, text at pl-[80px]
         ══════════════════════════════════════════════════════════ */}
      <div className="flex flex-col lg:flex-row w-full">

        {/* LEFT — Portfolio */}
        <div
          className="relative w-full lg:w-1/2 overflow-hidden"
          style={{ height: "760px", backgroundColor: "#0B1738" }}
        >
          <Image
            src="/images/about/portfolio-cta-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />

          {/* Vertical decorative line: left=40px, spans from label to button bottom */}
          <div
            className="absolute hidden lg:block"
            style={{ left: "40px", top: "64px", width: "1px", height: "272px", backgroundColor: "rgba(255,255,255,0.40)" }}
          />

          {/* Content at pl-[80px] pt-[64px] */}
          <div className="relative z-10 pt-[64px] pl-10 xl:pl-20">
            <span className="text-label font-body block text-white" style={{ color: "rgba(255,255,255,0.80)" }}>
              For Partners
            </span>
            <h2
              className="font-heading text-white"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", lineHeight: "1.167", fontWeight: 300, margin: 0, marginTop: "32px", maxWidth: "480px" }}
            >
              Our Portfolio
            </h2>
            <p
              className="font-body"
              style={{ fontSize: "15px", lineHeight: "22px", color: "#F0F2F5", margin: 0, marginTop: "12px", maxWidth: "480px" }}
            >
              Discover the companies, ventures, and platforms within the MSS
              ecosystem, each contributing to the group&apos;s broader vision for
              long-term growth.
            </p>
            <div style={{ marginTop: "56px" }}>
              <Link
                href="/portfolio"
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
                  textDecoration: "none",
                }}
              >
                Visit Portfolio →
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — Careers */}
        <div
          className="relative w-full lg:w-1/2 overflow-hidden"
          style={{ height: "760px", backgroundColor: "#0B1738" }}
        >
          <Image
            src="/images/about/careers-cta-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.10)" }} />

          {/*
           * Vertical decorative line: left=40px, starts at same y as content (424px from tile top).
           * Content at pl-[80px] pt-[424px] (in lower half of 760px tile).
           */}
          <div
            className="absolute hidden lg:block"
            style={{ left: "40px", top: "424px", width: "1px", height: "272px", backgroundColor: "rgba(255,255,255,0.40)" }}
          />

          <div className="relative z-10 pt-[424px] pl-10 xl:pl-20">
            <span className="text-label font-body block text-white" style={{ color: "rgba(255,255,255,0.80)" }}>
              For talent
            </span>
            <h2
              className="font-heading text-white"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", lineHeight: "1.167", fontWeight: 300, margin: 0, marginTop: "32px", maxWidth: "480px" }}
            >
              Join Us
            </h2>
            <p
              className="font-body"
              style={{ fontSize: "15px", lineHeight: "22px", color: "#F0F2F5", margin: 0, marginTop: "12px", maxWidth: "480px" }}
            >
              Join the teams working across strategy, finance, technology,
              operations, and venture building to help shape the next stage of
              the MSS ecosystem.
            </p>
            <div style={{ marginTop: "56px" }}>
              <Link
                href="/careers"
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
                  textDecoration: "none",
                }}
              >
                Visit Careers →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          6 · GLOBAL FOOTPRINT  (bg-white)
          pt-[180px] → label "Global Footprint" at x=45% of content
          H2 "Proud to partner..." Merriweather 48px/52px at x=22% of content
          World map image (near full-bleed, px-[3.1%]) with location pins
          3-col country grid below map (405px cols, 32px gaps)
          pb-[140px] before CTA section
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Global Footprint"
        className="w-full bg-white px-5 md:px-12 lg:px-20 pt-[180px] pb-[140px]"
      >
        {/* Label + H2 */}
        {/*
         * Label at x=575/1280=44.9% from content left.
         * H2 at x=278/1280=21.7% from content left, w=724, Merriweather 48px/52px.
         */}
        <div className="relative mb-10">
          <span
            className="text-label font-body"
            style={{ color: "#373738", display: "block", marginLeft: "45%" }}
          >
            Global Footprint
          </span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(2rem, 3.3vw, 3rem)",
              lineHeight: "1.083",
              fontWeight: 300,
              color: "#1C1C1F",
              margin: 0,
              marginTop: "8px",
              marginLeft: "22%",
              maxWidth: "724px",
            }}
          >
            Proud to partner ideas shaping the economy of tomorrow
          </h2>
        </div>

        {/* World map — nearly full-bleed (45px margin each side at 1440px = 3.1%) */}
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "1350/540" }}
        >
          <Image
            src="/images/about/world-map.jpg"
            alt="MSS global presence map"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Location pins */}
          {mapPins.map((pin) => (
            <div
              key={pin.label}
              className="absolute"
              style={{ left: pin.left, top: pin.top }}
            >
              <LocationPin label={pin.label} />
            </div>
          ))}
        </div>

        {/* Country grid — 3 equal cols (405px each, 32px gaps at xl) */}
        {/*
         * mt-5 (20px from map bottom to first divider, Figma: 4983→5003 = 20px)
         * 3 rows of countries per column.
         * Dividers: border-t on each row item.
         */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5" style={{ gap: "0 32px" }}>
          {locationCols.map((col, ci) => (
            <div key={ci}>
              {col.map((entry, ri) => (
                <div key={entry.name} className="border-t border-[#D2D5D9] pt-10">
                  <h3
                    className="font-heading"
                    style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
                  >
                    {entry.name}
                  </h3>
                  <p
                    className="font-body"
                    style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px", paddingBottom: "40px" }}
                  >
                    {entry.sub}
                  </p>
                </div>
              ))}
              <div className="border-t border-[#D2D5D9]" />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7 · CONVERSATION CTA  (content-width frame, h=612px)
          Frame 2147227497: x=content-left, w=1280, h=612 within page.
          Image fills full frame; content centered (H2 starts at ~200px
          from frame top = vertical center of the 612px frame).
          H2: Merriweather 36px/42px, white, max-w-[520px], centered.
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Start the Conversation"
        className="w-full bg-white px-5 md:px-12 lg:px-20"
      >
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "612px" }}
        >
          <Image
            src="/images/about/cta-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 1280px"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.10)" }} />

          {/* Centered content */}
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
              If you are building, scaling, or exploring a strategic path
              forward, we welcome opportunities that align with the MSS ecosystem.
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
                  textDecoration: "none",
                }}
              >
                Pitch to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <Footer />

    </main>
  );
}
