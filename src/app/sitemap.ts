import { MetadataRoute } from 'next';
import { getArticulos } from '@/data/blog';

// Reemplazar con URL de producción real
const siteUrl = 'https://www.openagua.com.ar';

export default function sitemap(): MetadataRoute.Sitemap {
  const articulos = getArticulos();
  
  const blogUrls = articulos.map((art) => ({
    url: `${siteUrl}/blog/${art.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const zonas = ['caba', 'zona-norte', 'zona-oeste', 'zona-sur'];
  const zonasUrls = zonas.map((z) => ({
    url: `${siteUrl}/zonas/${z}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogUrls,
    ...zonasUrls,
  ];
}
