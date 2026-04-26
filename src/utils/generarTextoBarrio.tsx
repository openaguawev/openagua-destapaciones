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

  // Contexto urbano (reformulado para evitar errores gramaticales)
  const contextos: React.ReactNode[] = [
    <>En este sector, caracterizado por ser {data.tipo}, los inconvenientes más comunes son {data.problemas[0]} y {data.problemas[1]}.</>,
    <>Por tratarse de {data.tipo}, es habitual encontrar situaciones como {data.problemas[0]} o {data.problemas[2]}.</>,
    <>Dada la configuración de {data.tipo}, las propiedades suelen presentar {data.problemas[1]} y también {data.problemas[2]}, especialmente en instalaciones antiguas.</>,
    <>Los desafíos más frecuentes en este tipo de {data.tipo.includes('zona') ? 'áreas' : 'entornos'} van desde {data.problemas[0]} hasta {data.problemas[2]}.</>,
    <>Al ser {data.tipo}, el desgaste habitual genera problemas típicos como {data.problemas[1]} y {data.problemas[0]}.</>,
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

/**
 * Genera un SEGUNDO bloque de texto SEO para cada barrio.
 * Complementa al primer bloque con contenido sobre experiencia, confianza y metodología.
 * Hash offset diferente para evitar correlación con el primer bloque.
 */
export function generarTextoBarrioSecundario(
  nombre: string,
  data: BarrioSeoData,
  zonaNombre?: string
): React.ReactNode {
  const hash = nombre.split('').reduce((acc, c) => acc + c.charCodeAt(0) * 3, 0);
  const h = (offset: number, mod: number) => (hash + offset) % mod;

  // --- BLOQUES DIFERENCIADOS (no repetir temas del primer bloque) ---

  const experiencia: React.ReactNode[] = [
    <>Llevamos años atendiendo consultas en <strong>{nombre}</strong> y alrededores, lo que nos permitió desarrollar un conocimiento muy preciso del tipo de instalaciones y materiales que predominan en la zona.</>,
    <>La experiencia acumulada en <strong>{nombre}</strong> nos enseñó que cada propiedad tiene particularidades únicas, y que el diagnóstico previo es clave para evitar trabajos innecesarios.</>,
    <>En <strong>{nombre}</strong>, la combinación de {data.tipo} genera desafíos específicos que solo se resuelven con técnicos que conozcan bien el terreno.</>,
    <>Nuestros técnicos conocen de cerca las instalaciones típicas de <strong>{nombre}</strong>, lo que nos permite anticipar problemas y ofrecer soluciones más rápidas.</>,
  ];

  const confianza: React.ReactNode[] = [
    <>Cada trabajo incluye diagnóstico previo sin cargo, presupuesto claro y garantía escrita sobre la intervención realizada.</>,
    <>No cobramos viáticos adicionales y emitimos factura para consorcios, administraciones y comercios que lo requieran.</>,
    <>Nuestro compromiso es resolver el problema de raíz, no aplicar parches temporales. Por eso garantizamos cada destapación.</>,
    <>Trabajamos con transparencia: primero diagnosticamos, explicamos el problema y recién después intervenimos con el equipo adecuado.</>,
  ];

  const metodologia: React.ReactNode[] = [
    <>Utilizamos sonda electromecánica para obstrucciones sólidas y sistema <Link href="/destapaciones-hidrojet" style={linkStyle}>hidrojet</Link> para incrustaciones de grasa, eligiendo la técnica según cada caso.</>,
    <>Nuestro equipo incluye <Link href="/video-inspeccion-canerias" style={linkStyle}>cámaras de inspección CCTV</Link> que permiten ver el estado interno de los caños antes de intervenir, evitando roturas innecesarias.</>,
    <>Combinamos máquinas de sonda de distintos calibres con <Link href="/destapaciones-hidrojet" style={linkStyle}>hidrojet de alta presión</Link>, adaptando la herramienta al diámetro y tipo de obstrucción.</>,
    <>El proceso siempre empieza con un relevamiento visual y, cuando es necesario, usamos <Link href="/video-inspeccion-canerias" style={linkStyle}>video inspección</Link> para confirmar el diagnóstico antes de actuar.</>,
  ];

  const cierre: React.ReactNode[] = [
    <>Si tenés un problema de cañerías en <strong>{nombre}</strong>{zonaNombre ? ` o cualquier punto de ${zonaNombre}` : ''}, escribinos al 11 5179-7649 y coordinamos en el día.</>,
    <>Contactanos ahora al 11 5179-7649 para una evaluación sin compromiso en <strong>{nombre}</strong>{zonaNombre ? ` y toda ${zonaNombre}` : ''}.</>,
    <>Coordinamos visitas en el día para <strong>{nombre}</strong>{zonaNombre ? ` y alrededores de ${zonaNombre}` : ''}. Llamanos al 11 5179-7649.</>,
  ];

  const pattern = h(0, 4);
  const exp = experiencia[h(1, experiencia.length)];
  const conf = confianza[h(2, confianza.length)];
  const met = metodologia[h(3, metodologia.length)];
  const cierreSeleccionado = cierre[h(4, cierre.length)];

  switch (pattern) {
    case 0: // experiencia → metodología → confianza → cierre
      return <>{exp}{' '}{met}{' '}{conf}{' '}{cierreSeleccionado}</>;
    case 1: // confianza → experiencia → cierre
      return <>{conf}{' '}{exp}{' '}{cierreSeleccionado}</>;
    case 2: // experiencia → confianza → metodología → cierre
      return <>{exp}{' '}{conf}{' '}{met}{' '}{cierreSeleccionado}</>;
    case 3: // metodología → experiencia → confianza → cierre
      return <>{met}{' '}{exp}{' '}{conf}{' '}{cierreSeleccionado}</>;
    default:
      return <>{exp}{' '}{met}{' '}{cierreSeleccionado}</>;
  }
}

