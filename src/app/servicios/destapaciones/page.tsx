import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import Contacto from '@/components/Contacto';
import '@/app/servicio-page.css';

export const metadata: Metadata = {
  title: '🥇 Servicio de Destapaciones en CABA y GBA | Máquinas de Sonda | Openagua 🏆',
  description: '✅ Expertos en destapaciones de cloacas, cañerías y pluviales en CABA y GBA. Solución con máquinas de sonda e hidrojet. 📞 Llamanos al 11 5179-7649.',
  alternates: {
    canonical: 'https://www.destapacionesopenagua.com.ar/servicios/destapaciones',
  }
};

export default function DestapacionesHubPage() {
  const whatsappLink = "https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20servicio%20de%20destapaciones";

  return (
    <main className="servicio-detail-page">
      <div className="servicio-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <Image 
          src="/img/destapacion de cloaca.jpg" 
          alt="Servicio de Destapaciones en CABA y GBA - Openagua" 
          fill 
          priority 
          style={{ objectFit: 'cover', zIndex: 0 }} 
          quality={85}
          sizes="100vw"
        />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75))', zIndex: 1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/#servicios" className="back-link-servicio">← Volver a Servicios</Link>
          <h1 className="hero-title">Servicio Profesional de Destapaciones</h1>
          <p className="servicio-hero-desc" style={{ marginTop: '1rem' }}>
            Soluciones definitivas para cloacas, cañerías, y pluviales. Respuesta inmediata en CABA y toda el Área Metropolitana.
          </p>
        </div>
      </div>

      <div className="container servicio-content" style={{ padding: '4rem 0' }}>
        <section style={{ marginBottom: '4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6 }}>
            Si tenés un problema de obstrucción, en Openagua contamos con maquinarias de última generación como sondas electromecánicas e hidrojet de alta presión para destapar cualquier caño sin romper paredes ni pisos. Atendemos hogares, comercios e industrias.
          </p>
        </section>

        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Nuestros Servicios Especializados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            
            <div className="benefit-card" style={{ height: '100%' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#16A34A', textAlign: 'center' }}>🚽</div>
              <div style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a', textAlign: 'center', fontWeight: 'bold' }}>Cloacas</div>
              <p style={{ textAlign: 'center' }}>Eliminamos papel, paños y tapones duros que obstruyen las cámaras de inspección y redes principales.</p>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Link href="/destapaciones-cloacas" style={{ color: '#16A34A', fontWeight: 'bold' }}>Ver Más →</Link>
              </div>
            </div>

            <div className="benefit-card" style={{ height: '100%' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#16A34A', textAlign: 'center' }}>🚰</div>
              <div style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a', textAlign: 'center', fontWeight: 'bold' }}>Cañerías</div>
              <p style={{ textAlign: 'center' }}>Destapamos desagües de cocinas, lavatorios y piletas eliminando grasa adherida a las tuberías.</p>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Link href="/destapaciones-canerias" style={{ color: '#16A34A', fontWeight: 'bold' }}>Ver Más →</Link>
              </div>
            </div>

            <div className="benefit-card" style={{ height: '100%' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#16A34A', textAlign: 'center' }}>🌧️</div>
              <div style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#0f172a', textAlign: 'center', fontWeight: 'bold' }}>Pluviales</div>
              <p style={{ textAlign: 'center' }}>Limpieza profunda de canaletas, rejillas, y bajadas para prevenir inundaciones por lluvia.</p>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Link href="/destapaciones-pluviales" style={{ color: '#16A34A', fontWeight: 'bold' }}>Ver Más →</Link>
              </div>
            </div>

          </div>
        </section>

        <section style={{ textAlign: 'center', backgroundColor: '#0F172A', padding: '4rem 2rem', borderRadius: '16px', marginBottom: '5rem' }}>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '2rem' }}>¿Problemas Urgentes?</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '2rem', fontSize: '1.1rem' }}>Evitá mayores daños contactando a nuestros especialistas. Presupuestos sin cargo.</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#16A34A', color: 'white', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem', transition: 'transform 0.2s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"></path></svg>
            Consultar por WhatsApp
          </a>
        </section>

      </div>
      <Contacto />
      <Script
        id="hub-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Servicio Profesional de Destapaciones en CABA y GBA",
            "description": "Soluciones definitivas para cloacas, cañerías, y pluviales. Respuesta inmediata de Openagua.",
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
