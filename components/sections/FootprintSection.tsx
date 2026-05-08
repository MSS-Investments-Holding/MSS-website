"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import ArrowRight from "@/components/icons/ArrowRight";

/*
 * Global Footprint — Figma Frame 49: y=5880, w=1440, h=860
 *
 * Scroll behaviour (fixed):
 *   Card starts at y=0 (top of section) when section enters viewport.
 *   Slides DOWN 408px (860–452) as you scroll through the section.
 *   Formula: scrolledPast = max(0, -rect.top) → progress = scrolledPast / MAX_TRAVEL
 *
 * Globe (Frame 242:4970):
 *   In Figma: x=1060 from page left = 1060-480 = 580px from card left.
 *   Placed INSIDE the card container (position absolute, overflow visible).
 *   Extends beyond card right edge — clipped by section overflow:hidden.
 */

const SECTION_H = 766;

export default function FootprintSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !cardRef.current) return;
      const rect     = sectionRef.current.getBoundingClientRect();
      const cardH    = cardRef.current.offsetHeight; // actual rendered height
      const maxTravel = Math.max(0, SECTION_H - cardH); // stops when card bottom = section bottom
      const scrolledPast = Math.max(0, -rect.top);
      const travel = Math.min(maxTravel, scrolledPast);
      setTranslateY(travel);
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
      {/* Background image */}
      <Image
        src="/images/home/footprint-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Scroll-driven card wrapper */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          transform: `translateY(${translateY}px)`,
          willChange: "transform",
        }}
      >
        {/*
         * Card: starts at left=480px (33.3% of 1440px = leadership column offset)
         * Width: 880px, min-height: 452px (grows with content so button never clips)
         * overflow: visible so the globe can extend beyond the right edge
         * The section's overflow:hidden clips the globe at the section boundary
         */}
        <div
          ref={cardRef}
          className="relative bg-white lg:ml-[33.3%] lg:mr-20"
          style={{
            minHeight: "406px",
            paddingLeft: "40px",
            paddingTop: "40px",
            paddingBottom: "40px",
            paddingRight: "40px",
            overflow: "hidden",
          }}
        >
          {/* "GLOBAL FOOTPRINT" label — top=40 → paddingTop covers it */}
          <span className="text-label font-body block" style={{ color: "#373738" }}>
            Global Footprint
          </span>

          {/* H3 — gap from label = 24px (top=80, label ends at 40+16=56, gap=24) */}
          <h2
            className="font-heading"
            style={{
              fontSize: "36px",
              lineHeight: "42px",
              fontWeight: 300,
              color: "#1C1C1F",
              margin: 0,
              marginTop: "24px",
              maxWidth: "540px",
            }}
          >
            Positioned Across<br className="hidden lg:block" /> Markets That Matter
          </h2>

          {/* Body — gap from H3 bottom = 12px */}
          <p
            className="font-body"
            style={{
              fontSize: "15px",
              lineHeight: "22px",
              color: "#67686B",
              margin: 0,
              marginTop: "12px",
              maxWidth: "540px",
            }}
          >
            With exposure across the UAE, Pakistan, UK, and wider regional
            growth markets, we are positioned where capital, infrastructure, and
            long-term opportunity increasingly converge. Our geographic presence
            reflects a deliberate alignment with markets driving the next phase
            of financial, technological, and commercial growth.
          </p>

          {/* Button — gap from body bottom = 64px */}
          <Link
            href="/pitch"
            className="inline-flex items-center gap-[4px] text-body-sm font-body text-white"
            style={{
              marginTop: "40px",
              height: "40px",
              backgroundColor: "#1C1C1F",
              paddingLeft: "20px",
              paddingRight: "16px",
              paddingTop: "8px",
              paddingBottom: "8px",
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
          >
            Pitch to Us
            <ArrowRight size="lg" fill="white" />
          </Link>

          {/*
           * World map globe — inside the card, RIGHT of text content
           * Figma: map x=1060 from page left → 1060-480=580px from card left
           * Figma: map y=5806 from page top → 5806-5880=-74px from card top (extends above)
           * Size: 600×600px
           * overflow:visible on card lets it extend beyond; section clips it
           */}
          <div
            className="absolute hidden lg:block"
            style={{
              left: "660px",
              top: "-17px",
              width: "440px",
              height: "440px",
              pointerEvents: "none",
            }}
          >
            <Image
              src="/images/home/footprint-globe.png"
              alt=""
              width={440}
              height={440}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
