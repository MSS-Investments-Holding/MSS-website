import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArrowUpRight from "@/components/icons/ArrowUpRight";
import ArrowRight from "@/components/icons/ArrowRight";
import CareersScrollButton from "@/components/careers/CareersScrollButton";
import { jobs } from "@/lib/jobs";

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

        <div className="careers-hero-content relative z-10 flex-1 flex flex-col px-5 md:px-12 lg:px-20 pt-[120px] md:pt-[150px] lg:pt-[180px] pb-16">
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
            <CareersScrollButton />
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
          className="careers-why-h2 font-heading font-light"
          style={{ color: "#1C1C1F", margin: 0, marginTop: "24px", maxWidth: "640px" }}
        >
          Work Where Businesses, Ideas, and Execution Meet
        </h2>

        <div className="careers-benefits-list">
          <div style={{ height: "1px", backgroundColor: "#E8E9EB" }} />

          {benefits.map((item) => (
            <div key={item.num}>
              <div className="careers-benefit-row flex flex-col md:flex-row gap-4 md:gap-0">

                {/* LEFT — number only, 51.6% of content width */}
                <div className="md:w-1/2 md:flex-shrink-0 lg:w-[51.6%]">
                  <span
                    className="font-heading text-h4"
                    style={{ color: "#C5D3E5" }}
                  >
                    {item.num}
                  </span>
                </div>

                {/* RIGHT — title then description stacked */}
                <div className="flex-1 min-w-0 md:w-1/2 md:flex-none lg:flex-1">
                  <h3
                    className="careers-benefit-h3 font-heading font-light"
                    style={{ color: "#1C1C1F", margin: 0 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-body text-body-sm"
                    style={{ color: "#67686B", margin: 0, marginTop: "12px" }}
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

        <div className="careers-stand-content relative z-10 w-full px-5 md:px-12 lg:px-20">
          <span className="text-label font-body block" style={{ color: "rgba(255,255,255,0.80)" }}>
            What We Stand For
          </span>
          <h2
            className="careers-stand-title font-heading font-light text-white"
            style={{ fontWeight: 300, maxWidth: "620px" }}
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
            className="careers-roles-h2 font-heading font-light"
            style={{ color: "#1C1C1F", margin: 0, marginTop: "24px" }}
          >
            Start Your <br />
            Journey Today
          </h2>
        </div>

        <div className="careers-roles-list">
          <div style={{ height: "1px", backgroundColor: "#E8E9EB" }} />

          {jobs.map((role) => (
            <div key={role.slug}>
              <div className="careers-role-row flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-x-0">

                {/* COL 1 — title + location */}
                <div className="lg:w-[30%] lg:flex-shrink-0 flex flex-col gap-2">
                  <h3
                    className="font-heading text-h5"
                    style={{ color: "#1C1C1F", margin: 0 }}
                  >
                    {role.title}
                  </h3>
                  <p
                    className="font-body text-body-sm"
                    style={{ color: "#AEB0B3", margin: 0 }}
                  >
                    {role.location} · {role.type}
                  </p>
                </div>

                {/* COL 2 — description */}
                <div className="flex-1 min-w-0">
                  <p
                    className="font-body text-body-sm"
                    style={{ color: "#67686B", margin: 0 }}
                  >
                    {role.description}
                  </p>
                </div>

                {/* COL 3 — Apply Now → job detail page */}
                <div className="lg:flex-shrink-0 lg:ml-[120px]">
                  <Link
                    href={`/careers/${role.slug}`}
                    className="self-start inline-flex items-center gap-[4px] font-body text-body-sm py-[2px] border-b whitespace-nowrap"
                    style={{ color: "#1C1C1F", borderColor: "#1C1C1F", textDecoration: "none" }}
                  >
                    Apply Now
                    <ArrowRight size="sm" fill="#1C1C1F" />
                  </Link>
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
        <div className="careers-application-wrap grid grid-cols-1 md:grid-cols-2 md:gap-6">

        {/* LEFT — image */}
        <div className="careers-application-image-frame relative w-full overflow-hidden">
          <Image
            src="/images/careers/careers-open-application.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 767px) 497px, 870px"
          />
        </div>

        {/* RIGHT — warm beige content */}
        <div
          className="careers-application-card relative flex flex-col"
          style={{ backgroundColor: "#F5E9DC" }}
        >
          {/* Decorative vertical line */}
          <div
            className="absolute hidden lg:block"
            style={{ left: "40px", top: "64px", bottom: "64px", width: "1px", backgroundColor: "#1C1C1F" }}
          />

          <span className="text-label font-body block" style={{ color: "#1C1C1F" }}>
            For Talent
          </span>

          <h2
            className="careers-application-title font-heading font-light"
            style={{ color: "#1C1C1F" }}
          >
            Open Application
          </h2>

          <p
            className="font-body text-body-sm mt-4"
            style={{ color: "#67686B", margin: 0, marginTop: "16px", maxWidth: "480px" }}
          >
            We are always open to hearing from thoughtful, capable people who are a strong fit for the ecosystem. Send us your CV and a short introduction at <a href="mailto:careers@mssinvestmentsholding.com" className="text-body-sm-emphasized font-body" style={{ color: "#1C1C1F" }}>careers@mssinvestmentsholding.com</a>, and we&apos;ll keep your profile in mind for future opportunities.
          </p>

          <div className="careers-application-button">
            <a
              href="mailto:careers@mssinvestmentsholding.com"
              className="inline-flex items-center justify-center gap-[8px] font-body text-body-sm text-white"
              style={{
                height: "40px",
                backgroundColor: "#1C1C1F",
                paddingLeft: "20px",
                paddingRight: "16px",
                paddingTop: "8px",
                paddingBottom: "8px",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              Send Us An Email
              <ArrowUpRight fill="white" />
            </a>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
