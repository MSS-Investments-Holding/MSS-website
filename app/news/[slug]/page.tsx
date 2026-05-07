import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText, type PortableTextComponents } from "next-sanity";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getArticleBySlug, getAllArticleSlugs, getAllArticles } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { formatDate } from "@/lib/formatDate";

// Revalidate every 60 s so new Sanity content appears within a minute
export const revalidate = 60;

/* ── Static params (generated from Sanity slugs) ─────────────── */
export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

/* ── Metadata ─────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | MSS Investments Holding`,
    description: article.excerpt,
  };
}

/* ── Portable Text component map ─────────────────────────────── */
const portableComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p
        className="font-body"
        style={{ fontSize: "15px", lineHeight: "22px", color: "#373738", margin: 0, marginTop: "40px" }}
      >
        {children}
      </p>
    ),
    h3: ({ children }) => (
      <h2
        className="font-heading"
        style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "40px" }}
      >
        {children}
      </h2>
    ),
  },
  types: {
    image: ({ value }) => (
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "401px", marginTop: "40px", backgroundColor: "#0B1738" }}
      >
        <Image
          src={urlFor(value).width(1360).quality(90).url()}
          alt={value.alt ?? ""}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 680px"
        />
      </div>
    ),
  },
};

function buildShareLinks(url: string, title: string) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  return [
    { label: "LinkedIn",             href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { label: "X — Formerly Twitter", href: `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
    { label: "Substack",             href: `https://substack.com/notes/new?url=${u}` },
    { label: "Facebook",             href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
  ];
}

/* ── Page ────────────────────────────────────────────────────── */
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, allArticles] = await Promise.all([
    getArticleBySlug(slug),
    getAllArticles(),
  ]);

  if (!article) notFound();

  const related = allArticles
    .filter((a) => a.slug.current !== slug)
    .slice(0, 3);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mss-website-sigma.vercel.app";
  const articleUrl = `${siteUrl}/news/${slug}`;
  const shareLinks = buildShareLinks(articleUrl, article.title);

  return (
    <main id="main-content">

      {/* ══════════════════════════════════════════════════════════
          HERO  h=520px, bg=#1C1C1F + article cover image
          Date badge at pt-[188px] (188px below nav)
          Title mt-6, Merriweather 46px/50px, max-w-[600px]
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Article Hero"
        className="relative w-full overflow-hidden flex flex-col"
        style={{ minHeight: "520px", backgroundColor: "#1C1C1F" }}
      >
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex-1 flex flex-col px-5 md:px-10 lg:px-20 pt-16 lg:pt-[188px] pb-10">
          <div
            className="inline-flex items-center self-start mb-6"
            style={{ height: "24px", paddingLeft: "8px", paddingRight: "8px", backgroundColor: "rgba(255,255,255,0.10)" }}
          >
            <span className="text-label font-body text-white">{formatDate(article.date)}</span>
          </div>

          <h1
            className="font-heading text-white"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)", lineHeight: "1.087", fontWeight: 300, maxWidth: "600px" }}
          >
            {article.title}
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ARTICLE CONTENT  two-col
          LEFT xl:w-[600px]: sticky share sidebar
          RIGHT flex-1: Portable Text body from Sanity
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Article Body"
        className="w-full bg-white px-5 md:px-10 lg:px-20 pt-16 pb-20"
      >
        <div className="flex flex-col lg:flex-row">

          {/* Share sidebar */}
          <div className="lg:w-[47%] xl:w-[600px] flex-shrink-0 mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-8" style={{ maxWidth: "220px" }}>
              <span className="text-label font-body block" style={{ color: "#67686B" }}>
                Share The Article.
              </span>
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

          {/* Article body — Portable Text */}
          <div className="flex-1 min-w-0">
            {article.body ? (
              /* first-child margin reset so opening paragraph has no top margin */
              <div className="[&>*:first-child]:mt-0 [&>h2+p]:mt-4">
                <PortableText value={article.body} components={portableComponents} />
              </div>
            ) : (
              <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B" }}>
                {article.excerpt}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MORE NEWS — 3 related articles
         ══════════════════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section aria-label="More News" className="w-full bg-white px-5 md:px-10 lg:px-20">
          <div style={{ height: "1px", backgroundColor: "#D2D5D9" }} />

          <div className="flex items-center justify-between pt-16 mb-16">
            <h2
              className="font-heading"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", lineHeight: "1.167", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
            >
              More News
            </h2>
            <Link
              href="/news"
              className="inline-flex items-center justify-center font-body text-white"
              style={{ height: "40px", backgroundColor: "#1C1C1F", fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.32px", paddingLeft: "20px", paddingRight: "20px", whiteSpace: "nowrap" }}
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-0 lg:gap-x-[43px]">
            {related.map((rel, index) => {
              const col = index % 3;
              const isLastInRow = col === 2 || index === related.length - 1;
              return (
              <Link
                key={rel.slug.current}
                href={`/news/${rel.slug.current}`}
                className="flex flex-col group relative"
                style={{ textDecoration: "none" }}
              >
                {!isLastInRow && (
                  <div
                    className="absolute top-0 bottom-0 hidden lg:block pointer-events-none"
                    style={{ right: "-22px", width: "1px", backgroundColor: "#D2D5D9" }}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="relative w-full overflow-hidden flex-shrink-0"
                  style={{ aspectRatio: "398/280", backgroundColor: "#0B1738" }}
                >
                  {rel.image && (
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                </div>
                <h3
                  className="font-heading"
                  style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px" }}
                >
                  {rel.title}
                </h3>
                <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}>
                  {formatDate(rel.date)}
                </p>
                <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#373738", margin: 0, marginTop: "12px" }}>
                  {rel.excerpt}
                </p>
              </Link>
              );
            })}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
