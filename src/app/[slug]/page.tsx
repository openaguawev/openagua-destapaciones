import { getServicios } from '@/data/servicios';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import Contacto from '@/components/Contacto';
import { handleLegacyRedirect } from '@/utils/legacyRedirect';
import '../servicio-page.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const servicios = getServicios();
  return servicios.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const servicio = getServicios().find((s) => s.slug === resolvedParams.slug);
  if (!servicio) return { title: 'Servicio no encontrado' };

  return {
    title: `🥇 ${servicio.title} en CABA y GBA | Máquinas de Sonda | Openagua 🏆`,
    description: `✅ ${servicio.title} en CABA y GBA. Solución hoy mismo con máquinas de sonda. Cloacas y pluviales. 📞 Llamanos al 11 5179-7649 o escribinos por WhatsApp. 🏆`,
    alternates: {
      canonical: `https://www.destapacionesopenagua.com.ar/${servicio.slug}`,
    }
  };
}

export default async function ServicioPage({ params }: Props) {
  const resolvedParams = await params;
  const servicio = getServicios().find((s) => s.slug === resolvedParams.slug);
  if (!servicio) notFound();

  const serviceMap: Record<string, string> = {
    'destapaciones-maquinas': 'Destapación de Cañerías',
    'destapaciones-cloacas': 'Destapación de Cloacas',
    'destapaciones-canerias': 'Destapación de Cañerías',
    'destapaciones-pluviales': 'Destapaciones Pluviales',
    'destapaciones-hidrojet': 'Sistema Hidro Jet',
    'video-inspeccion-canerias': 'Video Inspección',
    'limpieza-camaras-septicas': 'Limpieza de Cámaras',
    'desagote-sotanos': 'Desagote de Sótanos',
    'mantenimientos-preventivos': 'Mantenimiento Preventivo',
  };

  return (
    <main className="servicio-detail-page">
      <div className="servicio-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* ... (keep existing code) ... */}
      </div>

      <div className="container servicio-content" style={{ padding: '4rem 0' }}>
        {/* ... (keep existing code) ... */}
      </div>
      <Contacto initialService={serviceMap[servicio.slug] || ''} />
      <Script
        id={`service-schema-${servicio.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `https://www.destapacionesopenagua.com.ar/${servicio.slug}/#service`,
            "name": servicio.schemaTitle || servicio.title,
            "serviceType": "Destapaciones Técnicas",
            "description": servicio.excerpt,
            "provider": {
              "@id": "https://www.destapacionesopenagua.com.ar/#localbusiness"
            },
            "areaServed": [
              { "@type": "City", "name": "Ciudad Autónoma de Buenos Aires" },
              { "@type": "AdministrativeArea", "name": "Zona Norte" },
              { "@type": "AdministrativeArea", "name": "Zona Oeste" },
              { "@type": "AdministrativeArea", "name": "Zona Sur" }
            ]
          })
        }}
      />
      {servicio.faqs && servicio.faqs.length > 0 && (
        <Script
          id={`faq-schema-${servicio.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": servicio.faqs.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a
                }
              }))
            })
          }}
        />
      )}
    </main>
  );
}
