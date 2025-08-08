/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Verwijder output: 'export' voor Vercel
  // Verwijder basePath voor development
  // basePath: '/lander',
  // assetPrefix: '/lander/',
  trailingSlash: true,
}

module.exports = nextConfig