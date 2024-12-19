import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
