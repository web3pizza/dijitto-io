import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/dijitto-io',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
