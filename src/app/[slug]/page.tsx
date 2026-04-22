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

export const dynamic = "force-dynamic";

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

export default async function ServicioPage({ params }: Props) {
  const resolvedParams = await params;
  const servicios = getServicios();
  const servicio = servicios.find((s) => s.slug === resolvedParams.slug);

  // DEBUG LOG (REQUERIDO)
  console.log("SLUG PROD:", resolvedParams.slug);
  console.log("SERVICIO PROD:", servicio);

  if (!servicio) {
    // LOG REQUERIDO SI NO ENCUENTRA RESULTADO
    console.log("LOG: Slug no encontrado:", resolvedParams.slug);
    console.log("LOG: Array servicios disponibles:", servicios.map(s => s.slug));
    
    handleLegacyRedirect([resolvedParams.slug]);
    
    // FALLBACK VISIBLE REQUERIDO
    return (
      <div style={{ color: "red", padding: "4rem", textAlign: "center", minHeight: "60vh" }}>
        <h1>ERROR: servicio no encontrado</h1>
        <p>Slug: {resolvedParams.slug}</p>
        <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>Volver al inicio</Link>
      </div>
    );
  }

  return (
    <main className="servicio-detail-page">
      {/* DEBUG VISIBLE EN PROD (TEMPORAL) */}
      <div style={{ background: 'yellow', color: 'black', padding: '5px', fontSize: '10px', textAlign: 'center' }}>
        DEBUG: Renderizando {resolvedParams.slug} - Encontrado: {servicio ? 'SI' : 'NO'}
      </div>
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

      <div className="container servicio-content" style={{ padding: '4rem 0' }}>
        <section style={{ marginBottom: '4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6 }}>{servicio.intro}</p>
        </section>

        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>{servicio.benefitsTitle}</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 ${servicio.benefits.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8 max-w-6xl mx-auto px-4`}>
            {servicio.benefits.map((b, i) => (
              <div key={i} className="benefit-card" style={{ height: '100%' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#16A34A', textAlign: 'center' }}>✓</div>
                <div style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a', textAlign: 'center', fontWeight: 'bold' }}>{b.title}</div>
                <p style={{ textAlign: 'center' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {servicio.equipment && servicio.equipment.length > 0 && (
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>{servicio.equipmentTitle || 'Equipamiento Técnico'}</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${servicio.equipment.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8 max-w-6xl mx-auto px-4 justify-center`}>
              {servicio.equipment.map((eq, i) => (
                <div key={i} className="benefit-card" style={{ height: '100%', maxWidth: servicio.equipment && servicio.equipment.length < 3 ? '500px' : 'none', margin: '0 auto', width: '100%' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>⚙️</div>
                  <div style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a', textAlign: 'center', fontWeight: 'bold' }}>{eq.title}</div>
                  <p style={{ textAlign: 'center' }}>{eq.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {servicio.steps && servicio.steps.length > 0 && (
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>{servicio.stepsTitle || '¿Cómo Trabajamos?'}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {servicio.steps.map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: '#16A34A', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {s.iconStr ? s.iconStr : i + 1}
                  </div>
                  <div style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a', fontWeight: 'bold' }}>{s.title}</div>
                  <p style={{ color: '#475569', fontSize: '1rem' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section style={{ textAlign: 'center', backgroundColor: '#0F172A', padding: '4rem 2rem', borderRadius: '16px', marginBottom: '5rem' }}>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '2rem' }}>¿Necesitás este servicio?</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '2rem', fontSize: '1.1rem' }}>Evitá mayores daños contactando a nuestros especialistas.</p>
          <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#16A34A', color: 'white', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem', transition: 'transform 0.2s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"></path></svg>
            Consultar por WhatsApp
          </a>
        </section>

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

      </div>
      <Contacto />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": servicio.schemaTitle || servicio.title,
            "description": servicio.excerpt,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Openagua"
            }
          })
        }}
      />
    </main>
  );
}
