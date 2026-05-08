import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";

const cards = [
  { row: 1, icon: "/images/icons/icon-fintech.svg",       title: "Fintech",                    filter: "fintech",                    body: "We back ventures building the next layer of global financial infrastructure across payments, multi-currency platforms, and institutional-grade B2B financial services." },
  { row: 1, icon: "/images/icons/icon-ai.svg",            title: "Agentic AI",                 filter: "agentic-ai",                 body: "We invest in AI-led ventures developing intelligent systems that improve decision-making, efficiency, and digital experiences at scale." },
  { row: 1, icon: "/images/icons/icon-digital-asset.svg", title: "Digital Asset Tokenization", filter: "digital-asset-tokenization", body: "We support platforms exploring the digitization of value, enabling new models, and asset participation within modern financial ecosystems." },
  { row: 2, icon: "/images/icons/icon-venture.svg",       title: "Venture Capitalization",     filter: "venture-capitalization",     body: "We partner with emerging businesses at high-potential stages, providing capital and strategic support to help them scale with clarity and direction." },
  { row: 2, icon: "/images/icons/icon-media.svg",         title: "Digital Media",              filter: "digital-media",              body: "We back digital platforms and media-led businesses shaping how audiences engage, consume, and interact across evolving online ecosystems." },
];

/*
 * Desktop card sizing via clamp:
 *   max  364px — target at 1440px (3 cards + 2×24px gaps = 1140px, leaving 140px right margin in 1280px content)
 *   fluid      — shrinks proportionally as viewport narrows below 1300px
 *   min  320px — floor; cards wrap to 2+1 rather than shrinking further
 *
 * maxWidth 1140px on each row container creates the 140px right margin.
 * Row 2 ghost has minWidth 0 so it absorbs any deficit after cards hit 320px.
 */
// Row 1: cards don't grow — leaving the 140px right margin
const ROW1_CARD_STYLE = {
  flexBasis: "clamp(320px, calc((100% - 48px) / 3), 364px)",
  flexGrow: 0,
  flexShrink: 0,
  minWidth: "320px",
};

// Row 2: same max/min as row 1 cards — ghost absorbs the extra space instead
const ROW2_CARD_STYLE = {
  flexBasis: "clamp(320px, calc((100% - 48px) / 3), 364px)",
  flexGrow: 0,
  flexShrink: 1,
  minWidth: "320px",
};

// Ghost in row 2: grows to absorb all leftover space, keeping cards flush right at every viewport
const GHOST_STYLE = {
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: "0px",
  minWidth: 0,
};

export default function InvestmentsSection() {
  return (
    <section aria-label="Investment Sectors" className="relative w-full overflow-hidden">
      <Image src="/images/home/investments-section-bg.jpg" alt="" fill className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.10)" }} />

      <div className="relative z-10 px-5 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24">

        {/* ── HEADER ──────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-10 lg:gap-20 mb-16 lg:mb-20">
          <h2
            className="font-heading text-white md:w-1/2 lg:w-[540px] lg:flex-shrink-0"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)", lineHeight: "1.087", fontWeight: 300, margin: 0 }}
          >
            Investing Across High-Impact Digital Sectors and Eco-systems
          </h2>
          <p
            className="font-body mt-6 md:mt-0 md:w-1/2 lg:flex-1"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: "28px", letterSpacing: "-0.18px", color: "#F0F2F5" }}
          >
            Every investment opportunity is different. Our investment approach
            brings together the right capital, expertise, and strategies to
            support growth, manage risk, and deliver long-term performance
            across market cycles.
          </p>
        </div>

        {/* ── MOBILE / TABLET: simple 1→2 col grid ─────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {cards.map(card => <SectorCard key={card.title} card={card} />)}
        </div>

        {/* ── DESKTOP: fluid flex with right margin ─────────── */}
        <div className="hidden lg:block">

          {/* Row 1 — 3 cards, left-aligned; maxWidth creates 140px right margin at 1440px */}
          <div className="flex flex-wrap gap-6" style={{ maxWidth: "1280px" }}>
            {cards.filter(c => c.row === 1).map(card => (
              <SectorCard key={card.title} card={card} desktopStyle={ROW1_CARD_STYLE} />
            ))}
          </div>

          {/* Row 2 — ghost + 2 cards; ghost absorbs space so cards align to cols 2–3 */}
          <div className="flex gap-6 mt-6" style={{ maxWidth: "1280px" }}>
            <div aria-hidden="true" style={GHOST_STYLE} />
            {cards.filter(c => c.row === 2).map(card => (
              <SectorCard key={card.title} card={card} desktopStyle={ROW2_CARD_STYLE} />
            ))}
          </div>
        </div>

        {/* ── BUTTON ───────────────────────────────────────── */}
        <div className="mt-12">
          <Link
            href="/how-we-invest"
            className="inline-flex items-center gap-[8px] text-body-sm font-body"
            style={{ height: "40px", backgroundColor: "#FFFFFF", color: "#1C1C1F", paddingLeft: "20px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", whiteSpace: "nowrap" }}
          >
            How We Invest
            <ArrowRight size="lg" fill="#1C1C1F" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectorCard({ card, desktopStyle }: { card: typeof cards[number]; desktopStyle?: object }) {
  return (
    <article className="bg-white flex flex-col" style={{ minHeight: "400px", padding: "24px", ...desktopStyle }}>
      <div style={{ width: "60px", height: "60px", flexShrink: 0 }}>
        <img src={card.icon} alt="" width={60} height={60} style={{ width: "60px", height: "60px", objectFit: "contain" }} />
      </div>
      <h3 className="font-heading" style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "64px" }}>
        {card.title}
      </h3>
      <p className="font-body flex-1" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}>
        {card.body}
      </p>
      <Link
        href="#"
        className="self-start inline-flex items-center gap-[4px] text-links font-body py-[2px] border-b text-[#67686B] border-[#67686B] hover:text-[#373738] hover:border-[#373738] transition-colors duration-200"
        style={{ marginTop: "16px", textDecoration: "none" }}
      >
        {card.title} Portfolio
        <ArrowRight size="sm" fill="currentColor" />
      </Link>
    </article>
  );
}
