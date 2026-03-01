import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*', // any frontend call to /api/*
        destination: 'http://16.170.226.171:5001/api/v1/:path*', // your backend
      },
    ]
  },
};

export default nextConfig;
