import Link from "next/link";
import { stats } from "@/lib/data";
import { cn } from "@/lib/utils";

const statBg: Record<string, string> = {
  warm: "bg-[var(--color-brand-warm)]",
  navy: "bg-[var(--color-primary)] text-white",
  silver: "bg-[var(--color-brand-silver)]",
};

export default function CompanySection() {
  return (
    <section
      aria-label="About the Company"
      className="w-full bg-white px-6 md:px-10 lg:px-20 pt-20 pb-24"
    >
      <div className="max-w-[var(--max-w-content)] mx-auto">
        {/* Intro paragraph */}
        <p className="text-body-lg font-body text-[var(--color-text-secondary)] max-w-[700px] mb-16">
          We are focused on the technologies transforming the foundations of
          modern economies — creating enduring value through disciplined,
          strategic holding.
        </p>

        {/* Two-column headings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-h2 font-heading text-[var(--color-text-primary)]">
              At the Intersection of Capital and Opportunity
            </h2>
          </div>
          <div className="md:pt-1">
            <h2 className="text-h2 font-heading text-[var(--color-text-primary)]">
              Experienced Leadership, with Depth and Perspective
            </h2>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] mb-12">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className={cn(
                "flex flex-col gap-3 p-8",
                statBg[stat.bg]
              )}
            >
              <span
                className={cn(
                  "text-h3 font-heading",
                  stat.bg === "navy" ? "text-white" : "text-[var(--color-text-primary)]"
                )}
              >
                {stat.value}
              </span>
              <p
                className={cn(
                  "text-body-sm font-body",
                  stat.bg === "navy" ? "text-white/70" : "text-[var(--color-text-secondary)]"
                )}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs row */}
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/about"
            className="text-label font-body text-[var(--color-text-secondary)] uppercase tracking-wider hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1"
          >
            About the Company
            <span aria-hidden="true" className="ml-1">→</span>
          </Link>
          <div className="w-px h-4 bg-[var(--color-border)]" />
          <Link
            href="/about#leadership"
            className="text-label font-body text-[var(--color-text-secondary)] uppercase tracking-wider hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-1"
          >
            Leadership
            <span aria-hidden="true" className="ml-1">→</span>
          </Link>
          <div className="flex-1" />
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 h-10 bg-[var(--color-grey-black)] text-white text-btn font-body hover:bg-[var(--color-neutral-600)] transition-colors"
          >
            About Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
