"use client";

import { type CSSProperties, useEffect, useId, useRef, useState } from "react";
import CloseIcon from "@/components/icons/CloseIcon";

interface DetailSection {
  heading: string;
  items?: string[];
  body?: string;
}

interface Company {
  name: string;
  logo: string;
  logoW: number;
  logoH: number;
  detailLogoW: number;
  detailLogoH: number;
  tags: string[];
  desc: string;
  comingSoon?: boolean;
  details: {
    partnershipStart: string;
    status: string;
    websiteLabel: string;
    panelDesc?: string;
    sections: DetailSection[];
  };
  site: string;
}

const companies: Company[] = [
  {
    name: "DT&T",
    logo: "/icons/logo-dtt.svg",
    logoW: 116,
    logoH: 40,
    detailLogoW: 162,
    detailLogoH: 56,
    tags: ["Fintech", "B2C", "UK EMI"],
    desc: "DT&T Corporation is a UK-based payment institution providing international money transfers, multi-currency accounts, foreign exchange, and digital payment services for individuals and businesses. As an FCA-authorized electronic money institution, DT&T supports accessible cross-border financial activity through a modern digital platform.",
    details: {
      partnershipStart: "Aug, 2025",
      status: "Ongoing",
      websiteLabel: "https://dttcl.com/",
      sections: [
        {
          heading: "Key Offerings",
          items: [
            "UK Business Account",
            "Personal and Business Accounts",
            "Multi-currency Management",
            "Instant Local and International Transfers",
            "Foreign Exchange",
            "Mobile Banking",
          ],
        },
      ],
    },
    site: "https://dttcl.com/",
  },
  {
    name: "Swiss Payments",
    logo: "/icons/logo-swiss-payments.svg",
    logoW: 148,
    logoH: 40,
    detailLogoW: 208,
    detailLogoH: 56,
    tags: ["Fintech", "B2C", "SRO License"],
    desc: "Swiss Payments is a digital payments and account experience built on a Swiss fintech platform. We created Swiss Payments to make it easier for individuals and businesses to access a Swiss Payments account, cards, payments, and certain digital assets all in one place, with transparent pricing and rigorous compliance.",
    details: {
      partnershipStart: "June, 2021",
      status: "Ongoing",
      websiteLabel: "www.swisspayments.ch/",
      sections: [
        {
          heading: "Core Services",
          items: [
            "Realtime Currency Converter",
            "Virtual and Physical Cards",
            "Secure Global Payments",
            "Fiat and Crypto Payments",
          ],
        },
        {
          heading: "Subscription Tiers",
          items: [
            "Silver - Essential transaction management tools.",
            "Gold - Enhanced limits for consumers.",
            "Platinum - Exclusive priority processing.",
          ],
        },
      ],
    },
    site: "https://www.swisspayments.ch/",
  },
  {
    name: "MetaX",
    logo: "/icons/logo-metax.svg",
    logoW: 89,
    logoH: 40,
    detailLogoW: 125,
    detailLogoH: 56,
    tags: ["Fintech", "B2C", "MSB License"],
    desc: "MetaX empowers global commerce by providing smarter, faster and borderless payment solutions. Our platform simplifies cross-border transactions, allowing businesses to expand, grow, and connect with the world effortlessly through a unified digital interface.",
    details: {
      partnershipStart: "Feb, 2022",
      status: "Ongoing",
      websiteLabel: "www.metaxpayments.com/",
      sections: [
        {
          heading: "Mission and Vision",
          body: "MetaX empowers global commerce by providing smarter, faster, and borderless payment solutions. Our platform simplifies cross-border transactions, allowing businesses to expand, grow, and connect with the world effortlessly through a unified digital interface.",
        },
        {
          heading: "Infrastructure",
          body: "Powered by leading payment providers in the UK, EU, and UAE, MetaX has built a robust financial infrastructure. Our partnerships with top-tier regulated institutions ensure the highest levels of reliability, speed, and security for every transaction.",
        },
        {
          heading: "Key Offerings",
          items: [
            "Personal and Business Accounts",
            "Multi-currency Management",
            "Instant Global Transfers",
            "Digital Onboarding and KYC",
            "Realtime Notifications",
          ],
        },
      ],
    },
    site: "https://www.metaxpayments.com/",
  },
  {
    name: "TokenBazaar",
    logo: "/icons/logo-tokenbazaar.svg",
    logoW: 224,
    logoH: 40,
    detailLogoW: 224,
    detailLogoH: 40,
    tags: ["Fintech Investments", "Real World Assets"],
    desc: "TokenBazaar is building the future of accessible investing by opening the door to real-world assets for everyday investors. Through a secure digital platform, users can discover, evaluate, and participate in professionally structured investment opportunities that were historically out of reach for most individuals.",
    details: {
      partnershipStart: "Jan, 2026",
      status: "Ongoing",
      websiteLabel: "https://tokenbazaar.com/",
      panelDesc: "TokenBazaar is building the future of accessible investing by opening the door to real-world assets for everyday investors. Through a secure digital platform, users can discover, evaluate, and participate in professionally structured investment opportunities that were historically out of reach for most individuals. By combining modern financial infrastructure with transparent asset-backed offerings, TokenBazaar empowers people to build wealth with confidence, regardless of their income level or location.",
      sections: [],
    },
    site: "https://tokenbazaar.com/",
    comingSoon: true,
  },
  {
    name: "DT&T Nigeria",
    logo: "/icons/logo-dtt-nigeria.svg",
    logoW: 116,
    logoH: 40,
    detailLogoW: 163,
    detailLogoH: 56,
    tags: ["Fintech", "B2C", "Nigeria EMI"],
    desc: "DT&T Nigeria extends the DT&T ecosystem into one of Africa’s most dynamic financial markets, supporting digital payments, remittances, and cross-border money movement for individuals and businesses. As an FCA-authorized electronic money institution, DT&T supports accessible cross-border financial activity through a modern digital platform.",
    details: {
      partnershipStart: "Aug, 2025",
      status: "Ongoing",
      websiteLabel: "https://dttcl.com/",
      sections: [
        {
          heading: "Key Offerings",
          items: [
            "Personal and Business Accounts",
            "Multi-currency Management",
            "Instant Local and International Transfers",
            "Foreign Exchange",
            "Mobile Banking",
          ],
        },
      ],
    },
    site: "https://dttcl.com/",
  },
];

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M7.36421 7.36507V3.55554H8.63405V7.36507H12.4436V8.63491H8.63405V12.4444H7.36421V8.63491H3.55469V7.36507H7.36421Z"
        fill="currentColor"
      />
    </svg>
  );
}

/*
 * Per-card responsive border/padding classes.
 *
 * Grid columns by breakpoint:
 *   mobile  (< 768px)  : 1-col — no left borders
 *   tablet  (768–1023px): 2-col — odd indices get left border at md+
 *   desktop (≥ 1024px) : 3-col — index%3!==0 gets left border at lg+
 *
 * For 4 companies the resolved positions are:
 *   i=0 → md R1C1 / lg R1C1  — no border
 *   i=1 → md R1C2 / lg R1C2  — border md+
 *   i=2 → md R2C1 / lg R1C3  — border lg only
 *   i=3 → md R2C2 / lg R2C1  — border md, not lg
 *
 * Horizontal rules are inset with ml-6 to align with card content (same
 * pattern as homepage PortfolioProcessSection). Top rules are hidden for
 * cards in row 2+ at each breakpoint so only row 1 shows a top divider.
 */
function getCardLayout(index: number): {
  bodyClass: string;
  ruleClass: string;
  topRuleClass: string;
  leftSeparatorClass: string;
  showRightSeparator: boolean;
} {
  const hasMdBorder = index % 2 !== 0;
  const hasLgBorder = index % 3 !== 0;

  // Left inset: ml-6 where card has a left separator (rule aligns with content start).
  let mlClass = "";
  if (hasMdBorder && hasLgBorder)       mlClass = "md:ml-6";
  else if (!hasMdBorder && hasLgBorder) mlClass = "lg:ml-6";
  else if (hasMdBorder && !hasLgBorder) mlClass = "md:ml-6 lg:ml-0";

  // Content padding only — vertical separators are rendered as absolute-positioned elements
  // so their height can be precisely inset from the top/bottom rules.
  let paddingClass = "";
  if (hasMdBorder && hasLgBorder)       paddingClass = "md:pl-6";
  else if (!hasMdBorder && hasLgBorder) paddingClass = "lg:pl-6";
  else if (hasMdBorder && !hasLgBorder) paddingClass = "md:pl-6 lg:pl-0";

  // Responsive display class for the absolute left separator div.
  let leftSeparatorClass = "";
  if (hasMdBorder && hasLgBorder)       leftSeparatorClass = "hidden md:block";
  else if (!hasMdBorder && hasLgBorder) leftSeparatorClass = "hidden lg:block";
  else if (hasMdBorder && !hasLgBorder) leftSeparatorClass = "hidden md:block lg:hidden";

  const isMdCol1 = index % 2 === 0;
  const isLgCol1 = index % 3 === 0;
  const isLgCol2 = index % 3 === 1;

  // Right padding on the body (breathing room before the next card's separator).
  let prClass = "";
  if (isMdCol1 && isLgCol1)          prClass = "md:pr-6";
  else if (isMdCol1 && !isLgCol1)    prClass = "md:pr-6 lg:pr-0";
  else if (!isMdCol1 && isLgCol2)    prClass = "lg:pr-6";
  else if (!isMdCol1 && isLgCol1)    prClass = "lg:pr-6";

  // Right inset on the rule mirrors prClass so the rule ends where content ends.
  let mrClass = "";
  if (isMdCol1 && isLgCol1)          mrClass = "md:mr-6";
  else if (isMdCol1 && !isLgCol1)    mrClass = "md:mr-6 lg:mr-0";
  else if (!isMdCol1 && isLgCol2)    mrClass = "lg:mr-6";
  else if (!isMdCol1 && isLgCol1)    mrClass = "lg:mr-6";

  const ruleClass = [mlClass, mrClass].filter(Boolean).join(" ");

  const bodyClass = [
    "flex-1 min-h-[436px] flex flex-col py-10",
    paddingClass,
    prClass,
  ].filter(Boolean).join(" ");

  // Top rule visibility: only shown when this card is in row 1.
  // mobile (1-col): row 1 = i=0 only
  // md    (2-col): row 1 = i=0,1
  // lg    (3-col): row 1 = i=0,1,2
  const topRuleClass =
    index === 0 ? "block" :
    index === 1 ? "hidden md:block" :
    index === 2 ? "hidden lg:block" :
    "hidden";

  // Card is md-C2 but lg-C1: no adjacent card supplies a left separator at lg.
  // Rendered via translate-x-full to place the 1px line at C2's left edge (not C1's right),
  // matching the pixel position of left separators on adjacent column cards.
  const showRightSeparator = hasMdBorder && !hasLgBorder;

  return { bodyClass, ruleClass, topRuleClass, leftSeparatorClass, showRightSeparator };
}

const CLOSE_DURATION = 240;

export default function PortfolioGrid(): React.ReactElement {
  const [activeCompany, setActiveCompany] = useState<Company | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogDescriptionId = useId();

  function closePanel() {
    if (isClosing) return;
    setIsClosing(true);
    closeTimerRef.current = setTimeout(() => {
      setActiveCompany(null);
      setIsClosing(false);
    }, CLOSE_DURATION);
  }

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!activeCompany) return;

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCompany]);

  return (
    <section
      aria-label="Investment Portfolio"
      className="w-full bg-white px-5 md:px-12 lg:px-20 pt-20 lg:pt-24 pb-20 lg:pb-24"
    >
      {/* ── COMPANY GRID ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company, index) => {
          const { bodyClass, ruleClass, topRuleClass, leftSeparatorClass, showRightSeparator } = getCardLayout(index);
          return (
            <article key={company.name} className={`flex flex-col${(leftSeparatorClass || showRightSeparator) ? " relative" : ""}`}>
              {/* Top rule — row 1 only, inset to match content width */}
              <div className={`h-px shrink-0 bg-[#D2D5D9] ${ruleClass} ${topRuleClass}`} />

              <div className={bodyClass}>
                <img
                  src={company.logo}
                  alt={company.name}
                  width={company.logoW}
                  height={company.logoH}
                  style={{
                    width: `${company.logoW}px`,
                    height: `${company.logoH}px`,
                    objectFit: "contain",
                    objectPosition: "left",
                  }}
                  draggable={false}
                />

                {/* Tags with vertical dividers */}
                <div className="flex items-center flex-wrap" style={{ marginTop: "24px", gap: "8px" }}>
                  {company.tags.map((tag, tagIndex) => (
                    <span key={tag} className="flex items-center gap-2">
                      <span className="text-label font-body" style={{ color: "#67686B" }}>{tag}</span>
                      {tagIndex < company.tags.length - 1 && (
                        <span
                          style={{ width: "1px", height: "10px", backgroundColor: "#67686B", display: "inline-block" }}
                        />
                      )}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p
                  className="font-body text-body-sm"
                  style={{ color: "#373738", margin: 0, marginTop: "80px", maxWidth: "394px" }}
                >
                  {company.desc}
                </p>

                {/* Spacer — pushes button to bottom */}
                <div className="flex-1 min-h-[64px]" />

                {/* Read More — opens detail panel */}
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="inline-flex items-center gap-[2px] text-links font-body py-[2px] border-b border-[#67686B] text-[#67686B] hover:text-[#373738] hover:border-[#373738] transition-colors duration-200 self-start cursor-pointer bg-transparent"
                    aria-label={`Read more about ${company.name}`}
                    onClick={() => setActiveCompany(company)}
                  >
                    Read More
                    <PlusIcon />
                  </button>
                  {company.comingSoon && (
                    <span
                      className="text-label font-body flex-shrink-0"
                      style={{
                        backgroundColor: "#F5E9DC",
                        color: "#0B1738",
                        paddingTop: "3px",
                        paddingBottom: "3px",
                        paddingLeft: "6px",
                        paddingRight: "6px",
                      }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom rule — inset to match content width */}
              <div className={`h-px shrink-0 bg-[#D2D5D9] ${ruleClass}`} />

              {/* Left column separator — inset 16px inside each rule (top-[17px] = 1px rule + 16px gap) */}
              {leftSeparatorClass && (
                <div
                  className={`${leftSeparatorClass} absolute left-0 top-[17px] bottom-[17px] w-px bg-[#D2D5D9]`}
                  aria-hidden="true"
                />
              )}

              {/* Right column separator for lg-C1 with no adjacent C2 card.
                  translate-x-full places the 1px line at C2's left edge — same pixel position
                  as the left separator on adjacent cards. Inset 16px inside each rule. */}
              {showRightSeparator && (
                <div
                  className="hidden lg:block absolute top-[17px] bottom-[17px] right-0 w-px translate-x-full bg-[#D2D5D9]"
                  aria-hidden="true"
                />
              )}
            </article>
          );
        })}

        {/* Filler cell for the empty last-row slot at md (C2) and lg (C3).
            5 companies → 3+2 at lg, 2+2+1 at md. The filler provides the bottom
            rule and left separator for the empty slot at each breakpoint. */}
        {companies.length % 3 !== 0 && companies.length % 2 !== 0 && (
          <div className="hidden md:flex flex-col relative" aria-hidden="true">
            <div className="flex-1" />
            <div className="h-px shrink-0 bg-[#D2D5D9] md:ml-6" />
            <div className="hidden md:block absolute left-0 top-[17px] bottom-[17px] w-px bg-[#D2D5D9]" />
          </div>
        )}
      </div>

      <p className="portfolio-list-note font-body">More venture&apos;s details will be added soon!</p>

      {/* ── DETAIL PANEL ─────────────────────────────────────────── */}
      {activeCompany ? (
        <div className={`portfolio-detail-layer${isClosing ? " is-closing" : ""}`} role="presentation">
          <button
            type="button"
            className="portfolio-detail-backdrop"
            aria-label="Close portfolio details"
            onClick={closePanel}
          />

          <aside
            className="portfolio-detail-panel"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCompany.name} details`}
            aria-describedby={dialogDescriptionId}
          >
            <div className="portfolio-detail-scroll" data-lenis-prevent>
              <div className="portfolio-detail-top">
                <img
                  src={activeCompany.logo}
                  alt={activeCompany.name}
                  width={activeCompany.detailLogoW}
                  height={activeCompany.detailLogoH}
                  className="portfolio-detail-logo"
                  style={
                    {
                      "--portfolio-detail-logo-w": `${activeCompany.detailLogoW}px`,
                      "--portfolio-detail-logo-h": `${activeCompany.detailLogoH}px`,
                      "--portfolio-detail-logo-mobile-w": `${activeCompany.logoW}px`,
                      "--portfolio-detail-logo-mobile-h": `${activeCompany.logoH}px`,
                    } as CSSProperties
                  }
                  draggable={false}
                />
                <button
                  type="button"
                  className="portfolio-detail-close"
                  aria-label="Close portfolio details"
                  onClick={closePanel}
                >
                  <CloseIcon fill="#1C1C1F" />
                </button>
              </div>

              <div className="portfolio-detail-tags">
                {activeCompany.tags.map((tag, index) => (
                  <span key={tag} className="portfolio-list-tag-wrap">
                    <span className="portfolio-list-tag font-body">{tag}</span>
                    {index < activeCompany.tags.length - 1 ? <span className="portfolio-list-tag-divider" /> : null}
                  </span>
                ))}
              </div>

              <p id={dialogDescriptionId} className="portfolio-detail-intro font-body">{activeCompany.details.panelDesc ?? activeCompany.desc}</p>

              <div className="portfolio-detail-meta">
                <div className="portfolio-detail-meta-item">
                  <p className="portfolio-detail-meta-label font-heading">Partnership Start</p>
                  <p className="portfolio-detail-meta-value font-body">{activeCompany.details.partnershipStart}</p>
                </div>
                <div className="portfolio-detail-meta-item">
                  <p className="portfolio-detail-meta-label font-heading">Status</p>
                  <p className="portfolio-detail-meta-value font-body">{activeCompany.details.status}</p>
                </div>
                <div className="portfolio-detail-meta-item">
                  <p className="portfolio-detail-meta-label font-heading">Website</p>
                  <a
                    href={activeCompany.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-detail-meta-value portfolio-detail-meta-link font-body text-body-sm-emphasized"
                  >
                    {activeCompany.details.websiteLabel}
                  </a>
                </div>
              </div>

              {activeCompany.details.sections.map((section) => (
                <div key={section.heading} className="portfolio-detail-content-group">
                  <h2 className="portfolio-detail-heading font-heading">{section.heading}</h2>
                  {section.items ? (
                    <ul className="portfolio-detail-list font-body">
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : (
                    <p className="portfolio-detail-body font-body">{section.body}</p>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </div>
      ) : null}
    </section>
  );
}
