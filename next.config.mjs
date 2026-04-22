/** @type {import('next').NextConfig} */
// next.config.mjs

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
      {
        source: "/Courses/:path*",
        destination: "/courses/:path*",
        permanent: true,
      },
    ],
  },
  serverExternalPackages: ["mongoose"],
};

export default nextConfig;
