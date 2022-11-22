import {nome, sobrenome, idade} from "./modulo1"

const body = document.querySelector(".resultado")

const div = document.createElement("div")
div.innerText = nome + sobrenome + idade
body.appendChild(div)

console.log(nome);

