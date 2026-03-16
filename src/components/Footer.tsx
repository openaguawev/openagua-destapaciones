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
            <li><Link href="/sistema-hidrojets">Sistema Hidro Jet</Link></li>
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
