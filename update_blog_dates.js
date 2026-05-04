const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/blog.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Add publishedAt and updatedAt to Articulo interface
content = content.replace(
  '  content: string;\n}',
  '  content: string;\n  publishedAt?: string;\n  updatedAt?: string;\n}'
);

const updatedSlugs = [
  'por-que-cocina-huele-a-cloaca',
  'grasa-canerias-edificios-agua-hirviendo',
  '5-senales-columna-edificio-tapada',
  'resorte-vs-hidrojet-cual-es-mejor',
  'inodoro-rebalsa-que-hacer',
  'rejilla-patio-tapada-lluvia',
  'problema-departamento-o-columna',
  'ducha-desagota-lento',
  'como-destapar-inodoro',
  'como-destapar-rejillas',
  'como-destapar-pileta-cocina'
];

let baseDate = new Date('2024-01-10T10:00:00Z');

// We find each slug: '...'
const slugRegex = /slug:\s*'([^']+)'/g;
let match;

let modifications = [];
while ((match = slugRegex.exec(content)) !== null) {
  const slug = match[1];
  const isUpdated = updatedSlugs.includes(slug);
  
  // Format dates
  const pubDate = baseDate.toISOString().split('T')[0];
  const updateDate = isUpdated ? '2026-05-04' : pubDate;
  
  modifications.push({
    slug,
    index: match.index + match[0].length, // insertion point after slug: '...'
    insertString: `,\n      publishedAt: '${pubDate}',\n      updatedAt: '${updateDate}'`
  });
  
  // advance baseDate by ~1 month
  baseDate.setMonth(baseDate.getMonth() + 1);
}

// apply modifications backwards so indices don't change
modifications.reverse().forEach(mod => {
  content = content.slice(0, mod.index) + mod.insertString + content.slice(mod.index);
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Done!');
