import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "How We Invest | MSS Investments Holding",
  description:
    "MSS invests with a structured view of opportunity, balancing long-term potential with practical fundamentals, strategic fit, and responsible execution.",
};

/* ── Data ────────────────────────────────────────────────────────── */

const philosophyCriteria = [
  {
    number: "01",
    title: "Utility",
    body: "We prioritize businesses that solve real problems and create practical value for users, customers, or markets.",
  },
  {
    number: "02",
    title: "Timing",
    body: "We look for opportunities where market behavior, technology, regulation, or infrastructure is shifting in a way that supports growth.",
  },
  {
    number: "03",
    title: "Value",
    body: "We focus on businesses with the potential to stay relevant beyond short-term cycles, trends, or temporary demand.",
  },
];

const sectors = [
  {
    name: "Fintech",
    description:
      "Fintech remains one of the clearest areas where infrastructure, access, and everyday utility come together. MSS looks at businesses improving how people and companies move money, access financial services, manage transactions, and operate across markets. The strongest fintech opportunities are not just digital versions of traditional services. They create simpler, faster, and more reliable ways for users and businesses to participate in the economy. For MSS, this includes payment infrastructure, remittances, digital banking, merchant services, multi-currency platforms, and cross-border financial systems.",
    signals: [
      "Payments",
      "Remittances",
      "Digital banking",
      "Merchant tools",
      "Cross-border platforms",
      "Embedded finance",
    ],
  },
  {
    name: "AI Agents",
    description:
      "AI is moving from experimentation into practical business systems. MSS is interested in AI-led opportunities that improve workflows, decision-making, automation, and operational intelligence across businesses. The focus is not on AI as a trend, but on AI as a capability that can become embedded into how companies work. Strong opportunities in this category are those that reduce complexity, improve speed, support better decisions, or create new ways for teams and systems to operate at scale.",
    signals: [
      "AI agents",
      "Workflow automation",
      "Enterprise intelligence",
      "Operational tools",
      "Decision-support platforms",
    ],
  },
  {
    name: "Digital Asset Tokenization",
    description:
      "Digital asset tokenization is creating new ways to structure, access, and transfer value. MSS looks at platforms that bring greater efficiency, transparency, and utility to ownership, participation, and financial infrastructure. This category is especially relevant where traditional asset systems are slow, fragmented, or difficult to access. MSS is interested in models that connect digital and traditional value in a responsible and commercially useful way, especially where trust, compliance, liquidity, and transparency are central to adoption.",
    signals: [
      "Tokenized assets",
      "Digital ownership models",
      "Asset-backed platforms",
      "Blockchain-enabled infrastructure",
      "Compliant digital value systems",
    ],
  },
  {
    name: "Venture Capitalization",
    description:
      "Venture capitalization reflects MSS’s interest in identifying promising businesses before their full potential is visible. This is where capital, structure, and strategic support can help a venture move from early promise to stronger commercial footing. MSS looks for ventures with clear market relevance, capable teams, and the ability to scale with the right operating support. The opportunity is not only in providing funding, but in helping shape direction, improve readiness, and create conditions for long-term growth.",
    signals: [
      "Early-stage ventures",
      "Growth-stage companies",
      "Strategic incubation",
      "Ecosystem-aligned businesses",
      "Founder-led platforms",
    ],
  },
  {
    name: "Digital Media",
    description:
      "Digital media is increasingly tied to how businesses grow, communicate, and build customer relationships. MSS looks at media-led platforms and digital growth businesses that shape attention, distribution, conversion, and engagement. In a digital economy, distribution is a strategic advantage. Businesses that understand how to acquire, retain, and influence audiences can become powerful growth engines across sectors. For MSS, digital media is not only about content; it is about measurable commercial impact and the systems that connect brands, users, and markets.",
    signals: [
      "Performance marketing",
      "Digital content",
      "Audience platforms",
      "Commerce enablement",
      "Customer acquisition",
      "Growth systems",
    ],
  },
];

const pledges = [
  {
    title: "Governance",
    body: "We value clear oversight, responsible decision-making, and accountability at every stage of growth.",
    image: "/images/about/drives-1.jpg",
  },
  {
    title: "Utility",
    body: "We prioritize businesses that solve real problems and create practical value for customers, markets, or communities.",
    image: "/images/about/drives-2.jpg",
  },
  {
    title: "Risk Awareness",
    body: "We consider financial, operational, regulatory, and reputational risks before moving forward.",
    image: "/images/about/drives-3.jpg",
  },
  {
    title: "Long-Term Alignment",
    body: "We look for opportunities where growth can remain relevant beyond short-term market momentum.",
    image: "/images/about/drives-4.jpg",
  },
];

/* ── Process step icons (grey #67686B, within 40×40 frames) ────── */

function IconOrigination() {
  return (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" aria-hidden="true">
      <circle cx="13" cy="13" r="9" stroke="#67686B" strokeWidth="1.5" />
      <circle cx="13" cy="13" r="4" stroke="#67686B" strokeWidth="1.5" />
      <path d="M20 20L28 28" stroke="#67686B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconEvaluation() {
  return (
    <svg width="32" height="31" viewBox="0 0 32 31" fill="none" aria-hidden="true">
      <rect x="5" y="4" width="22" height="24" rx="2" stroke="#67686B" strokeWidth="1.5" />
      <path d="M11 10h10M11 16h10M11 22h6" stroke="#67686B" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="10" y="1" width="12" height="6" rx="1.5" stroke="#67686B" strokeWidth="1.5" />
    </svg>
  );
}

function IconExecution() {
  return (
    <svg width="35" height="28" viewBox="0 0 35 28" fill="none" aria-hidden="true">
      <path d="M3 20l14.5 7L32 20" stroke="#67686B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 14l14.5 7L32 14" stroke="#67686B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 8l14.5-7L32 8l-14.5 7L3 8z" stroke="#67686B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconManagement() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <path
        d="M17 4l12 4v9c0 7-6 12-12 14C11 29 5 24 5 17V8l12-4z"
        stroke="#67686B"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11 17l4 4 8-8"
        stroke="#67686B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const processSteps = [
  {
    title: "Origination",
    body: "Identify opportunities via our network, market activity, founder talks, and sector research.",
    Icon: IconOrigination,
  },
  {
    title: "Evaluation",
    body: "Assess business model, market timing, team, growth potential, risk, and ecosystem fit.",
    Icon: IconEvaluation,
  },
  {
    title: "Execution",
    body: "Structure the right involvement, via capital, partnership, strategic support within the portfolio.",
    Icon: IconExecution,
  },
  {
    title: "Management",
    body: "Stay involved post-investment, supporting governance, priorities, and value creation.",
    Icon: IconManagement,
  },
];

/* ── Page ────────────────────────────────────────────────────────── */
export default function HowWeInvestPage() {
  return (
    <main id="main-content">

      {/* ══════════════════════════════════════════════════════════
          HERO  h=930px
          bg: #1B1C1E + bg image + TWO rgba(0,0,0,0.20) overlays (Figma exact)
          H1: Merriweather 72px, white, max-w-800, starts 186px below nav bottom
          Subtext: Inter 18px, rgba(232,233,234), max-w-520, 40px from hero bottom, right-aligned
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Hero"
        className="relative w-full overflow-hidden flex flex-col"
        style={{ minHeight: "930px", backgroundColor: "#1B1C1E" }}
      >
        <Image
          src="/images/investments/how-we-invest-hero-bg.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Figma: TWO solid rgba(0,0,0,0.20) fills stacked on top of image */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex-1 flex flex-col px-5 md:px-10 lg:px-20">
          {/* H1 — H1 abs y=280 from section top, nav=94px → pt=186px below nav */}
          <h1
            className="font-heading text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              lineHeight: "1.056",
              fontWeight: 300,
              maxWidth: "800px",
              paddingTop: "186px",
            }}
          >
            A Coherent Standard for Strategic, Meaningful Investments
          </h1>

          <div className="flex-1" />

          {/* Subtext — right-aligned, pb-40px (40px from hero bottom) */}
          <div className="flex justify-end" style={{ paddingBottom: "40px" }}>
            <p
              className="font-body"
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                color: "rgba(232,233,234,1)",
                maxWidth: "520px",
                letterSpacing: "-0.18px",
              }}
            >
              MSS invests with a structured view of opportunity, balancing long-term
              potential with practical fundamentals, strategic fit, and responsible
              execution.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PHILOSOPHY  bg=white
          pt-96px → label at 96px from section top
          2-col: left max-w-600 (H2 + body + criteria) | right max-w-620 image (NO overlay)
          Criteria: divider + title/number row + body × 3
          pb-200px (gap to Process section)
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Philosophy"
        className="w-full bg-white px-5 md:px-10 lg:px-20"
        style={{ paddingTop: "96px", paddingBottom: "200px" }}
      >
        <p
          className="font-body"
          style={{
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0.72px",
            textTransform: "uppercase",
            color: "#373738",
            margin: 0,
          }}
        >
          Philosophy
        </p>

        {/* 2-col: mt-24px gap from label bottom to 2-col start */}
        <div
          className="flex flex-col xl:flex-row xl:items-start"
          style={{ marginTop: "24px", gap: "60px" }}
        >
          {/* Left col — max-w-600 */}
          <div className="xl:max-w-[600px] flex-1 min-w-0">
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                lineHeight: "42px",
                fontWeight: 300,
                color: "#1C1C1F",
                margin: 0,
              }}
            >
              A Global Holding Company<br />Shaping Tomorrow&apos;s Economy
            </h2>

            <p
              className="font-body"
              style={{
                fontSize: "15px",
                lineHeight: "22px",
                color: "#67686B",
                margin: 0,
                marginTop: "12px",
              }}
            >
              Our philosophy is that meaningful investments rely on more than market
              excitement. We seek businesses with practical utility, commercial logic,
              strong timing, and potential to shape how people, companies, or markets
              operate over time.
            </p>

            {/* Criteria with dividers */}
            <div style={{ marginTop: "40px" }}>
              {philosophyCriteria.map((item) => (
                <div key={item.title}>
                  <hr style={{ border: "none", borderTop: "1px solid #D2D5D9", margin: 0 }} />
                  <div
                    className="flex items-baseline justify-between"
                    style={{ paddingTop: "24px" }}
                  >
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
                    <span
                      className="font-heading"
                      style={{
                        fontSize: "20px",
                        lineHeight: "26px",
                        fontWeight: 300,
                        color: "#C5D3E5",
                        flexShrink: 0,
                        marginLeft: "8px",
                      }}
                    >
                      {item.number}
                    </span>
                  </div>
                  <p
                    className="font-body"
                    style={{
                      fontSize: "15px",
                      lineHeight: "22px",
                      color: "#67686B",
                      margin: 0,
                      marginTop: "8px",
                      paddingBottom: "24px",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
              <hr style={{ border: "none", borderTop: "1px solid #D2D5D9", margin: 0 }} />
            </div>
          </div>

          {/* Right col — image, NO overlay (Figma: IMAGE fill only, no solid fill) */}
          <div
            className="relative w-full xl:w-[620px] xl:flex-shrink-0 overflow-hidden"
            style={{ aspectRatio: "620/624", backgroundColor: "#0B1738" }}
          >
            <Image
              src="/images/investments/investments-tile.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 620px"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PROCESS  bg=white  (follows Philosophy with no top padding)
          "PROCESS" label centered
          H2 48px centered max-w-724
          4 process columns: icon + title + body
          pb-80px
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Process"
        className="w-full bg-white px-5 md:px-10 lg:px-20"
        style={{ paddingBottom: "80px" }}
      >
        <p
          className="font-body text-center"
          style={{
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0.72px",
            textTransform: "uppercase",
            color: "#373738",
            margin: 0,
          }}
        >
          Process
        </p>

        <h2
          className="font-heading text-center mx-auto"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            lineHeight: "1.083",
            fontWeight: 300,
            color: "#1C1C1F",
            maxWidth: "724px",
            margin: "0 auto",
            marginTop: "24px",
          }}
        >
          A process built for selectivity, clarity, and long-term value.
        </h2>

        {/* 4 steps — mt-64px from H2 bottom */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
          style={{ marginTop: "64px", gap: "32px" }}
        >
          {processSteps.map((step) => (
            <div key={step.title} className="flex flex-col">
              {/* 40×40 icon frame — white bg */}
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: "40px", height: "40px", backgroundColor: "#FFFFFF" }}
              >
                <step.Icon />
              </div>

              <h3
                className="font-heading"
                style={{
                  fontSize: "20px",
                  lineHeight: "26px",
                  fontWeight: 300,
                  color: "#1C1C1F",
                  margin: 0,
                  marginTop: "16px",
                }}
              >
                {step.title}
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
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          NAVY QUOTE  h=694px
          bg=#0B1738 + bg image + TWO rgba(0,0,0,0.20) overlays (Figma exact)
          Quote: 36px/42px Merriweather white, max-w-1000, centered H+V
          Vertical centering: 200px padding top+bottom (exact Figma measurement)
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="After Investment"
        className="relative w-full overflow-hidden flex items-center justify-center px-5 md:px-10 lg:px-20"
        style={{ minHeight: "694px", backgroundColor: "#0B1738" }}
      >
        <Image
          src="/images/investments/how-we-operate-bg.jpg"
          alt=""
          fill
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Figma: TWO rgba(0,0,0,0.20) solid fills on top of image */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />

        <p
          className="relative z-10 font-heading"
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 2.25rem)",
            lineHeight: "42px",
            fontWeight: 300,
            color: "#FFFFFF",
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "200px 0",
          }}
        >
          After investment, we work alongside businesses to strengthen the conditions
          that support long-term progress. That means helping teams think clearly,
          prioritize what matters and build the operating discipline needed to grow
          responsibly. Our role is not to replace the business, but to support it with
          perspective, structure, and the wider advantages of the MSS ecosystem.
        </p>
      </section>

      {/* ══════════════════════════════════════════════════════════
          INVESTING SECTORS  bg=white
          pt-140px (label at 140px from navy section bottom)
          Header 2-col: label left + H2 left(600px) / body right(600px)
          5 sector rows with dividers
          Per row: sector name(240px) | description(520px) | opportunity signals(280px)
          Column gaps: 80px + 160px
          pb-180px
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Investing Sectors"
        className="w-full bg-white px-5 md:px-10 lg:px-20"
        style={{ paddingTop: "140px", paddingBottom: "180px" }}
      >
        <p
          className="font-body"
          style={{
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0.72px",
            textTransform: "uppercase",
            color: "#373738",
            margin: 0,
          }}
        >
          Investing Sectors
        </p>

        {/* Header 2-col: H2 left | body right, gap 80px */}
        <div
          className="flex flex-col xl:flex-row"
          style={{ marginTop: "24px", gap: "80px" }}
        >
          <h2
            className="font-heading xl:max-w-[600px] flex-1 min-w-0"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
              lineHeight: "42px",
              fontWeight: 300,
              color: "#1C1C1F",
              margin: 0,
            }}
          >
            Investing in the Systems<br />Behind Modern Growth
          </h2>
          <p
            className="font-body xl:max-w-[600px] flex-1 min-w-0"
            style={{
              fontSize: "15px",
              lineHeight: "22px",
              color: "#67686B",
              margin: 0,
              alignSelf: "flex-start",
              paddingTop: "9px",
            }}
          >
            Every investment opportunity is different. Our investment approach brings
            together the right capital, expertise, and strategies to support growth,
            manage risk, and deliver long-term performance across market cycles.
          </p>
        </div>

        {/* Sector rows — mt-80px from header bottom */}
        <div style={{ marginTop: "80px" }}>
          {sectors.map((sector) => (
            <div key={sector.name}>
              <hr style={{ border: "none", borderTop: "1px solid #D2D5D9", margin: 0 }} />

              <div
                className="flex flex-col xl:flex-row xl:items-start"
                style={{ paddingTop: "24px", paddingBottom: "40px" }}
              >
                {/* Col 1: Sector name, 240px */}
                <div style={{ width: "240px", minWidth: "240px", flexShrink: 0 }}>
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
                    {sector.name}
                  </h3>
                </div>

                {/* Col 2: Description, 520px, ml-80px */}
                <div
                  className="mt-3 xl:mt-0"
                  style={{ width: "520px", maxWidth: "100%", flexShrink: 0, marginLeft: "80px" }}
                >
                  <p
                    className="font-body"
                    style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0 }}
                  >
                    {sector.description}
                  </p>
                </div>

                {/* Col 3: Opportunity Signals, 280px, ml-160px */}
                <div
                  className="mt-4 xl:mt-0"
                  style={{ width: "280px", maxWidth: "100%", flexShrink: 0, marginLeft: "160px" }}
                >
                  <p
                    className="font-heading"
                    style={{
                      fontSize: "16px",
                      lineHeight: "22px",
                      fontWeight: 300,
                      color: "#1C1C1F",
                      margin: 0,
                      marginBottom: "12px",
                    }}
                  >
                    Opportunity Signals:
                  </p>
                  {sector.signals.map((signal) => (
                    <p
                      key={signal}
                      className="font-body"
                      style={{ fontSize: "15px", lineHeight: "22px", color: "#373738", margin: 0 }}
                    >
                      {signal}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <hr style={{ border: "none", borderTop: "1px solid #D2D5D9", margin: 0 }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PORTFOLIO  bg=white
          "PORTFOLIO" label centered
          H2 "Proud to partner…" 46px centered max-w-724
          Full-bleed panels: left flex-[640] navy+image (NO overlay) | right flex-[800] beige
          Swiss Payments portfolio card
          Pagination (01/05 + arrows) inside left col below image
          "Complete Portfolio →" navy button inside right col
          160px spacer at section bottom
         ══════════════════════════════════════════════════════════ */}
      <section aria-label="Portfolio" className="w-full bg-white overflow-hidden">

        {/* Header — content padded, centered */}
        <div className="px-5 md:px-10 lg:px-20 text-center">
          <p
            className="font-body"
            style={{
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.72px",
              textTransform: "uppercase",
              color: "#373738",
              margin: 0,
            }}
          >
            Portfolio
          </p>
          <h2
            className="font-heading mx-auto"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.875rem)",
              lineHeight: "1.087",
              fontWeight: 300,
              color: "#1C1C1F",
              maxWidth: "724px",
              margin: "0 auto",
              marginTop: "24px",
            }}
          >
            Proud to partner ideas shaping the economy of tomorrow
          </h2>
        </div>

        {/* Full-bleed panels — flex ratio 640:800 = 4:5 */}
        <div className="w-full flex items-start" style={{ marginTop: "80px" }}>

          {/* Left panel — navy bg + image, NO overlay */}
          <div
            className="relative flex flex-col overflow-hidden"
            style={{ flex: "640 1 0%", backgroundColor: "#0B1738" }}
          >
            <div className="relative" style={{ height: "650px" }}>
              <Image
                src="/images/investments/portfolio-tile.jpg"
                alt="Portfolio"
                fill
                className="object-cover object-center"
                sizes="44vw"
              />
            </div>

            {/* Pagination — 64px below image bottom */}
            <div
              className="flex items-center px-5 md:px-10 lg:px-20"
              style={{ paddingTop: "64px", paddingBottom: "64px", gap: "16px" }}
            >
              <span
                className="font-heading"
                style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#1C1C1F" }}
              >
                01
              </span>
              <div style={{ width: "160px", height: "1px", backgroundColor: "#D2D5D9" }} />
              <span
                className="font-heading"
                style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#D2D5D9" }}
              >
                05
              </span>
              <button
                aria-label="Previous"
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: "32px", height: "32px" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M8 2L4 6L8 10" stroke="#D2D5D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                aria-label="Next"
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: "32px", height: "32px", backgroundColor: "#F5E9DC" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M4 2L8 6L4 10" stroke="#1C1C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right panel — beige bg, Swiss Payments card */}
          <div
            className="relative flex flex-col overflow-hidden"
            style={{ flex: "800 1 0%", backgroundColor: "#F5E9DC", padding: "56px 80px 66px 48px" }}
          >
            {/* Visit Website — top right, absolute */}
            <a
              href="#"
              className="font-body absolute flex items-center"
              style={{
                top: "72px",
                right: "80px",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#1C1C1F",
                textDecoration: "none",
                gap: "4px",
              }}
            >
              Visit Website
              <span className="flex items-center justify-center" style={{ width: "20px", height: "20px" }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#1C1C1F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            {/* Logo — 208×56 */}
            <div className="relative flex-shrink-0" style={{ width: "208px", height: "56px" }}>
              <Image
                src="/images/icons/logo-swiss-payments.svg"
                alt="Swiss Payments"
                fill
                className="object-contain object-left"
              />
            </div>

            {/* Category tags */}
            <div
              className="flex items-center font-body"
              style={{
                marginTop: "32px",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.72px",
                textTransform: "uppercase",
                color: "#67686B",
                gap: "12px",
              }}
            >
              <span>Fintech</span>
              <span style={{ width: "1px", height: "10px", backgroundColor: "#AEB0B3" }} />
              <span>B2C</span>
              <span style={{ width: "1px", height: "10px", backgroundColor: "#AEB0B3" }} />
              <span>Agentic AI</span>
            </div>

            {/* Description — Inter 18px/28px */}
            <p
              className="font-body"
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                color: "#373738",
                margin: 0,
                marginTop: "48px",
                maxWidth: "672px",
                letterSpacing: "-0.18px",
              }}
            >
              Swiss Payments is a global financial platform built to help individuals
              and businesses send, receive, and manage money across borders with speed,
              security, and simplicity. It reflects MSS&apos;s focus on practical financial
              infrastructure with international relevance.
            </p>

            {/* Core Services + Stats split — mt-168px (from description bottom) */}
            <div className="flex" style={{ marginTop: "168px" }}>

              {/* Left: Core Services + Subscription Tiers, 352px wide */}
              <div style={{ width: "352px", flexShrink: 0 }}>
                <h4
                  className="font-heading"
                  style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
                >
                  Core Services:
                </h4>
                <div style={{ marginTop: "16px" }}>
                  {["Realtime Currency Converter", "Virtual and Physical Cards", "Secure Global Payments", "Fiat and Crypto Payments"].map((s) => (
                    <p key={s} className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0 }}>
                      {s}
                    </p>
                  ))}
                </div>

                <hr style={{ border: "none", borderTop: "1px solid #D2D5D9", margin: "40px 0", width: "312px" }} />

                <h4
                  className="font-heading"
                  style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
                >
                  Subscription Tiers
                </h4>
                <div style={{ marginTop: "16px" }}>
                  {["Silver — Essential transaction management tools.", "Gold — Enhanced limits for consumers.", "Platinum — Exclusive priority processing."].map((s) => (
                    <p key={s} className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0 }}>
                      {s}
                    </p>
                  ))}
                </div>
              </div>

              {/* Vertical divider */}
              <div style={{ width: "1px", backgroundColor: "#D2D5D9", alignSelf: "stretch", flexShrink: 0 }} />

              {/* Right: Stats, pl-40px */}
              <div style={{ paddingLeft: "40px", flex: 1 }}>
                {[
                  { value: "$1.5B", label: "Total transaction volume processed" },
                  { value: "500+", label: "Partner integrations worldwide" },
                  { value: "150+", label: "Countries and territories supported" },
                ].map((stat, i) => (
                  <div key={i} style={{ marginTop: i > 0 ? "88px" : "0" }}>
                    <p
                      className="font-heading"
                      style={{ fontSize: "36px", lineHeight: "42px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="font-body"
                      style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "8px" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Portfolio → button — right-aligned, 64px below card content */}
            <div className="flex justify-end" style={{ marginTop: "64px" }}>
              <Link
                href="/portfolio"
                className="font-body flex items-center justify-center"
                style={{
                  width: "192px",
                  height: "40px",
                  backgroundColor: "#1C1C1F",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  lineHeight: "24px",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
              >
                Complete Portfolio →
              </Link>
            </div>
          </div>
        </div>

        {/* 160px spacer before Responsibility Pledge */}
        <div style={{ height: "160px" }} />
      </section>

      {/* ══════════════════════════════════════════════════════════
          RESPONSIBILITY PLEDGE  bg=white
          "RESPONSIBILITY PLEDGE" label left-aligned
          H2 46px/50px left, max-w-760
          Horizontal divider (mt-40px)
          4 image cols (302×400, navy bg, image, NO overlay) gap-24px
          4 text cols below (title 20px + body 15px) gap-24px
          pb-54px
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Responsibility Pledge"
        className="w-full bg-white px-5 md:px-10 lg:px-20"
        style={{ paddingBottom: "54px" }}
      >
        <p
          className="font-body"
          style={{
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0.72px",
            textTransform: "uppercase",
            color: "#373738",
            margin: 0,
          }}
        >
          Responsibility Pledge
        </p>

        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.875rem)",
            lineHeight: "1.087",
            fontWeight: 300,
            color: "#1C1C1F",
            maxWidth: "760px",
            margin: 0,
            marginTop: "24px",
          }}
        >
          Strong investments are built with discipline, accountability, and trust.
        </h2>

        <hr style={{ border: "none", borderTop: "1px solid #D2D5D9", margin: "40px 0 0" }} />

        {/* 4 image columns — navy bg frames, image fills, NO overlay */}
        <div
          className="grid grid-cols-2 xl:grid-cols-4"
          style={{ gap: "24px", marginTop: "40px" }}
        >
          {pledges.map((pledge) => (
            <div
              key={pledge.title}
              className="relative overflow-hidden flex-shrink-0"
              style={{ height: "400px", backgroundColor: "#0B1738" }}
            >
              <Image
                src={pledge.image}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1280px) 50vw, 302px"
              />
            </div>
          ))}
        </div>

        {/* 4 text blocks */}
        <div
          className="grid grid-cols-2 xl:grid-cols-4"
          style={{ gap: "24px", marginTop: "24px" }}
        >
          {pledges.map((pledge) => (
            <div key={pledge.title + "-text"}>
              <h3
                className="font-heading"
                style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
              >
                {pledge.title}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
              >
                {pledge.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA SECTION  bg=white
          Content-width frame (1280px, px-20 margins), h=612
          bg image — NO overlay (Figma: IMAGE fills only, no solid fills)
          Text centered: H2 36px white + body 15px white + "Pitch to Us" white button
          pb-80px
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Call to Action"
        className="w-full bg-white px-5 md:px-10 lg:px-20"
        style={{ paddingBottom: "80px" }}
      >
        <div
          className="relative w-full overflow-hidden flex items-center justify-center"
          style={{ height: "612px", backgroundColor: "#0B1738" }}
        >
          {/* bg image — no overlay */}
          <Image
            src="/images/investments/cta-bg.jpg"
            alt=""
            fill
            quality={90}
            className="object-cover object-center"
            sizes="1280px"
          />

          <div
            className="relative z-10 flex flex-col items-center text-center px-10"
            style={{ maxWidth: "640px" }}
          >
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                lineHeight: "42px",
                fontWeight: 300,
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              Let&apos;s Start the Right Conversation!
            </h2>
            <p
              className="font-body"
              style={{
                fontSize: "15px",
                lineHeight: "22px",
                color: "#FFFFFF",
                margin: 0,
                marginTop: "12px",
                maxWidth: "520px",
              }}
            >
              If you are building, scaling, or exploring a strategic path forward, we
              welcome opportunities that align with the MSS ecosystem.
            </p>
            <Link
              href="/pitch"
              className="font-body flex items-center justify-center"
              style={{
                width: "120px",
                height: "40px",
                backgroundColor: "#FFFFFF",
                color: "#1C1C1F",
                fontSize: "16px",
                lineHeight: "24px",
                textDecoration: "none",
                marginTop: "32px",
                flexShrink: 0,
              }}
            >
              Pitch to Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
