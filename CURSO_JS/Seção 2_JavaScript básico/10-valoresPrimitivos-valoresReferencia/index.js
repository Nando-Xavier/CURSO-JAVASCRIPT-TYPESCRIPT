/*
Primitivos (imutaveis) --> string, number, boolean, undefined, null, bigint, symbol
Ex:
let nome = "Paulo"
nome = "Paula" ---> PODE
nome[4] = 'a' ---> NÂO PODE

ou seja, podemos alterar o valor da variável mas nçao pdemos mudar a caracteristica da variável.

Quando o dado for primitivo, podemos fazzer uma copia do valor de outra variável e mesmo alterando o valor de da vaariável copiada, a variavel que recebeu a cópia não altera seu valor.
*/



/* 
 Referencia (mutável) --> array, object, function
  Esse to de dado aponta para um local da memória de forma que se for feita uma cópia de uma determinada variável e for feita uma alteração nesse valor em qualquer uma das variaveis a mudança será feita  nas duas pois ambas apontam para o mesmo lugar na memoria.
*/

// Se quiser q seja feita uma cópia de um dado primitivo usamos o operador spreed(...variável)