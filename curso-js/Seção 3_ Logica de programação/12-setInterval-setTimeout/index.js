/* 
    setInterval é uma função que executa uma determinda função dentro de um intervalo de tempo pre determinado.
*/

function mostraHora() {
  const data = new Date();
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

setInterval(() => {
  console.log(mostraHora());
}, 1000);

// setTimeout(() => {
//   clearInterval(time);
// }, 5000);

/*
    setTimeout é uma função que exxecuta uma determinada função depois de um determinado tempo preprogramado.
*/
// setTimeout(() => {
//   console.log("Eiza é a princesa do Papai. Papai te ama muito.");
// }, 10000);

/*
    clearInterval serve para interromper um determinado intervalo
*/
