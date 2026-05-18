import { getZonas } from '@/data/zonas'
import { barrios } from '@/data/barrios'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import '@/components/Zonas.css'
import Breadcrumbs from '@/components/Breadcrumbs'
import { handleLegacyRedirect } from '@/utils/legacyRedirect'

// Contenido SEO expandido por zona — 400-500 palabras reales por zona
const zonaSeoContent: Record<string, {
  intro: string[];
  problemas: string[];
  servicios: string;
  clientes: string;
  cierre: string;
}> = {
  caba: {
    intro: [
      'En la Ciudad Autónoma de Buenos Aires, la densidad edilicia y la antigüedad de las instalaciones sanitarias generan desafíos únicos. La mayoría de los edificios porteños tienen cañerías de entre 30 y 60 años de antigüedad, construidas con materiales que hoy ya no se utilizan como plomo, hierro fundido y fibrocemento. Estas tuberías son propensas a la acumulación de sarro, raíces y deformaciones que generan obstrucciones crónicas.',
      'En Openagua trabajamos en todos los barrios de CABA desde nuestra base operativa en Ciudadela. Conocemos de memoria la infraestructura cloacal de barrios como Palermo, Belgrano, Caballito, Recoleta y San Telmo. Eso nos permite diagnosticar más rápido y resolver más eficientemente que servicios sin experiencia local.',
    ],
    problemas: [
      'Los problemas más frecuentes en CABA son la acumulación de grasa en las columnas de edificios — especialmente en los pisos bajos que reciben todo el peso del flujo — y la invasión de raíces de árboles en las cámaras de inspección de las veredas. También es muy común en departamentos el taponamiento por toallitas húmedas y materiales no biodegradables.',
      'En edificios de más de 10 pisos, el diagnóstico correcto requiere saber si el problema es del ramal individual del departamento o de la columna general del consorcio. Esta distinción determina quién paga y qué herramienta usar. Nuestra experiencia con consorcios de CABA nos permite hacer ese diagnóstico sin necesidad de romper ni una sola baldosa.',
    ],
    servicios: 'Los servicios más solicitados en CABA son las destapaciones de cloacas urgentes, la limpieza de columnas con hidrojet para edificios y consorcios, y la video inspección de cañerías para detectar roturas sin obra. También realizamos mantenimientos preventivos programados para administraciones de consorcios que quieren evitar emergencias costosas.',
    clientes: 'Atendemos particulares, inquilinos, propietarios, administradores de consorcios, comercios gastronómicos, hoteles y empresas en toda CABA. Nuestro tiempo de respuesta promedio en Capital Federal es de 45 a 90 minutos desde el primer contacto.',
    cierre: 'Si tenés un problema cloacal en CABA, no esperes a que se agrave. Contactanos por WhatsApp y te damos un diagnóstico inicial sin cargo. Llegamos el mismo día.',
  },
  'zona-norte': {
    intro: [
      'La Zona Norte del Gran Buenos Aires — que comprende municipios como San Isidro, Vicente López, San Fernando, Tigre y Pilar — tiene características muy distintas a CABA. Las propiedades son en su mayoría casas con jardín, quintas y countries, donde el principal enemigo de las cañerías son las raíces de los árboles.',
      'En barrios arbolados como Olivos, Martínez, Acassuso y Beccar, las raíces de tipas, jacarandás y plátanos pueden recorrer decenas de metros buscando humedad. Cuando encuentran una fisura en un caño de cemento o una unión mal sellada en PVC, ingresan y crecen hasta colapsar completamente el conducto. Es el problema número uno que atendemos en esta zona.',
    ],
    problemas: [
      'Además de las raíces, en Zona Norte es frecuente encontrar cámaras sépticas colapsadas en propiedades más antiguas que no están conectadas a la red de AySA. Estas cámaras necesitan limpieza periódica y muchas veces reparación estructural cuando las paredes de ladrillo se fisuran por la presión del suelo.',
      'Otro problema característico de la zona son los desagotes de sótanos y espacios inundados después de las tormentas. Las propiedades con jardín y subsuelo acumulan agua rápidamente cuando el sistema pluvial se satura, generando emergencias que requieren respuesta inmediata con bombas sumergibles.',
    ],
    servicios: 'En Zona Norte nuestros servicios más demandados son la video inspección y limpieza con hidrojet para detectar y eliminar raíces, el desagote de sótanos y espacios inundados, y la limpieza de cámaras sépticas. También realizamos mantenimientos preventivos anuales para propiedades con árboles grandes cerca de las líneas de servicio.',
    clientes: 'Atendemos familias, countries, clubes de campo, empresas y comercios en toda la Zona Norte. Cubrimos desde Vicente López hasta Pilar y desde la costa del Río de la Plata hasta el segundo cordón del GBA.',
    cierre: 'Si vivís en Zona Norte y notás que el drenaje es cada vez más lento o hay olores extraños en el jardín, puede ser señal de raíces en la cañería. Contactanos para una inspección sin cargo.',
  },
  'zona-oeste': {
    intro: [
      'La Zona Oeste del Gran Buenos Aires es nuestra área de operación principal. Con base en Ciudadela, cubrimos Ramos Mejía, Haedo, Castelar, Morón, Hurlingham, Ituzaingó, San Martín y todos los municipios del corredor oeste con tiempos de respuesta de 20 a 45 minutos.',
      'Esta zona combina barrios residenciales tradicionales con alta densidad de comercios, industrias livianas y edificios de departamentos. Esa combinación genera una demanda constante de servicios de destapación tanto para uso doméstico como para establecimientos gastronómicos y comerciales.',
    ],
    problemas: [
      'En Zona Oeste, los problemas más frecuentes son las obstrucciones por grasa en locales de comida y cocinas industriales, el taponamiento de columnas en edificios de los años 70 y 80 — época en que se construyó la mayor parte del parque edilicio de Morón y Ramos Mejía — y las inundaciones de patios y garajes por sistemas pluviales colapsados.',
      'Las cañerías de esta zona son en su mayoría de PVC y polipropileno, pero en propiedades de más de 40 años es común encontrar ramales de plomo o hierro fundido que necesitan mantenimiento especial para no dañarlos durante la destapación.',
    ],
    servicios: 'Los servicios más solicitados en Zona Oeste son las destapaciones de cloacas y cañerías para uso doméstico, el mantenimiento de graseras para restaurantes y comercios gastronómicos, y la limpieza preventiva con hidrojet para consorcios y edificios. También somos el servicio de referencia para urgencias en toda la zona.',
    clientes: 'Atendemos particulares, inquilinos, comercios, restaurantes, industrias livianas y administraciones de edificios en toda la Zona Oeste. Somos el servicio de destapaciones más conocido del corredor oeste gracias a más de 10 años de trabajo en la zona.',
    cierre: 'En Zona Oeste somos locales. Conocemos cada barrio, cada tipo de construcción y cada problema típico de la zona. Contactanos y te resolvemos el problema el mismo día.',
  },
  'zona-sur': {
    intro: [
      'La Zona Sur del Gran Buenos Aires — Avellaneda, Lanús, Lomas de Zamora, Banfield, Temperley y alrededores — tiene una infraestructura cloacal que en muchos casos supera los 50 años de antigüedad. Los barrios industriales y residenciales del sur metropolitano presentan desafíos específicos que requieren experiencia y equipamiento especializado.',
      'En Openagua extendimos nuestra cobertura a Zona Sur respondiendo a la demanda de clientes que necesitaban un servicio confiable con equipos modernos. Hoy atendemos regularmente en Avellaneda, Lanús, Lomas de Zamora y municipios cercanos.',
    ],
    problemas: [
      'En Zona Sur es frecuente encontrar cañerías de cerámica y fibrocemento en propiedades industriales y residenciales antiguas. Estos materiales son frágiles y propensos a fracturarse bajo la presión del suelo o por las raíces. Cuando se rompen, generan filtraciones que contaminan el suelo y pueden afectar los cimientos de la propiedad.',
      'También es característica de esta zona la alta demanda de destapaciones en locales industriales y depósitos, donde los sistemas cloacales reciben cargas muy superiores a las domésticas y requieren mantenimiento más frecuente.',
    ],
    servicios: 'En Zona Sur los servicios más demandados son la video inspección para detectar roturas en cañerías antiguas, la destapación con hidrojet para limpiar conductos industriales, y la destapación de cloacas urgentes para uso doméstico. También realizamos diagnósticos completos para propiedades en venta o alquiler.',
    clientes: 'Atendemos particulares, inquilinos, comercios, industrias y administraciones de edificios en toda la Zona Sur. Nuestro tiempo de respuesta en esta zona es de 60 a 90 minutos desde el contacto inicial.',
    cierre: 'Si tenés un problema cloacal en Zona Sur, contactanos por WhatsApp. Te damos presupuesto sin cargo y llegamos el mismo día para resolver.',
  },
};

const serviciosZona = [
  { href: '/destapaciones-cloacas', icon: '🚽', label: 'Destapación de Cloacas', sub: 'Urgencias y columnas de edificios' },
  { href: '/destapaciones-canerias', icon: '🔧', label: 'Destapación de Cañerías', sub: 'Cocina, baño y lavadero' },
  { href: '/destapaciones-hidrojet', icon: '💦', label: 'Destapación con Hidrojet', sub: 'Limpieza profunda a alta presión' },
  { href: '/servicios/video-inspeccion', icon: '📹', label: 'Video Inspección', sub: 'Diagnóstico sin romper' },
];

const imagenesHeroZona: Record<string, { src: string; alt: string }> = {
  caba: {
    src: '/img/edificio.jpg',
    alt: 'Destapaciones profesionales en CABA - Edificios y consorcios'
  },
  'zona-norte': {
    src: '/img/limpieza-cano-pluvial.jpg',
    alt: 'Destapaciones en Zona Norte - Limpieza de caños pluviales'
  },
  'zona-oeste': {
    src: '/img/destapacion-maquina.jpg',
    alt: 'Destapaciones en Zona Oeste - Desobstrucción con máquina de resortes'
  },
  'zona-sur': {
    src: '/img/hidrojet-cloaca.jpg',
    alt: 'Destapaciones en Zona Sur - Limpieza técnica con sistema Hidrojet'
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

  const imagenesZona: Record<string, string> = {
    'caba': '/img/edificio.jpg',
    'zona-norte': '/img/limpieza-cano-pluvial.jpg',
    'zona-oeste': '/img/destapacion-maquina.jpg',
    'zona-sur': '/img/hidrojet-cloaca.jpg',
  };

  const imagenZona = imagenesZona[slug] || '/img/home.jpg';

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
      images: [
        {
          url: imagenZona,
          width: 1200,
          height: 630,
          alt: `Destapaciones en ${zona.name} - Openagua`,
        }
      ],
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

  const heroImage = imagenesHeroZona[slug] || {
    src: '/img/home.jpg',
    alt: `Destapaciones profesionales en ${zona.name}`
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://www.destapacionesopenagua.com.ar',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `Destapaciones en ${zona.name}`,
        item: `https://www.destapacionesopenagua.com.ar/zonas/${zona.slug}`,
      },
    ],
  };

  return (
    <main className="zona-page">
      <header className="zona-hero">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
          quality={85}
          sizes="100vw"
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.80)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Breadcrumbs tipo="zona" zona={{ nombre: zona.name, slug: zona.slug }} />
          </div>
          <h1>Destapaciones en {zona.name}</h1>
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

      {/* CONTENIDO SEO EXPANDIDO */}
      {seoContent && (
        <section className="section" style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>

              {/* Intro */}
              {seoContent.intro.map((p, i) => (
                <p key={i} style={{ marginBottom: '1.5rem' }}>{p}</p>
              ))}

              {/* Problemas */}
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', marginTop: '2rem' }}>
                Problemas frecuentes en {zona.name}
              </h2>
              {seoContent.problemas.map((p, i) => (
                <p key={i} style={{ marginBottom: '1.5rem' }}>{p}</p>
              ))}

              {/* Servicios */}
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', marginTop: '2rem' }}>
                Servicios más solicitados en {zona.name}
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>{seoContent.servicios}</p>

              {/* Clientes */}
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', marginTop: '2rem' }}>
                ¿A quiénes atendemos en {zona.name}?
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>{seoContent.clientes}</p>

              {/* Cierre */}
              <p style={{ marginBottom: 0, fontWeight: 600, color: '#0f172a', borderLeft: '4px solid #16A34A', paddingLeft: '1rem', backgroundColor: '#f0fdf4', padding: '1rem 1rem 1rem 1.25rem', borderRadius: '0 8px 8px 0' }}>
                {seoContent.cierre}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* INTERLINKING SERVICIOS */}
      <section className="section" style={{ padding: '3rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            Servicios disponibles en {zona.name}
          </h2>
          <div className="zona-servicios-grid">
            {serviciosZona.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.25rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: '#0f172a',
                  boxShadow: '0 1px 3px 0 rgba(0,0,0,0.06)',
                  transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                }}
                className="zona-servicio-card"
              >
                <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{s.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '2px' }}>{s.label}</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{s.sub}</div>
                </div>
              </Link>
            ))}
          </div>
          <style dangerouslySetInnerHTML={{ __html: `
            .zona-servicio-card:hover {
              border-color: #16A34A;
              box-shadow: 0 4px 12px rgba(22, 163, 74, 0.15);
              transform: translateY(-2px);
            }
          ` }} />
        </div>
      </section>

      {/* GRID DE BARRIOS */}
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

      {/* BREADCRUMB SCHEMA */}
      <Script
        id={`breadcrumb-zona-${zona.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `Destapaciones en ${zona.name}`,
            "description": zona.seoDescription || zona.description,
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://www.destapacionesopenagua.com.ar/#business"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": zona.name
            },
            "url": `https://www.destapacionesopenagua.com.ar/zonas/${zona.slug}`
          })
        }}
      />
    </main>
  )
}
