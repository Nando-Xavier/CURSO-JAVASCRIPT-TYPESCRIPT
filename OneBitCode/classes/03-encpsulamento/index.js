/*-----ENCAPSULAMENTO

  Encapsulamento é o pincipio de impedir que determinados atributus e metodos de uma classe sejam acessiveis pelo contexto exterior.

  No javascrip existe dois niveis de encapsulamento:
  1- Público: onde o atributo/método é acessivel fora da classe(nivel padrão)
  2- Privado: onde o atributo/método só é acessivel dentro da propria classe.

  Para definirmas um atributo ou método como privado utilizamos um "#" no começo do seu nome.

  Todo atributo ou método que não for privado será automaticamente público.

  ex: Uma classe possui um atributo que é definido uma vez durante a construção mas depois não pode ser alterado diretamente(usando obj.atributo = "novo valor")

  Uma classe possui um método principal que internamente chamavários outros métodos da propria classe que não fazem sentido individualmente.

*/

/*
class Conta {
  constructor(usuario) {
    this.email = usuario.email;
    this.senha = usuario.senha;
    this.saldo = 0;
  }
}
const usuario = {
  email: "nadoxaier@email.com",
  senha: "123456",
};
const conta = new Conta(usuario);
console.log(conta);
*/

// Mas podemos observar que podemos alterar quanquer valor da conta
// EX:

/*
conta.email = "xxxxxxxxxxx";
conta.senha = "abcdef";
conta.saldo = 100;
console.log(conta);
*/

// Então os atributos e métodos privados servem exatamente para impedir que isso aconteça.
// Para fazer isso colocamos uma "#" andes do nome do atributo/método  e definimos-os antes do construtor

class Conta {
  #senha
  #saldo
  constructor(usuario) {
    this.email = usuario.email;
    this.#senha = usuario.senha;
    this.#saldo = 0;
  }
  getBalance(senha, email){
   return email === this.email && senha === this.#senha?this.#saldo:null
  }
}
const usuario = {
  email: "nadoxaier@email.com",
  senha: "123456",
};
const conta = new Conta(usuario);
console.log(conta);
console.log(conta.getBalance(usuario.senha, usuario.email));

// conta.email = "xxxxxxxxxxx";
// conta.senha = "abcdef";
// conta.saldo = 100;
// console.log(conta);
