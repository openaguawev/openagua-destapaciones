import { getArticulos } from '@/data/blog'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'
import { handleLegacyRedirect } from '@/utils/legacyRedirect'

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
    title: `${seoTitle} | Openagua`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.destapacionesopenagua.com.ar/blog/${slug}`,
    }
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const posts = getArticulos()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return handleLegacyRedirect([slug])
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.h1 || post.title,
    "image": [
      `https://www.destapacionesopenagua.com.ar${post.image}`
    ],
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": "Openagua Destapaciones",
      "url": "https://www.destapacionesopenagua.com.ar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Openagua",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.destapacionesopenagua.com.ar/logo.svg"
      }
    },
    "datePublished": "2026-04-13T08:00:00-03:00",
    "dateModified": "2026-04-13T08:00:00-03:00",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.destapacionesopenagua.com.ar/blog/${slug}`
    }
  };

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <h1 style={{ marginBottom: '1.5rem', color: '#0f172a', lineHeight: 1.2 }}>{post.h1 || post.title}</h1>
      
      <div style={{ position: 'relative', width: '100%', margin: '0 0 2.5rem 0', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}>
        <Image 
          src={post.image} 
          alt={post.alt} 
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, 800px"
          priority={true}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
          quality={85}
          title={post.title}
        />
      </div>
      
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      
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
          <a href="/barrios/destapaciones-palermo" style={{ padding: '1rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', textDecoration: 'none', color: '#0f172a', transition: 'border-color 0.2s', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.5rem' }}>📍</span>
            <span style={{ fontWeight: 600 }}>Ver Coberturas en CABA</span>
          </a>
        </div>
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto" style={{ background: '#16A34A', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', fontWeight: 'bold', boxShadow: '0 4px 6px -1px rgba(22, 163, 74, 0.4)' }}>
          Consultar urgencia por WhatsApp
        </a>
      </div>
    </main>
  )
}
