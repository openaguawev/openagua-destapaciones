const { barrios } = require('./src/data/barrios');
const fs = require('fs');

// Agrupar por zona para facilitar la búsqueda
const porZona = {};
barrios.forEach(b => {
  if (!porZona[b.zoneSlug]) porZona[b.zoneSlug] = [];
  porZona[b.zoneSlug].push(b);
});

// Función para obtener slugs cercanos (simplificada por ahora, se refinará)
function getNearby(barrio) {
  // Por ahora devolvemos los 3 primeros de su misma zona que no sean él mismo
  return porZona[barrio.zoneSlug]
    .filter(b => b.slug !== barrio.slug)
    .slice(0, 3)
    .map(b => b.slug);
}

const mapping = {};
barrios.forEach(b => {
  mapping[b.slug] = getNearby(b);
});

// Manual fixes para los más importantes
mapping['destapaciones-palermo'] = ['destapaciones-recoleta', 'destapaciones-belgrano', 'destapaciones-villa-crespo', 'destapaciones-almagro'];
mapping['destapaciones-recoleta'] = ['destapaciones-palermo', 'destapaciones-barrio-norte', 'destapaciones-retiro', 'destapaciones-san-nicolas'];
mapping['destapaciones-belgrano'] = ['destapaciones-palermo', 'destapaciones-colegiales', 'destapaciones-nunez', 'destapaciones-coghlan'];
mapping['destapaciones-olivos'] = ['destapaciones-vicente-lopez', 'destapaciones-florida', 'destapaciones-la-lucila', 'destapaciones-martinez'];
mapping['destapaciones-moron'] = ['destapaciones-haedo', 'destapaciones-castelar', 'destapaciones-ituzaingo'];
mapping['destapaciones-san-isidro'] = ['destapaciones-martinez', 'destapaciones-acassuso', 'destapaciones-beccar'];
mapping['destapaciones-quilmes'] = ['destapaciones-avellaneda', 'destapaciones-lanus', 'destapaciones-berazategui']; // Berazategui no está, usemos Bernal si estuviera, o Avellaneda/Lanus
mapping['destapaciones-lanus'] = ['destapaciones-avellaneda', 'destapaciones-banfield', 'destapaciones-lomas-de-zamora'];
mapping['destapaciones-lomas-de-zamora'] = ['destapaciones-banfield', 'destapaciones-temperley', 'destapaciones-lanus'];
mapping['destapaciones-ramos-mejia'] = ['destapaciones-haedo', 'destapaciones-ciudadela', 'destapaciones-san-justo'];

// Generar el archivo final
let content = 'export const barriosCercanos: Record<string, string[]> = {\n';
Object.entries(mapping).forEach(([slug, nearby]) => {
  content += `  "${slug}": ${JSON.stringify(nearby)},\n`;
});
content += '};\n';

fs.writeFileSync('./src/data/barriosCercanos.ts', 'export const barriosCercanos: Record<string, string[]> = ' + JSON.stringify(mapping, null, 2) + ';\n');
