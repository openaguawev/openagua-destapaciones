import Image from 'next/image';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-badge-top">
          <span className="icon-drop">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#16A34A">
              <path d="M12 21.5c-4.14 0-7.5-3.36-7.5-7.5 0-4.14 4.5-10.5 7.5-12 3 1.5 7.5 7.86 7.5 12 0 4.14-3.36 7.5-7.5 7.5z"></path>
            </svg>
          </span> 
          SERVICIO PROFESIONAL
        </div>
        
        <h1>Destapaciones en <span className="text-green">CABA</span> y Gran Buenos Aires</h1>
        
        <p className="hero-subtitle">
          Servicio de destapación con diagnóstico preciso y presupuesto transparente. Recuperamos el drenaje de tu red con equipos especializados. Atendemos casas, consorcios y comercios en toda la zona.
        </p>
        
        <div className="hero-features-inline">
          <div className="hero-feature">
            <span className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </span> 
            Diagnóstico preciso
          </div>
          <div className="hero-feature">
            <span className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </span> 
            Presupuesto transparente
          </div>
          <div className="hero-feature">
            <span className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </span> 
            Equipos especializados
          </div>
          <div className="hero-feature">
            <span className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </span> 
            Cobertura en toda la zona
          </div>
        </div>

        <div className="hero-ctas">
          <a href="tel:+5491151797649" className="btn-outline hero-btn hero-btn-call" title="Llamanos ahora">
            <span className="icon" style={{ display: 'flex' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span> Llamar ahora
          </a>
          <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto" target="_blank" rel="noopener noreferrer" className="btn-primary hero-btn" title="Contactanos por WhatsApp">
            <span className="icon" style={{ display: 'flex' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"></path>
              </svg>
            </span> Consultar por WhatsApp
          </a>
        </div>
      </div>
      
      <div className="hero-right">
        <Image 
          src="/img/hero-tecnico.png" 
          alt="Técnico trabajando en la ciudad" 
          fill 
          priority={true}
          style={{ objectFit: 'cover' }} 
          quality={90}
        />
        
        <div className="hero-stats-card">
          <div className="stat-item">
            <span className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </span>
            <div className="stat-text">
              <strong>+12 años</strong>
              <span>de experiencia</span>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </span>
            <div className="stat-text">
              <strong>333 reseñas</strong>
              <span>verificadas</span>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </span>
            <div className="stat-text">
              <strong>Equipos de</strong>
              <span>última generación</span>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </span>
            <div className="stat-text">
              <strong>Precio por</strong>
              <span>trabajo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
