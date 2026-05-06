import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "What We Do | MSS Investments Holding",
  description:
    "MSS works where opportunity needs more than funding — it needs direction, access, and execution support across the full growth journey.",
};

/* ── Feature items ──────────────────────────────────────────────── */
const features = [
  {
    title: "Capital with Context",
    body: "We invest with an understanding of the market, the business model, and the role MSS can play beyond funding.",
  },
  {
    title: "Direction at Critical Moments",
    body: "We help teams make clearer decisions when the next stage of growth requires focus, structure, and alignment.",
  },
  {
    title: "Access That Opens Doors",
    body: "We bring relationships, market perspective, and ecosystem reach that can help businesses move faster and smarter.",
  },
  {
    title: "Execution That Holds Up",
    body: "We support the practical work behind growth, from refining operations to preparing ventures for scale.",
  },
];

/* ── SVG icons (80×80, grey #67686B) ───────────────────────────── */
function IconCapital() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
      <circle cx="23" cy="23" r="14" stroke="#67686B" strokeWidth="1.5" />
      <circle cx="23" cy="23" r="6" stroke="#67686B" strokeWidth="1.5" />
      <path d="M23 9v4M23 33v4M9 23h4M33 23h4" stroke="#67686B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconDirection() {
  return (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" aria-hidden="true">
      <circle cx="22.5" cy="22.5" r="14" stroke="#67686B" strokeWidth="1.5" />
      <path d="M22.5 8.5v14M22.5 8.5l-4 6M22.5 8.5l4 6" stroke="#67686B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22.5" cy="22.5" r="2" fill="#67686B" />
    </svg>
  );
}
function IconAccess() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
      <circle cx="14" cy="23" r="8" stroke="#67686B" strokeWidth="1.5" />
      <circle cx="32" cy="14" r="6" stroke="#67686B" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="6" stroke="#67686B" strokeWidth="1.5" />
      <path d="M22 23h4M26 19l6-3M26 27l6 3" stroke="#67686B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconExecution() {
  return (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="29" height="29" rx="4" stroke="#67686B" strokeWidth="1.5" />
      <path d="M15 22.5l5 5 10-10" stroke="#67686B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const icons = [IconCapital, IconDirection, IconAccess, IconExecution];

/* ── Stat cards ─────────────────────────────────────────────────── */
const stats = [
  { value: "$1.5B+", label: "Strategic capital across the broader financial ecosystem.", bg: "#F5E9DC", textColor: "#1C1C1F", labelColor: "#373738" },
  { value: "7+",    label: "Ventures operating across emerging, priority sectors.",    bg: "#0B1738", textColor: "#FFFFFF",  labelColor: "rgba(232,233,234,1)" },
  { value: "200+",  label: "Collective workforce driving execution across the MSS ecosystem.", bg: "#C5D3E5", textColor: "#1C1C1F", labelColor: "#373738" },
  { value: "8+",    label: "Markets represented across the MSS footprint.",            bg: "#E8E9EB", textColor: "#1C1C1F", labelColor: "#373738" },
];

/* ── Page ───────────────────────────────────────────────────────── */
export default function WhatWeDoPage() {
  return (
    <main id="main-content">

      {/* ══════════════════════════════════════════════════════════
          HERO  h=930px
          bg: #1B1C1E + image (NO overlay — Figma image fill only)
          H1: 72px Merriweather, white, left-aligned, pb-40px (bottom-aligned)
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Hero"
        className="relative w-full overflow-hidden flex flex-col"
        style={{ minHeight: "930px", backgroundColor: "#1B1C1E" }}
      >
        <Image
          src="/images/investments/hero-bg.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* No overlay — Figma: image rectangle has IMAGE fill only, no solid fills */}

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex-1 flex flex-col px-5 md:px-10 lg:px-20">
          <div className="flex-1" />
          {/* H1 bottom-aligned (40px from section bottom) */}
          <h1
            className="font-heading text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.375rem)",
              lineHeight: "1.056",
              fontWeight: 300,
              maxWidth: "630px",
              paddingBottom: "40px",
            }}
          >
            The Work Behind the Growth
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FEATURES  bg=white
          pt-96px → intro text at 96px from section top
          Content indented xl:ml-[560px] (560/1280 = 43.75% of content)
          4 feature items: 80×80 icon + title(20px) + body(15px)
          Dividers between items, pb-120px
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="What We Do"
        className="w-full bg-white px-5 md:px-10 lg:px-20"
        style={{ paddingTop: "96px", paddingBottom: "120px" }}
      >
        {/* Intro text — indented 560px at xl */}
        <div className="xl:ml-[560px]">
          <p
            className="font-heading"
            style={{
              fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
              lineHeight: "32px",
              fontWeight: 300,
              color: "#1C1C1F",
              maxWidth: "720px",
            }}
          >
            MSS works where opportunity needs more than funding, it needs
            direction, access, and execution support. We support ventures and
            businesses through the practical elements that turn ideas and
            potential into stronger commercial outcomes.
          </p>

          {/* Feature items */}
          <div style={{ marginTop: "64px" }}>
            {features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <div key={feature.title}>
                  {/* Divider before each item (top border of item block) */}
                  <hr style={{ border: "none", borderTop: "1px solid #D2D5D9", margin: 0 }} />
                  <div
                    className="flex items-start"
                    style={{ paddingTop: "24px", paddingBottom: "40px", gap: "24px" }}
                  >
                    {/* Icon — 80×80, white bg */}
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{ width: "80px", height: "80px", backgroundColor: "#FFFFFF" }}
                    >
                      <Icon />
                    </div>
                    {/* Text */}
                    <div>
                      <h3
                        className="font-heading"
                        style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="font-body"
                        style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "8px" }}
                      >
                        {feature.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <hr style={{ border: "none", borderTop: "1px solid #D2D5D9", margin: 0 }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HOW WE OPERATE  full-bleed, bg=#C5D3E5, h=670px
          bg image (NO overlay — Figma: IMAGE fill only)
          Vertical 1px line at content left, h=430px, starts at 120px from top
          Label + H2 + body indented 40px from content left
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="How We Operate"
        className="relative w-full overflow-hidden"
        style={{ minHeight: "670px", backgroundColor: "#C5D3E5" }}
      >
        <Image
          src="/images/investments/how-we-operate-bg.jpg"
          alt=""
          fill
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* No overlay — Figma: IMAGE fill only */}

        {/* Vertical decorative line at content left */}
        <div
          className="absolute hidden lg:block"
          style={{
            left: "80px",
            top: "120px",
            width: "1px",
            height: "430px",
            backgroundColor: "#FFFFFF",
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 px-5 md:px-10 lg:px-20"
          style={{ paddingTop: "120px", paddingBottom: "100px" }}
        >
          <div style={{ maxWidth: "520px", paddingLeft: "40px" }}>
            <p
              className="font-body"
              style={{
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0.72px",
                textTransform: "uppercase",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              How We Operate
            </p>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                lineHeight: "42px",
                fontWeight: 300,
                color: "#FFFFFF",
                margin: 0,
                marginTop: "136px",
              }}
            >
              We turn promising opportunities into focused plans, tested models, and
              executable ventures.
            </h2>
            <p
              className="font-body"
              style={{
                fontSize: "15px",
                lineHeight: "22px",
                color: "rgba(232,233,234,1)",
                margin: 0,
                marginTop: "16px",
              }}
            >
              We look for opportunities that align with our ecosystem, demonstrate a
              clear business model, and address a real market need. The strongest
              ideas show execution potential, room to scale across customers, markets,
              or partnerships, and a focus on building long-term value rather than
              short-term momentum.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          OUR FOCUS  bg=white
          pt-140px → label at 140px from section top
          Centered label + H2 + body
          Two 628×480 image tiles with overlays (Figma-exact)
          Left tile: TWO rgba(0,0,0,0.20) overlays
          Right tile: rgba(0,0,0,0.20) + rgba(0,0,0,0.10) overlays
          CTA links below each tile
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Our Focus"
        className="w-full bg-white px-5 md:px-10 lg:px-20"
        style={{ paddingTop: "140px", paddingBottom: "160px" }}
      >
        {/* Label */}
        <p
          className="font-body text-center"
          style={{
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0.72px",
            textTransform: "uppercase",
            color: "#373738",
            margin: 0,
          }}
        >
          Our Focus
        </p>

        {/* H2 — centered */}
        <h2
          className="font-heading text-center mx-auto"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            lineHeight: "1.083",
            fontWeight: 300,
            color: "#1C1C1F",
            maxWidth: "524px",
            margin: "0 auto",
            marginTop: "24px",
          }}
        >
          Investing at the forefront of technology
        </h2>

        {/* Body — centered */}
        <p
          className="font-body text-center mx-auto"
          style={{
            fontSize: "15px",
            lineHeight: "22px",
            color: "#67686B",
            maxWidth: "758px",
            margin: "0 auto",
            marginTop: "16px",
          }}
        >
          We are interested in sectors where technology solves practical problems
          and creates lasting commercial utility. Our investment focus is shaped by
          businesses that can move beyond short-term attention and become part of the
          everyday systems people and companies rely on.
        </p>

        {/* Two image tiles — 628×480, 24px gap */}
        <div
          className="flex flex-col lg:flex-row"
          style={{ marginTop: "80px", gap: "24px" }}
        >
          {/* Left tile — TWO rgba(0,0,0,0.20) overlays */}
          <div className="relative overflow-hidden flex-1" style={{ height: "480px" }}>
            <Image
              src="/images/investments/portfolio-tile.jpg"
              alt=""
              fill
              quality={90}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 628px"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />
          </div>

          {/* Right tile — rgba(0,0,0,0.20) + rgba(0,0,0,0.10) */}
          <div className="relative overflow-hidden flex-1" style={{ height: "480px" }}>
            <Image
              src="/images/investments/investments-tile.jpg"
              alt=""
              fill
              quality={90}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 628px"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.10)" }} />
          </div>
        </div>

        {/* CTA rows below tiles */}
        <div
          className="flex flex-col lg:flex-row"
          style={{ marginTop: "24px", gap: "24px" }}
        >
          {/* Our Portfolio */}
          <div className="flex-1">
            <h3
              className="font-heading"
              style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
            >
              Our Portfolio
            </h3>
            <p
              className="font-body"
              style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
            >
              Discover the ventures, platforms, and businesses within the MSS
              ecosystem, and the role they play across our wider growth story.
            </p>
            <Link
              href="/portfolio"
              className="font-body inline-flex items-center justify-center"
              style={{
                marginTop: "32px",
                width: "156px",
                height: "40px",
                backgroundColor: "#1C1C1F",
                color: "#FFFFFF",
                fontSize: "16px",
                lineHeight: "24px",
                textDecoration: "none",
              }}
            >
              Visit Portfolio →
            </Link>
          </div>

          {/* How We Invest */}
          <div className="flex-1">
            <h3
              className="font-heading"
              style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
            >
              How We Invest
            </h3>
            <p
              className="font-body"
              style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
            >
              Explore the sectors, themes, and investment focus shaping how MSS
              identifies opportunity and builds long-term value.
            </p>
            <Link
              href="/how-we-invest"
              className="font-body inline-flex items-center justify-center"
              style={{
                marginTop: "32px",
                width: "184px",
                height: "40px",
                backgroundColor: "#1C1C1F",
                color: "#FFFFFF",
                fontSize: "16px",
                lineHeight: "24px",
                textDecoration: "none",
              }}
            >
              Visit Investments →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STATS  bg=white
          Label left + H2 (36px, 2 lines) + divider + 4 stat cards
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="MSS By the Numbers"
        className="w-full bg-white px-5 md:px-10 lg:px-20"
        style={{ paddingBottom: "120px" }}
      >
        <p
          className="font-body"
          style={{
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0.72px",
            textTransform: "uppercase",
            color: "#373738",
            margin: 0,
          }}
        >
          MSS By the Numbers
        </p>

        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
            lineHeight: "42px",
            fontWeight: 300,
            color: "#1C1C1F",
            margin: 0,
            marginTop: "24px",
          }}
        >
          A Growing Ecosystem<br />with Measurable Weight
        </h2>

        <hr style={{ border: "none", borderTop: "1px solid #D2D5D9", margin: "40px 0" }} />

        {/* 4 stat cards — 302px each, 24px gap */}
        <div
          className="grid grid-cols-2 xl:grid-cols-4"
          style={{ gap: "24px", marginTop: "0" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.value}
              style={{
                backgroundColor: stat.bg,
                padding: "32px 32px 32px 32px",
              }}
            >
              <p
                className="font-heading"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.875rem)",
                  lineHeight: "1.087",
                  fontWeight: 300,
                  color: stat.textColor,
                  margin: 0,
                }}
              >
                {stat.value}
              </p>
              <p
                className="font-body"
                style={{
                  fontSize: "15px",
                  lineHeight: "22px",
                  color: stat.labelColor,
                  margin: 0,
                  marginTop: "16px",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA  content-width (1280px), h=612, bg image no overlay
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Call to Action"
        className="w-full bg-white px-5 md:px-10 lg:px-20"
        style={{ paddingBottom: "80px" }}
      >
        <div
          className="relative w-full overflow-hidden flex items-center justify-center"
          style={{ height: "612px", backgroundColor: "#0B1738" }}
        >
          <Image
            src="/images/investments/cta-bg.jpg"
            alt=""
            fill
            quality={90}
            className="object-cover object-center"
            sizes="1280px"
          />
          <div className="relative z-10 flex flex-col items-center text-center px-10" style={{ maxWidth: "640px" }}>
            <h2
              className="font-heading"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", lineHeight: "42px", fontWeight: 300, color: "#FFFFFF", margin: 0 }}
            >
              Let&apos;s Start the Right Conversation!
            </h2>
            <p
              className="font-body"
              style={{ fontSize: "15px", lineHeight: "22px", color: "#FFFFFF", margin: 0, marginTop: "12px", maxWidth: "520px" }}
            >
              If you are building, scaling, or exploring a strategic path forward, we
              welcome opportunities that align with the MSS ecosystem.
            </p>
            <Link
              href="/pitch"
              className="font-body inline-flex items-center justify-center"
              style={{
                width: "120px",
                height: "40px",
                backgroundColor: "#FFFFFF",
                color: "#1C1C1F",
                fontSize: "16px",
                lineHeight: "24px",
                textDecoration: "none",
                marginTop: "32px",
              }}
            >
              Pitch to Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
