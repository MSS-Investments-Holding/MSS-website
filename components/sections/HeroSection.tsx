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
      {/* Figma overlays on image 25 (node 242:4785):
           fill[1]: black 10% OVERLAY blend
           fill[2]: black 10% NORMAL blend
          Combined effect is very subtle — image should remain clear */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.10)", mixBlendMode: "overlay" }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.10)" }}
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
        {/* Badge / eyebrow — Inter 400 12px, bg-white/10, arrow icon from Figma */}
        {/* Badge: h=24px, px=8px, icon=12×12, gap=4px — exact Figma values */}
        <div
          className="inline-flex items-center mb-6"
          style={{
            height: "24px",
            paddingLeft: "8px",
            paddingRight: "8px",
            gap: "4px",
            backgroundColor: "rgba(255,255,255,0.10)",
          }}
        >
          {/* Arrow SVG from Figma node 242:4821 — rendered at 12×12 matching icon frame */}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6.37441 4.79584C5.60863 4.34342 4.84787 3.8939 4.08724 3.44416C4.04851 3.42127 4.00873 3.39969 3.97995 3.36293C3.9143 3.27905 3.91 3.19229 3.9681 3.10479C4.02216 3.02337 4.11415 2.98803 4.2125 3.02492C4.39358 3.09286 4.57232 3.16721 4.75144 3.24036C5.66931 3.61521 6.587 3.99051 7.50475 4.36568C7.66181 4.42988 7.81858 4.49479 7.97608 4.55789C8.0038 4.569 8.0317 4.59259 8.06811 4.57002C8.07378 4.51939 8.03592 4.4886 8.01087 4.45381C7.32192 3.49722 6.63223 2.54116 5.94263 1.58505C5.89841 1.52373 5.85791 1.4602 5.87191 1.37978C5.88619 1.29771 5.92976 1.23579 6.01207 1.21163C6.09975 1.18591 6.17933 1.20165 6.2462 1.26901C6.40355 1.4275 6.56137 1.58552 6.71933 1.74339C7.8062 2.82969 8.89332 3.91572 9.97994 5.00227C10.2168 5.23911 10.4475 5.48237 10.6896 5.71372C10.8351 5.85283 10.8375 6.11802 10.6903 6.26508C9.74619 7.20812 8.80688 8.15602 7.86591 9.10223C7.34472 9.62632 6.82337 10.1503 6.3021 10.6743C6.29084 10.6856 6.27971 10.697 6.26832 10.7082C6.15689 10.8175 6.04421 10.8294 5.94445 10.7425C5.84553 10.6564 5.83929 10.5492 5.93015 10.423C6.10895 10.1747 6.28969 9.9278 6.46923 9.68C6.99848 8.94956 7.52762 8.21903 8.05626 7.48815C8.0712 7.4675 8.09497 7.45055 8.09417 7.41928C8.06633 7.40062 8.04295 7.42114 8.02082 7.43014C7.41446 7.67703 6.80853 7.92499 6.20245 8.17259C5.55223 8.43822 4.9022 8.70435 4.25147 8.9687C4.09793 9.03107 3.96971 8.97054 3.93252 8.82439C3.90925 8.73292 3.95424 8.64126 4.05663 8.58034C4.33942 8.4121 4.62286 8.24496 4.90622 8.07769C5.71519 7.60014 6.52427 7.12279 7.33313 6.64505C7.35543 6.63188 7.37573 6.61528 7.40082 6.59754C7.37209 6.56196 7.33631 6.56348 7.30438 6.5617C6.98718 6.54402 6.66984 6.52885 6.35266 6.51066C5.82943 6.48066 5.30629 6.44896 4.78312 6.41798C4.503 6.4014 4.2229 6.3846 3.94276 6.3683C3.49083 6.342 3.03891 6.31555 2.58694 6.2901C2.26704 6.27208 1.94704 6.25579 1.62712 6.23829C1.55577 6.23439 1.48454 6.2282 1.41321 6.22388C1.28714 6.21623 1.20151 6.13139 1.19974 6.0116C1.19778 5.87803 1.27854 5.78972 1.41201 5.78126C1.6445 5.76653 1.877 5.75189 2.10957 5.73846C2.68044 5.70549 3.25137 5.67343 3.82225 5.64066C4.4671 5.60364 5.11189 5.5656 5.75678 5.52921C6.27219 5.50013 6.78769 5.47284 7.30316 5.44477C7.33132 5.44323 7.36178 5.44885 7.39418 5.40423C7.05936 5.19175 6.71562 5.00142 6.37441 4.79584Z" fill="white"/>
          </svg>
          <span className="text-label font-body text-white">
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
        style={{ right: "80px", top: "590px", width: "416px" }}
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
