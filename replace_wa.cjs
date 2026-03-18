const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (!filePath.includes('node_modules')) filelist = walkSync(filePath, filelist);
    }
    else {
      if(filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
         filelist.push(filePath);
      }
    }
  });
  return filelist;
};

const files = walkSync('./src');
const searchString = 'https://wa.me/5491151797649';
const replaceString = 'https://wa.me/5491151797649?text=Hola%20Openagua%2C%20quiero%20consultar%20por%20un%20presupuesto';

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes(searchString)) {
    content = content.split(searchString).join(replaceString);
    fs.writeFileSync(file, content);
    console.log(`Reemplazado WhatsApp link en: ${file}`);
  }
});
