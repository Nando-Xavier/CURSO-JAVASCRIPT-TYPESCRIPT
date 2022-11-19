const numero = +prompt("Digite seu número");
const numeroTitulo = document.getElementById("numero-titulo");
const divTexto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
divTexto.innerHTML += `Raiz quadrada: <strong>${Math.sqrt(numero)}</strong><br/>`;
divTexto.innerHTML += `${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong> <br/>`;
divTexto.innerHTML += `È NaN: <strong>${Number.isNaN(numero)}</strong> <br/>`;
divTexto.innerHTML += `Arredondando para baixo: <strong>${Math.floor(numero)}</strong> <br/>`;
divTexto.innerHTML += `Arredondando para cima: <strong>${Math.ceil(numero)}</strong> <br/>`;
divTexto.innerHTML += `Com dua casas decimais: <strong>${numero.toFixed(2)}</strong> <br/>`;
