import { barrios } from '@/data/barrios';
import { getZonas } from '@/data/zonas';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import '@/components/Zonas.css';
import { handleLegacyRedirect } from '@/utils/legacyRedirect';
import Resenas from '@/components/Resenas';
import Breadcrumbs from '@/components/Breadcrumbs';
import { barriosSeo } from '@/data/barriosSeo';
import { generarTextoBarrio, generarTextoBarrioSecundario } from '@/utils/generarTextoBarrio';
import { barriosCercanos } from '@/data/barriosCercanos';

export async function generateStaticParams() {
  return barrios.map((b) => ({ slug: b.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const barrio = barrios.find((b) => b.slug === slug);
  
  if (!barrio) return {};

  // Descriptions variadas por hash del nombre
  const dHash = barrio.name.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const descriptions = [
    `Destapaciones en ${barrio.name} con diagnóstico preciso y sin romper. Sonda e hidrojet. 📞 11 5179-7649`,
    `Solucionamos cloacas y cañerías en ${barrio.name} con herramientas profesionales. Visitas en el día. 📞 11 5179-7649`,
    `Servicio de destapaciones en ${barrio.name} para casas y edificios. Trabajo limpio y efectivo. 📞 11 5179-7649`,
    `Destapamos caños, cloacas y pluviales en ${barrio.name}. Presupuesto online y atención inmediata. 📞 11 5179-7649`,
  ];

  const seoTitle = `Destapaciones en ${barrio.name} | Openagua`;
  const seoDescription = descriptions[dHash % descriptions.length];

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: `https://www.destapacionesopenagua.com.ar/barrios/${slug}`
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://www.destapacionesopenagua.com.ar/barrios/${slug}`,
      siteName: 'Openagua',
      locale: 'es_AR',
      type: 'website',
    },
  };
}

export default async function BarrioPage({ params }: Props) {
  const { slug } = await params;
  const barrio = barrios.find((b) => b.slug === slug);
  
  if (!barrio) return handleLegacyRedirect([slug]);

  const zonas = getZonas();
  const parentZone = zonas.find(z => z.slug === barrio.zoneSlug);

  // UNIFICACIÓN TOTAL: EXACTAMENTE 3 BARRIOS CERCANOS (Fuente única de verdad)
  const nearbyFinal = (() => {
    let slugs = [...new Set(barriosCercanos[barrio.slug] || [])];
    
    // 1. Prioridad: Misma zona
    if (slugs.length < 3) {
      const zonaCandidatos = barrios
        .filter(b => b.zoneSlug === barrio.zoneSlug && b.slug !== barrio.slug && !slugs.includes(b.slug))
        .map(b => b.slug);
      slugs = [...slugs, ...zonaCandidatos.slice(0, 3 - slugs.length)];
    }

    // 2. Fallback: Global
    if (slugs.length < 3) {
      const globalCandidatos = barrios
        .filter(b => b.slug !== barrio.slug && !slugs.includes(b.slug))
        .map(b => b.slug);
      slugs = [...slugs, ...globalCandidatos.slice(0, 3 - slugs.length)];
    }

    return slugs.slice(0, 3).map(s => barrios.find(b => b.slug === s)).filter(Boolean);
  })() as typeof barrios;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Openagua Destapaciones ${barrio.name}`,
    "image": "https://destapacionesopenagua.com.ar/logo.svg",
    "telephone": "+5491151797649",
    "url": `https://destapacionesopenagua.com.ar/barrios/${barrio.slug}`,
    "areaServed": {
      "@type": "Place",
      "name": barrio.name
    }
  };

  // Pool de FAQs — se seleccionan 3 por barrio de forma determinista
  const faqPool = [
    {
      q: `¿Cuánto tardan en llegar a ${barrio.name}?`,
      a: `Nuestros móviles recorren la zona permanentemente, por lo que solemos llegar a ${barrio.name} en poco tiempo. Contactanos al 11 5179-7649 con tu dirección para coordinar.`,
      aJsx: <>Nuestros móviles recorren la zona permanentemente, por lo que solemos llegar a {barrio.name} en poco tiempo. Contactanos al 11 5179-7649 con tu dirección para coordinar.</>
    },
    {
      q: `¿Qué máquinas usan para destapar en ${barrio.name}?`,
      a: `Trabajamos con sonda electromecánica para raíces y tapones duros, e Hidrojet de alta presión para grasa y sarro. Todo el equipo es profesional e importado.`,
      aJsx: <>Trabajamos con sonda electromecánica para raíces y tapones duros, e Hidrojet de alta presión para grasa y sarro. Todo el equipo es profesional e importado.</>
    },
    {
      q: `¿Atienden comercios y consorcios en ${barrio.name}?`,
      a: `Sí, realizamos mantenimientos preventivos y destapaciones para cocinas comerciales, clínicas y columnas de edificios en ${barrio.name}. Emitimos factura y garantía.`,
      aJsx: <>Sí, realizamos <Link href="/mantenimientos-preventivos" style={{ color: '#16A34A', textDecoration: 'underline' }}>mantenimientos preventivos</Link> y destapaciones para cocinas comerciales, clínicas y columnas de edificios en {barrio.name}. Emitimos factura y garantía.</>
    },
    {
      q: `¿Se puede hacer una inspección con cámara en ${barrio.name}?`,
      a: `Sí, ofrecemos video inspección de cañerías con cámara CCTV para diagnosticar el estado interno de los caños antes de intervenir.`,
      aJsx: <>Sí, ofrecemos <Link href="/video-inspeccion-canerias" style={{ color: '#16A34A', textDecoration: 'underline' }}>video inspección de cañerías</Link> con cámara CCTV para diagnosticar el estado interno de los caños antes de intervenir.</>
    },
    {
      q: `¿Trabajan los fines de semana en ${barrio.name}?`,
      a: `Atendemos urgencias los 7 días de la semana, incluyendo feriados. Coordinamos por WhatsApp al 11 5179-7649.`,
      aJsx: <>Atendemos urgencias los 7 días de la semana, incluyendo feriados. Coordinamos por WhatsApp al 11 5179-7649.</>
    },
    {
      q: `¿Cuánto cuesta una destapación en ${barrio.name}?`,
      a: `El presupuesto depende del tipo de obstrucción y el acceso. Ofrecemos diagnóstico previo sin cargo y precios competitivos.`,
      aJsx: <>El presupuesto depende del tipo de obstrucción y el acceso. Ofrecemos diagnóstico previo sin cargo y precios competitivos.</>
    },
    {
      q: `¿Hacen mantenimiento preventivo en ${barrio.name}?`,
      a: `Sí, realizamos planes de mantenimiento para consorcios y comercios que buscan evitar emergencias y reducir costos a largo plazo.`,
      aJsx: <>Sí, realizamos planes de <Link href="/mantenimientos-preventivos" style={{ color: '#16A34A', textDecoration: 'underline' }}>mantenimiento preventivo</Link> para consorcios y comercios que buscan evitar emergencias y reducir costos a largo plazo.</>
    },
    {
      q: `¿Destapan pluviales y terrazas en ${barrio.name}?`,
      a: `Por supuesto. Limpiamos bajadas pluviales, canaletas y desagües de terraza para prevenir filtraciones e inundaciones.`,
      aJsx: <>Por supuesto. Realizamos <Link href="/destapaciones-pluviales" style={{ color: '#16A34A', textDecoration: 'underline' }}>destapaciones pluviales</Link>, limpieza de canaletas y desagües de terraza para prevenir filtraciones e inundaciones.</>
    },
  ];

  const faqHash = barrio.name.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const selectedFaqIndices = [
    faqHash % faqPool.length,
    (faqHash + 3) % faqPool.length,
    (faqHash + 5) % faqPool.length,
  ];
  // Ensure no duplicates
  const uniqueIndices = [...new Set(selectedFaqIndices)];
  while (uniqueIndices.length < 3) {
    const next = (uniqueIndices[uniqueIndices.length - 1] + 1) % faqPool.length;
    if (!uniqueIndices.includes(next)) uniqueIndices.push(next);
  }
  const selectedFaqs = uniqueIndices.slice(0, 3).map(i => faqPool[i]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": selectedFaqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const whatsappLink = "https://wa.me/5491151797649?text=Hola%20Openagua%2C%20necesito%20urgente%20un%20presupuesto%20de%20destapacion";

  return (
    <>
      <main className="barrio-page">
        {/* HERO SECTION - UX Focalizada */}
        <header 
          className="barrio-hero"
          style={{ 
            position: 'relative', 
            minHeight: '75vh', 
            display: 'flex', 
            alignItems: 'center', 
            overflow: 'hidden'
          }}
        >
          <Image 
            src="/img/destapacion de cloaca.jpg" 
            alt={`Servicio de destapaciones en ${barrio.name} - Openagua`} 
            fill 
            priority 
            style={{ objectFit: 'cover', zIndex: 0 }} 
            quality={85}
            sizes="100vw"
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.85)', zIndex: 1 }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              {parentZone && <Breadcrumbs tipo="barrio" zona={{ nombre: parentZone.name, slug: parentZone.slug }} barrio={{ nombre: barrio.name, slug: barrio.slug }} />}
            </div>
            <div style={{ display: 'inline-block', backgroundColor: '#f59e0b', color: '#000', padding: '0.5rem 1rem', borderRadius: '30px', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Servicio Activo en tu Zona
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '1rem', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Destapaciones en <span style={{ color: '#16A34A' }}>{barrio.name}</span>
            </h1>
            
            <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, color: '#f8fafc', marginBottom: '2rem' }}>
              📞 11 5179-7649
            </div>
            
            <p className="hero-description" style={{ fontSize: '1.25rem', maxWidth: '700px', color: '#cbd5e1', lineHeight: 1.6 }}>
              Especialistas en desagües tapados. Destapamos caños, bajadas pluviales y cloacas sin romper pisos. Presupuesto previo 100% online y visitas inmediatas a <strong>{barrio.name}</strong>.
              <br /><br />
              En {barrio.name}, es frecuente encontrar problemas de cloacas por acumulación de grasa o cañerías antiguas. También trabajamos en zonas cercanas como {nearbyFinal.map(b => b.name).join(', ')}.
            </p>
            
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary hero-whatsapp-btn" style={{ padding: '1.1rem 3rem', fontSize: '1.25rem', boxShadow: '0 10px 25px -5px rgba(22, 163, 74, 0.5)', transition: 'transform 0.2s', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"></path>
              </svg>
              Contactar por WhatsApp
            </a>
          </div>
        </header>

        <style dangerouslySetInnerHTML={{__html: `
          .service-card {
            display: flex;
            align-items: center;
            background: #ffffff;
            padding: 1.5rem;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            transition: all 0.2s;
            cursor: pointer;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          }
          .service-card:hover {
            border-color: #16A34A;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
            transform: translateY(-2px);
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
          .seo-link {
            color: #16A34A;
            text-decoration: underline;
            font-weight: 600;
          }
          .hero-description {
            margin: 0 auto 2rem auto;
          }
          @media (min-width: 768px) {
            .barrio-hero {
              padding-bottom: 56px;
            }
            .hero-description {
              margin-bottom: 40px;
            }
            .barrio-servicios-grid {
              grid-template-columns: repeat(3, 1fr) !important;
              justify-content: center;
            }
          }
        `}} />

        {/* CONTENIDO SEO LOCAL ÚNICO */}
        {barriosSeo[barrio.slug] && (
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', paddingTop: '4rem', paddingBottom: '0' }}>
            <p style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #16A34A', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, margin: 0 }}>
              {generarTextoBarrio(barrio.name, barriosSeo[barrio.slug], barrio.pois)}
            </p>
          </div>
        )}

        {/* SECTION 1: Problemas Comunes y Contexto Geo */}
        <section className="section bg-light" style={{ padding: '6rem 0', backgroundColor: '#f8fafc' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                  ¿Problemas para destapar caños en {barrio.name}?
                </h2>
                <div style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.8 }}>
                  {(() => {
                    const isComercialRoute = ['destapaciones-palermo', 'destapaciones-recoleta', 'destapaciones-liniers', 'destapaciones-belgrano', 'destapaciones-san-nicolas', 'destapaciones-puerto-madero'].some(c => barrio.slug === c);
                    const isCabaRoute = barrio.zoneSlug === 'caba';
                    const nearbyStr = nearbyFinal.length > 0 ? nearbyFinal.map(b => b.name).join(', ') : 'barrios cercanos';

                    if (isComercialRoute) {
                      return (
                        <>
                          <p style={{ marginBottom: '1.5rem' }}>
                            Trabajamos frecuentemente con comercios y restaurantes de <strong>{barrio.name}</strong>, donde es muy común que las cañerías se tapen por la acumulación constante de grasa y restos de comida diarios.
                          </p>
                          <p style={{ marginBottom: '1.5rem' }}>
                            Sabemos que un negocio no puede perder clientes por problemas de mal olor o desbordes en un baño. Por eso, respondemos rápido y enviamos a nuestros técnicos para destapar las rejillas y dejar todo funcionando impecable.
                          </p>
                          <p style={{ marginBottom: '1.5rem' }}>
                            Como recorremos la zona todos los días, coordinamos visitas en el día y también atendemos casas particulares y departamentos en {nearbyStr}.
                          </p>
                        </>
                      );
                    } else if (isCabaRoute) {
                      return (
                        <>
                          <p style={{ marginBottom: '1.5rem' }}>
                            En <strong>{barrio.name}</strong> solemos trabajar bastante con consorcios y vecinos en edificios antiguos, donde es muy normal que las cañerías viejas se tapen con jabón y sarro.
                          </p>
                          <p style={{ marginBottom: '1.5rem' }}>
                            Atendemos desde inodoros tapados hasta columnas principales de departamentos. Nuestros técnicos hacen el trabajo con mucho cuidado para evitar romper pisos o ensuciar tu casa innecesariamente.
                          </p>
                          <p style={{ marginBottom: '1.5rem' }}>
                            Conocemos muy bien todo el barrio. Una vez solucionado el problema, solemos continuar nuestro recorrido atendiendo zonas cercanas como {nearbyStr}.
                          </p>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <p style={{ marginBottom: '1.5rem' }}>
                            En muchas de las casas y propiedades de <strong>{barrio.name}</strong> es súper común que los caños y desagües se tapen con raíces del jardín o barro y hojas secas.
                          </p>
                          <p style={{ marginBottom: '1.5rem' }}>
                            Pasamos máquinas con resortes y mangueras a presión que cortan el problema de raíz, dejando los pluviales limpios para que el agua de lluvia baje bien y no haya riesgo de inundarse.
                          </p>
                          <p style={{ marginBottom: '1.5rem' }}>
                            Nuestros móviles andan por la zona todos los días, lo que nos permite coordinar la visita en el día y llegar a tu casa rápido. También atendemos zonas cercanas como {nearbyStr}.
                          </p>
                        </>
                      );
                    }
                  })()}
                  <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
                    {[
                      { icon: '🚽', text: `Cloacas tapadas en ${barrio.name}`, link: '/destapaciones-cloacas' },
                      { icon: '🍳', text: 'Limpieza de rejillas e intermedios de cocina', link: '/destapaciones-canerias' },
                      { icon: '🌧️', text: 'Bajadas pluviales y terrazas bloqueadas', link: '/destapaciones-pluviales' }
                    ].map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', fontWeight: 600, color: '#1e293b' }}>
                        <span style={{ fontSize: '1.5rem', marginRight: '1rem', backgroundColor: '#e2e8f0', width: '40px', height: '40px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</span>
                        {item.link ? <Link href={item.link} style={{ color: 'inherit', textDecoration: 'none' }}>{item.text}</Link> : item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', color: '#0f172a', textAlign: 'center' }}>
                  Tecnología Desobstructora que usamos
                </h3>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontWeight: 700, color: '#16A34A', fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    ⚙️ Sonda Rotativa
                  </h4>
                  <p style={{ color: '#64748b', lineHeight: 1.6 }}>Resortes de acero que trituran materia dura y raíces, especiales para diámetros extensos.</p>
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: '#16A34A', fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    💦 Sist. Hidrojet
                  </h4>
                  <p style={{ color: '#64748b', lineHeight: 1.6 }}>Manguera de alta presión radial que desincrusta grasas en muros de las cañerías del hogar o locales comerciales.</p>
                </div>
                
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', marginTop: '3rem', backgroundColor: '#0f172a', color: 'white', padding: '1rem', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
                  Pedir Máquina Hoy
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Interlinking de Servicios Activos */}
        <section className="section" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center', fontWeight: 800 }}>
              ¿Qué destapamos en {barrio.name}?
            </h2>
            <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
              Descubrí nuestro catálogo de soluciones sanitarias diseñado para el área de {barrio.zoneName}.
            </p>
            
            <ul className="barrio-servicios-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
              {[
                { title: `Cloacas en ${barrio.name}`, link: '/destapaciones-cloacas' },
                { title: 'Pluviales y Terrazas', link: '/destapaciones-pluviales' },
                { title: 'Sumideros y Cañerías', link: '/destapaciones-canerias' },
                { title: 'Desengrase con Hidrojet', link: '/destapaciones-hidrojet' },
                { title: 'Filtraciones por Cámara CCTV', link: '/video-inspeccion-canerias' },
                { title: 'Limpieza de Cámaras Sépticas', link: '/limpieza-camaras-septicas' },
                { title: 'Inundaciones en Sótanos', link: '/desagote-sotanos' },
                { title: 'Mantenimiento a Consorcios', link: '/mantenimientos-preventivos' },
              ].map((s) => (
                <li key={s.link} className="service-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '1rem', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <Link href={s.link} style={{ color: '#0f172a', fontWeight: 600, fontSize: '1.1rem', textDecoration: 'none', width: '100%' }}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 3: Geo Interlinking */}
        <section className="section bg-light" style={{ padding: '6rem 0', backgroundColor: '#f8fafc' }}>
          <div className="container">
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center', fontWeight: 800 }}>
              También estamos cerca de {barrio.name}
            </h2>
            <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1.1rem', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
              Nuestras unidades se encuentran distribuidas por la ciudad para responder tu llamada rápidamente en zonas fronterizas.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
              {nearbyFinal.map((b) => (
                <Link href={`/barrios/${b.slug}`} key={b.slug} className="nearby-card">
                  <div style={{ color: '#16A34A', backgroundColor: '#ecfdf5', padding: '12px', borderRadius: '50%' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.15rem', margin: 0, color: '#0f172a', fontWeight: 700 }}>{b.name}</div>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b', marginTop: '2px' }}>Destapaciones en {b.name}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <Link href={`/zonas/${parentZone?.slug}`} style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.1rem', padding: '1rem 2rem', border: '2px solid #0f172a', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.2s', display: 'inline-block' }}>
                Ver mapa completo de coberturas
              </Link>
            </div>
          </div>
        </section>

        <Resenas />

        {/* SEGUNDO BLOQUE SEO DINÁMICO — aumenta ratio contenido único */}
        {barriosSeo[barrio.slug] && (
          <section className="section" style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.3 }}>
                ¿Por qué elegir Openagua en {barrio.name}?
              </h2>
              <div style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>
                <p style={{ margin: 0 }}>
                  {generarTextoBarrioSecundario(barrio.name, barriosSeo[barrio.slug], parentZone?.name)}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: FAQ Optimizada SEO Local */}
        <section className="section" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', fontWeight: 800 }}>
              Preguntas Frecuentes
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {selectedFaqs.map((faq, idx) => (
                <details key={idx} style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', overflow: 'hidden' }}>
                  <summary className="faq-summary" style={{ padding: '1.5rem', fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', cursor: 'pointer', outline: 'none', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {faq.q}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: '1rem' }}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </summary>
                  <div style={{ padding: '0 1.5rem 1.5rem', color: '#475569', lineHeight: 1.7, borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', fontSize: '1.05rem' }}>
                    {faq.aJsx}
                  </div>
                </details>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '5rem' }}>
              <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Tu sistema de fluídos no puede esperar a reventar y dañar tu mobiliario. <strong>Consulta gratis ahora:</strong>
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.2rem', boxShadow: '0 10px 25px -5px rgba(22, 163, 74, 0.5)' }}>
                <span style={{ marginRight: '10px' }}>💬</span> Contactar urgente
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
      <Script
        id={`faq-barrio-${barrio.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
