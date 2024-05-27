/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.{com,vn}",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
