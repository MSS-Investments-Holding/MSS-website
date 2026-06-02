"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { navLinks } from "@/lib/data";

const languages = [
  { code: "EN", label: "English" },
];

const dropdownItemStyle: React.CSSProperties = {
  fontSize: "13px",
  lineHeight: "18px",
  letterSpacing: "-0.13px",
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  textAlign: "left",
  whiteSpace: "nowrap",
  color: "white",
};

const dropdownPanelBase: React.CSSProperties = {
  position: "absolute",
  width: "76px",
  backgroundColor: "rgba(255,255,255,0.10)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingTop: "8px",
  paddingBottom: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  zIndex: 50,
  transition: "opacity 150ms ease-out, transform 150ms ease-out",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("EN");
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close lang dropdown on outside click or Escape
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      const target = e.target as Node;
      const inDesktop = desktopLangRef.current?.contains(target) ?? false;
      const inMobile = mobileLangRef.current?.contains(target) ?? false;
      if (!inDesktop && !inMobile) setLangOpen(false);
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setLangOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close lang dropdown when mobile menu closes
  useEffect(() => {
    if (!mobileOpen) setLangOpen(false);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  function selectLang(code: string) {
    setActiveLang(code);
    setLangOpen(false);
  }

  const chevron = (open: boolean) => (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      style={{
        flexShrink: 0,
        transition: "transform 150ms ease-out",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <path d="M4 6l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <header role="banner" className="relative z-20 w-full h-[72px] md:h-[104px] flex items-center">
      <div className="w-full flex items-center justify-between px-5 md:px-12 lg:px-20">

        {/* Logo */}
        <Link href="/" aria-label="MSS Investments Holding — Home" className="flex-shrink-0">
          <Image
            src="/logomarks/logo-white.png"
            alt="MSS Investments Holding"
            width={60}
            height={80}
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
                <div aria-hidden="true" className="h-[10px] w-px bg-white/45" />
              )}
            </div>
          ))}
        </nav>

        {/* ── Desktop language selector ── */}
        <div className="hidden md:block relative" ref={desktopLangRef}>
          <button
            aria-label="Select language"
            aria-expanded={langOpen}
            aria-haspopup="listbox"
            onClick={() => setLangOpen((o) => !o)}
            className="flex items-center justify-center gap-[2px] font-body text-white"
            style={{
              width: "52px",
              height: "34px",
              paddingLeft: "10px",
              paddingRight: "6px",
              paddingTop: "8px",
              paddingBottom: "8px",
              fontSize: "13px",
              lineHeight: "18px",
              letterSpacing: "-0.13px",
              backgroundColor: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              cursor: "pointer",
            }}
          >
            {activeLang}
            {chevron(langOpen)}
          </button>

          {/* Dropdown — opens below, right-aligned with trigger */}
          <div
            role="listbox"
            aria-label="Select language"
            style={{
              ...dropdownPanelBase,
              top: "calc(100% + 8px)",
              right: 0,
              opacity: langOpen ? 1 : 0,
              transform: langOpen ? "translateY(0)" : "translateY(-4px)",
              pointerEvents: langOpen ? "auto" : "none",
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                role="option"
                aria-selected={activeLang === lang.code}
                onClick={() => selectLang(lang.code)}
                className="font-body"
                style={{
                  ...dropdownItemStyle,
                  opacity: activeLang === lang.code ? 1 : 0.6,
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>
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
            cursor: "pointer",
          }}
        >
          MENU
        </button>
      </div>

      {/* ── Mobile full-screen overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden h-screen w-screen overflow-hidden" style={{ backgroundColor: "#0B1738" }}>

          {/* Top nav bar — same height as closed nav */}
          <div className="w-full h-[72px] flex items-center justify-between px-5">
            <Link href="/" onClick={closeMobile} className="flex-shrink-0">
              <Image
                src="/logomarks/logo-white.png"
                alt="MSS Investments Holding"
                width={60}
                height={70}
                className="w-[42px] h-auto object-contain"
              />
            </Link>
            <button
              aria-label="Close menu"
              onClick={closeMobile}
              className="absolute right-5 top-[22px] flex items-center justify-center font-body text-white"
              style={{
                position: "absolute",
                right: "20px",
                top: "22px",
                width: "58px", height: "28px",
                paddingLeft: "8px", paddingRight: "8px",
                paddingTop: "6px", paddingBottom: "6px",
                backgroundColor: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                fontSize: "12px", letterSpacing: "0.72px", textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>

          {/* Nav links — Figma mobile-open rows start at y=140, text at y=160. */}
          <nav style={{ position: "absolute", left: "20px", right: "20px", top: "140px" }} aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={closeMobile}
                  className="relative flex w-full items-center"
                  style={{ height: "64px", textDecoration: "none" }}
                >
                  <span className="font-heading text-white" style={{ fontSize: "18px", lineHeight: "24px", fontWeight: 300 }}>
                    {link.label}
                  </span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="absolute right-0 flex-shrink-0">
                    <path d="M8 5l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.70)" }} />
              </div>
            ))}
          </nav>

          {/* Bottom: language selector — dropdown opens upward */}
          <div
            ref={mobileLangRef}
            className="absolute left-5 bottom-10"
          >
            {/* Dropdown — opens above trigger */}
            <div
              role="listbox"
              aria-label="Select language"
              style={{
                ...dropdownPanelBase,
                bottom: "calc(100% + 8px)",
                left: 0,
                opacity: langOpen ? 1 : 0,
                transform: langOpen ? "translateY(0)" : "translateY(4px)",
                pointerEvents: langOpen ? "auto" : "none",
              }}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  role="option"
                  aria-selected={activeLang === lang.code}
                  onClick={() => selectLang(lang.code)}
                  className="font-body"
                  style={{
                    ...dropdownItemStyle,
                    opacity: activeLang === lang.code ? 1 : 0.6,
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button
              aria-label="Select language"
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-[2px] font-body text-white"
              style={{
                paddingLeft: "10px",
                paddingRight: "6px",
                paddingTop: "8px",
                paddingBottom: "8px",
                fontSize: "13px",
                lineHeight: "18px",
                letterSpacing: "-0.13px",
                backgroundColor: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                cursor: "pointer",
              }}
            >
              {activeLang}
              {chevron(langOpen)}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
