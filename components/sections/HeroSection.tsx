import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

const newsItems = [
  {
    image: "/images/news-card-2.jpg",
    caption: "Platforms designed with “regulatory-ready” compliance.",
  },
  {
    image: "/images/news-card-2.jpg",
    caption: "Platforms designed with “regulatory-ready” compliance.",
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "930px" }}
      aria-label="Hero"
    >
      {/* Background image — fills the full hero */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        quality={90}
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark navy overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(11,23,56,0.65)" }}
      />

      {/* Navbar — sits at the top (h=80px) */}
      <div className="absolute inset-x-0 top-0 z-20">
        <Navbar />
      </div>

      {/*
       * CONTENT AREA — two-column absolute layout matching Figma exactly
       * All y values are from hero top (0). Nav occupies y=0–80.
       * Left column:  x=80,  y=250 (badge), y=298 (h1), y=462 (body)
       * Right column: x=944, y=590 ("In the News:"), y=642 (cards)
       */}

      {/* LEFT COLUMN — badge + headline + body */}
      <div
        className="absolute z-10"
        style={{ left: "80px", top: "250px", width: "780px" }}
      >
        {/* Badge / eyebrow — Inter 400 12px white */}
        <div className="flex items-center gap-2 mb-6">
          <Image
            src="/images/logo-white.png"
            alt=""
            width={12}
            height={12}
            className="opacity-80"
          />
          <span
            className="text-label font-body text-white"
          >
            A Partner-Centric Holding Company
          </span>
        </div>

        {/* H1 — Merriweather 300 72px, lh=76px, white */}
        {/* y=298: badge bottom y=274, gap=24px (mb-6) */}
        <h1
          className="font-heading text-white"
          style={{
            fontSize: "72px",
            lineHeight: "76px",
            fontWeight: 300,
          }}
        >
          Building the Platforms of Future Economies
        </h1>

        {/* Body — Inter 400 18px, lh=28px, white */}
        {/* y=462: h1 bottom y=450, gap=12px (mt-3) */}
        <p
          className="font-body text-white mt-3"
          style={{
            fontSize: "18px",
            lineHeight: "28px",
            maxWidth: "524px",
          }}
        >
          A global holding company investing in payments, regulated finance, AI,
          digital assets, and venture-backed growth platforms.
        </p>
      </div>

      {/* RIGHT COLUMN — "In the News:" + separator + 2 news cards */}
      {/*
       * In the News: y=590 — right column top
       * Separator line: y=625 (35px gap from label top, 15px from label bottom)
       * Cards: y=642 (17px gap below separator)
       * Captions: y=784 (12px below cards)
       * Read More: y=840 (56px below caption top)
       */}
      <div
        className="absolute z-10"
        style={{ left: "944px", top: "590px", width: "416px" }}
      >
        {/* "In the News:" — Inter 400 14px, full white */}
        <p
          className="font-body text-white"
          style={{ fontSize: "14px", lineHeight: "20px" }}
        >
          In the News:
        </p>

        {/* Horizontal separator line — y=625, 35px below label top */}
        <div
          className="w-full border-t border-white/30"
          style={{ marginTop: "15px" }}
        />

        {/* News cards row — y=642, 17px below separator */}
        <div className="flex gap-4" style={{ marginTop: "17px" }}>
          {newsItems.map((item, i) => (
            <div key={i} className="flex flex-col gap-3" style={{ width: "200px" }}>
              {/* Card image — 200×130px */}
              <div
                className="relative overflow-hidden bg-[var(--color-grey-black)] flex-shrink-0"
                style={{ width: "200px", height: "130px" }}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>

              {/* Caption — Inter 400 15px, white, y=784 (12px below card bottom at y=772) */}
              <p
                className="font-body text-white"
                style={{ fontSize: "15px", lineHeight: "22px", marginTop: "0px" }}
              >
                {item.caption}
              </p>

              {/* Read More — Inter 400 14px, white, y=840 */}
              <span
                className="font-body text-white cursor-pointer hover:text-white/70 transition-colors"
                style={{ fontSize: "14px", lineHeight: "20px" }}
              >
                Read More →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
