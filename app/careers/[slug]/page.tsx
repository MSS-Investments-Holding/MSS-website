import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArrowUpRight from "@/components/icons/ArrowUpRight";
import { jobs } from "@/lib/jobs";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): { slug: string }[] {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};
  return {
    title: `${job.title} | Careers | MSS Investments Holding`,
    description: job.description,
  };
}

export default async function JobDetailsPage({ params }: Props) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  const applyHref = `mailto:careers@mssinvestmentsholding.com?subject=${encodeURIComponent(`Application: ${job.title}`)}`;

  return (
    <main id="main-content">

      {/* ══════════════════════════════════════════════════════════
          HERO — 460px mobile / 520px desktop, navy bg
          Title bottom-left · Location bottom-right
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label={`${job.title} — Job Details`}
        className="legal-hero-section relative w-full"
        style={{ backgroundColor: "#0B1738" }}
      >
        <div className="relative z-20">
          <Navbar />
        </div>

        <h1 className="legal-hero-title font-heading text-white">
          {job.title}
        </h1>

        <p className="legal-hero-meta font-body" style={{ color: "#E8E9EB" }}>
          {job.location} · {job.type}
        </p>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CONTENT — two-column at desktop (heading left, body right)
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Job Details"
        className="w-full bg-white px-5 md:px-12 lg:px-20 pt-16 md:pt-20 pb-16 md:pb-20"
      >
        {job.sections.map((section, i) => {
          const paragraphs = section.body.split("\n\n").filter(Boolean);
          return (
            <div key={i}>

              {/* Row — stacked mobile/tablet, two-column desktop */}
              <div className="job-details-row">

                {/* LEFT — heading */}
                <h2
                  className="job-details-heading-col text-h4 font-heading font-light"
                  style={{ color: "#1C1C1F", margin: 0 }}
                >
                  {section.heading}
                </h2>

                {/* RIGHT — body paragraphs */}
                <div className="job-details-body-col">
                  {paragraphs.map((para, j) => (
                    <p
                      key={j}
                      className="font-body"
                      style={{
                        fontSize: "15px",
                        lineHeight: "22px",
                        color: "#1C1C1F",
                        margin: 0,
                        marginTop: j > 0 ? "16px" : 0,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Divider — full-width mobile/tablet, body-column-only desktop */}
              <div className="job-details-divider" />
            </div>
          );
        })}

        {/* Buttons — right-aligned */}
        <div className="job-details-buttons">
          <Link
            href="/careers"
            className="job-details-btn-secondary inline-flex items-center justify-center font-body"
            style={{ textDecoration: "none" }}
          >
            Back to Listing
          </Link>

          <a
            href={applyHref}
            className="job-details-btn-primary inline-flex items-center justify-center gap-2 font-body text-white"
            style={{ textDecoration: "none" }}
          >
            Apply Now
            <ArrowUpRight fill="white" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
