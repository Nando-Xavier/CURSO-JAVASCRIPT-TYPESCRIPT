function insereData(data) {
  const dom = document.querySelector(".conteiner");
  const p = criaP();
  p.innerHTML = data;
  dom.appendChild(p);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function buscaMes(data) {
  let m;
  switch (data) {
    case 0:
      m = "Janeiro";
      return a;
    case 1:
      m = "Fevereiro";
      return m;
    case 2:
      m = "Março";
      return m;
    case 3:
      m = "Abril";
      return m;
    case 4:
      m = "Mail";
      return m;
    case 5:
      m = "Junho";
      return m;
    case 6:
      m = "Julho";
      return m;
    case 7:
      m = "Agosto";
      return m;
    case 8:
      m = "Setembro";
      return m;
    case 9:
      m = "Outubro";
      return m;
    case 10:
      m = "Novenbro";
      return m;
    case 11:
      m = "Dezembro";
      return m;

    default:
      m = "Data inválida.";
      return m;
      break;
  }
}

function buscaDiaSemana(d) {
  let m;
  switch (d) {
    case 0:
      m = "Domingo";
      return a;
    case 1:
      m = "Segunda-Feira";
      return m;
    case 2:
      m = "Terça-Feira";
      return m;
    case 3:
      m = "Quarta-Feira";
      return m;
    case 4:
      m = "Quinta-Feira";
      return m;
    case 5:
      m = "Sexta-Feira";
      return m;
    case 6:
      m = "Sábado";
      return m;
    default:
      m = "Data inválida.";
      return m;
  }
}
const data = new Date();
const dia = data.getDate();
const diaSemana = data.getDay();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();
const mesString = buscaMes(mes);
const diaString = buscaDiaSemana(diaSemana);

const msg = `${diaString}, ${dia} de ${mesString} de ${ano}-${hora}:${minuto}`;
insereData(msg);
