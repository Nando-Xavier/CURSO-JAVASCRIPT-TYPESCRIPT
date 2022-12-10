import geraSenha from "./geraSenha";

const senha = document.querySelector(".senha");
const qtd = document.querySelector(".qtd");
const maiuscula = document.querySelector(".maiusculas");
const minuscula = document.querySelector(".minusculas");
const numero = document.querySelector(".numeros");
const simbolo = document.querySelector(".simbolos");
const gerar_senha = document.querySelector(".gerar_senha");

export default () => {
  gerar_senha.addEventListener("click", () => {
    const min = +qtd.getAttribute("min");
    if (+qtd.value < min) {
      senha.innerText = `A senha precisa ter mais de ${min} caracteres.`;
      return;
    }
    if (
      !maiuscula.checked &&
      !minuscula.checked &&
      !numero.checked &&
      !simbolo.checke
    ) {
      senha.innerText = `Escolha os caracteres.`;
      return
    }
    senha.innerText = geraSenha(
      qtd.value,
      maiuscula.checked,
      minuscula.checked,
      numero.checked,
      simbolo.checked
    );
  });
};
