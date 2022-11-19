const pessoa = {
  nome: "Fernando",
  sobrenome: "Pereia",
  idade: 31,
  endereco: {
    rua: "Juvencio Alzier",
    num: {
        num1: 100,
        num2: 200
    },
  },
};

//PEGANDO TODOS OS ATRIBUTOS DO OBJETO COLOCANDO EM VARIÁVES DISTINTAS
/*const {nome, sobrenome, idade, endereco} = pessoa

console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(endereco);*/

//PEGANDO APENAS UM VALOR EXPECIFICO E COLOCANDO EM UMA VARIÁVEL

 /*const {idade} = pessoa
 console.log(idade); --> 31*/

 //PEGANDO DADOS DE OBJETO QUE ESTÃO DENTRO DE OUTRO OBJETO

 /*const {endereco: {rua, num}} = pessoa
 console.log(rua, num);*/
// console.log(pessoa);

// const {endereco:{rua, num, num:{num1, num2}}} = pessoa

// console.log();
// console.log();
// console.log(rua);
// console.log();
// console.log(num);
// console.log();
// console.log();
// console.log(num1);
// console.log(num2);

//DÁ PRA PEGAR O RESTO DO OBJETO E SALVAR EM OUTRA VARIÁVEL USANDO O OPERADOR RESTE(...)
//DÁ PARA MUDAR O NOME DA VARIAVEL DIRETO NA ATRIBUIÇÃO (nome: n), sendo assim passando a camar a variavek de n e não mais de nome

