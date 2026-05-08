"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import ArrowRight from "@/components/icons/ArrowRight";

const steps = [
  { icon: "/images/icons/step-discovery.svg",  title: "Origination", desc: "Identify opportunities via our network, market activity, founder talks, and sector research." },
  { icon: "/images/icons/step-strategy.svg",   title: "Evaluation",  desc: "Assess business model, market timing, team, growth potential, risk, and ecosystem fit." },
  { icon: "/images/icons/step-validation.svg", title: "Execution",   desc: "Structure the right involvement, via capital, partnership, strategic support within the portfolio." },
  { icon: "/images/icons/step-launch.svg",     title: "Management",  desc: "Stay involved post-investment, supporting governance, priorities, and value creation." },
];

const companies = [
  {
    name:   "Swiss Payments",
    logo:   "/images/icons/logo-swiss-payments.svg",
    logoW:  148,
    logoH:  40,
    tags:   ["Fintech", "B2C", "Agentic AI"],
    desc:   "Swiss Payments is a global financial platform built to help individuals and businesses send, receive, and manage money across borders with speed, security, and simplicity. It reflects MSS's focus on practical financial infrastructure with international relevance.",
    site:   "https://www.swisspayments.ch/",
  },
  {
    name:   "MetaX",
    logo:   "/images/icons/logo-metax.svg",
    logoW:  89,
    logoH:  40,
    tags:   ["Fintech", "B2C"],
    desc:   "MetaX empowers global commerce by providing smarter, faster and borderless payment solutions. Our platform simplifies cross-border transactions, allowing businesses to expand, grow, and connect with the world effortlessly through a unified digital interface.",
    site:   "https://www.metaxpayments.com/",
  },
  {
    name:   "Pay Karo",
    logo:   "/images/icons/logo-paykaro.png",
    logoW:  53,
    logoH:  40,
    tags:   ["Fintech", "B2B", "B2C"],
    desc:   "Pay Karo is an Electronic Money Institution (EMI) dedicated to becoming one of Pakistan's leading fintech providers. Targeting both B2B and B2C customers, Pay Karo offers a transparent and secure ecosystem for payments, remittances, merchant offers, P2P (Peer to Peer) transactions, etc.",
    site:   null,
  },
  {
    name:   "Relm",
    logo:   "/images/icons/logo-relm.svg",
    logoW:  85,
    logoH:  40,
    tags:   ["Fintech", "B2C", "Agentic AI"],
    desc:   "Relm is an enterprise payments platform built to unify fiat and crypto within one compliance-first ecosystem. It enables businesses to accept payments, manage multi-currency accounts, and execute large-volume trades through infrastructure designed for faster, more flexible global value movement.",
    site:   "https://www.relm.co/",
  },
];

export default function PortfolioProcessSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    dragStart.current = { x: e.pageX, scrollLeft: scrollRef.current.scrollLeft };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const stopDrag = () => setIsDragging(false);

  return (
    <section aria-label="Portfolio" className="w-full bg-white">

      {/* ── HEADER — centered ─────────────────────────────────── */}
      <div className="w-full flex flex-col items-center text-center px-5 md:px-10 lg:px-20 pt-20 md:pt-24 lg:pt-[120px] pb-10 md:pb-14 lg:pb-[84px]">
        <span className="text-label font-body" style={{ color: "#373738" }}>Investment Portfolio</span>
        <h2
          className="font-heading max-w-[724px]"
          style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)", lineHeight: "1.087", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px" }}
        >
          A Portfolio Built with Strategic Intent
        </h2>
      </div>

      {/* ── 4 PROCESS STEPS ───────────────────────────────────── */}
      <div className="w-full px-10 md:px-20 lg:px-32 pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-white flex items-center justify-center flex-shrink-0">
                <img src={step.icon} alt="" width={32} height={32} style={{ width: "32px", height: "32px", objectFit: "contain" }} />
              </div>
              <h3
                className="font-heading"
                style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "16px" }}
              >
                {step.title}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "8px" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── TOP DIVIDER ───────────────────────────────────────── */}
      <div className="mx-5 md:mx-10 lg:mx-20" style={{ height: "1px", backgroundColor: "#D2D5D9" }} />

      {/* ── DRAGGABLE COMPANY CARDS ───────────────────────────── */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto scrollbar-hide select-none px-5 md:px-10 lg:px-20"
        style={{ cursor: isDragging ? "grabbing" : "grab", paddingTop: "24px", paddingBottom: "24px" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        <div className="flex" style={{ minWidth: "max-content" }}>
          {companies.map((company, i) => (
            <div
              key={company.name}
              className="flex flex-col flex-shrink-0"
              style={{
                width: "408px",
                height: "460px",
                paddingTop: "16px",
                paddingBottom: "40px",
                paddingLeft: i === 0 ? 0 : "24px",
                paddingRight: i < companies.length - 1 ? "24px" : 0,
                borderLeft: i === 0 ? "none" : "1px solid #D2D5D9",
              }}
            >
              {/* Logo + external link */}
              <div className="flex items-start justify-between">
                <img
                  src={company.logo}
                  alt={company.name}
                  width={company.logoW}
                  height={company.logoH}
                  style={{ width: `${company.logoW}px`, height: `${company.logoH}px`, objectFit: "contain", objectPosition: "left" }}
                  draggable={false}
                />
                {company.site && (
                  <a
                    href={company.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${company.name} website`}
                    className="flex-shrink-0 hover:opacity-70 transition-opacity"
                    onMouseDown={e => e.stopPropagation()}
                  >
                    <img src="/images/icons/icon-external-link.svg" alt="" width={32} height={32} draggable={false} />
                  </a>
                )}
              </div>

              {/* Tags */}
              <div className="flex items-center flex-wrap" style={{ marginTop: "24px", gap: "8px" }}>
                {company.tags.map((tag, ti) => (
                  <span key={tag} className="flex items-center gap-2">
                    <span className="text-label font-body" style={{ color: "#67686B" }}>{tag}</span>
                    {ti < company.tags.length - 1 && (
                      <span style={{ width: "1px", height: "10px", backgroundColor: "#67686B", display: "inline-block" }} />
                    )}
                  </span>
                ))}
              </div>

              {/* Description — flex-1 fills remaining height, pushes Read More down */}
              <p
                className="font-body flex-1"
                style={{ fontSize: "15px", lineHeight: "22px", color: "#373738", margin: 0, marginTop: "80px" }}
                draggable={false}
              >
                {company.desc}
              </p>

              {/* Read More — links to company detail page (not yet built) */}
              <Link
                href="#"
                className="self-start inline-flex items-center gap-[4px] text-links font-body py-[2px] border-b text-[#67686B] border-[#67686B] hover:text-[#373738] hover:border-[#373738] transition-colors duration-200"
                style={{ marginTop: "16px", textDecoration: "none" }}
                onMouseDown={e => e.stopPropagation()}
              >
                Read More
                <ArrowRight size="sm" fill="currentColor" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM DIVIDER ────────────────────────────────────── */}
      <div className="mx-5 md:mx-10 lg:mx-20" style={{ height: "1px", backgroundColor: "#D2D5D9" }} />

      {/* ── VISIT PORTFOLIO BUTTON — right-aligned ────────────── */}
      <div className="flex justify-end px-5 md:px-10 lg:px-20 pb-6" style={{ paddingTop: "64px" }}>
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center gap-[4px] font-body text-white"
          style={{
            height: "40px",
            backgroundColor: "#1C1C1F",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "-0.32px",
            paddingLeft: "20px",
            paddingRight: "16px",
            paddingTop: "8px",
            paddingBottom: "8px",
            whiteSpace: "nowrap",
            textDecoration: "none",
          }}
        >
          Visit Portfolio
          <ArrowRight size="lg" fill="white" />
        </Link>
      </div>

    </section>
  );
}
