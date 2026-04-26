import { getZonas } from '@/data/zonas'
import { barrios } from '@/data/barrios'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import '@/components/Zonas.css'
import Breadcrumbs from '@/components/Breadcrumbs'
import { handleLegacyRedirect } from '@/utils/legacyRedirect'

// Contenido SEO por zona — texto real, no template
const zonaSeoContent: Record<string, { intro: string; problemas: string; clientes: string; cierre: string }> = {
  caba: {
    intro: 'La Ciudad Autónoma de Buenos Aires concentra una enorme diversidad de construcciones: desde edificios antiguos con cañerías de plomo hasta torres modernas con instalaciones de PVC. Cada barrio tiene particularidades que afectan directamente el sistema cloacal y pluvial.',
    problemas: 'Los problemas más frecuentes que atendemos en CABA incluyen columnas de edificios obstruidas por grasa y jabón acumulado durante años, bajadas pluviales tapadas por hojas de árboles que caen sobre terrazas, y cámaras de inspección con sedimento compactado en PH y casas tipo chorizo.',
    clientes: 'Nuestros clientes en CABA son tanto consorcios con columnas compartidas como vecinos particulares que necesitan resolver una urgencia en el baño o la cocina. También trabajamos con locales gastronómicos de barrios como Palermo, San Telmo y Recoleta, donde la acumulación de grasa en las bajadas es un problema constante.',
    cierre: 'Recorremos los barrios de CABA todos los días, lo que nos permite coordinar visitas en el mismo día y llegar rápido ante cualquier emergencia sanitaria.'
  },
  'zona-norte': {
    intro: 'Zona Norte abarca desde Vicente López y Olivos hasta San Isidro, Tigre y Escobar, con un perfil que combina casas con jardín, barrios cerrados y edificios de departamentos. La vegetación abundante y los terrenos con napas altas generan desafíos específicos en las cañerías.',
    problemas: 'En esta zona, los problemas más comunes son las raíces que penetran las juntas de los caños cloacales, los pluviales que colapsan en temporada de lluvias por la cantidad de árboles, y las cámaras sépticas de casas que no están conectadas a la red cloacal.',
    clientes: 'Atendemos desde casas unifamiliares en barrios como Martínez y Acassuso hasta countries y barrios cerrados en Nordelta, Benavidez e Ingeniero Maschwitz. También damos servicio a edificios de departamentos en Olivos, Florida y Munro.',
    cierre: 'Nuestros móviles recorren Zona Norte de forma permanente, con equipo de sonda e hidrojet disponible para resolver urgencias en el día sin demoras ni viáticos adicionales.'
  },
  'zona-oeste': {
    intro: 'Zona Oeste es una de las áreas con mayor demanda de destapaciones en el conurbano bonaerense. Abarca localidades como Morón, Ramos Mejía, Castelar, Ituzaingó, Hurlingham y Ciudadela, donde conviven casas antiguas con barrios nuevos en expansión.',
    problemas: 'Los inconvenientes más habituales en esta zona incluyen cloacas con barro y sedimento acumulado, cañerías antiguas de fibrocemento que se fisuran con el asentamiento del terreno, y pluviales de casas que desbordan por falta de mantenimiento.',
    clientes: 'Trabajamos con consorcios, administraciones de edificios, comercios y familias de toda la Zona Oeste. En localidades como Haedo, Castelar y Morón atendemos tanto casas con fondo y jardín como departamentos en edificios de varias plantas.',
    cierre: 'Tenemos presencia diaria en Zona Oeste con técnicos especializados y el equipamiento necesario para resolver cualquier tipo de obstrucción en el mismo día.'
  },
  'zona-sur': {
    intro: 'Zona Sur comprende partidos como Avellaneda, Lanús, Lomas de Zamora, Banfield y La Matanza, una región con alta densidad poblacional y construcciones que van desde casas con décadas de antigüedad hasta complejos habitacionales modernos.',
    problemas: 'Los problemas más frecuentes en esta zona son las cloacas obstruidas por raíces y sedimento en casas con instalaciones antiguas, los pluviales colapsados por la falta de limpieza periódica, y las cañerías de cocina tapadas por grasa en locales comerciales.',
    clientes: 'Atendemos hogares, comercios y consorcios en toda la Zona Sur. En localidades como San Justo, Banfield y Temperley trabajamos frecuentemente con familias que necesitan resolver urgencias de desagüe sin romper pisos ni paredes.',
    cierre: 'Nuestro equipo llega a Zona Sur en poco tiempo gracias a la distribución estratégica de nuestros móviles. Coordinamos visitas en el día y ofrecemos presupuesto sin compromiso.'
  }
};

export async function generateStaticParams() {
  const zonas = getZonas()
  return zonas.map((zona) => ({ slug: zona.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const zonas = getZonas()
  const zona = zonas.find((z) => z.slug === slug)
  if (!zona) return { title: 'Zona no encontrada' }

  const seoTitle = zona.seoTitle || `Destapaciones en ${zona.name} | Openagua`;
  const seoDescription = zona.seoDescription || `Destapaciones en ${zona.name} con atención profesional. Llamanos al 11 5179-7649.`;

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: `https://www.destapacionesopenagua.com.ar/zonas/${slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://www.destapacionesopenagua.com.ar/zonas/${slug}`,
      siteName: 'Openagua',
      locale: 'es_AR',
      type: 'website',
    },
  }
}

type Props = { params: Promise<{ slug: string }> }

export default async function ZonaPage({ params }: Props) {
  const { slug } = await params
  const zonas = getZonas()
  const zona = zonas.find((z) => z.slug === slug)
  
  if (!zona) return handleLegacyRedirect([slug])
  
  const barriosZona = barrios.filter((b) => b.zoneSlug === slug)
  const seoContent = zonaSeoContent[slug];

  return (
    <main className="zona-page">
      <header 
        style={{ 
          position: 'relative', 
          minHeight: '50vh', 
          display: 'flex', 
          alignItems: 'center', 
          paddingTop: '80px',
          color: '#fff',
          padding: '4rem 0',
          overflow: 'hidden'
        }}
      >
        <Image 
          src="/img/limpieza de alcantarilla.jpg" 
          alt="Limpieza profesional de alcantarilla y desagües pluviales en zona urbana" 
          fill 
          priority 
          style={{ objectFit: 'cover', zIndex: 0 }} 
          quality={85}
          sizes="100vw"
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.80)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Breadcrumbs tipo="zona" zona={{ nombre: zona.name, slug: zona.slug }} />
          </div>
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

      {/* CONTENIDO SEO ENRIQUECIDO DE LA ZONA */}
      {seoContent && (
        <section className="section" style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '1.5rem' }}>{seoContent.intro}</p>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Problemas frecuentes en {zona.name}</h2>
              <p style={{ marginBottom: '1.5rem' }}>{seoContent.problemas}</p>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>¿A quiénes atendemos?</h2>
              <p style={{ marginBottom: '1.5rem' }}>{seoContent.clientes}</p>
              <p style={{ marginBottom: 0, fontWeight: 600, color: '#0f172a' }}>{seoContent.cierre}</p>
            </div>
          </div>
        </section>
      )}

      <section className="section" style={{ minHeight: '60vh', backgroundColor: '#f8fafc' }}>
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
