import Image from "next/image";
import Link from "next/link";
import type { SanityArticle } from "@/lib/sanity/types";
import { formatDate } from "@/lib/formatDate";

interface Props {
  articles: SanityArticle[];
}

export default function NewsSection({ articles }: Props) {
  return (
    <section aria-label="News and Media" className="w-full bg-white px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-start mb-16 lg:mb-20">
        <h2
          className="font-heading lg:flex-shrink-0"
          style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)", lineHeight: "1.087", fontWeight: 300, color: "#1C1C1F", margin: 0, maxWidth: "540px" }}
        >
          News &amp; Media
        </h2>
        <p
          className="font-body mt-4 lg:mt-0 lg:ml-auto"
          style={{ fontSize: "18px", lineHeight: "28px", letterSpacing: "-0.18px", color: "#67686B", maxWidth: "410px" }}
        >
          Perspectives on the ideas, partnerships, sectors, and market shifts
          shaping long-term growth.
        </p>
      </div>

      {/* ARTICLE GRID — 3 cols, gap-x-[43px] for equal column widths */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-y-16 lg:gap-x-[43px]">
        {articles.map((article, index) => {
          const col = index % 3;
          const isLastInRow = col === 2 || index === articles.length - 1;
          return (
          <Link
            key={article.slug.current}
            href={`/news/${article.slug.current}`}
            className="flex flex-col group relative"
            style={{ textDecoration: "none" }}
          >
            {/* Column divider centred in the 43px gap */}
            {!isLastInRow && (
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
          </Link>
          );
        })}
      </div>

    </section>
  );
}
