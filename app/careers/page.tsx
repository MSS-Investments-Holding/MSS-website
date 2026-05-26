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
    title: "Head of Compliance.",
    location: "Dubai",
    type: "On-Site",
    desc: "Lead brand messaging, corporate communications, content, and digital presence across MSS and selected portfolio companies.",
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
        className="careers-hero-section relative w-full overflow-hidden flex flex-col"
        style={{ backgroundColor: "#1C1C1F" }}
      >
        <div className="careers-hero-media" aria-hidden="true">
          <Image
            src="/images/careers/careers-hero-bg.jpg"
            alt=""
            fill
            className="object-fill"
            sizes="(max-width: 767px) 1054px, 1509px"
            priority
          />
        </div>
        <div className="absolute inset-0 mix-blend-overlay" style={{ backgroundColor: "rgba(0,0,0,0.10)" }} />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex-1 flex flex-col px-5 md:px-12 lg:px-20 pt-[108px] lg:pt-[166px] pb-16">
          <h1
            className="careers-hero-title font-heading text-white"
            style={{ fontWeight: 300, width: "min(620px, calc(100vw - 40px))", maxWidth: "620px" }}
          >
            <span className="md:hidden">
              Let&apos;s Build the<br />
              Future of the<br />
              Global Economy<br />
              Together
            </span>
            <span className="hidden md:inline">
              Let&apos;s Build the Future of the Global Economy Together
            </span>
          </h1>

          <p
            className="careers-hero-body font-body"
            style={{ letterSpacing: "-0.18px", width: "min(620px, calc(100vw - 64px))", maxWidth: "620px", color: "var(--color-neutral-100)" }}
          >
            We&apos;re always looking to connect with talented people who are passionate about tackling the biggest challenges facing our planet.
          </p>

          <div className="careers-hero-button">
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
              Browse Open Roles
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHY JOIN US — label + H2 + 4 numbered rows with dividers
         ══════════════════════════════════════════════════════════ */}
      <section aria-label="Why Join Us" className="careers-why-section w-full bg-white px-5 md:px-12 lg:px-20">

        <span className="text-label font-body block" style={{ color: "#373738" }}>
          Why Join Us
        </span>

        <h2
          className="font-heading"
          style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)", lineHeight: "1.087", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px", maxWidth: "640px" }}
        >
          Work Where Businesses, Ideas, and Execution Meet
        </h2>

        <div className="careers-benefits-list">
          <div style={{ height: "1px", backgroundColor: "#E8E9EB" }} />

          {benefits.map((item) => (
            <div key={item.num}>
              <div className="careers-benefit-row flex flex-col lg:flex-row gap-4 lg:gap-0">

                {/* LEFT — number only, 51.6% of content width */}
                <div className="lg:w-[51.6%] lg:flex-shrink-0">
                  <span
                    className="font-heading"
                    style={{ fontSize: "clamp(22px, 1.8vw, 26px)", lineHeight: "1.23", fontWeight: 300, color: "#C5D3E5" }}
                  >
                    {item.num}
                  </span>
                </div>

                {/* RIGHT — title then description stacked */}
                <div className="flex-1">
                  <h3
                    className="font-heading"
                    style={{ fontSize: "clamp(22px, 1.8vw, 26px)", lineHeight: "1.23", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
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
          WHAT WE STAND FOR — full-bleed image
          Vertical line left · label top · H2 below
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="What We Stand For"
        className="careers-stand-section relative w-full overflow-hidden"
        style={{ backgroundColor: "#C5D3E5" }}
      >
        <div className="careers-stand-media" aria-hidden="true">
          <Image
            src="/images/careers/careers-mission-bg.jpg"
            alt=""
            fill
            className="object-fill"
            sizes="(max-width: 767px) 1325px, 2092px"
          />
        </div>
        <div className="absolute inset-0 mix-blend-overlay" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />

        {/* Decorative vertical line */}
        <div
          className="absolute hidden lg:block"
          style={{ left: "80px", top: "120px", width: "1px", height: "346px", backgroundColor: "rgba(255,255,255,0.40)" }}
        />

        <div className="careers-stand-content relative z-10 w-full px-5 md:px-12 lg:px-[120px]">
          <span className="text-label font-body block" style={{ color: "rgba(255,255,255,0.80)" }}>
            What We Stand For
          </span>
          <h2
            className="careers-stand-title font-heading text-white"
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
        className="careers-roles-section w-full bg-white px-5 md:px-12 lg:px-20"
      >
        <div className="flex flex-col items-center text-center">
          <span className="text-label font-body block" style={{ color: "#373738" }}>
            Open Roles
          </span>

          <h2
            className="font-heading"
            style={{ fontSize: "clamp(2.125rem, 3.2vw, 2.875rem)", lineHeight: "1.087", fontWeight: 300, color: "#1C1C1F", margin: 0, marginTop: "24px" }}
          >
            Start Your <br />
            Journey Today
          </h2>
        </div>

        <div className="careers-roles-list">
          <div style={{ height: "1px", backgroundColor: "#E8E9EB" }} />

          {roles.map((role) => (
            <div key={role.title}>
              <div className="careers-role-row flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-x-8">

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
      <section aria-label="Open Application" className="w-full bg-white px-5 md:px-12 lg:px-20">
        <div className="careers-application-wrap flex flex-col lg:flex-row lg:gap-6">

        {/* LEFT — image */}
        <div className="careers-application-image-frame relative w-full lg:w-1/2 flex-shrink-0 overflow-hidden">
          <div className="careers-application-image" aria-hidden="true">
            <Image
              src="/images/careers/careers-open-application.jpg"
              alt=""
              fill
              className="object-fill"
              sizes="(max-width: 767px) 497px, 870px"
            />
          </div>
        </div>

        {/* RIGHT — warm beige content */}
        <div
          className="careers-application-card flex-1 relative flex flex-col"
          style={{ backgroundColor: "#F5E9DC" }}
        >
          {/* Decorative vertical line */}
          <div
            className="absolute hidden lg:block"
            style={{ left: 0, top: "80px", width: "1px", height: "378px", backgroundColor: "rgba(28,28,31,0.15)" }}
          />

          <span className="text-label font-body block" style={{ color: "#1C1C1F" }}>
            For Talent
          </span>

          <h2
            className="careers-application-title font-heading"
            style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)", lineHeight: "1.167", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
          >
            Open Application
          </h2>

          <p
            className="font-body mt-4"
            style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "16px", maxWidth: "480px" }}
          >
            We are always open to hearing from thoughtful, capable people who are a strong fit for the ecosystem. Send us your CV and a short introduction at <a href="mailto:careers@mssholdings.com" className="font-medium underline" style={{ color: "#1C1C1F" }}>careers@mssholdings.com</a>, and we&apos;ll keep your profile in mind for future opportunities.
          </p>

          <div className="careers-application-button">
            <a
              href="mailto:careers@mssholdings.com"
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
