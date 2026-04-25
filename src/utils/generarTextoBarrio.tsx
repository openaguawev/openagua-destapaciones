import React from 'react';
import Link from 'next/link';
import { BarrioSeoData } from '@/data/barriosSeo';

const linkStyle = { color: '#16A34A', textDecoration: 'underline' as const, fontWeight: 600 };

/**
 * Genera un bloque de texto SEO único y natural para cada barrio.
 * Usa hash determinista del nombre para seleccionar variantes,
 * variando cantidad de oraciones (3-5), orden y presencia de links.
 */
export function generarTextoBarrio(
  nombre: string,
  data: BarrioSeoData,
  pois?: string[]
): React.ReactNode {
  const hash = nombre.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const h = (offset: number, mod: number) => (hash + offset) % mod;

  // --- BLOQUES ATÓMICOS (se combinan en estructuras variadas) ---

  // Aperturas con frase de cercanía (sin artículo antes de tipo)
  const aperturas: React.ReactNode[] = [
    <>Trabajamos frecuentemente en esta zona, y <strong>{nombre}</strong> es uno de los puntos donde más intervenciones realizamos.</>,
    <>Nuestro equipo recorre <strong>{nombre}</strong> de forma habitual, resolviendo urgencias y consultas de los vecinos.</>,
    <>En <strong>{nombre}</strong> tenemos presencia constante, lo que nos permite coordinar visitas en el día sin demoras.</>,
    <><strong>{nombre}</strong> forma parte de nuestra ruta diaria, por lo que llegamos rápido ante cualquier emergencia sanitaria.</>,
    <>Conocemos muy bien <strong>{nombre}</strong> y las particularidades de sus instalaciones, ya que trabajamos en esta zona con mucha frecuencia.</>,
    <>Atendemos llamados desde <strong>{nombre}</strong> prácticamente todos los días, con técnicos que conocen cada rincón del barrio.</>,
    <>La cercanía de nuestros móviles a <strong>{nombre}</strong> nos permite responder con agilidad y llegar en poco tiempo.</>,
  ];

  // Contexto urbano (sin "una/un {tipo}" — reformulado)
  const contextos: React.ReactNode[] = [
    <>En este sector, donde predominan {data.tipo}, los inconvenientes más comunes son {data.problemas[0]} y {data.problemas[1]}.</>,
    <>Por tratarse de {data.tipo}, es habitual encontrar situaciones como {data.problemas[0]} o {data.problemas[2]}.</>,
    <>Las propiedades de la zona suelen presentar {data.problemas[1]} y también {data.problemas[2]}, especialmente en instalaciones con varios años de uso.</>,
    <>Los desafíos más frecuentes aquí van desde {data.problemas[0]} hasta {data.problemas[2]}, propios de {data.tipo}.</>,
    <>En {data.tipo} como las de esta zona, el desgaste genera problemas típicos: {data.problemas[1]} y {data.problemas[0]}.</>,
  ];

  // Clientes
  const clienteFrags: React.ReactNode[] = [
    <>Atendemos principalmente {data.propiedades[0]} y {data.propiedades[1]}, con soluciones que no requieren romper pisos ni paredes.</>,
    <>Nuestros clientes incluyen {data.propiedades[0]}, {data.propiedades[1]} y también {data.propiedades[2]}.</>,
    <>Damos servicio tanto a {data.propiedades[0]} como a {data.propiedades[2]}, adaptándonos a cada tipo de instalación.</>,
    <>Tanto {data.propiedades[0]} como {data.propiedades[1]} nos eligen por la rapidez y la garantía del trabajo realizado.</>,
  ];

  // Cierres CON link (1 o 2 links)
  const cierresConLink: React.ReactNode[] = [
    <>Realizamos <Link href="/destapaciones-cloacas" style={linkStyle}>destapaciones de cloacas</Link> con equipos profesionales de última generación.</>,
    <>Ofrecemos <Link href="/destapaciones-canerias" style={linkStyle}>limpieza de cañerías</Link> garantizada para todo tipo de diámetros.</>,
    <>Nuestro servicio de <Link href="/destapaciones-pluviales" style={linkStyle}>destapaciones pluviales</Link> previene inundaciones en temporada de lluvias.</>,
    <>Aplicamos hidrojet y sonda para <Link href="/destapaciones-cloacas" style={linkStyle}>destapaciones de cloacas</Link> y <Link href="/destapaciones-canerias" style={linkStyle}>cañerías internas</Link>.</>,
    <>Resolvemos obstrucciones en <Link href="/destapaciones-canerias" style={linkStyle}>cañerías</Link> y <Link href="/destapaciones-pluviales" style={linkStyle}>bajadas pluviales</Link> con diagnóstico preciso.</>,
  ];

  // Cierres SIN link
  const cierresSinLink: React.ReactNode[] = [
    <>Garantizamos un trabajo limpio, sin roturas y con resultados duraderos.</>,
    <>Cada intervención incluye diagnóstico previo y recomendaciones de mantenimiento.</>,
    <>Trabajamos con equipos importados que permiten resolver el problema de raíz.</>,
  ];

  // Frase local con POIs (si existen)
  const poiFrase: React.ReactNode | null = pois && pois.length >= 2
    ? <>Solemos realizar trabajos frecuentes en zonas cercanas a {pois[h(7, pois.length)]} y {pois[h(11, pois.length)]}.</>
    : null;

  // --- ENSAMBLADO CON ESTRUCTURA VARIABLE ---
  // 5 patrones diferentes de estructura
  const pattern = h(0, 5);
  const apertura = aperturas[h(1, aperturas.length)];
  const contexto = contextos[h(2, contextos.length)];
  const cliente = clienteFrags[h(3, clienteFrags.length)];

  // Decidir si incluir link (70% sí, 30% no)
  const usarLink = h(4, 10) < 7;
  const cierre = usarLink
    ? cierresConLink[h(5, cierresConLink.length)]
    : cierresSinLink[h(6, cierresSinLink.length)];

  switch (pattern) {
    case 0: // 4 oraciones: apertura → contexto → cliente → cierre
      return <>{apertura}{' '}{contexto}{' '}{cliente}{' '}{cierre}</>;

    case 1: // 3 oraciones: apertura+contexto fusionados → cliente → cierre
      return (
        <>
          {apertura}{' '}{contexto}{' '}{cierre}
        </>
      );

    case 2: // 5 oraciones: apertura → contexto → poi/extra → cliente → cierre
      return (
        <>
          {apertura}{' '}{contexto}{' '}
          {poiFrase || <>Las intervenciones en esta zona requieren experiencia y equipamiento adecuado para evitar daños colaterales.</>}
          {' '}{cliente}{' '}{cierre}
        </>
      );

    case 3: // 4 oraciones orden invertido: contexto → apertura → cierre → cliente
      return <>{contexto}{' '}{apertura}{' '}{cierre}{' '}{cliente}</>;

    case 4: // 3 oraciones: apertura → cliente → cierre (sin contexto explícito)
      return (
        <>
          {apertura}{' '}{cliente}{' '}{cierre}
        </>
      );

    default:
      return <>{apertura}{' '}{contexto}{' '}{cliente}{' '}{cierre}</>;
  }
}
