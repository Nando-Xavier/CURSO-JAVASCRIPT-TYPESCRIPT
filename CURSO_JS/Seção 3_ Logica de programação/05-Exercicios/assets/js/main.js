const form = document.querySelector("#form");
const imc = document.querySelector("#resultado")

function resultado() {
  form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Parando o envio do formulario
    let resultado = calcula()
    resultado = resultado.toFixed(2)
    insereResultado(resultado)

  });
}

resultado();

function calcula() {
  const peso = document.querySelector("#peso").value; // Selecionando o valor do Peso
  const altura = document.querySelector("#altura").value; // Selecionando o valor a Altura
  const resultado = peso / altura ** 2;
  return resultado;
}

function insereResultado(resultado) {
    

    if (resultado < 18.5) {
        imc.innerHTML = `IMC = <strong>${resultado}</strong>. Portanto Abaixo do peso.`
        imc.classList = "low"
    }
    else if (resultado >= 18.5 && resultado <= 24.9) {
        imc.innerHTML = `IMC = <strong>${resultado}</strong>. Peso Normal.`
        imc.classList = "god"
    }
    else if (resultado >= 25 && resultado <= 29.9) {
        imc.innerHTML = `IMC = <strong>${resultado}</strong>. SobrePeso.`
        imc.classList = "med"
    }
    else if (resultado >= 30 && resultado <= 34.9) {
        imc.innerHTML = `IMC = <strong>${resultado}</strong>. Obesidade grau1.`
        imc.classList = "low"
    }
    else if (resultado >= 35 && resultado <= 39.9) {
        imc.innerHTML = `IMC = <strong>${resultado}</strong>. Obesidade grau2.`
        imc.classList = "low"
    }
    else if (resultado >= 40) {
        imc.innerHTML = `IMC = <strong>${resultado}</strong>. Obesidade grau3.`
        imc.classList = "low"
    }
}



