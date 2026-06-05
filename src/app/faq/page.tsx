import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes sobre Destapaciones | Openagua',
  description: 'Respondemos las dudas más comunes sobre destapaciones de cloacas, cañerías y pluviales en CABA y GBA. Precios, métodos, zonas y emergencias.',
  alternates: {
    canonical: 'https://www.destapacionesopenagua.com.ar/faq',
  },
  openGraph: {
    title: 'Preguntas Frecuentes sobre Destapaciones | Openagua',
    description: 'Respondemos las dudas más comunes sobre destapaciones de cloacas, cañerías y pluviales en CABA y GBA.',
    url: 'https://www.destapacionesopenagua.com.ar/faq',
    siteName: 'Openagua',
    locale: 'es_AR',
    type: 'website',
  },
}

const faqs = [
  {
    categoria: 'Precios y presupuesto',
    items: [
      {
        q: '¿Cuánto cuesta una destapación de cloaca?',
        a: 'El precio de una destapación de cloaca arranca desde $180.000, dependiendo de la complejidad del trabajo y la zona. Trabajamos con máquinas de resorte e hidrojet según lo que requiera cada caso. Podés consultarnos por WhatsApp para una estimación rápida.',
        link: { href: '/destapaciones-cloacas', texto: 'Ver servicio de cloacas' },
      },
      {
        q: '¿Cuánto sale destapar un inodoro?',
        a: 'La destapación de un inodoro parte desde $150.000. El precio final depende de si el problema está en el artefacto o en la red cloacal. Si la obstrucción es más profunda, puede requerir máquina de resorte.',
        link: { href: '/precios', texto: 'Ver tabla de precios completa' },
      },
      {
        q: '¿Cobran por metro de sonda o por trabajo?',
        a: 'Cobramos por trabajo, no por metro de sonda. El precio se define antes de arrancar según el tipo de servicio. Si durante el trabajo el problema resulta más complejo de lo esperado, avisamos antes de continuar y acordamos el precio extra.',
        link: null,
      },
      {
        q: '¿Cobran viático si quedo lejos?',
        a: 'Si la ubicación está fuera de nuestra zona habitual podemos cobrar un adicional por viático. Ese costo se descuenta del total si se realiza el trabajo. Consultanos tu dirección por WhatsApp y te confirmamos.',
        link: null,
      },
      {
        q: '¿Qué medios de pago aceptan?',
        a: 'Aceptamos efectivo, transferencia bancaria y tarjetas de débito y crédito (Visa, Mastercard, Amex) a través de Mercado Pago. También emitimos factura.',
        link: null,
      },
    ],
  },
  {
    categoria: 'Cloacas y cañerías',
    items: [
      {
        q: '¿Cuál es la diferencia entre una cañería cloacal y una pluvial?',
        a: 'Las cañerías cloacales transportan los desechos del inodoro, la ducha y la cocina hacia la red de cloacas. Las pluviales llevan el agua de lluvia hacia la calle o el sistema de desagüe pluvial. Son redes separadas y no se deben mezclar.',
        link: { href: '/blog/diferencias-canerias-cloacales-pluviales', texto: 'Leer artículo completo' },
      },
      {
        q: '¿Por qué el inodoro rebalsa cuando uso la ducha?',
        a: 'Cuando el inodoro rebalsa al usar otro artefacto, la obstrucción casi siempre está en la red cloacal general, no en el inodoro en sí. Es señal de que la columna o la salida principal está tapada. Requiere intervención profesional con máquina.',
        link: { href: '/blog/inodoro-rebalsa-que-hacer', texto: 'Qué hacer si el inodoro rebalsa' },
      },
      {
        q: '¿Por qué la cocina huele a cloaca?',
        a: 'El olor a cloaca en la cocina suele tener dos causas: el sifón seco por falta de uso (se resuelve tirando agua) o una obstrucción parcial en la cañería que genera gases. Si el olor persiste, lo mejor es hacer una inspección.',
        link: { href: '/blog/por-que-cocina-huele-a-cloaca', texto: 'Ver causas y soluciones' },
      },
      {
        q: '¿Cada cuánto tiempo hay que hacer mantenimiento de cañerías?',
        a: 'En viviendas particulares, un mantenimiento preventivo cada 12 a 18 meses es suficiente para evitar obstrucciones. En edificios con muchos departamentos o locales gastronómicos, recomendamos cada 6 meses para prevenir acumulación de grasa y raíces.',
        link: { href: '/mantenimientos-preventivos', texto: 'Ver mantenimiento preventivo' },
      },
      {
        q: '¿Qué hago si el desagüe de la ducha va lento?',
        a: 'La ducha que desagota lento suele estar tapada por cabellos y jabón en el sifón. Primero probá limpiar la rejilla y el sifón a mano. Si después de eso sigue lento, la obstrucción está más adentro y requiere resorte o hidrojet.',
        link: { href: '/blog/ducha-desagota-lento', texto: 'Ver soluciones para ducha lenta' },
      },
    ],
  },
  {
    categoria: 'Zonas y horarios',
    items: [
      {
        q: '¿En qué zonas trabajan?',
        a: 'Cubrimos CABA completa, Zona Oeste GBA (Ramos Mejía, Morón, Castelar, Haedo y alrededores), Zona Norte GBA (San Isidro, Vicente López, Olivos, Martínez y alrededores) y Zona Sur GBA (Lanús, Lomas de Zamora, Quilmes, Avellaneda y alrededores).',
        link: { href: '/#zonas', texto: 'Ver mapa de cobertura' },
      },
      {
        q: '¿Cuál es el horario de atención?',
        a: 'Atendemos de lunes a viernes de 8 a 19hs y sábados de 8 a 13hs. Los domingos no trabajamos. Fuera de horario podés dejarnos un mensaje por WhatsApp y te respondemos a primera hora del día siguiente para coordinar.',
        link: null,
      },
      {
        q: '¿Van a Pilar, Luján o zonas lejanas?',
        a: 'No cubrimos Pilar, Luján, Berisso ni localidades muy alejadas de nuestra base en Ciudadela. Si tu zona queda en el límite, consultanos directamente y vemos si podemos llegar.',
        link: null,
      },
      {
        q: '¿Trabajan en edificios y consorcios?',
        a: 'Sí, trabajamos frecuentemente en edificios. Tenemos experiencia en limpieza de columnas, cámaras cloacales y mantenimiento preventivo para consorcios y administradores de propiedades.',
        link: { href: '/blog/destapaciones-consorcios-administradores', texto: 'Ver servicio para consorcios' },
      },
    ],
  },
  {
    categoria: 'Métodos de trabajo',
    items: [
      {
        q: '¿Qué diferencia hay entre el resorte y el hidrojet?',
        a: 'El resorte helicoidal es ideal para obstrucciones puntuales: trapos, papel o acumulación de residuos. El hidrojet usa agua a alta presión y es más efectivo para grasa acumulada, raíces o limpieza de columnas de edificios. Evaluamos cada caso y usamos el método más adecuado.',
        link: { href: '/blog/resorte-vs-hidrojet-cual-es-mejor', texto: 'Comparar resorte vs hidrojet' },
      },
      {
        q: '¿Qué es la video inspección de cañerías?',
        a: 'La video inspección consiste en introducir una cámara flexible dentro de la cañería para ver exactamente dónde está el problema y qué lo causa. Es especialmente útil para detectar roturas, raíces infiltradas o deformaciones sin necesidad de romper pisos o paredes.',
        link: { href: '/video-inspeccion-canerias', texto: 'Ver servicio de video inspección' },
      },
      {
        q: '¿Tienen que romper el piso para trabajar?',
        a: 'En la gran mayoría de los casos no es necesario romper. Trabajamos con máquinas de resorte e hidrojet que ingresan por los puntos de acceso existentes. Si después de la video inspección detectamos una rotura estructural, ahí sí evaluamos la intervención necesaria y lo consultamos con el cliente antes de proceder.',
        link: null,
      },
      {
        q: '¿Dan garantía por los trabajos realizados?',
        a: 'No damos garantía por escrito, pero sí nos hacemos cargo si el problema que tratamos reaparece en el corto plazo. Si el inconveniente persiste o vuelve, coordinamos una revisión. Trabajamos con honestidad: si el trabajo se complica, avisamos antes de seguir.',
        link: null,
      },
    ],
  },
  {
    categoria: 'Emergencias',
    items: [
      {
        q: '¿Atienden urgencias el mismo día?',
        a: 'Durante el horario de atención (lunes a viernes 8-19hs, sábados 8-13hs) hacemos todo lo posible por atender urgencias en el día según disponibilidad. Fuera de ese horario coordinamos para el día siguiente a primera hora.',
        link: null,
      },
      {
        q: '¿Qué hago si se me inunda el sótano?',
        a: 'Primero cortá el acceso al agua si podés identificar la fuente. Después escribinos por WhatsApp con fotos o descripción de la situación para evaluar si podemos ir ese mismo día. Tenemos equipos de desagote para sótanos e inundaciones.',
        link: { href: '/desagote-sotanos', texto: 'Ver servicio de desagote de sótanos' },
      },
      {
        q: '¿Cómo los contacto rápido en una emergencia?',
        a: 'La forma más rápida es por WhatsApp al 11 5179-7649. También podés llamar directamente al mismo número. Durante el horario de atención respondemos en minutos.',
        link: { href: 'https://wa.me/5491151797649', texto: 'Escribir por WhatsApp ahora' },
      },
    ],
  },
]

const allFaqs = faqs.flatMap(cat => cat.items)

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.destapacionesopenagua.com.ar' },
    { '@type': 'ListItem', position: 2, name: 'Preguntas Frecuentes', item: 'https://www.destapacionesopenagua.com.ar/faq' },
  ],
}

export default function FaqPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '3rem 1.5rem 2.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.2 }}>
          Preguntas frecuentes sobre destapaciones
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Respondemos las dudas más comunes sobre precios, métodos, zonas y emergencias en CABA y GBA.
        </p>
      </div>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>

        {faqs.map((categoria, ci) => (
          <section key={ci} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#ffffff',
              background: '#16a34a',
              padding: '0.6rem 1.25rem',
              borderRadius: '8px',
              marginBottom: '1rem',
              display: 'inline-block',
            }}>
              {categoria.categoria}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {categoria.items.map((faq, fi) => (
                <details key={fi} style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                }}>
                  <summary style={{
                    padding: '1rem 1.25rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: '#0f172a',
                    fontSize: '0.975rem',
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                  }}>
                    {faq.q}
                    <span style={{
                      background: '#f0fdf4',
                      color: '#16a34a',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      flexShrink: 0,
                      fontWeight: 700,
                    }}>+</span>
                  </summary>
                  <div style={{
                    padding: '0.25rem 1.25rem 1rem',
                    color: '#475569',
                    lineHeight: 1.7,
                    fontSize: '0.95rem',
                    borderTop: '1px solid #f1f5f9',
                  }}>
                    <p style={{ margin: '0.75rem 0' }}>{faq.a}</p>
                    {faq.link && (
                      <Link
                        href={faq.link.href}
                        style={{
                          color: '#16a34a',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        {faq.link.texto} →
                      </Link>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        {/* CTA final */}
        <div style={{
          marginTop: '2rem',
          padding: '2rem 1.5rem',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
          borderRadius: '16px',
          textAlign: 'center',
        }}>
          <p style={{ fontWeight: 700, color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.5rem' }}>
            ¿No encontraste lo que buscabas?
          </p>
          <p style={{ color: '#94a3b8', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
            Escribinos por WhatsApp y te respondemos en minutos.
          </p>
          
          <a
            href="https://wa.me/5491151797649"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#25D366',
              color: 'white',
              padding: '0.875rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              display: 'inline-block',
              fontSize: '1rem',
            }}
          >
            Consultar por WhatsApp
          </a>
        </div>

      </main>
    </>
  )
}
