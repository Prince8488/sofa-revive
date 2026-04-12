/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return []
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
