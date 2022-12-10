/*
EXEPLOS DE ATRIBUIÇÃO VIA DESESTRUTURAÇÃO

EX_1:
let a = "A"
let b = "B"
let c = "C"
const letras = [b, c, a];
[a, b, c] = letras
console.log(a, b, c)

EX_2: PEGANDO ALFUNS VALORES INICIAIS
const numeros = [10, 20, 30, 40, 50, 60, 70, 80]
const [primiroNumero, segundoNumero] = numeros --> formato pra pegar somente os primeiros valores onde: primiroNumero = 10 e segundoNumero = 20.

EX_ 3: PEGANDO O RESTO DO ARRAY
No caso anterior podemos pegar o resto do array usando o operador "..."
const numeros = [10, 20, 30, 40, 50, 60, 70, 80]
const [primiroNumero, segundoNumero, ...restante] = numeros 
console.log(restante) --> [30, 40, 50, 60, 70, 80]

EX_4: PEGANDO VALORES SALTIADOS   para pegar valores saltiados usa-se espaços vasios.
const numeros = [10, 20, 30, 40, 50, 60, 70, 80]
const [um, , tres, , cinco] = numeros --> 10, 30, 50

EX_5: DESESTRUTUÇÃO DE ARRAYS DE ARRAYS
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
PRIMEIRA FORMA
const [[um, dois, tres], [quatro, cinco, seis], [sete, oito, nove]] = numeros
console.log(cinco) --> 5
OU
const [, [, cinco, ,], ,] = numeros --> 5

SEGUNDA FORMA
const [lista1, lista2, lista3] = numeros
console.log(lista2[1]) --> 5

*/

