export interface ServicioData {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  intro: string;
  benefitsTitle: string;
  benefits: { title: string; desc: string }[];
  equipment?: { title: string; desc: string }[];
  steps: { title: string; desc: string; iconStr?: string }[];
  faqs: { q: string; a: string }[];
}

const buildServicio = (
  slug: string, 
  title: string, 
  image: string, 
  excerpt: string, 
  intro: string, 
  faqs: {q: string; a: string}[],
  custom?: {
    benefitsTitle?: string;
    benefits?: { title: string; desc: string }[];
    equipment?: { title: string; desc: string }[];
    steps?: { title: string; desc: string; iconStr?: string }[];
  }
): ServicioData => {
  return {
    slug,
    title,
    image,
    excerpt,
    intro,
    benefitsTitle: custom?.benefitsTitle || "Beneficios del Servicio",
    benefits: custom?.benefits || [
      { title: "Rapidez y Eficiencia", desc: "Respuesta inmediata con tecnología puntera sin demoras." },
      { title: "Cero Roturas Innecesarias", desc: "Soluciones focalizadas que preservan tus instalaciones." },
      { title: "Seguridad Garantizada", desc: "Técnicos calificados que operan bajo normativas estrictas." }
    ],
    equipment: custom?.equipment,
    steps: custom?.steps || [
      { title: "1. Diagnóstico Inicial", desc: "Inspeccionamos el lugar del inconveniente para ubicar la obstrucción." },
      { title: "2. Acción Directa", desc: "Aplicamos maquinaria como sondas mecanizadas o hidrojets potentes." },
      { title: "3. Prueba de Flujo", desc: "Comprobamos que las aguas circulen libremente sin retorno alguno." }
    ],
    faqs
  };
};

export const getServicios = (): ServicioData[] => {
  return [
    buildServicio(
      'destapaciones-cloacas',
      'Destapaciones de Cloacas',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
      'Recuperamos el drenaje de tu red cloacal de forma eficiente. Atendemos casas, edificios y comercios en CABA y GBA con equipos especializados.',
      'Cuando nos enfrentamos a problemas de redes cloacales, la intervención rápida es vital. Nuestro servicio destaca por resolver la acumulación de sedimentos y restos con herramientas mecánicas de alta precisión.',
      [
        { q: "¿Cuándo conviene usar hidrojet en lugar de sonda?", a: "El hidrojet es ideal para obstrucciones muy severas y adheridas, mientras que la sonda sirve para destapes rápidos mecanizados." },
        { q: "¿Trabajan en edificios y consorcios?", a: "Sí, trabajamos frecuentemente con administraciones y ofrecemos abonos especiales a consorcios." },
        { q: "¿Por qué se tapa la cloaca seguido?", a: "Las obstrucciones frecuentes ocurren cuando se arrojan al inodoro o pileta elementos que no corresponden: toallitas húmedas, papeles, restos de comida, aceite o grasa. Estos materiales no se disuelven y generan tapones. Nuestro trabajo es resolver la obstrucción — el uso correcto de las instalaciones es responsabilidad del propietario." }
      ],
      {
        benefitsTitle: "Nuestro Compromiso Profesional",
        benefits: [
          { title: "Diagnóstico Real", desc: "Si el caño está colapsado o tiene raíces, te lo decimos con total honestidad. No ocultamos fallas estructurales para que sepas el estado real de tu instalación." },
          { title: "Prueba de Paso de Agua", desc: "Verificamos el caudal junto a vos para confirmar la limpieza del conducto. En caso de que el sistema no desagote por daños físicos en la cañería, brindamos un informe honesto sobre la necesidad de reparación o reemplazo del tramo afectado." },
          { title: "Uso de Accesos", desc: "Trabajamos a través de cámaras de inspección o bocas de acceso existentes para evitar roturas innecesarias durante la tarea de limpieza." }
        ],
        equipment: [
          { title: "Sonda Rotativa Eléctrica", desc: "Resortes de acero de alta resistencia para desobstruir objetos sólidos, restos de obra y sedimentos duros que bloquean el paso." },
          { title: "Sistema Hidrojet (Alta Presión)", desc: "Limpieza con agua a presión que barre sarro y grasa acumulada, recuperando el diámetro interno del caño para un drenaje fluido." }
        ],
        steps: [
          { title: "Contacto", desc: "Recibimos tu consulta para entender el problema y coordinar la visita.", iconStr: "📱" },
          { title: "Evaluación", desc: "Ubicamos la obstrucción y definimos si corresponde el uso de sonda o hidrojet.", iconStr: "🔎" },
          { title: "Ejecución", desc: "Aplicamos la maquinaria necesaria según la resistencia y dureza del tapón.", iconStr: "⚙️" },
          { title: "Verificación", desc: "Realizamos una prueba de paso de agua para constatar la remoción del tapón o identificar daños estructurales que impidan el flujo normal.", iconStr: "✅" }
        ]
      }
    ),
    buildServicio(
      'destapaciones-canerias',
      'Destapación de Cañerías',
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1200',
      'Soluciones para desagües de cocina, baño y lavadero. Eliminamos obstrucciones de grasa y sarro con tecnología de avanzada en CABA y GBA.',
      'El uso diario de bañeras, duchas y piletas acumula restos de jabón, fango y materiales diversos que terminan obturando la bajada.',
      [
        { q: "¿Pueden destapar sin romper paredes?", a: "Absolutamente, utilizamos maquinarias flexibles que circulan por los caños evitando grandes obras." },
        { q: "¿Qué causa las obstrucciones recurrentes en cañerías?", a: "Normalmente el jabón, el sarro, los pelos y la grasa acumulada a lo largo del tiempo van cerrando el diámetro progresivamente." },
        { q: "¿Trabajan en cocinas y baños?", a: "Sí, destapamos bachas de cocinas, lavatorios, bidets, inodoros y piletas de lavadero sin problema." }
      ],
      {
        benefitsTitle: "Nuestro Compromiso Profesional",
        benefits: [
          { title: "Diagnóstico Técnico", desc: "Evaluamos el estado de las conexiones internas para aplicar el método de limpieza adecuado según el material del caño." },
          { title: "Limpieza de Paredes", desc: "No solo quitamos el tapón; nuestras máquinas barren la grasa adherida a las paredes para que el caño recupere su diámetro interno." },
          { title: "Higiene en el Servicio", desc: "Trabajamos con métodos prolijos para mantener la limpieza en tu cocina o baño mientras realizamos la desobstrucción de los conductos." }
        ],
        equipment: [
          { title: "Sondas Mecanizadas", desc: "Resortes flexibles de diferentes diámetros que recorren los codos y curvas de la cañería sin dañarla, extrayendo restos sólidos y sedimentos." },
          { title: "Desengrase por Hidrojet", desc: "Para cañerías de cocina con alta acumulación de grasa, utilizamos presión de agua controlada que higieniza el conducto por completo." }
        ],
        steps: [
          { title: "Contacto", desc: "Coordinamos una visita inmediata para evaluar el problema en tu domicilio.", iconStr: "📱" },
          { title: "Identificación", desc: "Localizamos si el problema es en el sifón, el ramal o el desagüe principal.", iconStr: "🔎" },
          { title: "Desobstrucción", desc: "Aplicamos la maquinaria específica para liberar el flujo de agua de forma efectiva.", iconStr: "⚙️" },
          { title: "Prueba de Paso", desc: "Comprobamos la fluidez del conducto mediante pruebas de caudal. En caso de detectar fallas estructurales o caños colapsados, informamos el estado real para su debida reparación.", iconStr: "✅" }
        ]
      }
    ),
    buildServicio(
      'destapaciones-pluviales',
      'Destapación de Pluviales',
      'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=1200',
      'Desobstrucción de rejillas, terrazas y desagües de lluvia. Evitá inundaciones y filtraciones con limpieza técnica en CABA y GBA.',
      'Las hojas secas, el barro y la falta de supervisión logran que los balcones y terrazas colapsen repentinamente durante una tormenta.',
      [
        { q: "¿Con qué frecuencia limpiar desagües pluviales?", a: "Lo ideal es dos veces al año, particularmente antes de la temporada de otoño y primavera pesada." },
        { q: "¿Trabajan en terrazas y balcones?", a: "Sí, realizamos trabajos de altura e intervenimos terrazas, balcones y canaletas altas." },
        { q: "¿Qué pasa si no limpio los desagües antes de las lluvias?", a: "Se produce un taponamiento por arrastre de barro y hojas que termina desbordando el agua hacia el interior del hogar causando filtraciones severas." }
      ],
      {
        benefitsTitle: "Nuestro Compromiso Profesional",
        benefits: [
          { title: "Diagnóstico de Caída", desc: "Verificamos la pendiente y el estado de los desagües para asegurar que el agua de lluvia evacue correctamente." },
          { title: "Remoción de Sedimentos", desc: "Eliminamos hojas, tierra y restos de obra que suelen tapar las rejillas y bajadas pluviales." },
          { title: "Prevención de Filtraciones", desc: "Un pluvial libre de obstrucciones es la mejor defensa contra la humedad y las filtraciones en techos y paredes." }
        ],
        equipment: [
          { title: "Sondas para Pluviales", desc: "Resortes reforzados diseñados para recorrer tramos largos de desagües de lluvia sin dañar los conductos." },
          { title: "Hidrojet de Caudal", desc: "Sistema de agua a presión ideal para barrer el barro y las hojas acumuladas en las cañerías pluviales." }
        ],
        steps: [
          { title: "Evaluación", desc: "Revisamos rejillas, canaletas y bajadas para identificar el punto crítico.", iconStr: "🔎" },
          { title: "Desobstrucción", desc: "Aplicamos maquinaria rotativa o presión según la densidad del tapón.", iconStr: "⚙️" },
          { title: "Prueba de Lluvia", desc: "Realizamos una prueba con abundante agua para simular una tormenta y verificar el drenaje.", iconStr: "🌧️" },
          { title: "Informe Técnico", desc: "Si el caño está roto o mal diseñado, te informamos sobre la necesidad de reparación estructural.", iconStr: "📝" }
        ]
      }
    ),
    buildServicio(
      'sistema-hidrojets',
      'Sistema Hidro Jet',
      'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1200',
      'Lavado interno profundo de cañerías usando agua con presión regulada. Ideal para sarro crónico o grasa solidificada comercial.',
      'El Hidrojet es una maravilla moderna; dispara un chorro radial que además de empujar al tapón, arranca de tajo la grasitud adherida por todo el diámetro y lo pule.',
      [
        { q: "¿El hidrojet daña las cañerías?", a: "No, la presión de agua es graduada por nuestros especialistas calibrándola exacto según el material y antigüedad de su tubería." },
        { q: "¿Para qué tipo de obstrucciones es ideal el hidrojet?", a: "Es la solución definitiva contra el sarro petrificado, grandes acumulaciones de grasa en restaurantes y tapones barrosos crónicos." },
        { q: "¿Es mejor que los productos químicos?", a: "Infinitamente mejor; el hidrojet remueve físicamente el tapón utilizando solo agua, a diferencia de los ácidos que deforman la cañería." }
      ]
    ),
    buildServicio(
      'video-inspeccion',
      'Video Inspección Cloacal',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200',
      'Diagnóstico preciso mediante micro cámara introducida en la cañería para encontrar problemas a ciegas.',
      'Suelen existir roturas estructurales ocultas debajo del hormigón. En lugar de perforar el piso adivinando, optamos por introducir nuestra cámara CCTV sumergible.',
      [
        { q: "¿Qué problemas detecta la cámara de inspección?", a: "Detecta hundimientos del terreno, intrusión severa de raíces, fracturas a lo largo del encastre y objetos encallados." },
        { q: "¿Cuándo conviene hacer una video inspección?", a: "Cuando padecés destapaciones recurrentes mes a mes, garantizando que existe un daño estructural que debe visualizarse de raíz." },
        { q: "¿Se puede inspeccionar sin romper paredes ni pisos?", a: "Esa es la principal ventaja. Accedemos desde las cámaras de registro a ras de piso sin demoler una baldosa." }
      ]
    ),
    buildServicio(
      'limpieza-camaras',
      'Limpieza de Cámaras',
      'https://images.unsplash.com/photo-1508873535684-275a3048cb19?auto=format&fit=crop&q=80&w=1200',
      'Limpieza completa de cámaras sépticas con equipos mecánicos y limpieza a presión. Eliminamos sólidos, hedores y detritos densos.',
      'La cámara de inspección es el núcleo del sistema sanitario en planta baja. Si la misma colapsa, todas las unidades del piso padecen el desborde.',
      [
        { q: "¿Cada cuánto limpiar una cámara cloacal?", a: "El saneamiento recomendable depende del uso, pero para consorcios sugerimos entre 6 a 12 meses." },
        { q: "¿Por qué aparecen malos olores en la cámara?", a: "Debido a la fermentación anaeróbica de las costras de jabón y heces acumuladas que bloquean la respiración del sistema." },
        { q: "¿Trabajan con consorcios y edificios?", a: "Sí, nos especializamos en mantenimiento edilicio integral resolviendo urgencias cloacales estructurales." }
      ]
    ),
    buildServicio(
      'desagotes',
      'Desagote de Sótanos',
      'https://images.unsplash.com/photo-1585814521473-b31c40ab21e3?auto=format&fit=crop&q=80&w=1200',
      'Extracción urgente de agua acumulada en sótanos, pozos ciegos y espacios inundados con bombas súper sumergibles.',
      'Una rotura accidental o una tormenta súbita pueden convertir tus huecos subterráneos como sótanos o fosos de ascensores en auténticos embalses.',
      [
        { q: "¿Qué tipo de bombas usan para el desagote?", a: "Aplicamos bombas sumergibles profesionales de alto caudal diseñadas para arrastre de líquidos espesos e inundaciones rápidas." },
        { q: "¿Cuánto tarda el desagote de un sótano?", a: "Dependerá enteramente de los litros acumulados, pero nuestro equipamiento bombea miles de litros por hora asegurando máxima velocidad." },
        { q: "¿Qué hacer mientras esperan que llegue el equipo?", a: "Principalmente desconectar y aislar la energía eléctrica principal del sótano para resguardar la vida y prevenir electrocuciones." }
      ]
    ),
    buildServicio(
      'mantenimiento-preventivo',
      'Mantenimiento Preventivo',
      'https://images.unsplash.com/photo-1648714659424-69db9e6fd63b?auto=format&fit=crop&q=80&w=1200',
      'Servicio programado semestral/anual para consorcios, previniendo taponamientos y expandiendo la vida sanitaria.',
      'Reaccionar solo cuando ha ocurrido el accidente significa enfrentar la furia de inquilinos y copropietarios con problemas mayúsculos. Ofrecemos abonos periódicos.',
      [
        { q: "¿Qué incluye el plan de mantenimiento?", a: "Verificación de pluviales, sondeo mecánico de las salidas a colector principal y el hidrolavado base de cámaras cloacales." },
        { q: "¿Para qué tipo de edificios es el mantenimiento preventivo?", a: "Resulta ideal para complejos habitacionales extensos, edificios torre, condominios, hoteles y grandes restaurantes." },
        { q: "¿Con qué frecuencia se recomienda hacerlo?", a: "En edificios estándares logramos la máxima tranquilidad pautando visitas calendarizadas cada 6 meses." }
      ]
    )
  ];
};
