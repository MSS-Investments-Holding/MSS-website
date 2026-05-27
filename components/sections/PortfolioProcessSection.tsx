import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";

const steps = [
  { icon: "/images/icons/step-discovery.svg",  title: "Origination", desc: "Identify opportunities via our network, market activity, founder talks, and sector research." },
  { icon: "/images/icons/step-strategy.svg",   title: "Evaluation",  desc: "Assess business model, market timing, team, growth potential, risk, and ecosystem fit." },
  { icon: "/images/icons/step-validation.svg", title: "Execution",   desc: "Structure the right involvement, via capital, partnership, strategic support within the portfolio." },
  { icon: "/images/icons/step-launch.svg",     title: "Management",  desc: "Stay involved post-investment, supporting governance, priorities, and value creation." },
];

const companies = [
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

export default function PortfolioProcessSection() {
  return (
    <section aria-label="Investment Portfolio" className="w-full bg-white">
      <div className="w-full flex flex-col items-center text-center px-5 md:px-12 lg:px-20 pt-20 md:pt-24 lg:pt-[140px] pb-14 md:pb-16 lg:pb-[60px]">
        <span className="text-label font-body" style={{ color: "#67686B" }}>Investment Portfolio</span>
        <h2
          className="font-heading"
          style={{ fontSize: "clamp(2.125rem, 3.4vw, 3rem)", lineHeight: "1.083", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px", maxWidth: "15.1em" }}
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
              <h3 className="font-heading" style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px" }}>
                {step.title}
              </h3>
              <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "4px", maxWidth: "260px" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 md:mx-12 lg:mx-20 h-px bg-[#D2D5D9]" />

      <div className="px-5 md:px-12 lg:px-20 overflow-x-auto md:overflow-x-visible scrollbar-hide md:scrollbar-auto">
        <div className="flex gap-6 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {companies.map((company, index) => (
            <article
              key={company.name}
              className="flex flex-col py-10 lg:pt-10 lg:pb-10 min-w-[280px] shrink-0 md:min-w-0 md:shrink"
            >
              <div
                className={[
                  "h-full min-h-[360px] lg:min-h-[444px] lg:px-10 flex flex-col",
                  index === 0 ? "lg:pl-0" : index === 1 ? "md:border-l md:border-[#D2D5D9] md:pl-8" : "lg:border-l lg:border-[#D2D5D9]",
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

                <p className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#373738", margin: 0, marginTop: "58px", maxWidth: "394px" }}>
                  {company.desc}
                </p>

                <a
                  href={company.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[4px] text-links font-body py-[2px] border-b text-[#67686B] border-[#67686B] hover:text-[#373738] hover:border-[#373738] transition-colors duration-200"
                  style={{ marginTop: "auto", textDecoration: "none", alignSelf: "flex-start" }}
                >
                  Visit Website
                  <ArrowRight size="sm" fill="currentColor" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-5 md:mx-12 lg:mx-20 h-px bg-[#D2D5D9]" />

      <div className="flex justify-end px-5 md:px-12 lg:px-20" style={{ paddingTop: "64px", paddingBottom: "88px" }}>
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center gap-[6px] font-body text-white"
          style={{ height: "40px", backgroundColor: "#1C1C1F", fontSize: "15px", lineHeight: "22px", paddingLeft: "20px", paddingRight: "16px", paddingTop: "8px", paddingBottom: "8px", whiteSpace: "nowrap", textDecoration: "none" }}
        >
          Visit Portfolio
          <ArrowRight size="lg" fill="white" />
        </Link>
      </div>
    </section>
  );
}
