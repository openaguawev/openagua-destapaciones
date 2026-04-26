import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo">Openagua Destapaciones</div>
          <p className="slogan">Trabajos bien hechos en CABA y GBA, con diagnóstico preciso y atención personalizada.</p>
        </div>
        <div className="footer-links">
          <div className="footer-heading" style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: '#fff' }}>Servicios</div>
          <ul>
            <li><Link href="/destapaciones-cloacas" title="Destapación de Cloacas">Destapación de Cloacas</Link></li>
            <li><Link href="/destapaciones-canerias" title="Destapaciones de Cañerías">Destapaciones de Cañerías</Link></li>
            <li><Link href="/destapaciones-pluviales" title="Destapaciones Pluviales">Destapaciones Pluviales</Link></li>
            <li><Link href="/destapaciones-hidrojet" title="Sistema Hidrojet">Destapaciones con Hidrojet</Link></li>
            <li><Link href="/video-inspeccion-canerias" title="Video Inspección">Video Inspección de Cañerías</Link></li>
            <li><Link href="/limpieza-camaras-septicas" title="Limpieza de Cámaras">Limpieza de Cámaras Sépticas</Link></li>
            <li><Link href="/desagote-sotanos" title="Desagotes">Desagote de Sótanos</Link></li>
            <li><Link href="/mantenimientos-preventivos" title="Mantenimientos">Mantenimientos Preventivos</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <div className="footer-heading" style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: '#fff' }}>Zonas de Cobertura</div>
          <ul>
            <li><Link href="/zonas/caba" title="Cobertura en CABA">CABA</Link></li>
            <li><Link href="/zonas/zona-norte" title="Cobertura en Zona Norte">Zona Norte</Link></li>
            <li><Link href="/zonas/zona-oeste" title="Cobertura en Zona Oeste">Zona Oeste</Link></li>
            <li><Link href="/zonas/zona-sur" title="Cobertura en Zona Sur">Zona Sur</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <div className="footer-heading" style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: '#fff' }}>Blog</div>
          <ul>
            <li><Link href="/blog/por-que-cocina-huele-a-cloaca">Por qué la cocina huele a cloaca</Link></li>
            <li><Link href="/blog/5-senales-columna-edificio-tapada">Cómo detectar obstrucción en columna</Link></li>
            <li><Link href="/blog/resorte-vs-hidrojet-cual-es-mejor">Sonda vs Hidrojet</Link></li>
            <li><Link href="/blog/video-inspeccion-saber-cano-roto-sin-romper">Video Inspección de cañerías</Link></li>
            <li><Link href="/blog/inodoro-rebalsa-que-hacer">Inodoro rebalsa: qué hacer</Link></li>
            <li><Link href="/blog/rejilla-patio-tapada-lluvia">Rejilla del patio tapada</Link></li>
            <li><Link href="/blog/problema-departamento-o-columna">¿El problema está en tu depto o columna?</Link></li>
            <li><Link href="/blog/ducha-desagota-lento">La ducha desagota lento</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <div className="footer-heading" style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: '#fff' }}>Contacto</div>
          <p>Teléfono: <a href="tel:+5491151797649">15-5179-7649</a></p>
          <p>Horario: Lunes a Domingo 8 a 19 hs</p>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.25rem' }}>Urgencias 24hs los 7 días</p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
            <strong>Base operativa:</strong> Zona Oeste, Buenos Aires<br />
            <strong>Cobertura:</strong> CABA y Gran Buenos Aires
          </p>
          <div className="social-icons">
            <a href="https://facebook.com/openagua" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Visitanos en Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/destapaciones_openagua/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Visitanos en Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.youtube.com/@openagua/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="Mirá nuestros trabajos en YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.16 1 12 1 12s0 3.84.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.84 23 12 23 12s0-3.84-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
            </a>
            <a href="https://www.tiktok.com/@destapacionesopenagua" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="Seguinos en TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="currentColor">
                <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <a href="tel:+5491151797649" className="footer-final-cta">
            <div className="footer-final-cta-left">
              <div className="footer-final-cta-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="footer-final-cta-text">
                <span className="cta-text-mobile">¿Necesitás una destapación ahora?</span>
                <span className="cta-text-desktop">Escribenos ahora</span>
              </div>
            </div>
            <div className="footer-final-cta-right">
              <strong>11 5179-7649</strong>
            </div>
          </a>
          <p>&copy; 2026 Openagua Destapaciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
