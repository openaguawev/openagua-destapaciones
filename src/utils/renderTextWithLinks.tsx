import Link from 'next/link';

// Interlinking manual controlado (Máximo 2-3 links por página)
export const renderTextWithLinks = (text: string, slug: string) => {
  const links = [
    // Servicios
    { kw: 'video inspección de cañerías', to: 'video-inspeccion-canerias' },
    { kw: 'destapaciones con hidrojet', to: 'destapaciones-hidrojet' },
    { kw: 'destapaciones de cañerías', to: 'destapaciones-canerias' },
    { kw: 'destapaciones de cloacas', to: 'destapaciones-cloacas' },
    // Zonas (Interlinking Local)
    { kw: 'Zona Norte', to: 'zonas/zona-norte' },
    { kw: 'Zona Oeste', to: 'zonas/zona-oeste' },
    { kw: 'Zona Sur', to: 'zonas/zona-sur' },
    { kw: 'CABA', to: 'zonas/caba' },
    // Blog (Interlinking Informacional)
    { kw: 'saber si un caño está roto', to: 'blog/video-inspeccion-canerias-como-funciona' },
    { kw: 'columna de edificio tapada', to: 'blog/5-senales-columna-edificio-tapada' },
    { kw: 'rejilla del patio está tapada', to: 'blog/rejilla-patio-tapada-lluvia' },
    { kw: 'cocina huele a cloaca', to: 'blog/por-que-cocina-huele-a-cloaca' },
    { kw: 'grasa en cañerías de edificios', to: 'blog/grasa-canerias-edificios-agua-hirviendo' },
    { kw: 'inodoro rebalsa', to: 'blog/inodoro-rebalsa-que-hacer' },
    { kw: 'ver precios', to: 'precios' },
  ];

  let result: (string | React.ReactNode)[] = [text];

  links.forEach(link => {
    if (slug === link.to) return;
    const newResult: (string | React.ReactNode)[] = [];
    result.forEach(part => {
      if (typeof part === 'string') {
        const regex = new RegExp(`(${link.kw})`, 'i');
        const split = part.split(regex);
        split.forEach((s, i) => {
          if (s.toLowerCase() === link.kw.toLowerCase()) {
            newResult.push(<Link key={s + i} href={`/${link.to}`} style={{ color: 'inherit', fontWeight: '600', textDecoration: 'underline' }}>{s}</Link>);
          } else if (s !== '') {
            newResult.push(s);
          }
        });
      } else {
        newResult.push(part);
      }
    });
    result = newResult;
  });

  return result;
};
