import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // GitHub Pages 二级路径支持（actions/configure-pages 会注入这个 env）
  assetPrefix: "",
  basePath: "",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
