import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import Contacto from '@/components/Contacto';
import '../servicio-page.css';

export const metadata: Metadata = {
  title: 'Destapaciones Urgentes en CABA y GBA | Openagua',
  description: '¿Cloaca rebalsando o inundación? Llamanos al 11 5179-7649. Atendemos consultas a cualquier hora y coordinamos solución para el primer turno disponible.',
  alternates: {
    canonical: 'https://www.destapacionesopenagua.com.ar/urgencias',
  },
};

export default function UrgenciasPage() {
  return (
    <main className="servicio-detail-page">
      {/* HERO */}
      <div className="servicio-hero">
        <Image 
          src="/img/home.jpg" 
          alt="Destapaciones Urgentes" 
          fill 
          priority 
          sizes="100vw"
          style={{ objectFit: 'cover', zIndex: 0 }} 
          quality={85}
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <Link href="/" className="back-link-servicio">← Volver al Inicio</Link>
          <h1 className="hero-title">Destapaciones Urgentes en CABA y GBA</h1>
          <p className="servicio-hero-desc">
            ¿Cloaca rebalsando? ¿Inundación en el sótano? Llamanos ahora. Atendemos consultas a cualquier hora y coordinamos la solución para el primer turno disponible.
          </p>
          <div className="hero-ctas" style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/5491151797649" target="_blank" rel="noopener noreferrer" className="btn-primary hero-btn" style={{ margin: 0 }}>
              Consultar por WhatsApp
            </a>
            <a href="tel:+5491151797649" className="btn-outline hero-btn" style={{ margin: 0, borderColor: '#2563EB', color: '#fff', backgroundColor: '#2563EB' }}>
              Llamar ahora
            </a>
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <span className="cta-badge" style={{ display: 'inline-block' }}>Lunes a Viernes 8-19hs | Sábados 8-13hs</span>
            <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Fuera de horario coordinamos tu turno para la primera salida disponible</span>
          </div>
        </div>
      </div>

      <div className="container servicio-content">
        {/* SITUACIONES URGENTES */}
        <section className="section-block compact">
          <h2 className="section-title">Situaciones que no pueden esperar</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚨</div>
              <h3 className="benefit-title">Inodoro rebalsando</h3>
              <p>Agua sucia desbordando.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚨</div>
              <h3 className="benefit-title">Cloaca tapada en edificio</h3>
              <p>Afecta múltiples pisos.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚨</div>
              <h3 className="benefit-title">Sótano inundado</h3>
              <p>Agua acumulada sin salida.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚨</div>
              <h3 className="benefit-title">Olor a gas cloacal</h3>
              <p>Gases tóxicos en el ambiente.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚨</div>
              <h3 className="benefit-title">Rejilla del patio desbordando</h3>
              <p>Riesgo de inundación.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚨</div>
              <h3 className="benefit-title">Pileta de cocina sin drenar</h3>
              <p>Imposible usar la cocina.</p>
            </div>
          </div>
        </section>

        {/* PASOS */}
        <section className="section-block compact">
          <h2 className="section-title">Cómo coordinamos tu urgencia</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="benefit-title">Llamanos o escribinos</h3>
              <p>Describí el problema.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="benefit-title">Te confirmamos tiempo estimado</h3>
              <p>Según tu zona.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="benefit-title">Resolvemos con equipos profesionales</h3>
              <p>Hidrojet o sonda según necesidad.</p>
            </div>
          </div>
        </section>

        {/* ZONAS */}
        <section className="section-block compact" style={{ paddingBottom: '3rem' }}>
          <h2 className="section-title">Llegamos rápido a toda la zona</h2>
          <p style={{ textAlign: 'center', lineHeight: '1.8' }}>
            <strong>CABA completa</strong> | <strong>Zona Oeste:</strong> Ramos Mejía, Morón, Castelar, Ituzaingó, Hurlingham | <strong>Zona Norte:</strong> San Isidro, Vicente López, Olivos, Martínez | <strong>Zona Sur:</strong> Avellaneda, Lanús, Lomas de Zamora
          </p>
        </section>

        {/* SERVICIOS RELACIONADOS — Interlinking SEO */}
        <section className="section-block compact" style={{ paddingBottom: '3rem' }}>
          <h2 className="section-title">Nuestros servicios de urgencia</h2>
          <div className="benefits-grid">
            <Link href="/destapaciones-cloacas" className="benefit-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="benefit-icon">🚽</div>
              <h3 className="benefit-title">Destapación de Cloacas</h3>
              <p>Cloacas tapadas o rebalsando</p>
            </Link>
            <Link href="/destapaciones-canerias" className="benefit-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="benefit-icon">🔧</div>
              <h3 className="benefit-title">Destapación de Cañerías</h3>
              <p>Cocina, baño y lavadero</p>
            </Link>
            <Link href="/destapaciones-hidrojet" className="benefit-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="benefit-icon">💦</div>
              <h3 className="benefit-title">Destapación con Hidrojet</h3>
              <p>Limpieza profunda de cañerías</p>
            </Link>
            <Link href="/video-inspeccion-canerias" className="benefit-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="benefit-icon">📷</div>
              <h3 className="benefit-title">Video Inspección</h3>
              <p>Diagnóstico sin romper pisos</p>
            </Link>
            <Link href="/desagote-sotanos" className="benefit-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="benefit-icon">🏚️</div>
              <h3 className="benefit-title">Desagote de Sótanos</h3>
              <p>Extracción de agua con bombas</p>
            </Link>
          </div>
        </section>
      </div>

      <Contacto />


      <Script
        id="schema-urgencias"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Destapaciones Urgentes CABA y GBA",
            "provider": {
              "@id": "https://www.destapacionesopenagua.com.ar/#business"
            },
            "areaServed": "Buenos Aires, Argentina",
            "availableChannel": {
              "@type": "ServiceChannel",
              "servicePhone": "+54-9-11-5179-7649"
            }
          })
        }}
      />
    </main>
  );
}
