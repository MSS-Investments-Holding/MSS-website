import Image from "next/image";
import Link from "next/link";

/*
 * Footer — exact Figma layout (y=8056 to y=8740, bg=#0B1738 navy)
 *
 * Top divider: Vector 9 — stroke=#D2D5D9 1px at y=8056
 *
 * LEFT AREA (x=80 to x=584, ~50.6% of 1280px content):
 *   Logo: x=80, y=8096, w=70, h=100 (MSS white logo image)
 *
 *   2-column × 2-row link grid:
 *   Row 1 (y=8260 labels, y=8296 lists):
 *     Col A (x=80):  "EXPLORE" → About Us, Who Are We, Our Investments, News & Media, Pitch to Us
 *     Col B (x=364): "EXPLORE" → Chairman Message, Portfolio, Careers
 *   Row 2 (y=8478 labels, y=8514 lists):
 *     Col A (x=80):  "LEGAL"        → Terms and Conditions, Privacy Policy, Cookies Policy
 *     Col B (x=364): "SOCIAL MEDIA" → LinkedIn, Instagram, Facebook, X — Formerly Twitter
 *
 * RIGHT AREA (x=733 to x=1360, w=627, h=570):
 *   Frame 56 with image (footer-image.png)
 *
 * COPYRIGHT: x=904 y=8650 (bottom of right area, UPPER text, #67686B)
 */

const exploreCol1 = [
  { label: "About Us",        href: "/about" },
  { label: "Who Are We",      href: "/about#who-we-are" },
  { label: "Our Investments", href: "/investments" },
  { label: "News & Media",    href: "/news" },
  { label: "Pitch to Us",     href: "/pitch" },
];

const exploreCol2 = [
  { label: "Chairman Message", href: "/chairman" },
  { label: "Portfolio",        href: "/portfolio" },
  { label: "Careers",         href: "/careers" },
];

const socialLinks = [
  { label: "LinkedIn",            href: "#" },
  { label: "Instagram",           href: "#" },
  { label: "Facebook",            href: "#" },
  { label: "X — Formerly Twitter",href: "#" },
];

const legalLinks = [
  { label: "Terms and Conditions", href: "/legal/terms" },
  { label: "Privacy Policy",       href: "/legal/privacy" },
  { label: "Cookies Policy",       href: "/legal/cookies" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="font-body block hover:text-white transition-colors duration-200"
      style={{ fontSize: "15px", lineHeight: "22px", color: "#141010" }}
    >
      {label}
    </Link>
  );
}

function ColLabel({ text }: { text: string }) {
  return (
    <span className="text-label font-body block" style={{ color: "#67686B", marginBottom: "16px" }}>
      {text}
    </span>
  );
}

export default function Footer() {
  return (
    <footer role="contentinfo" className="w-full bg-white">

      {/* Top divider — Vector 9: stroke=#D2D5D9 1px */}
      <div className="mx-5 md:mx-10 lg:mx-20" style={{ height: "1px", backgroundColor: "#D2D5D9" }} />

      <div className="relative w-full">
        {/* ── RIGHT AREA — image frame (x=733, w=627, h=570) ─── */}
        {/*
         * Right of footer: 627px wide, 570px tall
         * As % of 1440px: x=733 → left=50.9%, w=627 → 43.5%
         * Positioned absolute so it overlaps the footer height correctly
         */}
        <div
          className="absolute top-0 right-0 hidden lg:block overflow-hidden"
          style={{ width: "43.5%", height: "570px" }}
        >
          <Image
            src="/images/footer-image.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="43vw"
          />
        </div>

        {/* ── LEFT AREA — logo + link columns ─────────────────── */}
        <div className="relative z-10 px-5 md:px-10 lg:px-20 pt-10 pb-10 lg:pb-0">

          {/* Logo — MSS white logo, 70×100px */}
          <div className="mb-10 lg:mb-14" style={{ width: "70px", height: "100px", position: "relative" }}>
            <Image
              src="/images/footer-logo.png"
              alt="MSS Investments Holding"
              fill
              className="object-contain object-left"
              sizes="70px"
            />
          </div>

          {/* Link grid: 2 columns × 2 rows */}
          {/* Col gap: 364-80=284px → at 1280px content: ~22% col width */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-16 lg:gap-x-0 mb-0" style={{ maxWidth: "504px" }}>

            {/* Row 1 — Explore × 2 */}
            <div className="mb-12 lg:pr-16">
              <ColLabel text="Explore" />
              <div className="flex flex-col" style={{ gap: "8px" }}>
                {exploreCol1.map(l => <FooterLink key={l.href} {...l} />)}
              </div>
            </div>

            <div className="mb-12">
              <ColLabel text="Explore" />
              <div className="flex flex-col" style={{ gap: "8px" }}>
                {exploreCol2.map(l => <FooterLink key={l.href} {...l} />)}
              </div>
            </div>

            {/* Row 2 — Legal + Social Media */}
            <div className="lg:pr-16">
              <ColLabel text="Legal" />
              <div className="flex flex-col" style={{ gap: "8px" }}>
                {legalLinks.map(l => <FooterLink key={l.href} {...l} />)}
              </div>
            </div>

            <div>
              <ColLabel text="Social Media" />
              <div className="flex flex-col" style={{ gap: "8px" }}>
                {socialLinks.map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body block hover:text-white transition-colors duration-200"
                    style={{ fontSize: "15px", lineHeight: "22px", color: "#141010" }}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright — x=904 y=8650, UPPER text, #67686B */}
          {/* Positioned at bottom of footer, right-aligned to match x=904 */}
          <div className="mt-16 lg:mt-0 lg:absolute lg:bottom-6 lg:right-20">
            <p
              className="text-label font-body"
              style={{ color: "#67686B" }}
            >
              ©2026 MSS Investment Holding Company. All rights reserved.
            </p>
          </div>

        </div>

        {/* Spacer to ensure footer height covers the right image */}
        <div className="hidden lg:block" style={{ height: "570px" }} />
      </div>

    </footer>
  );
}
