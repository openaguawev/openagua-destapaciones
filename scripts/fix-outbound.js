const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/data/blog.ts');
let content = fs.readFileSync(file, 'utf-8');

const regex = /slug:\s*'([^']+)'/g;
let match;
let slugs = [];
while ((match = regex.exec(content)) !== null) {
  slugs.push(match[1]);
}

slugs.forEach(slug => {
  const postStart = content.indexOf(`slug: '${slug}'`);
  const contentStart = content.indexOf('content: `', postStart);
  let contentEnd = content.indexOf('`', contentStart + 11);
  while (contentEnd !== -1 && content.charAt(contentEnd - 1) === '\\') {
    contentEnd = content.indexOf('`', contentEnd + 1);
  }
  
  const postContent = content.substring(contentStart, contentEnd);
  const links = postContent.match(/href="\/[^"]+"/g);
  const valid = links ? links.filter(l => !l.includes('wa.me')) : [];
  
  if (valid.length < 2) {
    const addition = `\n        <p style="margin-top:2rem;">Para más seguridad, siempre podés solicitar una <a href="/destapaciones-cloacas" style="color:#16A34A;font-weight:bold;text-decoration:underline;">destapación de cloacas</a> o <a href="/destapaciones-canerias" style="color:#16A34A;font-weight:bold;text-decoration:underline;">destapación de cañerías</a> profesional con nuestros equipos.</p>\n      `;
    content = content.substring(0, contentEnd) + addition + content.substring(contentEnd);
  }
});

fs.writeFileSync(file, content, 'utf-8');
console.log('Outbound links fixed in blog.ts');
