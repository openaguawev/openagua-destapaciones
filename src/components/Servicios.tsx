import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import './Servicios.css';

export default function Servicios() {
  const servicios = [
    {
      title: "Destapaciones con máquinas",
      desc: "Destapación de cañerías, cloacas, inodoros y pluviales con máquina de resortes e hidrojet sin romper.",
      link: "/destapaciones-maquinas",
      btnText: "Ver servicio",
      icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    },
    {
      title: "Destapación de Cloacas",
      desc: "Solucionamos obstrucciones con sonda rotativa o hidrojet.",
      link: "/destapaciones-cloacas",
      btnText: "Ver servicio de Cloacas",
      icon: <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
    },
    {
      title: "Destapación de Cañerías",
      desc: "Limpieza de desagües de cocina, baño y lavadero con máquinas de resortes.",
      link: "/destapaciones-canerias",
      btnText: "Ver servicio de Cañerías",
      icon: <><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.6 2 5 2 2.3 0 2.3-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.6 2 5 2 2.3 0 2.3-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.6 2 5 2 2.3 0 2.3-2 5-2 1.3 0 1.9.5 2.5 1"/></>
    },
    {
      title: "Destapación de Pluviales",
      desc: "Desobstrucción de rejillas y terrazas. Evitá inundaciones por hojas y barro.",
      link: "/destapaciones-pluviales",
      btnText: "Ver servicio de Pluviales",
      icon: <><path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5"/><path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-6l-3.4-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.8 1.1z"/></>
    },
    {
      title: "Destapación con Hidrojet",
      desc: "Limpieza técnica con agua a presión para sarro y sedimentos rebeldes.",
      link: "/destapaciones-hidrojet",
      btnText: "Ver sistema Hidrojet",
      icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    },
    {
      title: "Video Inspección de Cañerías",
      desc: "Diagnóstico con cámara HD. Localizamos roturas o raíces sin romper.",
      link: "/video-inspeccion-canerias",
      btnText: "Ver Video Inspección",
      icon: <><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></>
    },
    {
      title: "Limpieza de Cámaras Sépticas",
      desc: "Mantenimiento de cámaras de inspección y sépticas para evitar olores.",
      link: "/limpieza-camaras-septicas",
      btnText: "Ver limpieza de Cámaras",
      icon: <><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></>
    },
    {
      title: "Desagote de Sótanos",
      desc: "Vaciado con bombas sumergibles de gran caudal.",
      link: "/desagote-sotanos",
      btnText: "Ver servicio de Desagotes",
      icon: <><rect x="6" y="10" width="12" height="12" rx="2"/><path d="M12 10V2"/><path d="m8 6 4-4 4 4"/><circle cx="12" cy="16" r="3"/></>
    },
    {
      title: "Mantenimientos Preventivos",
      desc: "Planes preventivos para consorcios y empresas.",
      link: "/mantenimientos-preventivos",
      btnText: "Ver Mantenimientos Preventivos",
      icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></>
    }
  ];

  return (
    <section id="servicios" className="section bg-light">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Nuestros Servicios</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#475569', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          Realizamos destapaciones con máquinas, hidrojet y video inspección en CABA, Zona Oeste y alrededores.
        </p>
        <div className="servicios-grid">
          {servicios.map((s, idx) => (
            <div key={idx} className="servicio-card">
              <div className="servicio-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="servicio-icon">
                  {s.icon}
                </svg>
              </div>
              <div className="servicio-title" style={{ fontWeight: 'bold' }}>{s.title}</div>
              <p className="servicio-desc">{s.desc}</p>
              <Link href={s.link} className="servicio-btn">
                {s.btnText}
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            servicios.map(s => ({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": s.title,
              "description": s.desc,
              "provider": {
                "@type": "LocalBusiness",
                "name": "Openagua"
              }
            }))
          )
        }}
      />
    </section>
  );
}
