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

  const keyword = servicio.title.toLowerCase().includes('cloaca') ? 'destapaciones de cloacas' : servicio.title;

  return {
    title: `🥇 ${servicio.title} en CABA y GBA | ${keyword} | Openagua 🏆`,
    description: `✅ ${servicio.excerpt} 📞 Solución rápida sin romper. Atención 24hs en CABA y Zona Oeste. Llamanos al 11 5179-7649.`,
    alternates: {
      canonical: `https://www.destapacionesopenagua.com.ar/${servicio.slug}`,
    }
  };
}

// Helper para Interlinking SEO
const InterlinkText = ({ text }: { text: string }) => {
  const links = [
    { keyword: 'destapaciones con hidrojet', slug: 'destapaciones-hidrojet' },
    { keyword: 'video inspección de cañerías', slug: 'video-inspeccion-canerias' },
    { keyword: 'destapaciones de cañerías', slug: 'destapaciones-canerias' },
    { keyword: 'limpieza de cámaras sépticas', slug: 'limpieza-camaras-septicas' },
    { keyword: 'destapaciones pluviales', slug: 'destapaciones-pluviales' },
    { keyword: 'destapaciones de cloacas', slug: 'destapaciones-cloacas' },
  ];

  let parts: (string | React.ReactNode)[] = [text];

  links.forEach(({ keyword, slug }) => {
    const newParts: (string | React.ReactNode)[] = [];
    parts.forEach(part => {
      if (typeof part === 'string') {
        const regex = new RegExp(`(${keyword})`, 'gi');
        const subParts = part.split(regex);
        subParts.forEach((subPart, i) => {
          if (subPart.toLowerCase() === keyword.toLowerCase()) {
            newParts.push(
              <Link 
                key={`${subPart}-${i}-${slug}`} 
                href={`/${slug}`} 
                style={{ color: '#16A34A', fontWeight: '600', textDecoration: 'underline', textDecorationColor: '#16A34A' }}
              >
                {subPart}
              </Link>
            );
          } else if (subPart !== '') {
            newParts.push(subPart);
          }
        });
      } else {
        newParts.push(part);
      }
    });
    parts = newParts;
  });

  return <>{parts}</>;
};

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
  const foundServicio = servicios.find((s) => s.slug === resolvedParams.slug);
  const servicio = foundServicio || servicios[0];

  if (!foundServicio) {
    handleLegacyRedirect([resolvedParams.slug]);
  }

  return (
    <main className="servicio-detail-page">
      {/* 1. HERO (ALTO IMPACTO) */}
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
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.85))', zIndex: 1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '0 1rem' }}>
          <Link href="/#servicios" className="back-link-servicio">← Volver a Servicios</Link>
          <h1 className="hero-title">{servicio.title}</h1>
          <p className="servicio-hero-desc" style={{ marginBottom: '2.5rem' }}>{servicio.excerpt}</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a 
              href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20tengo%20una%20urgencia%20y%20necesito%20presupuesto" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="animate-fade-in-up"
              style={{ 
                backgroundColor: '#16A34A', 
                color: 'white', 
                padding: '1.25rem 2.5rem', 
                borderRadius: '12px', 
                fontWeight: 'bold', 
                fontSize: '1.1rem', 
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 10px 15px -3px rgba(22, 163, 74, 0.3)'
              }}
            >
              🚀 Respuesta Inmediata por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { icon: '🕒', text: 'Atención en menos de 60 min' },
            { icon: '🛡️', text: 'Sin romper cañerías ni pisos' },
            { icon: '⭐', text: 'Garantía real por escrito' }
          ].map((item, i) => (
            <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{item.icon}</span>
              <span style={{ fontWeight: '600', color: '#334155' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
        
        {/* 2. INTRO (PROBLEMA REAL) */}
        <section className="animate-fade-in-up" style={{ marginBottom: '6rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto 6rem auto' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', fontWeight: '800' }}>No dejes que una cloaca tapada arruine tu día</h2>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.8 }}>
            <InterlinkText text={servicio.intro} />
          </p>
        </section>

        {/* 3. PROBLEMAS FRECUENTES */}
        {servicio.problemasComunes && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3.5rem', fontSize: '2rem', fontWeight: '800' }}>Problemas frecuentes que resolvemos</h2>
            <div className="benefits-grid">
              {servicio.problemasComunes.map((p, i) => (
                <div key={i} className="benefit-card">
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1e293b', fontWeight: 'bold' }}>{p.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '1rem' }}>
                    <InterlinkText text={p.desc} />
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. CÓMO TRABAJAMOS */}
        {servicio.comoTrabajamos && (
          <section style={{ marginBottom: '6rem', backgroundColor: '#F1F5F9', padding: '5rem 2rem', borderRadius: '32px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2rem', fontWeight: '800' }}>Solución en 4 simples pasos</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem' }}>
              {servicio.comoTrabajamos.map((step, i) => (
                <div key={i} className="step-item" style={{ border: 'none', paddingLeft: '0' }}>
                  <div style={{ width: '64px', height: '64px', backgroundColor: '#ffffff', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}>
                    {step.icon || (i + 1)}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: '700' }}>{step.title}</h3>
                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.6' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. BENEFICIOS (VENTA) */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3.5rem', fontSize: '2rem', fontWeight: '800' }}>{servicio.benefitsTitle}</h2>
          <div className="benefits-grid">
            {servicio.benefits.map((b, i) => (
              <div key={i} className="benefit-card">
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#16A34A' }}>✅</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a', fontWeight: 'bold' }}>{b.title}</h3>
                <p style={{ color: '#64748b', fontSize: '1rem' }}>
                   <InterlinkText text={b.desc} />
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. EQUIPAMIENTO */}
        {servicio.equipment && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3.5rem', fontSize: '2rem', fontWeight: '800' }}>Tecnología de última generación</h2>
            <div className="benefits-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
              {servicio.equipment.map((eq, i) => (
                <div key={i} className="benefit-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '3rem' }}>⚙️</div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>{eq.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{eq.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. ZONAS DE COBERTURA (SEO LOCAL) */}
        {servicio.zonas && (
          <section className="animate-fade-in-up" style={{ marginBottom: '6rem', textAlign: 'center', padding: '4rem 2rem', border: '1px solid #e2e8f0', borderRadius: '24px' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: '800' }}>Zonas de atención inmediata</h2>
            <p style={{ marginBottom: '2.5rem', color: '#64748b', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
              Realizamos servicios de <strong>destapaciones de cloacas</strong> y pluviales en toda la Capital Federal y GBA Oeste. Llegamos rápido a:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {servicio.zonas.map((z, i) => (
                <span key={i} style={{ backgroundColor: '#ffffff', color: '#0F172A', border: '1px solid #cbd5e1', padding: '0.6rem 1.25rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '600' }}>
                  📍 {z}
                </span>
              ))}
            </div>
            <p style={{ marginTop: '2.5rem', fontSize: '1.1rem', color: '#475569' }}>
              Si estás en Morón, Ituzaingó, Ramos Mejía o Castelar, consultá disponibilidad ahora.
            </p>
          </section>
        )}

        {/* 8. CASO REAL */}
        {servicio.casosReales && (
          <section style={{ marginBottom: '6rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3.5rem', fontSize: '2rem', fontWeight: '800' }}>Confianza respaldada por resultados</h2>
            <div className="benefits-grid">
              {servicio.casosReales.map((c, i) => (
                <div key={i} style={{ padding: '2.5rem', backgroundColor: '#F8FAFC', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                  <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#334155', marginBottom: '1.5rem', lineHeight: '1.6' }}>"{c.desc}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: '#16A34A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                      {c.title.charAt(0)}
                    </div>
                    <span style={{ fontWeight: '700', color: '#0F172A' }}>{c.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 9. FAQ (SEO) */}
        <section style={{ maxWidth: '850px', margin: '0 auto 6rem auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3.5rem', fontSize: '2rem', fontWeight: '800' }}>Preguntas frecuentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {servicio.faqs.map((f, i) => (
              <details key={i} style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <summary style={{ fontWeight: '700', color: '#0f172a', fontSize: '1.1rem', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {f.q}
                  <span style={{ color: '#16A34A' }}>▼</span>
                </summary>
                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: '#475569', lineHeight: 1.7 }}>
                   <InterlinkText text={f.a} />
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 10. CTA FINAL */}
        <section className="animate-fade-in-up" style={{ textAlign: 'center', backgroundColor: '#0F172A', padding: '5rem 2rem', borderRadius: '32px', color: '#ffffff' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>¿Necesitás una solución ahora?</h2>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            No esperes a que el problema empeore. Atendemos urgencias las 24 horas en CABA y Zona Oeste.
          </p>
          <a 
            href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20tengo%20una%20urgencia%20y%20necesito%20presupuesto" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px', 
              backgroundColor: '#16A34A', 
              color: 'white', 
              padding: '1.25rem 3rem', 
              borderRadius: '14px', 
              fontWeight: '800', 
              fontSize: '1.2rem', 
              textDecoration: 'none',
              transition: 'transform 0.2s',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          >
            ✅ Pedir Presupuesto WhatsApp
          </a>
          <p style={{ marginTop: '2rem', color: '#64748b', fontSize: '0.9rem' }}>Atención inmediata • Sin compromiso • Garantía por escrito</p>
        </section>

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
              "telephone": "+5491151797649",
              "areaServed": servicio.zonas || ["CABA", "Zona Oeste"],
              "priceRange": "$$"
            }
          })
        }}
      />
    </main>
  );
}
