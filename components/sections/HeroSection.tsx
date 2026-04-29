import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { heroNewsItems } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[930px] flex flex-col overflow-hidden"
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
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-[var(--color-primary)]/60" />

      {/* Nav overlaid on hero */}
      <div className="relative z-10">
        <Navbar dark={false} />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-6 md:px-10 lg:px-20 pb-0">
        {/* Main copy */}
        <div className="mt-10 md:mt-16 max-w-[780px]">
          {/* Eyebrow badge */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-white/60" />
            <span className="text-label font-body text-white/80 uppercase tracking-widest">
              A Partner-Centric Holding Company
            </span>
          </div>

          <h1 className="text-h1 font-heading text-white mb-6">
            Building the Platforms of Future Economies
          </h1>
          <p className="text-body-lg font-body text-white/80 max-w-[600px]">
            A global holding company investing in payments, regulated finance,
            AI, digital asset infrastructure, and venture-backed businesses
            shaping modern economies.
          </p>
        </div>

        {/* In the news strip */}
        <div className="mt-auto pb-10 md:pb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="text-nav font-body text-white/60 uppercase tracking-widest">
              In the News:
            </span>
            <div className="flex-1 h-px bg-white/20 max-w-[120px]" />
          </div>

          <div className="flex gap-4 flex-wrap">
            {heroNewsItems.map((item, i) => (
              <div
                key={i}
                className="flex gap-3 items-start max-w-[280px] group cursor-pointer"
              >
                <div className="relative w-[120px] h-[78px] flex-shrink-0 rounded overflow-hidden bg-[var(--color-grey-black)]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-body-sm font-body text-white/80 leading-snug line-clamp-3">
                    {item.excerpt}
                  </p>
                  <span className="text-nav font-body text-white/50 group-hover:text-white/80 transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
