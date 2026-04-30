"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/*
 * Portfolio section — exact Figma layout (y=3230 to y=4722, height=1492px)
 *
 * Part 1 — Header (centered):
 *   "Portfolio" label: x=683 y=3370 → top=140px, centered at x=720
 *   H2:               x=358 y=3410 → top=180px, w=724 centered at x=720
 *
 * Part 2 — 4 Process Steps (static columns, NOT a carousel):
 *   Icons y=3594 (top=364px): x=232, 544, 856, 1168 (40×40 each)
 *   Titles y=3658 (top=428px): x=112, 424, 736, 1048 (w=280)
 *   Descs  y=3688 (top=458px): x=122, 434, 746, 1058 (w=260)
 *
 * Part 3 — Split layout (y=3828, top=598px):
 *   LEFT  x=0   w=640 h=650: portfolio left image (navy bg)
 *   RIGHT x=640 w=800 h=894: Swiss Payments card (warm bg)
 *
 * Part 4 — Slider below left image (y=4478+):
 *   "01"/"05" counters, separator line, prev/next arrows
 */

const SECTION_Y = 3230;

const steps = [
  {
    icon: "/images/icons/step-discovery.svg",
    iconX: 232, titleX: 112, descX: 122,
    title: "Discovery",
    desc: "Assess the idea, context, and fundamentals behind the idea.",
  },
  {
    icon: "/images/icons/step-strategy.svg",
    iconX: 544, titleX: 424, descX: 434,
    title: "Strategy",
    desc: "Aligning the concept with a long-term execution potential.",
  },
  {
    icon: "/images/icons/step-validation.svg",
    iconX: 856, titleX: 736, descX: 746,
    title: "Validation",
    desc: "Evaluate viability and refine the opportunity before scale.",
  },
  {
    icon: "/images/icons/step-launch.svg",
    iconX: 1168, titleX: 1048, descX: 1058,
    title: "Launch",
    desc: "Turning concept into reality with a focus on clarity, and growth.",
  },
];

export default function PortfolioProcessSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 5;

  return (
    <section
      aria-label="Portfolio and Investment Process"
      className="relative w-full bg-white"
      style={{ height: `${4722 - SECTION_Y}px` }} /* 1492px */
    >
      {/* ── HEADER — centered ───────────────────────────────────── */}
      {/* "Portfolio" label: x=683, y=3370, w=74 → centered at 683+37=720 */}
      <div
        className="absolute w-full flex flex-col items-center"
        style={{ top: `${3370 - SECTION_Y}px` }} /* 140px */
      >
        <span
          className="text-label font-body"
          style={{ color: "#373738" }}
        >
          Portfolio
        </span>
      </div>

      {/* H2: x=358, y=3410, w=724 → centered at 358+362=720 */}
      <h2
        className="absolute font-heading text-center"
        style={{
          left: "358px",
          top: `${3410 - SECTION_Y}px`, /* 180px */
          width: "724px",
          fontSize: "48px",
          lineHeight: "52px",
          fontWeight: 300,
          color: "#1C1C1F",
          margin: 0,
        }}
      >
        Proud to partner ideas shaping the economy of tomorrow
      </h2>

      {/* ── 4 PROCESS STEPS — static columns ───────────────────── */}
      {steps.map((step) => (
        <div key={step.title}>
          {/* Icon — 40×40 white bg with grey vector */}
          <div
            className="absolute"
            style={{
              left: `${step.iconX}px`,
              top: `${3594 - SECTION_Y}px`, /* 364px */
              width: "40px",
              height: "40px",
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={step.icon}
              alt=""
              width={32}
              height={32}
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
          </div>

          {/* Step title — Merriweather 300 20px/26px #1C1C1F */}
          <h3
            className="absolute font-heading"
            style={{
              left: `${step.titleX}px`,
              top: `${3658 - SECTION_Y}px`, /* 428px */
              width: "280px",
              fontSize: "20px",
              lineHeight: "26px",
              fontWeight: 300,
              color: "#1C1C1F",
              margin: 0,
            }}
          >
            {step.title}
          </h3>

          {/* Step description — Inter 400 15px/22px #67686B */}
          <p
            className="absolute font-body"
            style={{
              left: `${step.descX}px`,
              top: `${3688 - SECTION_Y}px`, /* 458px */
              width: "260px",
              fontSize: "15px",
              lineHeight: "22px",
              color: "#67686B",
              margin: 0,
            }}
          >
            {step.desc}
          </p>
        </div>
      ))}

      {/* ── LEFT — portfolio image (x=0, y=3828, w=640, h=650) ─── */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: 0,
          top: `${3828 - SECTION_Y}px`, /* 598px */
          width: "640px",
          height: "650px",
          backgroundColor: "#0B1738",
        }}
      >
        <Image
          src="/images/portfolio-left.jpg"
          alt="Portfolio"
          fill
          className="object-cover object-center"
          sizes="640px"
        />
      </div>

      {/* ── SLIDER CONTROLS — below left image ─────────────────── */}
      {/* image bottom: y=3828+650=4478. Controls at y=4542 (64px below) */}

      {/* "01" counter — x=80, y=4542 */}
      <span
        className="absolute font-heading"
        style={{
          left: "80px",
          top: `${4542 - SECTION_Y}px`, /* 1312px */
          fontSize: "26px",
          lineHeight: "32px",
          fontWeight: 300,
          color: "#1C1C1F",
        }}
      >
        0{activeSlide + 1}
      </span>

      {/* "05" counter — x=299, y=4542 */}
      <span
        className="absolute font-heading"
        style={{
          left: "299px",
          top: `${4542 - SECTION_Y}px`,
          fontSize: "26px",
          lineHeight: "32px",
          fontWeight: 300,
          color: "#D2D5D9",
        }}
      >
        0{totalSlides}
      </span>

      {/* Separator line — x=123, y=4557, w=160 */}
      <div
        className="absolute"
        style={{
          left: "123px",
          top: `${4557 - SECTION_Y}px`, /* 1327px */
          width: "160px",
          height: "1px",
          backgroundColor: "#E8E9EB",
        }}
      />

      {/* Prev arrow — x=488, y=4542, w=32, h=32, inactive grey */}
      <button
        onClick={() => setActiveSlide((s) => Math.max(0, s - 1))}
        aria-label="Previous portfolio"
        className="absolute flex items-center justify-center"
        style={{
          left: "488px",
          top: `${4542 - SECTION_Y}px`,
          width: "32px",
          height: "32px",
          backgroundColor: "transparent",
          border: "none",
          cursor: activeSlide === 0 ? "default" : "pointer",
        }}
      >
        <ChevronLeft
          size={12}
          strokeWidth={2}
          style={{ color: activeSlide === 0 ? "#D2D5D9" : "#1C1C1F" }}
        />
      </button>

      {/* Next arrow — x=528, y=4542, w=32, h=32, active warm bg */}
      <button
        onClick={() => setActiveSlide((s) => Math.min(totalSlides - 1, s + 1))}
        aria-label="Next portfolio"
        className="absolute flex items-center justify-center"
        style={{
          left: "528px",
          top: `${4542 - SECTION_Y}px`,
          width: "32px",
          height: "32px",
          backgroundColor: activeSlide === totalSlides - 1 ? "transparent" : "#F5E9DC",
          border: "none",
          cursor: activeSlide === totalSlides - 1 ? "default" : "pointer",
        }}
      >
        <ChevronRight
          size={12}
          strokeWidth={2}
          style={{ color: activeSlide === totalSlides - 1 ? "#D2D5D9" : "#1C1C1F" }}
        />
      </button>

      {/* ── RIGHT — Swiss Payments card (x=640, y=3828, w=800, h=894) ─ */}
      {/* All positions below are ABSOLUTE from page, matching Figma exactly */}
      <div
        className="absolute"
        style={{
          left: "640px",
          top: `${3828 - SECTION_Y}px`, /* 598px */
          width: "800px",
          height: "894px",
          backgroundColor: "#F5E9DC",
        }}
      >
        {/* Logo — x=688-640=48, y=3884-3828=56, w=207, h=56 */}
        <div
          className="absolute"
          style={{ left: "48px", top: "56px", width: "207px", height: "56px" }}
        >
          <img
            src="/images/icons/logo-swiss-payments.svg"
            alt="Swiss Payments"
            width={207}
            height={56}
            style={{ width: "207px", height: "56px", objectFit: "contain", objectPosition: "left" }}
          />
        </div>

        {/* "Visit Website" button — x=1207-640=567, y=3892-3828=64, w=153, h=40 */}
        <a
          href="https://swisspayments.com"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute flex items-center font-body"
          style={{
            left: "567px",
            top: "64px",
            width: "153px",
            height: "40px",
            backgroundColor: "#1C1C1F",
            color: "#FFFFFF",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "-0.32px",
            paddingLeft: "20px",
            paddingRight: "16px",
            gap: "2px",
            whiteSpace: "nowrap",
          }}
        >
          Visit Website
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: "4px" }}>
            <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Tags row — x=688-640=48, y=3972-3828=144 */}
        <div
          className="absolute flex items-center"
          style={{ left: "48px", top: "144px", gap: "8px" }}
        >
          {["Fintech", "B2C", "Agentic AI"].map((tag, i) => (
            <div key={tag} className="flex items-center" style={{ gap: "8px" }}>
              <span className="text-label font-body" style={{ color: "#67686B" }}>
                {tag}
              </span>
              {i < 2 && (
                <div style={{ width: "1px", height: "10px", backgroundColor: "#AEB0B3" }} />
              )}
            </div>
          ))}
        </div>

        {/* Body text — x=688-640=48, y=4036-3828=208, w=672 */}
        <p
          className="absolute font-body"
          style={{
            left: "48px",
            top: "208px",
            width: "672px",
            fontSize: "18px",
            lineHeight: "28px",
            letterSpacing: "-0.18px",
            color: "#373738",
            margin: 0,
          }}
        >
          Swiss Payments is a global financial platform built to help individuals
          and businesses send, receive, and manage money across borders — with
          full regulatory compliance, multi-currency support, and real-time
          transaction infrastructure.
        </p>

        {/* Vertical divider — x=1040-640=400, y=4316-3828=488, h=350 */}
        <div
          className="absolute"
          style={{
            left: "400px",
            top: "488px",
            width: "1px",
            height: "350px",
            backgroundColor: "#E8E9EB",
          }}
        />

        {/* LEFT COL of data — Core Services */}
        {/* "Core Services:" — x=688-640=48, y=4316-3828=488 */}
        <h4
          className="absolute font-heading"
          style={{
            left: "48px",
            top: "488px",
            fontSize: "20px",
            lineHeight: "26px",
            fontWeight: 300,
            color: "#1C1C1F",
            margin: 0,
          }}
        >
          Core Services:
        </h4>

        {/* Features list (left col, below "Core Services:") */}
        {[
          { top: 534, text: "Realtime Currency Converter" },
          { top: 578, text: "Virtual and Physical Cards" },
          { top: 622, text: "Secure Global Payments" },
        ].map(({ top, text }) => (
          <p
            key={text}
            className="absolute font-body"
            style={{
              left: "48px",
              top: `${top}px`,
              width: "312px",
              fontSize: "15px",
              lineHeight: "22px",
              color: "#67686B",
              margin: 0,
            }}
          >
            {text}
          </p>
        ))}

        {/* Horizontal separator — x=688-640=48, y=4485-3828=657, w=312 */}
        <div
          className="absolute"
          style={{
            left: "48px",
            top: "657px",
            width: "312px",
            height: "1px",
            backgroundColor: "#E8E9EB",
          }}
        />

        {/* "Subscription Tiers" — x=688-640=48, y=4526-3828=698 */}
        <h4
          className="absolute font-heading"
          style={{
            left: "48px",
            top: "698px",
            fontSize: "20px",
            lineHeight: "26px",
            fontWeight: 300,
            color: "#1C1C1F",
            margin: 0,
          }}
        >
          Subscription Tiers
        </h4>

        {/* Tier descriptions */}
        {[
          { top: 734, text: "Silver — Essential transaction management tools." },
          { top: 768, text: "Gold — Enhanced limits for consumers." },
          { top: 802, text: "Platinum — Executive-grade FX infrastructure." },
        ].map(({ top, text }) => (
          <p
            key={text}
            className="absolute font-body"
            style={{
              left: "48px",
              top: `${top}px`,
              width: "312px",
              fontSize: "15px",
              lineHeight: "22px",
              color: "#67686B",
              margin: 0,
            }}
          >
            {text}
          </p>
        ))}

        {/* RIGHT COL — Stats */}
        {/* $1.5B — x=1080-640=440, y=4316-3828=488 */}
        <span
          className="absolute font-heading"
          style={{
            left: "440px",
            top: "488px",
            fontSize: "36px",
            lineHeight: "42px",
            fontWeight: 300,
            color: "#1C1C1F",
          }}
        >
          $1.5B
        </span>

        <p
          className="absolute font-body"
          style={{ left: "440px", top: "534px", width: "190px", fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0 }}
        >
          Report an improvement in the quality of their work
        </p>

        {/* 500+ — x=1080-640=440, y=4446-3828=618 */}
        <span
          className="absolute font-heading"
          style={{ left: "440px", top: "618px", fontSize: "36px", lineHeight: "42px", fontWeight: 300, color: "#1C1C1F" }}
        >
          500+
        </span>

        <p
          className="absolute font-body"
          style={{ left: "440px", top: "664px", width: "190px", fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0 }}
        >
          Report an improvement in the quality of their work
        </p>

        {/* 500+ — x=1080-640=440, y=4576-3828=748 */}
        <span
          className="absolute font-heading"
          style={{ left: "440px", top: "748px", fontSize: "36px", lineHeight: "42px", fontWeight: 300, color: "#1C1C1F" }}
        >
          500+
        </span>

        <p
          className="absolute font-body"
          style={{ left: "440px", top: "794px", width: "190px", fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0 }}
        >
          Report an improvement in the quality of their work
        </p>
      </div>
    </section>
  );
}
