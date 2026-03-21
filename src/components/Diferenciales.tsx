import './Diferenciales.css';

export default function Diferenciales() {
  const caracteristicas = [
    {
      icon: "🎯",
      title: "Diagnóstico Preciso",
      description: "Detectamos el origen real del problema"
    },
    {
      icon: "🔧",
      title: "Equipamiento Profesional",
      description: "Hidrojet, cámara y máquina de sonda"
    },
    {
      icon: "📍",
      title: "Cobertura Amplia",
      description: "CABA y Gran Buenos Aires"
    },
    {
      icon: "💎",
      title: "Presupuesto Transparente",
      description: "Sin parches ni costos ocultos"
    }
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="diferenciales-grid">
          {caracteristicas.map((item, index) => (
            <div className="diferencial-card" key={index}>
              <div className="diferencial-icon">{item.icon}</div>
              <div className="diferencial-title" style={{ fontWeight: 'bold' }}>{item.title}</div>
              <p className="diferencial-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
