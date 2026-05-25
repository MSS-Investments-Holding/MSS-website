"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [expandedItem,   setExpandedItem]   = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setExpandedItem(null);
  };

  return (
    <header role="banner" className="relative z-20 w-full h-[72px] md:h-[94px] flex items-center">
      <div className="w-full flex items-center justify-between px-5 md:px-12 lg:px-20">

        {/* Logo */}
        <Link href="/" aria-label="MSS Investments Holding — Home" className="flex-shrink-0">
          <Image
            src="/images/logo-white.png"
            alt="MSS Investments Holding"
            width={60}
            height={70}
            priority
            className="w-[42px] md:w-[60px] h-auto"
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-4 px-4 py-2 relative"
          style={{
            backgroundColor:      "rgba(255,255,255,0.10)",
            backdropFilter:       "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {navLinks.map((link, index) => (
            <div key={link.label} className="flex items-center gap-4">
              <Link
                href={link.href}
                className="flex items-center text-links font-body text-white hover:text-white/70 transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
              {index < navLinks.length - 1 && (
                <div
                  aria-hidden="true"
                  className="h-[10px] w-px bg-white/45"
                />
              )}
            </div>
          ))}
        </nav>

        {/* ── Desktop right controls: EN + Search ── */}
        <div className="hidden md:flex items-center gap-3">
          <button
            aria-label="Select language"
            className="flex items-center justify-center gap-[2px] text-links font-body text-white hover:bg-white/20 transition-colors duration-200"
            style={{
              width: "53px", height: "36px", fontSize: "13px", lineHeight: "18px",
              backgroundColor: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
            }}
          >
            EN
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 6l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="Search"
            className="flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
            style={{
              width: "36px", height: "36px",
              backgroundColor: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="5.5" stroke="white" strokeWidth="1.5" />
              <path d="M13.5 13.5L17 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ── Mobile MENU button ── */}
        <button
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="md:hidden flex items-center justify-center font-body text-white"
          style={{
            width: "54px", height: "28px",
            paddingLeft: "8px", paddingRight: "8px",
            paddingTop: "6px", paddingBottom: "6px",
            backgroundColor: "rgba(255,255,255,0.10)",
            fontSize: "12px", letterSpacing: "0.72px",
          }}
        >
          MENU
        </button>
      </div>

      {/* ── Mobile full-screen overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col md:hidden h-screen overflow-hidden" style={{ backgroundColor: "#0B1738" }}>

          {/* Top nav bar — same height as closed nav */}
          <div className="w-full h-[72px] flex items-center justify-between px-5 flex-shrink-0">
            <Link href="/" onClick={closeMobile} className="flex-shrink-0">
              <Image
                src="/images/logo-white.png"
                alt="MSS Investments Holding"
                width={60}
                height={70}
                className="w-[42px] h-auto object-contain"
              />
            </Link>
            <button
              aria-label="Close menu"
              onClick={closeMobile}
              className="flex items-center justify-center font-body text-white"
              style={{
                width: "58px", height: "28px",
                paddingLeft: "8px", paddingRight: "8px",
                paddingTop: "6px", paddingBottom: "6px",
                backgroundColor: "rgba(255,255,255,0.10)",
                fontSize: "12px", letterSpacing: "0.72px",
              }}
            >
              Close
            </button>
          </div>

          {/* Nav links — 80px gap below the navbar top bar */}
          <nav className="flex-1 px-5 overflow-y-auto" style={{ paddingTop: "80px" }} aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={link.label}>
                <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.15)" }} />

                {/* Full-width row: button for dropdown items, Link for plain items */}
                {link.hasDropdown ? (
                  <button
                    onClick={() => setExpandedItem(expandedItem === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between bg-transparent border-0 text-left"
                    style={{ paddingTop: "16px", paddingBottom: "16px" }}
                  >
                    <span
                      className="font-heading text-white"
                      style={{ fontSize: "18px", lineHeight: "24px", fontWeight: 300 }}
                    >
                      {link.label}
                    </span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="flex-shrink-0">
                      <path
                        d={expandedItem === link.label ? "M6 13l4-4 4 4" : "M6 8l4 4 4-4"}
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className="w-full flex items-center"
                    style={{ paddingTop: "16px", paddingBottom: "16px", textDecoration: "none" }}
                  >
                    <span
                      className="font-heading text-white"
                      style={{ fontSize: "18px", lineHeight: "24px", fontWeight: 300 }}
                    >
                      {link.label}
                    </span>
                  </Link>
                )}
                {link.hasDropdown && expandedItem === link.label && link.dropdownItems && (
                  <div className="flex flex-col pb-4" style={{ gap: "12px" }}>
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.href + item.label}
                        href={item.href}
                        onClick={closeMobile}
                        className="font-body"
                        style={{ fontSize: "14px", lineHeight: "20px", color: "rgba(255,255,255,0.70)", textDecoration: "none" }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.15)" }} />
          </nav>

          {/* Bottom: EN language selector */}
          <div className="px-5 flex-shrink-0" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
            <button
              aria-label="Select language"
              className="flex items-center gap-1 font-body text-white"
              style={{
                fontSize: "13px",
                paddingLeft: "12px", paddingRight: "8px",
                paddingTop: "9px", paddingBottom: "9px",
                backgroundColor: "rgba(255,255,255,0.10)",
              }}
            >
              EN
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
