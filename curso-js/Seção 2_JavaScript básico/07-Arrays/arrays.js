const alunos = ['fernando', 'eliza', 'railma', 'francisca']
const nome = 'fernando pereira xavier'
const a = nome.split(" ")
console.log(a);
//arrays[indice] = 'NOVO VALOR' ----> para editando um valor 
//arrays[indice]  ----> para acessar um determinado valor
//arrays.length  -----> para saber o tamanho do arrays
//arrays.push(valor)  -----> para adicionar um valor no final do array
//arrays.unshift(valor)  -----> para adicionar um valor no inicio do array
//arrays.pop(valor) ---> remove um elemento do final do array sendo que é possivel salvar o elemento removido numa variável.
// arrays.shift(valor) ---> remove um elemento do inicio do array sendo que é possivel salvar o elemento removido numa variável.
//delete arrays[indice]  ----> serve para deletar um elemento sem alterar os indices.
//array.slice(x, y) -----> serve para pegar uma parte do array de acordo com os parametros passados onde: X é o indic inicial e Y é o indice final mais um.
// array.join('') ----> junta todos os indices de um arrays em uma string de acordo com os parametros passados.
// array.splice(indice inicial, quantidade a ser apagada, ser adicionada, ser adicionada, ser adicionada, ser adicionada, etc.) é uma função faz tudo
// array.concat(array) função uzada para concatenar arrays. Tambem pode ser usada o spred operetor(...spread)
// array.filter((valor, indice, array) => {}) função usado para filtrar arrais. Ela não modifica o array original.
//array.map((valor, indice, array) => {}) função usada para alterar os valores de um array. Ela modifica o array original.
//array.reduce((acumulador, valor, indice, array) => {}, valor  inicial do acumulador) função usada para redusir um array a um unico elemento
// array.forEach((valor, indice, array) => {})função usada pa interar sobre o valor de arrays
// Array.from() ---> convete qualquer coisa em uma array


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const array1 = array.filter((valor)=>{
//     // filtra e retorna os valore maiores que 5
//     return valor > 5
// })


// const array2 = array.map((valor) => {
//     // retorna os valores do array multiplicado por 2
//     return valor * 2
// })


// const array3 = array.reduce((acumulador, valor) => {
//     // retorna os valoeres acumulados do array
//     acumulador += valor
//     return acumulador
// }, 0)
// console.log(array1);
// console.log(array2);
// console.log(array3);