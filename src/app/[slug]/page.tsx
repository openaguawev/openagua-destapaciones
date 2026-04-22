import { getServicios } from '@/data/servicios';
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import Contacto from '@/components/Contacto';
import { handleLegacyRedirect } from '@/utils/legacyRedirect';
import '../servicio-page.css';

interface Props {
  params: Promise<{ slug: string }>;
}

// Fase 2: Performance - Volver a auto
export const dynamic = "auto";

export async function generateStaticParams() {
  const servicios = getServicios();
  return servicios.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const servicio = getServicios().find((s) => s.slug === resolvedParams.slug);
  
  if (!servicio) {
    return { title: 'Servicio no encontrado | Openagua' };
  }

  return {
    title: `🥇 ${servicio.title} en CABA y GBA | Máquinas de Sonda | Openagua 🏆`,
    description: `✅ ${servicio.title} en CABA y GBA. Solución hoy mismo con máquinas de sonda. Cloacas y pluviales. 📞 Llamanos al 11 5179-7649 o escribinos por WhatsApp. 🏆`,
    alternates: {
      canonical: `https://www.destapacionesopenagua.com.ar/${servicio.slug}`,
    }
  };
}

const serviceMap: Record<string, string> = {
  'destapaciones-cloacas': 'Destapación de Cloacas',
  'destapaciones-canerias': 'Destapación de Cañerías',
  'destapaciones-pluviales': 'Destapaciones Pluviales',
  'destapaciones-hidrojet': 'Sistema Hidro Jet',
  'video-inspeccion-canerias': 'Video Inspección',
  'limpieza-camaras-septicas': 'Limpieza de Cámaras',
  'desagote-sotanos': 'Desagote de Sótanos',
  'mantenimientos-preventivos': 'Mantenimiento Preventivo',
  'destapaciones-maquinas': 'Destapación con Máquinas'
};

export default async function ServicioPage({ params }: Props) {
  const resolvedParams = await params;
  const servicios = getServicios();
  
  // Fase 2: Fallback seguro
  const servicio = servicios.find((s) => s.slug === resolvedParams.slug) || servicios[0];

  if (!servicio && resolvedParams.slug !== servicios[0].slug) {
    handleLegacyRedirect([resolvedParams.slug]);
  }

  return (
    <main className="servicio-detail-page">
      {/* Hero Section */}
      <div className="servicio-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <Image 
          src={servicio.image} 
          alt={servicio.imageAlt || `${servicio.title} en CABA y GBA - Openagua`} 
          fill 
          priority 
          sizes="100vw"
          style={{ objectFit: 'cover', zIndex: 0 }} 
          quality={85}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75))', zIndex: 1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/#servicios" className="back-link-servicio">← Volver a Servicios</Link>
          <h1 className="hero-title">{servicio.title}</h1>
          <p className="servicio-hero-desc" style={{ marginTop: '1rem' }}>{servicio.excerpt}</p>
        </div>
      </div>

      {/* Fase 5: Bloque de confianza */}
      <div style={{ backgroundColor: '#F1F5F9', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', padding: '1.5rem 1rem' }}>
          {[
            { icon: '🚀', text: 'Atención en menos de 60 min' },
            { icon: '🏆', text: 'Más de 5000 servicios realizados' },
            { icon: '🛡️', text: 'Sin romper cañerías ni pisos' },
            { icon: '✅', text: 'Garantía real por escrito' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              <span style={{ fontWeight: '600', color: '#0F172A', fontSize: '0.9rem' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container servicio-content" style={{ padding: '4rem 0', maxWidth: '1200px' }}>
        {/* Intro Section */}
        <section style={{ marginBottom: '4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6 }}>{servicio.intro}</p>
        </section>

        {/* Problemas Comunes (NUEVO) */}
        {servicio.problemasComunes && (
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Problemas frecuentes que resolvemos</h2>
            <div className="benefits-grid">
              {servicio.problemasComunes.map((p, i) => (
                <div key={i} className="benefit-card" style={{ borderLeft: '4px solid #EF4444' }}>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: '#B91C1C' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.95rem' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>{servicio.benefitsTitle}</h2>
          <div className="benefits-grid">
            {servicio.benefits.map((b, i) => (
              <div key={i} className="benefit-card">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#16A34A', textAlign: 'center' }}>✓</div>
                <div style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a', textAlign: 'center', fontWeight: 'bold' }}>{b.title}</div>
                <p style={{ textAlign: 'center' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cómo Trabajamos (NUEVO / MEJORADO) */}
        {servicio.comoTrabajamos && (
          <section style={{ marginBottom: '5rem', backgroundColor: '#F8FAFC', padding: '4rem 2rem', borderRadius: '16px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Nuestro proceso de trabajo</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {servicio.comoTrabajamos.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '2.5rem', lineHeight: '1' }}>{step.icon || (i + 1)}</div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p style={{ color: '#475569', fontSize: '0.95rem' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Equipamiento Técnico */}
        {servicio.equipment && servicio.equipment.length > 0 && (
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>{servicio.equipmentTitle || 'Equipamiento Técnico'}</h2>
            <div className="benefits-grid" style={{ justifyContent: 'center' }}>
              {servicio.equipment.map((eq, i) => (
                <div key={i} className="benefit-card" style={{ maxWidth: servicio.equipment && servicio.equipment.length < 3 ? '500px' : 'none', margin: '0 auto', width: '100%' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>⚙️</div>
                  <div style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a', textAlign: 'center', fontWeight: 'bold' }}>{eq.title}</div>
                  <p style={{ textAlign: 'center' }}>{eq.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tipos de Destapación (NUEVO) */}
        {servicio.tiposDeDestapacion && (
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Tipos de servicios especializados</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {servicio.tiposDeDestapacion.map((t, i) => (
                <div key={i} style={{ padding: '1.5rem', border: '1px dashed #CBD5E1', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0F172A' }}>{t.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748B' }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Zonas de Cobertura (NUEVO) */}
        {servicio.zonas && (
          <section style={{ marginBottom: '5rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Zonas de cobertura inmediata</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              {servicio.zonas.map((z, i) => (
                <span key={i} style={{ backgroundColor: '#E2E8F0', color: '#475569', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>
                  📍 {z}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Casos Reales (NUEVO) */}
        {servicio.casosReales && (
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Resultados recientes</h2>
            <div className="benefits-grid">
              {servicio.casosReales.map((c, i) => (
                <div key={i} style={{ padding: '2rem', backgroundColor: '#F1F5F9', borderRadius: '12px', fontStyle: 'italic' }}>
                  <p style={{ marginBottom: '1rem', color: '#334155' }}>"{c.desc}"</p>
                  <p style={{ fontWeight: 'bold', color: '#16A34A', fontStyle: 'normal' }}>- {c.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* WhatsApp CTA Section */}
        <section style={{ textAlign: 'center', backgroundColor: '#0F172A', padding: '4rem 2rem', borderRadius: '16px', marginBottom: '5rem' }}>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '2rem' }}>¿Necesitás una solución ahora?</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '2rem', fontSize: '1.1rem' }}>Atención inmediata 24hs. No cobramos por visita en CABA.</p>
          <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#16A34A', color: 'white', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem', transition: 'transform 0.2s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"></path></svg>
            Consultar por WhatsApp
          </a>
        </section>

        {/* FAQs Section */}
        <section style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Preguntas Frecuentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {servicio.faqs.map((f, i) => (
              <details key={i} style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <summary style={{ fontWeight: 'bold', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', color: '#0f172a', fontSize: '1.1rem' }}>
                  {f.q}
                  <span style={{ color: '#16A34A' }}>▼</span>
                </summary>
                <p style={{ marginTop: '1rem', color: '#475569', lineHeight: 1.6 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Fase 5: CTA extra antes del formulario */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>¿Listo para empezar?</h3>
          <p style={{ color: '#64748B' }}>Completá el formulario debajo y te contactaremos en minutos.</p>
        </div>

      </div>

      <Contacto initialService={serviceMap[servicio.slug] || ''} />

      <Script
        id={`service-schema-${servicio.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": servicio.schemaTitle || servicio.title,
            "description": servicio.excerpt,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Openagua",
              "url": "https://www.destapacionesopenagua.com.ar",
              "logo": "https://www.destapacionesopenagua.com.ar/logo.svg",
              "image": "https://www.destapacionesopenagua.com.ar/img/home.jpg",
              "telephone": "+5491151797649"
            }
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
