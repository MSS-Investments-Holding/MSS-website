import Link from "next/link";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="w-full bg-[var(--color-primary)]"
    >
      <div className="max-w-[var(--max-w-content)] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20">
        {/* Logo row */}
        <div className="mb-14 md:mb-16">
          <span className="font-heading text-white font-light tracking-widest text-2xl uppercase">
            MSS
          </span>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          {/* Explore col 1 */}
          <div>
            <p className="text-label font-body text-[var(--color-text-muted)] uppercase mb-6">
              Explore
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.explore.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-body-sm font-body text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore col 2 */}
          <div className="pt-8 md:pt-10">
            <ul className="flex flex-col gap-3">
              {footerLinks.more.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-body-sm font-body text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-label font-body text-[var(--color-text-muted)] uppercase mb-6">
              Social Media
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.social.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm font-body text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-label font-body text-[var(--color-text-muted)] uppercase mb-6">
              Legal
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-body-sm font-body text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-label font-body text-white/40">
            ©2026 MSS Investment Holding Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
