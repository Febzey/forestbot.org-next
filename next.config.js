/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    images: {
      domains: ['crafatar.com'],
    },
    async redirects() {
      return [
        {
          source: "/discord",
          destination: 'https://api.forestbot.org/discord',
          permanent: false,
          basePath: false
        },
        {
          source: "/group",
          destination: 'https://discord.gg/wKRsFSm8bM',
          permanent: false,
          basePath: false
        },
      ]
    }
  }
  
  module.exports = nextConfig