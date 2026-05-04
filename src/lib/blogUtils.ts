import { getArticulos, Articulo } from '@/data/blog';

export function getRelatedBlogPosts(barrioName: string): Articulo[] {
  const articulos = getArticulos();
  if (!articulos || articulos.length === 0) return [];

  const nameLower = barrioName.toLowerCase();
  
  // 1. Lógica de priorización temática por tipo de barrio
  // Barrios típicamente de alta densidad (edificios)
  const altaDensidad = ['palermo', 'recoleta', 'belgrano', 'caballito', 'barrio norte', 'puerto madero', 'san telmo'];
  // Barrios típicamente de casas/chalets
  const bajaDensidad = ['devoto', 'versalles', 'villa del parque', 'ituzaingo', 'castelar', 'hurlingham', 'san isidro', 'nordelta'];

  let keywords: string[] = [];
  if (altaDensidad.some(b => nameLower.includes(b))) {
    keywords = ['edificio', 'columna', 'departamento', 'consorcio'];
  } else if (bajaDensidad.some(b => nameLower.includes(b))) {
    keywords = ['casa', 'patio', 'rejilla', 'pluvial', 'raíces'];
  }

  // Filtrar artículos que coincidan con las keywords
  let matched: Articulo[] = [];
  if (keywords.length > 0) {
    matched = articulos.filter(art => {
      const text = (art.title + ' ' + art.excerpt).toLowerCase();
      return keywords.some(kw => text.includes(kw));
    });
  }

  // 2. Si no hay match temático o faltan artículos, usar fallback determinista
  // Un hash basado en el nombre del barrio asegura que TODOS los artículos
  // reciban links (distribución equitativa del Link Equity) en vez de linkear siempre los mismos 3.
  const hash = barrioName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const results: Articulo[] = [...matched];
  
  // Llenar hasta llegar a 3 usando el array original desplazado por el hash
  let i = 0;
  const total = articulos.length;
  const startIndex = hash % total;

  while (results.length < 3 && i < total) {
    const candidate = articulos[(startIndex + i) % total];
    // Evitar duplicados
    if (!results.some(r => r.slug === candidate.slug)) {
      results.push(candidate);
    }
    i++;
  }

  return results.slice(0, 3);
}
