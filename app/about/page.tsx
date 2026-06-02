import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import ArrowRight from "@/components/icons/ArrowRight";

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

/* Pin positions derived from Figma node coordinates (design 872:1404).
 * Map image (872:1405): x=10850, y=4710, w=1280, h=540.
 * anchor_x = frame.x + 20 (center); anchor_y = frame.y + 40 (bottom).
 * left% = (anchor_x - 10850) / 1280;  top% = (anchor_y - 4710) / 540.
 * Container uses aspect-ratio 1280/540 so one set works at all breakpoints. */
const mapPins = [
  { label: "Canada",               left: "17.97%", top: "39.07%" }, // 872:1408
  { label: "United Kingdom",       left: "45.62%", top: "30.74%" }, // 872:1423
  { label: "Switzerland",          left: "50.00%", top: "25.37%" }, // 872:1420
  { label: "Nigeria",              left: "51.09%", top: "45.37%" }, // 872:1411
  { label: "United Arab Emirates", left: "57.27%", top: "42.04%" }, // 872:1417
  { label: "Uganda",               left: "56.80%", top: "51.48%" }, // 872:1414
];

const locations = [
  {
    name: "Canada",
    sub: "North-American economy known for innovation and trade.",
  },
  {
    name: "Switzerland",
    sub: "Global center for finance, governance, and cross-border business.",
  },
  {
    name: "United Kingdom",
    sub: "Market with deep financial and institutional influence.",
  },
  {
    name: "United Arab Emirates",
    sub: "Fast-growing hub connecting the Middle East and Global Markets.",
  },
  {
    name: "Nigeria",
    sub: "One of Africa’s largest economies, with growing digital momentum.",
  },
  {
    name: "Uganda",
    sub: "Growing African market with huge regional and economic potential.",
  },
];

/* ── Pin SVG ───────────────────────────────────────────────────── */
function LocationPin({ label }: { label: string }) {
  return (
    <div className="about-map-pin-icon absolute -translate-x-1/2 -translate-y-full" aria-label={label}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.25 35H23.5219C24.8201 33.8408 26.0444 32.6014 27.1875 31.2891C31.4766 26.3563 33.75 21.1562 33.75 16.25C33.75 12.6033 32.3013 9.10591 29.7227 6.52728C27.1441 3.94866 23.6467 2.5 20 2.5C16.3533 2.5 12.8559 3.94866 10.2773 6.52728C7.69866 9.10591 6.25 12.6033 6.25 16.25C6.25 21.1562 8.51719 26.3563 12.8125 31.2891C13.9556 32.6014 15.1799 33.8408 16.4781 35H8.75C8.41848 35 8.10054 35.1317 7.86612 35.3661C7.6317 35.6005 7.5 35.9185 7.5 36.25C7.5 36.5815 7.6317 36.8995 7.86612 37.1339C8.10054 37.3683 8.41848 37.5 8.75 37.5H31.25C31.5815 37.5 31.8995 37.3683 32.1339 37.1339C32.3683 36.8995 32.5 36.5815 32.5 36.25C32.5 35.9185 32.3683 35.6005 32.1339 35.3661C31.8995 35.1317 31.5815 35 31.25 35ZM20 11.25C20.9889 11.25 21.9556 11.5432 22.7779 12.0927C23.6001 12.6421 24.241 13.423 24.6194 14.3366C24.9978 15.2502 25.0969 16.2555 24.9039 17.2255C24.711 18.1954 24.2348 19.0863 23.5355 19.7855C22.8363 20.4848 21.9454 20.961 20.9755 21.1539C20.0055 21.3469 19.0002 21.2478 18.0866 20.8694C17.173 20.491 16.3921 19.8501 15.8427 19.0279C15.2932 18.2056 15 17.2389 15 16.25C15 14.9239 15.5268 13.6521 16.4645 12.7145C17.4021 11.7768 18.6739 11.25 20 11.25Z" fill="#0B1738" />
        <circle cx="20" cy="16" r="6" fill="#F5E9DD" />
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
        className="about-hero-section relative w-full overflow-hidden flex flex-col"
        style={{ backgroundColor: "#1C1C1F" }}
      >
        <div className="about-hero-media" aria-hidden="true">
          <Image
            src="/images/about/hero-bg.jpg"
            alt=""
            fill
            className="object-fill"
            sizes="(max-width: 767px) 1126px, 1440px"
            priority
          />
        </div>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.10)" }} />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex-1 flex flex-col lg:flex-row gap-5 md:gap-10 px-5 md:px-12 lg:px-20">
          {/* LEFT — H1 */}
          <div className="md:w-[70%] lg:flex-1 pt-[120px] md:pt-[150px] lg:pt-[180px] lg:pb-10">
            <h1
              className="about-hero-title font-heading text-white"
              style={{ fontWeight: 300, maxWidth: "646px" }}
            >
              <span className="lg:hidden">
                Where Capital,<br />
                Conviction, and<br />
                Opportunity Align
              </span>
              <span className="hidden lg:inline">
                Where Capital, Conviction, and Opportunity Align
              </span>
            </h1>
          </div>

          {/* RIGHT — body, bottom-third area */}
          <div className="w-full md:w-[50%] md:ml-auto lg:ml-0 lg:w-[42%] xl:w-[540px] flex flex-col pt-0 lg:pt-[434px] pb-10">
            <p
              className="font-body text-body-lg text-white max-w-[460px] md:max-w-none"
              style={{}}
            >
              We operate with a long-term view, backing ventures and platforms
              where market relevance, execution, and strategic direction come
              together.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2 · WHO WE ARE — interactive accordion, client component
         ══════════════════════════════════════════════════════════ */}
      <WhoWeAreSection />

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

        <div className="relative z-10 px-5 md:px-12 lg:px-20 py-24 lg:py-[140px]">
          {/*
           * Beige content frame: h=538px, bg=#F5E9DC.
           * Decorative vertical line at x=64 from content left (5%).
           * Text content at x=104 from content left (8.1%).
           * Globe at x=1005 from content left (78.6%), y=-6px (overflows top).
           */}
          <div
            className="about-mission-card relative overflow-hidden w-full"
            style={{ backgroundColor: "#F5E9DC" }}
          >
            {/* Vertical decorative line */}
            <div
              className="absolute hidden md:block"
              style={{ left: "5%", top: "80px", bottom: "80px", width: "1px", backgroundColor: "rgba(28,28,31,0.30)" }}
            />

            {/* Text content */}
            <div className="about-mission-content relative z-10">
              <span className="text-label font-body block" style={{ color: "#1C1C1F" }}>
                Our Mission
              </span>
              <h2
                className="about-mission-title font-heading"
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
        className="w-full bg-white px-5 md:px-12 lg:px-20 pt-[120px] lg:pt-[126px] pb-[120px] lg:pb-40"
      >
        <h2
          className="about-drives-h2 font-heading"
          style={{ margin: 0 }}
        >
          What drives us.
        </h2>

        {/*
         * 4 frames: 302×400px each (302/1280=23.6% each), gap=24px.
         * Total: 4×302+3×24=1280 ✓
         * At xl: grid-cols-4 with xl:gap-6 — each cell ≈ 302px
         */}
        <div className="about-drives-grid grid md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 md:gap-6 mt-12 lg:mt-16">
          {drivesItems.map((item) => (
            <div key={item.title} className="flex flex-col">
              {/* Image frame — 302×400px, Figma-exported crop */}
              <div
                className="about-drive-image-frame relative w-full overflow-hidden flex-shrink-0"
                style={{ backgroundColor: "#0B1738" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 572px, 657px"
                />
              </div>
              {/* Title — Merriweather 20px/26px, mt-6 (24px) */}
              <h3
                className="font-heading text-h5"
                style={{ color: "#1C1C1F", margin: 0, marginTop: "24px" }}
              >
                {item.title}
              </h3>
              {/* Body — Inter 15px/22px, mt-3 (12px) */}
              <p
                className="font-body text-body-sm"
                style={{ color: "#67686B", margin: 0, marginTop: "12px" }}
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
      <div className="about-split-cta-outer w-full">
      <div className="flex flex-col md:flex-row w-full">

        {/* LEFT — Portfolio */}
        <div
          className="about-split-cta-tile relative w-full md:w-1/2 overflow-hidden"
          style={{ backgroundColor: "#0B1738" }}
        >
          <div className="about-portfolio-cta-image" aria-hidden="true">
            <Image
              src="/images/about/portfolio-cta-bg.jpg"
              alt=""
              fill
              className="object-fill"
              sizes="(max-width: 767px) 1264px, 2117px"
            />
          </div>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />

          {/* Vertical decorative line: left=40px, spans from label to button bottom */}
          <div
            className="absolute hidden lg:block"
            style={{ left: "40px", top: "64px", width: "1px", height: "272px", backgroundColor: "rgba(255,255,255,0.40)" }}
          />

          {/* Content at pl-[80px] pt-[64px] */}
          <div className="about-split-cta-content about-split-cta-content-top relative z-10">
            <span className="text-label font-body block text-white" style={{ color: "rgba(255,255,255,0.80)" }}>
              For Partners
            </span>
            <h2
              className="about-section-h2 font-heading text-white"
              style={{ margin: 0, marginTop: "32px", maxWidth: "480px" }}
            >
              Our Portfolio
            </h2>
            <p
              className="font-body text-body-sm"
              style={{ color: "#F0F2F5", margin: 0, marginTop: "12px", maxWidth: "480px" }}
            >
              Discover the companies, ventures, and platforms within the MSS
              ecosystem, each contributing to the group&apos;s broader vision for
              long-term growth.
            </p>
            <div style={{ marginTop: "56px" }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-[6px] font-body text-body-sm"
                style={{
                  height: "40px",
                  backgroundColor: "#FFFFFF",
                  color: "#1C1C1F",
                  paddingLeft: "20px",
                  paddingRight: "16px",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
              >
                Visit Portfolio
                <ArrowRight size="lg" fill="#1C1C1F" />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — Careers */}
        <div
          className="about-split-cta-tile relative w-full md:w-1/2 overflow-hidden"
          style={{ backgroundColor: "#0B1738" }}
        >
          <div className="about-careers-cta-image" aria-hidden="true">
            <Image
              src="/images/about/careers-cta-bg.jpg"
              alt=""
              fill
              className="object-fill"
              sizes="(max-width: 767px) 740px, 1234px"
            />
          </div>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.10)" }} />

          {/*
           * Vertical decorative line: left=40px, starts at same y as content (424px from tile top).
           * Content at pl-[80px] pt-[424px] (in lower half of 760px tile).
           */}
          <div
            className="absolute hidden lg:block"
            style={{ left: "40px", top: "424px", width: "1px", height: "272px", backgroundColor: "rgba(255,255,255,0.40)" }}
          />

          <div className="about-split-cta-content about-split-cta-content-bottom relative z-10">
            <span className="text-label font-body block text-white" style={{ color: "rgba(255,255,255,0.80)" }}>
              For talent
            </span>
            <h2
              className="about-section-h2 font-heading text-white"
              style={{ margin: 0, marginTop: "32px", maxWidth: "480px" }}
            >
              Join Us
            </h2>
            <p
              className="font-body text-body-sm"
              style={{ color: "#F0F2F5", margin: 0, marginTop: "12px", maxWidth: "480px" }}
            >
              Join the teams working across strategy, finance, technology,
              operations, and venture building to help shape the next stage of
              the MSS ecosystem.
            </p>
            <div style={{ marginTop: "56px" }}>
              <Link
                href="/careers"
                className="inline-flex items-center gap-[6px] font-body text-body-sm"
                style={{
                  height: "40px",
                  backgroundColor: "#FFFFFF",
                  color: "#1C1C1F",
                  paddingLeft: "20px",
                  paddingRight: "16px",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
              >
                Visit Careers
                <ArrowRight size="lg" fill="#1C1C1F" />
              </Link>
            </div>
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
        className="w-full bg-white px-5 md:px-12 lg:px-20 pt-[120px] lg:pt-[140px] pb-[120px] lg:pb-[140px]"
      >
        {/* Label + H2 */}
        {/*
         * Label at x=575/1280=44.9% from content left.
         * H2 at x=278/1280=21.7% from content left, w=724, Merriweather 48px/52px.
         */}
        <div className="relative mb-10 lg:mb-[56px]" style={{ textAlign: "center" }}>
          <span
            className="about-footprint-label text-label font-body"
            style={{ color: "#373738", display: "block" }}
          >
            Global Footprint
          </span>
          <h2
            className="about-footprint-title font-heading"
            style={{ margin: "0 auto", marginTop: "24px" }}
          >
            Proud to partner ideas shaping the economy of tomorrow
          </h2>
        </div>

        {/* World map — nearly full-bleed (45px margin each side at 1440px = 3.1%) */}
        <div className="about-map-frame relative w-full overflow-hidden">
          <Image
            src="/images/about/world-map.jpg"
            alt="MSS global presence map"
            fill
            className="object-fill"
            sizes="(max-width: 767px) 768px, 2560px"
          />
          {mapPins.map((pin) => (
            <div
              key={pin.label}
              className="about-map-pin absolute"
              style={{ left: pin.left, top: pin.top }}
            >
              <LocationPin label={pin.label} />
            </div>
          ))}
        </div>

        <div className="about-locations-grid grid grid-cols-1 md:grid-cols-3 mt-5" style={{ gap: "0 32px" }}>
          {locations.map((entry) => (
            <div key={entry.name} className="border-t border-[#D2D5D9] pt-10 pb-10">
              <h3
                className="font-heading text-h4"
                style={{ color: "#1C1C1F", margin: 0 }}
              >
                {entry.name}
              </h3>
              <p
                className="font-body text-body-sm"
                style={{ color: "#67686B", margin: 0, marginTop: "12px" }}
              >
                {entry.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <Footer />

    </main>
  );
}
