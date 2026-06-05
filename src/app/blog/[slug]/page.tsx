import { getArticulos } from '@/data/blog'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'
import { handleLegacyRedirect } from '@/utils/legacyRedirect'
import { generateArticleSchema, generateFAQSchema } from '@/lib/schemaUtils'
import Script from 'next/script'

export async function generateStaticParams() {
  const posts = getArticulos()
  return posts.map((post) => ({ slug: post.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const posts = getArticulos()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return { title: 'Artículo no encontrado | Openagua' }

  const seoTitle = post.seoTitle || post.title
  return {
    title: seoTitle,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.destapacionesopenagua.com.ar/blog/${slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: post.excerpt,
      url: `https://www.destapacionesopenagua.com.ar/blog/${slug}`,
      siteName: 'Openagua',
      locale: 'es_AR',
      type: 'article',
      images: [
        {
          url: `https://www.destapacionesopenagua.com.ar${post.image}`,
          width: 1200,
          height: 630,
          alt: post.alt,
        },
      ],
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const posts = getArticulos()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return handleLegacyRedirect([slug])
  
  const waMsg = encodeURIComponent(`Hola Openagua, leí el artículo "${post.title}" y quiero consultar.`);
  const waUrl = `https://wa.me/5491151797649?text=${waMsg}`;

  const articleSchema = generateArticleSchema(post);

  const faqs = [];
  const regex = /<summary[^>]*>([\s\S]*?)<\/summary>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
  let match;
  while ((match = regex.exec(post.content)) !== null) {
    faqs.push({ q: match[1].trim(), a: match[2].trim() });
  }

  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : null;

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqs.length > 0 && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq: {q: string, a: string}) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })
          }}
        />
      )}
      
      <h1 style={{ marginBottom: '1.5rem', color: '#0f172a', lineHeight: 1.2 }}>{post.h1 || post.title}</h1>
      
      <div style={{ position: 'relative', width: '100%', margin: '0 0 2.5rem 0', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}>
        <Image 
          src={post.image} 
          alt={post.alt} 
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, 800px"
          priority={true}
          style={{ width: '100%', height: 'auto', maxHeight: '400px', display: 'block', objectFit: 'cover' }} 
          quality={85}
          title={post.title}
        />
      </div>
      
      {(() => {
        const midIndex = Math.floor(post.content.length / 2);
        let splitIndex = post.content.indexOf('</p>', midIndex);
        if (splitIndex === -1) {
          splitIndex = post.content.indexOf('</p>'); // fallback
        }
        if (splitIndex !== -1) {
          splitIndex += 4; // include the </p>
        } else {
          splitIndex = midIndex;
        }

        const contentPart1 = post.content.substring(0, splitIndex);
        const contentPart2 = post.content.substring(splitIndex);

        const ctaMiddleHtml = `
<div style="margin: 2.5rem 0; padding: 1.5rem; background: linear-gradient(135deg, #f0fdf4, #dcfce7); border-radius: 12px; text-align: center;">
  <p style="font-weight: 700; color: #166534; font-size: 1.1rem; margin-bottom: 0.75rem;">
    ¿Tenés este problema ahora mismo?
  </p>
  <p style="color: #475569; margin-bottom: 1rem; font-size: 0.95rem;">
    Te respondemos en minutos. Sin compromiso.
  </p>
  <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="background: #25D366; color: white; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
    Consultá por WhatsApp ahora
  </a>
</div>`;

        return (
          <>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: contentPart1 }} />
            <div dangerouslySetInnerHTML={{ __html: ctaMiddleHtml }} />
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: contentPart2 }} />
          </>
        );
      })()}
      
      <div style={{ marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '2px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h3 style={{ fontSize: '1.35rem', color: '#0f172a', fontWeight: 800 }}>Soluciones profesionales recomendadas</h3>
        <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '1.05rem', margin: 0 }}>Si el problema persiste, es vital contar con asistencia técnica de inmediato para evitar daños estructurales en cañerías o desbordes sanitarios.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <a href="/destapaciones-cloacas" style={{ padding: '1rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', textDecoration: 'none', color: '#0f172a', transition: 'border-color 0.2s', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.5rem' }}>🔧</span>
            <span style={{ fontWeight: 600 }}>Destapación de Cloacas</span>
          </a>
          <a href="/video-inspeccion-canerias" style={{ padding: '1rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', textDecoration: 'none', color: '#0f172a', transition: 'border-color 0.2s', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.5rem' }}>📹</span>
            <span style={{ fontWeight: 600 }}>Inspección por Cámara</span>
          </a>
          <a href="/destapaciones-hidrojet" style={{ padding: '1rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', textDecoration: 'none', color: '#0f172a', transition: 'border-color 0.2s', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.5rem' }}>💦</span>
            <span style={{ fontWeight: 600 }}>Destapaciones con Hidrojet</span>
          </a>
          <a href="/zonas/caba" style={{ padding: '1rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', textDecoration: 'none', color: '#0f172a', transition: 'border-color 0.2s', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.5rem' }}>📍</span>
            <span style={{ fontWeight: 600 }}>Ver Coberturas en CABA</span>
          </a>
        </div>
      </div>

      <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
        <a href={waUrl} style={{ background: '#16A34A', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', fontWeight: 'bold', boxShadow: '0 4px 6px -1px rgba(22, 163, 74, 0.4)' }}>
          Consultar urgencia por WhatsApp
        </a>
      </div>
    </main>
  )
}
