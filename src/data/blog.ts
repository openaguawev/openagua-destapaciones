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
      slug: 'por-que-cocina-huele-a-cloaca',
      title: '¿Por qué mi cocina huele a cloaca? 3 causas y soluciones definitivas',
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
          {q: "¿Ofrecen abonos fijos a consorcios?", a: "Sí, creamos planes a medida de Limpieza Preventiva que eliminan de raíz las urgencias caras fuera de horario."},
          {q: "¿Tienen alcance en los barrios cerrados de GBA?", a: "Damos mantenimiento programado en condominios desde Nordelta hasta Canning y CABA entero."},
          {q: "¿Incluyen informes técnicos de estas revisiones?", a: "Otorgamos certificados detallados sobre el funcionamiento y salud estructural detectada para tranquilidad de asambleas."}
        ])}
      `
    },
    {
      slug: 'resorte-vs-hidrojet-cual-es-mejor',
      title: 'Resorte vs. Hidrojet: ¿Cuál es mejor para tu destapación?',
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
    }
  ];
}
