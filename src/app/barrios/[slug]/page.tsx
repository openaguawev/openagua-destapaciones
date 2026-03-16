import { barrios } from '@/data/barrios';
import { getZonas } from '@/data/zonas';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import FloatingButtons from '@/components/FloatingButtons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/components/Zonas.css';

export async function generateStaticParams() {
  return barrios.map((b) => ({ slug: b.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const barrio = barrios.find((b) => b.slug === slug);
  
  if (!barrio) return {};

  return {
    title: `Destapaciones en ${barrio.name}, ${barrio.zoneName} | Openagua`,
    description: `Servicio profesional de destapaciones en ${barrio.name}. Cloacas, cañerías e hidrojet. Atención de 8 a 19 hs. Consultá sin cargo.`,
  };
}

export default async function BarrioPage({ params }: Props) {
  const { slug } = await params;
  const barrio = barrios.find((b) => b.slug === slug);
  
  if (!barrio) return notFound();

  const zonas = getZonas();
  const parentZone = zonas.find(z => z.slug === barrio.zoneSlug);

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

  return (
    <>
      <Navbar />
      <main className="zona-page">
        <header className="zona-header">
          <div className="zona-overlay"></div>
          <div className="container zona-header-content">
            <h1>Destapaciones en {barrio.name} | Openagua</h1>
            <p>Servicio profesional y rápido en tu barrio. Soluciones definitivas para hogares, consorcios y comercios.</p>
            <a href="https://wa.me/5491151797649" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '2rem' }}>
              Consultar por WhatsApp
            </a>
          </div>
        </header>

        <section className="section">
          <div className="container">
            <div className="zona-content">
              <h2>Especialistas en la zona de {barrio.name}</h2>
              <p>
                Si estás buscando una empresa de confianza para realizar <strong>destapaciones en {barrio.name}</strong>, en Openagua contamos con técnicos especializados listos para asistirte. Entendemos la urgencia que requiere una obstrucción cloacal o de cañerías, por eso brindamos una respuesta rápida en todo <strong>{barrio.name}</strong> y alrededores.
              </p>
              <p>
                Utilizamos tecnología de punta como máquinas de sonda rotativa y sistemas de hidrojet de alta presión para garantizar un trabajo impecable y sin roturas innecesarias en tu propiedad en {barrio.name}.
              </p>

              <h2 style={{ marginTop: '3rem' }}>Servicios que realizamos en {barrio.name}</h2>
              <ul className="zona-services-list">
                <li><Link href="/destapaciones-cloacas">Destapación de Cloacas</Link></li>
                <li><Link href="/destapaciones-canerias">Destapaciones de Cañerías</Link></li>
                <li><Link href="/destapaciones-pluviales">Destapaciones Pluviales</Link></li>
                <li><Link href="/sistema-hidrojets">Sistema Hidro Jet</Link></li>
                <li><Link href="/video-inspeccion">Video Inspección Cloacal</Link></li>
                <li><Link href="/limpieza-camaras">Limpieza de Cámaras</Link></li>
                <li><Link href="/desagotes">Desagote de Sótanos</Link></li>
                <li><Link href="/mantenimiento-preventivo">Mantenimiento Preventivo</Link></li>
              </ul>

              <h2 style={{ marginTop: '3rem' }}>Zona de cobertura cercana a {barrio.name}</h2>
              <p>
                Además de operar intensivamente en {barrio.name}, nuestros equipos móviles se desplazan rápidamente por localidades vecinas como {barrio.nearby.join(', ')}. 
                Formamos parte de la red de atención de la <strong>{barrio.zoneName}</strong>. 
                <br /><br />
                <Link href={`/zonas/${barrio.zoneSlug}`} style={{ color: 'var(--color-cta-green)', fontWeight: 'bold' }}>
                  → Ver cobertura completa en {barrio.zoneName}
                </Link>
              </p>

              <h2 style={{ marginTop: '3rem' }}>Preguntas Frecuentes en {barrio.name}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0f172a' }}>¿Cuánto tardan en llegar a {barrio.name}?</h3>
                  <p style={{ color: '#475569', margin: 0 }}>Al tener unidades móviles distribuidas estratégicamente, solemos llegar a {barrio.name} en poco tiempo tras coordinar la visita. Consultá disponibilidad por WhatsApp.</p>
                </div>
                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0f172a' }}>¿El presupuesto tiene costo en {barrio.name}?</h3>
                  <p style={{ color: '#475569', margin: 0 }}>Podemos brindarte un presupuesto preliminar sin cargo vía WhatsApp si nos detallás el problema. Si es necesario ir a tu domicilio en {barrio.name} a evaluar, te informaremos previamente.</p>
                </div>
                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0f172a' }}>¿Atienden urgencias en edificios de {barrio.name}?</h3>
                  <p style={{ color: '#475569', margin: 0 }}>Sí, trabajamos con consorcios y administraciones de consorcios en {barrio.name}, emitiendo presupuestos formales para la reparación de columnas de desagüe y colectoras.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-light" style={{ padding: '4rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>¿Tenés una urgencia ahora mismo?</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '600px', margin: '1rem auto 2rem' }}>
              Atendemos tu consulta por WhatsApp de forma inmediata. Estamos listos para resolver tu problema en {barrio.name}.
            </p>
            <a href="https://wa.me/5491151797649" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Consultar por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />

      <Script
        id={`schema-barrio-${barrio.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
