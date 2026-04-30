import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitch to Us | MSS Investments Holding",
};

export default function PitchPage() {
  return (
    <main id="main-content" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-inter, system-ui, sans-serif)", backgroundColor: "#FFFFFF", gap: "12px" }}>
      <p style={{ fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#AEB0B3", margin: 0 }}>MSS Investments Holding</p>
      <h1 style={{ fontSize: "26px", fontWeight: 300, color: "#1C1C1F", margin: 0 }}>Pitch to Us</h1>
      <p style={{ fontSize: "15px", color: "#67686B", margin: 0 }}>This page is coming soon.</p>
    </main>
  );
}
