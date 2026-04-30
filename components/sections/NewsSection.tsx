import Image from "next/image";

/*
 * News & Media — exact Figma layout (y=6740 to y=8056)
 *
 * Header (two-column, same y=6880):
 *   LEFT  x=80  : "News & Media" H2 (Merriweather 300 48px), w=540
 *   RIGHT x=950 : body text (Inter 400 18px, #67686B), w=410
 *
 * Article grid — 3 columns, 2 rows, gap=43px:
 *   Row 1 (y=7000): articles 1–3 at x=80, 521, 962
 *   Row 2 (y=7508): articles 4–6 at x=80, 521, 962
 *   Each image: 398×280px, navy bg
 *
 * Per-article order (from y-coordinate gaps):
 *   Image (h=280)
 *   Title  — 24px below image  (Merriweather 300 20px/26px, #1C1C1F)
 *   Date   — 12px below title  (Inter 400 15px/22px, #67686B)
 *   Excerpt — 12px below date  (Inter 400 15px/22px, #373738)
 *
 * NO number prefix (01/02/03…)
 * NO "Read More →" link
 * NO "View All →" in header
 */

const articles = [
  {
    image: "/images/news/article-1.jpg",
    date: "12 April 2026",
    title: "What Makes a Venture Opportunity Strategically Relevant Today",
    excerpt: "A view on the qualities that define strong early-stage opportunities across technology and financial infrastructure.",
  },
  {
    image: "/images/news/article-2.jpg",
    date: "12 April 2026",
    title: "Building for Long-Term Value in High-Growth Markets",
    excerpt: "How sector focus, market positioning, and disciplined execution come together to create durable value.",
  },
  {
    image: "/images/news/article-3.jpg",
    date: "12 April 2026",
    title: "AI's Expanding Role in Operational and Financial Systems",
    excerpt: "Beyond experimentation, AI is beginning to influence the systems, workflows, and decision-making layers of modern finance.",
  },
  {
    image: "/images/news/article-4.jpg",
    date: "12 April 2026",
    title: "The Next Phase of Cross-Border Payments Infrastructure",
    excerpt: "A closer look at how faster settlement systems, compliance layers, and multi-market connectivity are being rebuilt.",
  },
  {
    image: "/images/news/article-5.jpg",
    date: "12 April 2026",
    title: "Why Multi-Currency Platforms Are Becoming Strategic Infrastructure",
    excerpt: "As global business grows more connected, financial platforms that simplify currency movement and access are gaining strategic importance.",
  },
  {
    image: "/images/news/article-6.jpg",
    date: "12 April 2026",
    title: "Where Finance, Technology, and Infrastructure Are Converging",
    excerpt: "The strongest opportunities increasingly sit at the intersection of regulated finance, digital systems, and infrastructure-grade execution.",
  },
];

export default function NewsSection() {
  return (
    <section aria-label="News and Media" className="w-full bg-white px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24">

      {/* ── HEADER — H2 left, body right (same y in Figma) ────── */}
      {/*
       * H2:   x=80,  w=540 (42% of 1280px content)
       * Body: x=950, w=410 (starts 870px from content left = 68% of 1280)
       * Gap between them: 950-80-540 = 330px of breathing room
       */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20 mb-16 lg:mb-20">
        <h2
          className="font-heading lg:flex-shrink-0"
          style={{
            fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)",
            lineHeight: "1.087",
            fontWeight: 300,
            color: "#1C1C1F",
            margin: 0,
            maxWidth: "540px",
          }}
        >
          News &amp; Media
        </h2>

        <p
          className="font-body mt-4 lg:mt-0"
          style={{
            fontSize: "18px",
            lineHeight: "28px",
            letterSpacing: "-0.18px",
            color: "#67686B",
            maxWidth: "410px",
          }}
        >
          Perspectives on the ideas, partnerships, sectors, and market shifts
          shaping long-term growth.
        </p>
      </div>

      {/* ── ARTICLE GRID — 3 cols desktop, 2 tablet, 1 mobile ── */}
      {/*
       * Column gap: 43px in Figma (521-80-398=43, 962-521-398=43)
       * Tailwind gap-10 = 40px ≈ 43px
       * Row gap between row 1 bottom and row 2 images:
       *   Row 1 image bottom: 7000+280=7280
       *   Row 2 image top: 7508 → gap=228px (includes title+date+excerpt+spacing above row 2)
       *   In flex layout this comes naturally from the card content height
       */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {articles.map((article) => (
          <article key={article.title} className="flex flex-col">

            {/* Image — 398×280px, navy bg */}
            <div
              className="relative w-full overflow-hidden flex-shrink-0"
              style={{ aspectRatio: "398/280", backgroundColor: "#0B1738" }}
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Title — 24px below image */}
            <h3
              className="font-heading"
              style={{
                fontSize: "20px",
                lineHeight: "26px",
                fontWeight: 300,
                color: "#1C1C1F",
                margin: 0,
                marginTop: "24px",
              }}
            >
              {article.title}
            </h3>

            {/* Date — 12px below title */}
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
              {article.date}
            </p>

            {/* Excerpt — 12px below date */}
            <p
              className="font-body"
              style={{
                fontSize: "15px",
                lineHeight: "22px",
                color: "#373738",
                margin: 0,
                marginTop: "12px",
              }}
            >
              {article.excerpt}
            </p>

          </article>
        ))}
      </div>

    </section>
  );
}
