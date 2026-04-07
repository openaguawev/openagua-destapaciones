export interface Articulo {
  slug: string;
  title: string;
  image: string;
  alt: string;
  excerpt: string;
  content: string;
}

const getCtaHtml = () => `
  <div style="margin: 2rem 0; padding: 1.5rem; background: #f0fdf4; border-left: 4px solid #16A34A; border-radius: 8px;">
    <p style="margin-bottom: 1rem; font-weight: 600; color: #166534; font-size: 1.1rem;">¿Necesitás resolver tu problema hidráulico hoy mismo?</p>
    <a href="https://wa.me/5491151797649?text=Hola%20Openagua%2C%20necesito%20ayuda%20t%C3%A9cnica" target="_blank" rel="noopener noreferrer" style="background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 6px -1px rgba(37, 211, 102, 0.4);">
      <span>Consultar servicio por WhatsApp</span>
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
      slug: 'por-que-cocina-huele-a-cloaca',
      title: '¿Por qué mi cocina huele a cloaca? 3 causas y soluciones definitivas',
      image: '/img/destapacion cocina.jpg',
      alt: 'Destapación de cocina y solución a olores de cloaca en CABA - Openagua',
      excerpt: 'Descubrí cómo eliminar definitivamente el mal olor de tus cañerías en CABA y GBA.',
      content: `
        <p>Sentir un fuerte olor a alcantarilla mientras cocinás es una pesadilla recurrente en todo <strong>CABA</strong> y el <strong>Gran Buenos Aires</strong>. Las <a href="/destapaciones-canerias" style="color:#16A34A;font-weight:bold;text-decoration:underline;">destapaciones de cañerías</a> suelen ser el final evitable de esta historia.</p>
        <p>Este hedor no desaparece con lavandina ni perfumadores; el problema es estructural y requiere atención técnica profunda.</p>
        ${getCtaHtml()}
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Causas Críticas del Mal Olor en la Cocina</h2>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Grasa Acumulada:</strong> Restos orgánicos que se pudren lentamente en las paredes del conducto.</li>
          <li><strong>Falla del Sifón:</strong> La falta de agua en el tubo en "U" permite que los gases cloacales ingresen al ambiente.</li>
          <li><strong>Fisuras Invisibles:</strong> Pequeñas rajaduras donde se asientan bacterias emitiendo gases pestilentes.</li>
        </ul>
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">¿Cómo eliminar el olor a cloaca definitivamente?</h2>
        <p>Volcar químicos caseros termina derritiendo tubos de PVC. La verdadera solución radica en una limpieza técnica con equipos especializados que retiren físicamente la masa putrefacta.</p>
        ${getFaqHtml([
          {q: "¿El vinagre y bicarbonato quitan el olor?", a: "Solo actúan a un nivel superficial por algunas horas. Si tenés sarro y grasa calcificada, no logran disolverla."},
          {q: "¿Pueden cambiar el sifón si está roto?", a: "Por supuesto, evaluamos la integridad de los accesorios bajo mesada y procedemos a su limpieza hermética."},
          {q: "¿En cuánto tiempo se va el olor?", a: "La ventilación del gas acumulado en la vivienda es inmediata una vez finalizado el trabajo de limpieza."}
        ])}
      `
    },
    {
      slug: 'grasa-canerias-edificios-agua-hirviendo',
      title: 'Grasa en cañerías de edificios: Por qué el agua hirviendo no sirve',
      image: '/img/caño con grasa.jpg',
      alt: 'Grasa petrificada en cañerías de edificios de zona norte - Openagua',
      excerpt: 'El método definitivo para limpiar bajadas en consorcios sin usar ácido.',
      content: `
        <p>Cientos de edificios en <strong>CABA</strong> y el <strong>Gran Buenos Aires</strong> cometen el mismo error: pedir a los inquilinos que vuelquen agua hirviendo para evitar tapones. Esto solo empuja temporalmente las masas de sebo.</p>
        <p>Con el paso de los pisos, la grasa se enfría, se petrifica como cemento y reduce drásticamente el diámetro del caño principal.</p>
        ${getCtaHtml()}
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">¿Por qué se tapan repetitivamente las columnas?</h2>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Saponificación:</strong> Las grasas calientes se mezclan con jabón frío creando una espuma sólida impenetrable.</li>
          <li><strong>Estrangulación de la red:</strong> El agua hirviendo o química perfora un hueco de apenas centímetros, dejando la pared del tubo sucia.</li>
          <li><strong>Riesgo de presión térmica:</strong> Los cambios extremos de temperatura pueden rajar los ductos tricapa.</li>
        </ul>
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">¿Cómo limpiar la grasa dura de los edificios?</h2>
        <p>Solo las <a href="/destapaciones-hidrojet" style="color:#16A34A;font-weight:bold;text-decoration:underline;">destapaciones con hidrojet</a> garantizan recuperar el diámetro original. Sus boquillas eyectan agua hiperpresurizada que rasquetea la pared plástica barriendo todo el sarro solidificado hacia la calle.</p>
        ${getFaqHtml([
          {q: "¿El hidrojet sirve para caños de gastronomía?", a: "Es el estándar industrial obligatorio. Limpia de forma destructiva toda acumulación biológica o de frituras."},
          {q: "¿La grasa tapona todo el caño?", a: "Así es, su acumulación es perimetral. Puede estrangular una cloaca de 110mm reduciéndola al tamaño de un dedo."},
          {q: "¿Cubren servicios industriales en GBA?", a: "De hecho, contamos con furgones equipados y tanques para dar respuesta en fábricas industriales intensas."}
        ])}
      `
    },
    {
      slug: '5-senales-columna-edificio-tapada',
      title: '5 señales de que la columna de tu edificio está por taparse',
      image: '/img/maquina destapa cloacas.jpg',
      alt: 'Mantenimiento preventivo de columnas en consorcios de Gran Buenos Aires - Openagua',
      excerpt: 'Guía para administradores: cómo anticipar la inundación de planta baja.',
      content: `
        <p>Para todo administrador en <strong>CABA</strong> o <strong>Gran Buenos Aires</strong>, el llamado nocturno de un inquilino inundado con aguas negras es terrorífico. Evitar el desborde preventivamente ahorra costos formidables a la administración y al consorcio entero.</p>
        <p>Estas alertas te indican que necesitás <a href="/mantenimientos-preventivos" style="color:#16A34A;font-weight:bold;text-decoration:underline;">mantenimientos preventivos</a> inminentes en la montante.</p>
        ${getCtaHtml()}
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Señales Claves de Alerta en Columnas Principales</h2>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Ruidos cavernosos repentinos:</strong> Las cámaras y las bateas "respiran" o hacen gorgoteos ("Gloops") violentos en varios pisos.</li>
          <li><strong>Escurrimiento colectivo muy lento:</strong> Los primeros tres pisos demoran eternidades en vaciar el lavarropas.</li>
          <li><strong>Agua retrocediendo en Planta Baja:</strong> El aviso final. El tapón en planta baja empuja hacia arriba el agua que tiran los del piso 10.</li>
          <li><strong>Malos olores crónicos:</strong> Quejas unificadas de todos los departamentos orientados al pozo de aire y luz central.</li>
          <li><strong>Cámaras de inspección al límite:</strong> La tapa frente a la propiedad se encharca y expulsa humedad viscosa.</li>
        </ul>
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">¿Cómo prevenir tapones en las columnas del consorcio?</h2>
        <p>Una inspección inmediata e hidrolavado de las tuberías centrales liberará la congestión, eliminando meses de papeles húmedos, tierra y sedimento solidificado antes de que colapse.</p>
        ${getFaqHtml([
          {q: "¿Ofrecen abonos fijos a consorcios?", a: "Sí, creamos planes a medida de Limpieza Preventiva que eliminan de raíz los problemas caros fuera de horario."},
          {q: "¿Tienen alcance en los barrios cerrados de GBA?", a: "Damos mantenimiento programado en condominios desde Nordelta hasta Canning y CABA entero."},
          {q: "¿Incluyen informes técnicos de estas revisiones?", a: "Otorgamos certificados detallados sobre el funcionamiento y salud estructural detectada para tranquilidad de asambleas."}
        ])}
      `
    },
    {
      slug: 'resorte-vs-hidrojet-cual-es-mejor',
      title: 'Resorte vs. Hidrojet: ¿Cuál es mejor para tu destapación?',
      image: '/img/maquina resortes.jpg',
      alt: 'Comparativa técnica entre máquina de resortes y sistema hidrojet en CABA - Openagua',
      excerpt: 'Comparativa técnica para limpiar obstrucciones sin arruinar el material.',
      content: `
        <p>La disyuntiva constante al cotizar un trabajo en <strong>CABA</strong> o el <strong>Gran Buenos Aires</strong> se resume a elegir entre una herramienta manual mecanizada y una bomba hipertensora de agua.</p>
        <p>Ambas son <a href="/destapaciones-cloacas" style="color:#16A34A;font-weight:bold;text-decoration:underline;">destapaciones cloacales</a> válidas, pero su eficacia final y protección estructural difieren enormemente.</p>
        ${getCtaHtml()}
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">¿Qué método limpia mejor las cañerías incrustadas?</h2>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Resorte de Sondeo (Cable de 10mm-16mm):</strong> Es excelente para atascos de materiales blandos y trapos. <strong>Su debilidad:</strong> no limpia, solo abre un "tunel" a través de la suciedad base. Si hay grasa, la obstrucción regreserá pronto.</li>
          <li><strong>Limpieza Hidrocinética (<a href="/destapaciones-hidrojet" style="color:#16A34A;font-weight:bold;text-decoration:underline;">Hidrojet</a>):</strong> Propulsa enormes chorros cortantes en 360 grados exactos. <strong>Su fortaleza:</strong> Remueve al 100% todo sarro, cemento o aceite petrificado adhiriéndose a las paredes, dejándolas totalmente pulidas.</li>
        </ul>
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">¿Cuál elegir para evitar romper pisos?</h2>
        <p>Si tu casa es antigua y la cañería es frágil, el Hidrojet elimina los rebotes violentos del metal contra el PVC y los codos ciegos, evitando desgarros imprevistos. A nivel industrial y de hoteles, su utilización es la única opción higiénicamente aceptable a largo plazo.</p>
        ${getFaqHtml([
          {q: "¿El hidrojet saca las raíces subterráneas?", a: "Absolutamente, instalamos picos rotadores especiales que talan rápidamente raíces medianas y gruesas encalladas."},
          {q: "¿Dejan olor en el ambiente post-trabajo?", a: "Ninguno de nuestros procedimientos es tóxico; al lavar directamente con caudal perimetral, higienizamos también el área tratada."},
          {q: "¿Tienen cobertura veloz de Resorte convencional?", a: "Manejamos motos con equipos sonda ultra compactos en toda el área de microcentro CABA y zonas periféricas."}
        ])}
      `
    },
    {
      slug: 'video-inspeccion-saber-cano-roto-sin-romper',
      title: 'Video Inspección: Cómo saber si tu caño está roto sin romper el piso',
      image: '/img/video inspeccion.jpg',
      alt: 'Video inspección de cañerías rotas sin romper el piso en CABA y GBA - Openagua',
      excerpt: 'Evitá meses de albañilería cara usando cámaras cloacales.',
      content: `
        <p>Romper una docena de baldosas carísimas de un living ciegamente buscando la pérdida es una tragedia que ningún vecino de <strong>CABA</strong> ni del <strong>Gran Buenos Aires</strong> debería sufrir jamás.</p>
        <p>Actualmente existe tecnología de <a href="/video-inspeccion-canerias" style="color:#16A34A;font-weight:bold;text-decoration:underline;">video inspección localizadora</a> que escanea tus metros de cloaca por dentro ahorrándote fortuna de refacciones y dolores de cabeza inmensos.</p>
        ${getCtaHtml()}
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Beneficios de inspeccionar tuberías con cámaras HD</h2>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Detección Exacta:</strong> Una sonda con iluminación LED transmite visuales nítidas a un monitor, revelando exactamente la grieta, codo suelto o raíz que causó la fuga.</li>
          <li><strong>Diagnóstico sin Estrés:</strong> Desmitifica engañosos "trabajos de picado y excavación a ciegas" de falsos plomeros. Cortará directamente sobre los 40cm cuadrados afectados.</li>
          <li><strong>Grabación y Remito:</strong> Es una prueba visual indeleble invaluable para reclamos hacia la administración del barrio o consorcio.</li>
        </ul>
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">¿Cómo me ahorra plata pagar una cámara cloacal?</h2>
        <p>Al identificar un bloqueo inmenso de escombros de una obra ajena, evitas hacer constantes e inútiles pagos temporales por destapaciones fallidas. Sabrás, a centímetros del problema, donde aplicar con precisión microscópica la única reparación seria necesaria.</p>
        ${getFaqHtml([
          {q: "¿La cámara puede navegar por caños finos de 40mm?", a: "Contamos con miniaturas robóticas HD lo bastante flexibles para recorrer caños desde 40 milímetros sin trabarse."},
          {q: "¿Graba video para entregar a la aseguradora?", a: "Efectivamente, capturamos toda la incursión y generamos un archivo exportable legal con las coordenadas métricas del atasco."},
          {q: "¿El servicio llega rápido al GBA rural?", a: "Nuestros vehículos viajan totalmente instrumentados diariamente y abarcan radios suburbanos largos."}
        ])}
      `
    },
    {
      slug: 'inodoro-rebalsa-que-hacer',
      title: 'El inodoro rebalsa: qué hacer en los primeros 5 minutos',
      image: '/img/inodoro tapado.jpg',
      alt: 'Cómo destapar un inodoro rebalsado en CABA y GBA',
      excerpt: 'Guía de emergencia: pasos críticos para evitar una inundación sanitaria en tu baño.',
      content: `
        <p>Entrar al baño y ver que el agua del inodoro sube peligrosamente después de tirar la cadena es una de las situaciones más estresantes que podés vivir en tu casa o departamento de <strong>CABA</strong> o <strong>GBA</strong>. Esos primeros 5 minutos son determinantes para evitar daños mayores, malos olores persistentes y filtraciones hacia los pisos inferiores.</p>
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Paso 1: ¡No vuelvas a tirar la cadena!</h2>
        <p>Parece obvio, pero el instinto de muchas personas es presionar el botón de nuevo esperando que la presión del agua empuje la obstrucción. <strong>No lo hagas.</strong> Si el inodoro ya está lleno, el agua rebasará la loza y terminará en el piso. Si la mochila sigue recargando, cerrá la llave de paso que suele estar detrás del artefacto.</p>

        ${getCtaHtml()}

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Causas comunes del desborde en baños modernos</h2>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Exceso de papel higiénico:</strong> Especialmente los de doble hoja que no se deshacen rápido.</li>
          <li><strong>Objetos extraños:</strong> Juguetes, peines o incluso el soporte plástico del aromatizante.</li>
          <li><strong>Toallitas húmedas:</strong> Nunca deben tirarse al inodoro, ya que no se degradan y forman tapones indestructibles.</li>
          <li><strong>Problema en la columna:</strong> Si el agua sube sin que vos hayas usado el inodoro, el problema es una <a href="/blog/5-senales-columna-edificio-tapada" style="color:#16A34A;font-weight:bold;text-decoration:underline;">columna de edificio tapada</a>.</li>
        </ul>

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Métodos caseros seguros (y los peligrosos)</h2>
        <p>Si el nivel del agua bajó un poco, podés intentar usar la <strong>sopapa tradicional</strong>. Asegurate de que haya suficiente agua para cubrir la ventosa y generar vacío. Lo que <strong>NUNCA</strong> debes usar son ácidos fuertes o soda cáustica; estos químicos generan calor excesivo que puede rajar la cerámica o derretir las juntas de goma de los caños de PVC.</p>
        <p>En barrios como <strong>Palermo</strong>, <strong>Belgrano</strong> o <strong>San Isidro</strong>, donde las construcciones pueden ser antiguas, los caños de hierro fundido son propensos a acumular moho y sarro, haciendo que el inodoro rebalse ante el menor obstáculo.</p>

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">¿Cuándo llamar a un profesional?</h2>
        <p>Si después de tres intentos con la sopapa el agua no fluye, necesitás una <a href="/destapaciones-cloacas" style="color:#16A34A;font-weight:bold;text-decoration:underline;">destapación de cloacas profesional</a>. En <strong>Openagua</strong> utilizamos máquinas rotativas con resortes de acero que navegan por el sifón sin dañarlo, extrayendo el objeto que causa el problema.</p>

        ${getFaqHtml([
          {q: "¿El agua del inodoro puede rebasar sola?", a: "Sí, si vivís en departamentos de PB o pisos bajos y la columna central está tapada, el agua de los vecinos superiores saldrá por tu inodoro."},
          {q: "¿Es peligroso el agua que rebalsa?", a: "Absolutamente, es agua con carga bacteriana alta. Si rebalsa, desinfectá bien con lavandina al 10%."},
          {q: "¿Pueden destapar sin sacar el inodoro?", a: "En el 90% de los casos sí, gracias a nuestras sondas flexibles de alta tecnología."}
        ])}
        
        <p style="margin-top: 2rem;">Si estás en <strong>CABA</strong> o la <strong>Zona Norte</strong>, no arriesgues la higiene de tu hogar. Realizamos trabajos limpios, rápidos y con garantía escrita.</p>
      `
    },
    {
      slug: 'rejilla-patio-tapada-lluvia',
      title: 'Rejilla del patio tapada: cómo evitar inundaciones cuando llueve',
      image: '/img/rejilla patio.jpg',
      alt: 'Rejilla de patio tapada por hojas y suciedad',
      excerpt: 'No esperes a la tormenta. Descubrí cómo mantener tus desagües pluviales libres de sedimentos.',
      content: `
        <p>Las tormentas fuertes en <strong>Buenos Aires</strong> son cada vez más frecuentes, y para quienes tienen patios o terrazas, la rejilla es el único alivio. Sin embargo, cuando la rejilla del patio está tapada, el agua comienza a acumularse rápidamente, amenazando con entrar al living o al lavadero.</p>
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">¿Por qué se tapan las rejillas pluviales?</h2>
        <p>A diferencia de las cloacas internas, los <a href="/destapaciones-pluviales" style="color:#16A34A;font-weight:bold;text-decoration:underline;">desagües pluviales</a> reciben todo lo que el viento arrastra:</p>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Hojas y ramas:</strong> Principalmente en otoño, pero las tormentas de verano arrancan follaje verde.</li>
          <li><strong>Sedimento y tierra:</strong> El polvo acumulado en techos y pisos se convierte en barro denso.</li>
          <li><strong>Pelo de mascotas:</strong> Si bañás a tu perro en el patio, el pelo se enreda en la trampa de la rejilla.</li>
          <li><strong>Restos de obra:</strong> Si algún vecino está refaccionando, el polvillo de cemento puede solidificarse dentro del caño.</li>
        </ul>

        ${getCtaHtml()}

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Prevención: El mantenimiento estacional en GBA</h2>
        <p>En zonas con arboleda densa como <strong>Ramos Mejía</strong>, <strong>Olivos</strong> o <strong>Adrogué</strong>, es vital levantar la tapa de la rejilla una vez al mes. Retirá manualmente la basura que queda en el canasto o sifón. Tirá un balde de agua con detergente para verificar que el flujo sea vigoroso.</p>

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">El peligro de los "caños ciegos"</h2>
        <p>Muchas veces, la rejilla parece limpia pero el caño que va hacia la calle está obstruido por raíces de árboles cercanos. Esto se nota cuando el agua tarda minutos en bajar incluso después de una lluvia leve. En estos casos, la única solución efectiva son las <a href="/destapaciones-hidrojet" style="color:#16A34A;font-weight:bold;text-decoration:underline;">destapaciones con hidrojet</a>, que inyectan agua a altísima presión para barrer el barro y cortar raíces.</p>

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Qué hacer si ya se inundó</h2>
        <p>Si el agua ya está subiendo, lo primero es cortar la electricidad si hay enchufes cerca del nivel del suelo. Intentá usar un alambre grueso para "pescar" basura de la boca de la rejilla. Si el tapón es profundo, llamanos. Atendemos emergencias por lluvia en todo <strong>GBA</strong> y <strong>Capital Federal</strong>.</p>

        ${getFaqHtml([
          {q: "¿Sirve tirar lavandina a la rejilla?", a: "La lavandina no disuelve tierra ni hojas. Sirve para el olor, pero no para destapar un pluvial."},
          {q: "¿Hacen destapaciones en techos?", a: "Sí, limpiamos canaletas y bajadas verticales en casas y edificios de altura."},
          {q: "¿Qué es mejor, resorte o agua a presión?", a: "Para pluviales con barro, el hidrojet es superior porque lava las paredes del caño por completo."}
        ])}
      `
    },
    {
      slug: 'problema-departamento-o-columna',
      title: '¿El problema está en tu depto o en la columna del edificio?',
      image: '/img/edificio.jpg',
      alt: 'Inspección profesional de cañerías en edificio',
      excerpt: 'Aprendé a identificar quién debe pagar la destapación en un consorcio de CABA.',
      content: `
        <p>Vivir en un edificio en <strong>CABA</strong> tiene sus ventajas, pero las cañerías compartidas no son una de ellas. Cuando la bacha de la cocina o el inodoro se tapan, surge la gran duda: ¿Es un problema mío o es responsabilidad del consorcio? La respuesta define quién paga la factura de la destapación.</p>
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Señales de que el problema es en TU departamento</h2>
        <p>Si el agua solo se queda estancada cuando VOS abrís la canilla, lo más probable es que sea una obstrucción en el ramal individual del departamento. Las causas suelen ser grasa de cocina acumulada (muy común en edificios de más de 20 años en <strong>Recoleta</strong> o <strong>Caballito</strong>) o restos de jabón y pelo en el baño.</p>

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Señales de que el problema es la COLUMNA general</h2>
        <p>Esto es lo que llamamos una "emergencia de consorcio". Prestá mucha atención a estas señales:</p>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Agua que sube sola:</strong> Estás mirando la tele y escuchás que la rejilla del baño o la bacha de la cocina empieza a burbujear y sale agua, aunque no estés usando nada.</li>
          <li><strong>Varios vecinos afectados:</strong> El vecino del 4to y el del 3ero tienen el mismo problema simultáneamente.</li>
          <li><strong>Olor persistente en todo el piso:</strong> Los gases no pueden evacuar por la montante y escapan por los sifones de los departamentos.</li>
        </ul>

        ${getCtaHtml()}

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">¿Qué hacer si es la columna?</h2>
        <p>Debés avisar de inmediato al encargado o a la administración. Las columnas tapadas pueden inundar rápidamente los pisos inferiores (especialmente Planta Baja y 1ro). En <strong>Openagua</strong> trabajamos con administraciones de consorcios en todo <strong>CABA</strong> y <strong>GBA</strong> realizando <a href="/mantenimientos-preventivos" style="color:#16A34A;font-weight:bold;text-decoration:underline;">mantenimientos de columnas</a> para evitar estos desastres.</p>

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Responsabilidad legal y costos</h2>
        <p>Generalmente, el reglamento de copropiedad establece que las cañerías dentro de la pared hasta la conexión con la columna son del departamento, pero la columna principal es "bien común". Si se tapa la columna, el gasto corre por cuenta del consorcio. Si se tapa tu codo de salida por tirar pañales, te corresponde a vos.</p>

        ${getFaqHtml([
          {q: "¿Qué pasa si vivo en PB?", a: "Los departamentos de PB son los más vulnerables a las columnas tapadas. Recomendamos siempre tener una válvula antirretorno si el edificio es viejo."},
          {q: "¿Cómo destapan una columna de 10 pisos?", a: "Usamos máquinas con potentes motores y muchos metros de resorte, o hidrojet desde las cámaras de inspección en PB."},
          {q: "¿Atienden urgencias de consorcios los domingos?", a: "Sí, tenemos guardias activas para casos de desbordes en edificios."}
        ])}
      `
    },
    {
      slug: 'ducha-desagota-lento',
      title: 'La ducha desagota lento: causas y cómo solucionarlo',
      image: '/img/rejilla.jpg',
      alt: 'Cabellos tapando rejilla de ducha',
      excerpt: '¿Terminás de bañarte con el agua por los tobillos? Descubrí cómo limpiar tu drenaje de forma efectiva.',
      content: `
        <p>Nada arruina más una ducha relajante que descubrir que estás parado en una pileta de agua estancada. Si la ducha desagota lento, el problema rara vez se soluciona solo; al contrario, empeora con cada uso hasta que el tapón es total.</p>
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Los tres culpables del tapón en la ducha</h2>
        <ol style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Pelo humano:</strong> Se enreda en la rejilla y forma una "red" que atrapa todo lo demás.</li>
          <li><strong>Restos de jabón y shampoo:</strong> Los productos modernos tienen muchas grasas y aceites que se solidifican al enfriarse, pegándose a las paredes del caño.</li>
          <li><strong>Biofilm (Bacterias):</strong> Esa baba rosada o negra que ves a veces es una colonia bacteriana que reduce el diámetro del conducto.</li>
        </ol>

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Soluciones simples que podés probar</h2>
        <p>Antes de desesperar, sacá el tornillo de la rejilla. Muchas veces el tapón está justo ahí. Con un guante, retirá el "nido" de pelos. También podés volcar agua hirviendo (con cuidado si los caños son muy viejos) mezclada con detergente desengrasante para platos.</p>

        ${getCtaHtml()}

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">El error de la soda cáustica</h2>
        <p>Es muy común en casas de <strong>Zona Sur</strong> o <strong>Zona Oeste</strong> comprar soda cáustica en la ferretería. <strong>Cuidado:</strong> Si el agua no corre, la soda se queda estancada, se enfría y se convierte en una piedra blanca dura como el mármol dentro del sifón. Terminás teniendo que romper el piso para cambiar el caño.</p>

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Limpieza técnica con Openagua</h2>
        <p>Si los métodos caseros fallan, es porque el problema está en el ramal que conecta con la cloaca principal. Realizamos <a href="/destapaciones-canerias" style="color:#16A34A;font-weight:bold;text-decoration:underline;">destapaciones de cañerías de baño</a> con resortes finos de alta velocidad que limpian el sifón sin rayar el artefacto ni dañar las uniones.</p>

        ${getFaqHtml([
          {q: "¿Cada cuánto hay que limpiar la rejilla de la ducha?", a: "Recomendamos una limpieza superficial semanal para retirar el pelo acumulado."},
          {q: "¿Tienen cobertura en Zona Norte?", a: "Sí, cubrimos Vicente López, San Isidro, Tigre y alrededores con equipos móviles rápidos."},
          {q: "¿El mal olor de la ducha es por el tapón?", a: "Sí, la acumulación orgánica en descomposición genera gases que huelen a alcantarilla."}
        ])}
      `
    },
    {
      slug: 'como-destapar-inodoro',
      title: 'Cómo destapar un inodoro: soluciones caseras y cuidados urgentes',
      image: '/img/inodoro tapado.jpg',
      alt: 'Destapación de inodoro rápida y segura - Openagua',
      excerpt: 'Conocé los métodos más efectivos para destapar tu inodoro tapado rápidamente y sin llamar a un plomero a la primera.',
      content: `
        <p>Tener un inodoro tapado es la emergencia sanitaria más estresante que un hogar en <strong>CABA</strong> o el <strong>Gran Buenos Aires</strong> puede enfrentar. Un simple bollo de papel higiénico de más, restos sanitarios incorrectos, y de repente, el agua sube amenazantemente hacia los bordes del sanitario.</p>
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Causas más comunes por las que se tapa el inodoro</h2>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Exceso de papel o toallas femeninas:</strong> Se apelmazan y forman un tapón elástico casi imbatible.</li>
          <li><strong>Toallitas desmaquillantes (Wet Wipes):</strong> Están fabricadas en polímeros que nunca se degradan, creando tapones sintéticos que estrangulan el ducto entero.</li>
          <li><strong>Juguetes o Plásticos:</strong> Un clásico si tienes niños pequeños, y muy difícil de solucionar con métodos caseros, ya que los plásticos se encallan a nivel sifón.</li>
        </ul>
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Pasos seguros y caseros para intentar solucionarlo</h2>
        <p>Lo primero y crítico: <strong>No vuelvas a tirar del botón</strong>. Intentá primero usar una <strong>sopapa de goma tradicional</strong>: colócala sellando todo el perímetro y con agua cubriendo la copa de goma, ejerce movimientos rítmicos vigorosos hacia abajo y hacia arriba de 10 a 15 veces buscando soltar la presión en vacío del objeto.</p>
        <p>Otra opción rápida para obstrucciones ligeras (sólo materiales orgánicos) es volcar 3 litros de agua bien caliente acompañada de detergente lavavajillas. El jabón empujará e intentará romper la tensíon del atasco leve.</p>
        
        ${getCtaHtml()}
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Cuándo llamar urgentemente al servicio profesional</h2>
        <p>Si luego de estos intentos el nivel del agua sigue igual y notas que si abres la bacha del lavamanos empuja aire y huele feo, la obstrucción ya bajó al troncal principal o ramal cruzado. Aquí es donde los plomeros certificados como nuestro servicio de <a href="/destapaciones-cloacas" style="color:#16A34A;font-weight:bold;text-decoration:underline;">Destapaciones de Cloacas</a> intervienen. Usamos maquinaria de sondas que desarma y arranca por rotación todo el atasco de raíz, en minutos.</p>
        
        ${getFaqHtml([
          {q: "¿Qué pasa si meto una percha metálica armada?", a: "Muy desaconsejado. Una percha rayará de forma permanente y muy notoria toda la porcelana cara de tu sanitario por la base interior u orificio de descarga."},
          {q: "¿Por qué huelen a cloaca los otros desagües del baño?", a: "Es indicador de una columna obstruida o ramal completo saturado en tu casa afectando respiración pluvial de zonas comunes."},
          {q: "¿Tienen visita de destapaciones el mismo día?", a: "Contamos con brigadas recorriendo incesantemente las rutas y asistencias con unidades móviles llegando rapidisimo a tu hogar en el dia."}
        ])}
      `
    },
    {
      slug: 'como-destapar-rejillas',
      title: 'Cómo destapar rejillas de patio, baños y terrazas obstruidas',
      image: '/img/rejilla patio.jpg',
      alt: 'Destapación de rejilla bloqueada en patio o terraza - Openagua',
      excerpt: 'Hojas, tierra o cabellos bloquean tu rejilla. Pasos vitales para evitar inundaciones.',
      content: `
        <p>El estancamiento crónico de agua superficial tras una lluvia ligera es el síntoma definitivo de que tu sistema pluvial tiene los días contados. Ya sea en un balcón, una terraza de edificio en <strong>CABA</strong> o la pileta de lavadero del fondo de una casa en todo el cordón de <strong>GBA</strong>.</p>
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">¿Qué compone un tapón pluvial?</h2>
        <p>A diferencia del drenaje interno, las rejillas de patio y terraza deben tragar:</p>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Hojas, Polvillo y Escombros:</strong> Tras 4 o 5 tormentas fuertes arrastrando barro sucio, se conforma "cemento de hojas" debajo de las tapas y codos intermedios.</li>
          <li><strong>Pelo y jabón en flor de ducha:</strong> Las rejillas de boxes de ducha aglutinan enjambres fibrosos casi impenetrables mezclados a esencias grasosas jabonosas.</li>
          <li><strong>Raíces internas:</strong> Lo más grave. Las enredaderas se alimentan de la humedad rompiendo caños subterráneos y ahorcando la luz de caudal del caño pluvial por dentro.</li>
        </ul>
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Estrategia casera para mantenimiento leve</h2>
        <p>Primero usa protección mecánica ocular básica (gafas), levanta la placa cromada / acrílico o reja metálica usando un destornillador por las ranuras. Si ves residuos superficiales, saca los restos podridos usando guantes largos plásticos con gancho simple, tirando en una bolsa para tirar a la calle en horas correspondientes a la recolección.</p>
        <p>Aplica fuertes tiradas en "chorro limpio directo" con manguera a presión buscando desatascar la base del embudo pluvial. Si el agua se reitera a no bajar ni un nivel en minutos... es un diagnóstico de atasco profundo ciego.</p>
        
        ${getCtaHtml()}
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Destapación mecanizada de cañerías para pluviales estancados</h2>
        <p>Lamentablemente si el nido radica bajo metros incrustado cruzando el jardín hacia la calle o el pulmón ciego bajo pasto de su casa a calle final exterior, recomendamos que nos deriven su incidencia para un procedimiento de hidrojet en redes urbanas, brindado en nuestra solución de <a href="/destapaciones-pluviales" style="color:#16A34A;font-weight:bold;text-decoration:underline;">Destapaciones Pluviales</a>. Realizamos limpiezas completas de codo a codo destrozando tapones ciegos endurecidos de la cañería.</p>
        
        ${getFaqHtml([
          {q: "¿Tienen límite de largo de cañería pluvial al trabajar?", a: "Cubrimos caños de muchisimos metros de longitud de fondos extensos o loteos desde entrada cruzando hacia calle sin roturas hasta limpiar al máximo todo arrastre de elementos trabados en los empalmes subterráneos comunes."},
          {q: "¿Destruyen los cables de raíce superficiales?", a: "Usamos punteras dentadas devoradoras por rotación y corte por choque hidráulico de las motobombas hasta limpiar y perforar los ovillos biológicos."}
        ])}
      `
    },
    {
      slug: 'como-destapar-pileta-cocina',
      title: 'Cómo destapar la pileta de cocina sin dañar los caños',
      image: '/img/destapacion cocina.jpg',
      alt: 'Pileta de cocina tapada y llena de agua esperando ayuda técnica - Openagua',
      excerpt: 'Tu bacha expulsa mal olor y no traga el agua: descubrí por qué los palos de escoba rompen todo y cómo abordarlo seguro.',
      content: `
        <p>La bacha tapada, agua estancada a mitad del escurridor y una baranda espantosa a cloaca inundando tu living... La pileta de la cocina colapsada es un freno catastrófico para la vida hogareña en toda gran ciudad moderna del <strong>AMBA</strong>.</p>
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Causas Críticas: Por qué se tapa la Bacha de Cocina</h2>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Grasa Fría y Aceite:</strong> Aceite de frituras mezclado con jabón líquido frío de las ollas. Actúa como arterias saturadas por colesterol solidificado dentro de las paredes de los sifones debajo mesadas o curvas plásticas chicas iniciales.</li>
          <li><strong>Café y Yerba:</strong> Extremadamente arenoso. Arrastra partículas sumamente minúsculas pesadas que se aposentan abajo y limitan la velocidad natural de declive, arrastrando a tapón general cruzado luego para aglutinamiento ciego.</li>
          <li><strong>Fideos o Arroz:</strong> Todo carbohidrato se expande bajo el agua absorbiéndola, bloqueando caños instantáneamente.</li>
        </ul>
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Prácticas del Peligro Absoluto que NO debes hacer jamás</h2>
        <p>Destruir el mueble del lavabo bajo mesada es muy sencillo. <strong>El error de meter el palo de escoba o alambres punzantes:</strong> Rompe, perfora las uniones frágiles o codos de plomo blando viejos obligando al uso destructivo y cambio de pieza total perdiendo garantías de material. Además desellando roscas provocándote perdidas fantasma microscópicas pudriendo pisos de muebles oscuros. El químico de "destapañeria magico", puede calentar a niveles que fracturen tu bajada y dañar terriblemente para el cuerpo (respiración tóxica). </p>
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Método Seguro para tu Pileta Obstruida</h2>
        <p>Vacia con jarras las aguas de la pileta para un secado superficial (hacia baldes cruzados). Luego puedes probar limpiar desenroscando por debajo, poniendo fuentones debajo de la trampa del sifón U. Allí se saca el vaso general atrapador para depurarlo a base simple física.</p>
        
        ${getCtaHtml()}
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Cuando el tapón es de Pared Profunda</h2>
        <p>Si debajo la bacha o la U baja fluye libremente pero se traba todo el canal interno o rebalsa por otra rejilla continua cruzada de planta, el estancamiento excede la reparación casera; necesita de asistencia seria y calificada provista en base firme con nuestras maquinarias de sistema para las <a href="/destapaciones-canerias" style="color:#16A34A;font-weight:bold;text-decoration:underline;">Destapaciones Cañerias</a> y ductos hogareños chicos. Un desparramador especial retira desde cocinas hacia exterior tramos ciegos imposibles.</p>
        
        ${getFaqHtml([
          {q: "¿Tiran acido muriático o industrial al limpiar para hacer desobstrucción?", a: "Jamás y prohibido terminantemente. Nuestras resoluciones técnicas abocan 100% de fuerza cinético o hìdrica con sondas acero, cortantes físicas o chorros hiperpresurizados cuidando tu estructura en su integridad absoluta libre de tóxicos químicos perennes."},
          {q: "¿Cuánto demanda destapar una cocina estandar?", a: "Es veloz: diagnosticamos y en cuestion de pocos minutos de operación sobre rejillas o sifón limpiamos la pared interior tapada cruzada asegurando paso veloz y flujo sonoro natural (vuelve a tragar fuerte rápido)." }
        ])}
      `
    },
    {
      slug: 'diferencias-canerias-cloacales-pluviales',
      title: 'Diferencias entre cañerías cloacales y pluviales | Openagua',
      image: '/img/maquina destapa cloacas.jpg',
      alt: 'Diferencias entre tuberías cloacales y pluviales - Openagua',
      excerpt: 'Descubrí qué transporta cada sistema, cómo detectar cuál está tapado y cuándo conviene llamar a un profesional.',
      content: `
        <p>Muchas veces el problema no está en la misma cañería. Sentir mal olor, presenciar un rebalse o notar agua estancada no siempre tiene el mismo origen. Las cloacales y las pluviales cumplen funciones completamente distintas, y entender la diferencia te ayudará a detectar mejor dónde está la obstrucción y solicitar la solución técnica correcta.</p>
        
        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">¿Qué transportan las cañerías cloacales?</h2>
        <p>El sistema cloacal o "aguas negras y grises" está diseñado estrictamente para evacuar fluidos y materia de las instalaciones internas del hogar. Transporta:</p>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li>El agua de descarga del inodoro y el bidet.</li>
          <li>Los fluidos llenos de restos orgánicos, grasa y jabón provenientes de la pileta de cocina.</li>
          <li>El líquido jabonoso y restos capilares o corporales de la ducha o bañera.</li>
          <li>El agua con detergentes proveniente del lavarropas.</li>
        </ul>

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">¿Qué transportan las cañerías pluviales?</h2>
        <p>Por otro lado, la red pluvial está pensada enteramente para capturar y derivar el exceso de agua proveniente de precipitaciones hacia la calle, evitando la saturación del suelo. Transporta:</p>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li>Agua de lluvia pura recolectada de los techos y terrazas.</li>
          <li>El agua capturada por canaletas y bajadas verticales aéreas.</li>
          <li>El caudal acumulado en las rejillas de patio exteriores.</li>
          <li>Desagües perimetrales de parques o pulmones de manzana.</li>
        </ul>

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Tabla Comparativa de Sistemas</h2>
        <div style="overflow-x: auto; margin-bottom: 2rem;">
          <table style="width: 100%; min-width: 600px; border-collapse: collapse; text-align: left; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background: #ffffff;">
            <thead>
              <tr style="background-color: #f8fafc; border-bottom: 2px solid #cbd5e1;">
                <th style="padding: 1rem; font-weight: 800; color: #0f172a;">Característica</th>
                <th style="padding: 1rem; font-weight: 800; color: #16A34A;">Sistema Cloacal</th>
                <th style="padding: 1rem; font-weight: 800; color: #0284c7;">Sistema Pluvial</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 1rem; font-weight: 700; color: #334155;">Qué transporta</td>
                <td style="padding: 1rem; color: #475569;">Aguas negras, jabón, materia u orgánica, grasa</td>
                <td style="padding: 1rem; color: #475569;">Exclusivamente agua de lluvia, hojas y tierra</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
                <td style="padding: 1rem; font-weight: 700; color: #334155;">Orígenes primarios</td>
                <td style="padding: 1rem; color: #475569;">Inodoros, bachas de cocina, duchas y lavaderos</td>
                <td style="padding: 1rem; color: #475569;">Techos, canaletas áreas, terrazas y patios</td>
              </tr>
              <tr>
                <td style="padding: 1rem; font-weight: 700; color: #334155;">Síntomas de bloqueo</td>
                <td style="padding: 1rem; color: #475569;">Olor insoportable, gorgoteo en bachas o desbordes al tirar cadena</td>
                <td style="padding: 1rem; color: #475569;">Inundación de superficie severa exclusiva durante días lluviosos</td>
              </tr>
            </tbody>
          </table>
        </div>

        ${getCtaHtml()}

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Cómo identificar cuál sistema se tapó</h2>
        <p>El diagnóstico rápido se reduce a asociar el evento que detona el problema:</p>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Si rebalsa el inodoro o el bidet:</strong> la obstrucción recae indiscutiblemente sobre la línea cloacal primaria. (<a href="/blog/como-destapar-inodoro" style="color:#16A34A;text-decoration:underline;">Ver post sobre inodoros</a>).</li>
          <li><strong>Si se inunda el patio o terraza cada vez que llueve:</strong> el cuello de botella vive en el ramal pluvial, probablemente obturado por hojas o tierra.</li>
          <li><strong>Si el ambiente de la cocina o baño apesta a gas de pantano (olor a alcantarilla):</strong> el problema es casi siempre cloacal debido a fermentación de grasas o pérdida del sifón. (<a href="/blog/por-que-cocina-huele-a-cloaca" style="color:#16A34A;text-decoration:underline;">Saber más de olores</a>).</li>
        </ul>

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Problemas compartidos en CABA y GBA</h2>
        <p>Las redes de los edificios antiguos suelen compartir la antigüedad de sus materiales. Las cañerías de ambas redes de vez en cuando sufren obstrucciones severas:</p>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>Raíces usurpadoras:</strong> Comunes en fondos del GBA y frentes de CABA, aplastan y fisuran ductos ciegos buscando humedad pluvial o cloacal.</li>
          <li><strong>Grasa acumulada:</strong> El colesterol letal de la columna cloacal del consorcio.</li>
          <li><strong>Hojas, barro y sedimentos:</strong> Los enemigos silenciosos del pluvial y dueños absolutos de la rejilla empantanada.</li>
        </ul>

        <h2 style="color:#0f172a;margin-bottom:1rem;font-size:1.5rem;">Cuándo conviene solicitar evaluación profesional</h2>
        <p>Si no sabés a ciencia cierta si el problema recae sobre la red cloacal o pluvial —ya que en infraestructura rústica a veces corren paralelamente o poseen conexiones erróneas mixtas—, nuestro equipo puede identificar la anomalía y resolverla sin efectuar roturas agresivas.</p>
        
        <p style="margin-top: 2rem;">Contamos con diagnósticos avanzados por <a href="/video-inspeccion" style="color:#16A34A;font-weight:bold;text-decoration:underline;">video inspección</a> que radiografían interiormente para certificar si precisás <a href="/destapaciones-cloacas" style="color:#16A34A;font-weight:bold;text-decoration:underline;">asistencia cloacal</a> técnica o depuración estacional de <a href="/destapaciones-pluviales" style="color:#16A34A;font-weight:bold;text-decoration:underline;">redes pluviales</a>.</p>

        ${getFaqHtml([
          {q: "¿Qué sucede si el problema persiste luego de limpieza superficial?", a: "Usualmente indica fallas en las curvas del ramal central lejos del alcance superficial, lo que demanda destapaciones mecánicas con resortes rotativos de alta resistencia para triturar los tapones."},
          {q: "¿Tirar aceites puede afectar a la vía pluvial?", a: "No debería. Sin embargo, en edificaciones no reglamentarias el aceite puede derivar a conductos no procesados agravando la contaminación general." }
        ])}
      `
    }
  ];
}
