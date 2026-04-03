import Hero from '@/components/Hero';
import Diferenciales from '@/components/Diferenciales';
import Servicios from '@/components/Servicios';
import Zonas from '@/components/Zonas';
import ComoTrabajamos from '@/components/ComoTrabajamos';
import NuestrosTrabajos from '@/components/NuestrosTrabajos';
import Resenas from '@/components/Resenas';
import FAQ from '@/components/FAQ';
import Contacto from '@/components/Contacto';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <section className="trust-block" style={{ background: '#f8fafc', padding: '2rem 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          <div className="trust-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.5rem' }}>📍</span>
            <span style={{ fontWeight: 'bold', color: '#0f172a' }}>Atención CABA y GBA</span>
          </div>
          <div className="trust-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.5rem' }}>⚙️</span>
            <span style={{ fontWeight: 'bold', color: '#0f172a' }}>Máquinas Profesionales</span>
          </div>
          <div className="trust-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.5rem' }}>⚡</span>
            <span style={{ fontWeight: 'bold', color: '#0f172a' }}>Respuesta Rápida</span>
          </div>
        </div>
      </section>

      <Diferenciales />
      <Servicios />

      <section className="cta-break" style={{ background: '#0f172a', padding: '4rem 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'white' }}>¿Tenés una urgencia ahora?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', opacity: 0.9 }}>No esperes a que se inunde. Llamanos y resolvemos en el día.</p>
          <a href="tel:+5491151797649" style={{ background: '#16A34A', color: 'white', padding: '15px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem', display: 'inline-block' }}>
            📞 Llamar al 11 5179-7649
          </a>
        </div>
      </section>

      <Zonas />
      <ComoTrabajamos />
      <NuestrosTrabajos />
      <Resenas />
      <FAQ />
      <Contacto />
    </main>
  );
}
