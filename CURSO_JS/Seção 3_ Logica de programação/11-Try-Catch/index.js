/*
  TRATANDO E LANÇANDO ERROS COM TRY-CATCH
  onde: 
  try --> tente executar isso
  catch --> caso de erro faça isso 
  Enteressante saber que try tenta executar o código e se encontrar algun erro, executa as linhas de código do catch podemdo ser tratado ou emvada um mensagem de erro.
*/

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser numeros"); // lançando o erro em potencial
  }
  return x + y;
}

try {
  console.log(soma("2", 2)); // tentando executar o codigo com o potncial erro
} catch (error) {
  console.log(error); // onde o erro pode ser tratado
}
// function retornaHora(date) {
//   if (date && !(date instanceof Date)) {
//     throw "Esperando uma instancia de Date";
//   }

//   if (!date) {
//     date = new Date();
//   }

//   return date.toLocaleTimeString("pt-BR", {
//     hour12: false,
//   });
// }

// const data = new Date("01-01-1979 23:30:10")
// try {
//     console.log(retornaHora(data));
// } catch (error) {
//     console.log(error);
// }