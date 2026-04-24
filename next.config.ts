import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'destapacionesopenagua.com.ar',
          },
        ],
        destination: 'https://www.destapacionesopenagua.com.ar/:path*',
        permanent: true,
      },
      {
        source: '/destapaciones-en-:slug',
        destination: '/barrios/destapaciones-:slug',
        permanent: true,
      },
      {
        source: '/destapaciones-ezpeleta',
        destination: '/destapaciones-cloacas',
        permanent: true,
      },
      {
        source: '/destapaciones-en-ezpeleta',
        destination: '/destapaciones-cloacas',
        permanent: true,
      },
      {
        source: '/solucion-problemas-cloacas-buenos-aires',
        destination: '/destapaciones-cloacas',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      }
    ];
  },
  async headers() {
    return [
      {
        source: '/img/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
