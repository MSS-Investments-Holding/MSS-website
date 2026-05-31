import Image from "next/image";
import Link from "next/link";
import type { SanityArticle } from "@/lib/sanity/types";
import { formatDate } from "@/lib/formatDate";

interface Props {
  articles: SanityArticle[];
}

export default function NewsSection({ articles }: Props) {
  return (
    <section aria-label="News and Media" className="w-full bg-white px-5 md:px-12 lg:px-20 pt-24 md:pt-32 lg:pt-36">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-10 lg:gap-20 mb-16 lg:mb-20">
        <h2
          className="home-news-section-h2 font-heading font-light md:w-1/2 lg:w-auto lg:flex-shrink-0"
          style={{ color: "#1C1C1F", margin: 0, maxWidth: "540px" }}
        >
          News &amp; Media
        </h2>
        <p
          className="font-body mt-4 md:mt-0 md:w-1/2 lg:w-auto lg:ml-auto"
          style={{ fontSize: "18px", lineHeight: "28px", letterSpacing: "-0.18px", color: "#67686B", maxWidth: "410px" }}
        >
          Perspectives on the ideas, partnerships, sectors, and market shifts
          shaping long-term growth.
        </p>
      </div>

      {/* ARTICLE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 sm:gap-x-[43px] lg:gap-x-[43px]">
        {articles.map((article, index) => {
          const col = index % 3;
          const isLastInLgRow = col === 2 || index === articles.length - 1;
          const isLastInSmRow = index % 2 === 1 || index === articles.length - 1;
          return (
          <Link
            key={article.slug.current}
            href={`/news/${article.slug.current}`}
            className="flex flex-col group relative"
            style={{ textDecoration: "none" }}
          >
            {/* Column divider — 2-col at sm */}
            {!isLastInSmRow && (
              <div
                className="absolute top-0 bottom-0 hidden sm:block lg:hidden pointer-events-none"
                style={{ right: "-22px", width: "1px", backgroundColor: "#D2D5D9" }}
                aria-hidden="true"
              />
            )}
            {/* Column divider — 3-col at lg */}
            {!isLastInLgRow && (
              <div
                className="absolute top-0 bottom-0 hidden lg:block pointer-events-none"
                style={{ right: "-22px", width: "1px", backgroundColor: "#D2D5D9" }}
                aria-hidden="true"
              />
            )}

            {/* Image */}
            <div
              className="relative w-full overflow-hidden flex-shrink-0"
              style={{ aspectRatio: "398/280", backgroundColor: "#0B1738" }}
            >
              {article.image && (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}
            </div>

            <h3 className="font-heading" style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px" }}>
              {article.title}
            </h3>
            <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}>
              {formatDate(article.date)}
            </p>
            <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#373738", margin: 0, marginTop: "12px" }}>
              {article.excerpt}
            </p>
          </Link>
          );
        })}
      </div>

    </section>
  );
}
