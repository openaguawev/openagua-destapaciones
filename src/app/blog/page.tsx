import Link from 'next/link';
import { getArticulos } from '@/data/blog';
import { Metadata } from 'next';
import Image from 'next/image';
import './blog.css';

export const metadata: Metadata = {
  title: 'Blog de Destapaciones y Consejos | Openagua',
  description: 'Todo lo que necesitás saber sobre obstrucciones, mantenimiento de cañerías, limpieza cloacal y soluciones profesionales.',
  alternates: {
    canonical: 'https://www.destapacionesopenagua.com.ar/blog',
  }
};

export default function BlogIndex() {
  const articulos = getArticulos();

  return (
    <main className="blog-page">
      <div className="container">
        <h1 className="blog-title">Blog de Openagua</h1>
        <p className="blog-subtitle">Consejos, guías y casos de destapaciones profesionales en CABA y GBA.</p>
        
        <div className="blog-grid">
          {articulos.map((art) => (
            <Link href={`/blog/${art.slug}`} key={art.slug} className="blog-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                <Image 
                  src={art.image} 
                  alt={art.alt} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
              <div className="blog-card-content">
                <div className="article-title" style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0f172a' }}>{art.title}</div>
                <p style={{ color: '#475569', marginBottom: '1rem' }}>{art.excerpt}</p>
                <div className="blog-read-more" style={{ color: '#16A34A', fontWeight: 'bold' }}>
                  Leer artículo completo →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
