import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import ArrowRight from "@/components/icons/ArrowRight";

export const metadata: Metadata = {
  title: "Portfolio | MSS Investments Holding",
  description:
    "Explore the MSS Investments Holding portfolio — companies, ventures, and strategic interests spanning fintech, AI, digital assets, venture capitalization, and beyond.",
};

export default function PortfolioPage(): React.ReactElement {
  return (
    <main id="main-content">

      {/* ══════════════════════════════════════════════════════════
          HERO  h=930px  bg=#1B1C1E
          Nav: 94px at top.
          H1:  y=260px from hero top (166px below nav bottom).
               fontSize 72px / lh 76px, Merriweather 300, white.
               maxWidth 680px.
          Sub: y=504px → 16px below H1 bottom (260+228=488, +16=504).
               18px / 28px, Inter 400, #EFF1F4, maxWidth 620px.
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Portfolio overview"
        className="relative w-full overflow-hidden flex flex-col"
        style={{ minHeight: "930px", backgroundColor: "#1B1C1E" }}
      >
        <Image
          src="/images/portfolio/hero-bg.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.20)" }}
        />

        {/* Navbar floats on top of hero image */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Hero text — below navbar, padded down to Figma y position */}
        <div className="relative z-10 flex-1 flex flex-col px-5 md:px-12 lg:px-20">
          <div className="pt-10 md:pt-[120px] lg:pt-[166px] pb-16">
            <h1
              className="font-heading text-white"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                lineHeight: "1.056",
                fontWeight: 300,
                maxWidth: "680px",
              }}
            >
              Our Companies, Ventures, and Strategic Interests
            </h1>
            <p
              className="font-body"
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                letterSpacing: "-0.18px",
                color: "#EFF1F4",
                maxWidth: "620px",
                marginTop: "16px",
              }}
            >
              Our portfolio reflects the sectors, partnerships, and businesses
              MSS is helping build, back, and support across a growing global
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPANY GRID + SIDE PANEL ─────────────────────────────── */}
      <PortfolioGrid />

      {/* ══════════════════════════════════════════════════════════
          CTA  Frame 2147227505  w=1280 h=628  within standard margins.
          Image: cta-bg.jpg  object-position: center 83%  (Figma y=-1342
          in 1989px-tall image → visible centre at 83% down).
          NO overlay rectangle in Figma — photo provides own darkness.
          Content centred H + V:
            Title  46px/50px  Merriweather 300  white  maxW 520px
            Sub    15px/22px  Inter 400         white  maxW 520px  mt-3 (12px)
            Button 120×40     white bg / dark text     mt-8 (32px)
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Pitch to MSS"
        className="w-full px-5 md:px-12 lg:px-20"
      >
        <div
          className="relative overflow-hidden flex items-center justify-center"
          style={{ height: "628px" }}
        >
          <Image
            src="/images/portfolio/cta-bg.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "center 83%" }}
            sizes="(max-width: 1024px) 100vw, 1280px"
          />

          {/* Content — centred both axes */}
          <div className="relative z-10 flex flex-col items-center text-center px-8">
            <h2
              className="font-heading text-white"
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)",
                lineHeight: "1.087",
                fontWeight: 300,
                maxWidth: "520px",
              }}
            >
              Let&apos;s Start the Right Conversation!
            </h2>
            <p
              className="font-body text-white"
              style={{
                fontSize: "15px",
                lineHeight: "22px",
                maxWidth: "520px",
                marginTop: "12px",
              }}
            >
              If you are building, scaling, or exploring a strategic path
              forward, we welcome opportunities that align with the MSS
              ecosystem.
            </p>
            <Link
              href="/pitch"
              className="inline-flex items-center justify-center gap-[4px] font-body bg-white text-[#1C1C1F]"
              style={{
                height: "40px",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.32px",
                paddingLeft: "20px",
                paddingRight: "16px",
                marginTop: "32px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Pitch to Us
              <ArrowRight size="lg" fill="#1C1C1F" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <Footer />

    </main>
  );
}
