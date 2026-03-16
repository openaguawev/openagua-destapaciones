import { getZonas } from '@/data/zonas'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const zonas = getZonas()
  return zonas.map((zona) => ({ slug: zona.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export default async function ZonaPage({ params }: Props) {
  const { slug } = await params
  const zonas = getZonas()
  const zona = zonas.find((z) => z.slug === slug)
  if (!zona) return notFound()
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Destapaciones en {zona.name}</h1>
      <p>{zona.description}</p>
      <h2>Localidades que cubrimos</h2>
      <ul>{zona.barrios.map((b) => <li key={b}>{b}</li>)}</ul>
      <a href="https://wa.me/5491151797649" style={{ background: '#16A34A', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', marginTop: '2rem' }}>
        💬 Consultar por WhatsApp
      </a>
    </main>
  )
}
