import { getZonas } from '@/data/zonas';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import '../zonas.css';
import Contacto from '@/components/Contacto';
import Servicios from '@/components/Servicios';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const zonas = getZonas();
  return zonas.map((z) => ({
    slug: z.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const zona = getZonas().find((z) => z.slug === params.slug);
  if (!zona) return { title: 'Zona no encontrada' };

  return {
    title: `Destapaciones en ${zona.name} | Openagua`,
    description: `Servicio profesional de destapaciones en ${zona.name} y todos sus barrios: ${zona.barrios.slice(0, 5).join(', ')}... Diagnóstico preciso.`,
    alternates: {
      canonical: `https://www.openagua.com.ar/zonas/${zona.slug}`,
    }
  };
}

export default function ZonaPage({ params }: Props) {
  const zona = getZonas().find((z) => z.slug === params.slug);
  
  if (!zona) {
    notFound();
  }

  return (
    <main className="zona-page">
      <div className="zona-hero">
        <div className="container">
          <Link href="/#zonas" className="back-link-zona">← Volver al mapa de zonas</Link>
          <h1>Destapaciones profesionales en {zona.name}</h1>
          <p className="zona-subtitle">{zona.description}</p>
        </div>
      </div>
      
      <div className="container zona-content">
        <h2>Barrios con cobertura en {zona.name}</h2>
        <div className="barrios-grid">
          {zona.barrios.map((barrio, idx) => (
            <div key={idx} className="barrio-chip">
              📍 {barrio}
            </div>
          ))}
        </div>
      </div>

      <Servicios />
      <Contacto />
    </main>
  );
}
