"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { leadership } from "@/lib/data";

export default function LeadershipSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((s) => (s - 1 + leadership.length) % leadership.length);
  const next = () => setActive((s) => (s + 1) % leadership.length);
  const person = leadership[active];

  return (
    <section
      aria-label="Leadership"
      className="w-full bg-white px-6 md:px-10 lg:px-20 py-20 md:py-28"
    >
      <div className="max-w-[var(--max-w-content)] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <div className="relative w-full lg:w-[428px] h-[400px] flex-shrink-0 bg-[var(--color-primary)] overflow-hidden">
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover object-top transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 428px"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-between flex-1 min-h-[400px]">
            <div>
              <p className="text-label font-body text-[var(--color-text-muted)] uppercase tracking-widest mb-6">
                {person.role}
              </p>
              <h2 className="text-h2 font-heading text-[var(--color-text-primary)] mb-6">
                {person.name}
              </h2>
              <p className="text-body-sm font-body text-[var(--color-text-secondary)] max-w-[520px] leading-relaxed">
                {person.bio}
              </p>
            </div>

            {/* Nav + CTA */}
            <div className="mt-10 flex items-center gap-4 flex-wrap">
              {/* Arrows */}
              <button
                onClick={prev}
                aria-label="Previous leader"
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                  active === 0
                    ? "border-[var(--color-border)] text-[var(--color-text-muted)]"
                    : "border-[var(--color-grey-black)] text-[var(--color-grey-black)] hover:bg-[var(--color-grey-black)] hover:text-white"
                }`}
              >
                <ChevronLeft size={16} strokeWidth={1.5} />
              </button>
              <button
                onClick={next}
                aria-label="Next leader"
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                  active === leadership.length - 1
                    ? "border-[var(--color-border)] text-[var(--color-text-muted)]"
                    : "border-[var(--color-grey-black)] text-[var(--color-grey-black)] hover:bg-[var(--color-grey-black)] hover:text-white"
                }`}
              >
                <ChevronRight size={16} strokeWidth={1.5} />
              </button>

              <div className="w-px h-5 bg-[var(--color-border)] mx-1" />

              <Link
                href="/about#leadership"
                className="inline-flex items-center gap-2 px-6 h-10 border border-[var(--color-text-primary)] text-btn font-body text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-white transition-colors duration-200"
              >
                About Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
