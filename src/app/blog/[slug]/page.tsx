import { getArticulos } from '@/data/blog'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export async function generateStaticParams() {
  const posts = getArticulos()
  return posts.map((post) => ({ slug: post.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const posts = getArticulos()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return notFound()
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>{post.title}</h1>
      <div style={{ position: 'relative', width: '100%', height: '400px', margin: '2rem 0', borderRadius: '12px', overflow: 'hidden' }}>
        <Image 
          src={post.image} 
          alt={post.alt} 
          fill 
          priority 
          style={{ objectFit: 'cover' }} 
          quality={85}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto" style={{ background: '#16A34A', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', marginTop: '2rem' }}>
        💬 Consultar por WhatsApp
      </a>
    </main>
  )
}
