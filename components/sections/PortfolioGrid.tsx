import ExternalLink from "@/components/icons/ExternalLink";

interface Company {
  name: string;
  logo: string;
  logoW: number;
  logoH: number;
  tags: string[];
  desc: string;
  site: string;
}

const companies: Company[] = [
  {
    name: "Swiss Payments",
    logo: "/images/icons/logo-swiss-payments.svg",
    logoW: 148,
    logoH: 40,
    tags: ["Fintech", "B2C", "Agentic AI"],
    desc: "Swiss Payments is a digital payments and account experience built on a Swiss fintech platform. We created Swiss Payments to make it easier for individuals and businesses to access a Swiss Payments account, cards, payments, and certain digital assets all in one place, with transparent pricing and rigorous compliance.",
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
    name: "DT&T",
    logo: "/images/icons/logo-dtt.svg",
    logoW: 116,
    logoH: 40,
    tags: ["Fintech", "B2C", "Agentic AI"],
    desc: "DT&T Corporation is a UK-based payment institution providing international money transfers, multi-currency accounts, foreign exchange, and digital payment services for individuals and businesses. As an FCA-authorized EMI, DT&T supports accessible cross-border financial activity through a modern digital platform.",
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
              <button type="button" className="portfolio-list-link font-body" aria-label={`Read more about ${company.name}`}>
                Read More
                <PlusIcon />
              </button>
              <a
                href={company.site}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-list-link font-body"
                aria-label={`Visit ${company.name} website`}
              >
                Visit Website
                <ExternalLink fill="currentColor" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="portfolio-list-rule" />
      <p className="portfolio-list-note font-body">More venture's details will be added soon!</p>
    </section>
  );
}
