/* 
  Herança é um recurso que permite criar classes que herdam método/atributos de outra classe.

  À class que é herdada damos o nome de SUPERCLASSE e à classe que herda damos o nome de SUBCLASSE.

  Uma classe filha possui todos os atributos e métodos da classe mãe mas tambem pode possuir seus proprios métodos que são exclusivos dela.

  Para isso usa-se a palavra extends na classe que herda

  A classe filha tambem pode ter seu proprio construtor sendo que esse construtor tambem deve levar em consideração os atributos da classe mãe. Para isso chama-se a palavra reservada "super"
*/

class Propriedade {
  constructor(area, preco) {
    (this.area = area), (this.preco = preco);
  }
  precoMetroQuadrado() {
    const mtr2 = this.preco / this.area;
    return mtr2;
  }
}

class Casa extends Propriedade{}
class Apartamento extends Propriedade{
  constructor(numero, area, preco){
    super(area, preco)
    this.numero = numero
  }
}

const propriedade = new Propriedade(200, 100000);
const casa = new Casa(200, 200000)
console.log(casa);



