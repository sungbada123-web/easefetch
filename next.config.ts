import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
};

export default nextConfig;

