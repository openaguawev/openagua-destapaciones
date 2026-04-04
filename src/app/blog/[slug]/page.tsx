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
  if (!post) return { title: 'Artículo no encontrado' }

  return {
    title: `${post.title} | Openagua Blog`,
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
    "headline": post.title,
    "image": [
      `https://www.destapacionesopenagua.com.ar${post.image}`
    ],
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": "Openagua Destapaciones"
    }
  };

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <h1 style={{ marginBottom: '1.5rem', color: '#0f172a', lineHeight: 1.2 }}>{post.title}</h1>
      
      <div style={{ position: 'relative', width: '100%', margin: '0 0 2.5rem 0', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}>
        <Image 
          src={post.image} 
          alt={post.alt} 
          width={1200}
          height={630}
          priority={true}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
          quality={85}
          title={post.title}
        />
      </div>
      
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto" style={{ background: '#16A34A', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', marginTop: '2rem', fontWeight: 'bold' }}>
        Consultar por WhatsApp
      </a>
    </main>
  )
}
