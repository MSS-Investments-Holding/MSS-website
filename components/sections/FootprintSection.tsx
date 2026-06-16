"use client";

import Image from "next/image";
import Link from "next/link";
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
      {/* Background image — mobile: x=-332 y=-35 w=1588 h=1939 at 402px Figma frame */}
      <div
        className="md:hidden absolute"
        style={{ width: "395.02vw", height: "482.34vw", left: "-82.59vw", top: "-8.71vw" }}
      >
        <Image src="/images/home/footprint-bg.webp" alt="" fill priority={false} sizes="395vw" className="object-cover" />
      </div>

      {/* Background image — desktop: x=-335 y=-786 w=2449 h=2989 at 1440px.
       * max() on width/height prevents shrinkage below the 1440px reference on
       * narrower desktops (768–1440px); above 1440px vw wins and image grows for
       * coverage. top uses a bottom-lock: min(-746px, calc(766px - 105vw)) pins
       * the section's bottom edge to the same image fraction (50.6%) at every
       * wide viewport, preventing the image from appearing progressively cropped
       * at the bottom as screen width increases. */}
      <div
        className="hidden md:block absolute"
        style={{ width: "max(2449px, 170.07vw)", height: "max(2989px, 207.57vw)", left: "min(-335px, -23.26vw)", top: "min(-746px, calc(766px - 105vw))" }}
      >
        <Image src="/images/home/footprint-bg.webp" alt="" fill priority={false} sizes="170vw" className="object-cover" />
      </div>

      {/* Scroll-driven card wrapper — translateY disabled on mobile */}
      <div
        className="absolute inset-x-0 top-0"
        style={{ transform: `translateY(${translateY}px)`, willChange: "transform" }}
      >
        <div
          ref={cardRef}
          className="relative bg-white mx-5 md:mx-12 lg:mx-0 lg:ml-[33.3%] lg:mr-20 p-5 md:pl-10 md:pt-10 md:pb-10 md:pr-[260px] overflow-hidden min-h-[700px] md:min-h-[406px]"
        >
          <span className="text-label font-body block" style={{ color: "#373738" }}>
            Global Footprint
          </span>

          <h2
            className="footprint-section-h2 font-heading font-light"
            style={{ color: "#1C1C1F", margin: 0, marginTop: "24px" }}
          >
            Positioned Across<br className="hidden lg:block" /> Markets That Matter
          </h2>

          <p
            className="font-body text-body-sm"
            style={{
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
            className="inline-flex items-center gap-[6px] font-body text-body-sm text-white"
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
            Send Us Your Pitch
            <ArrowRight size="lg" fill="white" />
          </Link>

          {/* Globe — mobile: fills card width, translateY(50%) puts center at card bottom, top dome visible */}
          <div
            className="md:hidden absolute left-0 right-0"
            style={{ bottom: 0, transform: "translateY(50%)", pointerEvents: "none" }}
          >
            <img
              src="/images/home/footprint-globe.svg"
              alt=""
              width={440}
              height={440}
              className="w-full h-auto"
              draggable={false}
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
            <img
              src="/images/home/footprint-globe.svg"
              alt=""
              width={440}
              height={440}
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
