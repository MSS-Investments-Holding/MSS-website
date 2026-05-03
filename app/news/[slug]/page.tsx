import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { articles } from "@/lib/data";

/*
 * Figma node 466-2 · Page h=4804
 * Page left: x=19548 · Content left: x=19628 (80px) · Content width: 1280px
 *
 * Hero (h=520, bg=#1C1C1F):
 *   Date badge at y=282 from section top (188px below nav)
 *   Title below badge, mt-6 (24px gap), Merriweather 46px/50px, w=600
 *
 * Content two-col (pt-16 = 64px from hero bottom):
 *   LEFT  xl:w-[600px] lg:w-[47%]: sticky share sidebar
 *   RIGHT flex-1:                   article body (headings H3 Merriweather 20px,
 *                                   paragraphs Inter 15px, inline image, bullets)
 *
 * More News (after pb-20 = 80px gap): 3-col grid of related articles
 */

/* ── Static params ────────────────────────────────────────────── */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

/* ── Metadata ─────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | MSS Investments Holding`,
    description: article.excerpt,
  };
}

/* ── Featured article body ────────────────────────────────────── */
/*
 * Verbatim content from Figma for the first article.
 * When Sanity is wired, this will be replaced by Portable Text.
 */
type Block =
  | { type: "paragraph"; text: string }
  | { type: "h3"; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "bulletIntro"; text: string }
  | { type: "bullet"; label: string; description: string };

const featuredBody: Block[] = [
  {
    type: "paragraph",
    text: "In a market shaped by rapid technology shifts, changing customer expectations, and increasing pressure for sustainable growth, not every promising venture is strategically relevant. Some businesses may show early traction, strong storytelling, or short-term market excitement, yet still lack the depth required to become meaningful long-term opportunities. For MSS Investments Holding, strategic relevance is not measured by momentum alone. It is found in ventures that solve real problems, operate in markets with room to grow, and have the potential to become part of a wider economic or technological shift. A strategically relevant venture is not only attractive today — it has the structure, timing, and adaptability to remain valuable tomorrow.",
  },
  { type: "h3", text: "Beyond the Idea" },
  {
    type: "paragraph",
    text: "Every strong venture begins with an idea, but an idea on its own is rarely enough. Strategic relevance comes from how that idea is positioned, how clearly it addresses a market need, and how effectively it can be executed. The most compelling opportunities are often built around practical utility. They improve how people transact, how businesses operate, how services are delivered, or how markets become more efficient. They are not created simply to follow a trend. They are built around a meaningful problem with a clear reason to exist. This distinction matters. In today's environment, capital is more selective, customers are more informed, and markets are less forgiving of businesses that cannot demonstrate real value. Ventures that can clearly answer why they matter are better positioned to earn attention, investment, and long-term support.",
  },
  { type: "h3", text: "Market Timing and Structural Change" },
  {
    type: "paragraph",
    text: "A venture becomes strategically relevant when it sits close to a larger market movement. These movements may include the digitization of financial services, the rise of AI-enabled workflows, the growth of cross-border commerce, or the increasing demand for infrastructure that makes digital participation easier and more reliable. Timing is important. A strong opportunity is not always the first idea in a category, nor is it always the loudest. Often, the strongest ventures emerge when the market is finally ready for a better solution. That readiness can appear in different ways: customer behaviour may be changing, regulation may be creating new pathways, technology may have matured, or existing systems may be showing clear limitations. Strategic ventures understand this context and build around it.",
  },
  { type: "h3", text: "The Role of Execution" },
  {
    type: "paragraph",
    text: "A relevant opportunity still needs the ability to execute. Many ventures fail not because the idea is weak, but because the operating structure behind it is not strong enough. Execution means more than speed. It means clear priorities, capable leadership, disciplined decision-making, and the ability to translate strategy into progress. A venture with strong execution can adapt when conditions change, make better use of capital, and move from potential to performance with greater confidence. For investors and strategic partners, this is one of the most important signals. A business does not need to have everything solved, but it should show evidence that the team understands what needs to be built, what risks need to be managed, and what milestones matter next.",
  },
  {
    type: "image",
    src: "/images/news/article-inline.jpg",
    alt: "Strategic venture opportunity — MSS Investments Holding",
  },
  { type: "h3", text: "Long-Term Value Creation" },
  {
    type: "paragraph",
    text: "Strategic relevance ultimately depends on whether a venture can create value beyond the immediate moment. Short-term traction can be useful, but long-term value comes from durability. Durable ventures tend to have a few qualities in common. They solve problems that do not disappear quickly. They operate in markets with continuing demand. They are led by teams capable of learning and adapting. They build trust with customers and partners. And they create outcomes that matter beyond financial performance alone. For MSS, this long-term view is central. The strongest ventures are those that can contribute to a more connected, efficient, and opportunity-driven economy while also building meaningful commercial strength.",
  },
  { type: "h3", text: "What We Look For" },
  {
    type: "bulletIntro",
    text: "A strategically relevant venture usually combines several signals:",
  },
  {
    type: "bullet",
    label: "A clear problem",
    description: "The business addresses a real need rather than chasing a temporary trend.",
  },
  {
    type: "bullet",
    label: "A defined market",
    description: "The opportunity exists within a market with enough size, demand, or structural change to support growth.",
  },
  {
    type: "bullet",
    label: "A capable team",
    description: "The people behind the venture understand both the ambition and the execution required.",
  },
  {
    type: "bullet",
    label: "A long-term role",
    description: "The venture has the potential to remain relevant as markets, technologies, and customer needs evolve.",
  },
  { type: "h3", text: "Conclusion" },
  {
    type: "paragraph",
    text: "A venture opportunity is strategically relevant when it combines purpose, timing, execution, and long-term fit. It is not enough for a business to look exciting. It must be useful, scalable, and positioned within a market that matters. In today's economy, the strongest ventures are those that can move beyond early promise and become part of the infrastructure, services, and systems people and businesses rely on. These are the opportunities worth studying, supporting, and building with conviction.",
  },
];

/* Placeholder body for articles without full content yet */
function placeholderBody(excerpt: string): Block[] {
  return [
    { type: "paragraph", text: excerpt },
    {
      type: "paragraph",
      text: "This article is being prepared for publication. Full content will be available shortly as part of the MSS News & Media channel.",
    },
  ];
}

const shareLinks = [
  { label: "LinkedIn",            href: "#" },
  { label: "X — Formerly Twitter",href: "#" },
  { label: "Substack",            href: "#" },
  { label: "Facebook",            href: "#" },
];

/* ── Page ────────────────────────────────────────────────────────── */
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const isFeatured = slug === "what-makes-a-venture-opportunity-strategically-relevant-today";
  const body: Block[] = isFeatured ? featuredBody : placeholderBody(article.excerpt);
  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <main id="main-content">

      {/* ══════════════════════════════════════════════════════════
          HERO  h=520px, bg=#1C1C1F + article cover image
          Date badge at pt-[188px] (y=282 from section top = 188px below nav)
          Title mt-6 (24px gap), Merriweather 46px/50px, max-w-[600px]
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Article Hero"
        className="relative w-full overflow-hidden flex flex-col"
        style={{ minHeight: "520px", backgroundColor: "#1C1C1F" }}
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex-1 flex flex-col px-5 md:px-10 lg:px-20 pt-16 lg:pt-[188px] pb-10">
          {/* Date badge */}
          <div
            className="inline-flex items-center self-start mb-6"
            style={{ height: "24px", paddingLeft: "8px", paddingRight: "8px", backgroundColor: "rgba(255,255,255,0.10)" }}
          >
            <span className="text-label font-body text-white">{article.date}</span>
          </div>

          {/* Title — Merriweather 46px/50px, white, max-w-[600px] */}
          <h1
            className="font-heading text-white"
            style={{
              fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)",
              lineHeight: "1.087",
              fontWeight: 300,
              maxWidth: "600px",
            }}
          >
            {article.title}
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ARTICLE CONTENT  (two-col, pt-16 = 64px from hero bottom)
          LEFT  xl:w-[600px] lg:w-[47%]:  sticky "Share" sidebar
          RIGHT flex-1:                    article body
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Article Body"
        className="w-full bg-white px-5 md:px-10 lg:px-20 pt-16 pb-20"
      >
        <div className="flex flex-col lg:flex-row">

          {/* LEFT — share sidebar */}
          {/*
           * Figma: share label at y=243 (content left x=19628), same y as article body.
           * List spans 220px wide. The remaining width to the right col is intentional
           * whitespace creating separation (600px spacer, only 220px used).
           * sticky top-8 so links stay visible while reading.
           */}
          <div className="lg:w-[47%] xl:w-[600px] flex-shrink-0 mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-8" style={{ maxWidth: "220px" }}>
              <span
                className="text-label font-body block"
                style={{ color: "#67686B" }}
              >
                Share The Article.
              </span>

              {/* Share links with dividers */}
              <div className="mt-4">
                {shareLinks.map((link, i) => (
                  <div key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-[9px] font-body hover:opacity-70 transition-opacity"
                      style={{ fontSize: "15px", lineHeight: "22px", color: "#141010" }}
                    >
                      {link.label}
                      {/* External arrow icon */}
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                        <path d="M1 7L7 1M7 1H3M7 1V5" stroke="#67686B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    {i < shareLinks.length - 1 && (
                      <div style={{ height: "1px", backgroundColor: "#D2D5D9" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — article body */}
          {/*
           * Width = 680px at xl (Figma: x=20228, content left=19628, right col=600 from left)
           * Content: paragraphs (Inter 15px/22px #373738), H3 (Merriweather 20px #1C1C1F),
           * inline image (w=680 h=401), bullet list.
           * Gap between H3 and following paragraph: mt-4 (16px)
           * Gap between paragraph end and next H3: mt-10 (40px)
           */}
          <div className="flex-1 min-w-0">
            {body.map((block, i) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p
                      key={i}
                      className="font-body"
                      style={{
                        fontSize: "15px",
                        lineHeight: "22px",
                        color: "#373738",
                        margin: 0,
                        marginTop: i === 0 ? 0 : "40px",
                      }}
                    >
                      {block.text}
                    </p>
                  );

                case "h3":
                  return (
                    <h2
                      key={i}
                      className="font-heading"
                      style={{
                        fontSize: "20px",
                        lineHeight: "26px",
                        fontWeight: 300,
                        color: "#1C1C1F",
                        margin: 0,
                        marginTop: "40px",
                      }}
                    >
                      {block.text}
                    </h2>
                  );

                case "image":
                  return (
                    <div
                      key={i}
                      className="relative w-full overflow-hidden"
                      style={{ height: "401px", marginTop: "40px", backgroundColor: "#0B1738" }}
                    >
                      <Image
                        src={block.src}
                        alt={block.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 680px"
                      />
                    </div>
                  );

                case "bulletIntro":
                  return (
                    <p
                      key={i}
                      className="font-body"
                      style={{
                        fontSize: "15px",
                        lineHeight: "22px",
                        color: "#373738",
                        margin: 0,
                        marginTop: "16px",
                      }}
                    >
                      {block.text}
                    </p>
                  );

                case "bullet":
                  return (
                    <div key={i} style={{ marginTop: i > 0 ? "24px" : "40px" }}>
                      {/* Bullet label — Merriweather 16px/22px, #67686B */}
                      <p
                        className="font-heading"
                        style={{
                          fontSize: "16px",
                          lineHeight: "22px",
                          fontWeight: 300,
                          color: "#67686B",
                          margin: 0,
                        }}
                      >
                        {block.label}
                      </p>
                      {/* Bullet description — Inter 15px/22px, #373738 */}
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
                        {block.description}
                      </p>
                    </div>
                  );

                default:
                  return null;
              }
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MORE NEWS  (after pb-20 gap)
          Divider → pt-16 "More News" heading + "View All" button
          3-col grid of related articles (same layout as news listing)
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="More News"
        className="w-full bg-white px-5 md:px-10 lg:px-20 pb-24"
      >
        {/* Full-width divider */}
        <div style={{ height: "1px", backgroundColor: "#D2D5D9" }} />

        {/* Header row — "More News" left, "View All" right */}
        {/*
         * Figma: "More News" at y=3152 (64px below divider) → pt-16
         * "View All" button: x=1182 from content left, right-aligned
         */}
        <div className="flex items-center justify-between pt-16 mb-16">
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
              lineHeight: "1.167",
              fontWeight: 300,
              color: "#1C1C1F",
              margin: 0,
            }}
          >
            More News
          </h2>
          <Link
            href="/news"
            className="inline-flex items-center justify-center font-body text-white"
            style={{
              height: "40px",
              backgroundColor: "#1C1C1F",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "-0.32px",
              paddingLeft: "20px",
              paddingRight: "20px",
              whiteSpace: "nowrap",
            }}
          >
            View All
          </Link>
        </div>

        {/* 3-col related articles grid — same divider/padding pattern as news listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-0">
          {related.map((rel, index) => {
            const col = index % 3;
            const isLast = index === related.length - 1;
            return (
              <Link
                key={rel.slug}
                href={`/news/${rel.slug}`}
                className={[
                  "flex flex-col group mb-12 lg:mb-0",
                  "lg:px-[22px]",
                  col === 0 ? "lg:pl-0" : "",
                  col === 2 || isLast ? "lg:pr-0" : "",
                  col < 2 && !isLast ? "lg:border-r lg:border-[#D2D5D9]" : "",
                ].filter(Boolean).join(" ")}
                style={{ textDecoration: "none" }}
              >
                {/* Image */}
                <div
                  className="relative w-full overflow-hidden flex-shrink-0"
                  style={{ aspectRatio: "398/280", backgroundColor: "#0B1738" }}
                >
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* Title */}
                <h3
                  className="font-heading"
                  style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px" }}
                >
                  {rel.title}
                </h3>
                {/* Date */}
                <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}>
                  {rel.date}
                </p>
                {/* Excerpt */}
                <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#373738", margin: 0, marginTop: "12px" }}>
                  {rel.excerpt}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
