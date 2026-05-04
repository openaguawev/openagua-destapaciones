import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/wp-admin/',
        '/wp-content/',
        '/wp-includes/',
        '/category/',
        '/tag/',
        '/author/',
        '/*?*',
      ],
    },
    sitemap: 'https://www.destapacionesopenagua.com.ar/sitemap.xml',
  };
}
