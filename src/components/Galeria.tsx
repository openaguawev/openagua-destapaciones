'use client';

import { useState } from 'react';
import './Galeria.css';

export default function Galeria() {
  const images = [
    { src: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800", alt: "Limpieza de desagües y cañerías" },
    { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800", alt: "Cámara de inspección para caños" },
    { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800", alt: "Plomero profesional destapando" },
    { src: "https://images.unsplash.com/photo-1542013936693-884638332954?w=800", alt: "Sistema hidrojet alta presión" },
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", alt: "Destapación de cloacas profundas" },
    { src: "https://images.unsplash.com/photo-1621905251189-08b45249b6c7?w=800", alt: "Trabajo en sistema cloacal" }
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
