/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.image-after.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "www.furnitureclinic.co.uk" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "www.upholsterygal.com" },
    ],
  },
};

module.exports = nextConfig;
