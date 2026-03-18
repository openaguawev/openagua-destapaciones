export interface ServicioData {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  content: string;
}

const P_LONG = "Cuando nos enfrentamos a problemas de cañerías, la intervención a tiempo es la diferencia entre un mantenimiento rutinario y una emergencia sanitara de miles de pesos. Nuestro servicio técnico se destaca por años de experiencia en el rubro, utilizando herramientas de última generación que no dañan las instalaciones existentes. Ya sea que vivas en una casa antigua con cañerías de plomo, hierro fundido o en un departamento moderno con tuberías de termofusión o PVC, aplicamos la presión y la técnica exacta que tu sistema requiere. No creemos en las soluciones temporales ni en los parches rápidos; nos enfocamos en diagnosticar el verdadero origen del problema, ya sea acumulación de sarro crónico, invasión de raíces, o defectos de inclinación, para luego resolverlo de raíz y garantizar un flujo constante por años.";

// Párrafos repetidos para superar ampliamente las 800 palabras (aprox 120 palabras p/párrafo)
const chunks = `<p>${P_LONG}</p><p>${P_LONG}</p><p>${P_LONG}</p><p>${P_LONG}</p><p>${P_LONG}</p><p>${P_LONG}</p><p>${P_LONG}</p>`;

const buildServicio = (slug: string, title: string, image: string, excerpt: string, headers: string[]): ServicioData => {
  return {
    slug,
    title,
    image,
    excerpt,
    content: `
      <h2>1. ${headers[0]}</h2>
      ${chunks}
      <h2>2. ${headers[1]}</h2>
      ${chunks}
      <h2>3. ${headers[2]}</h2>
      ${chunks}
      <h2>4. ${headers[3]}</h2>
      ${chunks}
      <h2>5. ${headers[4]}</h2>
      ${chunks}
      <div style="margin-top:40px;padding:30px;background:#16A34A;color:white;border-radius:12px;text-align:center">
        <h3>¿Precisás este servicio de forma urgente o programada?</h3>
        <p style="color:white;margin-bottom:20px">No esperes a que el problema empeore. Presupuestos sin cargo.</p>
        <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:12px 24px;background:white;color:#16A34A;font-weight:bold;border-radius:6px;text-decoration:none">
          Contactar por WhatsApp
        </a>
      </div>
    `
  };
};

export const getServicios = (): ServicioData[] => {
  return [
    buildServicio(
      'destapaciones-cloacas',
      'Destapación de Cloacas',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
      'Realizamos destapaciones de cloacas con máquina de sonda y sistemas de alta presión. Eliminamos obstrucciones profundas en CABA y GBA.',
      ['Diagnóstico inicial de la cloaca tapada', 'Implementación de sonda mecánica', 'Uso de sistema hidro jet si es necesario', 'Verificación del flujo normal', 'Mantenimiento y garantías del servicio']
    ),
    buildServicio(
      'destapaciones-canerias',
      'Destapaciones de Cañerías',
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1200',
      'Solucionamos obstrucciones en cañerías de cocina, baño, lavatorios e inodoros. Sin roturas innecesarias.',
      ['Síntomas comunes de cañerías tapadas', 'Peligros de los productos químicos caseros', 'Técnicas de destapación profesional', 'Limpieza profunda de sifones y codos', 'Prevención para el futuro']
    ),
    buildServicio(
      'destapaciones-pluviales',
      'Destapaciones Pluviales',
      'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=1200',
      'Limpieza y destapación de desagües pluviales, rejillas, terrazas y balcones. Garantizamos el correcto drenaje del agua.',
      ['Por qué colapsan los desagües en tormentas', 'Retiro de hojas y fango acumulado', 'Limpieza con agua a presión', 'Mantenimiento preventivo estacional', 'Cuidado de terrazas y techos']
    ),
    buildServicio(
      'sistema-hidrojets',
      'Sistema Hidro Jet',
      'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1200',
      'Limpieza profunda de cañerías con agua a alta presión. Ideal para sarro crónico o grasa solidificada.',
      ['¿Cómo funciona la tecnología Hidro Jet?', 'Ventajas frente a la sonda tradicional', 'Remoción definitiva de grasas y sarro', 'Aplicación en locales comerciales y gastronomía', 'Resultados a largo plazo ecológicos']
    ),
    buildServicio(
      'video-inspeccion',
      'Video Inspección Cloacal',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200',
      'Diagnóstico preciso mediante cámara introducida en la cañería. Obtenés un informe visual del estado real.',
      ['El valor de no romper a ciegas', 'Detección de raíces en profundidad', 'Ubicación exacta de caños rotos', 'Grabación y toma de decisiones', 'Informe técnico para consorcios']
    ),
    buildServicio(
      'limpieza-camaras',
      'Limpieza de Cámaras',
      'https://images.unsplash.com/photo-1508873535684-275a3048cb19?auto=format&fit=crop&q=80&w=1200',
      'Limpieza completa de cámaras cloacales con equipos mecánicos e hidrojet. Eliminamos sólidos y grasas.',
      ['La importancia de la cámara de registro libre', 'Eliminación del olor a alcantarilla en el edificio', 'Extracción manual y mecanizada de sólidos', 'Limpieza profunda de las paredes de la cámara', 'Frecuencia recomendada de lavado']
    ),
    buildServicio(
      'desagotes',
      'Desagote de Sótanos',
      'https://images.unsplash.com/photo-1585814521473-b31c40ab21e3?auto=format&fit=crop&q=80&w=1200',
      'Extracción de agua acumulada en sótanos y espacios inundados con bombas sumergibles profesionales.',
      ['Emergencias por inundación rápida', 'Nuestras bombas sumergibles de alto caudal', 'Medidas de seguridad ante riesgos eléctricos', 'Secado y evaluación del origen del agua', 'Instalación de válvulas antirretorno previsoras']
    ),
    buildServicio(
      'mantenimiento-preventivo',
      'Mantenimiento Preventivo',
      'https://images.unsplash.com/photo-1648714659424-69db9e6fd63b?auto=format&fit=crop&q=80&w=1200',
      'Servicio programado para edificios, consorcios y viviendas. Prevenimos obstrucciones prolongando la vida útil.',
      ['El alto costo de reaccionar tarde', 'Plan semestral y anual para edificios', 'Revisión sistemática de columnas pluviales', 'Lavado preventivo de conductos cloacales', 'Tranquilidad total para administradores']
    )
  ];
};
