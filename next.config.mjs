/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        protocol: "http",
      },
      {
        hostname: "eximpack-backend-kjyttzjf2a-ey.a.run.app",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
