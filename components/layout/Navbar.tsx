"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

/*
 * Dropdown geometry — Figma node 515-51
 *
 * Nav container: h=34, px=16, gap=20 between items, backdrop-filter blur(24px)
 * Dropdown gap below nav: 8px
 * Dropdown fill + blur: identical to nav container
 * Dropdown padding: 8px top/bottom, 16px left/right
 * Dropdown item height: 18px, gap between items: 8px
 * Dropdown item font: 13px Inter 400 white
 *
 * "About Us" dropdown:   left=0   (aligned to nav container left), w=99px  (3 items)
 * "What We Do" dropdown: left=111px (aligned to "What We Do" item, 16+75+20=111), w=93px (2 items)
 */
const DROPDOWN_LEFT: Record<string, string> = {
  "About Us":   "0px",
  "What We Do": "111px",
};

const dropdownStyle: React.CSSProperties = {
  position:             "absolute",
  top:                  "calc(100% + 8px)",
  backgroundColor:      "rgba(255,255,255,0.10)",
  backdropFilter:       "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  padding:              "8px 0",
  zIndex:               50,
};

const dropdownItemStyle: React.CSSProperties = {
  display:     "block",
  height:      "18px",
  lineHeight:  "18px",
  fontSize:    "13px",
  fontWeight:  400,
  color:       "#FFFFFF",
  padding:     "0 16px",
  whiteSpace:  "nowrap",
  textDecoration: "none",
};

export default function Navbar() {
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    // 300ms: long enough to cross the 8px gap between nav and dropdown
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 300);
  };

  return (
    <header role="banner" className="relative z-20 w-full h-[94px] flex items-center">
      <div className="w-full flex items-center justify-between px-12 lg:px-20">

        {/* Logo */}
        <Link href="/" aria-label="MSS Investments Holding — Home" className="flex-shrink-0">
          <Image
            src="/images/logo-white.png"
            alt="MSS Investments Holding"
            width={60}
            height={70}
            priority
            className="w-[60px] h-auto"
          />
        </Link>

        {/* ── Desktop nav ── */}
        {/*
          Nav container: h=34, px=16 (px-4), gap=20 (gap-5)
          position:relative so dropdowns anchor to it
        */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-5 px-4 relative"
          style={{
            backgroundColor:      "rgba(255,255,255,0.10)",
            backdropFilter:       "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {navLinks.map((link) =>
            link.hasDropdown ? (
              /* ── Item with dropdown ── */
              <div
                key={link.label}
                onMouseEnter={() => openDropdown(link.label)}
                onMouseLeave={scheduleClose}
                className="flex items-center"
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-[2px] text-links font-body text-white hover:text-white/70 transition-colors duration-200 whitespace-nowrap py-[8px]"
                >
                  {link.label}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            ) : (
              /* ── Plain item ── */
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center text-links font-body text-white hover:text-white/70 transition-colors duration-200 whitespace-nowrap py-[8px]"
              >
                {link.label}
              </Link>
            )
          )}

          {/* ── Dropdowns — always in DOM so CSS transitions work both ways ── */}
          {navLinks
            .filter((l) => l.hasDropdown && l.dropdownItems?.length)
            .map((link) => {
              const isOpen = activeDropdown === link.label;
              return (
                <div
                  key={link.label + "-dropdown"}
                  style={{ ...dropdownStyle, left: DROPDOWN_LEFT[link.label] }}
                  className={[
                    "transition-[opacity,transform] duration-200 ease-out",
                    isOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none",
                  ].join(" ")}
                  onMouseEnter={() => openDropdown(link.label)}
                  onMouseLeave={scheduleClose}
                  role="menu"
                  aria-label={link.label + " submenu"}
                  aria-hidden={!isOpen}
                >
                  <div className="flex flex-col" style={{ gap: "8px" }}>
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.href + item.label}
                        href={item.href}
                        role="menuitem"
                        style={dropdownItemStyle}
                        className="hover:opacity-70 transition-opacity duration-150 font-body"
                        tabIndex={isOpen ? 0 : -1}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
        </nav>

        {/* ── Right controls: EN + Search ── */}
        <div className="hidden md:flex items-center gap-3">
          {/* EN button */}
          <button
            aria-label="Select language"
            className="flex items-center justify-center gap-[2px] text-links font-body text-white hover:bg-white/20 transition-colors duration-200"
            style={{
              width:           "53px",
              height:          "36px",
              fontSize:        "13px",
              lineHeight:      "18px",
              backgroundColor: "rgba(255,255,255,0.10)",
              backdropFilter:       "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            EN
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 6l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Search button */}
          <button
            aria-label="Search"
            className="flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
            style={{
              width:           "36px",
              height:          "36px",
              backgroundColor: "rgba(255,255,255,0.10)",
              backdropFilter:       "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="5.5" stroke="white" strokeWidth="1.5" />
              <path d="M13.5 13.5L17 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
        >
          {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
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
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white font-heading font-light text-h5 border-b border-white/10 pb-4 block"
                >
                  {link.label}
                </Link>
                {/* Mobile sub-items */}
                {link.dropdownItems && (
                  <div className="flex flex-col gap-3 pt-3 pl-4">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.href + item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-white/70 font-body text-[13px]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
