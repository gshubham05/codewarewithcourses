/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Task 4: WebP images for 90+ PageSpeed ─────────────────────────────
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },

  // ── Performance & caching headers ─────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*\\.(?:jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2|ttf|otf|eot))",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
          key: "Content-Security-Policy",
          value: `
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
            connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com;
            img-src 'self' data: https://www.google-analytics.com;
            style-src 'self' 'unsafe-inline';
            font-src 'self' data:;
            frame-src https://www.googletagmanager.com;
          `.replace(/\n/g, ""),
        },
        ],
      },
    ];
  },

  // ── Sitemap new URLs ──────────────────────────────────────────────────
  // The 6 new course pages will be auto-picked up by sitemap-pages.xml
  // since they follow the app router convention

  // ── Bundle optimisation ───────────────────────────────────────────────
  experimental: {
    optimizeCss: false,    // disable unless critters is installed
    scrollRestoration: true,
  },

  // ── Compress responses ────────────────────────────────────────────────
  compress: true,

  // ── Trailing slash consistency ────────────────────────────────────────
  trailingSlash: false,
};

export default nextConfig;
