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
  schemaTitle?: string;
  equipmentTitle?: string;
  stepsTitle?: string;
  imageAlt?: string;
  // NUEVAS PROPIEDADES SEO
  problemasComunes?: { title: string; desc: string }[];
  comoTrabajamos?: { title: string; desc: string; icon?: string }[];
  tiposDeDestapacion?: { title: string; desc: string }[];
  zonas?: string[];
  casosReales?: { title: string; desc: string }[];
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
    schemaTitle?: string;
    equipmentTitle?: string;
    stepsTitle?: string;
    imageAlt?: string;
    problemasComunes?: { title: string; desc: string }[];
    comoTrabajamos?: { title: string; desc: string; icon?: string }[];
    tiposDeDestapacion?: { title: string; desc: string }[];
    zonas?: string[];
    casosReales?: { title: string; desc: string }[];
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
    faqs,
    schemaTitle: custom?.schemaTitle,
    equipmentTitle: custom?.equipmentTitle,
    stepsTitle: custom?.stepsTitle,
    imageAlt: custom?.imageAlt,
    problemasComunes: custom?.problemasComunes,
    comoTrabajamos: custom?.comoTrabajamos,
    tiposDeDestapacion: custom?.tiposDeDestapacion,
    zonas: custom?.zonas,
    casosReales: custom?.casosReales,
  };
};

export const getServicios = (): ServicioData[] => {
  return [
    buildServicio(
      'destapaciones-maquinas',
      'Destapaciones con máquinas en CABA y Zona Oeste',
      '/img/maquina destapa cloacas.jpg',
      'Servicio profesional de destapaciones con máquinas de última generación. Destapa cañerías con máquina de resortes, hidrojet y video inspección para hogares y empresas.',
      'En Openagua somos especialistas en destapaciones con máquinas. Contamos con tecnología de punta para resolver cualquier obstrucción en cloacas, pluviales y cañerías internas sin necesidad de romper pisos ni paredes.',
      [
        { q: "¿Cuándo se debe usar una máquina de resortes?", a: "La máquina de resortes es ideal para destapa cañerías con máquina en obstrucciones sólidas como restos de comida, pelos o pequeños objetos en baños y cocinas." },
        { q: "¿Qué beneficios tiene la máquina de resortes contra el hidrojet?", a: "La máquina de resortes es perfecta para espacios reducidos y cañerías internas, mientras que el hidrojet se recomienda para destapaciones de cloacas con máquina donde hay grasa o raíces." },
        { q: "¿Realizan trabajos en Zona Oeste?", a: "Sí, brindamos servicios de destapaciones con máquinas en toda la Zona Oeste, CABA y alrededores con atención inmediata." },
        { q: "¿Cuánto tiempo demoran en llegar?", a: "Contamos con unidades móviles equipadas para llegar a tu domicilio en menos de 60 minutos en casos de urgencia." },
        { q: "¿Qué formas de pago aceptan?", a: "Podés abonar el servicio en efectivo, por transferencia bancaria o a través de Mercado Pago con todas las tarjetas." },
        { q: "¿Entregan factura y garantía?", a: "Sí, emitimos factura por todos nuestros trabajos y brindamos garantía por escrito sobre la desobstrucción realizada." }
      ],
      {
        benefitsTitle: "Especialistas en Destapaciones con Máquinas",
        benefits: [
          { title: "Máquina con Resorte", desc: "Desobstrucción mecánica con resortes rotativos de acero que eliminan bloqueos rígidos en cocinas y baños." },
          { title: "Limpieza Hidrojet", desc: "Agua a alta presión para un barrido total de grasas y sarro, ideal para diámetros mayores y redes cloacales." },
          { title: "Video Inspección HD", desc: "Diagnóstico visual para localizar el punto exacto del problema y verificar el estado real de la cañería." }
        ],
        equipmentTitle: "Zonas de Cobertura",
        equipment: [
          { title: "CABA", desc: "Atención prioritaria en todos los barrios de la Ciudad Autónoma de Buenos Aires." },
          { title: "Zona Oeste", desc: "Servicios programados y de urgencia en Ramos Mejía, Morón, Castelar, Ituzaingó y aledaños." }
        ],
        stepsTitle: "¿Cuándo usar cada método?",
        steps: [
          { title: "Obstrucción en Bacha/Baño", desc: "Se utiliza la máquina de resortes para recorrer las curvas del sifón y ramales internos.", iconStr: "⚙️" },
          { title: "Tapón de Grasa o Raíces", desc: "El Hidrojet es la herramienta definitiva para lavar las paredes del caño y expulsar sedimentos.", iconStr: "💦" },
          { title: "Duda Estructural", desc: "La video inspección se activa cuando hay sospecha de caño roto o hundimiento del terreno.", iconStr: "🎥" }
        ],
        imageAlt: "Destapación de cloacas con máquina profesional en Zona Oeste",
        problemasComunes: [
          { title: "Raíces en Cañerías", desc: "La intrusión de raíces de árboles es común en cloacas antiguas, generando bloqueos persistentes." },
          { title: "Grasa Petrificada", desc: "En cocinas, la acumulación de grasa se endurece como piedra, impidiendo el paso del agua." },
          { title: "Objetos Extraños", desc: "Juguetes, trapos o restos de obra que caen accidentalmente y obstruyen el flujo." }
        ],
        comoTrabajamos: [
          { title: "Despacho Inmediato", desc: "Salimos hacia tu domicilio en menos de 60 minutos.", icon: "🚗" },
          { title: "Sondeo Mecánico", desc: "Introducimos máquinas de resortes para romper el tapón.", icon: "⚙️" },
          { title: "Limpieza Final", desc: "Aseguramos que el conducto quede libre de sedimentos.", icon: "✨" }
        ],
        tiposDeDestapacion: [
          { title: "Destapación Preventiva", desc: "Mantenimiento periódico para evitar urgencias inesperadas." },
          { title: "Destapación de Urgencia", desc: "Atención inmediata las 24 horas para desbordes cloacales." }
        ],
        zonas: ["CABA", "Ramos Mejía", "Morón", "Castelar", "Ituzaingó", "Lomas del Mirador", "Haedo"],
        casosReales: [
          { title: "Urgencia en Ramos Mejía", desc: "Resolvimos un desborde en un restaurante en hora pico en solo 45 minutos." },
          { title: "Red de Cloacas en Haedo", desc: "Extrajimos raíces de más de 3 metros que bloqueaban la salida principal de una vivienda." }
        ]
      }
    ),
    buildServicio(
      'destapaciones-cloacas',
      'Destapaciones de Cloacas Urgentes',
      '/img/destapacion de cloaca.jpg',
      'Cloaca tapada o rebalsando. Solución rápida hoy mismo sin romper nada. Solución en el día. Llegamos en menos de 60 minutos.',
      'Tener una cloaca tapada es una emergencia que no puede esperar. El riesgo de rebalse sanitario y los olores persistentes afectan tu salud y la de tu familia. En Openagua realizamos destapaciones de cloacas con maquinaria de última generación que elimina la obstrucción de raíz sin romper un solo piso. Atendemos en CABA, Morón, Ituzaingó y Hurlingham con respuesta inmediata las 24 horas.',
      [
        { q: "¿Cuánto demoran en llegar?", a: "Llegamos en menos de 60 minutos a CABA, Ramos Mejía, Morón o Castelar. Nuestra prioridad es resolver tu urgencia hoy mismo." },
        { q: "¿Cuál es el costo del servicio?", a: "El precio depende de la obstrucción y los metros de cañería. Consultanos por WhatsApp para un presupuesto transparente y sin compromiso." },
        { q: "¿Es necesario romper para destapar?", a: "No. En el 98% de los casos usamos máquinas de resortes o destapaciones con hidrojet que limpian el caño a través de las bocas de acceso existentes." },
        { q: "¿Dan garantía por el trabajo?", a: "Sí, entregamos garantía real por escrito. Verificamos el flujo de agua junto a vos para asegurar que la cañería quedó 100% limpia." },
        { q: "¿Qué pasa si hay raíces?", a: "Nuestras sondas rotativas eliminan raíces y sedimentos duros que bloquean el paso del agua cloacal de forma definitiva." },
        { q: "¿Cómo ven el estado del caño?", a: "Si el problema es recurrente, realizamos una video inspección de cañerías para detectar roturas o fallas estructurales sin necesidad de excavar." }
      ],
      {
        benefitsTitle: "Especialistas en Destapaciones de Cloacas",
        benefits: [
          { title: "No esperes días. Lo resolvemos hoy.", desc: "Recuperá la normalidad de tu baño y cocina en pocas horas con nuestro servicio de urgencias 24hs." },
          { title: "Solución definitiva sin romper.", desc: "Olvidate de las obras costosas. Nuestras destapaciones de cañerías cuidan tus instalaciones y tu bolsillo." },
          { title: "Resultados garantizados.", desc: "Limpieza total de conductos con certificación de trabajo. Si no drena correctamente, no nos retiramos." }
        ],
        equipment: [
          { title: "Sondas Mecanizadas", desc: "Elimina obstrucciones profundas de grasa, jabón y objetos sólidos de forma rápida y segura." },
          { title: "Máquinas de Alta Potencia", desc: "Evita romper cañerías gracias a la precisión del movimiento rotativo que limpia sin dañar el PVC o hierro." }
        ],
        steps: [
          { title: "Contacto Inmediato", desc: "Escribinos y recibí prioridad técnica al instante.", iconStr: "📞" },
          { title: "Diagnóstico en el Momento", desc: "Evaluamos el tapón y te damos la solución exacta.", iconStr: "📍" },
          { title: "Solución en el Día", desc: "Limpiamos el conducto con maquinaria profesional.", iconStr: "⚙️" },
          { title: "Garantía Final", desc: "Comprobamos el drenaje y te entregamos tu garantía.", iconStr: "✅" }
        ],
        problemasComunes: [
          { title: "Cloaca rebalsada", desc: "Emergencia crítica: el agua retrocede por inodoros o rejillas inundando el ambiente." },
          { title: "Olor a cloaca", desc: "Indica gases acumulados por sedimentos o falta de ventilación en la red." },
          { title: "Agua estancada", desc: "La bacha o el baño tardan en bajar, señal de un tapón que crece día a día." },
          { title: "Raíces en cañerías", desc: "Obstrucción mecánica que requiere corte con sonda para liberar el paso." },
          { title: "Grasa acumulada", desc: "Sedimento duro que estrecha el caño hasta taparlo por completo. Requiere lavado profundo." }
        ]
      }
    ),
    buildServicio(
      'destapaciones-canerias',
      'Destapación de Cañerías',
      '/img/destapacion maquina.jpg',
      'Soluciones para desagües de cocina, baño y lavadero. Eliminamos obstrucciones de grasa y sarro con tecnología de avanzada en CABA y GBA.',
      'El uso diario de bañeras, duchas y piletas acumula restos de jabón, fango y materiales diversos que terminan obturando la bajada.',
      [
        { q: "¿Pueden destapar sin romper paredes?", a: "Absolutamente, utilizamos maquinarias flexibles que circulan por los caños evitando grandes obras." },
        { q: "¿Qué causa las obstrucciones recurrentes en cañerías?", a: "Normalmente el jabón, el sarro, los pelos y la grasa acumulada a lo largo del tiempo van cerrando el diámetro progresivamente." },
        { q: "¿Trabajan en cocinas y baños?", a: "Sí, destapamos bachas de cocinas, lavatorios, bidets, inodoros y piletas de lavadero sin problema." },
        { q: "¿Cuánto demoran en destapar una bacha de cocina?", a: "Normalmente el trabajo toma entre 30 y 60 minutos, dependiendo de la dureza del tapón de grasa y la distancia de la obstrucción." },
        { q: "¿Los productos químicos sirven para destapar?", a: "No recomendamos el uso de ácidos o soda cáustica ya que pueden derretir los caños de plástico o cristalizar la grasa, empeorando el problema." },
        { q: "¿Tengo que desarmar el mueble bajo mesada?", a: "No es necesario. Nuestros técnicos trabajan con cuidado y solo necesitan acceso al sifón o a la boca de acceso más cercana." }
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
        ],
        problemasComunes: [
          { title: "Grasa de Cocina", desc: "El aceite y los restos de comida crean un tapón sólido difícil de remover sin máquinas." },
          { title: "Sarro Calcáreo", desc: "El agua dura genera incrustaciones que reducen el diámetro del caño hasta taparlo." },
          { title: "Restos de Obra", desc: "Cemento y arena que caen durante remodelaciones y se asientan en los codos." }
        ],
        comoTrabajamos: [
          { title: "Localización", desc: "Detectamos el punto exacto de la obstrucción.", icon: "📍" },
          { title: "Acción Mecánica", desc: "Máquinas rotativas que eliminan el 100% de los residuos.", icon: "⚙️" },
          { title: "Prueba de Carga", desc: "Llenamos la bacha para verificar un desagote rápido.", icon: "🚰" }
        ],
        tiposDeDestapacion: [
          { title: "Destapación de Cocinas", desc: "Especialistas en bachas y bajadas de cocina con grasa." },
          { title: "Destapación de Baños", desc: "Inodoros, bidets y rejillas de ducha con acumulación de pelos y jabón." }
        ],
        zonas: ["CABA", "Caballito", "Flores", "Palermo", "Recoleta", "Almagro", "Villa Urquiza"],
        casosReales: [
          { title: "Casa en Caballito", desc: "Destapamos una cocina que llevaba 3 días sin poder usarse, resolviéndolo en 30 minutos." },
          { title: "Local Gastronómico", desc: "Limpieza profunda de cañerías de cocina industrial con hidrojet para evitar clausuras." }
        ]
      }
    ),
    buildServicio(
      'destapaciones-pluviales',
      'Destapación de Pluviales',
      '/img/caño pluvial.jpg',
      'Desobstrucción de rejillas, terrazas y desagües de lluvia. Evitá inundaciones y filtraciones con limpieza técnica en CABA y GBA.',
      'Las hojas secas, el barro y la falta de supervisión logran que los balcones y terrazas colapsen repentinamente durante una tormenta.',
      [
        { q: "¿Con qué frecuencia limpiar desagües pluviales?", a: "Lo ideal es dos veces al año, particularmente antes de la temporada de otoño y primavera pesada." },
        { q: "¿Trabajan en terrazas y balcones?", a: "Sí, realizamos trabajos de altura e intervenimos terrazas, balcones y canaletas altas." },
        { q: "¿Qué pasa si no limpio los desagües antes de las lluvias?", a: "Se produce un taponamiento por arrastre de barro y hojas que termina desbordando el agua hacia el interior del hogar causando filtraciones severas." },
        { q: "¿Destapan rejillas de patio y terraza?", a: "Sí, limpiamos todo el sistema pluvial desde la rejilla superficial hasta la salida a la calle o conexión principal." },
        { q: "¿La máquina puede romper el caño pluvial?", a: "Nuestras sondas son flexibles y están diseñadas para no dañar los conductos, incluso si son de materiales antiguos como barro cocido o hierro." },
        { q: "¿Tienen equipos para trabajar en altura?", a: "Contamos con escaleras y herramientas de seguridad para acceder a canaletas en techos y balcones de difícil acceso." }
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
        ],
        problemasComunes: [
          { title: "Hojas y Barro", desc: "La acumulación de sedimentos tras las tormentas es la causa #1 de inundaciones en terrazas." },
          { title: "Nidos de Aves", desc: "Es común encontrar obstrucciones por nidos en las salidas de aire y pluviales de edificios." },
          { title: "Pelotas y Juguetes", desc: "Objetos que caen en las rejillas de patios y quedan encallados en los codos." }
        ],
        comoTrabajamos: [
          { title: "Limpieza de Rejillas", desc: "Removemos la suciedad superficial antes de sondear.", icon: "🧹" },
          { title: "Barrido de Bajadas", desc: "Limpiamos toda la columna pluvial de punta a punta.", icon: "🌊" },
          { title: "Prueba de Inundación", desc: "Simulamos lluvia para garantizar el drenaje correcto.", icon: "🌧️" }
        ],
        tiposDeDestapacion: [
          { title: "Destapación de Balcones", desc: "Servicio rápido para evitar filtraciones hacia los pisos inferiores." },
          { title: "Mantenimiento de Canaletas", desc: "Limpieza integral de sistemas de recolección de agua de lluvia." }
        ],
        zonas: ["CABA", "Belgrano", "Nuñez", "Saavedra", "Colegiales", "Villa del Parque", "Devoto"],
        casosReales: [
          { title: "Terraza en Nuñez", desc: "Evitamos que una inundación llegara al interior del living durante una tormenta fuerte." },
          { title: "Edificio en Villa del Parque", desc: "Destapamos 4 bajadas pluviales que estaban selladas con restos de obra antiguos." }
        ]
      }
    ),
    buildServicio(
      'destapaciones-hidrojet',
      'Destapaciones con Hidrojet',
      '/img/hidrojet cloaca.jpg',
      'Limpieza técnica con agua a alta presión. La solución definitiva para eliminar sarro, grasa y sedimentos rebeldes en CABA y GBA.',
      'El Hidrojet es una maravilla moderna; dispara un chorro radial que además de empujar al tapón, arranca de tajo la grasitud adherida por todo el diámetro y lo pule.',
      [
        { q: "¿El hidrojet daña las cañerías?", a: "No, la presión de agua es graduada por nuestros especialistas calibrándola exacto según el material y antigüedad de su tubería." },
        { q: "¿Para qué tipo de obstrucciones es ideal el hidrojet?", a: "Es la solución definitiva contra el sarro petrificado, grandes acumulaciones de grasa en restaurantes y tapones barrosos crónicos." },
        { q: "¿Es mejor que los productos químicos?", a: "Infinitamente mejor; el hidrojet remueve físicamente el tapón utilizando solo agua, a diferencia de los ácidos que deforman la cañería." },
        { q: "¿El hidrojet hace mucha suciedad?", a: "No, el sistema trabaja dentro de la cañería. Nuestros técnicos utilizan protectores para asegurar que el área de trabajo quede impecable." },
        { q: "¿Se puede usar hidrojet en cañerías internas de una casa?", a: "Sí, disponemos de equipos portátiles calibrados para diámetros pequeños de 40mm a 63mm (cocinas y baños)." },
        { q: "¿Elimina el sarro por completo?", a: "Sí, el hidrojet es el único método capaz de desprender las incrustaciones de sarro más duras en cañerías de hierro y cemento." }
      ],
      {
        benefitsTitle: "Nuestro Compromiso Profesional",
        benefits: [
          { title: "Recuperación de Diámetro", desc: "El Hidrojet no solo destapa, sino que barre las paredes del conducto devolviéndole su capacidad de drenaje original." },
          { title: "Sin Químicos Dañinos", desc: "Utilizamos exclusivamente agua a presión controlada, cuidando la integridad de tus cañerías y el medio ambiente." },
          { title: "Efectividad Prolongada", desc: "Al limpiar profundamente la grasa y el sarro, evitamos que los residuos vuelvan a acumularse en el corto plazo." }
        ],
        equipment: [
          { title: "Bombas de Alta Presión", desc: "Equipos de última generación que regulan la fuerza del agua según el tipo y material de la cañería (PVC, Hierro o Cemento)." },
          { title: "Boquillas Especializadas", desc: "Usamos diferentes cabezales (rotativos, de arrastre o de impacto) para atacar específicamente cada tipo de obstrucción." }
        ],
        steps: [
          { title: "Inspección", desc: "Evaluamos el acceso y el grado de acumulación de residuos en la red.", iconStr: "🔎" },
          { title: "Configuración", desc: "Seteamos la presión adecuada para limpiar sin poner en riesgo la estructura del caño.", iconStr: "⚙️" },
          { title: "Barrido Técnico", desc: "Introducimos la manguera de alta presión para desprender toda la suciedad adherida.", iconStr: "💦" },
          { title: "Prueba de Caudal", desc: "Verificamos junto al cliente que el agua corra libremente y sin obstáculos.", iconStr: "✅" }
        ],
        problemasComunes: [
          { title: "Sarro en Redes Viejas", desc: "El sarro reduce el diámetro efectivo del caño hasta un 10% de su capacidad original." },
          { title: "Grasa Industrial", desc: "En locales comerciales, la grasa se solidifica creando bloqueos impenetrables para sondas comunes." },
          { title: "Obstrucciones por Arena", desc: "Típico en zonas de obra o tras roturas de caños de cemento." }
        ],
        comoTrabajamos: [
          { title: "Cálculo de Presión", desc: "Ajustamos los PSI según el material del caño.", icon: "⚖️" },
          { title: "Lavado Rotativo", desc: "Usamos boquillas que giran para limpiar 360 grados.", icon: "🔄" },
          { title: "Inspección Final", desc: "Confirmamos que las paredes del caño queden lisas.", icon: "✅" }
        ],
        tiposDeDestapacion: [
          { title: "Hidrolavado de Cloacas", desc: "El método más efectivo para redes domiciliarias y comerciales." },
          { title: "Limpieza de Pluviales", desc: "Elimina el barro y sedimentos pesados de forma definitiva." }
        ],
        zonas: ["CABA", "Microcentro", "Puerto Madero", "San Telmo", "Barracas", "La Boca", "Constitución"],
        casosReales: [
          { title: "Restaurante en Palermo", desc: "Limpieza nocturna programada para no afectar el servicio del local." },
          { title: "Fábrica en Barracas", desc: "Desobstrucción de red industrial con hidrojet de alto caudal en tiempo récord." }
        ]
      }
    ),
    buildServicio(
      'video-inspeccion-canerias',
      'Video Inspección de Cañerías',
      '/img/video inspeccion.jpg',
      'Diagnóstico preciso con cámaras HD. Localizamos roturas, raíces y obstrucciones sin romper pisos ni paredes en CABA y GBA.',
      'Suelen existir roturas estructurales ocultas debajo del hormigón. En lugar de perforar el piso adivinando, optamos por introducir nuestra cámara CCTV sumergible.',
      [
        { q: "¿Qué problemas detecta la cámara de inspección?", a: "Detecta hundimientos del terreno, intrusión severa de raíces, fracturas a lo largo del encastre y objetos encallados." },
        { q: "¿Cuándo conviene hacer una video inspección?", a: "Cuando padecés destapaciones recurrentes mes a mes, garantizando que existe un daño estructural que debe visualizarse de raíz." },
        { q: "¿Se puede inspeccionar sin romper paredes ni pisos?", a: "Esa es la principal ventaja. Accedemos desde las cámaras de registro a ras de piso sin demoler una baldosa." },
        { q: "¿Entregan el video de la inspección?", a: "Sí, podemos enviarte el archivo de video por WhatsApp o e-mail para que lo compartas con tu plomero o administración." },
        { q: "¿La cámara detecta filtraciones de agua?", a: "La cámara detecta roturas físicas y juntas abiertas por donde se escapa el agua, lo cual es la causa principal de las filtraciones." },
        { q: "¿Hasta cuántos metros llega la cámara?", a: "Nuestros equipos tienen sondas de hasta 30 metros de longitud, cubriendo la mayoría de las redes domiciliarias y comerciales." }
      ],
      {
        benefitsTitle: "Nuestro Compromiso Profesional",
        benefits: [
          { title: "Localización Exacta", desc: "Identificamos el punto preciso del problema para que, si hay que reparar, la intervención sea mínima y en el lugar correcto." },
          { title: "Informe con Evidencia", desc: "Te entregamos las fotos o el video del estado interno de la cañería para que tengas una prueba real del diagnóstico." },
          { title: "Ahorro Garantizado", desc: "Evitamos excavaciones innecesarias. Conocer el estado del caño te permite planificar la solución más económica y eficiente." }
        ],
        equipment: [
          { title: "Cámaras de Alta Resolución", desc: "Equipos sumergibles con iluminación LED que permiten ver con total claridad el interior de conductos de diversos diámetros." },
          { title: "Sondas de Localización", desc: "Tecnología que permite rastrear la posición de la cámara desde la superficie para marcar el punto exacto donde se encuentra la falla." }
        ],
        steps: [
          { title: "Acceso", desc: "Introducimos la cámara por una cámara de inspección, rejilla o boca de acceso existente.", iconStr: "🔎" },
          { title: "Exploración", desc: "Recorremos el conducto grabando en tiempo real para detectar fisuras, hundimientos o bloqueos.", iconStr: "🎥" },
          { title: "Diagnóstico", desc: "Analizamos las imágenes para determinar si el problema es de limpieza o una falla estructural.", iconStr: "📋" },
          { title: "Entrega de Informe", desc: "Te brindamos el resultado técnico para que tomes la mejor decisión sobre la reparación necesaria.", iconStr: "📝" }
        ],
        problemasComunes: [
          { title: "Caños Rotos u Ovalados", desc: "Detectamos hundimientos del terreno que deforman la cañería." },
          { title: "Objetos Encallados", desc: "Localizamos el punto exacto de un objeto que la sonda no puede mover." },
          { title: "Fisuras por Raíces", desc: "Identificamos por dónde están entrando las raíces a la red." }
        ],
        comoTrabajamos: [
          { title: "Introducción de Sonda", desc: "Llevamos la cámara hasta el punto del conflicto.", icon: "🎥" },
          { title: "Localización Digital", desc: "Usamos un sensor para marcar el punto en el piso.", icon: "📡" },
          { title: "Grabación HD", desc: "Registramos todo el recorrido para entregarte la evidencia.", icon: "💾" }
        ],
        tiposDeDestapacion: [
          { title: "Inspección Preventiva", desc: "Ideal antes de comprar una propiedad o tras una obra." },
          { title: "Diagnóstico de Falla", desc: "Para saber exactamente por qué se tapa el caño seguido." }
        ],
        zonas: ["CABA", "Villa Luro", "Mataderos", "Liniers", "Versalles", "Monte Castro", "Villa Real"],
        casosReales: [
          { title: "Inmueble en Venta", desc: "Ayudamos a un comprador a detectar una rotura grave antes de concretar la operación." },
          { title: "Consorcio en Versalles", desc: "Encontramos una botella de plástico que bloqueaba la salida del edificio a 10 metros de profundidad." }
        ]
      }
    ),
    buildServicio(
      'limpieza-camaras-septicas',
      'Limpieza de Cámaras Sépticas',
      '/img/destapacion camara septica.jpg',
      'Vaciado y desobstrucción de sistemas de tratamiento primario. Servicio técnico especializado para hogares, quintas e industrias en CABA y GBA.',
      'La cámara de inspección es el núcleo del sistema sanitario en planta baja. Si la misma colapsa, todas las unidades del piso padecen el desborde.',
      [
        { q: "¿Cada cuánto limpiar una cámara cloacal?", a: "El saneamiento recomendable depende del uso, pero para consorcios sugerimos entre 6 a 12 meses." },
        { q: "¿Por qué aparecen malos olores en la cámara?", a: "Debido a la fermentación anaeróbica de las costras de jabón y heces acumuladas que bloquean la respiración del sistema." },
        { q: "¿Trabajan con consorcios y edificios?", a: "Sí, nos especializamos en mantenimiento edilicio integral resolviendo problemas cloacales estructurales." },
        { q: "¿Qué pasa si la cámara séptica está muy profunda?", a: "Contamos con mangueras de extensión y bombas de succión potentes que permiten trabajar en cámaras de gran profundidad." },
        { q: "¿Hacen limpieza de pozos ciegos?", a: "Realizamos la succión y el saneamiento de pozos ciegos, recuperando la capacidad de absorción del terreno en la medida de lo posible." },
        { q: "¿El servicio incluye el retiro de los residuos?", a: "Sí, nos encargamos de la extracción y limpieza del sistema sanitario de forma higiénica." }
      ],
      {
        benefitsTitle: "Nuestro Compromiso Profesional",
        benefits: [
          { title: "Vaciado y Succión", desc: "Utilizamos equipos de alto vacío para la extracción completa de lodos y residuos acumulados en el fondo de la cámara." },
          { title: "Desobstrucción de Entradas", desc: "Limpiamos los caños de entrada y salida (interceptoras) para asegurar que el sistema vuelva a funcionar por gravedad." },
          { title: "Mantenimiento Higiénico", desc: "Aplicamos procesos que minimizan los olores y aseguran la limpieza del área tras finalizar el trabajo de succión." }
        ],
        equipment: [
          { title: "Equipos Atmosféricos de Succión", desc: "Bombas de vacío de gran potencia para la extracción eficiente de lodoscloacales y residuos densos." },
          { title: "Herramientas de Limpieza Mecánica", desc: "Sondas y chorros de agua para remover las costras de grasa y sólidos adheridos a las paredes de la cámara." }
        ],
        steps: [
          { title: "Inspección de Nivel", desc: "Verificamos el estado de llenado y la consistencia de los residuos en la cámara.", iconStr: "🔎" },
          { title: "Succión Técnica", desc: "Realizamos la extracción controlada de los líquidos y sólidos acumulados.", iconStr: "💧" },
          { title: "Limpieza de Conductos", desc: "Desobstruimos las cañerías que conectan con la cámara para evitar futuros retrocesos.", iconStr: "⚙️" },
          { title: "Verificación Operativa", desc: "Comprobamos que el flujo de entrada y salida sea el correcto antes de dar por finalizado el servicio.", iconStr: "✅" }
        ],
        problemasComunes: [
          { title: "Grasa Solidificada", desc: "La grasa se convierte en una costra blanca que bloquea los conductos de salida." },
          { title: "Lodos Excesivos", desc: "La falta de mantenimiento genera lodos pesados que reducen la capacidad de tratamiento." },
          { title: "Invasión de Raíces", desc: "Las raíces rompen las paredes de la cámara buscando humedad y nutrientes." }
        ],
        comoTrabajamos: [
          { title: "Apertura Técnica", desc: "Abrimos la tapa con cuidado sin dañar los marcos.", icon: "🔓" },
          { title: "Succión de Sólidos", desc: "Vaciamos la cámara con bombas de alto vacío.", icon: "🚛" },
          { title: "Desinfección", desc: "Lavamos y aplicamos productos para reducir olores.", icon: "✨" }
        ],
        tiposDeDestapacion: [
          { title: "Vaciado de Pozos", desc: "Limpieza profunda de pozos ciegos y cámaras sépticas." },
          { title: "Mantenimiento de Cámaras", desc: "Limpieza de cámaras de inspección en edificios y casas." }
        ],
        zonas: ["CABA", "Pilar", "Escobar", "Tigre", "San Isidro", "Vicente López", "San Fernando"],
        casosReales: [
          { title: "Quinta en Pilar", desc: "Vaciamos una cámara séptica colapsada tras un evento social masivo." },
          { title: "Barrio Cerrado en Tigre", desc: "Mantenimiento preventivo de red cloacal completa en un complejo habitacional." }
        ]
      }
    ),
    buildServicio(
      'desagote-sotanos',
      'Desagote de Sótanos',
      '/img/desagote sotano.jpg',
      'Extracción de agua por inundación en subsuelos, huecos de ascensor y cocheras. Servicio de emergencia con bombas de alto caudal en CABA y GBA.',
      'Una rotura accidental o una tormenta súbita pueden convertir tus huecos subterráneos como sótanos o fosos de ascensores en auténticos embalses.',
      [
        { q: "¿Qué tipo de bombas usan para el desagote?", a: "Aplicamos bombas sumergibles profesionales de alto caudal diseñadas para arrastre de líquidos espesos e inundaciones rápidas." },
        { q: "¿Cuánto tarda el desagote de un sótano?", a: "Dependerá enteramente de los litros acumulados, pero nuestro equipamiento bombea miles de litros por hora asegurando máxima velocidad." },
        { q: "¿Qué hacer mientras esperan que llegue el equipo?", a: "Principalmente desconectar y aislar la energía eléctrica principal del sótano para resguardar la vida y prevenir electrocuciones." },
        { q: "¿El desagote incluye la limpieza del barro?", a: "Sí, tras retirar el agua, procedemos a succionar los sedimentos y lodos que suelen quedar acumulados en el piso." },
        { q: "¿Atienden inundaciones por lluvia en la madrugada?", a: "Nuestro servicio de emergencias por inundación está disponible las 24 horas para casos críticos de sótanos y cocheras." },
        { q: "¿Tienen bombas para sacar mucha agua rápido?", a: "Contamos con bombas de alto caudal que evacuan hasta 10.000 litros por hora, resolviendo la inundación en tiempo récord." }
      ],
      {
        schemaTitle: "Desagote de Sótanos y Subsuelos",
        benefitsTitle: "Nuestro Compromiso Profesional",
        benefits: [
          { title: "Respuesta Inmediata", desc: "Entendemos que una inundación no puede esperar. Priorizamos estos servicios para minimizar los daños materiales en tu propiedad." },
          { title: "Equipos de Alto Caudal", desc: "Utilizamos bombas sumergibles de gran potencia que permiten evacuar grandes volúmenes de agua en tiempo récord." },
          { title: "Vaciado y Limpieza", desc: "No solo sacamos el agua; nos aseguramos de retirar los sedimentos y lodos que quedan tras la inundación para higienizar el área." }
        ],
        equipmentTitle: "Casos de Aplicación",
        equipment: [
          { title: "Cocheras y Subsuelos", desc: "Vaciado rápido tras tormentas fuertes o rotura de cañerías principales." },
          { title: "Huecos de Ascensor", desc: "Extracción técnica para permitir el mantenimiento y evitar daños en los sistemas eléctricos del edificio." },
          { title: "Sótanos Particulares", desc: "Soluciones para inundaciones en depósitos o plantas bajas con problemas de drenaje." }
        ],
        stepsTitle: "¿Cómo trabajamos?",
        steps: [
          { title: "Asistencia Rápida", desc: "Recibimos tu llamado y despachamos el equipo con la bomba adecuada según el volumen de agua.", iconStr: "🚨" },
          { title: "Instalación", desc: "Colocamos las mangueras de expulsión hacia los puntos de vertido habilitados más cercanos.", iconStr: "🔧" },
          { title: "Succión Continua", desc: "Operamos las bombas hasta lograr el vaciado total del recinto afectado.", iconStr: "💧" },
          { title: "Secado Técnico", desc: "Retiramos los restos de humedad y sólidos para que el espacio vuelva a ser habitable o funcional.", iconStr: "✨" }
        ],
        problemasComunes: [
          { title: "Rotura de Caño Principal", desc: "Inundaciones súbitas por fallas en la red de agua potable." },
          { title: "Falta de Mantenimiento en Bombas", desc: "Las bombas sumergibles propias fallan durante la tormenta por falta de uso." },
          { title: "Filtraciones por Napa", desc: "Subida del nivel freático que inunda subsuelos en zonas bajas." }
        ],
        comoTrabajamos: [
          { title: "Asistencia 24hs", desc: "Atendemos urgencias de inundación en cualquier momento.", icon: "⏰" },
          { title: "Gran Caudal", desc: "Bombas que sacan 10.000 litros por hora.", icon: "🚀" },
          { title: "Higiene Post-Inundación", desc: "Limpiamos el barro y desinfectamos el área.", icon: "🧴" }
        ],
        tiposDeDestapacion: [
          { title: "Desagote de Emergencia", desc: "Para inundaciones accidentales o por clima extremo." },
          { title: "Mantenimiento de Subsuelos", desc: "Limpieza de fosas de ascensor y cocheras subterráneas." }
        ],
        zonas: ["CABA", "Caballito", "Villa Crespo", "Paternal", "Villa del Parque", "Devoto", "Chacarita"],
        casosReales: [
          { title: "Consorcio en Caballito", desc: "Vaciamos la fosa de un ascensor en solo 2 horas tras una rotura de caño." },
          { title: "Cochera en Villa Crespo", desc: "Desagotamos 30cm de agua acumulada tras una sudestada fuerte." }
        ]
      }
    ),
    buildServicio(
      'mantenimientos-preventivos',
      'Mantenimientos Preventivos',
      '/img/manteniminto cloaca.jpg',
      'Mantenimiento programado para evitar problemas y desbordes. La solución más económica para consorcios, empresas y gastronomía en CABA y GBA.',
      'Reaccionar solo cuando ha ocurrido el accidente significa enfrentar la furia de inquilinos y copropietarios con problemas mayúsculos. Ofrecemos mantenimientos preventivos periódicos.',
      [
        { q: "¿Qué incluye el plan de mantenimiento?", a: "Verificación de pluviales, sondeo mecánico de las salidas a colector principal y el hidrolavado base de cámaras cloacales." },
        { q: "¿Para qué tipo de edificios es el mantenimiento preventivo?", a: "Resulta ideal para complejos habitacionales extensos, edificios torre, condominios, hoteles y grandes restaurantes." },
        { q: "¿Con qué frecuencia se recomienda hacerlo?", a: "En edificios estándares logramos la máxima tranquilidad pautando visitas calendarizadas cada 6 meses o mensual según tránsito." },
        { q: "¿El abono de mantenimiento cubre las urgencias?", a: "Sí, nuestros planes de mantenimiento preventivo suelen incluir visitas de urgencia bonificadas o con descuento prioritario." },
        { q: "¿Hacen mantenimiento en restaurantes?", a: "Somos especialistas en gastronomía, realizando hidrolavados de cañerías de cocina para evitar tapones de grasa en pleno despacho." },
        { q: "¿Qué validez tiene el informe de estado que entregan?", a: "El informe sirve como auditoría técnica para la administración o dueño del inmueble, detallando el estado real de la red cloacal." }
      ],
      {
        schemaTitle: "Mantenimientos Preventivos de Redes Cloacales y Pluviales",
        benefitsTitle: "Nuestro Compromiso Profesional",
        benefits: [
          { title: "Planificación Cíclica", desc: "Realizamos visitas periódicas para limpiar la red antes de que se produzca una obstrucción, garantizando un flujo constante." },
          { title: "Prioridad de Atención", desc: "Los clientes con mantenimiento preventivo cuentan con respuesta inmediata y prioridad absoluta ante cualquier eventualidad fuera de agenda." },
          { title: "Informes de Estado", desc: "Tras cada visita, entregamos un reporte sobre el estado de la red para anticipar reparaciones estructurales necesarias." }
        ],
        equipmentTitle: "¿A quiénes está dirigido?",
        equipment: [
          { title: "Consorcios y Edificios", desc: "Limpieza de columnas principales, sótanos y cámaras de inspección para evitar inundaciones en áreas comunes." },
          { title: "Gastronomía e Industrias", desc: "Desengrase técnico de cañerías de cocina y redes de alto tránsito para cumplir con normas de higiene y evitar cierres imprevistos." }
        ],
        stepsTitle: "Beneficios del Mantenimiento Preventivo",
        steps: [
          { title: "Costo Fijo", desc: "Eliminamos los gastos imprevistos por servicios no planificados, que suelen ser mucho más costosos.", iconStr: "💰" },
          { title: "Menos Roturas", desc: "Al mantener los caños limpios, evitamos que la presión de los tapones debilite las juntas y uniones.", iconStr: "🛡️" },
          { title: "Higiene Permanente", desc: "Evitamos los malos olores y la aparición de plagas asociadas a los residuos estancados.", iconStr: "✨" },
          { title: "Tranquilidad", desc: "Un profesional de Openagua supervisa tu red regularmente para que vos no tengas que preocuparte por nada.", iconStr: "😌" }
        ],
        problemasComunes: [
          { title: "Obstrucciones Crónicas", desc: "Cañerías que se tapan todos los meses por mal uso o diseño." },
          { title: "Malos Olores", desc: "Gases cloacales que invaden el ambiente por falta de limpieza en las cámaras." },
          { title: "Desbordes en Días de Lluvia", desc: "Redes pluviales tapadas que generan inundaciones en el hall del edificio." }
        ],
        comoTrabajamos: [
          { title: "Abonos Mensuales", desc: "Planes a medida para consorcios y empresas.", icon: "📅" },
          { title: "Visitas Programadas", desc: "Coordinamos el servicio para no interrumpir tu actividad.", icon: "🏢" },
          { title: "Reporte de Estado", desc: "Te informamos sobre posibles fallas estructurales a futuro.", icon: "📝" }
        ],
        tiposDeDestapacion: [
          { title: "Limpieza Preventiva", desc: "Sondeo de columnas y colectores antes de que se tapen." },
          { title: "Control de Cámaras", desc: "Saneamiento semestral de cámaras de inspección y rejillas." }
        ],
        zonas: ["CABA", "Centro", "Retiro", "Constitución", "Balvanera", "Boedo", "Parque Patricios"],
        casosReales: [
          { title: "Cadena de Restaurantes", desc: "Mantenemos 5 locales gastronómicos libres de grasa desde hace 3 años." },
          { title: "Edificio Torre en Retiro", desc: "Abono de mantenimiento que redujo las urgencias de 10 a 0 por año." }
        ]
      }
    )
  ];
};
