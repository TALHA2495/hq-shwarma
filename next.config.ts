import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // WebP first (recommended for most browsers), AVIF for those that support
    // it. Both fall back to the original if unsupported. Serves the 700×700
    // source JPEGs at the size each slot actually needs.
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
