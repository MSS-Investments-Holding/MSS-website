"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  { icon: "/images/icons/step-discovery.svg",  title: "Discovery",   desc: "Assess the idea, context, and fundamentals behind the idea." },
  { icon: "/images/icons/step-strategy.svg",   title: "Strategy",    desc: "Aligning the concept with a long-term execution potential." },
  { icon: "/images/icons/step-validation.svg", title: "Validation",  desc: "Evaluate viability and refine the opportunity before scale." },
  { icon: "/images/icons/step-launch.svg",     title: "Launch",      desc: "Turning concept into reality with a focus on clarity, and growth." },
];

const TOTAL_SLIDES = 5;

export default function PortfolioProcessSection() {
  const [slide, setSlide] = useState(0);

  return (
    <section aria-label="Portfolio" className="w-full bg-white">

      {/* ── HEADER — centered ─────────────────────────────────── */}
      <div className="w-full flex flex-col items-center text-center px-5 md:px-10 lg:px-20 pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-28">
        <span className="text-label font-body" style={{ color: "#373738" }}>Portfolio</span>
        <h2
          className="font-heading mt-6 max-w-[724px]"
          style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)", lineHeight: "1.087", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px" }}
        >
          Proud to partner ideas shaping the economy of tomorrow
        </h2>
      </div>

      {/* ── 4 PROCESS STEPS — responsive 4-col grid ───────────── */}
      {/* Extra px beyond section padding to match Figma step inset */}
      <div className="w-full px-10 md:px-20 lg:px-32 pb-20 md:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              {/* Icon — 40×40 white bg with grey SVG, centered */}
              <div className="w-10 h-10 bg-white flex items-center justify-center flex-shrink-0">
                <img src={step.icon} alt="" width={32} height={32} style={{ width: "32px", height: "32px", objectFit: "contain" }} />
              </div>
              {/* Title */}
              <h3
                className="font-heading"
                style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "16px" }}
              >
                {step.title}
              </h3>
              {/* Description */}
              <p
                className="font-body"
                style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "8px" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SPLIT LAYOUT — image left + Swiss Payments right ─── */}
      <div className="w-full flex flex-col lg:flex-row">

        {/* LEFT — portfolio image + slider (640px at desktop) */}
        <div className="w-full lg:w-[calc(640/1440*100%)] flex-shrink-0 flex flex-col">
          {/* Image — 75% of right panel height (894px × 0.75 ≈ 670px) */}
          <div
            className="relative w-full overflow-hidden bg-[var(--color-primary)]"
            style={{ aspectRatio: "640/670", maxHeight: "670px" }}
          >
            <Image
              src="/images/portfolio-left.jpg"
              alt="Portfolio"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </div>

          {/* Slider controls */}
          <div className="flex items-center px-5 md:px-10 lg:px-20 py-6 gap-6 bg-white">
            {/* Counters + separator */}
            <div className="flex items-center gap-3">
              <span className="font-heading" style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#1C1C1F" }}>
                0{slide + 1}
              </span>
              <div className="w-10 h-px bg-[var(--color-border)]" />
              <span className="font-heading" style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#D2D5D9" }}>
                0{TOTAL_SLIDES}
              </span>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={() => setSlide(s => Math.max(0, s - 1))}
                aria-label="Previous"
                className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] hover:bg-[var(--color-neutral-100)] transition-colors"
                disabled={slide === 0}
              >
                <ChevronLeft size={12} strokeWidth={2} style={{ color: slide === 0 ? "#D2D5D9" : "#1C1C1F" }} />
              </button>
              <button
                onClick={() => setSlide(s => Math.min(TOTAL_SLIDES - 1, s + 1))}
                aria-label="Next"
                className="w-8 h-8 flex items-center justify-center transition-colors"
                style={{ backgroundColor: slide === TOTAL_SLIDES - 1 ? "transparent" : "#F5E9DC", border: slide === TOTAL_SLIDES - 1 ? "1px solid var(--color-border)" : "none" }}
                disabled={slide === TOTAL_SLIDES - 1}
              >
                <ChevronRight size={12} strokeWidth={2} style={{ color: slide === TOTAL_SLIDES - 1 ? "#D2D5D9" : "#1C1C1F" }} />
              </button>
            </div>
          </div>
        </div>

        {/*
         * RIGHT — Swiss Payments card
         * Padding: left=48px (Figma), right=80px (website standard), top=56px, bottom=66px
         * Height: auto (content-driven, not fixed)
         */}
        <div
          className="flex-1 flex flex-col"
          style={{ backgroundColor: "#F5E9DC", paddingLeft: "48px", paddingRight: "80px", paddingTop: "56px", paddingBottom: "66px" }}
        >
          {/* ── Logo + Visit Website ─────────────────────────────── */}
          {/* Tags top=144px from card top. Logo h=56px starts at top=56px. Gap logo→tags = 144-56-56=32px */}
          <div className="flex items-start justify-between gap-4" style={{ marginBottom: "32px" }}>
            <img
              src="/images/icons/logo-swiss-payments.svg"
              alt="Swiss Payments"
              width={207}
              height={56}
              style={{ width: "auto", maxWidth: "207px", height: "56px", objectFit: "contain", objectPosition: "left" }}
            />
            <a
              href="https://swisspayments.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-body text-white flex-shrink-0"
              style={{ height: "40px", backgroundColor: "#1C1C1F", fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.32px", paddingLeft: "20px", paddingRight: "16px", whiteSpace: "nowrap" }}
            >
              Visit Website
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>

          {/* ── Tags — gap tags→body = 160→208 = 48px ───────────── */}
          {/* Tags h=16px. Gap to body = 208-144-16=48px */}
          <div className="flex items-center gap-2" style={{ marginBottom: "48px" }}>
            {["Fintech", "B2C", "Agentic AI"].map((tag, i) => (
              <div key={tag} className="flex items-center gap-2">
                <span className="text-label font-body" style={{ color: "#67686B" }}>{tag}</span>
                {i < 2 && <div style={{ width: "1px", height: "10px", backgroundColor: "#AEB0B3" }} />}
              </div>
            ))}
          </div>

          {/* ── Body text — correct from Figma node 242:5034 ──────── */}
          {/* Body h=112px. Gap body→Core Services = 488-208-112=168px */}
          <p className="font-body" style={{ fontSize: "18px", lineHeight: "28px", letterSpacing: "-0.18px", color: "#373738", marginBottom: "168px" }}>
            Swiss Payments is a global financial platform built to help individuals
            and businesses send, receive, and manage money across borders with
            speed, security, and simplicity. It reflects MSS&apos;s focus on
            practical financial infrastructure with international relevance.
          </p>

          {/* ── Two-column data section ───────────────────────────── */}
          {/*
           * Vertical divider: x=400 from card left (width of left col = 400-48=352px)
           * Gap between divider and right col content: 440-400=40px
           * Right col width: (48+672) right edge = 720, minus 400 divider = 320px content minus 40px gap = 280px
           *
           * Horizontal divider: w=312px (matches text width), stroke=#AEB0B3
           *   Between services list bottom (530+88=618→657 gap=39px) and separator (657)
           *   Between separator (657) and Subscription Tiers top (698→gap=41px)
           */}
          <div className="flex">

            {/* LEFT col — Core Services + Subscription Tiers */}
            <div
              className="flex flex-col"
              style={{ width: "352px", flexShrink: 0, paddingRight: "40px", borderRight: "1px solid #AEB0B3" }}
            >
              {/* Core Services heading */}
              <h4 className="font-heading" style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginBottom: "16px" }}>
                Core Services:
              </h4>

              {/* Services list — 4 items from Figma node 242:5035 */}
              {["Realtime Currency Converter", "Virtual and Physical Cards", "Secure Global Payments", "Fiat and Crypto Payments"].map((s, i, arr) => (
                <p key={s} className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginBottom: i < arr.length - 1 ? "4px" : "0" }}>{s}</p>
              ))}

              {/* Horizontal divider — w=312px, stroke=#AEB0B3 */}
              {/* Gap: list bottom to divider = 39px, divider to tiers = 41px */}
              <div style={{ width: "312px", height: "1px", backgroundColor: "#AEB0B3", marginTop: "39px", marginBottom: "41px" }} />

              {/* Subscription Tiers heading */}
              <h4 className="font-heading" style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginBottom: "16px" }}>
                Subscription Tiers
              </h4>

              {/* Tiers list — 3 items from Figma node 242:5036 */}
              {[
                "Silver - Essential transaction management tools.",
                "Gold - Enhanced limits for consumers.",
                "Platinum - Exclusive priority processing.",
              ].map((s, i, arr) => (
                <p key={s} className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginBottom: i < arr.length - 1 ? "4px" : "0" }}>{s}</p>
              ))}
            </div>

            {/* RIGHT col — Stats */}
            {/* Gap from divider: 40px (1080-1040=40px) */}
            <div className="flex flex-col" style={{ paddingLeft: "40px", gap: "40px" }}>
              {[
                { val: "$1.5B", label: "Transaction volume" },
                { val: "500+",  label: "Enterprise clients" },
                { val: "500+",  label: "Team members" },
              ].map(s => (
                <div key={s.label} className="flex flex-col" style={{ gap: "4px" }}>
                  <span className="font-heading" style={{ fontSize: "36px", lineHeight: "42px", fontWeight: 300, color: "#1C1C1F" }}>
                    {s.val}
                  </span>
                  <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
