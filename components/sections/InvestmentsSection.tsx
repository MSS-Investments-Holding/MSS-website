import Image from "next/image";
import Link from "next/link";
import { sectors } from "@/lib/data";
import {
  Landmark,
  Brain,
  TrendingUp,
  Layers,
  MonitorPlay,
} from "lucide-react";

const sectorIcons: Record<string, React.ReactNode> = {
  fintech: <Landmark size={36} strokeWidth={1} />,
  ai: <Brain size={36} strokeWidth={1} />,
  venture: <TrendingUp size={36} strokeWidth={1} />,
  "digital-asset": <Layers size={36} strokeWidth={1} />,
  media: <MonitorPlay size={36} strokeWidth={1} />,
};

export default function InvestmentsSection() {
  return (
    <section
      aria-label="Our Investment Sectors"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--color-brand-warm)" }}
    >
      {/* Background image with warm overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/investments-bg.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--color-brand-warm)]/80" />
      </div>

      <div className="relative z-10 max-w-[var(--max-w-content)] mx-auto px-6 md:px-10 lg:px-20 py-20 md:py-28">
        {/* Header */}
        <div className="max-w-[760px] mb-14">
          <h2 className="text-h2 font-heading text-[var(--color-text-primary)] mb-6">
            Investing Across High-Impact Digital Sectors and Eco-systems
          </h2>
          <p className="text-body-lg font-body text-[var(--color-text-secondary)]">
            Every investment opportunity is different. Our investment approach
            brings together strategic conviction, operational depth, and
            long-term partnership to back the ventures that matter most.
          </p>
        </div>

        {/* Sectors grid — 4 top, 1 bottom-left */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {sectors.slice(0, 4).map((sector) => (
            <SectorCard key={sector.title} sector={sector} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.slice(4).map((sector) => (
            <SectorCard key={sector.title} sector={sector} />
          ))}
          {/* Spacer to push card to left */}
          <div className="hidden lg:block" />
          <div className="hidden lg:block" />
          <div className="hidden lg:block" />
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/investments"
            className="inline-flex items-center gap-2 px-6 h-10 border border-[var(--color-text-primary)] text-btn font-body text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-white transition-colors duration-200"
          >
            Our Investments →
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectorCard({ sector }: { sector: (typeof sectors)[number] }) {
  return (
    <article className="flex flex-col gap-5 bg-white p-8 h-[400px] hover:shadow-lg transition-shadow duration-200">
      <div className="text-[var(--color-grey-500)]">
        {sectorIcons[sector.icon]}
      </div>
      <h3 className="text-h4 font-heading text-[var(--color-text-primary)]">
        {sector.title}
      </h3>
      <p className="text-body-sm font-body text-[var(--color-text-secondary)] flex-1 leading-relaxed">
        {sector.description}
      </p>
      <Link
        href="/investments"
        className="text-nav font-body text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mt-auto"
      >
        Read More →
      </Link>
    </article>
  );
}
