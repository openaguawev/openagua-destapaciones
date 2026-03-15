import './ComoTrabajamos.css';

export default function ComoTrabajamos() {
  const pasos = [
    {
      num: "1",
      title: "Consulta",
      desc: "Nos contactás y coordinamos la visita sin costo",
      icon: "💬"
    },
    {
      num: "2",
      title: "Diagnóstico",
      desc: "Evaluamos el problema con equipos profesionales",
      icon: "🔎"
    },
    {
      num: "3",
      title: "Trabajo adecuado",
      desc: "Aplicamos la solución correcta, no parches",
      icon: "🔧"
    },
    {
      num: "4",
      title: "Explicación del resultado",
      desc: "Te mostramos qué pasó y cómo quedó",
      icon: "✅"
    }
  ];

  return (
    <section id="como-trabajamos" className="section">
      <div className="container">
        <h2 className="section-title">¿Cómo trabajamos?</h2>
        <div className="pasos-container">
          {pasos.map((paso, index) => (
            <div className="paso-card" key={index}>
              <div className="paso-num">{paso.num}</div>
              <div className="paso-icon">{paso.icon}</div>
              <h3 className="paso-title">{paso.title}</h3>
              <p className="paso-desc">{paso.desc}</p>
              {index < pasos.length - 1 && <div className="paso-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
