/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Voor static export (als je geen server-side rendering nodig hebt)
  output: 'export',
  // Base path voor subfolder deployment
  basePath: '/lander',
  assetPrefix: '/lander/',
  trailingSlash: true,
}

module.exports = nextConfig