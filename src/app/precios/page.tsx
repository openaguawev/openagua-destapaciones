import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import Contacto from '@/components/Contacto';
import '../servicio-page.css';

export const metadata: Metadata = {
  title: 'Precios de Destapaciones en CABA y GBA | Openagua',
  description: '¿Cuánto cuesta destapar una cloaca en Buenos Aires? Precios orientativos por servicio. Presupuesto sin cargo. Sin sorpresas.',
  alternates: {
    canonical: 'https://www.destapacionesopenagua.com.ar/precios',
  },
};

export default function PreciosPage() {
  return (
    <main className="servicio-detail-page">
      {/* HERO */}
      <div className="servicio-hero">
        <Image 
          src="/img/home.jpg" 
          alt="Precios de destapaciones" 
          fill 
          priority 
          sizes="100vw"
          style={{ objectFit: 'cover', zIndex: 0 }} 
          quality={85}
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <Link href="/" className="back-link-servicio">← Volver al Inicio</Link>
          <h1 className="hero-title">Precios de Destapaciones en CABA y GBA</h1>
          <p className="servicio-hero-desc">
            Trabajamos con precio fijo por tipo de servicio. Te damos el presupuesto antes de empezar. Lo que acordamos es lo que pagás.
          </p>
        </div>
      </div>

      <div className="container servicio-content">
        {/* TABLA DE PRECIOS */}
        <section className="section-block compact" style={{ paddingBottom: '6rem' }}>
          <p style={{ textAlign: 'center', marginBottom: '2rem', fontStyle: 'italic', color: '#64748b' }}>
            Precios orientativos en pesos argentinos. Pueden variar según complejidad y accesibilidad del trabajo.
          </p>
          
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', backgroundColor: '#fff' }}>
              <thead>
                <tr style={{ backgroundColor: '#0f172a', color: 'white' }}>
                  <th style={{ padding: '1.25rem 1rem', borderBottom: '3px solid #16A34A', whiteSpace: 'nowrap' }}>Servicio</th>
                  <th style={{ padding: '1.25rem 1rem', borderBottom: '3px solid #16A34A' }}>Detalle</th>
                  <th style={{ padding: '1.25rem 1rem', borderBottom: '3px solid #16A34A', whiteSpace: 'nowrap' }}>Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>Destapación de inodoro</td>
                  <td style={{ padding: '1rem', color: '#475569' }}>Solo el artefacto</td>
                  <td style={{ padding: '1rem', fontWeight: 700, color: '#15803D' }}>Desde $150.000</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>Destapación rejilla / cocina / baño</td>
                  <td style={{ padding: '1rem', color: '#475569' }}>Tramo interno</td>
                  <td style={{ padding: '1rem', fontWeight: 700, color: '#15803D' }}>Desde $95.000</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>Destapación pluvial</td>
                  <td style={{ padding: '1rem', color: '#475569' }}>Hasta 20m horizontal</td>
                  <td style={{ padding: '1rem', fontWeight: 700, color: '#15803D' }}>Desde $180.000</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>Video inspección</td>
                  <td style={{ padding: '1rem', color: '#475569' }}>Con cámara HD</td>
                  <td style={{ padding: '1rem', fontWeight: 700, color: '#15803D' }}>Desde $150.000</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>Destapación de cloaca</td>
                  <td style={{ padding: '1rem', color: '#475569' }}>Hasta 20m colectora</td>
                  <td style={{ padding: '1rem', fontWeight: 700, color: '#15803D' }}>Desde $180.000</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>Destapación columna edificio</td>
                  <td style={{ padding: '1rem', color: '#475569' }}>Hasta 20m</td>
                  <td style={{ padding: '1rem', fontWeight: 700, color: '#15803D' }}>Desde $250.000</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>Desagote de sótanos</td>
                  <td style={{ padding: '1rem', color: '#475569' }}>Según volumen</td>
                  <td style={{ padding: '1rem', fontWeight: 700, color: '#15803D' }}>A coordinar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#475569' }}>
            Si al iniciar el trabajo encontramos mayor complejidad, te avisamos antes de continuar y acordamos el precio. Nunca cobramos de más sin consultarte primero.
          </p>
        </section>

        {/* DIFERENCIADOR Y QUÉ INCLUYE */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <section className="benefit-card">
            <h2 className="benefit-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Cobramos por trabajo, no por metro</h2>
            <p>
              Cobramos un precio fijo por el trabajo realizado, no por cada metro de sonda ingresado. Sabés exactamente cuánto vas a pagar antes de que empecemos.
            </p>
          </section>

          <section className="benefit-card">
            <h2 className="benefit-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Lo que incluye cada servicio</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>✅ Diagnóstico inicial sin cargo</li>
              <li style={{ marginBottom: '0.5rem' }}>✅ Presupuesto claro antes de empezar</li>
              <li style={{ marginBottom: '0.5rem' }}>✅ Equipos profesionales (sonda, hidrojet, cámara)</li>
              <li style={{ marginBottom: '0.5rem' }}>✅ Limpieza del área al terminar</li>
              <li>✅ Factura por el servicio realizado</li>
            </ul>
          </section>
        </div>

        {/* MEDIOS DE PAGO */}
        <section className="section-block compact" style={{ textAlign: 'center', backgroundColor: '#f8fafc', padding: '3rem 2rem', borderRadius: '16px' }}>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>Formas de pago</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', color: '#334155', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', minWidth: '160px', flex: '1 1 160px' }}>
              💵 Efectivo
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', color: '#334155', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', minWidth: '160px', flex: '1 1 160px' }}>
              🏦 Transferencia
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', color: '#334155', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', minWidth: '160px', flex: '1 1 160px' }}>
              💳 Tarjetas
            </div>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#64748b' }}>Visa, Mastercard y American Express.</p>
        </section>

        {/* FAQ */}
        <section className="section-block compact">
          <h2 className="section-title">Preguntas frecuentes sobre precios</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-summary">
                ¿El diagnóstico tiene costo?
                <span className="faq-arrow">▼</span>
              </summary>
              <div className="faq-answer">
                 <p>No. El diagnóstico inicial es sin cargo. Te damos el presupuesto antes de empezar y vos decidís si continuamos.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                ¿Qué pasa si el trabajo se complica?
                <span className="faq-arrow">▼</span>
              </summary>
              <div className="faq-answer">
                 <p>Si encontramos mayor complejidad al iniciar, te avisamos antes de continuar y acordamos el nuevo precio. Nunca avanzamos sin tu aprobación.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                ¿Hay recargo por zona?
                <span className="faq-arrow">▼</span>
              </summary>
              <div className="faq-answer">
                 <p>No cobramos adicional por zona dentro de nuestra cobertura en CABA y GBA.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                ¿Aceptan tarjetas de crédito?
                <span className="faq-arrow">▼</span>
              </summary>
              <div className="faq-answer">
                 <p>Sí, aceptamos Visa, Mastercard y American Express, además de efectivo y transferencia bancaria.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                ¿Dan factura?
                <span className="faq-arrow">▼</span>
              </summary>
              <div className="faq-answer">
                 <p>Sí, emitimos factura por cada servicio realizado.</p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-block compact-top">
          <h2 className="cta-title">¿Querés saber el precio exacto para tu caso?</h2>
          <p className="cta-desc">Consultanos sin cargo, te respondemos en minutos.</p>
          <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"></path>
            </svg>
            Consultar por WhatsApp
          </a>
        </section>
      </div>

      <Contacto />

      <Script
        id="schema-precios-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿El diagnóstico tiene costo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. El diagnóstico inicial es sin cargo. Te damos el presupuesto antes de empezar y vos decidís si continuamos."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué pasa si el trabajo se complica?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Si encontramos mayor complejidad al iniciar, te avisamos antes de continuar y acordamos el nuevo precio. Nunca avanzamos sin tu aprobación."
                }
              },
              {
                "@type": "Question",
                "name": "¿Hay recargo por zona?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No cobramos adicional por zona dentro de nuestra cobertura en CABA y GBA."
                }
              },
              {
                "@type": "Question",
                "name": "¿Aceptan tarjetas de crédito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, aceptamos Visa, Mastercard y American Express, además de efectivo y transferencia bancaria."
                }
              },
              {
                "@type": "Question",
                "name": "¿Dan factura?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, emitimos factura por cada servicio realizado."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
