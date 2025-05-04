/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add this if you're having issues:
  webpack(config:any) {
    config.resolve.alias['@'] = path.resolve(__dirname, '.');
    return config;
  },
};

const path = require('path');

module.exports = nextConfig;
