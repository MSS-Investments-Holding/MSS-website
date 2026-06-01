"use client";

import { useLenis } from "lenis/react";

export default function CareersScrollButton() {
  const lenis = useLenis();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    lenis?.scrollTo("#open-roles", {
      duration: 1.8,
      easing: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    });
  }

  return (
    <a
      href="#open-roles"
      onClick={handleClick}
      className="inline-flex items-center justify-center font-body"
      style={{
        height: "40px",
        backgroundColor: "#FFFFFF",
        color: "#1C1C1F",
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "-0.32px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "8px",
        paddingBottom: "8px",
        whiteSpace: "nowrap",
        textDecoration: "none",
      }}
    >
      Browse Open Roles
    </a>
  );
}
