'use client';

import { useState } from 'react';
import Script from 'next/script';
import './FAQ.css';

export default function FAQ() {
  const faqs = [
    {
      q: "¿Qué tipo de destapaciones realizan?",
      a: "Realizamos destapaciones de cloacas, cañerías interiores (cocinas, baños, inodoros), tuberías pluviales y limpieza de cámaras cloacales y sumideros."
    },
    {
      q: "¿Trabajan con máquina de sonda e hidrojet?",
      a: "Sí, utilizamos equipos profesionales de sonda rotativa para obstrucciones comunes y sistema Hidrojet de alta presión para limpiezas profundas como cañerías con arena, grasa acumulada y sedimentos."
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
      a: "Cobramos por el trabajo realizado, no por metro de sonda. El precio se define antes de arrancar según el tipo de servicio. Sin sorpresas."
    },
    {
      q: "¿Cómo sé si el problema está en el troncal principal?",
      a: "Cuando el troncal principal está tapado, los síntomas aparecen en los puntos más bajos de la instalación: la rejilla de patio o la pileta de piso rebalsan al usar la ducha, el bidet, el lavamanos o al tirar la mochila del inodoro. En algunos casos, si no hay rejilla, el agua puede burbujear o salir por debajo del inodoro. El inodoro queda más alto en la instalación, por lo que raramente rebalsa — lo que se ve afectado primero son siempre los desagües más bajos. Si notás cualquiera de estas señales, es indicativo de una obstrucción en el caño principal y requiere intervención profesional."
    },
    {
      q: "¿Por qué la cocina huele a cloaca?",
      a: "El olor a cloaca en la cocina puede tener varias causas: una cañería parcialmente tapada que no permite la ventilación correcta, el sifón sucio o seco por falta de uso, o un caño que conecta directamente a la cloaca sin el sello hidráulico adecuado, lo que permite que los gases suban libremente. No siempre hay una sola causa — a veces se combinan varios factores. Si el olor persiste después de limpiar el sifón y tirar agua, lo mejor es hacer una inspección para identificar el origen exacto."
    },
    {
      q: "¿Cómo se aseguran de que el trabajo quedó bien hecho?",
      a: "Verificamos el flujo de agua junto a vos antes de irnos. Si durante el trabajo el problema resulta más complejo de lo esperado, te avisamos antes de continuar y acordamos el precio. Trabajamos con honestidad y transparencia en cada trabajo."
    },
    {
      q: "¿En qué zonas trabajan?",
      a: "Cubrimos todo CABA (Ciudad Autónoma de Buenos Aires) y Gran Buenos Aires: Zona Norte, Zona Oeste y Zona Sur."
    },
    {
      q: "¿Cuál es el horario de atención?",
      a: "Atendemos de lunes a viernes de 8 a 19hs y los sábados de 8 a 13hs. Los domingos no trabajamos, pero podés dejarnos un mensaje por WhatsApp y te respondemos a primera hora del lunes."
    },
    {
      q: "¿Trabajan con consorcios y edificios?",
      a: "Sí, realizamos trabajos y mantenimiento preventivo para edificios, consorcios y administraciones con presupuestos formales."
    },
    {
      q: "¿Cuánto cuesta destapar una cloaca?",
      a: "El costo varía según el diámetro, accesibilidad y gravedad de la obstrucción. Te recomendamos consultarnos por WhatsApp detallando tu problema para darte un presupuesto rápido."
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
                aria-controls={`faq-answer-${idx}`}
              >
                {faq.q}
                <span className="faq-toggle">+</span>
              </button>
              <div id={`faq-answer-${idx}`} role="region" className="faq-answer">
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
