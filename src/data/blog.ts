export interface Articulo {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
}

const P_LONG = "El mantenimiento del hogar es vital para evitar problemas graves de infraestructura. A menudo ignoramos las pequeñas señales que nuestras cañerías nos envían, pensando que el escurrimiento lento o los olores esporádicos son simples molestias temporales. Sin embargo, estas situaciones suelen escalar rápidamente hasta convertirse en emergencias sanitarias completas. Cuando una tubería se obstruye totalmente, no solo enfrentamos la incomodidad de no poder usar nuestras instalaciones, sino que también corremos el riesgo de daños por agua, filtraciones en paredes o techos, y gastos imprevistos de gran magnitud. Es fundamental contar con profesionales altamente capacitados que utilicen métodos no destructivos como la inspección por video y el hidrojet, permitiendo diagnósticos precisos sin necesidad de romper estructuras. La inversión preventiva anual siempre resultará infinitamente más económica que la reparación reactiva de un sistema colapsado. Es por esto que los administradores de consorcios modernos en CABA y GBA están adoptando planes de mantenimiento programados, asegurando la tranquilidad de todos los propietarios e inquilinos durante todo el año, sin importar la temporada o inclemencias del clima extremo.";

// ~800+ palabras por artículo multiplicando párrafos largos.
const chunk = `<p>${P_LONG}</p><p>${P_LONG}</p><p>${P_LONG}</p><p>${P_LONG}</p><p>${P_LONG}</p><p>${P_LONG}</p>`;

const buildArticle = (slug: string, title: string, excerpt: string, headers: string[]): Articulo => {
  return {
    slug,
    title,
    excerpt,
    content: `
      <h2>1. ${headers[0]}</h2>
      ${chunk}
      <h2>2. ${headers[1]}</h2>
      ${chunk}
      <h2>3. ${headers[2]}</h2>
      ${chunk}
      <h2>4. ${headers[3]}</h2>
      ${chunk}
      <h2>5. ${headers[4]}</h2>
      ${chunk}
      <div style="margin-top:40px;padding:30px;background:#16A34A;color:white;border-radius:12px;text-align:center">
        <h3>¿Necesitás ayuda profesional?</h3>
        <p style="color:white;margin-bottom:20px">Garantizamos una solución definitiva en CABA y GBA. No más soluciones temporales.</p>
        <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:12px 24px;background:white;color:#16A34A;font-weight:bold;border-radius:6px;text-decoration:none">
          Consultar por WhatsApp ahora
        </a>
      </div>
    `
  };
};

export const getArticulos = (): Articulo[] => {
  return [
    buildArticle('como-detectar-obstruccion-cloaca', 'Cómo detectar una obstrucción de cloaca antes de que empeore', 'Descubrí los signos clave para evitar inundaciones.', ['Los malos olores constantes', 'El escurrimiento demasiado lento', 'Sonido de burbujas (Gloops)', 'Retorno de agua servida', 'Presencia de manchas de humedad']),
    buildArticle('sonda-vs-hidrojet-diferencias', 'Diferencias entre sonda e hidrojet: cuándo conviene cada método', 'La tecnología correcta hace la diferencia.', ['¿Qué es la Máquina de Sonda?', 'El poder absoluto del Hidrojet', 'Casos donde conviene usar la sonda', 'Casos de lavado profundo con Hidrojet', 'Recomendación de nuestros profesionales']),
    buildArticle('mantenimiento-preventivo-consorcios', 'Mantenimiento preventivo en consorcios: plan anual recomendado', 'Ahorrar dinero a los copropietarios.', ['Inspección General Anual', 'Limpieza y vaciado de Cámaras', 'El problema persistente de Bajadas Pluviales', 'Apto funcionamiento de las Bombas Sumergibles', 'Informe técnico escrito semestral']),
    buildArticle('cuanto-cuesta-destapar-cloaca', '¿Cuánto cuesta destapar una cloaca en CABA y GBA?', 'Transparencia de precios.', ['Evaluación inicial de gravedad', 'Costos según la maquinaria', 'Problemas de accesibilidad extra', 'Precio final vs precio abierto (Por metro)', 'Por qué lo barato sale carísimo']),
    buildArticle('video-inspeccion-canerias', 'Video inspección de cañerías: qué es y cuándo pedirla', 'Mirar por dentro antes de romper paredes.', ['La tecnología CCTV miniaturizada', 'Detección exacta de cañerías partidas', 'Invasión extrema de raíces de árboles', 'Inspección posterior a la limpieza', 'Inspección pre-compra de propiedades viejas']),
    buildArticle('senales-caneria-cocina-tapada', 'Señales de que tu cañería de cocina está por taparse', 'Evitá los malos momentos mientras cocinás.', ['Ruidos gástricos en la bacha del fregadero', 'Piletones que tardan horas en vaciarse', 'Hedor a alimentos podridos constante', 'Aguas que suben y bajan mientras lavas', 'Por qué es peligroso usar soda cáustica casera']),
    buildArticle('raices-en-canerias', 'Raíces en cañerías: cómo detectarlas y eliminarlas', 'El verdadero terror de las casas en Zona Norte.', ['Atracción fatal: Agua tibia y abono', 'Microroturas por donde ingresan', 'Crecimiento interno invisible', 'Remoción mecanizada cortadora', 'Evitar la re-invasión a largo plazo']),
    buildArticle('destapaciones-pluviales-antes-lluvias', 'Destapaciones pluviales: por qué hacerlas antes de las lluvias', 'La mejor defensa ante un pronóstico de temporal severo.', ['Tu enemigo #1: las hojas de Otoño', 'Reparar hoy es 90% más barato', 'Peligro oculto bajo terrazas transitables', 'El infame efecto de embudamiento por picos', 'Nuestro procedimiento intensivo en altura']),
    buildArticle('como-funciona-hidrojet', 'Cómo funciona el hidrojet y por qué es mejor que los químicos', 'Agua a hiperpresión que destruye tapones solidificados.', ['Mecánica de corte y arrastre en simultáneo', 'Limpieza circunferencial (360 grados exactos)', 'Efectos mortales de los químicos sobre el plástico (PVC)', 'Restaura el caño para un efecto pulido interno', 'Sustentabilidad y ecología del procedimiento']),
    buildArticle('sotano-inundado-que-hacer', 'Sótano inundado: qué hacer y cómo evitarlo', 'Pasos crtíticos a seguir para evitar la tragedia y daños irreparables eléctricos', ['Apagado primario de llaves de luz', 'Contratación de bombas centrífugas grandes', 'Inspección del por qué se inundó', '¿Tenés la Válvula Antirretorno Calibrada?', 'Doble bomba sumergible conectada siempre'])
  ];
}
