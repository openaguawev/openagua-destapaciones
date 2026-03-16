import { MetadataRoute } from 'next';
import { getZonas } from '@/data/zonas';
import { getArticulos } from '@/data/blog';
import { getServicios } from '@/data/servicios';

export const dynamic = 'force-static';

// Reemplazar con URL de producción real
const siteUrl = 'https://www.openagua.com.ar';
const currentDate = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const articulos = getArticulos();
  const servicios = getServicios();
  
  const articulosUrls = articulos.map((art) => ({
    url: `${siteUrl}/blog/${art.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const zonas = getZonas();
  const zonasUrls = zonas.map((z) => ({
    url: `${siteUrl}/zonas/${z.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...articulosUrls,
    ...zonasUrls,
    ...servicios.map((s) => ({
      url: `${siteUrl}/${s.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ];
}
