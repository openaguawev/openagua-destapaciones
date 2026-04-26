/**
 * Genera un bloque de texto SEO único por servicio.
 * Evita el contenido duplicado idéntico que tenían las 8 páginas.
 * Cada servicio obtiene un texto diferente basado en su slug y datos.
 */

interface ServicioSeoData {
  slug: string;
  title: string;
  excerpt: string;
}

export function generarTextoServicio(servicio: ServicioSeoData): string {
  const hash = servicio.slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const h = (offset: number, mod: number) => (hash + offset) % mod;

  // --- VARIANTES DE APERTURA ---
  const aperturas = [
    `En Openagua somos especialistas en ${servicio.title.toLowerCase()} para hogares, consorcios y comercios de CABA y el Gran Buenos Aires.`,
    `Nuestro equipo técnico realiza ${servicio.title.toLowerCase()} con herramientas profesionales en toda la zona de CABA, Zona Oeste, Zona Norte y Zona Sur.`,
    `Si necesitás un servicio profesional de ${servicio.title.toLowerCase()}, contamos con la experiencia y el equipamiento necesario para resolver en el día.`,
    `Realizamos ${servicio.title.toLowerCase()} de forma rápida y efectiva, sin necesidad de romper pisos ni paredes en la mayoría de los casos.`,
  ];

  // --- VARIANTES DE CONTEXTO ---
  const contextos = [
    'Trabajamos con máquinas de sonda electromecánica y sistema hidrojet de alta presión, eligiendo la técnica más adecuada según el tipo de obstrucción y el material de la cañería.',
    'Cada intervención comienza con un diagnóstico preciso para identificar la causa real del problema y evitar gastos innecesarios o trabajos mal orientados.',
    'Nuestros técnicos están capacitados para trabajar en todo tipo de instalaciones: desde casas con cañerías de plomo hasta edificios modernos con PVC termofusionado.',
    'Combinamos experiencia en campo con tecnología de última generación, incluyendo video inspección por cámara CCTV para los casos más complejos.',
  ];

  // --- VARIANTES DE CIERRE ---
  const cierres = [
    'Consultanos por WhatsApp al 11 5179-7649 y coordinamos la visita en el día, sin compromiso y con presupuesto transparente.',
    'Envianos tu consulta al 11 5179-7649 y recibí un presupuesto sin cargo. Atendemos urgencias y servicios programados.',
    'Pedí tu presupuesto sin compromiso al 11 5179-7649. Llegamos en menos de 60 minutos para urgencias en CABA y GBA.',
  ];

  const apertura = aperturas[h(0, aperturas.length)];
  const contexto = contextos[h(1, contextos.length)];
  const cierre = cierres[h(2, cierres.length)];

  // Patrones de composición variados
  const pattern = h(3, 3);
  switch (pattern) {
    case 0:
      return `${apertura} ${contexto} ${cierre}`;
    case 1:
      return `${contexto} ${apertura} ${cierre}`;
    case 2:
      return `${apertura} ${cierre} ${contexto}`;
    default:
      return `${apertura} ${contexto} ${cierre}`;
  }
}
