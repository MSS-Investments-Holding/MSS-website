import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import ArrowRight from "@/components/icons/ArrowRight";

export const metadata: Metadata = {
  title: "How We Invest | MSS Investments Holding",
  description:
    "MSS invests with a structured view of opportunity, balancing long-term potential with practical fundamentals, strategic fit, and responsible execution.",
};

const philosophyItems = [
  {
    title: "Capital with Context",
    body: "We invest with an understanding of the market, the business model, and the role MSS can play beyond funding.",
  },
  {
    title: "Direction at Critical Moments",
    body: "We help teams make clearer decisions when the next stage of growth requires focus, structure, and alignment.",
  },
  {
    title: "Access That Opens Doors",
    body: "We bring relationships, market perspective, and ecosystem reach that can help businesses move faster and smarter.",
  },
  {
    title: "Execution That Holds Up",
    body: "We support the practical work behind growth, from refining operations to preparing ventures for scale.",
  },
];

const processSteps = [
  {
    title: "Origination",
    body: "Identify opportunities via our network, market activity, founder talks, and sector research.",
    icon: "/icons/step-discovery.svg",
  },
  {
    title: "Evaluation",
    body: "Assess business model, market timing, team, growth potential, risk, and ecosystem fit.",
    icon: "/icons/step-strategy.svg",
  },
  {
    title: "Execution",
    body: "Structure the right involvement, via capital, partnership, strategic support within the portfolio.",
    icon: "/icons/step-validation.svg",
  },
  {
    title: "Management",
    body: "Stay involved post-investment, supporting governance, priorities, and value creation.",
    icon: "/icons/step-launch.svg",
  },
];

const sectors = [
  {
    name: "Fintech",
    description:
      "Fintech remains one of the clearest areas where infrastructure, access, and everyday utility come together. We look at businesses improving how people and companies move money, access financial services, manage transactions, and operate across markets.\n\nThe strongest fintech opportunities are not just digital versions of traditional services. They create simpler, faster, and more reliable ways for users and businesses to participate in the economy. For us, this includes payment infrastructure, remittances, digital banking, merchant services, multi-currency platforms, and cross-border financial systems.",
    signals: [
      "Payments",
      "Remittances",
      "Digital banking",
      "Merchant tools",
      "Cross-border platforms",
      "Embedded finance.",
    ],
  },
  {
    name: "AI Agents",
    description:
      "AI is moving from experimentation into practical business systems. We are interested in AI-led opportunities that improve workflows, decision-making, automation, and operational intelligence across businesses.\n\nThe focus is not on AI as a trend, but on AI as a capability that can become embedded into how companies work. Strong opportunities in this category are those that reduce complexity, improve speed, support better decisions, or create new ways for teams and systems to operate at scale.",
    signals: [
      "AI agents",
      "Workflow automation",
      "Enterprise intelligence",
      "Operational tools",
      "Decision-support platforms.",
    ],
  },
  {
    name: "Digital Asset Tokenization",
    description:
      "Digital asset tokenization is creating new ways to structure, access, and transfer value. MSS looks at platforms that bring greater efficiency, transparency, and utility to ownership, participation, and financial infrastructure.\n\nThis category is especially relevant where traditional asset systems are slow, fragmented, or difficult to access. We are interested in models that connect digital and traditional value in a responsible and commercially useful way, especially where trust, compliance, liquidity, and transparency are central to adoption.",
    signals: [
      "Tokenized assets",
      "Digital ownership models",
      "Asset-backed platforms",
      "Blockchain-enabled infrastructure",
      "Compliant digital value systems",
    ],
  },
  {
    name: "Venture Capitalization",
    description:
      "Venture capitalization reflects our interest in identifying promising businesses before their full potential is visible. This is where capital, structure, and strategic support can help a venture move from early promise to stronger commercial footing.\n\nWe look for ventures with clear market relevance, capable teams, and the ability to scale with the right operating support. The opportunity is not only in providing funding, but in helping shape direction, improve readiness, and create conditions for long-term growth.",
    signals: [
      "Early-stage ventures",
      "Growth-stage companies",
      "Strategic incubation",
      "Ecosystem-aligned businesses",
      "Founder-led platforms",
    ],
  },
  {
    name: "Performance Digital Marketing",
    description:
      "Digital marketing is increasingly tied to how businesses grow, communicate, and build customer relationships. We look at media-led platforms and digital growth businesses that shape attention, distribution, conversion, and engagement.\n\nIn a digital economy, distribution is a strategic advantage. Businesses that understand how to acquire, retain, and influence audiences can become powerful growth engines across sectors. For us, digital media is not only about content; it is about measurable commercial impact and the systems that connect brands, users, and markets.",
    signals: [
      "Performance marketing",
      "Digital content",
      "Audience platforms",
      "Commerce enablement",
      "Customer acquisition",
      "Growth systems",
    ],
  },
];

const numbers = [
  {
    value: "$1.5B+",
    body: "Strategic capital across the broader financial ecosystem.",
    className: "how-number-card-cream",
  },
  {
    value: "7+",
    body: "Ventures operating across emerging, priority sectors.",
    className: "how-number-card-navy",
  },
  {
    value: "6+",
    body: "Markets represented across the world, inside the MSS eco-system.",
    className: "how-number-card-gray",
  },
  {
    value: "100+",
    body: "Collective workforce driving execution across the MSS ecosystem.",
    className: "how-number-card-blue",
  },
];

export default function HowWeInvestPage() {
  return (
    <main id="main-content">
      <section
        aria-label="Hero"
        className="how-invest-hero-section relative w-full overflow-hidden bg-[#1C1C1F] flex flex-col"
      >
        <Image
          src="/images/investments/how-we-invest-hero-bg.jpg"
          alt=""
          width={3316}
          height={2212}
          priority
          className="how-invest-hero-media absolute max-w-none"
          sizes="(max-width: 767px) 200vw, 100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="how-invest-hero-content relative z-10 flex-1 flex flex-col px-5 md:px-12 lg:px-20 pt-[120px] md:pt-[150px] lg:pt-[180px] pb-16">
          <h1 className="how-invest-hero-title font-heading font-light text-white">
            A Coherent Standard for Strategic, Meaningful Investments
          </h1>
        </div>
      </section>

      <section
        aria-label="Philosophy"
        className="how-philosophy-section w-full bg-white px-5 md:px-12 lg:px-20"
      >
        <div className="how-philosophy-grid">
          <div className="how-philosophy-copy">
            <h2 className="how-philosophy-heading font-heading font-light text-[#1C1C1F]">
              We support ventures with direction, access, and execution, turning ideas into strong
              commercial outcomes.
            </h2>

            <div className="how-philosophy-list">
              {philosophyItems.map((item) => (
                <div key={item.title} className="how-philosophy-item">
                  <h3 className="how-philosophy-item-title font-heading font-light text-[#1C1C1F]">
                    {item.title}
                  </h3>
                  <p className="how-philosophy-item-body font-body text-[#67686B]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="how-philosophy-image-frame relative overflow-hidden bg-[#0B1738]">
            <Image
              src="/images/investments/investment-philosophy.png"
              alt=""
              fill
              className="hidden object-cover md:block"
              sizes="620px"
            />
            <Image
              src="/images/investments/investment-philosophy-mobile.png"
              alt=""
              fill
              className="object-cover md:hidden"
              sizes="362px"
            />
          </div>
        </div>
      </section>

      <section aria-label="Process" className="how-process-section w-full bg-white">
        <div className="px-5 text-center md:px-12 lg:px-20">
          <span className="how-section-label font-body block text-[#373738]">Process</span>
          <h2 className="how-process-heading mx-auto font-heading font-light text-[#1C1C1F]">
            A process built for selectivity, clarity, and long-term value.
          </h2>

          <div className="how-process-steps">
            {processSteps.map((step) => (
              <article key={step.title} className="how-process-step">
                <div className="how-process-icon mx-auto flex items-center justify-center">
                  <img src={step.icon} alt="" width={40} height={40} style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                </div>
                <h3 className="how-process-step-title font-heading font-light text-[#1C1C1F]">
                  {step.title}
                </h3>
                <p className="how-process-step-body mx-auto font-body text-[#67686B]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="how-process-band relative overflow-hidden bg-[#0B1738]">
          <Image
            src="/images/investments/investment-process.jpg"
            alt=""
            width={1477}
            height={2212}
            className="how-process-media absolute max-w-none"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-black/20" />
          <p className="how-process-band-text relative z-10 mx-auto font-heading font-light text-white">
            After investment, we work alongside businesses to strengthen the conditions that
            support long-term progress. That means helping teams think clearly, prioritize what
            matters and build the operating discipline needed to grow responsibly. Our role is not
            to replace the business, but to support it with perspective, structure, and the wider
            advantages of the MSS ecosystem.
          </p>
        </div>
      </section>

      <section
        id="investing-sectors"
        aria-label="Investing Sectors"
        className="how-sectors-section w-full bg-white px-5 md:px-12 lg:px-20"
      >
        <span className="how-section-label font-body block text-[#373738]">Investing Sectors</span>

        <div className="how-sectors-header">
          <h2 className="how-sectors-heading font-heading font-light text-[#1C1C1F]">
            Investing in the Systems Behind Modern Growth
          </h2>
          <p className="how-sectors-intro font-body text-[#67686B]">
            Every investment opportunity is different. Our investment approach brings together the
            right capital, expertise, and strategies to support growth, manage risk, and deliver
            long-term performance across market cycles.
          </p>
        </div>

        <div className="how-sector-rows">
          {sectors.map((sector) => (
            <article key={sector.name} className="how-sector-row">
              <h3 className="how-sector-title font-heading font-light text-[#1C1C1F]">
                {sector.name}
              </h3>
              <div>
                {sector.description.split('\n\n').map((para, i) => (
                  <p key={i} className="how-sector-description font-body text-[#67686B]">
                    {para}
                  </p>
                ))}
              </div>
              <div className="how-sector-signals">
                <h4 className="how-sector-signals-title font-heading font-light text-[#1C1C1F]">
                  Opportunity Signals:
                </h4>
                <ul className="how-sector-signals-list">
                  {sector.signals.map((signal) => (
                    <li key={signal} className="font-body text-[#373738]">
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="how-sectors-link-wrap">
          <Link href="/portfolio" className="how-sectors-link font-body">
            Visit Portfolio
            <ArrowRight size="sm" fill="currentColor" />
          </Link>
        </div>
      </section>

      <section aria-label="By the Numbers" className="how-numbers-section w-full bg-white px-5 md:px-12 lg:px-20">
        <div className="how-numbers-copy">
          <span className="how-section-label font-body block text-[#373738]">By the Numbers</span>
          <h2 className="how-numbers-heading font-heading font-light text-[#1C1C1F]">
            An Expanding Ecosystem with Tangible Impact
          </h2>
          <p className="how-numbers-body font-body text-[#67686B]">
            Our numbers reflect more than presence, they represent active businesses, operational
            depth, and financial activity across the ecosystem.
          </p>
        </div>

        <div className="how-numbers-grid">
          {numbers.map((number) => (
            <article key={number.value} className={`how-number-card ${number.className}`}>
              <p className="how-number-value font-heading font-light">{number.value}</p>
              <p className="how-number-body font-body">{number.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection ariaLabel="Call to Action" />
      <Footer />
    </main>
  );
}

