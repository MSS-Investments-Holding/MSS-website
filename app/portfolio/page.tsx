import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        aria-label="Portfolio overview"
        className="relative w-full overflow-hidden bg-[#1B1C1E]"
        style={{ height: "clamp(480px, 65vw, 930px)" }}
      >
        <Image
          src="/images/portfolio/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          style={{ opacity: 0.8 }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.20)" }}
        />
        <div className="absolute inset-0 flex flex-col justify-end px-5 md:px-12 lg:px-20 pb-12 md:pb-16 lg:pb-24">
          <h1
            className="font-heading text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              lineHeight: "1.06",
              fontWeight: 300,
              maxWidth: "10em",
            }}
          >
            Our Companies, Ventures, and Strategic Interests
          </h1>
          <p
            className="font-body mt-5 md:mt-6"
            style={{
              fontSize: "clamp(0.9375rem, 1.5vw, 1.125rem)",
              lineHeight: "28px",
              color: "#EFF1F4",
              maxWidth: "38em",
            }}
          >
            Our portfolio reflects the sectors, partnerships, and businesses MSS
            is helping build, back, and support across a growing global ecosystem.
          </p>
        </div>
      </section>

      {/* ── COMPANY GRID + SIDE PANEL ─────────────────────────────── */}
      <PortfolioGrid />

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section
        aria-label="Pitch to MSS"
        className="w-full px-5 md:px-12 lg:px-20"
      >
        <div
          className="relative overflow-hidden flex flex-col justify-center"
          style={{ minHeight: "clamp(340px, 44vw, 628px)" }}
        >
          <Image
            src="/images/portfolio/cta-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(11,23,56,0.72)" }}
          />
          <div className="relative z-10 px-8 md:px-14 lg:px-20 py-16">
            <h2
              className="font-heading text-white"
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)",
                lineHeight: "1.087",
                fontWeight: 300,
                maxWidth: "16em",
              }}
            >
              Let&apos;s Start the Right Conversation!
            </h2>
            <p
              className="font-body mt-4 md:mt-6"
              style={{
                fontSize: "15px",
                lineHeight: "22px",
                color: "rgba(255,255,255,0.82)",
                maxWidth: "44em",
              }}
            >
              If you are building, scaling, or exploring a strategic path
              forward, we welcome opportunities that align with the MSS ecosystem.
            </p>
            <Link
              href="/pitch"
              className="inline-flex items-center justify-center gap-[4px] font-body bg-white text-[#1C1C1F] mt-8"
              style={{
                height: "40px",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.32px",
                paddingLeft: "20px",
                paddingRight: "16px",
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

    </main>
  );
}
