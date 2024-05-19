/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "https://fast-sparrow-58.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
