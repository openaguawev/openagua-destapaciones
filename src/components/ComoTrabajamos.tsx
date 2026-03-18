import './ComoTrabajamos.css';

export default function ComoTrabajamos() {
  const pasos = [
    {
      num: "1",
      title: "Contacto",
      desc: "Recibimos tu consulta por WhatsApp o teléfono para entender el problema.",
      icon: "💬"
    },
    {
      num: "2",
      title: "Evaluación",
      desc: "Realizamos el diagnóstico y te brindamos un presupuesto claro y sin compromiso.",
      icon: "🔎"
    },
    {
      num: "3",
      title: "Ejecución",
      desc: "Trabajamos en el lugar con el equipamiento especializado (sonda o hidrojet).",
      icon: "🔧"
    },
    {
      num: "4",
      title: "Verificación",
      desc: "Comprobamos que el drenaje sea el correcto y te explicamos el trabajo realizado.",
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
