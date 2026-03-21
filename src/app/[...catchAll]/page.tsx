import { permanentRedirect } from 'next/navigation';
import { barrios } from '@/data/barrios';

export default async function CatchAll({ params }: { params: Promise<{ catchAll: string[] }> }) {
  const { catchAll } = await params;
  const path = catchAll.join('-').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const sortedBarrios = [...barrios].sort((a, b) => b.name.length - a.name.length);

  // 1. Try to match full slug part or normalized name
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

  // 3. Catch-all: default to Home with permanent redirect (301)
  permanentRedirect('/');
}
