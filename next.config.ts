import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true, // For better compatibility
  },
  // Removed static export to enable API routes
  trailingSlash: true,
  basePath: '', // Set this to your subdirectory if needed
};

export default nextConfig;
