"use client";

import Image from "next/image";
import Link from "next/link";
import HeroBackgroundImage from "@/components/ui/HeroBackgroundImage";
import { useRef, useEffect, useState } from "react";
import ArrowRight from "@/components/icons/ArrowRight";

const SECTION_H = 766;

export default function FootprintSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !cardRef.current) return;
      // Disable scroll animation on mobile — layout is static
      if (window.innerWidth < 768) { setTranslateY(0); return; }
      const rect      = sectionRef.current.getBoundingClientRect();
      const cardH     = cardRef.current.offsetHeight;
      const maxTravel = Math.max(0, SECTION_H - cardH);
      const scrolledPast = Math.max(0, -rect.top);
      setTranslateY(Math.min(maxTravel, scrolledPast));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Global Footprint"
      // Mobile: tall enough for content + globe; tablet+: fixed scroll-driven height
      className="relative w-full overflow-hidden h-[960px] md:h-[766px]"
    >
      {/* Background image */}
      <HeroBackgroundImage
        src="/images/home/footprint-bg.png"
        alt=""
        className="object-cover object-center"
        priority={false}
      />

      {/* Scroll-driven card wrapper — translateY disabled on mobile */}
      <div
        className="absolute inset-x-0 top-0"
        style={{ transform: `translateY(${translateY}px)`, willChange: "transform" }}
      >
        <div
          ref={cardRef}
          // Mobile: 20px padding all sides; tablet+: 40px left/top/bottom, 260px right for globe clearance
          className="relative bg-white mx-5 md:mx-12 lg:mx-0 lg:ml-[33.3%] lg:mr-20 p-5 md:pl-10 md:pt-10 md:pb-10 md:pr-[260px]"
          style={{ minHeight: "406px", overflow: "hidden" }}
        >
          <span className="text-label font-body block" style={{ color: "#373738" }}>
            Global Footprint
          </span>

          <h2
            className="font-heading"
            style={{
              // 28px on mobile (Figma), 36px on desktop
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              lineHeight: "1.2",
              fontWeight: 300,
              color: "#1C1C1F",
              margin: 0,
              marginTop: "24px",
            }}
          >
            Positioned Across<br className="hidden lg:block" /> Markets That Matter
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
              lineHeight: "22px",
              color: "#67686B",
              margin: 0,
              marginTop: "12px",
            }}
          >
            With exposure across the UAE, UK, Switzerland and wider regional
            growth markets, we are positioned where capital, infrastructure, and
            long-term opportunity increasingly converge. Our geographic presence
            reflects a deliberate alignment with markets driving the next phase
            of financial, technological, and commercial growth.
          </p>

          <Link
            href="/pitch"
            className="inline-flex items-center gap-[6px] font-body text-white"
            style={{
              marginTop: "40px",
              height: "40px",
              fontSize: "14px",
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

          {/* Globe — mobile: shows top half only, clipped by aspect-ratio container */}
          <div className="md:hidden w-full overflow-hidden" style={{ marginTop: "32px", aspectRatio: "2/1" }}>
            <Image
              src="/images/home/footprint-globe.png"
              alt=""
              width={400}
              height={400}
              className="w-full"
            />
          </div>

          {/* Globe — tablet+: absolute right side */}
          <div
            className="absolute hidden md:block"
            style={{
              right: "-220px",
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
