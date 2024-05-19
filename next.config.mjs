/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fast-sparrow-58.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
