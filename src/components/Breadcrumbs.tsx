'use client';

import Link from 'next/link';
import Script from 'next/script';
import './Breadcrumbs.css';

interface BreadcrumbsProps {
  tipo: 'zona' | 'barrio';
  zona: {
    nombre: string;
    slug: string;
  };
  barrio?: {
    nombre: string;
    slug: string;
  };
}

export default function Breadcrumbs({ tipo, zona, barrio }: BreadcrumbsProps) {
  const baseUrl = 'https://www.destapacionesopenagua.com.ar';

  const schemaItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: baseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: tipo === 'zona' ? 'Zonas' : zona.nombre,
      item: tipo === 'zona' ? `${baseUrl}/` : `${baseUrl}/zonas/${zona.slug}`, // Note: there's no /zonas listing page, we just point to / if needed or we could omit the link, but schema requires URL. In user's example they didn't put a link for 'Zonas' in the breadcrumb visual, but what about the schema? Let's check the user's example.
    }
  ];

  // Let's refine based on user's exact schema request
  /*
        {
          "@type": "ListItem",
          position: 2,
          name: zona.nombre,
          item: `https://www.destapacionesopenagua.com.ar/zonas/${zona.slug}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: barrio,
          item: `https://www.destapacionesopenagua.com.ar/barrios/${barrioSlug}`,
        },
  */
  
  let itemListElement: any[] = [];
  
  if (tipo === 'barrio' && barrio) {
    itemListElement = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: zona.nombre,
        item: `${baseUrl}/zonas/${zona.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: barrio.nombre,
        item: `${baseUrl}/barrios/${barrio.slug}`,
      },
    ];
  } else if (tipo === 'zona') {
    itemListElement = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: zona.nombre,
        item: `${baseUrl}/zonas/${zona.slug}`,
      }
    ];
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement
  };

  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link>
        <span className="breadcrumbs-separator">{">"}</span>

        {tipo === "zona" && (
          <>
            <span>Zonas</span>
            <span className="breadcrumbs-separator">{">"}</span>
            <span style={{ color: '#cbd5e1' }}>{zona.nombre}</span>
          </>
        )}

        {tipo === "barrio" && (
          <>
            <Link href={`/zonas/${zona.slug}`}>{zona.nombre}</Link>
            <span className="breadcrumbs-separator">{">"}</span>
            <span style={{ color: '#cbd5e1' }}>{barrio?.nombre}</span>
          </>
        )}
      </nav>

      <Script
        id={`breadcrumb-schema-${tipo}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
