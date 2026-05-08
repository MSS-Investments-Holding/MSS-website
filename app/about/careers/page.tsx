import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArrowRight from "@/components/icons/ArrowRight";

export const metadata: Metadata = {
  title: "Careers | MSS Investments Holding",
  description:
    "Join MSS Investments Holding. We're always looking to connect with talented people passionate about tackling the biggest challenges facing our planet.",
};

const benefits = [
  {
    num: "1",
    title: "Global Exposure",
    desc: "Work across businesses and teams operating in finance, technology, digital infrastructure, and venture growth.",
  },
  {
    num: "2",
    title: "Real Ownership",
    desc: "Contribute to work that requires clear thinking, responsibility, and follow-through.",
  },
  {
    num: "3",
    title: "Strategic Learning",
    desc: "Gain exposure to how businesses are built, supported, and scaled across active markets.",
  },
  {
    num: "4",
    title: "Growth Environment",
    desc: "Be part of a group shaped by ambitious teams, evolving opportunities, and long-term business building.",
  },
];

const roles = [
  {
    title: "Investment Analyst",
    location: "Pakistan",
    type: "On-Site",
    desc: "Support the MSS investment team in evaluating new opportunities, preparing market research, building investment notes, and tracking portfolio performance.",
  },
  {
    title: "Portfolio Operations Associate",
    location: "Dubai",
    type: "Hybrid",
    desc: "Work with portfolio companies to improve reporting, operations, execution rhythm, and cross-company coordination across the MSS ecosystem.",
  },
  {
    title: "Strategy & Growth Manager",
    location: "Pakistan",
    type: "Hybrid",
    desc: "Help shape growth initiatives across ventures, identify market opportunities, support business planning, and work closely with leadership teams.",
  },
  {
    title: "Brand & Communications Lead",
    location: "Dubai",
    type: "On-Site",
    desc: "Lead brand messaging, corporate communications, content, and digital presence across MSS and selected portfolio companies.",
  },
  {
    title: "Finance & Reporting Associate",
    location: "Pakistan",
    type: "On-Site",
    desc: "Support financial reporting, budgeting, portfolio-level analysis, and internal finance operations across the wider MSS group.",
  },
];

export default function CareersPage() {
  return (
    <main id="main-content">

      {/* ══════════════════════════════════════════════════════════
          HERO — minH 930px, dark bg + image
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Careers Hero"
        className="relative w-full overflow-hidden flex flex-col"
        style={{ minHeight: "930px", backgroundColor: "#1C1C1F" }}
      >
        <Image
          src="/images/careers/careers-hero-bg.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex-1 flex flex-col px-5 md:px-10 lg:px-20 pt-16 lg:pt-[170px] pb-16">
          <h1
            className="font-heading text-white"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.375rem)", lineHeight: "1.06", fontWeight: 300, maxWidth: "620px" }}
          >
            Let&apos;s Build the Future of the Global Economy Together
          </h1>

          <p
            className="font-body mt-6"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: "28px", letterSpacing: "-0.18px", maxWidth: "620px", color: "var(--color-neutral-100)" }}
          >
            We&apos;re always looking to connect with talented people who are passionate about tackling the biggest challenges facing our planet.
          </p>

          <div className="mt-10">
            <a
              href="#open-roles"
              className="inline-flex items-center justify-center font-body"
              style={{
                height: "40px",
                backgroundColor: "#FFFFFF",
                color: "#1C1C1F",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.32px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "8px",
                paddingBottom: "8px",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              View Open Roles
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHY JOIN US — label + H2 + 4 numbered rows with dividers
         ══════════════════════════════════════════════════════════ */}
      <section aria-label="Why Join Us" className="w-full bg-white px-5 md:px-10 lg:px-20 pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24">

        <span className="text-label font-body block" style={{ color: "#373738" }}>
          Why Join Us
        </span>

        <h2
          className="font-heading"
          style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)", lineHeight: "1.087", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px", maxWidth: "545px" }}
        >
          Work Where Businesses, Ideas, and Execution Meet
        </h2>

        <div className="mt-10">
          <div style={{ height: "1px", backgroundColor: "#E8E9EB" }} />

          {benefits.map((item) => (
            <div key={item.num}>
              <div className="flex flex-col lg:flex-row py-10 gap-4 lg:gap-0">

                {/* LEFT — number only, 51.6% of content width */}
                <div className="lg:w-[51.6%] lg:flex-shrink-0">
                  <span
                    className="font-heading"
                    style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#C5D3E5" }}
                  >
                    {item.num}
                  </span>
                </div>

                {/* RIGHT — title then description stacked */}
                <div className="flex-1">
                  <h3
                    className="font-heading"
                    style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-body"
                    style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
              <div style={{ height: "1px", backgroundColor: "#E8E9EB" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          OUR MISSION — full-bleed image, h≥586px
          Vertical line left · label top · H2 below
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Our Mission"
        className="relative w-full overflow-hidden flex items-center"
        style={{ minHeight: "586px", backgroundColor: "#C5D3E5" }}
      >
        <Image
          src="/images/careers/careers-mission-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />

        {/* Decorative vertical line */}
        <div
          className="absolute hidden lg:block"
          style={{ left: "4.4%", top: "80px", width: "1px", height: "346px", backgroundColor: "rgba(255,255,255,0.40)" }}
        />

        <div className="relative z-10 w-full px-5 md:px-10 lg:px-20 py-20">
          <span className="text-label font-body block" style={{ color: "rgba(255,255,255,0.80)" }}>
            Our Mission
          </span>
          <h2
            className="font-heading text-white mt-10"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", lineHeight: "1.167", fontWeight: 300, maxWidth: "620px" }}
          >
            We support ideas and ventures that create long-term, global economic value, while empowering people to contribute to meaningful work across the growing ecosystem.
          </h2>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          OPEN ROLES — label + H2 + 5 job rows with dividers
         ══════════════════════════════════════════════════════════ */}
      <section
        id="open-roles"
        aria-label="Open Roles"
        className="w-full bg-white px-5 md:px-10 lg:px-20 pt-16 md:pt-24 lg:pt-[140px] pb-16 md:pb-20 lg:pb-24"
      >
        <div className="flex flex-col items-center text-center">
          <span className="text-label font-body block" style={{ color: "#373738" }}>
            Open Roles
          </span>

          <h2
            className="font-heading"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)", lineHeight: "1.087", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px" }}
          >
            Start Your Journey Today
          </h2>
        </div>

        <div className="mt-16 lg:mt-20">
          <div style={{ height: "1px", backgroundColor: "#E8E9EB" }} />

          {roles.map((role) => (
            <div key={role.title}>
              <div className="flex flex-col lg:flex-row lg:items-start py-8 gap-6 lg:gap-x-8">

                {/* COL 1 — title + location (fixed 40.6% = 520/1280) */}
                <div className="lg:w-[40.6%] lg:flex-shrink-0 flex flex-col gap-2">
                  <h3
                    className="font-heading"
                    style={{ fontSize: "20px", lineHeight: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
                  >
                    {role.title}
                  </h3>
                  <p
                    className="font-body"
                    style={{ fontSize: "15px", lineHeight: "22px", color: "#AEB0B3", margin: 0 }}
                  >
                    {role.location} · {role.type}
                  </p>
                </div>

                {/* COL 2 — description, compresses to give Apply Now room */}
                <div className="flex-1 min-w-0">
                  <p
                    className="font-body"
                    style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0 }}
                  >
                    {role.desc}
                  </p>
                </div>

                {/* COL 3 — Apply Now, never wraps */}
                <div className="lg:flex-shrink-0">
                  <a
                    href="mailto:careers@mssinvestmentsholding.com"
                    className="self-start inline-flex items-center gap-[4px] font-body py-[2px] border-b whitespace-nowrap"
                    style={{ fontSize: "14px", lineHeight: "20px", letterSpacing: "-0.14px", color: "#1C1C1F", borderColor: "#1C1C1F", textDecoration: "none" }}
                  >
                    Apply Now
                    <ArrowRight size="sm" fill="#1C1C1F" />
                  </a>
                </div>
              </div>
              <div style={{ height: "1px", backgroundColor: "#E8E9EB" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          OPEN APPLICATION — split: image left · warm beige right
          Vertical line · label · H2 · body · CTA
         ══════════════════════════════════════════════════════════ */}
      <section aria-label="Open Application" className="w-full bg-white px-5 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:gap-6" style={{ minHeight: "506px" }}>

        {/* LEFT — image */}
        <div className="relative w-full lg:w-1/2 flex-shrink-0" style={{ minHeight: "300px" }}>
          <Image
            src="/images/careers/careers-open-application.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* RIGHT — warm beige content */}
        <div
          className="flex-1 relative flex flex-col px-8 lg:px-12 xl:px-20 pt-16"
          style={{ backgroundColor: "#F5E9DC" }}
        >
          {/* Decorative vertical line */}
          <div
            className="absolute hidden lg:block"
            style={{ left: 0, top: "80px", width: "1px", height: "378px", backgroundColor: "rgba(28,28,31,0.15)" }}
          />

          <span className="text-label font-body block" style={{ color: "#1C1C1F" }}>
            For Partners
          </span>

          <h2
            className="font-heading mt-10 lg:mt-[140px]"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", lineHeight: "1.167", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "40px" }}
          >
            Open Application
          </h2>

          <p
            className="font-body mt-4"
            style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "16px", maxWidth: "480px" }}
          >
            We are always open to hearing from thoughtful, capable people who may be a strong fit for the MSS ecosystem. Send us your CV, cover letter and a short introduction, and we&apos;ll keep your profile in mind for future opportunities.
          </p>

          <div className="mt-10">
            <a
              href="mailto:careers@mssinvestmentsholding.com"
              className="inline-flex items-center justify-center gap-[8px] font-body text-white"
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
              Send Us An Email
              <ArrowRight size="lg" fill="white" />
            </a>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
