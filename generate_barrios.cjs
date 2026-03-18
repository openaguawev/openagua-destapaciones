const fs = require('fs');

const caba = ["Capital Federal", "Boedo", "Floresta", "Montserrat", "Parque Chacabuco", "Saavedra", "Villa Devoto", "Villa Real", "Almagro", "Caballito", "La Boca", "Monte Castro", "Parque Chas", "San Cristobal", "Villa General Mitre", "Villa Santa Rita", "Constitucion", "Versalles", "Agronomia", "Chacarita", "La Paternal", "Parque Patricios", "San Nicolas", "Villa Lugano", "Barracas", "Coghlan", "Liniers", "Nuñez", "Puerto Madero", "San Telmo", "Villa Luro", "Villa Urquiza", "Barrio Norte", "Villa Crespo", "Mataderos", "Palermo", "Recoleta", "Velez Sarsfield", "Villa Ortuzar", "Once", "Belgrano", "Flores", "Parque Avellaneda", "Retiro", "Villa del Parque", "Villa Pueyrredon", "Las Cañitas", "Colegiales", "Balvanera", "Villa Riachuelo"];

const oeste = ["Caseros", "Hurlingham", "Martin Coronado", "Ramos Mejia", "Villa Luzuriaga", "Aldo Bonzi", "Lomas del Mirador", "Tapiales", "Castelar", "Moreno", "Villa Sarmiento", "Villa Bosch", "Ituzaingo", "Moron", "Saenz Peña", "Villa Udaondo", "Villa Madero", "Ciudadela", "Jose Ingenieros", "El Palomar", "Tres de Febrero", "Ciudad Jardin", "La Tablada", "Paso del Rey", "Villa Tesei", "La Matanza", "Pablo Podesta", "Santos Lugares", "Libertad", "Pontevedra", "William Morris", "Haedo", "Parque Leloir", "San Justo", "San Antonio de Padua", "San Martin"];

const norte = ["Escobar", "San Isidro", "Bella Vista", "General Pacheco", "La Lucila", "Martinez", "Rincon de Milberg", "Villa Ballester", "Benavidez", "Loma Hermosa", "Muñiz", "San Andres", "Villa Lynch", "General San Martin", "Billinghurst", "Nordelta", "Grand Bourg", "Munro", "Talar de Pacheco", "Villa Martelli", "Malvinas Argentinas", "Vicente Lopez", "Boulogne", "Florida", "Ingeniero Maschwitz", "Los Polvorines", "Tortuguitas", "Villa Maipu", "Acassuso", "Campo de Mayo", "Garin", "Olivos", "Victoria", "San Fernando", "Beccar", "Carapachay", "Jose Leon Suarez", "Pablo Nogues", "Villa Adelina", "San Miguel", "Don Torcuato"];

const sur = ["Adrogué", "Quilmes", "Avellaneda", "Burzaco", "Ezeiza", "Lanus", "Wilde", "Banfield", "Lomas de Zamora", "Longchamps", "Temperley"];

function mkSlug(name) {
  let s = name.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  return "destapaciones-" + s;
}

function getRandomNearby(arr, excludeName, count=3) {
  const filtered = arr.filter(x => x !== excludeName);
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

let code = `export interface Barrio {
  slug: string;
  name: string;
  zoneSlug: string;
  zoneName: string;
  nearby: string[];
}

export const barrios: Barrio[] = [
`;

function addZone(lista, zoneSlug, zoneName) {
  code += `  // ${zoneName.toUpperCase()}\n`;
  lista.forEach(name => {
    const slug = mkSlug(name);
    const nearby = getRandomNearby(lista, name);
    code += `  { slug: '${slug}', name: '${name.replace(/'/g, "\\'")}', zoneSlug: '${zoneSlug}', zoneName: '${zoneName}', nearby: ${JSON.stringify(nearby)} },\n`;
  });
}

addZone(caba, 'caba', 'CABA');
addZone(oeste, 'zona-oeste', 'Zona Oeste');
addZone(norte, 'zona-norte', 'Zona Norte');
addZone(sur, 'zona-sur', 'Zona Sur');

code += `];\n`;

fs.writeFileSync('src/data/barrios.ts', code);
console.log("Base de datos de barrios generada exitosamente.");
