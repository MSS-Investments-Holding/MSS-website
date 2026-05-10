import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HeroBackgroundImage from "@/components/ui/HeroBackgroundImage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllArticles } from "@/lib/sanity/queries";
import { formatDate } from "@/lib/formatDate";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "News & Media | MSS Investments Holding",
  description:
    "Perspectives on the ideas, partnerships, sectors, and market shifts shaping long-term growth.",
};

const CATEGORIES = ["All", "Press Release", "Fintech", "Ventures", "Growth"];

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const active = params.category || "all";

  const articles = await getAllArticles();

  const filtered =
    active === "all"
      ? articles
      : articles.filter(
          (a) => a.category.toLowerCase().replace(/\s+/g, "-") === active
        );

  return (
    <main id="main-content">
      {/* ══════════════════════════════════════════════════════════
          HERO — h=520px, bg=#0B1738 navy
          H1 left: pt-[310px] (y=404 from section top, 310px below nav)
          Body right: justify-end pb-[40px] (body bottom y=386 from content top)
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="News and Media Hero"
        className="relative w-full overflow-hidden flex flex-col"
        style={{ minHeight: "520px", backgroundColor: "#0B1738" }}
      >
        <HeroBackgroundImage
          src="/images/news/news-hero-bg.jpg"
          alt=""
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.30)" }} />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex-1 flex flex-col lg:flex-row px-5 md:px-12 lg:px-20">
          {/* LEFT — H1 */}
          <div className="flex-1 pt-16 lg:pt-[310px] pb-10">
            <h1
              className="font-heading text-white"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4.375rem)",
                lineHeight: "1.056",
                fontWeight: 300,
                maxWidth: "720px",
              }}
            >
              News &amp; Media
            </h1>
          </div>

          {/* RIGHT — body text, bottom-aligned */}
          <div className="w-full lg:w-[44%] xl:w-[560px] flex flex-col justify-end pb-10 lg:pb-[40px]">
            <p
              className="font-body text-white"
              style={{ fontSize: "18px", lineHeight: "28px", letterSpacing: "-0.18px" }}
            >
              Perspectives on the ideas, partnerships, sectors, and market
              shifts shaping long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FILTER + ARTICLE GRID
          Filter: pt-14 (56px below hero), Merriweather 20px, gap-5 (20px)
          Grid: mt-10 (40px below filter), 3 cols, gap-y-10, dividers
         ══════════════════════════════════════════════════════════ */}
      <section aria-label="Articles" className="w-full bg-white px-5 md:px-12 lg:px-20 pt-14">

        {/* Filter tabs — server-side URL routing */}
        <nav aria-label="Filter articles by category" className="flex flex-wrap gap-5">
          {CATEGORIES.map((cat) => {
            const value = cat === "All" ? "all" : cat.toLowerCase().replace(/\s+/g, "-");
            const isActive = active === value;
            return (
              <Link
                key={cat}
                href={cat === "All" ? "/news" : `/news?category=${value}`}
                className="font-heading"
                style={{
                  fontSize: "20px",
                  lineHeight: "26px",
                  fontWeight: 300,
                  color: isActive ? "#1C1C1F" : "#67686B",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  textDecoration: "none",
                  borderBottom: isActive ? "2px solid #1C1C1F" : "2px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {cat}
              </Link>
            );
          })}
        </nav>

        {/* Article grid — gap-x-[43px] gives all 3 cols identical 1fr width */}
        {filtered.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-10 lg:gap-x-[43px]">
            {filtered.map((article, index) => {
              const col = index % 3;
              const isLastInRow = col === 2 || index === filtered.length - 1;
              return (
                <Link
                  key={article.slug.current}
                  href={`/news/${article.slug.current}`}
                  className="flex flex-col group relative"
                  style={{ textDecoration: "none" }}
                >
                  {/* Divider centred in the 43px gap (right: -22px) */}
                  {!isLastInRow && (
                    <div
                      className="absolute top-0 bottom-0 hidden lg:block pointer-events-none"
                      style={{ right: "-22px", width: "1px", backgroundColor: "#D2D5D9" }}
                      aria-hidden="true"
                    />
                  )}
                  {/* Image — 398×280 aspect, navy placeholder */}
                  <div
                    className="relative w-full overflow-hidden flex-shrink-0"
                    style={{ aspectRatio: "398/280", backgroundColor: "#0B1738" }}
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Title — Merriweather 20px/26px, #1C1C1F, 24px below image */}
                  <h2
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
                  </h2>

                  {/* Date — Inter 15px/22px, #67686B, 12px below title */}
                  <p
                    className="font-body"
                    style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
                  >
                    {formatDate(article.date)}
                  </p>

                  {/* Excerpt — Inter 15px/22px, #373738, 12px below date */}
                  <p
                    className="font-body"
                    style={{ fontSize: "15px", lineHeight: "22px", color: "#373738", margin: 0, marginTop: "12px" }}
                  >
                    {article.excerpt}
                  </p>
                </Link>
              );
            })}
          </div>
        ) : (
          <p
            className="font-body mt-16 pb-16"
            style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B" }}
          >
            No articles in this category yet.
          </p>
        )}

        {/* Load More — centered, mt-20 (80px below last row) */}
        {filtered.length >= 9 && (
          <div className="flex justify-center mt-20 pb-16">
            <button
              className="font-body text-white inline-flex items-center justify-center"
              style={{
                width: "119px",
                height: "40px",
                backgroundColor: "#1C1C1F",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.32px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════════
          PRESS KIT — full-bleed, h=686px
          bg=#F5E9DC + image + rgba(0,0,0,0.20)
          Vertical line: left=4.4% (64/1440), top=80px, h=526px
          Content: pl-[7.2%] xl:pl-[104px]
          Label pt-20 · H2 mt-[144px] · Button mt-[158px]
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Press Kit"
        className="relative w-full overflow-hidden"
        style={{ height: "686px", backgroundColor: "#F5E9DC" }}
      >
        <Image
          src="/images/news/news-presskit-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />

        {/* Decorative vertical line — x=64px (4.4% of 1440), top=80px, h=526px */}
        <div
          className="absolute hidden lg:block"
          style={{ left: "4.4%", top: "80px", width: "1px", height: "526px", backgroundColor: "rgba(255,255,255,0.40)" }}
        />

        {/* Content */}
        <div className="relative z-10 pt-20" style={{ paddingLeft: "7.2%" }}>
          <span className="text-label font-body block" style={{ color: "rgba(255,255,255,0.80)" }}>
            Press Kit
          </span>

          {/* H2: label ends at 96px (80+16), H2 at 240px → gap=144px */}
          <h2
            className="font-heading text-white"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
              lineHeight: "1.167",
              fontWeight: 300,
              margin: 0,
              marginTop: "144px",
              maxWidth: "527px",
            }}
          >
            Looking for media resources? Download the MSS press kit for
            free-to-use press and product imagery for both web and print.
          </h2>

          {/* Button: H2 ends at 408px (240+168), button at 566px → gap=158px */}
          <div style={{ marginTop: "158px" }}>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-body"
              style={{
                height: "40px",
                backgroundColor: "#FFFFFF",
                color: "#1C1C1F",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.32px",
                paddingLeft: "20px",
                paddingRight: "16px",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              Download Kit
              <svg width="13" height="13" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="#1C1C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PRESS INQUIRIES
          Divider: right 48% of content (from x=660/1280=51.6%)
          Content in right 48%, pt-16 (64px below divider), pb-20
         ══════════════════════════════════════════════════════════ */}
      <section aria-label="Press Inquiries" className="w-full bg-white px-5 md:px-12 lg:px-20 pt-20">
        {/* Divider — right-aligned, spans right 48% of content */}
        <div className="flex justify-end">
          <div className="w-full lg:w-[48%]" style={{ height: "1px", backgroundColor: "#D2D5D9" }} />
        </div>

        {/* Content — right-aligned in same 48% col */}
        <div className="flex flex-col lg:flex-row">
          <div className="hidden lg:block lg:w-[52%] lg:flex-shrink-0" />
          <div className="flex-1 pt-16">
            <h3
              className="font-heading"
              style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
            >
              Press Inquiries
            </h3>
            <p
              className="font-body"
              style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
            >
              For all press related information, get in touch at:
            </p>
            <a
              href="mailto:press@mssinvestmentsholding.com"
              className="font-body text-body-sm-emphasized"
              style={{ color: "#373738", display: "block", marginTop: "32px" }}
            >
              press@mssinvestmentsholding.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
