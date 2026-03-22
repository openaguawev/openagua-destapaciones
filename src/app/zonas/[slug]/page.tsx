import { getZonas } from '@/data/zonas'
import { barrios } from '@/data/barrios'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import '@/components/Zonas.css'
import { handleLegacyRedirect } from '@/utils/legacyRedirect'

export async function generateStaticParams() {
  const zonas = getZonas()
  return zonas.map((zona) => ({ slug: zona.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const zonas = getZonas()
  const zona = zonas.find((z) => z.slug === slug)
  if (!zona) return { title: 'Zona no encontrada' }

  return {
    title: `🥇 Destapaciones en ${zona.name} | Máquinas de Sonda | Openagua 🏆`,
    description: `✅ Destapaciones en ${zona.name}. Solución hoy mismo con máquinas de sonda. Cloacas y pluviales. 📞 Llamanos al 11 5179-7649 o escribinos por WhatsApp. 🏆`,
    alternates: {
      canonical: `https://www.destapacionesopenagua.com.ar/zonas/${slug}`,
    }
  }
}

type Props = { params: Promise<{ slug: string }> }

export default async function ZonaPage({ params }: Props) {
  const { slug } = await params
  const zonas = getZonas()
  const zona = zonas.find((z) => z.slug === slug)
  
  if (!zona) return handleLegacyRedirect([slug])
  
  const barriosZona = barrios.filter((b) => b.zoneSlug === slug)

  // CSS Grid en línea para mantenerlo in situ, o clases si preferimos.
  // Usaremos un estilo embebido por simplicidad y exactitud a los breakpoints pedidos (3, 2, 1).
  const gridStyle = {
    display: 'grid',
    gap: '24px',
    marginTop: '3rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  };

  return (
    <main className="zona-page">
      <header 
        style={{ 
          position: 'relative', 
          minHeight: '50vh', 
          display: 'flex', 
          alignItems: 'center', 
          paddingTop: '80px',
          backgroundImage: 'url(https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          padding: '4rem 0'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.80)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Destapaciones en {zona.name}</h1>
          <p style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '700px', margin: '0 auto 2rem' }}>
            {zona.description}
          </p>
          <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            <span className="icon" style={{ display: 'flex', marginRight: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" style={{ verticalAlign: 'middle', marginTop: '-2px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"></path>
              </svg>
            </span>
            Consultar por WhatsApp
          </a>
        </div>
      </header>

      <section className="section" style={{ minHeight: '60vh', backgroundColor: '#ffffff' }}>
        <div className="container">
          <h2 className="section-title">Barrios y Localidades en {zona.name}</h2>
          
          <style dangerouslySetInnerHTML={{__html: `
            .barrios-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 24px;
              margin-top: 3rem;
            }
            .barrio-card {
              background: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              padding: 24px;
              display: flex;
              align-items: flex-start;
              gap: 16px;
              text-decoration: none;
              color: inherit;
              transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
            }
            .barrio-card:hover {
              transform: translateY(-4px) scale(1.02);
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
              border-color: var(--color-cta-green);
            }
            .barrio-icon {
              color: var(--color-cta-green);
              flex-shrink: 0;
            }
            .barrio-info .barrio-name {
              font-size: 1.25rem;
              margin-bottom: 4px;
              color: var(--color-primary);
              transition: color 0.2s ease;
              font-weight: bold;
            }
            .barrio-card:hover .barrio-info .barrio-name {
              color: var(--color-cta-green);
            }
            .barrio-info p {
              color: var(--color-text-light);
              font-size: 0.95rem;
              margin: 0;
            }
            @media (max-width: 992px) {
              .barrios-grid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (max-width: 600px) {
              .barrios-grid { grid-template-columns: 1fr; }
            }
          `}} />

          <div className="barrios-grid">
            {barriosZona.map((b) => (
              <Link href={`/barrios/${b.slug}`} key={b.slug} className="barrio-card">
                <div className="barrio-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="barrio-info">
                  <div className="barrio-name">{b.name}</div>
                  <p>Destapaciones en {b.name}</p>
                </div>
              </Link>
            ))}
          </div>
          
        </div>
      </section>
    </main>
  )
}
