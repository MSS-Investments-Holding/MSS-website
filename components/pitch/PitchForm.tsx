"use client";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitPitch } from "@/app/pitch/actions";
import ArrowRight from "@/components/icons/ArrowRight";

const fieldBase = {
  display: "block",
  width: "100%",
  height: "var(--pitch-field-height)",
  minWidth: 0,
  backgroundColor: "#FFFFFF",
  border: "none",
  borderBottom: "1px solid #AEB0B3",
  paddingLeft: "0px",
  paddingRight: "16px",
  fontFamily: "var(--font-inter, system-ui, sans-serif)",
  fontSize: "var(--pitch-field-font-size)",
  lineHeight: "var(--pitch-field-line-height)",
  color: "#1C1C1F",
  outline: "none",
} as const;

const initialState = {
  ok: false,
  message: "",
  fieldErrors: {},
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <p className="font-body mt-2" style={{ color: "#9A3412", fontSize: "13px", lineHeight: "18px" }}>
      {message}
    </p>
  );
}

function SubmitButton({ termsAccepted }: { termsAccepted: boolean }) {
  const { pending } = useFormStatus();
  const disabled = pending || !termsAccepted;

  return (
    <button
      type="submit"
      disabled={disabled}
      className="font-body inline-flex items-center justify-center gap-[8px] transition-colors disabled:cursor-not-allowed"
      style={{
        minWidth: "134px",
        height: "40px",
        paddingLeft: "20px",
        paddingRight: "16px",
        backgroundColor: disabled ? "#E8E9EB" : "#1C1C1F",
        color: disabled ? "#AEB0B3" : "#FFFFFF",
        fontSize: "var(--pitch-button-font-size)",
        lineHeight: "var(--pitch-button-line-height)",
        letterSpacing: "-0.32px",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {pending ? "Sending..." : "Send Pitch"}
      {!pending ? <ArrowRight size="lg" fill="currentColor" /> : null}
    </button>
  );
}

export default function PitchForm() {
  const [state, formAction] = useActionState(submitPitch, initialState);
  const [location, setLocation] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    if (!state.ok) return;

    const frame = requestAnimationFrame(() => {
      setLocation("");
      setInquiryType("");
      setTermsAccepted(false);
    });

    return () => cancelAnimationFrame(frame);
  }, [state.ok]);

  return (
    <form className="pitch-form w-full lg:w-[64%]" action={formAction} noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Row 1 — First Name | Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
            style={fieldBase}
            className="placeholder-[#AEB0B3] focus:border-[#1C1C1F] transition-colors"
          />
          <FieldError message={state.fieldErrors?.first_name} />
        </div>
        <div>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            style={fieldBase}
            className="placeholder-[#AEB0B3] focus:border-[#1C1C1F] transition-colors"
          />
          <FieldError message={state.fieldErrors?.last_name} />
        </div>
      </div>

      {/* Row 2 — Email | Location (select) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            style={fieldBase}
            className="placeholder-[#AEB0B3] focus:border-[#1C1C1F] transition-colors"
          />
          <FieldError message={state.fieldErrors?.email} />
        </div>
        <div>
          <div className="relative">
            <select
              name="location"
              required
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              style={{
                ...fieldBase,
                appearance: "none",
                WebkitAppearance: "none",
                paddingRight: "40px",
                color: location ? "#1C1C1F" : "#AEB0B3",
              }}
            >
              <option value="" disabled>Your Location</option>
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
              <optgroup label="Americas">
                <option value="us">United States</option>
                <option value="br">Brazil</option>
                <option value="mx">Mexico</option>
              </optgroup>
              <optgroup label="Europe">
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="nl">Netherlands</option>
                <option value="lu">Luxembourg</option>
                <option value="ie">Ireland</option>
              </optgroup>
              <optgroup label="Middle East & Africa">
                <option value="qa">Qatar</option>
                <option value="bh">Bahrain</option>
                <option value="kw">Kuwait</option>
                <option value="eg">Egypt</option>
                <option value="za">South Africa</option>
                <option value="ng">Nigeria</option>
                <option value="ke">Kenya</option>
              </optgroup>
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
          <FieldError message={state.fieldErrors?.location} />
        </div>
      </div>

      {/* Row 3 — Business Name | Business URL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
          value={inquiryType}
          onChange={(event) => setInquiryType(event.target.value)}
          style={{
            ...fieldBase,
            appearance: "none",
            WebkitAppearance: "none",
            paddingRight: "40px",
            color: inquiryType ? "#1C1C1F" : "#AEB0B3",
          }}
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
      <FieldError message={state.fieldErrors?.inquiry_type} />

      {/* Row 5 — Message (full width, 200px tall) */}
      <textarea
        name="message"
        placeholder="Write your message"
        required
        style={{
          display: "block",
          width: "100%",
          minWidth: 0,
          height: "var(--pitch-message-height)",
          backgroundColor: "#FFFFFF",
          border: "none",
          borderBottom: "1px solid #AEB0B3",
          paddingLeft: "0px",
          paddingRight: "16px",
          paddingTop: "16px",
          fontFamily: "var(--font-inter, system-ui, sans-serif)",
          fontSize: "var(--pitch-field-font-size)",
          lineHeight: "var(--pitch-field-line-height)",
          color: "#1C1C1F",
          outline: "none",
          resize: "vertical",
          marginTop: "24px",
        }}
        className="placeholder-[#AEB0B3] focus:border-[#1C1C1F] transition-colors"
      />
      <FieldError message={state.fieldErrors?.message} />

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
            style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "3px", accentColor: "#1C1C1F", cursor: "pointer" }}
          />
          <label htmlFor="consent" className="font-body text-body-sm min-w-0" style={{ color: "#373738", overflowWrap: "anywhere", cursor: "pointer" }}>
            I consent to MSS Investments Holding Company processing my information for the purposes of responding to this inquiry.
          </label>
        </div>
        <FieldError message={state.fieldErrors?.consent} />

        {/* Second checkbox — 20px gap (Figma: 3637-3617=20px) */}
        <div className="flex items-start gap-3 mt-5">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            required
            checked={termsAccepted}
            onChange={(event) => setTermsAccepted(event.target.checked)}
            style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "3px", accentColor: "#1C1C1F", cursor: "pointer" }}
          />
          <label htmlFor="terms" className="font-body text-body-sm min-w-0" style={{ color: "#373738", overflowWrap: "anywhere", cursor: "pointer" }}>
            By submitting this form, I agree to the MSS{" "}
            <Link href="/legal/terms" className="text-body-sm-emphasized font-body">Terms &amp; Conditions</Link>{" "}
            and{" "}
            <Link href="/legal/privacy" className="text-body-sm-emphasized font-body">Privacy Policy</Link>.
          </label>
        </div>
        <FieldError message={state.fieldErrors?.terms} />
      </div>

      {state.message ? (
        <p
          className="font-body text-body-sm"
          role="status"
          style={{
            color: state.ok ? "#166534" : "#9A3412",
            marginTop: "32px",
          }}
        >
          {state.message}
        </p>
      ) : null}

      {/* Submit button — 64px gap (Figma: btn y=3721, checkbox2 bottom y=3657 → 64px) */}
      <div style={{ marginTop: "64px" }}>
        <SubmitButton termsAccepted={termsAccepted} />
      </div>
    </form>
  );
}
