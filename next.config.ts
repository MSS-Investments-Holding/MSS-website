import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // unsafe-eval stripped in production — Next.js HMR only needs it in dev.
      // unsafe-inline stays for now: required by Next.js App Router hydration.
      // Future task: implement nonce-based CSP to remove unsafe-inline in prod.
      isDev
        ? "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://code.tidio.co https://widget-v4.tidiochat.com"
        : "script-src 'self' 'unsafe-inline' https://code.tidio.co https://widget-v4.tidiochat.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://widget-v4.tidiochat.com",
      "font-src 'self' https://fonts.gstatic.com https://widget-v4.tidiochat.com",
      "img-src 'self' data: blob: https://cdn.sanity.io https://widget-v4.tidiochat.com https://*.tidiochat.com",
      // Sanity Studio (/studio) calls the Sanity API from the browser,
      // including websocket listeners for live document updates.
      "connect-src 'self' https://api.sanity.io https://*.api.sanity.io wss://*.api.sanity.io https://*.tidio.co https://*.tidiochat.com wss://*.tidiochat.com",
      "frame-src 'self' https://widget-v4.tidiochat.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
    formats: ["image/avif", "image/webp"],
    /** Long-lived cache for `/_next/image` responses (Sanity covers, etc.) */
    minimumCacheTTL: 31_536_000,
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        // The CMS admin surface should never appear in search results.
        source: "/studio/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
