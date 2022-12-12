/** @type {import('next').NextConfig} */
module.exports = {
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "githubusercontent.com",
      "lh3.googleusercontent.com",
      "googleusercontent.com",
    ],
  },
};
