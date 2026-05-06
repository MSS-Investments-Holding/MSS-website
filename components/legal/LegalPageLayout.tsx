import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/*
 * Shared layout for all legal pages — Figma node 353-1809 pattern.
 *
 * Hero (h=520px, bg=#0B1738):
 *   H1 left:  pt-[310px] (y=404 from section top, 310px below nav)
 *   Meta right: justify-end pb-[40px], Inter 18px, #E8E9EB
 *
 * Content (bg-white, px-5 md:px-10 lg:px-20, pt-20, pb-24):
 *   max-w-[740px] column (740/1280=57.8% of Figma content width)
 *   Per section: heading (Merriweather 26px) → divider 24px gap → body 24px gap
 *   Between sections: mt-10 (40px)
 */

export interface LegalSection {
  heading: string;
  body: string; // use \n\n to separate multiple paragraphs
}

interface Props {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalPageLayout({ title, lastUpdated, sections }: Props) {
  return (
    <main id="main-content">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        aria-label={`${title} Hero`}
        className="relative w-full flex flex-col"
        style={{ minHeight: "520px", backgroundColor: "#0B1738" }}
      >
        <div className="relative z-20">
          <Navbar />
        </div>

        {/*
         * Two-col at lg+:
         *   LEFT  flex-1:                    H1 at lg:pt-[310px]
         *   RIGHT lg:w-[28%] xl:w-[360px]:  meta text, justify-end pb-[40px]
         * Both end at the same y (386px from content div top = 40px from bottom).
         */}
        <div className="relative z-10 flex-1 flex flex-col lg:flex-row px-5 md:px-10 lg:px-20">
          <div className="flex-1 pt-16 lg:pt-[310px] pb-10 lg:pb-[40px]">
            <h1
              className="font-heading text-white"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4.375rem)",
                lineHeight: "1.056",
                fontWeight: 300,
                maxWidth: "720px",
              }}
            >
              {title}
            </h1>
          </div>

          <div className="lg:w-[28%] xl:w-[360px] flex flex-col justify-end pb-10 lg:pb-[40px]">
            <p
              className="font-body"
              style={{ fontSize: "18px", lineHeight: "28px", color: "#E8E9EB" }}
            >
              {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────── */}
      {/*
       * max-w-[740px]: Figma body text column width (740px / 1280px content).
       * pt-20 (80px): hero bottom to first heading (y=260 absolute → 81px below hero).
       */}
      <section
        aria-label={title}
        className="w-full bg-white px-5 md:px-10 lg:px-20 pt-20 pb-24"
      >
        <div style={{ maxWidth: "740px" }}>
          {sections.map((section, i) => {
            const paragraphs = section.body.split("\n\n").filter(Boolean);
            return (
              <div key={i} className={i > 0 ? "mt-10" : ""}>
                {/* Heading — Merriweather 26px/32px */}
                <h2
                  className="font-heading"
                  style={{
                    fontSize: "26px",
                    lineHeight: "32px",
                    fontWeight: 300,
                    color: "#1C1C1F",
                    margin: 0,
                  }}
                >
                  {section.heading}
                </h2>

                {/* Divider — 24px below heading */}
                <div style={{ height: "1px", backgroundColor: "#D2D5D9", marginTop: "24px" }} />

                {/* Body — Inter 15px/22px, 24px below divider */}
                <div style={{ marginTop: "24px" }}>
                  {paragraphs.map((para, j) => (
                    <p
                      key={j}
                      className="font-body"
                      style={{
                        fontSize: "15px",
                        lineHeight: "22px",
                        color: "#1C1C1F",
                        margin: 0,
                        marginTop: j > 0 ? "16px" : 0,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
