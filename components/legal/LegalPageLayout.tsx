import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LegalContactMediums from "@/components/legal/LegalContactMediums";

/*
 * Shared layout for all legal pages — Figma node 353-1809 pattern.
 *
 * Hero (h=520px, bg=#0B1738):
 *   H1 left:  pt-[310px] (y=404 from section top, 310px below nav)
 *   Meta right: justify-end pb-[40px], Inter 18px, #E8E9EB
 *
 * Content (bg-white, px-5 md:px-12 lg:px-20, pt-20, pb-24):
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
        className="legal-hero-section relative w-full"
        style={{ backgroundColor: "#0B1738" }}
      >
        <div className="relative z-20">
          <Navbar />
        </div>

        <h1 className="legal-hero-title font-heading text-white">
          {title}
        </h1>

        <p className="legal-hero-meta font-body text-[#E8E9EB]">
          {lastUpdated}
        </p>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────── */}
      {/*
       * max-w-[740px]: Figma body text column width (740px / 1280px content).
       * pt-20 (80px): hero bottom to first heading (y=260 absolute → 81px below hero).
       */}
      <section
        aria-label={title}
        className="w-full bg-white px-5 md:px-12 lg:px-20 pt-16 md:pt-20 pb-24"
      >
        <div style={{ maxWidth: "740px" }}>
          {sections.map((section, i) => {
            const paragraphs = section.body.split("\n\n").filter(Boolean);
            return (
              <div key={i} className={i > 0 ? "mt-10" : ""}>
                {/* Heading — Merriweather 26px/32px */}
                <h2
                  className="legal-section-heading font-heading"
                  style={{
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
                      className="legal-section-body font-body"
                      style={{
                        color: "#373738",
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

      <LegalContactMediums />
      <Footer topMargin={false} />
    </main>
  );
}
