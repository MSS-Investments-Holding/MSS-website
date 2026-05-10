"use client";

import {
  Fragment,
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
  type CSSProperties,
  type ReactElement,
} from "react";
import { useLenis } from "lenis/react";

interface Company {
  name: string;
  logo: string;
  logoW: number;
  logoH: number;
  tags: string[];
  desc: string;
  site: string | null;
}

const companies: Company[] = [
  {
    name: "Swiss Payments",
    logo: "/images/icons/logo-swiss-payments.svg",
    logoW: 148,
    logoH: 40,
    tags: ["Fintech", "B2C", "Agentic AI"],
    desc: "Swiss Payments is a global financial platform built to help individuals and businesses send, receive, and manage money across borders with speed, security, and simplicity. It reflects MSS's focus on practical financial infrastructure with international relevance.",
    site: "https://www.swisspayments.ch/",
  },
  {
    name: "MetaX",
    logo: "/images/icons/logo-metax.svg",
    logoW: 89,
    logoH: 40,
    tags: ["Fintech", "B2C"],
    desc: "MetaX empowers global commerce by providing smarter, faster and borderless payment solutions. Our platform simplifies cross-border transactions, allowing businesses to expand, grow, and connect with the world effortlessly through a unified digital interface.",
    site: "https://www.metaxpayments.com/",
  },
  {
    name: "Pay Karo",
    logo: "/images/icons/logo-paykaro.png",
    logoW: 53,
    logoH: 40,
    tags: ["Fintech", "B2B", "B2C"],
    desc: "Pay Karo is an Electronic Money Institution (EMI) dedicated to becoming one of Pakistan's leading fintech providers. Targeting both B2B and B2C customers, Pay Karo offers a transparent and secure ecosystem for payments, remittances, merchant offers, P2P (Peer to Peer) transactions, etc.",
    site: null,
  },
  {
    name: "Relm",
    logo: "/images/icons/logo-relm.svg",
    logoW: 85,
    logoH: 40,
    tags: ["Fintech", "B2C", "Agentic AI"],
    desc: "Relm is an enterprise payments platform built to unify fiat and crypto within one compliance-first ecosystem. It enables businesses to accept payments, manage multi-currency accounts, and execute large-volume trades through infrastructure designed for faster, more flexible global value movement.",
    site: "https://www.relm.co/",
  },
  {
    name: "Sportuner",
    logo: "/images/icons/logo-martech.png",
    logoW: 133,
    logoH: 40,
    tags: ["Agentic AI", "Digital Media"],
    desc: "Data-driven MarTech and performance marketing agency, leveraging AI for high-ROI customer acquisition and digital growth.",
    site: null,
  },
  {
    name: "Sidra Capital",
    logo: "/images/icons/logo-sidra.png",
    logoW: 110,
    logoH: 40,
    tags: ["Venture Capitalization", "Agentic AI"],
    desc: "Sidra Capital is a Saudi-regulated alternative asset manager focused on real estate, private finance, and private equity. With offices across key global markets, the firm applies a disciplined approach to long-term investment value.",
    site: "https://sidracapital.com/",
  },
  {
    name: "GIGH Technologies",
    logo: "/images/icons/logo-gigh.png",
    logoW: 54,
    logoH: 40,
    tags: ["Fintech", "B2B", "Agentic AI"],
    desc: "GIGH Technologies builds AI-based software solutions for banks, fintechs, and businesses across global industries. Its services span Banking 360, multi-asset ledgers, AI-powered chat systems, crypto and remittance software, B2B solutions, staff augmentation, and industrial AI platforms.",
    site: "https://gigh.com/",
  },
  {
    name: "SAI Ventures",
    logo: "/images/icons/logo-sai-ventures.png",
    logoW: 41,
    logoH: 40,
    tags: ["Venture Capitalization"],
    desc: "SAI Ventures serves as the dedicated investment arm of the MSS ecosystem, focused on identifying and nurturing high-growth opportunities within frontier technology. We provide disciplined capital allocation and operational support to ensure sustainable scaling.",
    site: "https://saiventurecap.com/",
  },
];

const PANEL = {
  siteLabel: "www.swisspayments.ch/",
  status: "Ongoing",
  partnershipStart: "23/04/2021",
  coreServices: [
    "Realtime Currency Converter",
    "Virtual and Physical Cards",
    "Secure Global Payments",
    "Fiat and Crypto Payments",
  ],
  subscriptionTiers: [
    "Silver — Essential transaction management tools.",
    "Gold — Enhanced limits for consumers.",
    "Platinum — Exclusive priority processing.",
  ],
};

/* Plus icon — exported from Figma node 735:651 (10×10 vector) */
function PlusIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M4.28571 4.28571V0H5.71429V4.28571H10V5.71429H5.71429V10H4.28571V5.71429H0V4.28571H4.28571Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** 24px inner padding when multi-column layout (ResizeObserver cols > 1). */
function cardPaddingClasses(cols: 1 | 2 | 3): string {
  return cols > 1 ? "px-6" : "";
}

function chunkCompanies<T>(items: T[], size: number): T[][] {
  if (size <= 0) return [];
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

/** Minimum card column width and gutter — 3×320 + 2×48 = 1056; 2×320 + 48 = 688 */
const CARD_MIN_PX = 320;
const GUTTER_PX = 48;

function columnCountForWidth(containerWidth: number): 1 | 2 | 3 {
  const w = containerWidth;
  const fit3 = 3 * CARD_MIN_PX + 2 * GUTTER_PX;
  const fit2 = 2 * CARD_MIN_PX + GUTTER_PX;
  if (w >= fit3) return 3;
  if (w >= fit2) return 2;
  return 1;
}

function gridTemplateForColumns(cols: 1 | 2 | 3): string {
  const c = `minmax(${CARD_MIN_PX}px, 1fr)`;
  const g = `${GUTTER_PX}px`;
  if (cols === 1) return c;
  if (cols === 2) return `${c} ${g} ${c}`;
  return `${c} ${g} ${c} ${g} ${c}`;
}

/** One horizontal segment in a card column (rule sits in the middle of the 48px-tall gutter row). */
function HorizontalSegment(props: { gridColumn: number; gridRow: number }): ReactElement {
  return (
    <div
      className="flex h-12 min-h-0 items-center"
      style={{ gridColumn: props.gridColumn, gridRow: props.gridRow }}
      aria-hidden="true"
    >
      <div className="h-px w-full bg-[var(--color-border-medium)]" />
    </div>
  );
}

/** Empty 48px gutter cell on horizontal spacer rows — keeps vertical gutters visually open. */
function HorizontalGutterSpacer(props: { gridColumn: number; gridRow: number }): ReactElement {
  return (
    <div
      className="h-12 min-h-0"
      style={{ gridColumn: props.gridColumn, gridRow: props.gridRow }}
      aria-hidden="true"
    />
  );
}

/**
 * Horizontal rules between rows: one segment per card column (no line in vertical gutter
 * columns), matching Figma corner gaps.
 */
function HorizontalBetweenRows(props: { cols: 1 | 2 | 3; gridRow: number }): ReactElement {
  const { cols, gridRow } = props;
  if (cols === 1) {
    return <HorizontalSegment gridColumn={1} gridRow={gridRow} />;
  }
  if (cols === 2) {
    return (
      <>
        <HorizontalSegment gridColumn={1} gridRow={gridRow} />
        <HorizontalGutterSpacer gridColumn={2} gridRow={gridRow} />
        <HorizontalSegment gridColumn={3} gridRow={gridRow} />
      </>
    );
  }
  return (
    <>
      <HorizontalSegment gridColumn={1} gridRow={gridRow} />
      <HorizontalGutterSpacer gridColumn={2} gridRow={gridRow} />
      <HorizontalSegment gridColumn={3} gridRow={gridRow} />
      <HorizontalGutterSpacer gridColumn={4} gridRow={gridRow} />
      <HorizontalSegment gridColumn={5} gridRow={gridRow} />
    </>
  );
}

/** Empty card-area cell on horizontal spacer rows (no rule — keeps grid alignment). */
function HorizontalEmptyCell(props: { gridColumn: number; gridRow: number }): ReactElement {
  return (
    <div
      className="h-12 min-h-0"
      style={{ gridColumn: props.gridColumn, gridRow: props.gridRow }}
      aria-hidden="true"
    />
  );
}

/**
 * Segmented horizontal rules below the last row of cards (one segment per card).
 * Partial rows leave trailing columns empty so rules never read as one full-width line.
 */
function HorizontalFinalRow(props: {
  cols: 1 | 2 | 3;
  cardsInLastRow: number;
  gridRow: number;
}): ReactElement | null {
  const { cols, cardsInLastRow, gridRow } = props;
  if (cardsInLastRow <= 0) return null;

  if (cols === 1) {
    return <HorizontalSegment gridColumn={1} gridRow={gridRow} />;
  }

  if (cols === 2) {
    if (cardsInLastRow >= 2) {
      return (
        <>
          <HorizontalSegment gridColumn={1} gridRow={gridRow} />
          <HorizontalGutterSpacer gridColumn={2} gridRow={gridRow} />
          <HorizontalSegment gridColumn={3} gridRow={gridRow} />
        </>
      );
    }
    return (
      <>
        <HorizontalSegment gridColumn={1} gridRow={gridRow} />
        <HorizontalGutterSpacer gridColumn={2} gridRow={gridRow} />
        <HorizontalEmptyCell gridColumn={3} gridRow={gridRow} />
      </>
    );
  }

  /* cols === 3 */
  if (cardsInLastRow >= 3) {
    return <HorizontalBetweenRows cols={3} gridRow={gridRow} />;
  }
  if (cardsInLastRow === 2) {
    return (
      <>
        <HorizontalSegment gridColumn={1} gridRow={gridRow} />
        <HorizontalGutterSpacer gridColumn={2} gridRow={gridRow} />
        <HorizontalSegment gridColumn={3} gridRow={gridRow} />
        <HorizontalGutterSpacer gridColumn={4} gridRow={gridRow} />
        <HorizontalEmptyCell gridColumn={5} gridRow={gridRow} />
      </>
    );
  }
  return (
    <>
      <HorizontalSegment gridColumn={1} gridRow={gridRow} />
      <HorizontalGutterSpacer gridColumn={2} gridRow={gridRow} />
      <HorizontalEmptyCell gridColumn={3} gridRow={gridRow} />
      <HorizontalGutterSpacer gridColumn={4} gridRow={gridRow} />
      <HorizontalEmptyCell gridColumn={5} gridRow={gridRow} />
    </>
  );
}

/** Vertical rule centered in a 48px-wide gutter column; stretches to row height. */
function VerticalGutterTrack(props: {
  gridColumn: number;
  gridRow: number;
}): ReactElement {
  return (
    <div
      className="flex h-full min-h-0 w-full justify-center justify-self-stretch"
      style={{ gridColumn: props.gridColumn, gridRow: props.gridRow }}
      aria-hidden="true"
    >
      <div className="w-px shrink-0 self-stretch bg-[var(--color-border-medium)]" />
    </div>
  );
}

function CompanyCard(props: {
  company: Company;
  cols: 1 | 2 | 3;
  className?: string;
  style?: CSSProperties;
  onReadMore: () => void;
}): ReactElement {
  const { company, cols, className = "", style, onReadMore } = props;
  return (
    <article
      className={`flex h-full flex-col pt-10 pb-10 ${cardPaddingClasses(cols)} ${className}`}
      style={style}
    >
      <div className="flex items-start justify-between">
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
        {company.site && (
          <a
            href={company.site}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${company.name} website`}
            className="flex-shrink-0 transition-opacity hover:opacity-70"
          >
            <img
              src="/images/icons/icon-external-link.svg"
              alt=""
              width={32}
              height={32}
              draggable={false}
            />
          </a>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center" style={{ gap: "8px" }}>
        {company.tags.map((tag, ti) => (
          <span key={tag} className="flex items-center gap-2">
            <span className="text-label font-body" style={{ color: "#67686B" }}>
              {tag}
            </span>
            {ti < company.tags.length - 1 && (
              <span
                style={{
                  width: "1px",
                  height: "10px",
                  backgroundColor: "#67686B",
                  display: "inline-block",
                }}
              />
            )}
          </span>
        ))}
      </div>

      <p
        className="font-body flex-1"
        style={{
          fontSize: "15px",
          lineHeight: "22px",
          color: "#373738",
          marginTop: "80px",
        }}
      >
        {company.desc}
      </p>

      <button
        type="button"
        onClick={onReadMore}
        className="inline-flex items-center gap-[4px] self-start py-[2px] font-body text-[#67686B] transition-colors duration-200 hover:text-[#373738]"
        style={{
          marginTop: "24px",
          fontSize: "15px",
          lineHeight: "22px",
          background: "none",
          border: "none",
          borderBottom: "1px solid #67686B",
          padding: "2px 0",
          cursor: "pointer",
        }}
        aria-label={`Read more about ${company.name}`}
      >
        Read More
        <PlusIcon />
      </button>
    </article>
  );
}

export default function PortfolioGrid(): ReactElement {
  const [selected, setSelected] = useState<Company | null>(null);
  const lenis = useLenis();

  const gridRef = useRef<HTMLDivElement>(null);
  /** Fluid columns from container width: shrink until 320px min, then drop to fewer columns (688 / 1056). */
  const [cols, setCols] = useState<1 | 2 | 3>(1);

  const updateCols = useCallback(() => {
    const el = gridRef.current;
    if (!el) return;
    setCols(columnCountForWidth(el.getBoundingClientRect().width));
  }, []);

  useLayoutEffect(() => {
    updateCols();
    const el = gridRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => updateCols());
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateCols]);

  const portfolioRows = chunkCompanies(companies, cols);

  useEffect(() => {
    // Lenis intercepts scroll events at JS level — overflow:hidden alone doesn't stop it.
    // Use lenis.stop()/start() as the primary lock; CSS overflow as fallback.
    if (selected) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [selected, lenis]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = selected !== null;

  return (
    <>
      {/* ── COMPANY GRID ──────────────────────────────────────────── */}
      <section aria-label="Portfolio companies" className="w-full px-5 md:px-12 lg:px-20 pt-6 md:pt-10 lg:pt-14 pb-16 md:pb-20 lg:pb-[120px]">
        {/*
         * 48px gutters; rules centered in gutters. Horizontal rules are segmented
         * per card column (not full bleed). Columns: min 320px per card, then wrap
         * at 688px / 1056px container widths (ResizeObserver on this grid).
         */}
        <div
          ref={gridRef}
          className="grid w-full min-w-0"
          style={{ gridTemplateColumns: gridTemplateForColumns(cols) }}
        >
          {portfolioRows.map((row, ri) => {
            const cardRow = ri * 2 + 1;
            return (
              <Fragment key={`row-${ri}`}>
                {row.map((company, ci) => (
                  <CompanyCard
                    key={company.name}
                    company={company}
                    cols={cols}
                    onReadMore={() => setSelected(company)}
                    className="min-h-0 min-w-0"
                    style={{
                      gridColumn: 1 + ci * 2,
                      gridRow: cardRow,
                    }}
                  />
                ))}
                {cols >= 2 && row.length >= 2 && (
                  <VerticalGutterTrack gridColumn={2} gridRow={cardRow} />
                )}
                {cols >= 3 && row.length >= 3 && (
                  <VerticalGutterTrack gridColumn={4} gridRow={cardRow} />
                )}
                {ri < portfolioRows.length - 1 && (
                  <HorizontalBetweenRows cols={cols} gridRow={ri * 2 + 2} />
                )}
              </Fragment>
            );
          })}
          {portfolioRows.length > 0 && (
            <HorizontalFinalRow
              cols={cols}
              cardsInLastRow={portfolioRows[portfolioRows.length - 1]?.length ?? 0}
              gridRow={portfolioRows.length * 2}
            />
          )}
        </div>
      </section>

      {/* ── OVERLAY ───────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${open ? "opacity-60" : "opacity-0 pointer-events-none"}`}
        onClick={() => setSelected(null)}
        aria-hidden="true"
      />

      {/* ── SIDE PANEL ────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={selected ? `${selected.name} details` : "Company details"}
        className={[
          "fixed z-50 bg-white overflow-y-auto transition-transform duration-300 ease-out shadow-2xl",
          // Full viewport height on all sizes; mobile slides up, desktop slides right
          "inset-x-0 inset-y-0",
          // Desktop: fixed 700px panel from right
          "md:left-auto md:w-[700px]",
          // Open/closed state — mobile: slide up, desktop: slide right
          open
            ? "translate-y-0 md:translate-x-0"
            : "translate-y-full md:translate-y-0 md:translate-x-full",
        ].join(" ")}
      >
        {selected && (
          <div className="flex flex-col min-h-full">

            {/* Header: logo + close */}
            <div className="flex items-start justify-between px-5 md:px-[60px] pt-8 md:pt-14">
              <img
                src={selected.logo}
                alt={selected.name}
                width={Math.round(selected.logoW * 1.4)}
                height={Math.round(selected.logoH * 1.4)}
                style={{
                  width: `${Math.round(selected.logoW * 1.4)}px`,
                  height: `${Math.round(selected.logoH * 1.4)}px`,
                  objectFit: "contain",
                  objectPosition: "left",
                  maxWidth: "220px",
                }}
              />
              <button
                onClick={() => setSelected(null)}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: "40px", height: "40px", backgroundColor: "#F5E9DC", cursor: "pointer" }}
                aria-label="Close panel"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <line x1="2" y1="2" x2="14" y2="14" stroke="#1C1C1F" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="14" y1="2" x2="2" y2="14" stroke="#1C1C1F" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Tags */}
            <div className="flex items-center flex-wrap px-5 md:px-[60px] mt-6" style={{ gap: "8px" }}>
              {selected.tags.map((tag, ti) => (
                <span key={tag} className="flex items-center gap-2">
                  <span className="text-label font-body" style={{ color: "#67686B" }}>
                    {tag}
                  </span>
                  {ti < selected.tags.length - 1 && (
                    <span
                      style={{
                        width: "1px",
                        height: "10px",
                        backgroundColor: "#67686B",
                        display: "inline-block",
                      }}
                    />
                  )}
                </span>
              ))}
            </div>

            {/* Description */}
            <p
              className="font-body text-body-lg px-5 md:px-[60px] mt-6"
              style={{ color: "#373738" }}
            >
              {selected.desc}
            </p>

            {/* Divider */}
            <div className="mt-8" style={{ height: "1px", backgroundColor: "#D2D5D9" }} />

            {/* Metadata */}
            <div className="flex flex-col px-5 md:px-[60px] mt-6" style={{ gap: "16px" }}>
              {selected.site && (
                <div className="flex items-baseline justify-between gap-4">
                  <span
                    className="font-heading flex-shrink-0"
                    style={{ fontSize: "16px", lineHeight: "22px", fontWeight: 300, color: "#67686B" }}
                  >
                    Visit Website
                  </span>
                  <a
                    href={selected.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body hover:opacity-70 transition-opacity truncate"
                    style={{ fontSize: "15px", lineHeight: "22px", fontWeight: 500, color: "#373738" }}
                  >
                    {PANEL.siteLabel}
                  </a>
                </div>
              )}
              <div className="flex items-baseline justify-between gap-4">
                <span
                  className="font-heading flex-shrink-0"
                  style={{ fontSize: "16px", lineHeight: "22px", fontWeight: 300, color: "#67686B" }}
                >
                  Status
                </span>
                <span
                  className="font-body"
                  style={{ fontSize: "15px", lineHeight: "22px", color: "#373738" }}
                >
                  {PANEL.status}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <span
                  className="font-heading flex-shrink-0"
                  style={{ fontSize: "16px", lineHeight: "22px", fontWeight: 300, color: "#67686B" }}
                >
                  Partnership Start
                </span>
                <span
                  className="font-body"
                  style={{ fontSize: "15px", lineHeight: "22px", color: "#373738" }}
                >
                  {PANEL.partnershipStart}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-8" style={{ height: "1px", backgroundColor: "#D2D5D9" }} />

            {/* Core Services */}
            <div className="px-5 md:px-[60px] mt-8">
              <h3
                className="font-heading"
                style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F" }}
              >
                Core Services
              </h3>
              <ul className="mt-4 flex flex-col" style={{ gap: "6px" }}>
                {PANEL.coreServices.map((service) => (
                  <li
                    key={service}
                    className="font-body"
                    style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B" }}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="mt-8" style={{ height: "1px", backgroundColor: "#D2D5D9" }} />

            {/* Subscription Tiers */}
            <div className="px-5 md:px-[60px] mt-8 pb-16">
              <h3
                className="font-heading"
                style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F" }}
              >
                Subscription Tiers
              </h3>
              <ul className="mt-4 flex flex-col" style={{ gap: "6px" }}>
                {PANEL.subscriptionTiers.map((tier) => (
                  <li
                    key={tier}
                    className="font-body"
                    style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B" }}
                  >
                    {tier}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        )}
      </div>
    </>
  );
}
