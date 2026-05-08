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
 * Bottom row: H1 + CTA bottom-aligned, 40px above hero bottom (Figma), horizontal inset 80px at lg.
 * Below hero: 80px white (y 520→600) then footer divider + content (483:1294).
 * Hero photo: no colour overlay — full-bleed export only (Figma asset).
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
          className="z-0 object-cover object-center"
          sizes="100vw"
        />

        <div className="relative z-20 shrink-0">
          <Navbar />
        </div>

        <div className="absolute inset-x-0 bottom-10 z-10 px-5 md:px-12 lg:px-20">
          <div className="mx-auto flex w-full max-w-[var(--max-w-content)] flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="max-w-[630px] font-heading text-[var(--color-text-inverse)] text-h2">
              Sorry, the page you are looking for does not exist.
            </h1>
            <Link
              href="/"
              className="inline-flex h-10 shrink-0 items-center justify-center bg-[var(--color-background)] px-5 font-body text-btn text-[var(--color-text-primary)] transition-opacity hover:opacity-90 focus-visible:opacity-90"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>

      <div
        className="h-20 w-full shrink-0 bg-[var(--color-background)]"
        aria-hidden
      />

      <Footer />
    </main>
  );
}
