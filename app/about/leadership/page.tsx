import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Leadership | MSS Investments Holding",
  description:
    "Meet the leadership team guiding MSS Investments Holding — experienced executives shaping strategy, governance, and long-term value.",
};

/*
 * Figma node 455-19386 · Page h=4588
 * Page left: x=17708 · Content left: x=17788 (80px margin) · Content width: 1280px
 *
 * Hero (h=930):
 *   H1 centered: x=18113, w=630 → center=18113+315=18428=17788+640=content center ✓
 *   H1 y=48 abs → section-rel 389px → 295px below nav → pt-[295px]
 *
 * Grid (below hero, pt-16):
 *   3 cols, each 398px, gap-x=43px. Total: 3×398+2×43=1280 ✓
 *   Each card: image 398×360 + name mt-6 + role mt-3 + bio mt-3 = 616px per item
 *   Gap-y between rows: 40px
 *   Vertical dividers: centered in 43px gap → px-[21px] with pl-0/pr-0
 *
 * Contact section (pt-20 from last bio):
 *   3 equal cols (405px, 32px gaps): General Inquiries / Media / Contact Us
 *
 * Footer
 */

/* ── People data ────────────────────────────────────────────────── */

interface Leader {
  name: string;
  role: string;
  bio: string;
  photo?: string; // undefined = use placeholder
}

const leaders: Leader[] = [
  /* ── Row 1 ── */
  {
    name: "Vincent de Cannière",
    role: "Chairman",
    bio: "Vincent brings over 40 years of experience across executive leadership, governance, private banking, acquisitions, and restructuring. Having served as CEO and board member for major financial and real estate institutions across Europe and the Middle East, he provides MSS with seasoned strategic direction and institutional oversight.",
    photo: "/images/leader-vincent-frame.png",
  },
  {
    name: "Husnain Nasir",
    role: "Group CEO",
    bio: "Husnain brings over 25 years of experience across fintech, enterprise solutions, branchless banking, and telecom. With leadership roles tied to major digital finance and transformation initiatives in Pakistan, he contributes deep expertise in strategy, investments, and business development to MSS.",
    photo: "/images/leader-husnain-frame.png",
  },
  {
    name: "Zain Javaid",
    role: "CEO, GIGH Technologies",
    bio: "Zain leads GIGH Technologies within the MSS ecosystem, bringing strategic technology leadership and operational depth to the group's digital infrastructure agenda across key growth markets.",
  },
  /* ── Row 2 ── */
  {
    name: "Farook Sheikh",
    role: "CEO, Sportuner.ai",
    bio: "Farook leads Sportuner.ai, contributing entrepreneurial leadership and domain expertise in AI-driven platforms. His focus on execution and growth aligns with MSS's broader portfolio strategy across emerging technology sectors.",
  },
  {
    name: "Sandra Schaad",
    role: "Compliance Consultant",
    bio: "Sandra brings deep regulatory and compliance expertise across international financial services. Her advisory role within MSS ensures the group's portfolio companies operate with strong governance frameworks and regulatory alignment.",
    photo: "/images/about/leader-sandra-schaad.jpg",
  },
  {
    name: "Kassem Lahn",
    role: "Business Consultant",
    bio: "Kassem provides strategic business advisory to MSS and its ecosystem companies, drawing on broad experience across capital markets, operational strategy, and institutional business development across the Middle East and beyond.",
    photo: "/images/about/leader-kassem-lahn.jpg",
  },
  /* ── Row 3 ── */
  {
    name: "Jawwad Mirza",
    role: "Chief Financial Officer",
    bio: "Jawwad oversees financial planning, reporting, and capital stewardship for the MSS group. His background in financial management and institutional finance supports the group's commitment to disciplined, long-term value creation.",
  },
  {
    name: "Taha Rizwan",
    role: "Head of Strategy & Internal Audit",
    bio: "Taha leads group strategy development and internal audit across the MSS portfolio, ensuring alignment between investment decisions, operational performance, and long-term strategic direction.",
  },
  {
    name: "Amna Iqbal",
    role: "Head of Marketing",
    bio: "Amna leads brand, marketing, and communications for MSS Investments Holding, shaping how the group presents its vision, portfolio, and leadership to investors, partners, and institutional stakeholders.",
  },
  /* ── Row 4 ── */
  {
    name: "Barrister Musa Ijaz",
    role: "Head of Legal & Company Secretary",
    bio: "Barrister Musa Ijaz brings extensive legal expertise to MSS, overseeing corporate governance, legal compliance, and company secretarial functions across the group's multi-jurisdictional operations and portfolio entities.",
  },
];

/* placeholder: Figma frame 458:78 exported at 2× (796×720 PNG) */

/* ── Page ───────────────────────────────────────────────────────── */
export default function LeadershipPage() {
  return (
    <main id="main-content">

      {/* ══════════════════════════════════════════════════════════
          HERO  h=930px, bg=#1C1C1F + image rgba(0,0,0,0.10)
          H1 CENTERED in content width (x=18113, w=630, center=640=content center)
          H1 at y=389 from section top → 295px below nav → pt-[295px]
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Leadership Hero"
        className="relative w-full overflow-hidden flex flex-col"
        style={{ minHeight: "930px", backgroundColor: "#1C1C1F" }}
      >
        <Image
          src="/images/about/cta-bg.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.10)" }} />

        <div className="relative z-20">
          <Navbar />
        </div>

        {/* H1 centered — use flex items-end to push to bottom portion */}
        <div className="relative z-10 flex-1 flex flex-col items-center px-5 md:px-10 lg:px-20 pt-16 lg:pt-[295px] pb-10">
          <h1
            className="font-heading text-white text-center"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              lineHeight: "1.056",
              fontWeight: 300,
              maxWidth: "630px",
            }}
          >
            Meet the Leadership Guiding MSS Forward
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          LEADERSHIP GRID  (bg-white)
          pt-16 (64px from hero bottom to first frame at y=653)
          3 cols × 398px, gap-x=43px, gap-y=40px between row groups
          Dividers: border-r on cols 1+2, px-[21px] (pl-0/pr-0 at edges)
          Each card: photo/placeholder (398×360) + name + role + bio
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Leadership Team"
        className="w-full bg-white px-5 md:px-10 lg:px-20 pt-16 pb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-0">
          {leaders.map((person, index) => {
            const col = index % 3;
            const isLastInRow = col === 2 || index === leaders.length - 1;
            /* Add top gap for rows after the first */
            const rowIndex = Math.floor(index / 3);
            const isFirstRow = rowIndex === 0;

            return (
              <div
                key={person.name}
                className={[
                  "flex flex-col",
                  "lg:px-[21px]",
                  col === 0 ? "lg:pl-0" : "",
                  (col === 2 || index === leaders.length - 1) ? "lg:pr-0" : "",
                  !isLastInRow ? "lg:border-r lg:border-[#D2D5D9]" : "",
                  !isFirstRow ? "lg:mt-10" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {/* Photo or placeholder — 398×360 aspect */}
                <div
                  className="relative w-full flex-shrink-0 overflow-hidden"
                  style={{ aspectRatio: "398/360", backgroundColor: "#0B1738" }}
                >
                  <Image
                    src={person.photo ?? "/images/about/leader-placeholder.png"}
                    alt={person.photo ? person.name : ""}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 398px"
                  />
                </div>

                {/* Name — Merriweather 26px/32px, #1C1C1F, mt-6 (24px) */}
                <h2
                  className="font-heading"
                  style={{
                    fontSize: "26px",
                    lineHeight: "32px",
                    fontWeight: 300,
                    color: "#1C1C1F",
                    margin: 0,
                    marginTop: "24px",
                  }}
                >
                  {person.name}
                </h2>

                {/* Role — Inter 15px/22px, #67686B, mt-3 (12px) */}
                <p
                  className="font-body"
                  style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
                >
                  {person.role}
                </p>

                {/* Bio — Inter 15px/22px, #373738, mt-3 (12px) */}
                <p
                  className="font-body"
                  style={{ fontSize: "15px", lineHeight: "22px", color: "#373738", margin: 0, marginTop: "12px" }}
                >
                  {person.bio}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CONTACT SECTION
          3-col (405px each, 32px gaps) — same proportions as Figma Vectors 19/15/16
          pt-20 (80px from last bio to horizontal dividers at y=3317)
          Headings: Merriweather 26px · Subtext: mt-3 · Contact: mt-6
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Contact Information"
        className="w-full bg-white px-5 md:px-10 lg:px-20 pt-20 pb-0"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "0 32px" }}
        >
          {/* Col 1 — General Inquiries */}
          <div className="border-t border-[#D2D5D9] pt-16 pb-20">
            <h3
              className="font-heading"
              style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
            >
              General Inquiries
            </h3>
            <p
              className="font-body"
              style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
            >
              All general enquiries for MSS should be directed to:
            </p>
            <a
              href="mailto:info@mssinvestments.com"
              className="font-body text-body-sm-emphasized"
              style={{ color: "#373738", display: "block", marginTop: "24px" }}
            >
              info@mssinvestments.com
            </a>
          </div>

          {/* Col 2 — Media Contact */}
          <div className="border-t border-[#D2D5D9] pt-16 pb-20">
            <h3
              className="font-heading"
              style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
            >
              Media contact
            </h3>
            <p
              className="font-body"
              style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
            >
              All group media enquiries for MSS should be directed to:
            </p>
            <a
              href="mailto:media@mssinvestments.com"
              className="font-body text-body-sm-emphasized"
              style={{ color: "#373738", display: "block", marginTop: "24px" }}
            >
              media@mssinvestments.com
            </a>
          </div>

          {/* Col 3 — Contact Us */}
          <div className="border-t border-[#D2D5D9] pt-16 pb-20">
            <h3
              className="font-heading"
              style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}
            >
              Contact Us
            </h3>
            <p
              className="font-body"
              style={{ fontSize: "15px", lineHeight: "22px", color: "#67686B", margin: 0, marginTop: "12px" }}
            >
              For all support related matters, contact us at:
            </p>
            <a
              href="tel:+971503840381"
              className="font-body text-body-sm-emphasized"
              style={{ color: "#373738", display: "block", marginTop: "24px" }}
            >
              +971 50 384 0381
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
