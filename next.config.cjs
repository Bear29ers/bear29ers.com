/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Enable polling based on env variable being set
    if (process.env.NEXT_WEBPACK_USEPOLLING) {
      config.webpackOptions = {
        poll: 1200,
        aggregateTimeout: 500,
        ignored: ['node_modules'],
      };
    }
    return config;
  },
};

module.exports = nextConfig;
