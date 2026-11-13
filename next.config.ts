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
      "font-src 'self' data: https://fonts.gstatic.com https://widget-v4.tidiochat.com https://code.tidio.co",
      "img-src 'self' data: blob: https://widget-v4.tidiochat.com https://*.tidiochat.com https://cdnjs.cloudflare.com https://code.tidio.co https://avatars.tidiochat.com https://unpkg.com https://tidio-images-messenger.s3.us-east-1.amazonaws.com",
      "media-src 'self' https://widget-v4.tidiochat.com https://code.tidio.co",
      "connect-src 'self' https://sentry-new.tidio.co https://socket.tidio.co wss://socket.tidio.co https://api-v2.tidio.co https://code.tidio.co https://widget-v4.tidiochat.com https://uploads.tidio.com",
      "frame-src 'self' https://widget-v4.tidiochat.com",
      "worker-src 'self' blob: https://widget-v4.tidiochat.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    /** Long-lived cache for `/_next/image` responses */
    minimumCacheTTL: 31_536_000,
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
