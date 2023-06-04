/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 images: {
      domains: [
"https://gruvibed-back.herokuapp.com/",
"https://gruvibed-back.herokuapp.com/api",
"gruvibed-back.herokuapp.com/",
"gruvibed-back.herokuapp.com/api"
      ],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "gruvibed-back.herokuapp.com/api",
        },
      ],
    },
};

module.exports = nextConfig;
