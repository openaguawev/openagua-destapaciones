"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="navbar-container">
        <div className="container navbar-content">
          <Link href="/" className="logo" onClick={closeMenu}>
            <Image src="/logo.svg" alt="Openagua Destapaciones" width={180} height={45} priority />
          </Link>
          <nav className="desktop-menu">
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/#servicios">Servicios</Link></li>
              <li><Link href="/#zonas">Zonas</Link></li>
              <li><Link href="/#como-trabajamos">Cómo Trabajamos</Link></li>
              <li><Link href="/#trabajos">Nuestros Trabajos</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#contacto">Contacto</Link></li>
            </ul>
          </nav>
          <div className="navbar-cta desktop-only">
            <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Consultar por WhatsApp
            </a>
          </div>
          
          <div className="mobile-menu-btn" onClick={toggleMenu} role="button" aria-label="Open mobile menu">
            <span>☰</span>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Overlay Menu */}
      <div className={`mobile-overlay ${isOpen ? 'open' : ''}`}>
        <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close mobile menu">
          ✕
        </button>
        <nav>
          <ul>
            <li><Link href="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link href="/#servicios" onClick={closeMenu}>Servicios</Link></li>
            <li><Link href="/#zonas" onClick={closeMenu}>Zonas</Link></li>
            <li><Link href="/#como-trabajamos" onClick={closeMenu}>Cómo Trabajamos</Link></li>
            <li><Link href="/#trabajos" onClick={closeMenu}>Nuestros Trabajos</Link></li>
            <li><Link href="/blog" onClick={closeMenu}>Blog</Link></li>
            <li><Link href="/#contacto" onClick={closeMenu}>Contacto</Link></li>
          </ul>
        </nav>
        <div style={{ marginTop: '2rem' }}>
          <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto" target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={closeMenu}>
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
