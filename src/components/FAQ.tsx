'use client';

import { useState } from 'react';
import Script from 'next/script';
import './FAQ.css';

export default function FAQ() {
  const faqs = [
    {
      q: "¿Qué tipo de destapaciones realizan?",
      a: "Realizamos destapaciones de cloacas, cañerías interiores (cocinas, baños, inodoros), tuberías pluviales, y limpieza de cámaras cloacales y sumideros."
    },
    {
      q: "¿Trabajan con máquina de sonda e hidrojet?",
      a: "Sí, utilizamos equipos profesionales de sonda rotativa para obstrucciones comunes y sistema Hidrojet de alta presión para limpiezas profundas y sarro."
    },
    {
      q: "¿Hacen video inspección de cañerías?",
      a: "Sí. Contamos con cámaras de video inspección para detectar con exactitud obstrucciones, roturas o raíces sin necesidad de romper paredes ni pisos."
    },
    {
      q: "¿Usan camión atmosférico?",
      a: "No, no prestamos servicio de camión atmosférico ni desagote de pozos ciegos. Nos enfocamos exclusivamente en destapaciones y mantenimiento de cañerías."
    },
    {
      q: "¿Cobran por metro o por trabajo?",
      a: "Cobramos por tarifa plana según el tipo de destapación a realizar, independientemente de los metros de cable que debamos ingresar. Presupuestos claros y sin sorpresas."
    },
    {
      q: "¿En qué zonas trabajan?",
      a: "Cubrimos todo CABA (Ciudad Autónoma de Buenos Aires) y Gran Buenos Aires (Zona Norte, Zona Sur y Zona Oeste)."
    },
    {
      q: "¿Cuál es el horario de atención?",
      a: "Atendemos de Lunes a Sábados de 8 a 19 hs. Trabajamos de manera programada y coordinada."
    },
    {
      q: "¿Trabajan con consorcios y edificios?",
      a: "Sí, realizamos trabajos y mantenimiento preventivo integral para edificios, consorcios y administraciones con presupuestos formales."
    },
    {
      q: "¿Cuánto cuesta destapar una cloaca?",
      a: "El costo varía según el diámetro, accesibilidad y gravedad de la obstrucción (ej. superficial vs. raíces). Te recomendamos consultarnos por WhatsApp detallando tu problema para un presupuesto sin cargo."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleOpen = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <div className="faq-container">
          {faqs.map((faq, idx) => (
            <div className={`faq-item ${openIdx === idx ? 'open' : ''}`} key={idx}>
              <button 
                className="faq-question" 
                onClick={() => toggleOpen(idx)}
                aria-expanded={openIdx === idx}
              >
                {faq.q}
                <span className="faq-toggle">{openIdx === idx ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </section>
  );
}
