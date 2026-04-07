import { permanentRedirect, notFound } from 'next/navigation';
import { barrios } from '@/data/barrios';

export function handleLegacyRedirect(pathSegments: string[]): never {
  const path = pathSegments.join('-').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // 1. Mapeo específico de Servicios (Prioridad Alta para evitar Fallback Falso Genérico)
  const serviceMap: Record<string, string> = {
    'video-inspeccion': 'video-inspeccion-canerias',
    'videoinspeccion': 'video-inspeccion-canerias',
    'destapaciones-cloacas': 'destapaciones-cloacas',
    'destapaciones-pluviales': 'destapaciones-pluviales',
    'destapaciones-con-hidrojet': 'destapaciones-hidrojet',
    'desagote-de-sotanos': 'desagote-sotanos',
    'limpieza-de-camaras': 'limpieza-camaras-septicas',
    'mantenimiento-edificios': 'mantenimientos-preventivos',
    'destapaciones-de-canerias': 'destapaciones-canerias',
    'destapaciones-de-pluviales': 'destapaciones-pluviales',
    'destapaciones-maquinas': 'destapaciones-hidrojet',
    'destapaciones-inodoros': 'destapaciones-cloacas',
    'sistema-hidrojets': 'destapaciones-hidrojet',
    'limpieza-columnas-edificios': 'mantenimientos-preventivos',
    'zona-norte': 'zonas/zona-norte',
    'zona-sur': 'zonas/zona-sur',
    'zona-oeste': 'zonas/zona-oeste'
  };
  for (const [key, slug] of Object.entries(serviceMap)) {
    if (path.includes(key)) permanentRedirect(`/${slug}`);
  }

  // 2. Mapeo específico de Guías del Blog
  const blogMap: Record<string, string> = {
    'por-que-cocina-huele': 'por-que-cocina-huele-a-cloaca',
    'inodoro-rebalsa': 'inodoro-rebalsa-que-hacer',
    'ducha-desagota': 'ducha-desagota-lento',
    'rejilla-patio': 'rejilla-patio-tapada-lluvia',
    'columna-cloacal': '5-senales-columna-edificio-tapada',
    'grasa-canerias': 'grasa-canerias-edificios-agua-hirviendo',
    'como-destapar-inodoro': 'como-destapar-inodoro',
    'como-destapar-rejillas': 'como-destapar-rejillas',
    'como-destapar-pileta-cocina': 'como-destapar-pileta-cocina'
  };
  for (const [key, slug] of Object.entries(blogMap)) {
    if (path.includes(key)) permanentRedirect(`/blog/${slug}`);
  }

  const sortedBarrios = [...barrios].sort((a, b) => b.name.length - a.name.length);

  // 3. Try to match full slug part or normalized name
  for (const barrio of sortedBarrios) {
    const slugPart = barrio.slug.replace('destapaciones-', '');
    const nameNormalized = barrio.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
    if (path.includes(slugPart) || path.includes(nameNormalized)) {
      permanentRedirect(`/barrios/${barrio.slug}`);
    }
  }
  
  // 2. Try to match significant word (without "Villa", "Parque", etc.)
  for (const barrio of sortedBarrios) {
    const nameNormalized = barrio.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const cleanName = nameNormalized.replace(/^(villa|parque|san|general|ciudad|barrio)\s+/i, '').trim();
    if (cleanName.length > 3 && path.includes(cleanName.replace(/\s+/g, '-'))) {
      permanentRedirect(`/barrios/${barrio.slug}`);
    }
  }

  // 3. Match generic 'destapaciones' for untreated zones
  if (path.includes('destapac')) {
    permanentRedirect('/servicios/destapaciones');
  }

  // 4. Muerte al Soft 404: Cualquier legacy string que llegue hasta este punto y no tenga matcheo, va a error duro.
  notFound();
}
