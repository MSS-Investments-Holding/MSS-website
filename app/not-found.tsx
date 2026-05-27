import type { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | MSS Investments Holding",
  description:
    "The page you are looking for could not be found. Return to the MSS Investments Holding homepage.",
  robots: { index: false, follow: true },
};

export default function NotFound(): ReactElement {
  return (
    <main id="main-content" className="flex min-h-0 flex-col">
      <section
        aria-label="Page not found"
        className="not-found-hero-section relative w-full shrink-0 overflow-hidden bg-[#0B1738]"
      >
        <Image
          src="/images/404-hero-bg.jpg"
          alt=""
          width={1483}
          height={2222}
          priority
          unoptimized
          className="not-found-hero-media absolute z-0 max-w-none"
          sizes="100vw"
        />
        <div className="not-found-hero-blend absolute inset-0 z-0 bg-black/20" />
        <div className="absolute inset-0 z-0 bg-black/20" />

        <div className="relative z-20 shrink-0">
          <Navbar />
        </div>

        <h1 className="not-found-hero-title absolute z-10 font-heading font-light text-white">
          Sorry, the page you are looking for does not exist.
        </h1>
        <Link
          href="/"
          className="not-found-return-link absolute z-10 inline-flex shrink-0 items-center justify-center bg-white px-5 font-body text-[#1C1C1F] transition-opacity hover:opacity-90 focus-visible:opacity-90"
        >
          Return Home
        </Link>
      </section>

      <div
        className="h-10 w-full shrink-0 bg-[var(--color-background)] md:h-20"
        aria-hidden
      />

      <Footer topMargin={false} />
    </main>
  );
}
