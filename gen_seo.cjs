const fs = require('fs');

// Structured SEO data for each barrio
const zones = {
  caba: {
    comercial: ['destapaciones-palermo','destapaciones-recoleta','destapaciones-belgrano','destapaciones-liniers','destapaciones-san-nicolas','destapaciones-puerto-madero'],
    mixto: ['destapaciones-caballito','destapaciones-boedo','destapaciones-flores','destapaciones-once','destapaciones-barrio-norte','destapaciones-almagro','destapaciones-san-telmo','destapaciones-constitucion','destapaciones-balvanera','destapaciones-retiro','destapaciones-san-cristobal'],
    residencial: ['destapaciones-capital-federal','destapaciones-floresta','destapaciones-montserrat','destapaciones-parque-chacabuco','destapaciones-saavedra','destapaciones-villa-devoto','destapaciones-villa-real','destapaciones-la-boca','destapaciones-monte-castro','destapaciones-parque-chas','destapaciones-villa-general-mitre','destapaciones-villa-santa-rita','destapaciones-versalles','destapaciones-agronomia','destapaciones-chacarita','destapaciones-la-paternal','destapaciones-parque-patricios','destapaciones-villa-lugano','destapaciones-barracas','destapaciones-coghlan','destapaciones-nunez','destapaciones-mataderos','destapaciones-velez-sarsfield','destapaciones-villa-ortuzar','destapaciones-parque-avellaneda','destapaciones-villa-del-parque','destapaciones-villa-pueyrredon','destapaciones-las-canitas','destapaciones-colegiales','destapaciones-villa-riachuelo','destapaciones-villa-luro','destapaciones-villa-urquiza','destapaciones-villa-crespo','destapaciones-villa-martelli']
  }
};

const tiposZona = [
  'zona predominantemente residencial con edificios de mediana altura',
  'barrio residencial con mezcla de casas bajas y edificios',
  'zona urbana densa con alta concentración de viviendas multifamiliares',
  'barrio tradicional con casonas antiguas y construcciones de varias décadas',
  'zona residencial consolidada con infraestructura sanitaria de larga data',
  'barrio con perfil residencial y comercios sobre las avenidas principales',
  'zona de calles arboladas con propiedades antiguas y modernas',
  'barrio urbano con edificios, PH y viviendas unifamiliares',
  'zona gastronómica y comercial con alta rotación de locales',
  'barrio céntrico con fuerte actividad comercial y edificios de oficinas',
  'zona mixta con locales gastronómicos, departamentos y casas',
  'zona residencial suburbana con casas amplias y jardines',
  'barrio de casas con terrenos grandes y abundante vegetación',
  'zona residencial con countries, barrios cerrados y chalets',
  'localidad con mix de viviendas familiares y desarrollos nuevos',
  'zona en crecimiento con loteos nuevos y propiedades tradicionales',
  'barrio residencial con calles tranquilas y propiedades de mediano porte',
  'zona con casas tradicionales de barrio y algunos edificios recientes',
  'localidad con perfil industrial y residencial combinado',
  'zona suburbana con napas altas y terrenos húmedos'
];

const problemasCaba = [
  ['sarro acumulado en columnas de bajada','rejillas de cocina bloqueadas por grasa','cañerías de plomo deterioradas'],
  ['obstrucciones en columnas principales de edificios','piletas de lavadero tapadas','rejillas intermedias con sedimento'],
  ['desbordes en baños por papeles y toallitas','bajadas pluviales con hojas y mugre','caños de cocina con grasa solidificada'],
  ['cloacas tapadas por raíces que ingresan en juntas','cañerías antiguas con pérdida de pendiente','inodoros con retorno de agua'],
  ['tapones de jabón y pelo en duchas y bañeras','cámaras de inspección con sedimento compactado','caños de PVC fisurados por asentamiento'],
  ['grasa industrial en bajadas de cocina comercial','desagües colapsados en subsuelos','columnas cloacales con incrustaciones de cal'],
  ['pluviales obstruidos por hojas de árboles añosos','cañerías con contrapendiente por movimiento de suelo','rejillas de patio con barro compactado']
];

const problemasNorte = [
  ['raíces de árboles grandes que perforan cañerías','pluviales tapados por hojas y tierra','cámaras sépticas que necesitan limpieza periódica'],
  ['desagües de pileta bloqueados por sedimento del jardín','cloacas obstruidas por raíces invasivas','bajadas de terraza con acumulación de musgo'],
  ['pozos ciegos saturados que requieren desagote','cañerías de jardín aplastadas por raíces','pluviales de canaleta bloqueados con barro'],
  ['caños de PVC deformados por movimiento de napas','cloacas con pérdida de nivel por terreno arcilloso','desbordes en temporada de lluvias intensas']
];

const problemasOesteSur = [
  ['cloacas antiguas con juntas deterioradas','pozos ciegos saturados que requieren intervención','cañerías de barro cocido fisuradas por la edad'],
  ['obstrucciones por acumulación de grasa doméstica','cámaras sépticas colapsadas','pluviales de vereda tapados con escombros'],
  ['caños con pérdida de pendiente por asentamiento del terreno','rejillas de patio obstruidas por barro','desagües de lavadero bloqueados por pelusa y jabón'],
  ['cloacas compartidas entre vecinos que colapsan','bajadas pluviales con sedimento y raíces','cañerías de cocina con grasa endurecida']
];

const propiedadesCaba = [
  ['departamentos en edificios de más de 30 años','locales comerciales sobre avenidas','PH y casas tipo chorizo'],
  ['consorcios de 4 a 10 pisos','oficinas y estudios profesionales','viviendas unifamiliares'],
  ['edificios con columnas cloacales compartidas','comercios gastronómicos','departamentos en planta baja con patio'],
  ['torres residenciales modernas','casas antiguas con instalaciones originales','locales con cocina industrial']
];

const propiedadesNorte = [
  ['casas con jardín amplio y pileta','chalets en barrios residenciales','complejos de duplex'],
  ['viviendas unifamiliares con terreno grande','countries y barrios cerrados','casas quintas con parque'],
  ['residencias con instalaciones de más de 20 años','propiedades con cámara séptica','casas con cochera y patio trasero'],
  ['chalets con sótano','viviendas en loteos nuevos','casas con expansión de obra reciente']
];

const propiedadesOesteSur = [
  ['casas de barrio con patio y fondo','edificios de pocos pisos','comercios de cercanía'],
  ['viviendas familiares con instalaciones antiguas','fábricas y talleres','propiedades horizontales'],
  ['casas con pozo ciego o cámara séptica','dúplex y tríplex','negocios sobre avenida principal'],
  ['consorcios pequeños','casas con ampliaciones sucesivas','locales gastronómicos de barrio']
];

let idx = 0;
const data = {};
const barriosTs = fs.readFileSync('src/data/barrios.ts','utf8');
const re = /slug: '([^']+)', name: '([^']+)', zoneSlug: '([^']+)'/g;
let m;
while((m = re.exec(barriosTs)) !== null) {
  const slug = m[1];
  const name = m[2];
  const zone = m[3];
  
  let tipo, problemas, propiedades;
  
  if (zone === 'caba') {
    if (zones.caba.comercial.includes(slug)) {
      tipo = tiposZona[8 + (idx % 3)];
      problemas = problemasCaba[5 + (idx % 2)];
      propiedades = propiedadesCaba[3];
    } else if (zones.caba.mixto.includes(slug)) {
      tipo = tiposZona[5 + (idx % 3)];
      problemas = problemasCaba[idx % 5];
      propiedades = propiedadesCaba[idx % 3];
    } else {
      tipo = tiposZona[idx % 8];
      problemas = problemasCaba[idx % problemasCaba.length];
      propiedades = propiedadesCaba[idx % propiedadesCaba.length];
    }
  } else if (zone === 'zona-norte') {
    tipo = tiposZona[11 + (idx % 5)];
    problemas = problemasNorte[idx % problemasNorte.length];
    propiedades = propiedadesNorte[idx % propiedadesNorte.length];
  } else {
    tipo = tiposZona[15 + (idx % 5)];
    problemas = problemasOesteSur[idx % problemasOesteSur.length];
    propiedades = propiedadesOesteSur[idx % propiedadesOesteSur.length];
  }
  
  data[slug] = { nombre: name, tipo, problemas, propiedades };
  idx++;
}

// Write barriosSeo.ts
let out = `export interface BarrioSeoData {\n  nombre: string;\n  tipo: string;\n  problemas: string[];\n  propiedades: string[];\n}\n\nexport const barriosSeo: Record<string, BarrioSeoData> = {\n`;

for (const [slug, d] of Object.entries(data)) {
  out += `  '${slug}': {\n`;
  out += `    nombre: '${d.nombre}',\n`;
  out += `    tipo: '${d.tipo}',\n`;
  out += `    problemas: [${d.problemas.map(p => `'${p}'`).join(', ')}],\n`;
  out += `    propiedades: [${d.propiedades.map(p => `'${p}'`).join(', ')}],\n`;
  out += `  },\n`;
}
out += `};\n`;

fs.writeFileSync('src/data/barriosSeo.ts', out, 'utf8');
console.log(`Generated barriosSeo.ts with ${Object.keys(data).length} entries`);
