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
  details: {
    partnershipStart: string;
    status: string;
    websiteLabel: string;
    sections: DetailSection[];
  };
  site: string;
}

const companies: Company[] = [
  {
    name: "DT&T",
    logo: "/images/icons/logo-dtt.svg",
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
          heading: "Core Services",
          items: [
            "Realtime Currency Converter",
            "Virtual and Physical Cards",
            "Secure Global Payments",
            "Fiat and Crypto Payments",
          ],
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
    site: "https://dttcl.com/",
  },
  {
    name: "Swiss Payments",
    logo: "/images/icons/logo-swiss-payments.svg",
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
    logo: "/images/icons/logo-metax.svg",
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
      if (event.key === "Escape") {
        closePanel();
      }
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
