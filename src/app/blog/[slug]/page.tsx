import { getArticulos } from '@/data/blog';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import '../blog.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articulos = getArticulos();
  return articulos.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const articulo = getArticulos().find((a) => a.slug === resolvedParams.slug);
  if (!articulo) return { title: 'Artículo no encontrado' };

  return {
    title: `${articulo.title} | Openagua`,
    description: articulo.excerpt,
    alternates: {
      canonical: `https://www.openagua.com.ar/blog/${articulo.slug}`,
    }
  };
}

export default async function BlogArticle({ params }: Props) {
  const resolvedParams = await params;
  const articulo = getArticulos().find((a) => a.slug === resolvedParams.slug);
  
  if (!articulo) {
    notFound();
  }

  return (
    <main className="article-page">
      <div className="container article-container">
        <Link href="/blog" className="back-link">← Volver al blog</Link>
        <article className="article-content">
          <h1>{articulo.title}</h1>
          <div className="article-excerpt">{articulo.excerpt}</div>
          <div className="article-body" dangerouslySetInnerHTML={{ __html: articulo.content }} />
          
          <div className="article-cta">
            <h3>¿Necesitás ayuda profesional?</h3>
            <p>Si estás lidiando con este problema, no pierdas más tiempo. En Openagua te brindamos una solución definitiva.</p>
            <a href="https://wa.me/5491151797649" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Consultar por WhatsApp ahora
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
