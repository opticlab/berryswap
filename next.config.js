/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      crypto: false,
      stream: false,
      http: false,
      https: false,
      os: false,
    };

    return config;
  },
};
