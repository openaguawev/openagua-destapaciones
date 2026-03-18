export interface ServicioData {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  intro: string;
  benefits: { title: string; desc: string }[];
  steps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

const buildServicio = (slug: string, title: string, image: string, excerpt: string, intro: string): ServicioData => {
  return {
    slug,
    title,
    image,
    excerpt,
    intro,
    benefits: [
      { title: "Rapidez y Eficiencia", desc: "Respuesta inmediata con tecnología puntera sin demoras." },
      { title: "Cero Roturas Innecesarias", desc: "Soluciones focalizadas que preservan tus instalaciones." },
      { title: "Seguridad Garantizada", desc: "Técnicos calificados que operan bajo normativas estrictas." }
    ],
    steps: [
      { title: "1. Diagnóstico Inicial", desc: "Inspeccionamos el lugar del inconveniente para ubicar la obstrucción." },
      { title: "2. Acción Directa", desc: "Aplicamos maquinaria como sondas mecanizadas o hidrojets potentes." },
      { title: "3. Prueba de Flujo", desc: "Comprobamos que las aguas circulen libremente sin retorno alguno." }
    ],
    faqs: [
      { q: "¿Cuánto tiempo demora el servicio estándar?", a: "Habitualmente resolvemos obstrucciones comunes en menos de 90 minutos de trabajo continuo." },
      { q: "¿Trabajan durante los fines de semana?", a: "Sí, disponemos de atención prioritaria de Lunes a Sábados garantizando asistencia rápida." },
      { q: "¿Sus herramientas dañan mis cañerías viejas?", a: "No, la presión empleada y los cabezales son calibrados según el material de la tubería." }
    ]
  };
};

export const getServicios = (): ServicioData[] => {
  return [
    buildServicio(
      'destapaciones-cloacas',
      'Destapación de Cloacas',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
      'Realizamos destapaciones de cloacas con máquina de sonda y sistemas de alta presión. Eliminamos tapones profundos.',
      'Cuando nos enfrentamos a problemas de redes cloacales, la intervención rápida es vital. Nuestro servicio destaca por resolver la acumulación de sedimentos y restos con herramientas mecánicas de alta precisión. Dejando atrás parches rápidos para enfocarnos en restaurar tu flujo completamente.'
    ),
    buildServicio(
      'destapaciones-canerias',
      'Destapaciones de Cañerías',
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1200',
      'Solucionamos obstrucciones en cañerías de cocina, baño, lavatorios e inodoros. Sin roturas innecesarias.',
      'El uso diario de bañeras, duchas y piletas acumula restos de jabón, fango y materiales diversos que terminan obturando la bajada. Nuestras técnicas limpian a fondo los codos y ramales principales permitiéndote recuperar la normalidad de tu vivienda hoy mismo sin tener que recurrir a la albañilería.'
    ),
    buildServicio(
      'destapaciones-pluviales',
      'Destapaciones Pluviales',
      'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=1200',
      'Limpieza y destapación de desagües pluviales antes del clima rudo. Garantizamos el correcto drenaje del agua precipitada.',
      'Las hojas secas, el barro y la falta de supervisión logran que los balcones y terrazas colapsen repentinamente durante una tormenta. Nosotros limpiamos proactivamente tus canales, canaletas y resumideros evitando el efecto embudo peligroso que suele desbordar e inundar tu hogar.'
    ),
    buildServicio(
      'sistema-hidrojets',
      'Sistema Hidro Jet',
      'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1200',
      'Lavado interno profundo de cañerías usando agua con presión regulada. Ideal para sarro crónico o grasa solidificada comercial.',
      'El Hidrojet es una maravilla moderna; dispara un chorro radial que además de empujar al tapón, arranca de tajo la grasitud adherida por todo el diámetro y lo pule. Perfecto para negocios gastronómicos, o cloacas consorciales viejas severamente calcificadas con raíces y lodos pesados.'
    ),
    buildServicio(
      'video-inspeccion',
      'Video Inspección Cloacal',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200',
      'Diagnóstico preciso mediante micro cámara introducida en la cañería para encontrar problemas a ciegas.',
      'Suelen existir roturas estructurales ocultas debajo del hormigón. En lugar de perforar el piso adivinando, optamos por introducir nuestra cámara CCTV sumergible que graba e ilumina en tiempo real, precisando a qué metro exacto está la invasión de raíces o fractura.'
    ),
    buildServicio(
      'limpieza-camaras',
      'Limpieza de Cámaras',
      'https://images.unsplash.com/photo-1508873535684-275a3048cb19?auto=format&fit=crop&q=80&w=1200',
      'Limpieza completa de cámaras sépticas con equipos mecánicos y limpieza a presión. Eliminamos sólidos, hedores y detritos densos.',
      'La cámara de inspección es el núcleo del sistema sanitario en planta baja. Si la misma colapsa, todas las unidades del piso padecen el desborde o regreso de olores nauseabundos. Es clave que el vaciado profundo extraiga la coraza de jabón y sedimento residual para restablecer la correcta oxigenación.'
    ),
    buildServicio(
      'desagotes',
      'Desagote de Sótanos',
      'https://images.unsplash.com/photo-1585814521473-b31c40ab21e3?auto=format&fit=crop&q=80&w=1200',
      'Extracción urgente de agua acumulada en sótanos, pozos ciegos y espacios inundados con bombas súper sumergibles.',
      'Una rotura accidental o una tormenta súbita pueden convertir tus huecos subterráneos como sótanos o fosos de ascensores en auténticos embalses. Nosotros extraemos los miles de litros con gran urgencia gracias a nuestras bombas de vaciado evitando así tragedias eléctricas y el ruine irreversible de todo lo almacenado allí abajo.'
    ),
    buildServicio(
      'mantenimiento-preventivo',
      'Mantenimiento Preventivo',
      'https://images.unsplash.com/photo-1648714659424-69db9e6fd63b?auto=format&fit=crop&q=80&w=1200',
      'Servicio programado semestral/anual para consorcios, previniendo taponamientos y expandiendo la vida sanitaria.',
      'Reaccionar solo cuando ha ocurrido el accidente significa enfrentar la furia de inquilinos y copropietarios con problemas mayúsculos. Ofrecemos abonos periódicos que barren columnas pluviales, cámaras y verticales principales asegurando la plena paz técnica de tu estructura comunitaria.'
    )
  ];
};
