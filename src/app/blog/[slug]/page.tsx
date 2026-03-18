import { getArticulos } from '@/data/blog'
import { notFound } from 'next/navigation'

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
      <img src="https://images.unsplash.com/photo-1542013936693-884638332954?w=1200" alt={post.title} style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', margin: '2rem 0' }} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto" style={{ background: '#16A34A', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', marginTop: '2rem' }}>
        💬 Consultar por WhatsApp
      </a>
    </main>
  )
}
