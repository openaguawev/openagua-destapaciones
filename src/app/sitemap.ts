import { MetadataRoute } from 'next';
import { getZonas } from '@/data/zonas';
import { getArticulos } from '@/data/blog';
import { getServicios } from '@/data/servicios';

// Reemplazar con URL de producción real
const siteUrl = 'https://www.openagua.com.ar';

export default function sitemap(): MetadataRoute.Sitemap {
  const articulos = getArticulos();
  const servicios = getServicios();
  
  const articulosUrls = articulos.map((art) => ({
    url: `${siteUrl}/blog/${art.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const zonas = getZonas();
  const zonasUrls = zonas.map((z) => ({
    url: `${siteUrl}/zonas/${z.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
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
    ...articulosUrls,
    ...zonasUrls,
    ...servicios.map((s) => ({
      url: `${siteUrl}/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ];
}
