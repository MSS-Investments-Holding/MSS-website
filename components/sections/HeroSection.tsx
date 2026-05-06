import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import type { SanityArticle } from "@/lib/sanity/types";
import ArrowRight from "@/components/icons/ArrowRight";

interface Props {
  articles: SanityArticle[];
}

export default function HeroSection({ articles }: Props) {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col"
      style={{ minHeight: "930px" }}
      aria-label="Hero"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        quality={90}
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Figma overlays: 10% OVERLAY + 10% NORMAL black */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.10)", mixBlendMode: "overlay" }} />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.10)" }} />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Content — flex row at lg+, stacked below */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row px-5 md:px-10 lg:px-20">

        {/* LEFT — badge + H1 + body */}
        <div className="flex-1 pt-24 lg:pt-[170px] pb-10">
          {/* Badge */}
          <div
            className="inline-flex items-center mb-6"
            style={{ height: "24px", paddingLeft: "8px", paddingRight: "8px", gap: "4px", backgroundColor: "rgba(255,255,255,0.10)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6.37441 4.79584C5.60863 4.34342 4.84787 3.8939 4.08724 3.44416C4.04851 3.42127 4.00873 3.39969 3.97995 3.36293C3.9143 3.27905 3.91 3.19229 3.9681 3.10479C4.02216 3.02337 4.11415 2.98803 4.2125 3.02492C4.39358 3.09286 4.57232 3.16721 4.75144 3.24036C5.66931 3.61521 6.587 3.99051 7.50475 4.36568C7.66181 4.42988 7.81858 4.49479 7.97608 4.55789C8.0038 4.569 8.0317 4.59259 8.06811 4.57002C8.07378 4.51939 8.03592 4.4886 8.01087 4.45381C7.32192 3.49722 6.63223 2.54116 5.94263 1.58505C5.89841 1.52373 5.85791 1.4602 5.87191 1.37978C5.88619 1.29771 5.92976 1.23579 6.01207 1.21163C6.09975 1.18591 6.17933 1.20165 6.2462 1.26901C6.40355 1.4275 6.56137 1.58552 6.71933 1.74339C7.8062 2.82969 8.89332 3.91572 9.97994 5.00227C10.2168 5.23911 10.4475 5.48237 10.6896 5.71372C10.8351 5.85283 10.8375 6.11802 10.6903 6.26508C9.74619 7.20812 8.80688 8.15602 7.86591 9.10223C7.34472 9.62632 6.82337 10.1503 6.3021 10.6743C6.29084 10.6856 6.27971 10.697 6.26832 10.7082C6.15689 10.8175 6.04421 10.8294 5.94445 10.7425C5.84553 10.6564 5.83929 10.5492 5.93015 10.423C6.10895 10.1747 6.28969 9.9278 6.46923 9.68C6.99848 8.94956 7.52762 8.21903 8.05626 7.48815C8.0712 7.4675 8.09497 7.45055 8.09417 7.41928C8.06633 7.40062 8.04295 7.42114 8.02082 7.43014C7.41446 7.67703 6.80853 7.92499 6.20245 8.17259C5.55223 8.43822 4.9022 8.70435 4.25147 8.9687C4.09793 9.03107 3.96971 8.97054 3.93252 8.82439C3.90925 8.73292 3.95424 8.64126 4.05663 8.58034C4.33942 8.4121 4.62286 8.24496 4.90622 8.07769C5.71519 7.60014 6.52427 7.12279 7.33313 6.64505C7.35543 6.63188 7.37573 6.61528 7.40082 6.59754C7.37209 6.56196 7.33631 6.56348 7.30438 6.5617C6.98718 6.54402 6.66984 6.52885 6.35266 6.51066C5.82943 6.48066 5.30629 6.44896 4.78312 6.41798C4.503 6.4014 4.2229 6.3846 3.94276 6.3683C3.49083 6.342 3.03891 6.31555 2.58694 6.2901C2.26704 6.27208 1.94704 6.25579 1.62712 6.23829C1.55577 6.23439 1.48454 6.2282 1.41321 6.22388C1.28714 6.21623 1.20151 6.13139 1.19974 6.0116C1.19778 5.87803 1.27854 5.78972 1.41201 5.78126C1.6445 5.76653 1.877 5.75189 2.10957 5.73846C2.68044 5.70549 3.25137 5.67343 3.82225 5.64066C4.4671 5.60364 5.11189 5.5656 5.75678 5.52921C6.27219 5.50013 6.78769 5.47284 7.30316 5.44477C7.33132 5.44323 7.36178 5.44885 7.39418 5.40423C7.05936 5.19175 6.71562 5.00142 6.37441 4.79584Z" fill="white" />
            </svg>
            <span className="text-label font-body text-white">
              A Partner-Centric Holding Company
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-heading text-white"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.375rem)", lineHeight: "1.06", fontWeight: 300, maxWidth: "780px" }}
          >
            Building the Platforms of Future Economies
          </h1>

          {/* Body */}
          <p
            className="font-body mt-4 lg:mt-3"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: "28px", maxWidth: "524px", color: "var(--color-neutral-100)" }}
          >
            We brings capital, structure, and strategic direction to businesses shaping how currency moves, technology scales, and markets grow.
          </p>
        </div>

        {/* RIGHT — 2 latest articles from Sanity, bottom-aligned */}
        <div className="w-full lg:w-[416px] flex flex-col lg:justify-end pb-10 lg:pb-[70px] pt-8 lg:pt-0">
          <p className="text-label font-body mb-4" style={{ color: "var(--color-neutral-300)" }}>In the News:</p>
          <div className="w-full h-px bg-white/30 mb-4" />
          <div className="flex gap-4 flex-wrap sm:flex-nowrap">
            {articles.map((article) => (
              <Link
                key={article.slug.current}
                href={`/news/${article.slug.current}`}
                className="flex flex-col gap-3"
                style={{ width: "200px", flexShrink: 0, textDecoration: "none" }}
              >
                <div className="relative overflow-hidden bg-[var(--color-grey-black)]" style={{ width: "200px", height: "130px" }}>
                  {article.image && (
                    <Image src={article.image} alt="" fill className="object-cover" sizes="200px" />
                  )}
                </div>
                <p className="font-body text-white text-[15px] leading-[22px] line-clamp-3">{article.title}</p>
                <span
                  className="self-start inline-flex items-center gap-[4px] font-body text-white text-[14px] leading-5 py-[2px] border-b border-white hover:opacity-70 transition-opacity"
                  style={{ letterSpacing: "-0.14px" }}
                >
                  Read More
                  <ArrowRight size="sm" fill="white" />
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
