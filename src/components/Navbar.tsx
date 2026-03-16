import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar-container">
      <div className="container navbar-content">
        <Link href="/" className="logo">
          <Image src="/logo.svg" alt="Openagua Destapaciones" width={180} height={45} priority />
        </Link>
        <nav className="desktop-menu">
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/#servicios">Servicios</Link></li>
            <li><Link href="/#zonas">Zonas</Link></li>
            <li><Link href="/#como-trabajamos">Cómo Trabajamos</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/#contacto">Contacto</Link></li>
          </ul>
        </nav>
        <div className="navbar-cta desktop-only">
          <a href="https://wa.me/5491151797649" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Consultar por WhatsApp
          </a>
        </div>
        
        {/* Mobile menu basics */}
        <div className="mobile-menu-btn">
          <span>☰</span>
        </div>
      </div>
    </header>
  );
}
