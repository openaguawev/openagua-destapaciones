import React from 'react';
import Link from 'next/link';
import './Servicios.css';

export default function Servicios() {
  const servicios = [
    {
      title: "Destapación de Cloacas",
      desc: "Limpieza profunda de redes cloacales obstruidas, eliminando tapones de papel, raíces o sedimentos.",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
      link: "/destapaciones-cloacas"
    },
    {
      title: "Destapaciones de Cañerías",
      desc: "Rehabilitación del flujo de agua en baños, cocinas y lavaderos afectados por grasa o sarro.",
      img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=600",
      link: "/destapaciones-canerias"
    },
    {
      title: "Destapaciones Pluviales",
      desc: "Desatasco de rejillas, canaletas y caños de bajada afectados por barro y hojas antes de las tormentas.",
      img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=600",
      link: "/destapaciones-pluviales"
    },
    {
      title: "Sistema Hidro Jet",
      desc: "Lavado a presión extrema que remueve las calcificaciones sin dañar los caños de PVC o hierro.",
      img: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=600",
      link: "/sistema-hidrojets"
    },
    {
      title: "Video Inspección Cloacal",
      desc: "Cámaras sumergibles para diagnosticar problemas crónicos sin necesidad de romper pisos.",
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600",
      link: "/video-inspeccion"
    },
    {
      title: "Limpieza de Cámaras",
      desc: "Mantenimiento y vaciado de cámaras sépticas e interceptoras de grasa para consorcios.",
      img: "https://images.unsplash.com/photo-1508873535684-275a3048cb19?auto=format&fit=crop&q=80&w=600",
      link: "/limpieza-camaras"
    },
    {
      title: "Desagote de Sótanos",
      desc: "Evacuación ultra rápida de agua en subsuelos y fosos de ascensor inundados mediante bombas.",
      img: "https://images.unsplash.com/photo-1585814521473-b31c40ab21e3?auto=format&fit=crop&q=80&w=600",
      link: "/desagotes"
    },
    {
      title: "Mantenimiento Preventivo",
      desc: "Planes anuales para edificios residenciales, evitando urgencias costosas en feriados y fines de semana.",
      img: "https://images.unsplash.com/photo-1648714659424-69db9e6fd63b?auto=format&fit=crop&q=80&w=600",
      link: "/mantenimiento-preventivo"
    }
  ];

  return (
    <section id="servicios" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios de Destapaciones</h2>
        <div className="servicios-grid">
          {servicios.map((s, idx) => (
            <div key={idx} className="servicio-card">
              <div className="servicio-img-wrapper">
                <img src={s.img} alt={s.title} className="servicio-img" loading="lazy" />
              </div>
              <div className="servicio-content">
                <h3 className="servicio-title">{s.title}</h3>
                <p className="servicio-desc">{s.desc}</p>
                <Link href={s.link} className="servicio-link">
                  Ver más sobre este servicio →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
