import React from 'react';
import Link from 'next/link';
import { BarrioSeoData } from '@/data/barriosSeo';

/**
 * Genera un bloque de texto SEO único y natural para cada barrio.
 * Usa variaciones deterministas basadas en el nombre del barrio
 * para evitar contenido duplicado sin depender de aleatoriedad.
 */
export function generarTextoBarrio(nombre: string, data: BarrioSeoData): React.ReactNode {
  // Hash simple del nombre para seleccionar variantes de forma determinista
  const hash = nombre.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);

  // Variantes de apertura con frase de cercanía
  const aperturas = [
    <>Trabajamos frecuentemente en esta zona, y <strong>{nombre}</strong> es uno de los puntos donde más intervenciones realizamos.</>,
    <>Nuestro equipo recorre <strong>{nombre}</strong> de forma habitual, atendiendo consultas de vecinos y comercios.</>,
    <>En <strong>{nombre}</strong> tenemos presencia constante, lo que nos permite coordinar visitas en el día.</>,
    <><strong>{nombre}</strong> forma parte de nuestra ruta diaria de trabajo, por lo que llegamos rápido ante cualquier urgencia.</>,
    <>Conocemos muy bien <strong>{nombre}</strong> y sus particularidades edilicias, ya que trabajamos en esta zona con mucha frecuencia.</>,
  ];

  // Variantes de contexto urbano
  const contextos = [
    <>Al tratarse de una {data.tipo}, los problemas más habituales que encontramos incluyen {data.problemas[0]} y {data.problemas[1]}.</>,
    <>Por las características propias de esta {data.tipo}, es común que se presenten situaciones como {data.problemas[0]}, además de {data.problemas[2]}.</>,
    <>Esta {data.tipo} presenta desafíos específicos: desde {data.problemas[1]} hasta {data.problemas[2]}, que requieren equipamiento profesional.</>,
    <>Las propiedades de esta {data.tipo} suelen sufrir inconvenientes como {data.problemas[0]} y {data.problemas[2]}, especialmente en instalaciones con varios años de uso.</>,
  ];

  // Variantes de clientes
  const clientes = [
    <>Atendemos principalmente {data.propiedades[0]} y {data.propiedades[1]}, brindando soluciones rápidas y sin romper pisos ni paredes.</>,
    <>Nuestros clientes en la zona incluyen {data.propiedades[0]}, {data.propiedades[1]} y también {data.propiedades[2]}.</>,
    <>Damos servicio tanto a {data.propiedades[0]} como a {data.propiedades[2]}, adaptándonos a cada tipo de instalación.</>,
  ];

  // Variantes de cierre con interlinking natural (máx 2 links)
  const cierres = [
    <>Realizamos <Link href="/destapaciones-cloacas" style={{ color: '#16A34A', textDecoration: 'underline', fontWeight: 600 }}>destapaciones de cloacas</Link> y <Link href="/destapaciones-canerias" style={{ color: '#16A34A', textDecoration: 'underline', fontWeight: 600 }}>limpieza de cañerías</Link> con equipos profesionales.</>,
    <>Ofrecemos <Link href="/destapaciones-canerias" style={{ color: '#16A34A', textDecoration: 'underline', fontWeight: 600 }}>destapaciones de cañerías</Link> y mantenimiento de <Link href="/destapaciones-pluviales" style={{ color: '#16A34A', textDecoration: 'underline', fontWeight: 600 }}>bajadas pluviales</Link> para prevenir futuros inconvenientes.</>,
    <>Contamos con sondas y equipos de hidrojet para <Link href="/destapaciones-cloacas" style={{ color: '#16A34A', textDecoration: 'underline', fontWeight: 600 }}>destapaciones de cloacas</Link> y <Link href="/destapaciones-pluviales" style={{ color: '#16A34A', textDecoration: 'underline', fontWeight: 600 }}>sistemas pluviales</Link>.</>,
    <>Nuestras intervenciones abarcan desde <Link href="/destapaciones-canerias" style={{ color: '#16A34A', textDecoration: 'underline', fontWeight: 600 }}>cañerías internas</Link> hasta <Link href="/destapaciones-cloacas" style={{ color: '#16A34A', textDecoration: 'underline', fontWeight: 600 }}>redes cloacales</Link>, siempre con garantía de trabajo.</>,
  ];

  const apertura = aperturas[hash % aperturas.length];
  const contexto = contextos[(hash + 1) % contextos.length];
  const cliente = clientes[(hash + 2) % clientes.length];
  const cierre = cierres[(hash + 3) % cierres.length];

  return (
    <>
      {apertura}{' '}{contexto}{' '}{cliente}{' '}{cierre}
    </>
  );
}
