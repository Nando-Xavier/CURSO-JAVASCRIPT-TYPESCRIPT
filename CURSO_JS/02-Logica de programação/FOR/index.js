const stilosComputados = getComputedStyle(document.body);
const estilosBody = stilosComputados.backgroundColor;
const conteiner = document.querySelector(".conteiner");
const body = document.querySelector("body");
const p = conteiner.querySelectorAll("p");
const cor = getComputedStyle(conteiner);
const estilosConteiner = cor.backgroundColor;
for (const i of p) {
  i.style.backgroundColor = estilosBody;
  i.style.color = "#fff";
}

