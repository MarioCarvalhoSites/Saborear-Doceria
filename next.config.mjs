/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: true,
  },
  experimental: {
    optimizeCss: true, // Mantém a otimização de CSS ativada
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*", // Permite cache de páginas normais
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=600, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
