const fs = require("fs");
const path = require("path");
// console.log(__dirname);

async function readdir(routDir) {
  routDir = routDir || path.resolve(__dirname);
  const files = await fs.readdirSync(routDir);
  recebeArquivos(files, routDir);
}

async function recebeArquivos(files, routDir) {
  for (const i of files) {
    const leerTodosOsArqivos = path.resolve(routDir, i);
    const stats = await fs.statSync(leerTodosOsArqivos);
    if (stats.isDirectory()) {
      readdir(leerTodosOsArqivos);
      continue;
    }
    
    console.log(i, + "-----------------------");
  }
}

readdir("c:/Users/perei/OneDrive/Área de Trabalho/PROGRAMAÇÃO/CURSO_JS/");
//
