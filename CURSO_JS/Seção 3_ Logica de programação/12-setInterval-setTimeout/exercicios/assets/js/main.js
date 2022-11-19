let cronometro = 0;
function criaSegundo(segundos) {
  const tempo = new Date(segundos * 1000);
  return tempo.toLocaleTimeString("pr-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}


const iniciar = document.querySelector("#INICIAR");
const zerar = document.querySelector('#ZERAR')

const marcador = document.querySelector("#marcador");
iniciar.addEventListener("click", () => {
  setInterval(() => {
    marcador.innerHTML = criaSegundo(cronometro);
    cronometro++;
  }, 1000);
});

zerar.addEventListener('click', () => {
  clearInterval(criaSegundo())
  marcador.innerHTML = '00:00:00'
})