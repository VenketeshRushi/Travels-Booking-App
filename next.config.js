/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  // serverComponentsExternalPackages: ["mongoose"],
  images: {
    domains: ["images.unsplash.com", "tailwindui.com", "source.unsplash.com"],
  },
};

module.exports = nextConfig;
