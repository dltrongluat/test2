/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    path: process.env.REACT_APP_HOST,
    // path: process.env.REACT_APP_HOST,
  // domains: ["lady.esollabs.com"],
  },
};

module.exports = nextConfig;
