import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo">Openagua Destapaciones</div>
          <p className="slogan">Trabajos bien hechos, explicados y sin soluciones temporales.</p>
        </div>
        <div className="footer-links">
          <h3>Servicios</h3>
          <ul>
            <li><Link href="/destapaciones-cloacas">Destapación de Cloacas</Link></li>
            <li><Link href="/destapaciones-canerias">Destapaciones de Cañerías</Link></li>
            <li><Link href="/destapaciones-pluviales">Destapaciones Pluviales</Link></li>
            <li><Link href="/destapaciones-hidrojet">Destapaciones con Hidrojet</Link></li>
            <li><Link href="/video-inspeccion">Video Inspección Cloacal</Link></li>
            <li><Link href="/limpieza-camaras">Limpieza de Cámaras</Link></li>
            <li><Link href="/desagotes">Desagote de Sótanos</Link></li>
            <li><Link href="/mantenimiento-preventivo">Mantenimiento Preventivo</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Zonas de Cobertura</h3>
          <ul>
            <li><Link href="/zonas/caba">CABA</Link></li>
            <li><Link href="/zonas/zona-norte">Zona Norte</Link></li>
            <li><Link href="/zonas/zona-oeste">Zona Oeste</Link></li>
            <li><Link href="/zonas/zona-sur">Zona Sur</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Blog</h3>
          <ul>
            <li><Link href="/blog/como-detectar-obstruccion-cloaca">Cómo detectar una obstrucción</Link></li>
            <li><Link href="/blog/sonda-vs-hidrojet-diferencias">Sonda vs Hidrojet</Link></li>
            <li><Link href="/blog/cuanto-cuesta-destapar-cloaca">¿Cuánto cuesta destapar?</Link></li>
            <li><Link href="/blog/raices-en-canerias">Raíces en cañerías</Link></li>
            <li><Link href="/blog/como-funciona-hidrojet">Cómo funciona el hidrojet</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>Teléfono: <a href="tel:+5491151797649">15-5179-7649</a></p>
          <p>Horario: Lunes a Sábado 8 a 19 hs</p>
          <div className="social-icons">
            <a href="https://facebook.com/openagua" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/destapaciones_openagua/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.youtube.com/@openagua/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.16 1 12 1 12s0 3.84.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.84 23 12 23 12s0-3.84-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Openagua Destapaciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
