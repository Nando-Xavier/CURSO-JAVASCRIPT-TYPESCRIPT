const string = "O rato roeo a ropa do rei de roma"
//                           METODOS DE STRINGS
//concat()   Serve para concatenar strings, ex: 
// console.log(string.concat(" Pereira xavier"));

//indexOf()   Serve para pesquisar em qual indice começa uma determinada letra ou palavra ex:
// console.log(string.indexOf("a"))

//lastIndexOf()   Metodo parecido com o indexOf mas com a diferença que começa de raz pra frente

// replace()   O método replace () percorre toda a string em busca da sequência de caracteres a ser substituída. Caso essa sequência de caracteres não seja encontrada, nenhuma substituição é realizada; caso seja encontrada, uma nova string, com a substituição feita, é devolvida pelo método. Ex: 
// console.log(string.replace('r', '#'));   /* substitui apenas a primeira letra "r" encontrada. */
// console.log(string.replace(/r/g, '#'));   /*substitui todas as letra "r" encontradas. */

// .length   Para saber o tamanho de uma string. Ex/: 
// console.log(string.length);

// slice()   Serve para extrair uma parte da string dada uma posição inicial e final: Ex:
// console.log(string.slice(0, -1));

// split()   Serve para dividir uma string de acordo com o parametro e/ou com um segundo parametro de limite de quantidades e retornando um array com as partes divididas. Ex:
// console.log(string.split(" ", 3));

// toUpperCase()   Serve para tranformar todas as letra de uma string em maiusculas ex:
// console.log(string.toUpperCase());

//toLowerCase()  Serve para transformar tadas as letras de uma string em minuculas ex:
// console.log(string.toLowerCase());

// trim()  O método remove o espaço branco de ambos os lados de uma string:
// console.log(string);
// console.log(string.trim());

//.endsWith("valor") função qure busca qual valor estar no final de uma string.

let str = "Please locate where 'locate' occurs!";
str.search("locate");
console.log(str.search("locate"));
// Fernando Pereira Xavier

// const nome = prompt('Digite seu nome')
// document.body.innerHTML = `O seu nome é <strong>${nome}</strong><br/>`
// document.body.innerHTML += `O seu nome tem <strong>${nome.length}</strong> letras<br/>`
// document.body.innerHTML +=`A segunda letra do seu nome é: <strong>${nome[1]}</strong><br/>`
// document.body.innerHTML +=`Qual o primeiro indice da letra a do seu nome? <strong>${nome.indexOf("a")}</strong><br/>`
// document.body.innerHTML +=`Qual o ultimo indice da letra a o seu nome? <strong>${nome.lastIndexOf("a")}</strong><br/>`
// document.body.innerHTML +=`As ultimas 3 letras do seu nome são? <strong>${nome.slice(-3)}</strong><br/>`
// document.body.innerHTML +=`As palavras do seu nome são? <strong>${nome.split(" ")}</strong><br/>`
// document.body.innerHTML +=`Seu nome dom letra maiusculas: <strong>${nome.toUpperCase()}</strong><br/>`
// document.body.innerHTML +=`Seu nome com letras minusculas: <strong>${nome.toLowerCase()}</strong><br/>`
