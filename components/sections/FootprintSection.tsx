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
      {/* Background image — mobile: x=-459 y=-89 w=1321 h=1762 at 375px */}
      <div
        className="md:hidden absolute"
        style={{ width: "352.27vw", height: "469.87vw", left: "-122.40vw", top: "-23.73vw" }}
      >
        <Image src="/images/home/footprint-bg.png" alt="" fill priority={false} sizes="352vw" className="object-cover" />
      </div>

      {/* Background image — desktop: x=-93 y=-476 w=1627 h=2169 at 1440px */}
      <div
        className="hidden md:block absolute"
        style={{ width: "112.99vw", height: "150.63vw", left: "-6.46vw", top: "-33.06vw" }}
      >
        <Image src="/images/home/footprint-bg.png" alt="" fill priority={false} sizes="113vw" className="object-cover" />
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
