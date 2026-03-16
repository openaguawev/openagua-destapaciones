import { getServicios } from '@/data/servicios';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Contacto from '@/components/Contacto';
import '../servicio-page.css';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const servicios = getServicios();
  return servicios.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const servicio = getServicios().find((s) => s.slug === params.slug);
  if (!servicio) return { title: 'Servicio no encontrado' };

  return {
    title: `${servicio.title} en CABA y GBA | Openagua`,
    description: servicio.excerpt,
    alternates: {
      canonical: `https://www.openagua.com.ar/${servicio.slug}`,
    }
  };
}

export default function ServicioPage({ params }: Props) {
  const servicio = getServicios().find((s) => s.slug === params.slug);
  
  if (!servicio) {
    notFound();
  }

  return (
    <main className="servicio-detail-page">
      <div className="servicio-hero" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url(${servicio.image})` }}>
        <div className="container">
          <Link href="/#servicios" className="back-link-servicio">← Volver a Servicios</Link>
          <h1>{servicio.title}</h1>
          <p className="servicio-hero-desc">{servicio.excerpt}</p>
        </div>
      </div>
      
      <div className="container servicio-content">
        <article className="servicio-body" dangerouslySetInnerHTML={{ __html: servicio.content }} />
      </div>

      <Contacto />
    </main>
  );
}
