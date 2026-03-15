'use client';

import { useState } from 'react';
import './Galeria.css';

export default function Galeria() {
  const images = [
    { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", alt: "Trabajo en cañerías 1" },
    { src: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800", alt: "Hidrojet en acción" },
    { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800", alt: "Cámara de inspección cloacal" },
    { src: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800", alt: "Máquina de sonda" },
    { src: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800", alt: "Destapación de cañerías" },
    { src: "https://images.unsplash.com/photo-1508873535684-275a3048cb19?auto=format&fit=crop&q=80&w=800", alt: "Limpieza profunda de cañería" }
  ];

  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="galeria" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Trabajos reales, resultados reales</h2>
        <div className="galeria-grid">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="galeria-item"
              onClick={() => setLightboxImg(img.src)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="galeria-overlay">
                <span>🔍 Ver zoom</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <span className="lightbox-close">&times;</span>
          <img src={lightboxImg} alt="Imagen ampliada" className="lightbox-content" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
