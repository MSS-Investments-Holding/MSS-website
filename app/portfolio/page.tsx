import type { Metadata } from "next";
import HeroBackgroundImage from "@/components/ui/HeroBackgroundImage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import CTASection from "@/components/sections/CTASection";

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
        <HeroBackgroundImage
          src="/images/portfolio/hero-bg.jpg"
          alt=""
          className="object-cover object-center"
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

      <CTASection ariaLabel="Pitch to MSS" />

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <Footer />

    </main>
  );
}
