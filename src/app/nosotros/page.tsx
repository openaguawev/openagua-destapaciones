import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import Contacto from '@/components/Contacto';
import '../servicio-page.css';

export const metadata: Metadata = {
  title: "Quiénes Somos | Openagua Destapaciones",
  description: "Conocé a Emmanuel y el equipo de Openagua. 12 años destapando cloacas y cañerías en CABA y GBA con honestidad y trabajo bien hecho.",
  alternates: {
    canonical: 'https://www.destapacionesopenagua.com.ar/nosotros',
  },
};

export default function NosotrosPage() {
  const whatsappLink = `https://wa.me/5491151797649?text=${encodeURIComponent('Hola Openagua, los encontré en la web y quiero consultar un servicio.')}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Quiénes somos - Openagua Destapaciones",
    "url": "https://www.destapacionesopenagua.com.ar/nosotros",
    "description": "Historia y equipo de Openagua Destapaciones",
    "mainEntity": {
      "@id": "https://www.destapacionesopenagua.com.ar/#business"
    }
  };

  return (
    <main className="servicio-detail-page">
      {/* Hero Section */}
      <div className="servicio-hero">
        <Image 
          src="/img/home.jpg" 
          alt="Equipo de Openagua Destapaciones" 
          fill 
          priority 
          sizes="100vw"
          style={{ objectFit: 'cover', zIndex: 0 }} 
          quality={85}
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <Link href="/" className="back-link-servicio">← Volver al Inicio</Link>
          <h1 className="hero-title">Quiénes somos</h1>
          <p className="servicio-hero-desc">Un equipo pequeño, honesto y con más de 12 años de experiencia en destapaciones en CABA y GBA.</p>
        </div>
      </div>

      <div className="container servicio-content">
        {/* Historia */}
        <section className="section-block">
          <h2 className="section-title">La historia de Openagua</h2>
          <div className="seo-text-block" style={{ textAlign: 'left', maxWidth: '800px' }}>
            <p>
              Openagua nació hace más de 12 años cuando Emmanuel, su fundador, decidió armar su propio servicio de destapaciones en la Zona Oeste del Gran Buenos Aires. Lo que empezó siendo un proyecto entre dos amigos se convirtió con el tiempo en un negocio propio, construido trabajo a trabajo, cliente a cliente.
            </p>
            <p>
              Hoy Openagua opera con un equipo reducido y comprometido. Trabajamos con Emmanuel a la cabeza y un empleado de confianza. Somos pocos, pero eso nos permite estar encima de cada trabajo, sin delegar la calidad en nadie.
            </p>
          </div>
          <div className="section-divider" />
        </section>

        {/* Filosofía */}
        <section className="section-block">
          <h2 className="section-title">Cómo trabajamos</h2>
          <div className="seo-text-block" style={{ textAlign: 'left', maxWidth: '800px' }}>
            <p>
              No somos una empresa grande con call center y técnicos anónimos. Cuando llamás a Openagua, hablás directamente con quien va a resolver tu problema.
            </p>
            <p>
              Trabajamos con equipos profesionales — sonda rotativa, hidrojet y cámara de video inspección — pero lo más importante es la honestidad. Antes de empezar cualquier trabajo te decimos exactamente qué tiene el caño, qué hace falta hacer y cuánto va a costar. Sin sorpresas al final.
            </p>
            <p>
              Si el trabajo se complica, te avisamos antes de continuar. Si el problema es menor de lo esperado, también te lo decimos aunque eso signifique cobrar menos.
            </p>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="section-block compact">
          <h2 className="section-title">Por qué los clientes nos eligen</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⏳</div>
              <h3 className="benefit-title">12 años de experiencia</h3>
              <p>Más de una década resolviendo problemas cloacales en CABA y GBA.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👤</div>
              <h3 className="benefit-title">Trato directo</h3>
              <p>Hablás con quien resuelve el problema, no con un intermediario.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3 className="benefit-title">Presupuesto antes de empezar</h3>
              <p>Nunca arrancamos sin que sepas exactamente cuánto vas a pagar.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⭐</div>
              <h3 className="benefit-title">Más de 330 clientes satisfechos</h3>
              <p>Más de 330 reseñas en Google con 4.9 estrellas avalan nuestro trabajo.</p>
            </div>
          </div>
        </section>

        {/* Cobertura */}
        <section className="section-block">
          <h2 className="section-title">Dónde trabajamos</h2>
          <div className="seo-text-block" style={{ textAlign: 'left', maxWidth: '800px' }}>
            <p>
              Operamos desde Ciudadela, en el corazón de la Zona Oeste. Desde ahí cubrimos CABA completa, Zona Oeste (Ramos Mejía, Morón, Castelar, Ituzaingó, Hurlingham), Zona Norte (San Isidro, Vicente López, Olivos) y Zona Sur (Avellaneda, Lanús, Lomas de Zamora).
            </p>
            <p>
              Nuestro tiempo de respuesta promedio en Zona Oeste es de 20 a 45 minutos. En CABA y otras zonas coordinamos el turno más cercano disponible.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta-block compact-top">
          <h2 className="cta-title">¿Necesitás una destapación?</h2>
          <p className="cta-desc">Contactanos directamente. Te atendemos nosotros mismos.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button" style={{ backgroundColor: '#16a34a' }}>
              WhatsApp
            </a>
            <a href="tel:+5491151797649" className="cta-button" style={{ backgroundColor: '#2563eb' }}>
              Llamar ahora
            </a>
          </div>
        </section>
      </div>

      <Contacto initialService="Consulta General" />

      <Script
        id="schema-nosotros"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </main>
  );
}
