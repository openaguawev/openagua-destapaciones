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

const getFaqHtml = (faqs: {q:string, a:string}[]) => `
  <div style="margin-top: 2rem; padding: 1.5rem; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
    <h3 style="margin-bottom: 1rem; color: #0f172a; font-size: 1.25rem;">Preguntas Frecuentes</h3>
    ${faqs.map(f => `
      <details style="margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid #e2e8f0; cursor: pointer;">
        <summary style="font-weight: 600; color: #334155; padding: 0.5rem 0;">${f.q}</summary>
        <p style="margin-top: 0.5rem; color: #475569; font-size: 0.95rem; line-height: 1.5;">${f.a}</p>
      </details>
    `).join('')}
  </div>
`;

export const getArticulos = (): Articulo[] => {
  return [
    {
      slug: 'como-detectar-obstruccion-cloaca',
      title: 'Cómo detectar una obstrucción de cloaca antes de la inundación',
      excerpt: 'Descubrí los signos clave para evitar daños costosos en tu hogar.',
      content: `
        <p>Prevenir <a href="/destapaciones-cloacas" style="color:#16A34A;font-weight:bold;text-decoration:underline;">destapaciones de cloacas</a> de urgencia es posible si prestás atención a las cañerías. En todo <strong>CABA</strong> y el <strong>Gran Buenos Aires</strong>, los tapones cloacales no ocurren de un día para otro.</p>
        <p>El primer síntoma siempre es el agua que tarda demasiado en drenar, acompañado de ruidos extraños.</p>
        ${getCtaHtml()}
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Señales Críticas de Alerta Cloacal en CABA</h2>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Olor a cloaca:</strong> Gases sulfurados que escapan por las rejillas.</li>
          <li><strong>Burbujeos (Gloops):</strong> El aire atrapado que intenta salir a la superficie.</li>
          <li><strong>Agua que retorna:</strong> Líquidos oscuros retrocediendo por la ducha o inodoro.</li>
        </ul>
        <p>Si notás alguno de estos síntomas, solicitar un sistema <a href="/destapaciones-hidrojet" style="color:#16A34A;font-weight:bold;text-decoration:underline;">hidrojet preventivo</a> te ahorrará decenas de miles de pesos en cambios de piso y caños.</p>
        ${getFaqHtml([
          {q: "¿Qué hago si sale mal olor de la rejilla?", a: "Es el primer síntoma de un bloqueo parcial. Contactá a un profesional en destapaciones para evitar rebalses líquidos."},
          {q: "¿La lavandina destapa cloacas?", a: "No. La lavandina desinfecta pero no disuelve bloqueos sólidos incrustados como sarro o raíces."},
          {q: "¿Atienden en Capital Federal?", a: "Sí, cubrimos urgencias en todo CABA y Gran Buenos Aires."}
        ])}
      `
    },
    {
      slug: 'sonda-vs-hidrojet-diferencias',
      title: 'Diferencias entre Sonda e Hidrojet: Cuál elegir sin dañar tus caños',
      excerpt: 'Elegí la tecnología correcta para tu tipo de obstrucción.',
      content: `
        <p>Al momento de realizar <strong>destapaciones</strong> en CABA y Gran Buenos Aires, la elección de la herramienta dicta la vida útil de tus cañerías. La vieja escuela usaba ácidos, pero hoy el debate es mecánico.</p>
        <p>Conocer tu infraestructura es vital antes de ingresar una máquina de arrastre.</p>
        ${getCtaHtml()}
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Ventajas del Hidrojet frente a Sondas Mecánicas</h2>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Sonda Mecánica:</strong> Ideal para tapones blandos o elementos sueltos. Rompe el tapón físicamente con resortes.</li>
          <li><strong>Sistema Hidrojet:</strong> Utiliza agua a extrema presión para <strong>"barrer"</strong> grasa y sarro, excelente para <a href="/destapaciones-hidrojet" style="color:#16A34A;font-weight:bold;text-decoration:underline;">destapaciones industriales</a>.</li>
          <li><strong>Seguridad:</strong> El hidrojet no golpea ni quiebra caños de PVC viejos, preservando intacta la red cloacal.</li>
        </ul>
        <p>Para cocinas comerciales e industrias en zona norte o el resto del conglomerado urbano, el lavado con agua a presión es la única garantía a largo plazo.</p>
        ${getFaqHtml([
          {q: "¿El hidrojet puede romper mis caños?", a: "No, el agua a hiperpresión limpia el contorno liso de la cañería sin hacer un impacto metálico cortante."},
          {q: "¿Qué tan largo llega la sonda?", a: "Nuestros equipos pueden superar los 30 metros de trayecto sin dificultad."},
          {q: "¿Qué zonas cubren con estos equipos?", a: "Todo CABA y el Gran Buenos Aires de lunes a lunes."}
        ])}
      `
    },
    {
      slug: 'mantenimiento-preventivo-consorcios',
      title: 'Mantenimiento Preventivo en Edificios: Evitá expensas sorpresa',
      excerpt: 'Por qué la prevención le gana siempre a los mantenimientos correctivos.',
      content: `
        <p>Los grandes consorcios en <strong>CABA</strong> y <strong>Gran Buenos Aires</strong> suelen enfrentar quejas semanales por filtraciones. Las destapaciones de emergencia fuera de horario encarecen brutalmente las expensas.</p>
        <p>La alternativa moderna es contratar servicios de <a href="/mantenimientos-preventivos" style="color:#16A34A;font-weight:bold;text-decoration:underline;">mantenimientos preventivos</a> programados.</p>
        ${getCtaHtml()}
        <h3 style="color:#0f172a;margin-bottom:1rem;font-size:1.35rem;">Beneficios de Contratar un Mantenimiento Preventivo en CABA</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Costos fijos:</strong> Congelas el valor del mantenimiento sin sustos de guardia técnica.</li>
          <li><strong>Hidrolavado Integral:</strong> Limpieza de <a href="/destapaciones-pluviales" style="color:#16A34A;font-weight:bold;text-decoration:underline;">desagües pluviales</a> antes del temporal.</li>
          <li><strong>Informes escritos:</strong> Diagnóstico del estado del caño para presentar en asambleas.</li>
        </ul>
        <p>Prevenir la limpieza de cámaras y las montantes colectoras cloacales evita que los departamentos del primer piso sufran el temido retorno cloacal.</p>
        ${getFaqHtml([
          {q: "¿Cada cuánto se hace un mantenimiento preventivo?", a: "Dependiendo del edificio, sugerimos limpiezas semestrales de colectoras y limpieza de cámaras cada 3 meses."},
          {q: "¿Entregan certificado para la administración?", a: "Absolutamente, cada trabajo incluye el remito descriptivo y los reportes de estado."},
          {q: "¿Cubren todo el GBA?", a: "Sí, operamos en todos los partidos del Gran Buenos Aires y Capital Federal."}
        ])}
      `
    },
    {
      slug: 'cuanto-cuesta-destapar-cloaca',
      title: '¿Cuánto cuesta realmente destapar una cloaca en CABA y GBA?',
      excerpt: 'Transparencia de precios y qué variables afectan el presupuesto.',
      content: `
        <p>Muchos clientes se asustan por los presupuestos abiertos. En el rubro de las <a href="/destapaciones-cloacas" style="color:#16A34A;font-weight:bold;text-decoration:underline;">destapaciones</a> en <strong>CABA</strong> y <strong>Gran Buenos Aires</strong>, lo barato sale carísimo cuando el contratista inexperto rompe un caño.</p>
        <p>Un servicio serio te ofrecerá un precio cerrado una vez diagnosticada la gravedad.</p>
        ${getCtaHtml()}
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Variables que Modifican el Precio de una Destapación</h2>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Tecnología empleada:</strong> Las sondas comunes son económicas, mientras que un equipo de <a href="/destapaciones-hidrojet" style="color:#16A34A;font-weight:bold;text-decoration:underline;">hidrojet de alta potencia</a> asegura resultados definitivos a otro valor.</li>
          <li><strong>Urgencias:</strong> Las llamadas de madrugada en fines de semana poseen recargos logísticos.</li>
          <li><strong>Complejidad oculta:</strong> Si el caño está partido, requiere primero una costosa video inspección.</li>
        </ul>
        <p>Exigí siempre garantía por escrito del trabajo realizado en tu localidad.</p>
        ${getFaqHtml([
          {q: "¿Cobran la visita de diagnóstico?", a: "Depende de la emergencia. Usualmente, ofrecemos un prespuesto aproximado transparente por fotos en WhatsApp."},
          {q: "¿Aceptan transferencias y tarjetas?", a: "Aceptamos efectivo, transferencias bancarias y billeteras virtuales."},
          {q: "¿Es el mismo precio en CABA que en GBA?", a: "El valor del servicio en sí es idéntico; solo puede variar el costo lógico de desplazamiento logístico a zonas alejadas."}
        ])}
      `
    },
    {
      slug: 'video-inspeccion-canerias',
      title: 'Cómo detectar caños partidos sin romper pisos ni paredes',
      excerpt: 'La tecnología de cámaras sumergibles ahorra meses de albañilería.',
      content: `
        <p>Antes de romper todo un patio buscando la obstrucción en una casa de <strong>CABA</strong> o el <strong>Gran Buenos Aires</strong>, existe un método 100% no destructivo: la sonda con cámara.</p>
        <p>Podés pedir una <a href="/video-inspeccion-canerias" style="color:#16A34A;font-weight:bold;text-decoration:underline;">video inspección de cañerías</a> para ver en tu pantalla el problema real.</p>
        ${getCtaHtml()}
        <h3 style="color:#0f172a;margin-bottom:1rem;font-size:1.35rem;">Ventajas Clave de la Video Inspección de Cloacas</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Precisión milimétrica:</strong> Encontramos rajaduras exactas para cavar solo un pozo de 30x30cm, ideal para consorcios.</li>
          <li><strong>Evidencia fotográfica:</strong> Te entregamos un pen-drive con el video de la obstrucción o rotura.</li>
          <li><strong>Detección de raíces:</strong> Permite ver hasta dónde invadió el árbol vecino subterráneamente.</li>
        </ul>
        <p>Es sumamente recomendada de forma preventiva antes de comprar propiedades viejas o realizar limpiezas con hidrojet.</p>
        ${getFaqHtml([
          {q: "¿La cámara ve a través del agua barrosa?", a: "Las cámaras de empuje tienen iluminación LED de alta potencia para atravesar turbiedades moderadas."},
          {q: "¿Qué pasa si encuentran el caño roto?", a: "Te entregamos la distancia exacta métrica para que sepas dónde excavar tu plomero de confianza."},
          {q: "¿Van al interior de Buenos Aires?", a: "Nuestra área de cobertura es CABA y todo el cordón de GBA. Localidades de interior tienen un recargo por traslado."}
        ])}
      `
    },
    {
      slug: 'senales-caneria-cocina-tapada',
      title: 'El peligro oculto en la cañería de tu cocina: Señales de bloqueo',
      excerpt: 'Grasa y jabón: los peores enemigos del desagüe del fregadero.',
      content: `
        <p>El desecho diario de aceites y detergentes crea una costra sólida durísima. Las <a href="/destapaciones-canerias" style="color:#16A34A;font-weight:bold;text-decoration:underline;">destapaciones de cañerías</a> en cocinas son el pedido sanitario estrella en departamentos de <strong>CABA</strong>.</p>
        <p>Si la ignorás, el rebalse arruinará tus muebles MDF y pisos de parquet flotante de la sala.</p>
        ${getCtaHtml()}
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Señales de que tu Cocina Colapsará en GBA</h2>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Ruidos de burbujas:</strong> La bacha "eructa" aire por falta de ventilación o por un tapón incipiente de fideos.</li>
          <li><strong>Hedor persistente:</strong> Sarro acumulado pudriéndose en el sifón plástico que no sale lavándolo artificialmente.</li>
          <li><strong>Tarda horas en vaciar:</strong> Una pileta llena que demora más de 20 segundos pule el inicio de un tapón grueso de jabón.</li>
        </ul>
        <p>Nunca arrojes soda cáustica comprada suelta: derretirás rápidamente el codo de plástico sin matar el problema base.</p>
        ${getFaqHtml([
          {q: "¿El líquido destapacañerías sirve?", a: "Solo empuja la grasa superficial momentáneamente. Si el caño interno está calcificado, no funcionará."},
          {q: "¿Destapan lavaderos unidos a cocinas?", a: "Sí, desobstruimos toda ramificación que comparta la cañería hasta la cámara principal."},
          {q: "¿Atienden emergencias en cocina los domingos?", a: "Cubrimos guardias operativas en CABA y Gran Buenos Aires."}
        ])}
      `
    },
    {
      slug: 'raices-en-canerias',
      title: 'Invasión de raíces cloacales: Por qué ocurren y cómo eliminarlas',
      excerpt: 'Los árboles buscan el calor y el agua subterránea destruyendo tubos.',
      content: `
        <p>Especialmente para quintas y residentes en el <strong>Gran Buenos Aires</strong>, las raíces son una pesadilla que busca la humedad de tus cloacas. Terminan penetrando las juntas plásticas de la red.</p>
        <p>Destaparlo con resorte manual es momentáneo; la raíz agresiva volverá a tapar todo en 3 meses.</p>
        ${getCtaHtml()}
        <h3 style="color:#0f172a;margin-bottom:1rem;font-size:1.35rem;">Solución Definitiva a Raíces en Cañerías con Hidrojet</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Diagnóstico Visual:</strong> Introducimos la <a href="/video-inspeccion-canerias" style="color:#16A34A;font-weight:bold;text-decoration:underline;">cámara de inspección</a> para medir el bloque leñoso infiltrado.</li>
          <li><strong>Remoción Hidráulica:</strong> Un cabezal metálico de corte especial en el hidrojet tala las raíces sin destruir el PVC del cliente.</li>
          <li><strong>Cámaras Sépticas:</strong> Provemos la inmediata <a href="/limpieza-camaras-septicas" style="color:#16A34A;font-weight:bold;text-decoration:underline;">limpieza de cámaras</a> que pudieron quedar saturadas por las fibras.</li>
        </ul>
        <p>Evitá plantar especies botánicas agresivas (ficus, palmeras, etc.) a menos de 5 metros de tu trayecto cloacal central, estés en GBA o en un PH en CABA.</p>
        ${getFaqHtml([
          {q: "¿Tengo que talar el árbol?", a: "Usualmente no, realizamos lavados de alta presión destructivos para arrancar la fibra introducida y que tarde años en volver a penetrar."},
          {q: "¿La raíz rompe el caño entero?", a: "Sí. Si no se frena a tiempo, estallará por completo la junta del caño de desagüe."},
          {q: "¿Hacen este trabajo en Zona Norte GBA?", a: "Absolutamente, es nuestro servicio más requerido en todas las quintas del conurbano."}
        ])}
      `
    },
    {
      slug: 'destapaciones-pluviales-antes-lluvias',
      title: 'Destapaciones de caños pluviales: Evitá cascadas en tu living',
      excerpt: 'La urgencia principal después del otoño: hojas, tierra y palomas.',
      content: `
        <p>Cuando pronostican tormentas severas y alertas amarillas en <strong>CABA</strong> y <strong>Gran Buenos Aires</strong>, el teléfono estalla. Prevení el desastre revisando tu sistema superior.</p>
        <p>Recomendamos firmemente aplicar <a href="/destapaciones-pluviales" style="color:#16A34A;font-weight:bold;text-decoration:underline;">destapaciones pluviales</a> en terraza de manera calendarizada y preventiva.</p>
        ${getCtaHtml()}
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Puntos Críticos de Inundación de Lluvia</h2>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Atrapahojas de Techos:</strong> Rejillas superiores saturadas por sedimentos y nidos de aves urbanas.</li>
          <li><strong>Bajadas y Montantes:</strong> Codos ciegos de la propiedad donde las hojas mojadas forman un tapón indestructible como el cemento.</li>
          <li><strong>Huecos bajo nivel:</strong> Evitá tragedias contratando rápido un servicio de <a href="/desagote-sotanos" style="color:#16A34A;font-weight:bold;text-decoration:underline;">desagote de sótanos</a> si colapsaron la bomba y las rejillas veredales.</li>
        </ul>
        <p>Implementar mantenimientos anuales minimiza drásticamente las filtraciones oscuras que deforman tus placas de yeso o arruinan mercadería.</p>
        ${getFaqHtml([
          {q: "¿Suben a la terraza para desobstruir?", a: "Sí, llevamos sondas largas que bajan con gravedad por las cañerías pluviales desde la azotea."},
          {q: "¿Limpiando la canaleta alcanza?", a: "Generalmente la hoja o mugre ya se atascó en los codos subterráneos que salen hacia la línea municipal."},
          {q: "¿Van si ya está lloviendo en CABA/GBA?", a: "Acudimos lo más rápido posible, pero dependemos de las garantías de seguridad técnica que nos brinde el techo por el viento y el agua."}
        ])}
      `
    },
    {
      slug: 'como-funciona-hidrojet',
      title: 'Descubriendo el poder del Hidrojet de alta presión',
      excerpt: 'Por qué la nueva tecnología desplazó para siempre a los resortes.',
      content: `
        <p>Mientras que una sonda de acero simplemente realiza un agujero pequeño, la excelencia de las <a href="/destapaciones-hidrojet" style="color:#16A34A;font-weight:bold;text-decoration:underline;">destapaciones con hidrojet</a> desintegra la totalidad solidificada de la pared cloacal.</p>
        <p>En industrias del <strong>Gran Buenos Aires</strong> y la extensa red de <strong>CABA</strong>, este método arrasa con la obstrucción.</p>
        ${getCtaHtml()}
        <h3 style="color:#0f172a;margin-bottom:1rem;font-size:1.35rem;">Beneficios de Aplicar Presión Hídrica de Alta Gama</h3>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Limpieza en 360 grados:</strong> Los picos a retropropulsión lavan el diámetro interior completo, devolviendo el calibre nativo.</li>
          <li><strong>Sistema seguro y ecológico:</strong> No emplea corrosivos peligrosos; solo utiliza agua pura intensamente direccionada al bloqueo.</li>
          <li><strong>Protección del plástico:</strong> No quiebra caños de PVC viejos, como sí puede suceder con herramientas de resorte rebotando a ciegas.</li>
        </ul>
        <p>Cualquier restaurante exige obligatoriamente la sanidad integral de sus desagües utilizando únicamente de estos equipos con agua presurizada.</p>
        ${getFaqHtml([
          {q: "¿El hidrojet sirve para pluviales también?", a: "Es la mejor decisión posible. Vuela por los aires bolsas, tierra apelmazada y raíces suaves."},
          {q: "¿Piden instalación de agua in situ?", a: "Las grandes hidrolavadoras poseen sus propios tanques para abastecer la bomba, pero es bueno disponer de tomas genéricas de refuerzo."},
          {q: "¿Hacen servicio en hoteles de Gran Buenos Aires?", a: "Sí, poseemos el equipamiento logístico para responder a complejos hoteleros e industriales en todo GBA y CABA."}
        ])}
      `
    },
    {
      slug: 'sotano-inundado-que-hacer',
      title: 'Mi sótano se inundó: Protocolo de emergencia inmediato',
      excerpt: 'Pasos urgentes para evitar electrocuciones y daños a largo plazo.',
      content: `
        <p>Los subsuelos cocheras y depósitos por nivel bajo rasante son los primeros en sufrir el colapso urbano. Si superaste el nivel crítico en <strong>CABA</strong> o en casas bajas del <strong>Gran Buenos Aires</strong>, corrés enorme riesgo.</p>
        <p>Se requiere urgentemente un <a href="/desagote-sotanos" style="color:#16A34A;font-weight:bold;text-decoration:underline;">desagote de sótanos</a> empleando camiones atmosféricos o super-bombas.</p>
        ${getCtaHtml()}
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Cuidado Extremo ante Inundaciones y Filtraciones Mayores</h2>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Desconexión Total:</strong> Cortá los fusibles eléctricos generales de las plantas inferiores para prevenir letales cortocircuitos en tu coopropiedad.</li>
          <li><strong>Llamar a Alto Caudal:</strong> Contratá de urgencia equipos especializados para que aspiren sin importar la basura o el lodo espeso.</li>
          <li><strong>Validar la Válvula:</strong> Si entró el líquido oscuro desde la calle, tu válvula antirretorno está vencida y requerirá cambio para frenar cloacas externas.</li>
        </ul>
        <p>Reaccionar en las primeras seis horas puede recuperar mercancía millonaria en depósitos industriales prevenidos.</p>
        ${getFaqHtml([
          {q: "¿Tardan mucho en venir por emergencias pluviales?", a: "Contamos con protocolos de prioridad máxima. En zonas céntricas y de gran acceso solemos dar respuesta inminente."},
          {q: "¿Sacan barro, no solo agua?", a: "Las bombas robustas de vacío aspiran lodo condensado, agua lodosa y escombros pequeños dejados tras las inundaciones."},
          {q: "¿Realizan extracciones las 24hs en CABA?", a: "Por supuesto, la flota cubre emergencias diurnas y nocturnas por filtraciones catastróficas."}
        ])}
      `
    }
  ];
}
