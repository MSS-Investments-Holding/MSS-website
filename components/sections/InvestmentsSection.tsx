import Image from "next/image";
import Link from "next/link";

/*
 * Investments section — exact layout from Figma (Frame 19)
 * Section: x=0, y=1946, w=1440, h=1284
 *
 * Background: image 38 with 20% black NORMAL + 10% black overlay
 *
 * HEADER (two-column):
 *   Headline: left=80px, top=104px  (x=80,  y=2050)  w=540
 *   Body:     left=769px, top=129px (x=769, y=2075)  w=591
 *
 * CARDS:
 *   Row 1 (top=356px, y=2302): Fintech x=80, Agentic AI x=464, Digital Asset x=848
 *   Row 2 (top=780px, y=2726): Venture Cap x=616, Digital Media x=1000
 *   Each card: 360×400px, 24px gap between cards
 *
 * BUTTON:
 *   left=80px, top=1140px, w=179, h=40, fill=#FFFFFF, text=#1C1C1F
 */

const SECTION_Y = 1946;

const cards = [
  // Row 1 — left-aligned at x=80
  {
    x: 80,
    row: 1,
    icon: "/images/icons/icon-fintech.svg",
    title: "Fintech",
    body: "We back ventures building the next layer of global financial infrastructure across payments, multi-currency platforms, and institutional-grade B2B financial services.",
  },
  {
    x: 464,
    row: 1,
    icon: "/images/icons/icon-ai.svg",
    title: "Agentic AI",
    body: "We invest in AI-led ventures developing intelligent systems that improve decision-making, efficiency, and digital experiences at scale.",
  },
  {
    x: 848,
    row: 1,
    icon: "/images/icons/icon-digital-asset.svg",
    title: "Digital Asset Tokenization",
    body: "We support platforms exploring the digitization of value, enabling new models, and asset participation within modern financial ecosystems.",
  },
  // Row 2 — right-aligned (x=616, x=1000 → right edge x=1360, margin=80px)
  {
    x: 616,
    row: 2,
    icon: "/images/icons/icon-venture.svg",
    title: "Venture Capitalization",
    body: "We partner with emerging businesses at high-potential stages, providing capital and strategic support to help them scale with clarity and direction.",
  },
  {
    x: 1000,
    row: 2,
    icon: "/images/icons/icon-media.svg",
    title: "Digital Media",
    body: "We back digital platforms and media-led businesses shaping how audiences engage, consume, and interact across evolving online ecosystems.",
  },
];

export default function InvestmentsSection() {
  return (
    <section
      aria-label="Investment Sectors"
      className="relative w-full overflow-hidden"
      style={{ height: "1284px" }}
    >
      {/* Background image */}
      <Image
        src="/images/investments-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Figma overlays on image 38 (node 242:4849):
          fill[1]: black 20% NORMAL
          fill[2]: black 10% NORMAL  */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.10)" }} />

      {/* ── HEADLINE — left=80px, top=104px ─────────────────────── */}
      <h2
        className="absolute font-heading"
        style={{
          left: "80px",
          top: `${2050 - SECTION_Y}px`,   /* 104px */
          width: "540px",
          fontSize: "48px",
          lineHeight: "52px",
          fontWeight: 300,
          color: "#FFFFFF",
          margin: 0,
        }}
      >
        Investing Across High-Impact Digital Sectors and Eco-systems
      </h2>

      {/* ── BODY TEXT — left=769px, top=129px ───────────────────── */}
      <p
        className="absolute font-body"
        style={{
          left: "769px",
          top: `${2075 - SECTION_Y}px`,   /* 129px */
          width: "591px",
          fontSize: "18px",
          lineHeight: "28px",
          letterSpacing: "-0.18px",
          color: "#F0F2F5",
          margin: 0,
        }}
      >
        Every investment opportunity is different. Our investment approach
        brings together the right capital, expertise, and strategies to support
        growth, manage risk, and deliver long-term performance across market
        cycles.
      </p>

      {/* ── SECTOR CARDS ────────────────────────────────────────── */}
      {cards.map((card) => (
        <div
          key={card.title}
          className="absolute bg-white flex flex-col"
          style={{
            left: `${card.x}px`,
            top: `${(card.row === 1 ? 2302 : 2726) - SECTION_Y}px`,
            width: "360px",
            height: "400px",
            padding: "24px",
          }}
        >
          {/* Icon — 60×60px from Figma */}
          <div style={{ width: "60px", height: "60px", flexShrink: 0 }}>
            <img
              src={card.icon}
              alt=""
              width={60}
              height={60}
              style={{ width: "60px", height: "60px", objectFit: "contain" }}
            />
          </div>

          {/* Title — Merriweather 300 26px/32px, #1C1C1F */}
          <h3
            className="font-heading"
            style={{
              fontSize: "26px",
              lineHeight: "32px",
              fontWeight: 300,
              color: "#1C1C1F",
              margin: 0,
              marginTop: "32px",
            }}
          >
            {card.title}
          </h3>

          {/* Body — Inter 400 15px/22px, #67686B */}
          <p
            className="font-body"
            style={{
              fontSize: "15px",
              lineHeight: "22px",
              color: "#67686B",
              margin: 0,
              marginTop: "16px",
              flexGrow: 1,
            }}
          >
            {card.body}
          </p>

          {/* Read More — Inter 400 14px/20px, #AEB0B3, ls=-0.14px */}
          <Link
            href="/investments"
            className="font-body"
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "-0.14px",
              color: "#AEB0B3",
              marginTop: "16px",
              display: "block",
            }}
          >
            Read More →
          </Link>
        </div>
      ))}

      {/* ── BUTTON — left=80px, top=1140px, w=179, h=40 ─────────── */}
      {/* fill=#FFFFFF (white), text=#1C1C1F (dark) — fill button per Figma */}
      <Link
        href="/investments"
        className="absolute font-body flex items-center"
        style={{
          left: "80px",
          top: `${3086 - SECTION_Y}px`,   /* 1140px */
          width: "179px",
          height: "40px",
          backgroundColor: "#FFFFFF",
          color: "#1C1C1F",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "-0.32px",
          paddingLeft: "20px",
          paddingRight: "20px",
          gap: "8px",
        }}
      >
        Our Investments →
      </Link>
    </section>
  );
}
