import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/client/:path*",
        destination: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
