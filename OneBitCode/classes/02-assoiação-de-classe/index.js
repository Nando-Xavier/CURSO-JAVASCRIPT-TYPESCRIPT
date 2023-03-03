// Associação é passar uma classe como parametro de outra classe e assim poder utiliza de sua propriedades e metódos.

const Endereco = require("./endereço");
const Pessoa = require("./pessoa");
const endereco = new Endereco("18", 176, "conceição", "balsas", "MA");
const pessoa = new Pessoa("Fernando", endereco);
console.log(pessoa.ender.meuEndereco());
