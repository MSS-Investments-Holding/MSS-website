import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-merriweather",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MSS Investments Holding | Building the Platforms of Future Economies",
  description:
    "A global holding company investing in payments, regulated finance, AI, digital asset infrastructure, and venture-backed businesses shaping modern economies.",
  metadataBase: new URL("https://mssinvestments.com"),
  openGraph: {
    title: "MSS Investments Holding",
    description:
      "A global holding company investing in payments, regulated finance, AI, digital asset infrastructure, and venture-backed businesses shaping modern economies.",
    type: "website",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
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
        {children}
      </body>
    </html>
  );
}
