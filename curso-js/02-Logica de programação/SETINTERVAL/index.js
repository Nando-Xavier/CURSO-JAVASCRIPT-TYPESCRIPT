function cronometro(tempo) {
  const segundos = new Date(tempo * 1000);
  return segundos.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pauzar = document.querySelector(".pauzar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;
function insere() {
  
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = cronometro(segundos);
  }, 1000);
}

iniciar.addEventListener("click", () => {
  insere();
});
pauzar.addEventListener("click", () => {
  clearInterval(timer);
});
zerar.addEventListener("click", () => {
  clearInterval(timer);
  relogio.innerHTML = '00:00:00'
  segundos = 0;
});

