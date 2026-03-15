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
            <li><Link href="/#servicios">Destapación de Cloacas</Link></li>
            <li><Link href="/#servicios">Destapaciones de Cañerías</Link></li>
            <li><Link href="/#servicios">Destapaciones Pluviales</Link></li>
            <li><Link href="/#servicios">Sistema Hidro Jet</Link></li>
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
