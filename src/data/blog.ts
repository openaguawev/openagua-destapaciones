// Datos mockeados de los 10 artículos solicitados en el prompt

export interface Articulo {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML content or paragraphs
}

export const getArticulos = (): Articulo[] => {
  return [
    {
      slug: "como-detectar-obstruccion-cloaca",
      title: "Cómo detectar una obstrucción de cloaca antes de que empeore",
      excerpt: "Reconocer a tiempo los síntomas de una cloaca tapada te ahorrará tiempo, dinero y disgustos. Aquí te contamos lo que debés observar.",
      content: "<h2>1. Malos olores recurrentes</h2><p>El primer signo suele ser un olor desagradable a agua estancada o gas de alcantarilla que sube por las rejillas.</p><h2>2. Escurrimiento lento</h2><p>Si el agua en lavatorios o ducha tarda más de lo normal en bajar, es una clara señal de advertencia.</p><h2>3. Burbujeo en los sanitarios</h2><p>Al descargar agua en el inodoro, si notás que la rejilla burbujea, el aire está atrapado por un bloqueo parcial.</p><h2>4. Retornos de agua</h2><p>Cuando usás el lavarropas y el agua sale por la rejilla del baño, la obstrucción principal ya está comprometiendo todo el sistema.</p><h2>5. Aumento de humedad</h2><p>Manchas en las paredes o el suelo cerca de las cañerías indican posibles filtraciones por la presión de un tapón.</p>"
    },
    {
      slug: "sonda-vs-hidrojet-diferencias",
      title: "Diferencias entre sonda e hidrojet: cuándo conviene cada método",
      excerpt: "Conocé las herramientas profesionales para la destapación y descubrí cuál es la más efectiva para tu problema puntual.",
      content: "<h2>1. ¿Qué es la máquina de sonda rotativa?</h2><p>Es un cable de acero flexible que ingresa a la cañería girando para romper y arrastrar tapones mecánicos, como papel o trapos.</p><h2>2. ¿Qué es el Hidrojet?</h2><p>Un sistema avanzado que eyecta agua a altísima presión (hasta 4000 psi) limpiando a fondo las paredes de la tubería.</p><h2>3. Cuándo usar Sonda</h2><p>Es ideal para obstrucciones puntuales causadas por objetos extraños, papel higiénico compacto o bloqueos recientes en cañerías domésticas.</p><h2>4. Cuándo preferir Hidrojet</h2><p>Si el problema es sarro crónico, grasa solidificada (común en restaurantes) o raíces de árboles, el hidrojet no solo destapa sino que restaura el diámetro original.</p><h2>5. Conclusión profesional</h2><p>A menudo el diagnóstico dictará la herramienta. El equipo adecuado garantiza un trabajo duradero sin dañar tus cañerías.</p>"
    },
    {
      slug: "mantenimiento-preventivo-consorcios",
      title: "Mantenimiento preventivo en consorcios: plan anual recomendado",
      excerpt: "Evitar emergencias sanitarias en edificios requiere planificación. Te detallamos cómo estructurar el mantenimiento anual.",
      content: "<h2>1. Inspección general semestral</h2><p>La revisión de pluviales y cloacas dos veces al año ayuda a identificar problemas antes de que se agraven.</p><h2>2. Lavado de columnas principales</h2><p>Las columnas de bajada de cocinas acumulan muchísima grasa. Un lavado preventivo con hidrojet asegura fluidez.</p><h2>3. Limpieza de cámaras y sumideros</h2><p>Especialmente antes del otoño (por caídas de hojas) y las temporadas de lluvias, deben estar completamente liberados.</p><h2>4. Revisión de bombas sumergibles</h2><p>Asegurarse de que el sistema de desagote automático responda adecuadamente salva a los sótanos de costosas inundaciones.</p><h2>5. Videocámaras en caños crónicos</h2><p>Registrar anualmente cañerías antiguas permite presupuestar cambios con tiempo, y no lidiar con roturas de urgencia.</p>"
    },
    {
      slug: "cuanto-cuesta-destapar-cloaca",
      title: "¿Cuánto cuesta destapar una cloaca en CABA y GBA?",
      excerpt: "Los precios varían, pero la transparencia es fundamental. Factores que inciden en el valor del servicio.",
      content: "<h2>1. Gravedad de la obstrucción</h2><p>No es lo mismo mover una masa de papel que atravesar raíces o una capa gruesa de cemento viejo.</p><h2>2. Tecnología necesaria</h2><p>El uso de máquina de sonda tiene un costo base, mientras que aplicar sistema de hidrojet o cámara de inspección tiene otro valor por la maquinaria especializada requerida.</p><h2>3. Accesibilidad de las cámaras</h2><p>Si la cámara o el acceso a la cañería está obstruido por escombros, tierra o baldosas fijas que hay que remover, el tiempo de trabajo se extiende.</p><h2>4. Metro lineal vs Trabajo integral</h2><p>Desconfiá de quienes cobran por metro de cable sin límite. Las tarifas planas por trabajo terminado evitan sorpresas desagradables al cliente.</p><h2>5. Recomendación</h2><p>Exigí siempre un diagnóstico claro. El precio justo es el que garantiza una solución de raíz, evitando que debas buscar plomeros cada dos semanas.</p>"
    },
    {
      slug: "video-inspeccion-canerias",
      title: "Video inspección de cañerías: qué es y cuándo pedirla",
      excerpt: "La tecnología eliminó las conjeturas en plomería. Con cámaras de alta definición vemos el problema sin romper nada.",
      content: "<h2>1. ¿En qué consiste?</h2><p>Se introduce una cámara conectada a un monitor por la tubería, iluminando el interior y grabando en tiempo real el estado de los caños.</p><h2>2. Detección de roturas invisibles</h2><p>Muchas veces una pérdida no muestra manchas de humedad de inmediato, o lo hace muy lejos del origen; la cámara encuentra la fractura exacta.</p><h2>3. Invasión de raíces</h2><p>Es común en Zona Norte y Sur que los árboles perforen caños antiguos. La video inspección confirma si el tapón es basura o raíces gruesas.</p><h2>4. Verificación post-trabajo</h2><p>Tras utilizar el hidrojet, una segunda inspección visual corrobora que hemos devuelto el 100% del diámetro interior disponible a la tubería.</p><h2>5. Compra de propiedades</h2><p>Antes de invertir en su nuevo hogar, una inspección cloacal rápida puede salvarlo de una propiedad que requiera un recambio total de sanitarios en el corto plazo.</p>"
    },
    {
      slug: "senales-caneria-cocina-tapada",
      title: "Señales de que tu cañería de cocina está por taparse",
      excerpt: "Todo comienza mucho antes de que el agua ya no baje. Aprendé a leer las señales para prevenir atascos severos en tu cocina.",
      content: "<h2>1. El lavabo hace ruido a \"glup\"</h2><p>Cuando se suelta el tapón de la bacha y el agua succiona dejando un sonido hueco o burbujas fuertes en el sifón.</p><h2>2. Drenaje en cámara lenta</h2><p>El hundimiento lento del caudal indica que la grasa ya recubre el interior del caño reduciendo el diámetro de paso.</p><h2>3. Olor a descomposición</h2><p>Si percibís un hedor constante cerca de la bacha que no proviene del tacho de basura, son los residuos pudriéndose atrapados en el tubo.</p><h2>4. Agua que retrocede ocasionalmente</h2><p>A veces, mientras lavás gran cantidad de platos, ves que el nivel del agua empieza a subir amenazando con desbordar y luego baja abruptamente. Eso es una obstrucción parcial inminente.</p><h2>5. Mantenimiento correcto</h2><p>Evitá los químicos corrosivos de supermercado. Ante las primeras señales contáctanos para limpiar el sarro graso de raíz de manera segura.</p>"
    },
    {
      slug: "raices-en-canerias",
      title: "Raíces en cañerías: cómo detectarlas y eliminarlas",
      excerpt: "El problema de obstrucción más persistente, sobre todo en zonas de casas bajas o jardines.",
      content: "<h2>1. ¿Por qué las raíces buscan mis caños?</h2><p>Los caños de cloaca emiten vapor de agua y calor; un microclima perfecto para las raíces, además del fertilizante orgánico natural presente.</p><h2>2. ¿Cómo logran entrar?</h2><p>Encuentran juntas mal selladas en tubos de cemento, pvc antiguo o pequeñísimas fisuras capilares por desgaste. Una vez adentro tienen un crecimiento acelerado.</p><h2>3. Cómo detectarlas temprano</h2><p>Obstrucciones crónicas: si tu plomero lograba destapar y al mes está tapado otra vez, el problema no es basura, el problema crece. Además de escurrimientos en cámara lenta por todo el tendido.</p><h2>4. Cómo se eliminan profesionalmente</h2><p>Las sondas habituales solo enredan o empujan parte del tapón. Se requiere cortadores radiculares anexados a la máquina y la fuerza extrema simultánea del Hidrojet.</p><h2>5. Prevención post-extracción</h2><p>Una vez limpiado, si el caño está muy roto, en algunos casos se podrá encamisar. Pero la solución fundamental si no se desea romper, es agendar pasadas preventivas cada 6 o 12 meses.</p>"
    },
    {
      slug: "destapaciones-pluviales-antes-lluvias",
      title: "Destapaciones pluviales: por qué hacerlas antes de las lluvias",
      excerpt: "Marzo o abril es tu última oportunidad segura de poner tu red pluvial a tono antes de las severas tormentas.",
      content: "<h2>1. Lo que no se ve, sí lastima</h2><p>Canaletas y descargas bloqueadas ocultas en rejillas rebalsarán con la primera tormenta importante inundando el interior de la casa.</p><h2>2. El trabajo preventivo cuesta mucho menos</h2><p>Sacar un secarropas arruinado del sótano te va a costar muchas, muchísimas veces más que un chequeo y limpieza de sumideros.</p><h2>3. Hojas, nidos y tierra</h2><p>Las canaletas son ecosistemas para aves o se tapan con la defoliación de otoño; al convertirse en abono taponan las bajadas herméticamente.</p><h2>4. Efecto de embudo</h2><p>Si llueven 100mm en una hora, toda esa furia de agua corre a tus bajadas pluviales. Si la capacidad está disminuida un 30% por sedimentos, el agua rebalsará sí o sí.</p><h2>5. Nuestro servicio</h2><p>Limpiamos techos, terrazas, balcones, codos pluviales y rejillas del patio a alta presión para que la temporada te encuentre tranquilo.</p>"
    },
    {
      slug: "como-funciona-hidrojet",
      title: "Cómo funciona el hidrojet y por qué es mejor que los químicos",
      excerpt: "Descubrí cómo la mera fuerza física del agua puede destapar y limpiar tuberías sin dañar el ecosistema ni tus instalaciones.",
      content: "<h2>1. Destapa por potencia de impacto</h2><p>El hidrojet no es una aspiradora. Usa boquillas especializadas con pequeños agujeros orientados hacia atrás, y uno frontal. Proyectando agua entre 1500 a 4000 PSI corta prácticamente todo lo bloqueado a su paso.</p><h2>2. Limpieza 360 grados</h2><p>Al contrario que la sonda que simplemente hace un orificio circular por sobre el tapón para que pase algo el agua, la boquilla al rotar hidro-lava las paredes circulares logrando que el caño recupere su formato original liso.</p><h2>3. Adiós a los problemas con químicos</h2><p>La sosa cáustica y otros destapacañerías calientan y ablandan los PVC derribando la vida útil del plástico, logrando sellarlo aún más e intoxican gravemente el agua.</p><h2>4. Súper efectivo en grasas sólidas</h2><p>El jabón y la grasa del fregadero una vez que bajan al tubo frío, colapsan creando calcificaciones. El hidrojet sencillamente licúa esas calcificaciones de inmediato.</p><h2>5. Rentable y eco-friendly</h2><p>Solo utiliza H2O limpia conectada a una potente bomba. Ideal para piletas comerciales, bares o cocinas familiares frecuentes de uso intensivo. Cuida la tubería y el planeta a la vez.</p>"
    },
    {
      slug: "sotano-inundado-que-hacer",
      title: "Sótano inundado: qué hacer y cómo evitarlo",
      excerpt: "El terror de muchos consorcios y casas privadas frente a roturas o alertas meteorológicas a gran escala.",
      content: "<h2>1. Prioridad: Seguridad eléctrica</h2><p>Antes de pisar tu subsuelo inundado, debés desconectar absolutamente toda la energía de ese sector minimizando los riesgos de fatalidades por electrocución.</p><h2>2. Llamar a profesionales del desagote</h2><p>Bajar con baldes y secadores no bastará frente a volumen sostenido. Nosotros llevamos y sumergimos bombas centrífugas de alto caudal que secan el piso en minutos.</p><h2>3. Evaluar el origen del agua</h2><p>Una vez seco, buscaremos el porqué: si el pozo de bombeo de la casa falló, si las paredes transpiran a nivel napas o si algún caño troncal principal se ha partido de pronto.</p><h2>4. La importancia de la válvula antirretorno</h2><p>Si la calle se inunda frecuentemente, las aguas servidas del municipio intentarán subir hacia tus cañerías para buscar desahogarse. La válvula permite salida, pero tranca el retorno agresivo exterior.</p><h2>5. Bombas con flotante secundario</h2><p>Todo el tiempo te recordaremos que para el subsuelo, debés tener dos bombas automáticas alternadas. Dejar el subsuelo dependiendo solo de uno de estos equipos significa desastre eventual garantizado.</p>"
    }
  ];
};
