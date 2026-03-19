'use client';
import Image from 'next/image';
import './NuestrosTrabajos.css';

export default function NuestrosTrabajos() {
  const trabajos = [
    {
      src: '/img/limpieza de alcantarilla.jpg',
      title: 'Limpieza en Vía Pública',
      alt: 'Limpieza de cloacas en vía pública en CABA y GBA - Openagua'
    },
    {
      src: '/img/video inspeccion.jpg',
      title: 'Detección con Cámara',
      alt: 'Video inspección de cañerías con cámara en CABA y GBA - Openagua'
    },
    {
      src: '/img/home.jpg',
      title: 'Equipamiento Móvil',
      alt: 'Vehículos y equipamiento móvil para destapaciones en CABA y GBA - Openagua'
    },
    {
      src: '/img/destapacion maquina.jpg',
      title: 'Destapación Mecánica',
      alt: 'Máquina de destapación mecánica con resortes en CABA y GBA - Openagua'
    },
    {
      src: '/img/hidrojet cloaca.jpg',
      title: 'Servicio a Domicilio',
      alt: 'Manguera de hidrojet y maquinaria para urgencia cloacal a domicilio - Openagua'
    },
    {
      src: '/img/maquina resortes.jpg',
      title: 'Herramientas Profesionales',
      alt: 'Herramientas profesionales para mantenimiento cloacal preventivo - Openagua'
    }
  ];

  return (
    <section className="section bg-light" id="trabajos" style={{ padding: '5rem 0', textAlign: 'center', width: '100%', margin: '0 auto' }}>
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
        <div style={{ textAlign: 'center', margin: '0 auto', padding: 0 }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0f172a' }}>Nuestros Trabajos</h2>
          <p style={{ color: '#64748b', fontSize: '1.15rem', textAlign: 'center', marginTop: '1.2rem', marginBottom: '2.5rem', padding: 0 }}>
            Conocé parte del equipamiento y servicios realizados en CABA y el Gran Buenos Aires.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '30px',
          margin: '0 auto',
          width: '100%'
        }}>
          {trabajos.map((trabajo, idx) => (
            <div key={idx} style={{
              position: 'relative',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
            }}
            className="gallery-card"
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                <Image 
                  src={trabajo.src} 
                  alt={trabajo.alt} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  quality={85}
                />
              </div>
              <div style={{ padding: '1.25rem', backgroundColor: '#fff', textAlign: 'center', borderTop: '4px solid #16A34A' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', margin: 0 }}>{trabajo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
