import type { Metadata } from "next";
import Image from "next/image";
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
      <section
        aria-label="Portfolio overview"
        className="portfolio-hero-section relative w-full overflow-hidden bg-[#0B1738]"
      >
        <Image
          src="/images/portfolio/hero-bg.jpg"
          alt=""
          width={1482}
          height={989}
          priority
          className="portfolio-hero-media absolute max-w-none"
          sizes="100vw"
        />
        <div className="portfolio-hero-blend absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="portfolio-hero-content absolute z-10">
          <h1 className="portfolio-hero-title font-heading font-light text-white">
            Our Companies, Ventures, and Strategic Interests
          </h1>
          <p className="portfolio-hero-body font-body text-[#F0F2F5]">
            Our portfolio reflects the sectors, partnerships, and businesses MSS is helping build,
            back, and support across a growing global ecosystem.
          </p>
        </div>
      </section>

      <PortfolioGrid />

      <CTASection ariaLabel="Pitch to MSS" />

      <Footer />
    </main>
  );
}
