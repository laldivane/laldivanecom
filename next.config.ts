import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com", "i.pinimg.com", "img.icons8.com", "img.youtube.com"],
  },
  async redirects() {
    return [
      {
        source: '/base',
        destination: '/admin/base',
        permanent: true,
      },
      {
        source: '/wizard',
        destination: '/admin/wizard',
        permanent: true,
      },
      {
        source: '/media',
        destination: '/admin/media',
        permanent: true,
      },
      {
        source: '/wardrobe',
        destination: '/admin/wardrobe',
        permanent: true,
      },
      {
        source: '/environments',
        destination: '/admin/environments',
        permanent: true,
      },
      {
        source: '/assets',
        destination: '/admin/assets',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
