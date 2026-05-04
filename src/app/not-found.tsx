import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8fafc',
      padding: '2rem',
      textAlign: 'center',
      color: '#0f172a'
    }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 900, color: '#16A34A', margin: 0, lineHeight: 1 }}>
        404
      </h1>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0', color: '#0f172a' }}>
        Esta página no existe
      </h2>
      <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '500px', margin: '0 auto 2rem' }}>
        La página que buscás no está disponible. Pero podemos ayudarte igual.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
        <Link href="/" style={{
          backgroundColor: '#16A34A',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          display: 'inline-block'
        }}>
          Volver al Inicio
        </Link>
        <a href="https://wa.me/5491151797649" target="_blank" rel="noopener noreferrer" style={{
          backgroundColor: '#ffffff',
          color: '#16A34A',
          padding: '12px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          border: '2px solid #16A34A',
          display: 'inline-block'
        }}>
          Consultar por WhatsApp
        </a>
      </div>

      <div style={{ maxWidth: '600px', width: '100%' }}>
        <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '1.5rem', fontWeight: 600 }}>
          Servicios más consultados:
        </h3>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <Link href="/destapaciones-cloacas" style={{
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            color: '#0f172a',
            fontWeight: 500,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e2e8f0'
          }}>
            Destapación de Cloacas
          </Link>
          <Link href="/destapaciones-canerias" style={{
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            color: '#0f172a',
            fontWeight: 500,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e2e8f0'
          }}>
            Destapación de Cañerías
          </Link>
          <Link href="/video-inspeccion-canerias" style={{
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            color: '#0f172a',
            fontWeight: 500,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e2e8f0'
          }}>
            Video Inspección
          </Link>
        </div>
      </div>
    </div>
  );
}
