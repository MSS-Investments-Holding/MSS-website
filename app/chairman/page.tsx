import Image from "next/image";
import type { Metadata } from "next";
import HeroBackgroundImage from "@/components/ui/HeroBackgroundImage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Chairman's Message | MSS Investments Holding",
  description:
    "A message from Vincent de Cannière, Chairman of MSS Investments Holding, on building with vision, discipline, and purpose.",
};

/*
 * Figma node 346-1157 · Page h=3770 · All measurements extracted via API.
 *
 * Hero (h=930):
 *   bg=#1C1C1F + image overlay (node 350:1438)
 *   Badge: y=250 from section top → 250-94=156px below nav
 *   H1:    y=298 from section top (24px below badge bottom)
 *   Right col bio: x=800 from page left (62.5% of content), y=750 from top
 *
 * Chairman section (below hero):
 *   pt=80px (frame y=669, hero bottom y=589 → 80px)
 *   pb=80px (signature bottom y=2667, footer divider y=2747 → 80px)
 *   Left col (portrait+name): x=80, w=342px
 *   Gap between cols: 178px (right col x=600 from page left = 520 from content left)
 *   Right col (letter): x=600 from page left, w=760px
 */

const letterParagraphs = [
  "To our partners, investors, colleagues, and stakeholders,",
  "MSS Investments Holding was built on a clear belief: lasting growth happens when capital, capability, and conviction work together with discipline. As financial systems become more connected and technology reshapes how businesses operate, the role of a holding company must go beyond ownership. Here, we focus on building the conditions in which strong businesses can grow with structure, purpose, and long-term relevance.",
  "Our work spans payments, financial services, artificial intelligence, digital infrastructure, and venture-backed platforms. These areas are connected by a broader shift in how value moves, how companies scale, and how modern economies are being built. We look for businesses with real utility, capable teams, and the potential to create value beyond the immediate moment. We support them not only with capital, but with perspective, relationships, and the patience required to build responsibly.",
  "To our investors, partners, and teams, thank you for the trust you continue to place in MSS. We remain committed to strengthening our portfolio, deepening our presence across relevant markets, and building with clarity, discipline, and purpose.",
];

export default function ChairmanPage() {
  return (
    <main id="main-content">

      {/* ══════════════════════════════════════════════════════════
          HERO — h=930px, bg=#1C1C1F + full-bleed image
          LEFT:  badge (y=250 from top) → pt-[156px] below nav
                 H1 (y=298 from top) → mt-6 (24px) below badge
          RIGHT: bio (y=750 from top, justify-end pb-[40px])
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Chairman's Message Hero"
        className="relative w-full overflow-hidden flex flex-col"
        style={{ minHeight: "930px", backgroundColor: "#1C1C1F" }}
      >
        <HeroBackgroundImage
          src="/images/chairman/chairman-hero-bg.jpg"
          alt=""
          className="object-cover object-center"
        />

        <div className="relative z-20">
          <Navbar />
        </div>

        {/*
         * Two-col at lg+:
         *   LEFT  flex-1:            badge + H1 starting 156px below nav
         *   RIGHT lg:w-[44%] xl:w-[560px]: bio bottom-aligned pb-[40px]
         */}
        <div className="relative z-10 flex-1 flex flex-col lg:flex-row px-5 md:px-12 lg:px-20">

          {/* LEFT — badge + H1 */}
          <div className="flex-1 pt-20 lg:pt-[156px] pb-10">
            {/* Badge — rgba(255,255,255,0.10) bg, h=24px, same icon as homepage badge */}
            <div
              className="inline-flex items-center mb-6"
              style={{ height: "24px", paddingLeft: "8px", paddingRight: "8px", gap: "4px", backgroundColor: "rgba(255,255,255,0.10)" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6.37441 4.79584C5.60863 4.34342 4.84787 3.8939 4.08724 3.44416C4.04851 3.42127 4.00873 3.39969 3.97995 3.36293C3.9143 3.27905 3.91 3.19229 3.9681 3.10479C4.02216 3.02337 4.11415 2.98803 4.2125 3.02492C4.39358 3.09286 4.57232 3.16721 4.75144 3.24036C5.66931 3.61521 6.587 3.99051 7.50475 4.36568C7.66181 4.42988 7.81858 4.49479 7.97608 4.55789C8.0038 4.569 8.0317 4.59259 8.06811 4.57002C8.07378 4.51939 8.03592 4.4886 8.01087 4.45381C7.32192 3.49722 6.63223 2.54116 5.94263 1.58505C5.89841 1.52373 5.85791 1.4602 5.87191 1.37978C5.88619 1.29771 5.92976 1.23579 6.01207 1.21163C6.09975 1.18591 6.17933 1.20165 6.2462 1.26901C6.40355 1.4275 6.56137 1.58552 6.71933 1.74339C7.8062 2.82969 8.89332 3.91572 9.97994 5.00227C10.2168 5.23911 10.4475 5.48237 10.6896 5.71372C10.8351 5.85283 10.8375 6.11802 10.6903 6.26508C9.74619 7.20812 8.80688 8.15602 7.86591 9.10223C7.34472 9.62632 6.82337 10.1503 6.3021 10.6743C6.29084 10.6856 6.27971 10.697 6.26832 10.7082C6.15689 10.8175 6.04421 10.8294 5.94445 10.7425C5.84553 10.6564 5.83929 10.5492 5.93015 10.423C6.10895 10.1747 6.28969 9.9278 6.46923 9.68C6.99848 8.94956 7.52762 8.21903 8.05626 7.48815C8.0712 7.4675 8.09497 7.45055 8.09417 7.41928C8.06633 7.40062 8.04295 7.42114 8.02082 7.43014C7.41446 7.67703 6.80853 7.92499 6.20245 8.17259C5.55223 8.43822 4.9022 8.70435 4.25147 8.9687C4.09793 9.03107 3.96971 8.97054 3.93252 8.82439C3.90925 8.73292 3.95424 8.64126 4.05663 8.58034C4.33942 8.4121 4.62286 8.24496 4.90622 8.07769C5.71519 7.60014 6.52427 7.12279 7.33313 6.64505C7.35543 6.63188 7.37573 6.61528 7.40082 6.59754C7.37209 6.56196 7.33631 6.56348 7.30438 6.5617C6.98718 6.54402 6.66984 6.52885 6.35266 6.51066C5.82943 6.48066 5.30629 6.44896 4.78312 6.41798C4.503 6.4014 4.2229 6.3846 3.94276 6.3683C3.49083 6.342 3.03891 6.31555 2.58694 6.2901C2.26704 6.27208 1.94704 6.25579 1.62712 6.23829C1.55577 6.23439 1.48454 6.2282 1.41321 6.22388C1.28714 6.21623 1.20151 6.13139 1.19974 6.0116C1.19778 5.87803 1.27854 5.78972 1.41201 5.78126C1.6445 5.76653 1.877 5.75189 2.10957 5.73846C2.68044 5.70549 3.25137 5.67343 3.82225 5.64066C4.4671 5.60364 5.11189 5.5656 5.75678 5.52921C6.27219 5.50013 6.78769 5.47284 7.30316 5.44477C7.33132 5.44323 7.36178 5.44885 7.39418 5.40423C7.05936 5.19175 6.71562 5.00142 6.37441 4.79584Z" fill="white" />
              </svg>
              <span className="text-label font-body text-white">Chairman Message</span>
            </div>

            <h1
              className="font-heading text-white"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4.375rem)",
                lineHeight: "1.056",
                fontWeight: 300,
                maxWidth: "720px",
              }}
            >
              Building with Vision, Discipline, and Purpose
            </h1>
          </div>

          {/* RIGHT — bio text, bottom-aligned */}
          {/*
           * Figma: x=800 from page left (62.5% of content) → lg:w-[44%] xl:w-[560px]
           * y=750 from section top → justify-end pb-[40px] (hero 930 - 750 - 140 = 40px)
           */}
          <div className="w-full lg:w-[44%] xl:w-[560px] flex flex-col justify-end pb-10 lg:pb-[40px]">
            <p
              className="font-body text-white"
              style={{ fontSize: "18px", lineHeight: "28px", letterSpacing: "-0.18px" }}
            >
              Vincent brings over four decades of experience across executive leadership, governance, private banking, acquisitions, and restructuring. His perspective helps guide MSS with a focus on institutional discipline, strategic growth, and long-term value creation.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CHAIRMAN SECTION
          Two-col layout:
            LEFT  (portrait + name): w=342px, gap=178px → xl:w-[342px] xl:mr-[178px]
            RIGHT (letter):          flex-1, starts at x=520 from content left
          pt=80px (669 - 589 hero bottom = 80px)
          pb=80px (signature bottom 2667 → footer 2747 = 80px)
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Chairman's Letter"
        className="w-full bg-white px-5 md:px-12 lg:px-20 pt-20 pb-20"
      >
        <div className="flex flex-col lg:flex-row lg:gap-[10%] xl:gap-[178px]">

          {/* ── LEFT COL — portrait frame + name + role ───────── */}
          {/*
           * Portrait navy frame: 342×320px, bg=#0B1738
           * Image inset: left=42px, top=32px, size=272×288px
           * Name: 20px below frame (Merriweather 26px/32px)
           * Role: 12px below name (Inter 15px/22px, #67686B)
           */}
          <div className="flex-shrink-0 lg:w-[28%] xl:w-[342px] mb-16 lg:mb-0">

            {/* Portrait — reuse the homepage leader frame (navy bg baked in, node 242:5007) */}
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "428/400", maxWidth: "342px" }}>
              <Image
                src="/images/about/leadership/leader-vincent-frame.png"
                alt="Vincent de Cannière, Chairman"
                fill
                className="object-cover object-center"
                sizes="342px"
              />
            </div>

            {/* Name — Merriweather 26px/32px, 20px below frame */}
            <h2
              className="font-heading"
              style={{
                fontSize: "26px",
                lineHeight: "32px",
                fontWeight: 300,
                color: "#1C1C1F",
                margin: 0,
                marginTop: "20px",
              }}
            >
              Vincent de Cannière
            </h2>

            {/* Role — Inter 15px/22px, #67686B, 12px below name */}
            <p
              className="font-body"
              style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
            >
              Chairman
            </p>
          </div>

          {/* ── RIGHT COL — opening quote + letter + signature ── */}
          {/*
           * Opening quote """ — Merriweather 72px/76px, #AEB0B3
           * Letter text — Inter 18px/28px ls=-0.18, #1C1C1F
           * Divider — 1px #D2D5D9, mt-10 (40px below text)
           * Signature — Merriweather 20px/26px, mt-10 (40px below divider)
           */}
          <div className="flex-1 min-w-0">

            {/* Opening curly quote — Merriweather 72px, #AEB0B3 */}
            <p
              className="font-heading"
              style={{
                fontSize: "72px",
                lineHeight: "76px",
                fontWeight: 300,
                color: "#AEB0B3",
                margin: 0,
              }}
              aria-hidden="true"
            >
              &ldquo;
            </p>

            {/* Letter body — 13 paragraphs, Inter 18px/28px ls=-0.18 */}
            <div>
              {letterParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-body"
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                    letterSpacing: "-0.18px",
                    color: "#1C1C1F",
                    margin: 0,
                    marginBottom: i < letterParagraphs.length - 1 ? "28px" : 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Divider — 40px below last paragraph (Figma: text ends y=2509, divider y=2549) */}
            <div style={{ height: "1px", backgroundColor: "#D2D5D9", marginTop: "40px" }} />

            {/* Signature — Merriweather 20px/26px, 40px below divider */}
            {/*
             * Three lines: name · role · company
             * Figma: y=2589, h=78px (3 × 26px line-height)
             */}
            <div style={{ marginTop: "40px", textAlign: "right" }}>
              <p
                className="font-heading"
                style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
              >
                Vincent de Cannière
              </p>
              <p
                className="font-heading"
                style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
              >
                Chairman
              </p>
              <p
                className="font-heading"
                style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
              >
                MSS Investments Holding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FOOTER — shared component
         ══════════════════════════════════════════════════════════ */}
      <Footer />

    </main>
  );
}
