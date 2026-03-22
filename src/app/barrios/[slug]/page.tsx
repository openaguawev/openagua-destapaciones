import { barrios } from '@/data/barrios';
import { getZonas } from '@/data/zonas';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import '@/components/Zonas.css';
import { handleLegacyRedirect } from '@/utils/legacyRedirect';

export async function generateStaticParams() {
  return barrios.map((b) => ({ slug: b.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const barrio = barrios.find((b) => b.slug === slug);
  
  if (!barrio) return {};

  const descriptionTemplates = [
    `${barrio.name}: Soluciones profesionales en destapaciones de cloacas y cañerías. Empresa familiar con experiencia técnica garantizada.`,
    `${barrio.name}: Expertos en destapaciones y limpieza profunda de cañerías. Servicio especializado con modernas máquinas. Consultá sin cargo.`,
    `${barrio.name}: Servicio especializado en destapaciones con hidrojet y máquinas de sonda. Resolvemos el problema de forma profesional.`,
    `${barrio.name}: Limpieza profunda y desobstrucción de cañerías. Técnicos expertos dedicados a brindarte la mejor solución.`
  ];
  const templateIndex = slug.length % descriptionTemplates.length;

  return {
    title: `🥇 Destapaciones en ${barrio.name} | Máquinas de Sonda | Openagua 🏆`,
    description: `✅ Destapaciones en ${barrio.name}. Solución hoy mismo con máquinas de sonda. Cloacas y pluviales. 📞 Llamanos al 11 5179-7649 o escribinos por WhatsApp. 🏆`,
    alternates: {
      canonical: `https://www.destapacionesopenagua.com.ar/barrios/${slug}`
    }
  };
}

export default async function BarrioPage({ params }: Props) {
  const { slug } = await params;
  const barrio = barrios.find((b) => b.slug === slug);
  
  if (!barrio) return handleLegacyRedirect([slug]);

  const zonas = getZonas();
  const parentZone = zonas.find(z => z.slug === barrio.zoneSlug);

  const nearbyBarrios = barrio.nearby.map(name => barrios.find(b => b.name === name)).filter(Boolean) as typeof barrios;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Openagua Destapaciones",
    "image": "https://openagua.com.ar/logo.svg",
    "telephone": "+5491151797649",
    "url": `https://openagua.com.ar/barrios/${barrio.slug}`,
    "areaServed": {
      "@type": "Place",
      "name": barrio.name
    }
  };

  const whatsappLink = "https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto";

  return (
    <>
      <main className="barrio-page">
        {/* HERO SECTION */}
        <header 
          style={{ 
            position: 'relative', 
            minHeight: '65vh', 
            display: 'flex', 
            alignItems: 'center', 
            paddingTop: '80px',
            backgroundImage: 'url(https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            padding: '4rem 0'
          }}
        >
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.75)' }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, marginBottom: '1.5rem', color: '#fff', lineHeight: 1.2 }}>
              Destapaciones en {barrio.name} | Openagua
            </h1>
            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2.5rem', color: '#e2e8f0', lineHeight: 1.6 }}>
              Servicio profesional de destapaciones en {barrio.name}. Cloacas, cañerías e hidrojet. Atención de 8 a 19 hs.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              <span style={{ marginRight: '8px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" style={{ verticalAlign: 'middle', marginTop: '-2px' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"></path>
                </svg>
              </span>
              Consultar por WhatsApp
            </a>
          </div>
        </header>

        {/* SECTION 1: Intro */}
        <section className="section bg-light" style={{ padding: '6rem 0' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2.5rem' }}>Especialistas en la zona de {barrio.name}</h2>
            <div style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Si estás buscando una empresa de confianza para realizar <strong>destapaciones en {barrio.name}</strong>, en Openagua contamos con técnicos especializados listos para asistirte. Entendemos la urgencia que requiere una obstrucción cloacal o de cañerías, por eso brindamos una respuesta rápida en todo <strong>{barrio.name}</strong> y alrededores.
              </p>
              <p>
                Nuestra meta es ofrecer soluciones sustentables. Utilizamos tecnología avanzada como máquinas de sonda rotativa y modernos sistemas de hidrojet de alta presión para garantizar un trabajo impecable y sin roturas innecesarias en tu propiedad ubicada en <strong>{barrio.name}</strong>.
              </p>
            </div>
          </div>
        </section>

        <style dangerouslySetInnerHTML={{__html: `
          .service-card {
            display: flex;
            align-items: center;
            background: #f8fafc;
            padding: 1.5rem;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            transition: all 0.2s;
            cursor: pointer;
          }
          .service-card:hover {
            border-color: #16A34A;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
          .nearby-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 24px;
            display: flex;
            align-items: center;
            gap: 16px;
            text-decoration: none;
            color: inherit;
            transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          }
          .nearby-card:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
            border-color: #16A34A;
          }
          .faq-summary::-webkit-details-marker {
            display: none;
          }
        `}} />

        {/* SECTION 2: Servicios */}
        <section className="section" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>Servicios que realizamos en {barrio.name}</h2>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
              {[
                { title: 'Destapación de Cloacas', link: '/destapaciones-cloacas' },
                { title: 'Destapaciones de Cañerías', link: '/destapaciones-canerias' },
                { title: 'Destapaciones Pluviales', link: '/destapaciones-pluviales' },
                { title: 'Destapaciones con Hidrojet', link: '/destapaciones-hidrojet' },
                { title: 'Video Inspección de Cañerías', link: '/video-inspeccion-canerias' },
                { title: 'Limpieza de Cámaras Sépticas', link: '/limpieza-camaras-septicas' },
                { title: 'Desagote de Sótanos', link: '/desagote-sotanos' },
                { title: 'Mantenimientos Preventivos', link: '/mantenimientos-preventivos' },
              ].map((s) => (
                <li key={s.link} className="service-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '1rem', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <Link href={s.link} style={{ color: '#0f172a', fontWeight: 600, fontSize: '1.1rem', textDecoration: 'none', width: '100%' }}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                <span style={{ marginRight: '8px' }}>💬</span> Pedir presupuesto en {barrio.name}
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 3: Barrios Cercanos */}
        <section className="section bg-light" style={{ padding: '6rem 0' }}>
          <div className="container">
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>Zonas de cobertura cercanas a {barrio.name}</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {nearbyBarrios.map((b) => (
                <Link href={`/barrios/${b.slug}`} key={b.slug} className="nearby-card">
                  <div style={{ color: '#16A34A' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.15rem', margin: 0, color: '#0f172a', fontWeight: 'bold' }}>{b.name}</div>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>Destapaciones en {b.name}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href={`/zonas/${parentZone?.slug}`} style={{ color: '#16A34A', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'underline' }}>
                Ver toda la cobertura en {barrio.zoneName}
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: FAQ (Accordion) */}
        <section className="section" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>Preguntas Frecuentes en {barrio.name}</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  q: `¿Cuánto tardan en llegar a ${barrio.name}?`,
                  a: `Al tener unidades móviles distribuidas estratégicamente, solemos llegar a ${barrio.name} en muy poco tiempo tras coordinar la visita. Consultá disponibilidad inmediata por WhatsApp.`
                },
                {
                  q: `¿El presupuesto en ${barrio.name} tiene algún costo?`,
                  a: `Brindamos un presupuesto preliminar sin cargo y muy preciso directamente por WhatsApp si nos enviás detalles o fotos del problema. Trabajamos con tarifas de mercado claras y planas.`
                },
                {
                  q: `¿Atienden consorcios y administraciones en ${barrio.name}?`,
                  a: `Totalmente. Trabajamos de manera formal con comercios y consorcios de edificios en ${barrio.name}, ofreciendo planes de mantenimiento mensual, abonos y limpieza preventiva de columnas.`
                }
              ].map((faq, idx) => (
                <details key={idx} style={{ background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                  <summary className="faq-summary" style={{ padding: '1.5rem 1.5rem', fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', cursor: 'pointer', outline: 'none', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {faq.q}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: '1rem' }}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </summary>
                  <div style={{ padding: '0 1.5rem 1.5rem', color: '#475569', lineHeight: 1.6, borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                <span style={{ marginRight: '8px' }}>💬</span> Contactar urgente a un técnico
              </a>
            </div>
          </div>
        </section>
      </main>

      <Script
        id={`schema-barrio-${barrio.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
