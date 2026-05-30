"use client";

import { type CSSProperties, useEffect, useId, useState } from "react";

interface Company {
  name: string;
  logo: string;
  logoW: number;
  logoH: number;
  detailLogoW: number;
  detailLogoH: number;
  tags: string[];
  desc: string;
  details: {
    partnershipStart: string;
    status: string;
    websiteLabel: string;
    coreServices: string[];
    subscriptionTiers: string[];
  };
  site: string;
}

const companies: Company[] = [
  {
    name: "Swiss Payments",
    logo: "/images/icons/logo-swiss-payments.svg",
    logoW: 148,
    logoH: 40,
    detailLogoW: 208,
    detailLogoH: 56,
    tags: ["Fintech", "B2C", "Agentic AI"],
    desc: "Swiss Payments is a digital payments and account experience built on a Swiss fintech platform. We created Swiss Payments to make it easier for individuals and businesses to access a Swiss Payments account, cards, payments, and certain digital assets all in one place, with transparent pricing and rigorous compliance.",
    details: {
      partnershipStart: "23/04/2021",
      status: "Ongoing",
      websiteLabel: "www.swisspayments.ch/",
      coreServices: [
        "Realtime Currency Converter",
        "Virtual and Physical Cards",
        "Secure Global Payments",
        "Fiat and Crypto Payments",
      ],
      subscriptionTiers: [
        "Silver - Essential transaction management tools.",
        "Gold - Enhanced limits for consumers.",
        "Platinum - Exclusive priority processing.",
      ],
    },
    site: "https://www.swisspayments.ch/",
  },
  {
    name: "MetaX",
    logo: "/images/icons/logo-metax.svg",
    logoW: 89,
    logoH: 40,
    detailLogoW: 125,
    detailLogoH: 56,
    tags: ["Fintech", "B2C"],
    desc: "MetaX empowers global commerce by providing smarter, faster and borderless payment solutions. Our platform simplifies cross-border transactions, allowing businesses to expand, grow, and connect with the world effortlessly through a unified digital interface.",
    details: {
      partnershipStart: "Details coming soon",
      status: "Ongoing",
      websiteLabel: "www.metaxpayments.com/",
      coreServices: [
        "Cross-border Transactions",
        "Global Payment Solutions",
        "Unified Digital Interface",
        "Business Payment Infrastructure",
      ],
      subscriptionTiers: ["More company details will be added soon."],
    },
    site: "https://www.metaxpayments.com/",
  },
  {
    name: "DT&T",
    logo: "/images/icons/logo-dtt.svg",
    logoW: 116,
    logoH: 40,
    detailLogoW: 162,
    detailLogoH: 56,
    tags: ["Fintech", "B2C", "Agentic AI"],
    desc: "DT&T Corporation is a UK-based payment institution providing international money transfers, multi-currency accounts, foreign exchange, and digital payment services for individuals and businesses. As an FCA-authorized EMI, DT&T supports accessible cross-border financial activity through a modern digital platform.",
    details: {
      partnershipStart: "Details coming soon",
      status: "Ongoing",
      websiteLabel: "www.dtandt.com/",
      coreServices: [
        "International Money Transfers",
        "Multi-currency Accounts",
        "Foreign Exchange",
        "Digital Payment Services",
      ],
      subscriptionTiers: ["More company details will be added soon."],
    },
    site: "https://www.dtandt.com/",
  },
];

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

export default function PortfolioGrid(): React.ReactElement {
  const [activeCompany, setActiveCompany] = useState<Company | null>(null);
  const dialogDescriptionId = useId();

  useEffect(() => {
    if (!activeCompany) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCompany(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCompany]);

  return (
    <section aria-label="Investment Portfolio" className="portfolio-list-section w-full bg-white px-5 md:px-12 lg:px-20">
      <div className="portfolio-list-rule" />

      <div className="portfolio-list-grid">
        {companies.map((company) => (
          <article key={company.name} className="portfolio-list-card">
            <img
              src={company.logo}
              alt={company.name}
              width={company.logoW}
              height={company.logoH}
              className="portfolio-list-logo"
              style={{ width: company.logoW, height: company.logoH }}
              draggable={false}
            />

            <div className="portfolio-list-tags">
              {company.tags.map((tag, index) => (
                <span key={tag} className="portfolio-list-tag-wrap">
                  <span className="portfolio-list-tag font-body">{tag}</span>
                  {index < company.tags.length - 1 ? <span className="portfolio-list-tag-divider" /> : null}
                </span>
              ))}
            </div>

            <p className="portfolio-list-description font-body">{company.desc}</p>

            <div className="portfolio-list-actions">
              <button
                type="button"
                className="portfolio-list-link font-body"
                aria-label={`Read more about ${company.name}`}
                onClick={() => setActiveCompany(company)}
              >
                Read More
                <PlusIcon />
              </button>

            </div>
          </article>
        ))}
      </div>

      <div className="portfolio-list-rule" />
      <p className="portfolio-list-note font-body">More ventures will be added soon!</p>

      {activeCompany ? (
        <div className="portfolio-detail-layer" role="presentation">
          <button
            type="button"
            className="portfolio-detail-backdrop"
            aria-label="Close portfolio details"
            onClick={() => setActiveCompany(null)}
          />

          <aside
            className="portfolio-detail-panel"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCompany.name} details`}
            aria-describedby={dialogDescriptionId}
          >
            <div className="portfolio-detail-scroll">
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
                  onClick={() => setActiveCompany(null)}
                >
                  <PlusIcon />
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

              <p id={dialogDescriptionId} className="portfolio-detail-intro font-body">{activeCompany.desc}</p>

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
                    className="portfolio-detail-meta-value portfolio-detail-meta-link font-body"
                  >
                    {activeCompany.details.websiteLabel}
                  </a>
                </div>
              </div>

              <div className="portfolio-detail-content-group">
                <h2 className="portfolio-detail-heading font-heading">Core Services</h2>
                <p className="portfolio-detail-list font-body">{activeCompany.details.coreServices.join("\n")}</p>
              </div>

              <div className="portfolio-detail-content-group portfolio-detail-content-group-last">
                <h2 className="portfolio-detail-heading font-heading">Subscription Tiers</h2>
                <p className="portfolio-detail-list font-body">{activeCompany.details.subscriptionTiers.join("\n")}</p>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </section>
  );
}
