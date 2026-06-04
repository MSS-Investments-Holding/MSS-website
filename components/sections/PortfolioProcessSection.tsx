import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";
import ArrowUpRight from "@/components/icons/ArrowUpRight";

const steps = [
  { icon: "/icons/step-discovery.svg",  title: "Origination", desc: "Identify opportunities via our network, market activity, founder talks, and sector research." },
  { icon: "/icons/step-strategy.svg",   title: "Evaluation",  desc: "Assess business model, market timing, team, growth potential, risk, and ecosystem fit." },
  { icon: "/icons/step-validation.svg", title: "Execution",   desc: "Structure the right involvement, via capital, partnership, strategic support within the portfolio." },
  { icon: "/icons/step-launch.svg",     title: "Management",  desc: "Stay involved post-investment, supporting governance, priorities, and value creation." },
];

const companies = [
  {
    name: "DT&T",
    logo: "/icons/logo-dtt.svg",
    logoW: 116,
    logoH: 40,
    tags: ["Fintech", "B2C", "UK EMI"],
    desc: "DT&T Corporation is a UK-based payment institution providing international money transfers, multi-currency accounts, foreign exchange, and digital payment services for individuals and businesses. As an FCA-authorized EMI, DT&T supports accessible cross-border financial activity through a modern digital platform.",
    site: "https://www.dtandt.com/",
    comingSoon: false,
  },
  {
    name: "Swiss Payments",
    logo: "/icons/logo-swiss-payments.svg",
    logoW: 148,
    logoH: 40,
    tags: ["Fintech", "B2C", "SRO License"],
    desc: "Swiss Payments is a digital payments and account experience built on a Swiss fintech platform. We created Swiss Payments to make it easier for individuals and businesses to access a Swiss Payments account, cards, payments, and certain digital assets all in one place, with transparent pricing and rigorous compliance.",
    site: "https://www.swisspayments.ch/",
    comingSoon: false,
  },
  {
    name: "MetaX",
    logo: "/icons/logo-metax.svg",
    logoW: 89,
    logoH: 40,
    tags: ["Fintech", "B2C", "MSB License"],
    desc: "MetaX empowers global commerce by providing smarter, faster and borderless payment solutions. Our platform simplifies cross-border transactions, allowing businesses to expand, grow, and connect with the world effortlessly through a unified digital interface.",
    site: "https://www.metaxpayments.com/",
    comingSoon: false,
  },
  {
    name: "TokenBazaar",
    logo: "/icons/logo-tokenbazaar.svg",
    logoW: 224,
    logoH: 40,
    tags: ["Fintech Investments", "Real World Assets"],
    desc: "TokenBazaar is building the future of accessible investing by opening the door to real-world assets for everyday investors. Through a secure digital platform, users can discover, evaluate, and participate in professionally structured investment opportunities that were historically out of reach for most individuals.",
    site: "https://tokenbazaar.com/",
    comingSoon: true,
  },
];

export default function PortfolioProcessSection() {
  return (
    <section aria-label="Investment Portfolio" className="w-full bg-white">
      <div className="w-full flex flex-col items-center text-center px-5 md:px-12 lg:px-20 pt-20 md:pt-24 lg:pt-[140px] pb-14 md:pb-16 lg:pb-[60px]">
        <span className="text-label font-body" style={{ color: "#67686B" }}>Investment Portfolio</span>
        <h2
          className="portfolio-process-h2 font-heading font-light"
          style={{ color: "#1C1C1F", margin: 0, marginTop: "24px", maxWidth: "15.1em" }}
        >
          A Portfolio Built with Strategic Intent
        </h2>
      </div>

      <div className="w-full px-5 md:px-12 lg:px-20 pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-white flex items-center justify-center flex-shrink-0">
                <img src={step.icon} alt="" width={40} height={40} style={{ width: "40px", height: "40px", objectFit: "contain" }} />
              </div>
              <h3 className="font-heading text-h5" style={{ color: "#1C1C1F", margin: 0, marginTop: "24px" }}>
                {step.title}
              </h3>
              <p className="font-body text-body-sm" style={{ color: "#67686B", margin: 0, marginTop: "4px", maxWidth: "260px" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/*
       * Cards always use horizontal scroll.
       * Below 1432px: 4 cards at 380px each overflow the container → scroll is active.
       * At 1432px+: 4 cards at min 300px (1272px content + 160px margins = 1432px) fit exactly
       *   → cards flex to fill, no overflow, no scroll bar.
       */}
      <div className="px-5 md:px-12 lg:px-20 overflow-x-auto scrollbar-hide">
        <div className="flex gap-6">
          {companies.map((company, index) => (
            <article
              key={company.name}
              className={[
                "flex flex-col flex-none w-[min(380px,calc((100vw_-_44px)_/_1.2))] min-[1432px]:flex-1 min-[1432px]:w-auto min-[1432px]:min-w-[300px] min-[1432px]:max-w-[380px]",
                index > 0 ? "relative" : "",
              ].join(" ")}
            >
              {/* Top rule — inset to align with content for cards after the first */}
              <div className={["h-px shrink-0 bg-[#D2D5D9]", index > 0 ? "ml-6" : ""].join(" ")} />
              <div
                className={[
                  "flex-1 min-h-[360px] lg:min-h-[444px] flex flex-col py-10",
                  index > 0 ? "pl-6" : "",
                ].join(" ")}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  width={company.logoW}
                  height={company.logoH}
                  style={{ width: `${company.logoW}px`, height: `${company.logoH}px`, objectFit: "contain", objectPosition: "left" }}
                />

                <div className="flex items-center flex-wrap" style={{ marginTop: "24px", gap: "8px" }}>
                  {company.tags.map((tag, tagIndex) => (
                    <span key={tag} className="flex items-center gap-2">
                      <span className="text-label font-body" style={{ color: "#67686B" }}>{tag}</span>
                      {tagIndex < company.tags.length - 1 && (
                        <span style={{ width: "1px", height: "10px", backgroundColor: "#67686B", display: "inline-block" }} />
                      )}
                    </span>
                  ))}
                </div>

                <p className="font-body text-body-sm" style={{ color: "#373738", margin: 0, marginTop: "58px", maxWidth: "394px" }}>
                  {company.desc}
                </p>

                <div className="flex-1 min-h-[64px]" />
                <div className="flex items-center justify-between">
                  <a
                    href={company.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-[2px] text-links font-body py-[2px] border-b text-[#67686B] border-[#67686B] hover:text-[#373738] hover:border-[#373738] transition-colors duration-200"
                    style={{ textDecoration: "none" }}
                  >
                    Visit Website
                    <ArrowUpRight fill="currentColor" />
                  </a>
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
              {/* Bottom rule — same inset as top */}
              <div className={["h-px shrink-0 bg-[#D2D5D9]", index > 0 ? "ml-6" : ""].join(" ")} />

              {/* Left column separator */}
              {index > 0 && (
                <div
                  className="absolute left-0 top-[17px] bottom-[17px] w-px bg-[#D2D5D9]"
                  aria-hidden="true"
                />
              )}
            </article>
          ))}
          {/* Trailing spacer — gives the last card a right gap when scrolling.
              Hidden above 1432px where cards fill the container without overflow. */}
          <div className="w-5 shrink-0 min-[1432px]:hidden" aria-hidden="true" />
        </div>
      </div>

      <div className="flex justify-end px-5 md:px-12 lg:px-20" style={{ paddingTop: "64px", paddingBottom: "88px" }}>
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center gap-[6px] font-body text-body-sm text-white"
          style={{ height: "40px", backgroundColor: "#1C1C1F", paddingLeft: "20px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", whiteSpace: "nowrap", textDecoration: "none" }}
        >
          Visit Portfolio
          <ArrowRight size="lg" fill="white" />
        </Link>
      </div>
    </section>
  );
}
