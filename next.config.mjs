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
  // output: "standalone", // enable this to build docker image
};

export default nextConfig;
