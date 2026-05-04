import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | MSS Investments Holding",
  description:
    "The page you are looking for could not be found. Return to the MSS Investments Holding homepage.",
  robots: { index: false, follow: true },
};

/*
 * 404 — Figma node 482-784 (MSS — Website Design), 1440 frame
 * Hero: h=520px (482:785).
 * H1 (482:816): bottom 140px from hero bottom, left 80px, max-width 630px.
 * CTA (483:1298): top 440px from hero top, right margin 80px (1440 − 1224 − btn).
 * Positioning is relative to the hero section (y=0 at top of hero), not below nav.
 */

export default function NotFound(): ReactElement {
  return (
    <main id="main-content" className="flex min-h-0 flex-col">
      <section
        aria-label="Page not found"
        className="relative h-[520px] w-full shrink-0 overflow-hidden"
      >
        <Image
          src="/images/404-hero-bg.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundColor: "var(--color-primary)", opacity: 0.55 }}
          aria-hidden
        />

        <div className="relative z-20 shrink-0">
          <Navbar />
        </div>

        <h1 className="absolute bottom-24 left-5 right-5 z-10 max-w-[630px] font-heading text-[var(--color-text-inverse)] text-h2 md:left-10 md:right-10 lg:bottom-[140px] lg:left-20 lg:right-auto lg:max-w-[630px]">
          Sorry, the page you are looking for does not exist.
        </h1>
        <Link
          href="/"
          className="absolute bottom-8 left-5 z-10 inline-flex h-10 shrink-0 items-center justify-center bg-[var(--color-background)] px-5 font-body text-btn text-[var(--color-text-primary)] transition-opacity hover:opacity-90 focus-visible:opacity-90 md:left-10 lg:bottom-auto lg:left-auto lg:right-20 lg:top-[440px]"
        >
          Return Home
        </Link>
      </section>

      <Footer />
    </main>
  );
}
