/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "metruyenchu.com.vn",
      },
    ],
  },
};

export default nextConfig;
