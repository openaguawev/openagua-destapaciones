const { barrios } = require('./src/data/barrios');
const { barriosCercanos } = require('./src/data/barriosCercanos');

const barrioSlugs = new Set(barrios.map(b => b.slug));
const missingSlugs = [];

for (const [parent, neighbors] of Object.entries(barriosCercanos)) {
    if (!barrioSlugs.has(parent)) {
        missingSlugs.push(`Parent key missing: ${parent}`);
    }
    neighbors.forEach(n => {
        if (!barrioSlugs.has(n)) {
            missingSlugs.push(`Neighbor slug missing in barrios.ts: ${n} (found in ${parent})`);
        }
    });
}

console.log('--- AUDIT RESULTS ---');
if (missingSlugs.length === 0) {
    console.log('No missing slugs found. Data is consistent.');
} else {
    console.log('Found issues:');
    missingSlugs.forEach(s => console.log(s));
}
