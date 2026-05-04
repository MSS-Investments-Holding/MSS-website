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
 * 404 — Figma node 482-784 (MSS — Website Design)
 * Hero h=520px, navy + full-bleed image, H2 message + “Return Home” CTA; footer matches site.
 */

export default function NotFound(): ReactElement {
  return (
    <main id="main-content">
      <section
        aria-label="Page not found"
        className="relative flex min-h-[520px] w-full flex-col overflow-hidden"
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
          className="absolute inset-0"
          style={{ backgroundColor: "var(--color-primary)", opacity: 0.55 }}
          aria-hidden
        />
        <div className="relative z-20 shrink-0">
          <Navbar />
        </div>

        <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-end px-5 pb-16 pt-8 md:px-10 lg:px-20 lg:pb-[140px]">
          <div className="flex max-w-[var(--max-w-content)] flex-col gap-8 lg:mx-auto lg:w-full lg:flex-row lg:items-end lg:justify-between">
            <h1 className="font-heading max-w-[630px] text-[var(--color-text-inverse)] text-h2">
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

      <Footer />
    </main>
  );
}
