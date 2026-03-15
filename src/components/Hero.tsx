import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Destapaciones en CABA y Gran Buenos Aires | Openagua</h1>
        <p className="hero-subtitle">Trabajos bien hechos, explicados y sin soluciones temporales. Destapaciones de cloacas, cañerías e hidrojet. Atención de lunes a sábado de 8 a 19 hs.</p>
        <div className="hero-ctas">
          <a href="https://wa.me/5491151797649" target="_blank" rel="noopener noreferrer" className="btn-primary hero-btn">
            <span className="icon">💬</span> Consultar por WhatsApp
          </a>
          <a href="tel:+5491151797649" className="btn-outline hero-btn">
            <span className="icon">📞</span> Llamar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
