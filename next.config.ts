import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: ''export''
  devIndicators: false,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
