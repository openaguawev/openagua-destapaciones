'use client';

import { useState } from 'react';
import './Contacto.css';

export default function Contacto() {
  const [status, setStatus] = useState<'' | 'sending' | 'success'>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const formElements = e.target as HTMLFormElement;
    
    // Convert FormData to JSON object for our Next.js API Route
    const formData = new FormData(formElements);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/contact', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus('success');
        formElements.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('');
      }
    } catch (error) {
      console.error(error);
      setStatus('');
    }
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="container">
        <h2 className="contacto-title" style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem', textShadow: '0 0 0 #fff' }}>Pedí tu presupuesto sin compromiso</h2>
        
        <div className="contacto-container">
          <form className="contacto-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" />
            </div>
            
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input type="tel" id="telefono" name="telefono" required placeholder="Tu número de teléfono" />
            </div>
            
            <div className="form-group">
              <label htmlFor="direccion">Dirección (Localidad)</label>
              <input type="text" id="direccion" name="direccion" required placeholder="Ej: Palermo, CABA" />
            </div>
            
            <div className="form-group">
              <label htmlFor="servicio">Servicio a consultar</label>
              <select id="servicio" name="servicio" required>
                <option value="" disabled selected>Seleccioná una opción...</option>
                <option value="Destapación de Cloacas">Destapación de Cloacas</option>
                <option value="Destapación de Cañerías">Destapaciones de Cañerías</option>
                <option value="Destapaciones Pluviales">Destapaciones Pluviales</option>
                <option value="Sistema Hidro Jet">Sistema Hidro Jet</option>
                <option value="Video Inspección">Video Inspección Cloacal</option>
                <option value="Limpieza de Cámaras">Limpieza de Cámaras</option>
                <option value="Desagote de Sótanos">Desagote de Sótanos</option>
                <option value="Mantenimiento Preventivo">Mantenimiento Preventivo</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="descripcion">Descripción del problema</label>
              <textarea id="descripcion" name="descripcion" rows={4} required placeholder="Contanos brevemente qué sucede..."></textarea>
            </div>
            
            <button type="submit" className="btn-primary form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando...' : 'Enviar consulta'}
            </button>
            
            {status === 'success' && (
              <div className="form-success">
                ¡Mensaje enviado! Nos contactaremos a la brevedad.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
