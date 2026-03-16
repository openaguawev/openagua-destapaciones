import { getZonas } from '@/data/zonas';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import '../zonas.css';
import Contacto from '@/components/Contacto';
import Servicios from '@/components/Servicios';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const zonas = getZonas();
  return zonas.map((z) => ({
    slug: z.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const zona = getZonas().find((z) => z.slug === resolvedParams.slug);
  if (!zona) return { title: 'Zona no encontrada' };

  return {
    title: `Destapaciones en ${zona.name} | Openagua`,
    description: `Servicio profesional de destapaciones en ${zona.name} y todos sus barrios: ${zona.barrios.slice(0, 5).join(', ')}... Diagnóstico preciso.`,
    alternates: {
      canonical: `https://www.openagua.com.ar/zonas/${zona.slug}`,
    }
  };
}

export default async function ZonaPage({ params }: Props) {
  const resolvedParams = await params;
  const zona = getZonas().find((z) => z.slug === resolvedParams.slug);
  
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

        <div className="zona-seo-content" style={{ marginTop: '40px', lineHeight: '1.8', color: '#334155' }}>
          <h2>Servicio Profesional de Destapaciones en {zona.name}</h2>
          <p>
            En <strong>Openagua Destapaciones</strong> entendemos que una urgencia sanitaria no puede esperar. Es por eso que contamos con móviles estratégicamente ubicados para brindar asistencia rápida a hogares, comercios y consorcios de <strong>{zona.name}</strong>. Nuestro servicio abarca todas las localidades importantes de la región, incluyendo <strong>{zona.barrios.join(', ')}</strong>.
          </p>

          <h2>Soluciones con Tecnología de Vanguardia</h2>
          <p>
            Dependiendo de si tu propiedad pertenece a una zona residencial antigua o a nuevos desarrollos en {zona.name}, los problemas de cañerías varían radicalmente. Desde la intromisión de raíces en casas con jardines amplios hasta la acumulación de sarro y grasa en edificios de alta densidad. Utilizamos <strong>Video Inspección computarizada</strong> y maquinaria <strong>Hidrojet de alta presión</strong> para resolver obstrucciones severas sin necesidad de romper pisos o paredes.
          </p>

          <h2>Prevención y Mantenimiento en {zona.name}</h2>
          <p>
            No esperes a que tu red cloacal o pluvial colapse para tomar medidas. Ofrecemos abonos preventivos diseñados a medida para administradores de consorcios y establecimientos comerciales en toda la zona de {zona.name}, garantizando el libre escurrimiento de las instalaciones sanitarias los 365 días del año.
          </p>
        </div>

        <div className="article-cta" style={{ marginTop: '50px', padding: '40px', background: '#16A34A', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
          <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '1.5rem' }}>¿Problemas de cañerías tapadas en {zona.name}?</h3>
          <p style={{ color: 'white', marginBottom: '25px', fontSize: '1.1rem' }}>No pierdas más tiempo. Solucionamos tu urgencia de destapación hoy mismo. Presupuestos transparentes antes de comenzar.</p>
          <a href="https://wa.me/5491151797649" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '15px 30px', background: 'white', color: '#16A34A', fontWeight: 'bold', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem' }}>
            Consultar por WhatsApp ahora
          </a>
        </div>
      </div>

      <Servicios />
      <Contacto />
    </main>
  );
}
