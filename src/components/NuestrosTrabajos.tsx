'use client';
import { useState } from 'react';
import './NuestrosTrabajos.css';

export default function NuestrosTrabajos() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800', 
    'https://images.unsplash.com/photo-1542013936693-884638332954?w=800', 
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800', 
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800', 
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', 
    'https://images.unsplash.com/photo-1621905251189-08b45249b6c7?w=800', 
  ];

  return (
    <section className="section bg-light" id="nuestros-trabajos">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">Nuestros Trabajos</h2>
          <p style={{ color: '#64748b', fontSize: '1.25rem' }}>Fotos reales de trabajos realizados por nuestro equipo</p>
        </div>
        
        <div className="trabajos-grid">
          {images.map((img, idx) => (
            <div key={idx} className="trabajo-card" onClick={() => setSelectedImage(img)}>
              <div 
                className="trabajo-img" 
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="trabajo-overlay">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage} alt="Trabajo realizado de destapación y plomería" />
          </div>
        </div>
      )}
    </section>
  );
}
