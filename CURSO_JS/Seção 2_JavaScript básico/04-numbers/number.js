//.toString()   Transforma um numero em uma string

//.toFixed()   Serve para arrendondar numeros com casas decimais de aconrdo com a quantidade passada como parametro.

//Number.isInteger(variável)  Checa se uma determinada variável esta recebendo um valor inteiro ou não e retorna true ou false.

//Number.isNaN(variável)  Checa se determinado valor é um NaN not-a-number e retorna verdadeiro caso o valor seja um NaN ou falso aso o falor seja um numero.

let num1 = 0.7
let num2 = 0.1
num1 += num2
num1 += num2
num1 += num2


num1 = Number(num1.toFixed(1))
console.log(num1);
console.log(Number.isInteger(num1));