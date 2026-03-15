import './Servicios.css';

export default function Servicios() {
  const servicios = [
    {
      title: "Destapación de Cloacas",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
      desc: "Realizamos destapaciones de cloacas con máquina de sonda y sistemas de alta presión. Eliminamos obstrucciones profundas sin dañar las instalaciones. Detectamos el origen real del problema y aplicamos la solución adecuada. Trabajamos en casas, PH, edificios y consorcios en CABA y GBA."
    },
    {
      title: "Destapaciones de Cañerías",
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=600",
      desc: "Solucionamos obstrucciones en cañerías de cocina, baño, lavatorios e inodoros. Eliminamos acumulaciones de grasa, sarro y residuos sólidos con herramientas profesionales. Diagnóstico preciso antes de cualquier intervención. Sin roturas innecesarias."
    },
    {
      title: "Destapaciones Pluviales",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=600",
      desc: "Limpieza y destapación de desagües pluviales, rejillas, terrazas y balcones. Garantizamos el correcto drenaje del agua para evitar filtraciones. Servicio ideal antes de la temporada de lluvias. Trabajamos en altura con equipos adecuados."
    },
    {
      title: "Sistema Hidro Jet",
      image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=600",
      desc: "Limpieza profunda de cañerías con agua a alta presión. El hidrojet elimina grasa adherida, sarro, raíces y sedimentos que la sonda no puede resolver. Ideal para mantenimiento preventivo en edificios. Resultado duradero y sin productos químicos."
    },
    {
      title: "Video Inspección Cloacal",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600",
      desc: "Diagnóstico preciso mediante cámara introducida en la cañería. Detectamos obstrucciones, roturas, panzas o raíces sin romper paredes ni pisos. Obtenés un informe visual del estado real de tu instalación. El método más preciso para problemas recurrentes."
    },
    {
      title: "Limpieza de Cámaras",
      image: "https://images.unsplash.com/photo-1508873535684-275a3048cb19?auto=format&fit=crop&q=80&w=600",
      desc: "Limpieza completa de cámaras cloacales con equipos mecánicos e hidrojet. Eliminamos sólidos, grasas y sedimentos que generan malos olores. Recomendado para edificios, consorcios y comercios. Incluye inspección del estado general."
    },
    {
      title: "Desagote de Sótanos",
      image: "https://images.unsplash.com/photo-1585814521473-b31c40ab21e3?auto=format&fit=crop&q=80&w=600",
      desc: "Extracción de agua acumulada en sótanos y espacios inundados con bombas sumergibles profesionales. Solución rápida para espacios anegados por lluvias o roturas. Dejamos el espacio seco y evaluamos el origen. Atención de 8 a 19 hs."
    },
    {
      title: "Mantenimiento Preventivo",
      image: "https://images.unsplash.com/photo-1648714659424-69db9e6fd63b?auto=format&fit=crop&q=80&w=600",
      desc: "Servicio programado para edificios, consorcios y viviendas. Prevenimos obstrucciones antes de que se conviertan en emergencias. Prolongamos la vida útil de las instalaciones sanitarias. Incluye revisión, limpieza y reporte."
    }
  ];

  return (
    <section id="servicios" className="section">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios de Destapaciones</h2>
        <div className="servicios-grid">
          {servicios.map((s, idx) => (
            <div className="servicio-card" key={idx}>
              <div className="servicio-img-container">
                <img src={s.image} alt={s.title} className="servicio-img" loading="lazy" />
              </div>
              <div className="servicio-content">
                <h3 className="servicio-title">{s.title}</h3>
                <p className="servicio-desc">{s.desc}</p>
                <div className="servicio-footer">
                  <a href="https://wa.me/5491151797649" className="servicio-btn">Ver más / Consultar</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
