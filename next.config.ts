import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  trailingSlash: true,
}

export default nextConfig;
