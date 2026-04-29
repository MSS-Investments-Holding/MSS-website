"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar({ dark = false }: { dark?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const textColor = dark ? "text-[var(--color-grey-black)]" : "text-white";
  const borderColor = dark ? "border-[var(--color-border)]" : "border-white/20";
  const hoverColor = dark ? "hover:text-[var(--color-grey-500)]" : "hover:text-white/70";

  return (
    <header
      role="banner"
      className={`w-full h-20 flex items-center px-10 ${dark ? "bg-white border-b border-[var(--color-border)]" : "bg-transparent"}`}
    >
      <div className="w-full max-w-[var(--max-w-site)] mx-auto flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" aria-label="MSS Investments Holding — Home">
          {dark ? (
            <img src="/images/logo-dark.png" alt="MSS Investments Holding" className="h-10 w-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          ) : (
            <span className="font-heading text-white font-light tracking-widest text-xl uppercase">MSS</span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-1 text-nav font-body ${textColor} ${hoverColor} transition-colors duration-200`}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown size={16} strokeWidth={1.5} className="mt-px opacity-70" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-4">
          <button
            aria-label="Search"
            className={`w-9 h-9 flex items-center justify-center rounded-full border ${borderColor} ${textColor} ${hoverColor} transition-colors duration-200`}
          >
            <Search size={16} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Select language"
            className={`flex items-center gap-1 text-nav font-body ${textColor} ${hoverColor} transition-colors duration-200`}
          >
            EN
            <ChevronDown size={14} strokeWidth={1.5} className="opacity-70" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden flex items-center justify-center w-9 h-9 ${textColor}`}
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
                className="text-white text-h5 font-heading font-light border-b border-white/10 pb-4"
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
