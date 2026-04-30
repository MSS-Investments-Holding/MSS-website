"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

/*
 * Global Footprint — exact Figma layout (Frame 49: y=5880, w=1440, h=860)
 *
 * Background: image 37 (node 242:4963) — full-width city photo
 *
 * White card (Frame 56: x=480, y=5880, w=880, h=452):
 *   Starts at top of section (y=0 within section)
 *   Left: 480px from page (matches leadership right column at ~33%)
 *   Scroll behaviour: smoothly slides down 408px (860–452) as section scrolls
 *
 * Card content (relative to card, left edge at x=480, padding-left=40px):
 *   "GLOBAL FOOTPRINT" label: left=40, top=40
 *   H3:                        left=40, top=80
 *   Body:                      left=40, top=176 w=420
 *   Button:                    left=40, top=372 w=120 h=40
 *
 * World map (Frame 242:4970): x=1060 (580px from card left), y=-74 from section top, 600×600px
 */

const SECTION_H  = 860;
const CARD_H     = 452;
const MAX_TRAVEL = SECTION_H - CARD_H; // 408px

export default function FootprintSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // progress: 0 when section top hits viewport top, 1 when section bottom exits viewport
      const progress = Math.max(0, Math.min(1,
        -rect.top / (rect.height - window.innerHeight)
      ));
      setTranslateY(progress * MAX_TRAVEL);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Global Footprint"
      className="relative w-full overflow-hidden"
      style={{ height: `${SECTION_H}px` }}
    >
      {/* ── Background image — full section ─────────────────── */}
      <Image
        src="/images/footprint-bg-correct.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(11,23,56,0.55)" }} />

      {/* ── World map — x=1060 from section left, top=-74px ─── */}
      {/* Positioned absolutely; partial bleed above section is hidden by overflow-hidden */}
      <div
        className="absolute"
        style={{ left: "1060px", top: "-74px", width: "600px", height: "600px" }}
      >
        <Image
          src="/images/footprint-map.png"
          alt="Global footprint map"
          width={600}
          height={600}
          className="w-full h-full object-contain opacity-80"
        />
      </div>

      {/* ── White card — slides down as section scrolls ──────── */}
      {/*
       * Card starts at top=0, left=480px (33% matching leadership column).
       * translateY driven by scroll progress within the section.
       * On mobile: full-width, no parallax, static positioning.
       */}
      <div
        className="absolute w-full lg:w-auto"
        style={{
          left: 0,
          top: 0,
          transform: `translateY(${translateY}px)`,
          willChange: "transform",
          // Responsive: on desktop, offset to match leadership column
        }}
      >
        <div
          className="w-full lg:ml-[33.3%] bg-white"
          style={{
            // Desktop: 880px wide matching Frame 56
            // maxWidth keeps it proportional on smaller screens
            maxWidth: "880px",
            height: `${CARD_H}px`,
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "40px",
            paddingBottom: "40px",
            position: "relative",
          }}
        >
          {/* "GLOBAL FOOTPRINT" label — top=40, which equals paddingTop */}
          <span className="text-label font-body block" style={{ color: "#373738" }}>
            Global Footprint
          </span>

          {/* H3 — top=80, gap from label = 80-40-16=24px */}
          <h2
            className="font-heading"
            style={{
              fontSize: "36px",
              lineHeight: "42px",
              fontWeight: 300,
              color: "#1C1C1F",
              margin: 0,
              marginTop: "24px",
              maxWidth: "352px",
            }}
          >
            Positioned Across Markets That Matter
          </h2>

          {/* Body — top=176, gap from H3 bottom (80+84=164) = 12px */}
          <p
            className="font-body"
            style={{
              fontSize: "15px",
              lineHeight: "22px",
              color: "#67686B",
              margin: 0,
              marginTop: "12px",
              maxWidth: "420px",
            }}
          >
            With exposure across the UAE, Pakistan, UK, and wider regional
            growth markets, we are positioned where capital, infrastructure, and
            long-term opportunity increasingly converge. Our geographic presence
            reflects a deliberate alignment with markets driving the next phase
            of financial, technological, and commercial growth.
          </p>

          {/* Button — top=372, gap from body bottom (176+132=308) = 64px */}
          <Link
            href="/pitch"
            className="inline-flex items-center justify-center font-body text-white"
            style={{
              marginTop: "64px",
              display: "inline-flex",
              width: "120px",
              height: "40px",
              backgroundColor: "#1C1C1F",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "-0.32px",
              whiteSpace: "nowrap",
            }}
          >
            Pitch to Us
          </Link>
        </div>
      </div>
    </section>
  );
}
