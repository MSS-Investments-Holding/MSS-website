import Image from "next/image";

/*
 * News & Media — exact Figma layout
 *
 * Header: H2 left (x=80), body RIGHT-aligned to x=950
 *   → flex-row with H2 left, body as ml-auto at desktop
 *
 * Article grid: 3 cols × 2 rows, gap=43px
 * Vertical dividers between columns: stroke=#D2D5D9, 1px (nodes 242:5057/5058/5059/5060)
 * Per article: Image → Title (24px) → Date (12px) → Excerpt (12px)
 * NO numbers, NO "Read More"
 */

const articles = [
  { image: "/images/news/article-1.jpg", date: "12 April 2026", title: "What Makes a Venture Opportunity Strategically Relevant Today",        excerpt: "A view on the qualities that define strong early-stage opportunities across technology and financial infrastructure." },
  { image: "/images/news/article-2.jpg", date: "12 April 2026", title: "Building for Long-Term Value in High-Growth Markets",                   excerpt: "How sector focus, market positioning, and disciplined execution come together to create durable value." },
  { image: "/images/news/article-3.jpg", date: "12 April 2026", title: "AI's Expanding Role in Operational and Financial Systems",              excerpt: "Beyond experimentation, AI is beginning to influence the systems, workflows, and decision-making layers of modern finance." },
  { image: "/images/news/article-4.jpg", date: "12 April 2026", title: "The Next Phase of Cross-Border Payments Infrastructure",               excerpt: "A closer look at how faster settlement systems, compliance layers, and multi-market connectivity are being rebuilt." },
  { image: "/images/news/article-5.jpg", date: "12 April 2026", title: "Why Multi-Currency Platforms Are Becoming Strategic Infrastructure",    excerpt: "As global business grows more connected, financial platforms that simplify currency movement and access are gaining strategic importance." },
  { image: "/images/news/article-6.jpg", date: "12 April 2026", title: "Where Finance, Technology, and Infrastructure Are Converging",         excerpt: "The strongest opportunities increasingly sit at the intersection of regulated finance, digital systems, and infrastructure-grade execution." },
];

export default function NewsSection() {
  return (
    <section aria-label="News and Media" className="w-full bg-white px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24">

      {/* ── HEADER — H2 left, body text RIGHT-aligned ─────────── */}
      {/*
       * Figma: H2 x=80 w=540, body x=950 w=410 — same y=6880
       * body x=950 from page left → from content left (80px margin): 870px
       * At 1280px content width: ml-auto pushes body to the right
       */}
      <div className="flex flex-col lg:flex-row lg:items-start mb-16 lg:mb-20">
        <h2
          className="font-heading lg:flex-shrink-0"
          style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)", lineHeight: "1.087", fontWeight: 300, color: "#1C1C1F", margin: 0, maxWidth: "540px" }}
        >
          News &amp; Media
        </h2>

        {/* ml-auto pushes body to the right, matching x=950 in Figma */}
        <p
          className="font-body mt-4 lg:mt-0 lg:ml-auto"
          style={{ fontSize: "18px", lineHeight: "28px", letterSpacing: "-0.18px", color: "#67686B", maxWidth: "410px" }}
        >
          Perspectives on the ideas, partnerships, sectors, and market shifts
          shaping long-term growth.
        </p>
      </div>

      {/* ── ARTICLE GRID ── 3 cols, vertical dividers between cols ─ */}
      {/*
       * Dividers: vertical 1px #D2D5D9 between col 1/2 and col 2/3 (Figma nodes 5057–5060)
       * Implemented as border-right on cards 0,1 (row 1) and 3,4 (row 2) — not on last in row
       * Gap: 43px between cards (521-80-398=43px in Figma)
       */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-x-0">
        {articles.map((article, index) => {
          const isLastInRow = (index + 1) % 3 === 0 || index === articles.length - 1;
          return (
            <article
              key={article.title}
              /* Figma: total col gap=43px, divider centred → ~21px each side */
              className={`flex flex-col lg:px-[21px] ${
                index % 3 === 0 ? "lg:pl-0" : ""
              } ${
                index % 3 === 2 || index === articles.length - 1 ? "lg:pr-0" : ""
              } ${
                !isLastInRow ? "lg:border-r lg:border-[#D2D5D9]" : ""
              }`}
            >
              {/* Image — 398×280px */}
              <div className="relative w-full overflow-hidden flex-shrink-0" style={{ aspectRatio: "398/280", backgroundColor: "#0B1738" }}>
                <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>

              {/* Title — 24px below image */}
              <h3 className="font-heading" style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px" }}>
                {article.title}
              </h3>

              {/* Date — 12px below title */}
              <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}>
                {article.date}
              </p>

              {/* Excerpt — 12px below date */}
              <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#373738", margin: 0, marginTop: "12px" }}>
                {article.excerpt}
              </p>
            </article>
          );
        })}
      </div>

    </section>
  );
}
