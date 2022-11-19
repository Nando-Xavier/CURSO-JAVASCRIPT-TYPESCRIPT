const filhos = document.querySelectorAll("p");
const fonte = document.querySelector(".container")
const cor = getComputedStyle(document.body).backgroundColor
const corFonte = getComputedStyle(fonte).backgroundColor
for (const p of filhos) {
    p.style.backgroundColor = cor
    p.style.color = corFonte
}

const paragrafos = document.querySelector('.container')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor
for (const p of ps) {
    p.style.backgroundColor = backgroundColorBody
}