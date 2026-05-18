import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  async redirects() {
    return [
      // URLs legacy de WordPress — resuelven en UN solo salto (evita cadena trailing-slash + legacyRedirect)
      {
        source: '/diferencias-canerias-cloacales-pluviales/',
        destination: '/blog/diferencias-canerias-cloacales-pluviales',
        permanent: true,
      },
      {
        source: '/como-destapar-rejillas/',
        destination: '/blog/como-destapar-rejillas',
        permanent: true,
      },
      {
        source: '/destapaciones-precio-por-metro/',
        destination: '/precios',
        permanent: true,
      },
      {
        source: '/solucion-problemas-cloacas-buenos-aires/',
        destination: '/destapaciones-cloacas',
        permanent: true,
      },
      {
        source: '/zona-norte/',
        destination: '/zonas/zona-norte',
        permanent: true,
      },
      // Redirect no-www → www
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
        source: '/destapaciones-en-puerto-madero',
        destination: '/barrios/destapaciones-puerto-madero',
        permanent: true,
      },
      {
        source: '/destapaciones-en-puerto-madero/',
        destination: '/barrios/destapaciones-puerto-madero',
        permanent: true,
      },
      {
        source: '/destapaciones-barrios-capital-federal',
        destination: '/zonas/caba',
        permanent: true,
      },
      {
        source: '/destapaciones-barrios-capital-federal/',
        destination: '/zonas/caba',
        permanent: true,
      },
      {
        source: '/destapaciones-cocina',
        destination: '/destapaciones-canerias',
        permanent: true,
      },
      {
        source: '/destapaciones-de-cocina',
        destination: '/destapaciones-canerias',
        permanent: true,
      },
      {
        source: '/destapaciones-de-cocina/',
        destination: '/destapaciones-canerias',
        permanent: true,
      },
      // Redirects explícitos URLs WordPress con tráfico real
      {
        source: '/destapaciones-general-san-martin',
        destination: '/barrios/destapaciones-general-san-martin',
        permanent: true,
      },
      {
        source: '/destapaciones-general-san-martin/',
        destination: '/barrios/destapaciones-general-san-martin',
        permanent: true,
      },
      {
        source: '/destapaciones-san-martin',
        destination: '/barrios/destapaciones-san-martin',
        permanent: true,
      },
      {
        source: '/destapaciones-san-martin/',
        destination: '/barrios/destapaciones-san-martin',
        permanent: true,
      },
      {
        source: '/destapaciones-ingeniero-maschwitz',
        destination: '/barrios/destapaciones-ingeniero-maschwitz',
        permanent: true,
      },
      {
        source: '/destapaciones-ingeniero-maschwitz/',
        destination: '/barrios/destapaciones-ingeniero-maschwitz',
        permanent: true,
      },
      {
        source: '/video-inspeccion',
        destination: '/video-inspeccion-canerias',
        permanent: true,
      },
      {
        source: '/video-inspeccion/',
        destination: '/video-inspeccion-canerias',
        permanent: true,
      },
      {
        source: '/diferencias-canerias-cloacales-pluviales',
        destination: '/blog/diferencias-canerias-cloacales-pluviales',
        permanent: true,
      },
      {
        source: '/como-destapar-rejillas',
        destination: '/blog/como-destapar-rejillas',
        permanent: true,
      },
      {
        source: '/solucion-problemas-cloacas-buenos-aires',
        destination: '/destapaciones-cloacas',
        permanent: true,
      },
      {
        source: '/destapaciones-pilar',
        destination: '/barrios/destapaciones-pilar',
        permanent: true,
      },
      {
        source: '/destapaciones-pilar/',
        destination: '/barrios/destapaciones-pilar',
        permanent: true,
      },
      // Redirect genérico destapaciones-en-* (debe ir después de los explícitos)
      {
        source: '/prevencion-obstrucciones-cloacas-pluviales',
        destination: '/blog/diferencias-canerias-cloacales-pluviales',
        permanent: true,
      },
      {
        source: '/prevencion-obstrucciones-cloacas-pluviales/',
        destination: '/blog/diferencias-canerias-cloacales-pluviales',
        permanent: true,
      },
      {
        source: '/desagotes',
        destination: '/desagote-sotanos',
        permanent: true,
      },
      {
        source: '/desagotes/',
        destination: '/desagote-sotanos',
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
      },
      {
        source: '/barrios/destapaciones-capital-federal',
        destination: '/zonas/caba',
        permanent: true,
      },
      {
        source: '/blog/video-inspeccion-saber-cano-roto-sin-romper',
        destination: '/blog/video-inspeccion-canerias-como-funciona',
        permanent: true,
      }
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-XSS-Protection', value: '1; mode=block' }
        ]
      },
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
