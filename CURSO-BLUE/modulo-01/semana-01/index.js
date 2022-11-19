
const prompt = require('prompt-sync')();
const nome = prompt('Digite seu nome completo: ');
const nomeReplace = nome.replace(/ /g, '');

console.log(nomeReplace);