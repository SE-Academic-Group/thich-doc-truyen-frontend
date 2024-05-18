/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "metruyenchu.com.vn",
      },
      {
        protocol: "https",
        hostname: "www.nae.vn",
      },
    ],
  },
};

export default nextConfig;
