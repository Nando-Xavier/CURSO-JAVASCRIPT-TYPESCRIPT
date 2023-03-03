/*
  Os acessadores são uma forma diferente de como e especial de como são lidos e reescritos métodos e atributos
*/

class Amount {
  #amont
  constructor(){
    this.#amont = 100
  }
  amount(){
    console.log(this.#amont); 
  }
}

const a = new Amount()
a.amount()
