
const fs = require('fs');

const barriosContent = fs.readFileSync('c:/Users/Manus/Desktop/nueva/openagua/src/data/barrios.ts', 'utf8');
const barriosSeoContent = fs.readFileSync('c:/Users/Manus/Desktop/nueva/openagua/src/data/barriosSeo.ts', 'utf8');

// Extract slugs from barrios.ts
const barriosSlugs = [];
const barrioRegex = /slug:\s*'([^']+)'/g;
let match;
while ((match = barrioRegex.exec(barriosContent)) !== null) {
    barriosSlugs.push(match[1]);
}

// Extract slugs from barriosSeo.ts
const barriosSeoSlugs = [];
const seoRegex = /'([^']+)':\s*\{/g;
while ((match = seoRegex.exec(barriosSeoContent)) !== null) {
    if (match[1].startsWith('destapaciones-')) {
        barriosSeoSlugs.push(match[1]);
    }
}

console.log(`Total barrios in barrios.ts: ${barriosSlugs.length}`);
console.log(`Total entries in barriosSeo.ts: ${barriosSeoSlugs.length}`);

const missingInSeo = barriosSlugs.filter(slug => !barriosSeoSlugs.includes(slug));
console.log(`Missing in barriosSeo.ts: ${JSON.stringify(missingInSeo)}`);

const missingInBarrios = barriosSeoSlugs.filter(slug => !barriosSlugs.includes(slug));
console.log(`Extra in barriosSeo.ts: ${JSON.stringify(missingInBarrios)}`);
