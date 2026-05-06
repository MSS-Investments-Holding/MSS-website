import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pitch to Us | MSS Investments Holding",
  description:
    "MSS welcomes relevant opportunities from founders, operators, partners, and institutions aligned with the sectors shaping modern economies.",
};

/* ─── Static data ──────────────────────────────────────────────── */

const conversations = [
  {
    number: "1",
    title: "Founders & Ventures",
    body: "For entrepreneurs building businesses with clear market potential and long-term growth ambition.",
  },
  {
    number: "2",
    title: "Strategic Partners",
    body: "For companies, institutions, and operators exploring collaboration, market access, or ecosystem alignment.",
  },
  {
    number: "3",
    title: "Investment Opportunities",
    body: "For businesses seeking capital, strategic backing, or support to move into the next stage of growth.",
  },
  {
    number: "4",
    title: "Advisory Requests",
    body: "For organizations looking for guidance, business input, or strategic perspective from the MSS network.",
  },
];

const steps = [
  {
    icon: "/images/icons/pitch-step-submit.svg",
    title: "Submit",
    body: "Share your business, opportunity, or inquiry with us",
  },
  {
    icon: "/images/icons/pitch-step-review.svg",
    title: "Review",
    body: "We assess the details for relevance, fit, and next-step potential.",
  },
  {
    icon: "/images/icons/pitch-step-connect.svg",
    title: "Connect",
    body: "If aligned, we arrange a meeting to better understand the opportunity.",
  },
  {
    icon: "/images/icons/pitch-step-explore.svg",
    title: "Explore",
    body: "Identify steps to support via capital, partnership, or strategic direction.",
  },
];

/* ─── Shared field base style ─────────────────────────────────── */
const fieldBase = {
  display: "block",
  width: "100%",
  height: "60px",
  backgroundColor: "#FFFFFF",
  border: "none",
  borderBottom: "1px solid #E8E9EB",
  paddingLeft: "0px",
  paddingRight: "16px",
  fontFamily: "var(--font-inter, system-ui, sans-serif)",
  fontSize: "18px",
  lineHeight: "28px",
  color: "#1C1C1F",
  outline: "none",
} as const;

/* ─── Page ─────────────────────────────────────────────────────── */

export default function PitchPage() {
  return (
    <main id="main-content">

      {/* ══════════════════════════════════════════════════════════
          1 · HERO  (h=930px min)
          Figma: H1 at absolute y=-61 → 280px from section top
                 Nav h=94px → H1 pt = 280-94 = 186px below nav
                 Body at y=742px, button at y=850px from section top
                 Right col body x=800/1280=62.5% → xl:w-[560px]
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Pitch to Us Hero"
        className="relative w-full overflow-hidden flex flex-col"
        style={{ minHeight: "930px" }}
      >
        <Image
          src="/images/pitch-hero-bg.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Figma: RECTANGLE fill rgba(0,0,0,0.20) */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />

        {/* Navbar sits above the hero content */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/*
         * Two-col at lg+:
         *   LEFT  flex-1 : H1, pt-[186px] = 280px from section top (186px below nav)
         *   RIGHT lg:w-[44%] xl:w-[560px] : body+button, justify-end pb-[40px]
         *     (button bottom y=890px, hero h=930px → pb=40px)
         */}
        <div className="relative z-10 flex-1 flex flex-col lg:flex-row px-5 md:px-10 lg:px-20">
          <div className="flex-1 pt-24 lg:pt-[186px] pb-10">
            <h1
              className="font-heading text-white"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4.375rem)",
                lineHeight: "1.056",
                fontWeight: 300,
                maxWidth: "520px",
              }}
            >
              A Starting Point for Strategic Growth
            </h1>
          </div>

          <div className="w-full lg:w-[44%] xl:w-[560px] flex flex-col justify-end pb-10 lg:pb-[40px]">
            <p
              className="font-body text-white"
              style={{ fontSize: "18px", lineHeight: "28px", letterSpacing: "-0.18px" }}
            >
              MSS welcomes relevant opportunities from founders, operators, partners, and institutions aligned with the sectors shaping modern economies.
            </p>
            <div className="mt-8">
              <a
                href="#pitch-form"
                className="inline-flex items-center font-body"
                style={{
                  height: "40px",
                  backgroundColor: "#FFFFFF",
                  color: "#1C1C1F",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "-0.32px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  whiteSpace: "nowrap",
                }}
              >
                Send Us Your Pitch →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2 · RELEVANT CONVERSATIONS
          Figma: pt=96px (hero bottom → label), pb=120px (last divider → Frame55)
          Full-width H2: Merriweather 36px/42px
          4 numbered rows: divider → py-10 → [number col 52%] [content]
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Relevant Conversations"
        className="w-full bg-white px-5 md:px-10 lg:px-20 pt-24 pb-[120px]"
      >
        <span className="text-label font-body block" style={{ color: "#373738" }}>
          Relevant Conversations
        </span>

        {/*
         * Full-width Merriweather 36px/42px — spans the full 1280px content width.
         * clamp: 24px(1.5rem) at narrow → 36px(2.25rem) at 1440px via 2.5vw.
         */}
        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
            lineHeight: "1.167",
            fontWeight: 300,
            color: "#1C1C1F",
            margin: 0,
            marginTop: "24px",
          }}
        >
          From investment opportunities and venture pitches to partnerships and
          advisory requests, we welcome conversations where our capital, network,
          and strategic perspective may be relevant.
        </h2>

        {/*
         * Numbered rows. Figma rhythm per row:
         *   divider → 40px (pt-10) → heading(32px) + 12px + body(44px) → 40px (pb-10) → divider
         *   Total per row = 168px.
         * Two-col at lg+: left spacer = 52% (≈660px of 1280px ≈ Figma x=660 heading position).
         *   At xl (1440px content=1280px): 52% × 1280 = 665px ≈ 660px ✓
         */}
        <div className="mt-12">
          {conversations.map((item) => (
            <div key={item.number}>
              <div style={{ height: "1px", backgroundColor: "#D2D5D9" }} />
              <div className="flex flex-col lg:flex-row py-10 gap-3 lg:gap-0">
                {/* Number column — 52% at lg, full width stacked at mobile */}
                <div className="lg:w-[52%] lg:flex-shrink-0">
                  <span
                    className="font-heading"
                    style={{ fontSize: "26px", lineHeight: "32px", fontWeight: 300, color: "#C5D3E5" }}
                  >
                    {item.number}
                  </span>
                </div>
                {/* Content — flex-1 takes remaining 48% */}
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
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Bottom divider after last row */}
          <div style={{ height: "1px", backgroundColor: "#D2D5D9" }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3 · WHAT WE LOOK FOR  (Frame 55, h=702px, content-width)
          Figma: bg=#F5E9DC + full-bleed image + rgba(0,0,0,0.20) overlay
          Text at x=104 from frame left (8.1%); decor line at x=64 (5%)
          Globe at x=800 (62.5%), y=-249 from frame top, 1200×1200px
          Vertical positions from frame top:
            label 80px · H2 192px · body 376px · button 582px
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="What We Look For"
        className="w-full bg-white px-5 md:px-10 lg:px-20"
      >
        {/*
         * Frame 55 is content-width (inside px-20 padding), h=702px fixed.
         * overflow-hidden clips both the bg image and the globe that extend beyond.
         */}
        <div className="relative w-full overflow-hidden" style={{ height: "702px" }}>

          {/* Background image */}
          <Image
            src="/images/pitch-what-we-look-for-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 1280px"
          />
          {/* Figma RECTANGLE fill rgba(0,0,0,0.20) */}
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.20)" }} />

          {/*
           * Decorative vertical line: x=64 (5%), y=80 to y=622 (h=542px)
           * At lg: left=5% proportional → xl:left-16 = 4rem = 64px (Figma exact)
           */}
          <div
            className="absolute hidden lg:block"
            style={{ left: "5%", top: "80px", width: "1px", height: "542px", backgroundColor: "rgba(255,255,255,0.40)" }}
          />

          {/*
           * Text content positioned from frame top/left.
           * pl: 8% (proportional) → at xl 1280px content: 8%×1280=102px ≈ 104px ✓
           * pt-20 = 80px ✓
           */}
          <div className="relative z-10 pt-20" style={{ paddingLeft: "8%", maxWidth: "52%" }}>
            <span
              className="text-label font-body block"
              style={{ color: "rgba(255,255,255,0.80)" }}
            >
              What We Look For
            </span>

            {/*
             * H2: label ends at 96px (80+16), H2 at 192px → gap = 96px (mt-24 = 6rem = 96px) ✓
             * Merriweather 36px/42px, white
             */}
            <h2
              className="font-heading text-white"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                lineHeight: "1.167",
                fontWeight: 300,
                margin: 0,
                marginTop: "96px",
                maxWidth: "520px",
              }}
            >
              MSS evaluates opportunities through the lens of strategic fit,
              execution potential, and long-term value creation.
            </h2>

            {/* Body: H2 ends at 360px, body at 376px → gap 16px (mt-4) ✓ */}
            <p
              className="font-body text-white"
              style={{
                fontSize: "15px",
                lineHeight: "22px",
                color: "rgba(255,255,255,0.90)",
                margin: 0,
                marginTop: "16px",
                maxWidth: "520px",
              }}
            >
              We look for opportunities that align with our ecosystem, demonstrate
              a clear business model, and address a real market need. The strongest
              submissions usually show execution potential, room to scale across
              customers, markets, or partnerships, and a focus on building long-term
              value rather than short-term momentum.
            </p>

            {/* Button: body ends at 486px, button at 582px → gap 96px (mt-24) ✓ */}
            <div style={{ marginTop: "96px" }}>
              <a
                href="#pitch-form"
                className="inline-flex items-center font-body"
                style={{
                  height: "40px",
                  backgroundColor: "#FFFFFF",
                  color: "#1C1C1F",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "-0.32px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  whiteSpace: "nowrap",
                }}
              >
                Send Us Your Pitch →
              </a>
            </div>
          </div>

          {/*
           * Globe/diagram — positioned at x=62.5% (800/1280), y=-249px from frame top.
           * 1200×1200px, overflows frame on all sides, clipped by overflow-hidden.
           */}
          <div
            className="absolute hidden lg:block pointer-events-none"
            style={{ left: "62.5%", top: "-249px", width: "1200px", height: "1200px" }}
          >
            <img
              src="/images/pitch-globe.svg"
              alt=""
              width={1200}
              height={1200}
              style={{ width: "1200px", height: "1200px", opacity: 0.5 }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4 · PROCESS STEPS — Submit / Review / Connect / Explore
          Figma: icons 80px below Frame55 bottom → pt-20
          Col grid: 4 equal cols with 32px gap + 32px outer indent (xl:px-8)
          Icon 40×40 centered · title mt-6 (24px) · body mt-1 (4px)
         ══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Pitch Process"
        className="w-full bg-white px-5 md:px-10 lg:px-20 pt-20 pb-28"
      >
        {/*
         * xl:px-8 adds 32px extra indent matching Figma:
         * step icons at x=8620 = page left 80px + content indent 32px = 112px from page left.
         */}
        <div className="xl:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                {/* 40×40 icon — SVG exported with white bg included from Figma */}
                <div className="w-10 h-10 flex-shrink-0">
                  <img
                    src={step.icon}
                    alt=""
                    width={40}
                    height={40}
                    style={{ width: "40px", height: "40px", objectFit: "contain" }}
                  />
                </div>
                {/* Merriweather 20px/26px — 24px gap from icon bottom */}
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "20px",
                    lineHeight: "26px",
                    fontWeight: 300,
                    color: "#1C1C1F",
                    margin: 0,
                    marginTop: "24px",
                  }}
                >
                  {step.title}
                </h3>
                {/* Inter 15px/22px — 4px gap from title bottom */}
                <p
                  className="font-body"
                  style={{
                    fontSize: "15px",
                    lineHeight: "22px",
                    color: "#67686B",
                    margin: 0,
                    marginTop: "4px",
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5 · PITCH FORM — "Ready when you are."
          Figma: label + H2 (full width), divider 42px below H2,
          form starts 40px below divider, right-aligned at 64% width.
          Fields: 2-col grid (400px ea / 24px gap) for rows 1-3,
                  full-width Inquiry Type + Message (200px tall).
          pb-[120px]: space before contact section divider.
         ══════════════════════════════════════════════════════════ */}
      <section
        id="pitch-form"
        aria-label="Submit Your Pitch"
        className="w-full bg-white px-5 md:px-10 lg:px-20 pt-24"
        style={{ scrollMarginTop: "94px" }}
      >
        <span className="text-label font-body block" style={{ color: "#373738" }}>
          Submit your pitch
        </span>
        {/*
         * H2 "Ready when you are." — Merriweather 46px/50px.
         * clamp(1.75rem, 3.2vw, 2.875rem): 3.2vw hits 46px at ~1437px ✓
         * maxWidth 56%: H2 w=724px / 1280px = 56.6% ≈ 56% ✓
         */}
        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(1.75rem, 3.2vw, 2.875rem)",
            lineHeight: "1.087",
            fontWeight: 300,
            color: "#1C1C1F",
            margin: 0,
            marginTop: "8px",
            maxWidth: "56%",
          }}
        >
          Ready when you are.
        </h2>

        {/* Divider — 42px below H2, 40px above form (Figma Vector 6 spacing) */}
        <div style={{ height: "1px", backgroundColor: "#D2D5D9", marginTop: "42px", marginBottom: "40px" }} />

        {/*
         * Form right-aligned at 64% content width.
         * Figma: form x=456/1280=35.6% from content left → right 64.4% form.
         * At lg: lg:w-[64%]; at xl 1440px: 64%×1280=819px ≈ 824px (Figma) ✓
         */}
        <div className="flex lg:justify-end pb-[120px]">
          <form className="w-full lg:w-[64%]" action="#" method="post" noValidate>

            {/* Row 1 — First Name | Last Name */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                style={fieldBase}
                className="placeholder-[#AEB0B3] focus:border-[#1C1C1F] transition-colors"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                style={fieldBase}
                className="placeholder-[#AEB0B3] focus:border-[#1C1C1F] transition-colors"
              />
            </div>

            {/* Row 2 — Email | Location (select) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                style={fieldBase}
                className="placeholder-[#AEB0B3] focus:border-[#1C1C1F] transition-colors"
              />
              <div className="relative">
                <select
                  name="location"
                  required
                  style={{
                    ...fieldBase,
                    appearance: "none",
                    WebkitAppearance: "none",
                    paddingRight: "40px",
                    color: "#AEB0B3",
                  }}
                  defaultValue=""
                >
                  <option value="" disabled>Your Location</option>
                  {/* MSS presence */}
                  <optgroup label="MSS Presence">
                    <option value="ae">United Arab Emirates</option>
                    <option value="gb">United Kingdom</option>
                    <option value="pk">Pakistan</option>
                    <option value="ch">Switzerland</option>
                    <option value="ca">Canada</option>
                    <option value="sa">Kingdom of Saudi Arabia</option>
                    <option value="ug">Uganda</option>
                    <option value="np">Nepal</option>
                  </optgroup>
                  {/* Americas */}
                  <optgroup label="Americas">
                    <option value="us">United States</option>
                    <option value="br">Brazil</option>
                    <option value="mx">Mexico</option>
                  </optgroup>
                  {/* Europe */}
                  <optgroup label="Europe">
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                    <option value="nl">Netherlands</option>
                    <option value="lu">Luxembourg</option>
                    <option value="ie">Ireland</option>
                  </optgroup>
                  {/* Middle East & Africa */}
                  <optgroup label="Middle East & Africa">
                    <option value="qa">Qatar</option>
                    <option value="bh">Bahrain</option>
                    <option value="kw">Kuwait</option>
                    <option value="eg">Egypt</option>
                    <option value="za">South Africa</option>
                    <option value="ng">Nigeria</option>
                    <option value="ke">Kenya</option>
                  </optgroup>
                  {/* Asia Pacific */}
                  <optgroup label="Asia Pacific">
                    <option value="sg">Singapore</option>
                    <option value="hk">Hong Kong</option>
                    <option value="in">India</option>
                    <option value="cn">China</option>
                    <option value="jp">Japan</option>
                    <option value="au">Australia</option>
                    <option value="my">Malaysia</option>
                  </optgroup>
                  <option value="other">Other</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="13" height="8" viewBox="0 0 13 8" fill="none" aria-hidden="true">
                  <path d="M1 1L6.5 7L12 1" stroke="#AEB0B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Row 3 — Business Name | Business URL */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <input
                type="text"
                name="business_name"
                placeholder="Business Name"
                style={fieldBase}
                className="placeholder-[#AEB0B3] focus:border-[#1C1C1F] transition-colors"
              />
              <input
                type="url"
                name="business_url"
                placeholder="Business URL"
                style={fieldBase}
                className="placeholder-[#AEB0B3] focus:border-[#1C1C1F] transition-colors"
              />
            </div>

            {/* Row 4 — Inquiry Type (full width, select) */}
            <div className="relative mt-6">
              <select
                name="inquiry_type"
                required
                style={{
                  ...fieldBase,
                  appearance: "none",
                  WebkitAppearance: "none",
                  paddingRight: "40px",
                  color: "#AEB0B3",
                }}
                defaultValue=""
              >
                <option value="" disabled>Inquiry Type</option>
                <option value="founders">Founders &amp; Ventures</option>
                <option value="partners">Strategic Partners</option>
                <option value="investment">Investment Opportunities</option>
                <option value="advisory">Advisory Requests</option>
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="13" height="8" viewBox="0 0 13 8" fill="none" aria-hidden="true">
                <path d="M1 1L6.5 7L12 1" stroke="#AEB0B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Row 5 — Message (full width, 200px tall) */}
            <textarea
              name="message"
              placeholder="Write your message"
              required
              style={{
                display: "block",
                width: "100%",
                height: "200px",
                backgroundColor: "#FFFFFF",
                border: "none",
                borderBottom: "1px solid #E8E9EB",
                paddingLeft: "0px",
                paddingRight: "16px",
                paddingTop: "16px",
                fontFamily: "var(--font-inter, system-ui, sans-serif)",
                fontSize: "18px",
                lineHeight: "28px",
                color: "#1C1C1F",
                outline: "none",
                resize: "vertical",
                marginTop: "24px",
              }}
              className="placeholder-[#AEB0B3] focus:border-[#1C1C1F] transition-colors"
            />

            {/*
             * Checkboxes — 32px gap after message (Figma: msg ends y=3539, checkbox y=3573 → 34px)
             * Inter 15px/22px, #373738
             */}
            <div style={{ marginTop: "32px" }}>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "3px", accentColor: "#1C1C1F" }}
                />
                <label htmlFor="consent" className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#373738" }}>
                  I consent to MSS Investments Holding Company processing my information for the purposes of responding to this inquiry.
                </label>
              </div>

              {/* Second checkbox — 20px gap (Figma: 3637-3617=20px) */}
              <div className="flex items-start gap-3 mt-5">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "3px", accentColor: "#1C1C1F" }}
                />
                <label htmlFor="terms" className="font-body" style={{ fontSize: "15px", lineHeight: "22px", color: "#373738" }}>
                  By submitting this form, I agree to the MSS{" "}
                  <Link href="/legal/terms" className="underline">Terms and Conditions</Link>{" "}
                  and{" "}
                  <Link href="/legal/privacy" className="underline">Privacy Policy</Link>.
                </label>
              </div>
            </div>

            {/* Submit button — 64px gap (Figma: btn y=3721, checkbox2 bottom y=3657 → 64px) */}
            <div style={{ marginTop: "64px" }}>
              <button
                type="submit"
                className="font-body text-white inline-flex items-center justify-center"
                style={{
                  width: "134px",
                  height: "40px",
                  backgroundColor: "#1C1C1F",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "-0.32px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Send Pitch →
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6 · GENERAL INQUIRIES + MEDIA CONTACT
          Figma: divider at y=3881 (120px above it = form bottom), headings y=3945
          Left col: General Inquiries (x=0 content)
          Right col: Media contact (x=52% — same split as numbered rows)
          Heading → subtext gap: 12px · subtext → email gap: 32px
         ══════════════════════════════════════════════════════════ */}
      <section aria-label="Contact Information" className="w-full bg-white px-5 md:px-10 lg:px-20">
        <div style={{ height: "1px", backgroundColor: "#D2D5D9" }} />

        {/*
         * pt-16 = 64px (Figma: divider y=3881, headings y=3945 → 64px gap ✓)
         * pb-20 = 80px (Figma: email bottom y=4065, divider y=4145 → 80px ✓)
         */}
        <div className="flex flex-col lg:flex-row pt-16 pb-20 gap-12 lg:gap-0">

          {/* General Inquiries — left col (flex-1) */}
          <div className="flex-1">
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
              href="mailto:info@mssinvestmentsholding.com"
              className="font-body text-body-sm-emphasized"
              style={{ color: "#373738", display: "block", marginTop: "32px" }}
            >
              info@mssinvestmentsholding.com
            </a>
          </div>

          {/* Media Contact — right col at 52% (same as numbered rows) */}
          <div className="lg:w-[52%] lg:flex-shrink-0">
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
              href="mailto:media@mssinvestmentsholding.com"
              className="font-body text-body-sm-emphasized"
              style={{ color: "#373738", display: "block", marginTop: "32px" }}
            >
              media@mssinvestmentsholding.com
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7 · FOOTER — shared component (same as homepage)
         ══════════════════════════════════════════════════════════ */}
      <Footer />

    </main>
  );
}
