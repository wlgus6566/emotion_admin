/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://jsonplaceholder.typicode.com/photos'],
  },
}

module.exports = nextConfig
