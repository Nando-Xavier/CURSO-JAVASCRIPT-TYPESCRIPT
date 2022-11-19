const pessoa = {
  nome: "Fernando",
  sobrenome: "Pereia",
  idade: 31,
};

const nome = ["Railma", "Eliza", "Fernando", "Francisca"];

//FOR CLASSICO --> SERVE PARA ARRAIS
for (let i = 0; i < nome.length; i++) {
  console.log(i);
}

console.log('#################################');

// FOR IN --> SERVE PARA ARRAIS E PARA OBJETOS
for (const key in pessoa) {
  console.log(key, pessoa[key]);
}

console.log('#################################');


//FOR OF --> SERVE PARA ARRAY
for (const i of nome) {
  console.log(i);
}

console.log('#################################');


// FOR EACHE --> SERVE SOMENTE PARA ARRAY
nome.forEach((valor, indice) => {
  console.log(valor, indice);
});

console.log('#################################');


// nome.forEach((valor, elemento) => {
//     console.log(valor, elemento);
//   });
