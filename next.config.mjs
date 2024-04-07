/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        protocol: "http",
      },
      {
        hostname: "eximpack-be.vercel.app",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
