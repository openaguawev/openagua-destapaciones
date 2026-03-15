import './Diferenciales.css';

export default function Diferenciales() {
  const caracteristicas = [
    {
      icon: "🔧",
      title: "Equipamiento profesional",
      description: "Hidrojet, cámara y máquina de sonda"
    },
    {
      icon: "🎯",
      title: "Diagnóstico preciso",
      description: "Detectamos el origen real del problema"
    },
    {
      icon: "💪",
      title: "Soluciones duraderas",
      description: "Sin parches ni trabajos temporales"
    },
    {
      icon: "🕐",
      title: "Atención 8 a 19 hs",
      description: "Lunes a sábado, sin sorpresas"
    }
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="diferenciales-grid">
          {caracteristicas.map((item, index) => (
            <div className="diferencial-card" key={index}>
              <div className="diferencial-icon">{item.icon}</div>
              <h3 className="diferencial-title">{item.title}</h3>
              <p className="diferencial-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
