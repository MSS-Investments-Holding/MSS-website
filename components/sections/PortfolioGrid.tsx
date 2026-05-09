"use client";

import { useState, useEffect } from "react";
import ArrowRight from "@/components/icons/ArrowRight";

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

function cardBorderClasses(i: number, total: number): string {
  // Right border: next card exists in the same row
  const mdRight = i < total - 1 && Math.floor(i / 2) === Math.floor((i + 1) / 2);
  const lgRight = i < total - 1 && Math.floor(i / 3) === Math.floor((i + 1) / 3);

  // Bottom border: a next row exists
  const smBottom = i < total - 1;
  const mdBottom = Math.floor(i / 2) < Math.floor((total - 1) / 2);
  const lgBottom = Math.floor(i / 3) < Math.floor((total - 1) / 3);

  const cls: string[] = [];

  if (smBottom) cls.push("border-b border-[#D2D5D9]");

  cls.push(mdRight ? "md:border-r md:border-[#D2D5D9]" : "md:border-r-0");
  if (mdBottom) cls.push("md:border-b md:border-[#D2D5D9]");
  else if (smBottom) cls.push("md:border-b-0");

  cls.push(lgRight ? "lg:border-r lg:border-[#D2D5D9]" : "lg:border-r-0");
  if (lgBottom) cls.push("lg:border-b lg:border-[#D2D5D9]");
  else if (mdBottom || smBottom) cls.push("lg:border-b-0");

  return cls.join(" ");
}

export default function PortfolioGrid(): React.ReactElement {
  const [selected, setSelected] = useState<Company | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

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
      <section aria-label="Portfolio companies" className="w-full px-5 md:px-12 lg:px-20 pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, i) => (
            <article
              key={company.name}
              className={`flex flex-col pt-4 pb-10 lg:pr-10 ${cardBorderClasses(i, companies.length)}`}
            >
              {/* Logo + external link */}
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
                    className="flex-shrink-0 hover:opacity-70 transition-opacity"
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

              {/* Tags */}
              <div className="flex items-center flex-wrap mt-6" style={{ gap: "8px" }}>
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

              {/* Description — flex-1 pushes Read More to bottom */}
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

              {/* Read More */}
              <button
                onClick={() => setSelected(company)}
                className="self-start inline-flex items-center gap-[4px] font-body py-[2px] border-b text-[#67686B] border-[#67686B] hover:text-[#373738] hover:border-[#373738] transition-colors duration-200"
                style={{ marginTop: "24px", fontSize: "15px", lineHeight: "22px", background: "none" }}
                aria-label={`Read more about ${company.name}`}
              >
                Read More
                <ArrowRight size="sm" fill="currentColor" />
              </button>
            </article>
          ))}
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
          "fixed z-50 bg-white overflow-y-auto transition-transform duration-300 ease-out",
          // Mobile: slide up from bottom
          "inset-x-0 bottom-0 max-h-[92dvh] rounded-t-xl shadow-2xl",
          // Tablet+: slide in from right, full height
          "md:inset-y-0 md:right-0 md:left-auto md:bottom-auto md:top-0 md:w-[700px] md:max-h-none md:rounded-none md:shadow-2xl",
          // Open/closed state
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
                style={{ width: "40px", height: "40px", backgroundColor: "#F5E9DC" }}
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
