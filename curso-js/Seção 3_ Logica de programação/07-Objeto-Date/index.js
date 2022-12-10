/*
OBJETO DADE É UMA FUNÇÃO CONSTRUTORA
ex:
-> const data = new Date() ---> sempre que se usa uma função construtora, usa-se a palavra "new" e toda função construtora começa com letra maiuscula.
-> Sempre que usar a função sem nenhum parametro é gerada um data da data atual.
-> const date = new Date(AAAA, MM, DD, hr, mi, sg, ms) ---> gera uma data de acordo com os parametros passados podendo receber no minimo dois parametros.
-> O mês começa em java script do 0 e não do 1 como nomo no nosso calendario normal.
-> Podemos passar uma data no formato string ----> "AAAA-MM-DD hr:mi:sg:ms"


* 
    FUNÇÕES PARA MANIPULAR OBJETO DATE

data.getDate()- bunca o numero do dia.
data.getMonth() + 1- bunca o numero do mês. O +1 porque o mês começa do zero.
data.getFullYear()- bunca o numero do ano.
data.getHours()- bunca o numero da hora.
data.getMinutes()- bunca o numero do minutos.
data.getSeconds()- bunca o numero do segundo.
data.getMilliseconds()- bunca o numero do milesegundos.
data.getDay()- bunca o numero do dia da semana. O começo da semana começa do zero sendo este o domengo.
Date.now(- busca a quantidade de milesegunde desde o marco zero até a data atual.
.toLocaleTimeString('pt-BR',{hour12: false}) -  função que traz somente as horas ( primeiro parametro é o formato brasileiro e segundo e formato 24 horas)


*/

const data = new Date(0)
console.log(data);
console.log(data.toString());