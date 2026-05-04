import React from 'react';
import Link from 'next/link';
import { getRelatedBlogPosts } from '@/lib/blogUtils';

interface RelatedBlogPostsProps {
  barrioName: string;
}

export default function RelatedBlogPosts({ barrioName }: RelatedBlogPostsProps) {
  const posts = getRelatedBlogPosts(barrioName);

  if (!posts || posts.length === 0) return null;

  return (
    <section style={{ padding: '3rem 1rem', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', marginTop: '3rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '2rem', textAlign: 'center' }}>
          Guías útiles para vecinos de {barrioName}
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                textDecoration: 'none',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              className="blog-card-hover"
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#16a34a', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                {post.title}
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                {post.excerpt}
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <span style={{ color: '#0f172a', fontWeight: 500, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Leer artículo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        {/* CSS inline para el hover, ya que no queremos crear un archivo CSS entero solo para este hover */}
        <style dangerouslySetInnerHTML={{__html: `
          .blog-card-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
            border-color: #16a34a !important;
          }
        `}} />
      </div>
    </section>
  );
}
