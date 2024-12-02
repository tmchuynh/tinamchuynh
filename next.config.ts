import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/public/images/**',
      },
    ],
    domains: ['tailwindui.com'],
  },
  webpack: ( config ) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve( __dirname, 'src/components' ),
      '@utils': path.resolve( __dirname, 'src/lib/utils' ),
      '@ui': path.resolve( __dirname, 'src/components/ui' ),
      '@lib': path.resolve( __dirname, 'src/lib' ),
      '@hooks': path.resolve( __dirname, 'src/hooks' ),
      '@data': path.resolve( __dirname, 'src/data' )
    };
    return config;
  }
};

export default nextConfig;
