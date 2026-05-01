import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/data";

// Homepage shows the first 6 articles from the shared source
const homeArticles = articles.slice(0, 6);

export default function NewsSection() {
  return (
    <section aria-label="News and Media" className="w-full bg-white px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24">

      {/* HEADER — H2 left, body text RIGHT-aligned */}
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

      {/* ARTICLE GRID — 3 cols, vertical dividers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-x-0">
        {homeArticles.map((article, index) => {
          const col = index % 3;
          const isLastInRow = col === 2 || index === homeArticles.length - 1;
          return (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className={[
                "flex flex-col group",
                "lg:px-[21px]",
                col === 0 ? "lg:pl-0" : "",
                col === 2 || index === homeArticles.length - 1 ? "lg:pr-0" : "",
                !isLastInRow ? "lg:border-r lg:border-[#D2D5D9]" : "",
              ].filter(Boolean).join(" ")}
              style={{ textDecoration: "none" }}
            >
              {/* Image — 398×280px */}
              <div
                className="relative w-full overflow-hidden flex-shrink-0"
                style={{ aspectRatio: "398/280", backgroundColor: "#0B1738" }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <h3 className="font-heading" style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px" }}>
                {article.title}
              </h3>
              <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}>
                {article.date}
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
