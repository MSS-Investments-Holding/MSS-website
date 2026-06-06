import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-merriweather",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MSS Investments Holding | Building the Platforms of Future Economies",
  description:
    "A global holding company investing in payments, regulated finance, AI, digital asset infrastructure, and venture-backed businesses shaping modern economies.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mssinvestmentsholding.com"
  ),
  openGraph: {
    title: "MSS Investments Holding",
    description:
      "A global holding company investing in payments, regulated finance, AI, digital asset infrastructure, and venture-backed businesses shaping modern economies.",
    type: "website",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/global/Favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/global/Favicon-dark.png",  media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/global/Favicon-light.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:rounded"
          style={{ backgroundColor: "var(--color-primary)", color: "white" }}
        >
          Skip to content
        </a>
        <SmoothScroll>
          <ScrollToTop />
          {children}
        </SmoothScroll>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
