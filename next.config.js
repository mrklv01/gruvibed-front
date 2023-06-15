/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "localhost/",
      "localhost/api/",
      "localhost/api/files/",
      "http://localhost",
      "http://localhost:8080/api/files/",
      "http://localhost:8080/api/",
      "http://localhost/",
      "https://gruvibed-back.herokuapp.com/",
      "https://gruvibed-back.herokuapp.com/api",
      "gruvibed-back.herokuapp.com/",
      "gruvibed-back.herokuapp.com/api"
    ],
  },
};

module.exports = nextConfig;
