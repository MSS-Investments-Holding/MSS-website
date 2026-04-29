import Image from "next/image";
import Link from "next/link";

export default function FootprintSection() {
  return (
    <section
      aria-label="Global Footprint"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "860px", backgroundColor: "var(--color-primary)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footprint-bg.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--color-primary)]/70" />
      </div>

      <div className="relative z-10 max-w-[var(--max-w-content)] mx-auto px-6 md:px-10 lg:px-20 py-20 md:py-28 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text content */}
        <div className="max-w-[520px]">
          <p className="text-label font-body text-white/50 uppercase tracking-widest mb-6">
            Global Footprint
          </p>
          <h2 className="text-h3 font-heading text-white mb-6">
            Positioned Across Markets That Matter
          </h2>
          <p className="text-body-sm font-body text-white/70 mb-10 leading-relaxed">
            With exposure across the UAE, Pakistan, UK, and wider regional
            growth markets, we operate at the intersection of capital flows and
            high-growth digital economies — bringing strategic presence where it
            counts most.
          </p>
          <Link
            href="/pitch"
            className="inline-flex items-center gap-2 px-6 h-10 bg-white text-btn font-body text-[var(--color-primary)] hover:bg-white/90 transition-colors duration-200"
          >
            Pitch to Us
          </Link>
        </div>

        {/* World map illustration — SVG globe rings */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
            {[1, 0.7, 0.45].map((scale, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-white/10"
                style={{
                  transform: `scale(${scale})`,
                  top: "50%",
                  left: "50%",
                  marginTop: `-${200 * scale}px`,
                  marginLeft: `-${200 * scale}px`,
                  width: `${400 * scale}px`,
                  height: `${400 * scale}px`,
                }}
              />
            ))}
            {/* Horizontal equator line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2" />
            {/* Vertical meridian line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
            {/* Location dots */}
            {[
              { label: "UAE", top: "44%", left: "58%" },
              { label: "UK", top: "32%", left: "45%" },
              { label: "Pakistan", top: "46%", left: "65%" },
            ].map((dot) => (
              <div
                key={dot.label}
                className="absolute flex flex-col items-center gap-1"
                style={{ top: dot.top, left: dot.left }}
              >
                <div className="w-2 h-2 rounded-full bg-white ring-4 ring-white/20" />
                <span className="text-label font-body text-white/60 whitespace-nowrap">
                  {dot.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
