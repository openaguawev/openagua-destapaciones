'use client';

import { useState, useEffect } from 'react';
import './Resenas.css';

export default function Resenas() {
  const reviews = [
    { text: "Los contacté por una cañería tapada, vinieron el mismo día (era feriado), en el tiempo que dijeron. Cobran lo pactado, buen precio, excelente trabajo.", author: "Carolina Fernandez", rating: 5 },
    { text: "Muy correctos. Coordinamos la visita, llegaron y resolvieron todo. Rápido y funcional. Los súper recomendamos.", author: "María Luz Schiaffino", rating: 5 },
    { text: "Quedé muy satisfecha. Muy buen trato y pudimos determinar dónde estaba la rotura del caño.", author: "Gloria Sallés", rating: 5 },
    { text: "Excelente servicio, muy prolijos y limpios para trabajar, dejando todo en orden.", author: "Cecilia Campos Rojas", rating: 5 },
    { text: "Muy eficientes, prolijos y amables. Super recomendables.", author: "Yolanda Maschio", rating: 5 }
  ];

  return (
    <section className="section bg-light">
      <div className="container">
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        <div className="resenas-grid">
          {reviews.map((review, idx) => (
            <div className="resena-card" key={idx}>
              <div className="stars">
                {"★".repeat(review.rating)}
              </div>
              <p className="resena-text">&quot;{review.text}&quot;</p>
              <p className="resena-author">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
