import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/data";

export default function NewsSection() {
  return (
    <section
      aria-label="News and Media"
      className="w-full bg-white px-6 md:px-10 lg:px-20 py-20 md:py-28"
    >
      <div className="max-w-[var(--max-w-content)] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <h2 className="text-h2 font-heading text-[var(--color-text-primary)] mb-4">
              News &amp; Media
            </h2>
            <p className="text-body-lg font-body text-[var(--color-text-secondary)] max-w-[600px]">
              Perspectives on the ideas, partnerships, sectors, and market
              shifts shaping long-term value creation.
            </p>
          </div>
          <Link
            href="/news"
            className="flex-shrink-0 text-label font-body text-[var(--color-text-secondary)] uppercase tracking-wider hover:text-[var(--color-text-primary)] transition-colors"
          >
            View All →
          </Link>
        </div>

        {/* Articles grid — 3 columns, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.number} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <article className="flex flex-col group cursor-pointer">
      {/* Image */}
      <div className="relative w-full aspect-[398/280] overflow-hidden bg-[var(--color-neutral-100)] mb-5">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-h4 font-heading text-[var(--color-text-muted)]">
          {article.number}
        </span>
        <span className="text-body-sm font-body text-[var(--color-text-muted)]">
          {article.date}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-h5 font-heading text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-text-secondary)] transition-colors">
        {article.title}
      </h3>

      {/* Excerpt */}
      <p className="text-body-sm font-body text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 mb-4">
        {article.excerpt}
      </p>

      <span className="text-nav font-body text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors mt-auto">
        Read More →
      </span>
    </article>
  );
}
