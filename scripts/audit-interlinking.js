const fs = require('fs');
const path = require('path');

const blogContent = fs.readFileSync(path.join(__dirname, '../src/data/blog.ts'), 'utf-8');
const pageContent = fs.readFileSync(path.join(__dirname, '../src/app/[slug]/page.tsx'), 'utf-8');

// Extraer slugs de los artículos
const slugRegex = /slug:\s*'([^']+)'/g;
let match;
const slugs = [];
while ((match = slugRegex.exec(blogContent)) !== null) {
  slugs.push(match[1]);
}

console.log(`\n🔍 Auditoría SEO iniciada. Analizando ${slugs.length} artículos del blog...\n`);

let errors = 0;

slugs.forEach(slug => {
    // Buscar el bloque de contenido del post
    const postStart = blogContent.indexOf(`slug: '${slug}'`);
    const contentStart = blogContent.indexOf('content: `', postStart);
    let contentEnd = blogContent.indexOf('`', contentStart + 11);
    
    // Evitar cortes prematuros si hay backticks internos
    while (contentEnd !== -1 && blogContent.charAt(contentEnd - 1) === '\\') {
        contentEnd = blogContent.indexOf('`', contentEnd + 1);
    }
    
    const content = blogContent.substring(contentStart, contentEnd);

    // Contar enlaces explícitos a rutas internas (que empiezan con /)
    const links = content.match(/href="\/[^"]+"/g);
    // Filtrar para asegurarse de no contar el CTA si no es a / (el CTA es a wa.me)
    const validInternalLinks = links ? links.filter(l => !l.includes('wa.me')) : [];
    const linksCount = validInternalLinks.length;

    if (linksCount < 2) {
        console.error(`❌ ERROR [Outbound]: Artículo '${slug}' tiene solo ${linksCount} enlaces internos (mínimo 2).`);
        errors++;
    } else {
        console.log(`✅ [Outbound] Artículo '${slug}' tiene ${linksCount} enlaces internos.`);
    }

    // Verificar si es huérfano contextualmente (revisando si el slug está en page.tsx de servicios)
    if (!pageContent.includes(`${slug}`)) {
         console.error(`❌ ERROR [Inbound]: Artículo '${slug}' es HUÉRFANO contextualmente. Falta keyword en renderTextWithLinks.`);
         errors++;
    } else {
         console.log(`✅ [Inbound] Artículo '${slug}' está enlazado dinámicamente desde servicios.`);
    }
    console.log('---');
});

console.log('\n========================================');
if (errors > 0) {
    console.error(`⛔ Auditoría fallida: Se encontraron ${errors} problemas de enlazado.`);
    process.exit(1);
} else {
    console.log(`🎉 ¡Auditoría exitosa! El interlinking es 100% robusto.`);
    process.exit(0);
}
