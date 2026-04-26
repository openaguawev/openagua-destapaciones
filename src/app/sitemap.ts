import { MetadataRoute } from 'next';
import { barrios } from '@/data/barrios';
import { getServicios } from '@/data/servicios';
import { getArticulos } from '@/data/blog';
import { getZonas } from '@/data/zonas';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.destapacionesopenagua.com.ar';

  const homeSitemaps: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    }
  ];

  const servicios = getServicios();
  const serviciosSitemaps: MetadataRoute.Sitemap = servicios.map((servicio) => ({
    url: `${baseUrl}/${servicio.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const barriosSitemaps: MetadataRoute.Sitemap = barrios.map((barrio) => ({
    url: `${baseUrl}/barrios/${barrio.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const zonas = getZonas();
  const zonasSitemaps: MetadataRoute.Sitemap = zonas.map((zona) => ({
    url: `${baseUrl}/zonas/${zona.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Add blog posts optionally? The static xml had blog posts. Let's add the basic blog hub and static blog posts mentioned in the XML if they still exist.
  // We can just add `/blog` for now as priority 0.8
  const articulos = getArticulos();
  const blogSitemaps: MetadataRoute.Sitemap = articulos.map((articulo) => ({
    url: `${baseUrl}/blog/${articulo.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogHubSitemap: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ];

  return [...homeSitemaps, ...serviciosSitemaps, ...zonasSitemaps, ...barriosSitemaps, ...blogHubSitemap, ...blogSitemaps];
}
