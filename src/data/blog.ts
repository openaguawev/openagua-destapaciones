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
    }
  ];
}
