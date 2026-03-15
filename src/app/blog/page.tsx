import Link from 'next/link';
import { getArticulos } from '@/data/blog';
import { Metadata } from 'next';
import './blog.css';

export const metadata: Metadata = {
  title: 'Blog de Destapaciones y Consejos | Openagua',
  description: 'Todo lo que necesitás saber sobre obstrucciones, mantenimiento de cañerías, limpieza cloacal y soluciones profesionales.',
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
            <article key={art.slug} className="blog-card">
              <div className="blog-card-content">
                <h2>{art.title}</h2>
                <p>{art.excerpt}</p>
                <Link href={`/blog/${art.slug}`} className="blog-read-more">
                  Leer artículo completo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
