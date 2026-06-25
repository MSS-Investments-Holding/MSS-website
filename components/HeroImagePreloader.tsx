"use client";

import { useEffect } from "react";

const NAV_PAGE_HEROES = [
  "/images/about/hero-bg.webp",
  "/images/investments/how-we-invest-hero-bg.webp",
  "/images/pitch/pitch-hero-bg.webp",
  "/images/careers/careers-hero-bg.webp",
];

const OTHER_PAGE_HEROES = [
  "/images/portfolio/hero-bg.jpg",
  "/images/chairman/chairman-hero-bg.webp",
  "/images/news/news-hero-bg.webp",
  "/images/404/404-hero-bg.webp",
];

function preloadImages(urls: string[]) {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

export default function HeroImagePreloader() {
  useEffect(() => {
    // Tier 2: after homepage is fully loaded, preload nav-page heroes
    if (document.readyState === "complete") {
      preloadImages(NAV_PAGE_HEROES);
    } else {
      window.addEventListener("load", () => preloadImages(NAV_PAGE_HEROES), {
        once: true,
      });
    }

    // Tier 3: after first scroll, preload remaining page heroes
    let scrollFired = false;
    const onScroll = () => {
      if (scrollFired) return;
      scrollFired = true;
      preloadImages(OTHER_PAGE_HEROES);
      window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
