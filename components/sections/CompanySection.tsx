import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";

const stats = [
  { value: "$1.5B+", label: "Strategic capital across the broader financial ecosystem.", bg: "#F5E9DC", valueColor: "#1C1C1F", labelColor: "#373738" },
  { value: "7+",     label: "Ventures operating across emerging, priority sectors.",    bg: "#0B1738", valueColor: "#FFFFFF",  labelColor: "#E8E9EB" },
  { value: "200+",   label: "Collective workforce driving execution across the MSS ecosystem.", bg: "#C5D3E5", valueColor: "#1C1C1F", labelColor: "#373738" },
];

export default function CompanySection() {
  return (
    <section aria-label="About MSS Investments Holding" className="w-full bg-white">

      {/* ── TOP AREA: two columns — label+H2 left, empty right ─── */}
      <div className="w-full px-5 md:px-10 lg:px-20 pt-16 lg:pt-24">
        <div className="flex flex-col lg:flex-row lg:items-start gap-0">

          {/* Left column — label + H2 */}
          <div className="w-full lg:w-[41%] lg:flex-shrink-0">
            <span className="text-label font-body block" style={{ color: "#373738" }}>
              About the Company
            </span>
            <h2
              className="font-heading mt-6"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)", lineHeight: "1.087", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px" }}
            >
              At the Intersection of Capital and Opportunity
            </h2>
          </div>

          {/* Right column empty at top — spacer */}
          <div className="hidden lg:block flex-1" />
        </div>
      </div>

      {/* ── SEPARATOR — full content width ───────────────────────── */}
      <div className="mx-5 md:mx-10 lg:mx-20 mt-10 lg:mt-16 h-px bg-[var(--color-border)]" />

      {/* ── BOTTOM AREA: body + stats + button (right-aligned at desktop) */}
      <div className="w-full px-5 md:px-10 lg:px-20 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row">

          {/* Left spacer at desktop — mirrors the heading column width */}
          <div className="hidden lg:block lg:w-[41%] lg:flex-shrink-0" />

          {/* Right column — body, stats, button */}
          <div className="flex-1 pt-10 lg:pl-8 xl:pl-[154px]">
            {/* Body text — Inter 400 18px, color #67686B */}
            <p
              className="font-body"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: "28px", letterSpacing: "-0.18px", color: "#67686B" }}
            >
              We are focused on the technologies transforming the foundations of
              modern economies. We deploy capital with conviction. We build for
              permanence and execute with precision. Our portfolio reflects a
              deliberate investment approach shaped by sector relevance,
              operational depth, and strategic market positioning.
              <br /><br />
              With a footprint spanning the UAE, Pakistan, the United Kingdom,
              and surrounding growth markets, MSS brings together businesses
              aligned with the structural shifts redefining how modern economies
              move, transact, and scale.
            </p>

            {/* Stats — 3 cards, responsive: stack on mobile, row on desktop */}
            <div className="flex flex-col sm:flex-row gap-2 mt-14 sm:mt-16">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex flex-col"
                  style={{ backgroundColor: stat.bg, padding: "16px 20px", gap: "16px", flex: "1" }}
                >
                  <span className="font-heading" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: "42px", fontWeight: 300, color: stat.valueColor, margin: 0, display: "block" }}>
                    {stat.value}
                  </span>
                  <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: stat.labelColor, margin: 0 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-[4px] font-body text-white mt-14"
              style={{ height: "40px", backgroundColor: "#1C1C1F", fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.32px", whiteSpace: "nowrap", paddingLeft: "20px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px" }}
            >
              About Us
              <ArrowRight size="lg" fill="white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
