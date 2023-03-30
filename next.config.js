/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "tailwindui.com", "source.unsplash.com"],
  },
};

module.exports = nextConfig;
