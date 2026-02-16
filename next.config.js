/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pixelweb.github.io',
  assetPrefix: '/pixelweb.github.io',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
