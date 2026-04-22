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

  return {
    title: `🥇 ${servicio.title} en CABA y GBA | Máquinas de Sonda | Openagua 🏆`,
    description: `✅ ${servicio.title} en CABA y GBA. Solución rápida hoy mismo sin romper. 📞 Llamanos al 11 5179-7649.`,
    alternates: {
      canonical: `https://www.destapacionesopenagua.com.ar/${servicio.slug}`,
    }
  };
}

// Interlinking manual controlado (Máximo 2-3 links por página)
const renderTextWithLinks = (text: string, slug: string) => {
  const links = [
    { kw: 'video inspección de cañerías', to: 'video-inspeccion-canerias' },
    { kw: 'destapaciones con hidrojet', to: 'destapaciones-hidrojet' },
    { kw: 'destapaciones de cañerías', to: 'destapaciones-canerias' },
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
      {/* Hero Section */}
      <div className="servicio-hero">
        <Image 
          src={servicio.image} 
          alt={servicio.imageAlt || `${servicio.title} - Openagua`} 
          fill 
          priority 
          sizes="100vw"
          style={{ objectFit: 'cover', zIndex: 0 }} 
          quality={85}
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <Link href="/#servicios" className="back-link-servicio">← Volver a Servicios</Link>
          <h1 className="hero-title">{servicio.title}</h1>
          <p className="servicio-hero-desc">{servicio.excerpt}</p>
        </div>
      </div>

      <div className="container servicio-content">
        {/* Intro */}
        <section className="intro-section compact">
          <p>{renderTextWithLinks(servicio.intro, servicio.slug)}</p>
          <div className="section-divider" />
        </section>

        {/* Problemas frecuentes */}
        {servicio.problemasComunes && (
          <section className="section-block compact">
            <h2 className="section-title">Problemas frecuentes que resolvemos</h2>
            <div className="benefits-grid compact">
              {servicio.problemasComunes.map((p, i) => (
                <div key={i} className="benefit-card small">
                  <h3 className="benefit-title">{p.title}</h3>
                  <p style={{ fontSize: '0.95rem' }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#64748b', fontSize: '0.9rem', fontStyle: 'italic' }}>
              Actuar a tiempo evita daños mayores en su propiedad.
            </p>
          </section>
        )}

        {/* Beneficios */}
        <section className="section-block compact">
          <h2 className="section-title">{servicio.benefitsTitle}</h2>
          <div className="benefits-grid">
            {servicio.benefits.map((b, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon">✅</div>
                <h3 className="benefit-title">{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Equipamiento */}
        {servicio.equipment && servicio.equipment.length > 0 && (
          <section className="section-block compact">
            <h2 className="section-title">{servicio.equipmentTitle || 'Equipamiento Técnico'}</h2>
            <div className="benefits-grid">
              {servicio.equipment.map((eq, i) => (
                <div key={i} className="benefit-card">
                  <div className="benefit-icon">⚙️</div>
                  <h3 className="benefit-title">{eq.title}</h3>
                  <p>{eq.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pasos */}
        {servicio.steps && servicio.steps.length > 0 && (
          <section className="section-block compact">
            <h2 className="section-title">{servicio.stepsTitle || '¿Cómo Trabajamos?'}</h2>
            <div className="steps-grid">
              {servicio.steps.map((s, i) => (
                <div key={i} className="step-card">
                  <div className="step-number">{s.iconStr || i + 1}</div>
                  <h3 className="benefit-title">{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ZONAS DE COBERTURA: Expansión SEO Local */}
        <section className="section-block compact">
          <p style={{ textAlign: 'center', marginBottom: '1rem', color: '#475569', fontWeight: '500' }}>
            También trabajamos en distintas zonas del Gran Buenos Aires con atención inmediata y soluciones en el día.
          </p>
          <h2 className="section-title">Zonas de Cobertura</h2>
          <div className="benefits-grid">
            {/* CABA */}
            <div className="benefit-card">
              <div className="benefit-icon">📍</div>
              <h3 className="benefit-title">CABA</h3>
              <p>Servicio rápido y garantizado en todos los barrios de Capital Federal. Especialistas en edificios, consorcios y PH porteños.</p>
            </div>
            {/* ZONA OESTE */}
            <div className="benefit-card">
              <div className="benefit-icon">📍</div>
              <h3 className="benefit-title">Zona Oeste</h3>
              <p>Atendemos en Morón, Ituzaingó, Ramos Mejía, Castelar y alrededores. Destapaciones con máquina de sonda y limpieza con hidrojet.</p>
            </div>
            {/* ZONA NORTE */}
            <div className="benefit-card">
              <div className="benefit-icon">📍</div>
              <h3 className="benefit-title">Zona Norte</h3>
              <p>
                Atención rápida en Zona Norte, incluyendo <Link href="/barrios/destapaciones-san-isidro" style={{ textDecoration: 'underline', color: 'inherit' }}>San Isidro</Link>, <Link href="/barrios/destapaciones-vicente-lopez" style={{ textDecoration: 'underline', color: 'inherit' }}>Vicente López</Link>, Tigre y alrededores. Servicios urgentes y programados.
              </p>
            </div>
            {/* ZONA SUR */}
            <div className="benefit-card">
              <div className="benefit-icon">📍</div>
              <h3 className="benefit-title">Zona Sur</h3>
              <p>
                Cobertura en Zona Sur como <Link href="/barrios/destapaciones-lanus" style={{ textDecoration: 'underline', color: 'inherit' }}>Lanús</Link>, <Link href="/barrios/destapaciones-lomas-de-zamora" style={{ textDecoration: 'underline', color: 'inherit' }}>Lomas de Zamora</Link>, Avellaneda y <Link href="/barrios/destapaciones-quilmes" style={{ textDecoration: 'underline', color: 'inherit' }}>Quilmes</Link>. Llegamos en el día con soluciones definitivas.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/#zonas" className="ver-todas-zonas">Ver todas las zonas donde trabajamos →</Link>
          </div>
        </section>

        {/* CTA OPTIMIZADO */}
        <section className="cta-block compact-top">
          <span className="cta-badge">Urgencias 24hs</span>
          <h2 className="cta-title">¿Necesitás una solución urgente?</h2>
          <p className="cta-desc">Resolución inmediata por WhatsApp. Atendemos emergencias hoy mismo.</p>
          <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20necesito%20resolver%20una%20urgencia%20ahora" target="_blank" rel="noopener noreferrer" className="cta-button">
            Escribinos ahora y lo resolvemos hoy
          </a>
        </section>

        {/* FAQ */}
        <section className="section-block compact">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <div className="faq-list">
            {servicio.faqs.map((f, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-summary">
                  {f.q}
                  <span className="faq-arrow">▼</span>
                </summary>
                <div className="faq-answer">
                   <p>{renderTextWithLinks(f.a, servicio.slug)}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA con Microcopy */}
        <div className="final-cta">
          <h3>¿Listo para empezar?</h3>
          <p style={{ color: '#16a34a', fontWeight: '700', marginBottom: '0.5rem' }}>Te respondemos en minutos. Sin compromiso.</p>
          <p>Completá el formulario debajo y te contactaremos de inmediato.</p>
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
              "name": "Openagua"
            }
          })
        }}
      />
    </main>
  );
}
