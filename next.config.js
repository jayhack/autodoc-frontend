/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/user/:path*',
        destination: '/html/user/:path*'
      },
      {
        source: '/_static/:path*',
        destination: '/html/_static/:path*'
      },
      {
        source: '/dev/:path*',
        destination: '/html/dev/:path*'
      },
      {
        source: '/reference/:path*',
        destination: '/html/reference/:path*'
      },
      {
        source: '/release.html',
        destination: '/html/release.html',
      }
    ]
  }
}

module.exports = nextConfig
