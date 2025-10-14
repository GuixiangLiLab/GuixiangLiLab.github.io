import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "",
  basePath: "",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // 忽略 eslint 错误
  },
};

export default nextConfig;
