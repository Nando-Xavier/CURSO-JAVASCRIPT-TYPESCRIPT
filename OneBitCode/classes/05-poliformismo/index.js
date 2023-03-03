/*
  Polimorfismo na Programação Orientada a Objeto pode ser descrito como a capacidade de sobrescrever métodos erdados de uma classe Suoerclasse.
*/


class Veiculo{
  move(){
    console.log("O veiculo esta se movendo.");
  }
}

class Carro extends Veiculo{
  move(){
    console.log('O carro está se movendo.');
  }
}

const mustang = new Carro()
mustang.move()

