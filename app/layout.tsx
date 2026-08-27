import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import TidioChat from "@/components/TidioChat";

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
  title: "MSS | Building the Platforms of Future Economies",
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
    images: [{ url: "/global/og-cover.jpg", width: 1200, height: 630, alt: "MSS Investments Holding" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/global/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/global/Favicon.png",
    apple: "/global/Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${inter.variable}`}>
      <head>
        {/*
         * FOUC guard — inline critical CSS, available before the external
         * stylesheet loads. next/image `fill` images are position:absolute;
         * if their wrapper's positioning class hasn't applied yet they escape
         * to the viewport and stretch full-screen. This contains any fill
         * image's wrapper. `:where()` keeps it at zero specificity, so the
         * real class-based positioning (relative/absolute) wins once the
         * stylesheet loads — this only takes effect during the load window.
         */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              ':where(*:has(> img[data-nimg="fill"])){position:relative;overflow:hidden}',
          }}
        />
      </head>
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
        <TidioChat />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
