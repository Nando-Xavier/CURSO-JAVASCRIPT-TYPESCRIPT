//-------CLASSES E INSTANCIAS-----
// exemplo de classe
class Pessoa {
  constructor(nome, sobrenome, idade) {
    (this.nome = nome), (this.sobrenome = sobrenome), (this.idade = idade);
  }
  // Uma classe pode conter metodos igual uma função construtora.
  //Ex:
  chamaNOME() {
    console.log(
      `Meu nome completo é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos de idade.`
    );
  }
}

// Exemplo de instancia

const pessoa = new Pessoa("Fernando", "Pereira", 32);
// pessoa.chamaNOME();

/*------------------------------------------------- */

// ASSOCIAÇÃO DE CLASSES
//Ex:
