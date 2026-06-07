import Image from "next/image";
import Link from "next/link";

/*
 * Footer — Figma y=8056 to y=8740 (684px total)
 *
 * Right image: x=733, w=627, h=570 (absolute, top-0, right-0)
 * Copyright:   y=8650 → 594px from footer top → 24px below image bottom
 *              x=904  → right-aligned in desktop layout
 * Footer bottom: y=8740 → 90px below copyright (74px below text)
 */

const exploreCol1 = [
  { label: "About Us",        href: "/about" },
  { label: "How We Invest",   href: "/how-we-invest" },
  { label: "Pitch to Us",     href: "/pitch" },
];

const exploreCol2 = [
  { label: "Chairman Message", href: "/chairman-message" },
  { label: "Portfolio",        href: "/portfolio" },
  { label: "Careers",         href: "/careers" },
];

const socialLinks = [
  { label: "LinkedIn",             href: "#" },
  { label: "Instagram",            href: "#" },
  { label: "Facebook",             href: "#" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Privacy Policy",       href: "/legal/privacy" },
  { label: "Cookies Policy",       href: "/legal/cookies" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="font-body text-body-sm block hover:text-white transition-colors duration-200"
      style={{ color: "#141010" }}
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

export default function Footer({ topMargin = true }: { topMargin?: boolean }) {
  return (
    <footer role="contentinfo" className={["w-full bg-white", topMargin ? "mt-20" : ""].join(" ")}>

      {/* Top divider */}
      <div className="mx-5 md:mx-12 lg:mx-20" style={{ height: "1px", backgroundColor: "#D2D5D9" }} />

      {/*
       * Main area — lg:min-h-[570px] ensures the container is tall enough
       * for the absolute-positioned right image without a stacking spacer div.
       */}
      <div className="relative w-full md:min-h-[568px] lg:min-h-[568px]">

        {/* Right image — desktop follows the updated Figma crop and placement. */}
        <div
          className="absolute top-20 right-12 lg:right-20 hidden md:block overflow-hidden bg-[#0B1738]"
          style={{ width: "43.05%", maxWidth: "740px", height: "488px" }}
        >
          <div className="mss-footer-media-image" aria-hidden="true">
            <Image
              src="/global/footer-image.png"
              alt=""
              fill
              className="object-fill"
              sizes="43vw"
            />
          </div>
        </div>

        {/* Left area — logo + link grid */}
        <div className="footer-left-content relative z-10 pt-10">

          {/* Logo — 70×100px, links to homepage */}
          <Link href="/" aria-label="MSS Investments Holding — Home" className="inline-block mb-10 lg:mb-14" style={{ width: "70px", height: "100px", position: "relative", display: "block" }}>
            <Image
              src="/logomarks/footer-logo.png"
              alt="MSS Investments Holding"
              fill
              className="object-contain object-left"
              sizes="70px"
            />
          </Link>

          {/* Link grid: 2 columns × 2 rows */}
          <div className="grid grid-cols-2 gap-x-8" style={{ maxWidth: "504px" }}>

            {/* Row 1 — Explore × 2 */}
            <div className="mb-12">
              <ColLabel text="Company" />
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
            <div>
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
                    className="font-body text-body-sm block hover:text-white transition-colors duration-200"
                    style={{ color: "#141010" }}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer image — mobile only, below links */}
          <div className="md:hidden w-full overflow-hidden bg-[#0B1738]" style={{ marginTop: "40px", aspectRatio: "627/488", position: "relative" }}>
            <div className="mss-footer-media-image" aria-hidden="true">
              <Image
                src="/global/footer-image.png"
                alt=""
                fill
                className="object-fill"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Copyright — mobile only (md+ uses the bottom row below the image) */}
          <div className="mt-6 pb-10 md:hidden">
            <p className="text-label font-body" style={{ color: "#67686B" }}>
              ©2026 MSS Holding Company. All rights reserved
            </p>
            <p className="text-label font-body mt-4" style={{ color: "#67686B" }}>
              info@mssinvestmentsholding.com
            </p>
            <div className="text-label font-body flex items-center gap-2 mt-2" style={{ color: "#67686B" }}>
              <span>+971 50 384 0381</span>
              <span aria-hidden="true" style={{ display: "inline-block", width: "1px", height: "10px", backgroundColor: "#67686B", flexShrink: 0 }} />
              <span>+44 7466 731742</span>
            </div>
          </div>

        </div>
      </div>

      {/*
       * Copyright row — desktop only, sits BELOW the 570px image zone.
       * Figma: image ends at y=8626, copyright at y=8650 (24px gap),
       * footer bottom at y=8740 (74px below copyright text).
       */}
      <div className="hidden md:flex flex-col items-end px-12 lg:px-20" style={{ paddingTop: "20px", paddingBottom: "40px", gap: "8px" }}>
        <p className="text-label font-body" style={{ color: "#67686B" }}>
          ©2026 MSS Holding Company. All rights reserved
        </p>
        <p className="text-label font-body" style={{ color: "#67686B" }}>
          info@mssinvestmentsholding.com
        </p>
        <div className="text-label font-body flex items-center gap-2" style={{ color: "#67686B" }}>
          <span>+971 50 384 0381</span>
          <span aria-hidden="true" style={{ display: "inline-block", width: "1px", height: "10px", backgroundColor: "#67686B", flexShrink: 0 }} />
          <span>+44 7466 731742</span>
        </div>
      </div>

    </footer>
  );
}
