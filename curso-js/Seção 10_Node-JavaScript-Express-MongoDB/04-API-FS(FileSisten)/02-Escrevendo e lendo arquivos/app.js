const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'texto.json')
const escrever = require('./modulos/escrever')
const ler = require("./modulos/ler")

const nome = [
  {nome: "fernando"},
  {nome: "Railma"},
  {nome: "Eliza"},
]
const json = JSON.stringify(nome, "", 2)
escrever(caminhoArquivo, json)


async function renderiza(caminho) {
  let arquivo = await ler(caminho)
  arquivo = JSON.parse(arquivo)
  arquivo.forEach(val => console.log(val))
}
renderiza(caminhoArquivo)