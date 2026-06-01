"use client";

import { useLenis } from "lenis/react";
import ArrowRight from "@/components/icons/ArrowRight";

export default function PitchScrollButton() {
  const lenis = useLenis();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    lenis?.scrollTo("#pitch-form", {
      duration: 1.8,
      easing: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    });
  }

  return (
    <a
      href="#pitch-form"
      onClick={handleClick}
      className="pitch-hero-button inline-flex items-center justify-center gap-[8px] font-body"
    >
      Send Us Your Pitch
      <ArrowRight size="lg" fill="currentColor" />
    </a>
  );
}
