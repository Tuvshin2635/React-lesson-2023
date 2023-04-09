/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "images-ext-1.discordapp.net",
      "m.media-amazon.com",
    ],
  },
};

module.exports = nextConfig;
