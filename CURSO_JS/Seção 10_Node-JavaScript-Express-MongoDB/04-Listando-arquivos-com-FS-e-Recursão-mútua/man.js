const fs = require("fs").promises;
const path = require("path");
// console.log(__dirname);

async function readdir(routDir) {
  routDir = routDir || path.resolve(__dirname);
  const files = await fs.readdir(routDir);
  recebeArquivos(files, routDir);
}

async function recebeArquivos(files, routDir) {
  for (const i of files) {
    const leerTodosOsArqivos = path.resolve(routDir, i);
    const stats = await fs.stat(leerTodosOsArqivos);
    if (/\.git/g.test(leerTodosOsArqivos)) continue;
    if(/node_modules/.test(leerTodosOsArqivos)) continue;
    if (stats.isDirectory()) {
      readdir(leerTodosOsArqivos);
      continue;
    }
    
    if (!/\.js$/g.test(leerTodosOsArqivos))continue
    console.log(i);
  }
}

readdir("c:/Users/perei/OneDrive/Área de Trabalho/PROGRAMAÇÃO/CURSO_JS/");
//
