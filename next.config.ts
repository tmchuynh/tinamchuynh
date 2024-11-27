import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/public/images/**',
      },
    ],
    domains: ['tailwindui.com']
  },
};

export default nextConfig;
