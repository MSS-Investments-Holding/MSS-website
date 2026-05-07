import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";

const SECTOR_HREF = "/how-we-invest#investing-sectors";

const cards = [
  // Row 1 (left-aligned): Fintech, Agentic AI, Digital Asset Tokenization
  { row: 1, icon: "/images/icons/icon-fintech.svg",       title: "Fintech",                    body: "We back ventures building the next layer of global financial infrastructure across payments, multi-currency platforms, and institutional-grade B2B financial services." },
  { row: 1, icon: "/images/icons/icon-ai.svg",            title: "Agentic AI",                 body: "We invest in AI-led ventures developing intelligent systems that improve decision-making, efficiency, and digital experiences at scale." },
  { row: 1, icon: "/images/icons/icon-digital-asset.svg", title: "Digital Asset Tokenization", body: "We support platforms exploring the digitization of value, enabling new models, and asset participation within modern financial ecosystems." },
  // Row 2 (right-aligned): Venture Capitalization, Digital Media
  { row: 2, icon: "/images/icons/icon-venture.svg",       title: "Venture Capitalization",     body: "We partner with emerging businesses at high-potential stages, providing capital and strategic support to help them scale with clarity and direction." },
  { row: 2, icon: "/images/icons/icon-media.svg",         title: "Digital Media",              body: "We back digital platforms and media-led businesses shaping how audiences engage, consume, and interact across evolving online ecosystems." },
];

export default function InvestmentsSection() {
  return (
    <section aria-label="Investment Sectors" className="relative w-full overflow-hidden">
      {/* Background */}
      <Image src="/images/investments-section-bg.jpg" alt="" fill className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.10)" }} />

      <div className="relative z-10 px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24">

        {/* ── HEADER — H2 left, body right at lg ─────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20 mb-16 lg:mb-20">
          <h2
            className="font-heading text-white lg:w-[540px] lg:flex-shrink-0"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)", lineHeight: "1.087", fontWeight: 300, margin: 0 }}
          >
            Investing Across High-Impact Digital Sectors and Eco-systems
          </h2>
          <p
            className="font-body mt-6 lg:mt-0 flex-1"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: "28px", letterSpacing: "-0.18px", color: "#F0F2F5" }}
          >
            Every investment opportunity is different. Our investment approach
            brings together the right capital, expertise, and strategies to
            support growth, manage risk, and deliver long-term performance
            across market cycles.
          </p>
        </div>

        {/* ── CARD GRID ──────────────────────────────────────── */}
        {/*
          Desktop: Row 1 = 3 cards LEFT-aligned (cols 1–3 of a 3-col grid)
                   Row 2 = 2 cards RIGHT-aligned (cols 2–3 of a 3-col grid)
          Tablet:  2-col grid, all cards flow naturally
          Mobile:  1-col, all cards stack
        */}

        {/*
         * Cards: fixed 360×400px in Figma — must NOT stretch to fill columns.
         * Desktop: flex row with lg:w-[360px] per card.
         *   Row 1 (3 cards left):  natural right space = content(1280) − 3×360 − 2×24 = 152px
         *   Row 2 (2 cards right): justify-end → natural left space = 1280 − 2×360 − 24 = 536px
         * Mobile/tablet: full-width grid (cards fill their column naturally).
         */}

        {/*
         * Cards: target 360px wide but fluid — shrink proportionally on smaller viewports,
         * wrap to next row when below min-width floor (260px).
         * Row 1: left-aligned wrap → card 3 falls under card 1 when space runs out.
         * Row 2: justify-end → stays right-aligned after wrap.
         */}

        {/* Row 1 — 3 cards, left-aligned */}
        <div className="flex flex-wrap gap-6">
          {cards.filter(c => c.row === 1).map((card) => (
            <SectorCard key={card.title} card={card} />
          ))}
        </div>

        {/* Row 2 — ghost spacer + 2 cards, right-aligned */}
        {/*
         * Ghost div has identical flex properties to a real card so the flex
         * algorithm sizes all 3 slots equally — row 2 cards match row 1 width
         * at every viewport. Hidden below lg (mobile/tablet handles separately).
         */}
        <div className="flex flex-wrap justify-end gap-6 mt-6">
          <div className="hidden lg:block lg:flex-1 lg:max-w-[360px] lg:min-w-[260px]" aria-hidden="true" />
          {cards.filter(c => c.row === 2).map((card) => (
            <SectorCard key={card.title} card={card} />
          ))}
        </div>

        {/* ── BUTTON ───────────────────────────────────────── */}
        <div className="mt-12">
          <Link
            href="/how-we-invest"
            className="inline-flex items-center gap-[8px] font-body"
            style={{ height: "40px", backgroundColor: "#FFFFFF", color: "#1C1C1F", fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.32px", paddingLeft: "20px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", whiteSpace: "nowrap" }}
          >
            How We Invest
            <ArrowRight size="lg" fill="#1C1C1F" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectorCard({ card }: { card: typeof cards[number] }) {
  return (
    /*
     * Width behaviour:
     *   flex-[0_1_360px]: grow=0 (won't exceed 360px), shrink=1 (scales down proportionally),
     *                      basis=360px (target width)
     *   min-w-[260px]: floor — below this, card wraps to next row
     *   w-full sm:w-auto: full width on mobile, flex-driven above sm
     */
    <article className="bg-white flex flex-col w-full sm:w-auto sm:flex-1 sm:max-w-[360px] sm:min-w-[260px]" style={{ minHeight: "400px", padding: "24px" }}>
      <div style={{ width: "60px", height: "60px", flexShrink: 0 }}>
        <img src={card.icon} alt="" width={60} height={60} style={{ width: "60px", height: "60px", objectFit: "contain" }} />
      </div>
      <h3 className="font-heading" style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "32px" }}>
        {card.title}
      </h3>
      <p className="font-body flex-1" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "16px" }}>
        {card.body}
      </p>
      <Link
        href={SECTOR_HREF}
        className="self-start inline-flex items-center gap-[4px] text-links font-body py-[2px] border-b text-[#AEB0B3] border-[#AEB0B3] hover:text-[#373738] hover:border-[#373738] transition-colors duration-200"
        style={{ marginTop: "16px", textDecoration: "none" }}
      >
        Read More
        <ArrowRight size="sm" fill="currentColor" />
      </Link>
    </article>
  );
}
