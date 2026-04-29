"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { processSteps } from "@/lib/data";

export default function PortfolioProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const prev = () => setActiveStep((s) => (s - 1 + processSteps.length) % processSteps.length);
  const next = () => setActiveStep((s) => (s + 1) % processSteps.length);

  return (
    <section aria-label="Portfolio and Investment Process" className="w-full">
      {/* Section heading — full width */}
      <div className="w-full bg-white px-6 md:px-10 lg:px-20 pt-20 pb-10">
        <div className="max-w-[var(--max-w-content)] mx-auto">
          <p className="text-label font-body text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
            Portfolio
          </p>
          <h2 className="text-h2 font-heading text-[var(--color-text-primary)] max-w-[680px]">
            Proud to partner ideas shaping the economy of tomorrow
          </h2>
        </div>
      </div>

      {/* Split layout — Process (left) + Portfolio spotlight (right) */}
      <div className="w-full flex flex-col lg:flex-row">
        {/* LEFT — Process carousel (navy bg) */}
        <div
          className="w-full lg:w-[calc(640/1440*100%)] bg-[var(--color-primary)] flex flex-col"
          style={{ minHeight: "650px" }}
        >
          <div className="flex flex-col flex-1 px-8 md:px-12 pt-14 pb-10">
            {/* Step content */}
            <div className="flex-1">
              <p className="text-label font-body text-white/50 uppercase tracking-widest mb-8">
                Investment Process
              </p>
              <h3 className="text-h3 font-heading text-white mb-4">
                {processSteps[activeStep].step}
              </h3>
              <p className="text-body-sm font-body text-white/70 max-w-[380px]">
                {processSteps[activeStep].description}
              </p>
            </div>

            {/* Step indicators + nav */}
            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                {processSteps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    aria-label={`Go to step ${i + 1}`}
                    className={`h-0.5 transition-all duration-300 ${
                      i === activeStep ? "w-8 bg-white" : "w-4 bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous step"
                  className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft size={16} strokeWidth={1.5} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next step"
                  className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <ChevronRight size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Process image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[380px]">
            <Image
              src={processSteps[activeStep].image}
              alt={`${processSteps[activeStep].step} phase`}
              fill
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </div>
        </div>

        {/* RIGHT — Portfolio spotlight (warm bg) */}
        <div
          className="w-full lg:w-[calc(800/1440*100%)] bg-[var(--color-brand-warm)] flex flex-col px-8 md:px-12 py-14"
        >
          {/* Logo placeholder */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              {/* Swiss Payments logo — using text fallback */}
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-[#FF5B04]" />
                <span className="font-body text-[var(--color-text-primary)] font-medium text-base tracking-tight">
                  Swiss Payments
                </span>
              </div>
            </div>
            <Link
              href="https://swisspayments.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 h-10 bg-[var(--color-grey-black)] text-white text-btn font-body hover:bg-[var(--color-neutral-600)] transition-colors text-sm"
            >
              Visit Website ↗
            </Link>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-3 mb-6">
            {["Fintech", "B2C", "Agentic AI"].map((tag) => (
              <span
                key={tag}
                className="text-label font-body text-[var(--color-text-secondary)] uppercase tracking-wider border-r border-[var(--color-border)] pr-3 last:border-0"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-body-lg font-body text-[var(--color-text-primary)] mb-6 max-w-[580px]">
            Swiss Payments is a global financial platform built to help
            individuals and businesses move money simply, securely, and across
            borders — with full regulatory compliance.
          </p>

          <p className="text-body-sm font-body text-[var(--color-text-secondary)] mb-8 max-w-[560px]">
            Realtime Currency Converter · Virtual and Physical Cards · Secure
            Global Payments · FX Management · Multi-Currency Accounts
          </p>

          {/* Core Services */}
          <div className="mb-8">
            <h4 className="text-h5 font-heading text-[var(--color-text-primary)] mb-4">
              Core Services:
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Silver — Essential transaction management tools",
                "Gold — Enhanced limits for consumer and business accounts",
                "Enterprise — Full-suite compliance and FX infrastructure",
              ].map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2 text-body-sm font-body text-[var(--color-text-secondary)]"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-text-muted)] flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 border-t border-[var(--color-border)] pt-8">
            {[
              { value: "$1.5B", label: "Transaction volume" },
              { value: "500+", label: "Enterprise clients" },
              { value: "500+", label: "Team members" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-h3 font-heading text-[var(--color-text-primary)]">
                  {s.value}
                </span>
                <span className="text-body-sm font-body text-[var(--color-text-secondary)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
