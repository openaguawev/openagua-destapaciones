export interface Articulo {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
}

const getCtaHtml = () => `
  <div style="margin: 2rem 0; padding: 1.5rem; background: #f0fdf4; border-left: 4px solid #16A34A; border-radius: 8px;">
    <p style="margin-bottom: 1rem; font-weight: 600; color: #166534; font-size: 1.1rem;">¿Necesitás resolver tu problema hidráulico hoy mismo?</p>
    <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20necesito%20ayuda%20urgente" target="_blank" rel="noopener noreferrer" style="background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 6px -1px rgba(37, 211, 102, 0.4);">
      <span>💬 Consultar urgencia por WhatsApp</span>
    </a>
  </div>
`;

export const getArticulos = (): Articulo[] => {
  return [
    {
      slug: 'como-detectar-obstruccion-cloaca',
      title: 'Cómo detectar una obstrucción de cloaca antes de la inundación',
      excerpt: 'Descubrí los signos clave para evitar daños costosos en tu hogar.',
      content: `
        <p>Prevenir <strong>destapaciones</strong> de urgencia es posible si prestás atención a las cañerías. En todo <strong>CABA</strong> y <strong>GBA</strong>, los tapones cloacales no ocurren de un día para otro.</p>
        <p>El primer síntoma siempre es el agua que tarda demasiado en drenar, acompañado de ruidos extraños.</p>
        ${getCtaHtml()}
        <h3>Señales críticas de alerta:</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Olor a cloaca:</strong> Gases sulfurados que escapan por las rejillas.</li>
          <li><strong>Burbujeos (Gloops):</strong> El aire atrapado que intenta salir a la superficie.</li>
          <li><strong>Agua que retorna:</strong> Líquidos oscuros retrocediendo por la ducha o inodoro.</li>
        </ul>
        <p>Si notás alguno de estos síntomas, solicitar un sistema <strong>hidrojet</strong> preventivo te ahorrará decenas de miles de pesos en cambios de piso.</p>
      `
    },
    {
      slug: 'sonda-vs-hidrojet-diferencias',
      title: 'Diferencias entre Sonda e Hidrojet: Cuál elegir sin dañar tus caños',
      excerpt: 'Elegí la tecnología correcta para tu tipo de obstrucción.',
      content: `
        <p>Al momento de realizar <strong>destapaciones</strong>, la elección de la herramienta dicta la vida útil de tus cañerías. La vieja escuela usaba ácidos, pero hoy el debate es entre maquinaria mecánica y presión.</p>
        <p>Conocer tu infraestructura es vital antes de ingresar una máquina de arrastre.</p>
        ${getCtaHtml()}
        <h3>El enfrentamiento técnico:</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Sonda Mecánica:</strong> Ideal para tapones blandos, papeles o elementos caídos del botiquín. Rompe el tapón físicamente.</li>
          <li><strong>Sistema Hidrojet:</strong> Utiliza agua a extrema presión para <strong>"barrer"</strong> grasa, zarro y sedimentos. Deja el caño como nuevo.</li>
          <li><strong>Seguridad:</strong> El <strong>hidrojet</strong> no golpea ni quiebra caños de PVC viejos, siendo ideal en <strong>CABA</strong>.</li>
        </ul>
        <p>Para cocinas comerciales e industrias en zona norte o <strong>GBA</strong>, el lavado con agua a presión es la única garantía a largo plazo.</p>
      `
    },
    {
      slug: 'mantenimiento-preventivo-consorcios',
      title: 'Mantenimiento Preventivo en Edificios: Evitá expensas sorpresa',
      excerpt: 'Por qué la prevención le gana siempre a los mantenimientos correctivos.',
      content: `
        <p>Los grandes consorcios en <strong>CABA</strong> suelen enfrentar quejas semanales por filtraciones. Las <strong>destapaciones</strong> de emergencia fuera de horario encarecen brutalmente las expensas.</p>
        <p>La alternativa moderna es contratar a una empresa especialista para visitas programadas.</p>
        ${getCtaHtml()}
        <h3>Beneficios del abono técnico:</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Costos fijos:</strong> Congelas el valor del mantenimiento sin sustos de guardia.</li>
          <li><strong>Hidrolavado Pluvial:</strong> Limpieza de terrazas y rejillas antes del temporal.</li>
          <li><strong>Informes escritos:</strong> Diagnóstico del estado del caño para presentar en asambleas.</li>
        </ul>
        <p>Mantener limpias las montantes principales y colectoras cloacales evita que los departamentos del primer piso y planta baja sufran el famoso retorno.</p>
      `
    },
    {
      slug: 'cuanto-cuesta-destapar-cloaca',
      title: '¿Cuánto cuesta realmente destapar una cloaca en CABA y GBA?',
      excerpt: 'Transparencia de precios y qué variables afectan el presupuesto.',
      content: `
        <p>Muchos clientes se asustan por los "presupuestos abiertos". En el rubro de las <strong>destapaciones</strong>, lo barato sale carísimo cuando el contratista inexperto rompe un caño o cobra "por metro".</p>
        <p>Un servicio serio te ofrecerá un precio cerrado una vez diagnosticada la gravedad.</p>
        ${getCtaHtml()}
        <h3>Factores que cambian el valor:</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Tecnología empleada:</strong> Una cinta metálica manual es barata, un <strong>hidrojet</strong> importado asegura no volver a pagar.</li>
          <li><strong>Horarios de urgencia:</strong> Las llamadas de madrugada en fines de semana poseen recargos.</li>
          <li><strong>Video inspección:</strong> Si el caño está partido y hay que encontrarlo exacto.</li>
        </ul>
        <p>En el gran <strong>Buenos Aires</strong> y la Capital, exigí siempre garantía por escrito del trabajo realizado.</p>
      `
    },
    {
      slug: 'video-inspeccion-canerias',
      title: 'Cómo detectar caños partidos sin romper pisos ni paredes',
      excerpt: 'La tecnología de cámaras sumergibles ahorra meses de albañilería.',
      content: `
        <p>Antes de romper todo un patio buscando la obstrucción, existe un método 100% no destructivo: la sonda con cámara. Las <strong>videocámaras HD</strong> inspeccionan la oscuridad del desagüe.</p>
        <p>Te mostramos en tu propio televisor el estado interno de tu instalación sanitaria.</p>
        ${getCtaHtml()}
        <h3>Ventajas de la video inspección:</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Precisión milimétrica:</strong> Encontramos rajaduras exactas para cavar solo un pozo de 30x30cm.</li>
          <li><strong>Evidencia fotográfica:</strong> Te entregamos un pen-drive con el video del problema real.</li>
          <li><strong>Detección de raíces:</strong> Permite ver hasta dónde invadió el árbol vecino.</li>
        </ul>
        <p>Recomendado ampliamente previo a las <strong>destapaciones</strong> mecánicas cuando hay historial de tapones mensuales repetitivos.</p>
      `
    },
    {
      slug: 'senales-caneria-cocina-tapada',
      title: 'El peligro oculto en la cañería de tu cocina: Señales de bloqueo',
      excerpt: 'Grasa y jabón: los peores enemigos del desagüe del fregadero.',
      content: `
        <p>El desecho diario de aceites y de detergentes crea una costra sólida durísima. Las <strong>destapaciones</strong> de cocinas en departamentos son el servicio sanitario más común en edificios de <strong>CABA</strong>.</p>
        <p>Ignorar el escurrimiento lento termina en rebalses fatales cuando intentás usar el lavarropas o lavavajillas.</p>
        ${getCtaHtml()}
        <h3>Señales de que tu cocina colapsará:</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Ruidos de burbujas:</strong> La bacha eructa aire por falta de ventilación o tapón incipiente.</li>
          <li><strong>Hedor a comida podrida:</strong> Sarro acumulado pudriéndose en el sifón que no sale con lavandina.</li>
          <li><strong>Tarda horas en vaciar:</strong> Una pileta llena que demora más de 20 segundos pule el inicio de un tapón grueso.</li>
        </ul>
        <p>Jamás arrojes ácidos o soda cáustica comprados en ferretería; derretirás rápidamente los accesorios de plástico debajo de la bacha.</p>
      `
    },
    {
      slug: 'raices-en-canerias',
      title: 'Invasión de raíces cloacales: Por qué ocurren y cómo eliminarlas',
      excerpt: 'Los árboles buscan el calor y el agua subterránea destruyendo tubos.',
      content: `
        <p>Especialmente para quintas y residentes en <strong>GBA</strong> (Zona Norte, Sur, Oeste), las raíces son una pesadilla. Buscan la humedad cálida de tus cloacas y las penetran partiéndolas a la mitad.</p>
        <p>Cortarlas no sirve de nada si el tubo queda completamente expuesto e indefenso.</p>
        ${getCtaHtml()}
        <h3>El protocolo para raíces:</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Diagnóstico LED:</strong> Introducimos la cámara de video para medir el bloque leñoso.</li>
          <li><strong>Remoción Hidráulica:</strong> Un cabezal metálico del <strong>hidrojet</strong> corta las raíces gruesas sin destruir el caño.</li>
          <li><strong>Reparación o Químicos:</strong> Tratamiento focalizado para quemar los conductos de la raíz y que demore años en volver.</li>
        </ul>
        <p>Evitá plantar ficus o árboles de crecimiento agresivo a menos de cinco metros del trayecto original de tu cañería principal.</p>
      `
    },
    {
      slug: 'destapaciones-pluviales-antes-lluvias',
      title: 'Destapaciones de caños pluviales: Evitá cascadas en tu living',
      excerpt: 'La urgencia principal después del otoño: hojas, tierra y palomas.',
      content: `
        <p>Cuando pronostican tormentas severas, el teléfono estalla. Las <strong>destapaciones</strong> de pluviales y terrazas siempre deben ser programadas preventivamente en meses secos.</p>
        <p>Una boqueta tapada transforma tu azotea en una piscina de 30 centímetros en apenas media hora de lluvia fuerte.</p>
        ${getCtaHtml()}
        <h3>Puntos críticos a revisar hoy:</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Atrapahojas:</strong> Rejillas superiores plásticas o de hierro obstruidas por sedimentos arcillosos.</li>
          <li><strong>Bajadas (Montantes):</strong> Codos de los techos donde frecuentemente hay nidos abandonados.</li>
          <li><strong>Cámaras bajo la vereda:</strong> Donde todo el sistema pluvial colapsa ante la presión pública en <strong>CABA</strong>.</li>
        </ul>
        <p>Implementar un cronograma anual minimiza todo porcentaje de filtración de humedad a los techos de placas de yeso o interiores.</p>
      `
    },
    {
      slug: 'como-funciona-hidrojet',
      title: 'Descubriendo el poder del Hidrojet de alta presión',
      excerpt: 'Por qué la nueva tecnología desplazó para siempre a los resortes.',
      content: `
        <p>Mientras que una sonda de acero simplemente realiza un agujero pequeño a través de la grasa del desagüe, el sistema <strong>hidrojet</strong> desintegra la totalidad de la pared bacteriana.</p>
        <p>Bombea picos de extrema presión limpiando los costados mediante mangueras de Kevlar especiales.</p>
        ${getCtaHtml()}
        <h3>Razones por las que destronó a la sonda:</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Limpieza en 360 grados:</strong> Los picos a retropropulsión lavan el diámetro interior completo, como si lo plastificaras.</li>
          <li><strong>Amigable ecológicamente:</strong> No emplea corrosivos mortales; solo utiliza agua pura direccionada.</li>
          <li><strong>Seguridad del PVC:</strong> No quiebra los codos desgastados como sí lo hace frecuentemente un resorte trabado en <strong>GBA</strong>.</li>
        </ul>
        <p>Cualquier restaurante o planta procesadora gastronómica delega obligatoriamente la sanidad de sus desagües en estas bombas de alto caudal.</p>
      `
    },
    {
      slug: 'sotano-inundado-que-hacer',
      title: 'Mi sótano se inundó: Protocolo de emergencia inmediato',
      excerpt: 'Pasos urgentes para evitar electrocuciones y daños a largo plazo.',
      content: `
        <p>Los subsuelos cochera y depósitos son los primeros en absorber colapsos de red. Si tu hueco de ascensor o sótano superó el nivel crítico en <strong>CABA</strong>, corrés enorme riesgo estructural o eléctrico.</p>
        <p>El vaciado primario requiere de camiones atmosféricos o super-bombas que absorban agua barrosa velozmente.</p>
        ${getCtaHtml()}
        <h3>Acciones críticas inmediatas:</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Desconexión Total:</strong> Cortá los fusibles eléctricos generales de las plantas inferiores para prevenir cortocircuitos.</li>
          <li><strong>Llamar a Alto Caudal:</strong> Contratá de urgencia equipos especializados para que aspiren sin importar la basura sólida presente.</li>
          <li><strong>Validar la Válvula:</strong> Si entró el líquido desde la calle, tu válvula antirretorno está dañada y requerirá reemplazo imperativo tras limpiar.</li>
        </ul>
        <p>Reaccionar en las primeras seis horas puede recuperar mercancía y prevenir la podredumbre incrustada en paredes bajas y cimientos.</p>
      `
    }
  ];
}
