"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header role="banner" className="relative z-20 w-full h-20 flex items-center">
      <div className="w-full flex items-center justify-between px-20">
        {/* Logo — 48×56px as in Figma */}
        <Link href="/" aria-label="MSS Investments Holding — Home" className="flex-shrink-0">
          <Image
            src="/images/logo-white.png"
            alt="MSS Investments Holding"
            width={48}
            height={56}
            priority
            className="w-12 h-auto"
          />
        </Link>

        {/* Nav links — center, white-bordered container per Figma */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-5 border border-white/20 px-5 h-9"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 text-nav font-body text-white hover:text-white/70 transition-colors duration-200"
            >
              {link.label}
              {link.hasDropdown && (
                /* Chevron SVG matching Figma 16×16 white vector */
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
          ))}
        </nav>

        {/* Right controls — EN + Search, both white-bordered rectangles per Figma */}
        <div className="hidden md:flex items-center gap-3">
          {/* EN button — 53×36px, white border, no fill */}
          <button
            aria-label="Select language"
            className="flex items-center gap-1 border border-white/20 text-nav font-body text-white h-9 px-3 hover:bg-white/5 transition-colors duration-200"
            style={{ width: "53px" }}
          >
            EN
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 6l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Search button — 36×36px square, white border, no fill */}
          <button
            aria-label="Search"
            className="flex items-center justify-center border border-white/20 text-white hover:bg-white/5 transition-colors duration-200"
            style={{ width: "36px", height: "36px" }}
          >
            {/* Search icon — 20×20 white vector per Figma */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="5.5" stroke="white" strokeWidth="1.5" />
              <path d="M13.5 13.5L17 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
        >
          {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[var(--color-primary)] flex flex-col pt-20 px-6 md:hidden">
          <button
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-6 text-white"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <nav className="flex flex-col gap-6 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white font-heading font-light text-h5 border-b border-white/10 pb-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
