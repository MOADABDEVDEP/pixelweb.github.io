/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/pixelweb',
  assetPrefix: '/pixelweb/',
}

module.exports = nextConfig
