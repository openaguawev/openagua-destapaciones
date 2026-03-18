'use client';

import { useState } from 'react';
import './Galeria.css';

export default function Galeria() {
  const placeholders = Array.from({ length: 6 });

  return (
    <section id="galeria" className="section section-alt" style={{ padding: '5rem 0' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Trabajos reales, resultados reales</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '24px' 
        }}>
          {placeholders.map((_, idx) => (
            <div key={idx} style={{
              backgroundColor: '#ffffff',
              border: '2px dashed #16A34A',
              borderRadius: '12px',
              aspectRatio: '4/3',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#16A34A',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Foto próximamente</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
