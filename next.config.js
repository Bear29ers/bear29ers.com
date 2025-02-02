const createnextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createnextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.cdninstagram.com',
        port: '',
      },
    ],
  },
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? { properties: ['^data-testid$'] } : false,
  },
};

module.exports = withNextIntl(nextConfig);
