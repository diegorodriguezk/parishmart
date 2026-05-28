import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/stores", destination: "/parishes/skd", permanent: true },
      { source: "/local-businesses/products/profile", destination: "/local-businesses/harps-club", permanent: true },
      { source: "/local-businesses/services/profile", destination: "/local-businesses/maria-studios", permanent: true },
      { source: "/local-businesses/profile", destination: "/local-businesses/maria-studios", permanent: true },
      { source: "/give/cause", destination: "/parishes/skd/causes/emmaus", permanent: true },
      { source: "/shop/product", destination: "/shop/products/skd-mens-microfleece-jacket", permanent: true },
      { source: "/sponsors/profile", destination: "/sponsors/cleveland-hospital", permanent: true },
    ];
  },
};

export default nextConfig;
