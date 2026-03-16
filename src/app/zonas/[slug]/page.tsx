import { getZonas } from '@/data/zonas'
import { barrios } from '@/data/barrios'
import { notFound } from 'next/navigation'
import Link from 'next/link'

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
  
  const barriosZona = barrios.filter((b) => b.zoneSlug === slug)

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Destapaciones en {zona.name}</h1>
      <p>{zona.description}</p>
      <h2>Localidades que cubrimos en {zona.name}</h2>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
        {barriosZona.map((b) => (
          <li key={b.slug}>
            <Link href={`/barrios/${b.slug}`} style={{ color: 'var(--color-cta-green)', textDecoration: 'none', fontWeight: 500 }}>
              Destapaciones en {b.name}
            </Link>
          </li>
        ))}
      </ul>
      <a href="https://wa.me/5491151797649" style={{ background: '#16A34A', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', marginTop: '3rem' }}>
        💬 Consultar por WhatsApp
      </a>
    </main>
  )
}
