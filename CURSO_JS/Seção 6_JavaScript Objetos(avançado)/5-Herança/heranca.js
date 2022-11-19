function Produto (nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(aumento){
    this.preco = this.preco + ((this.preco / 100) * aumento)
}
Produto.prototype.desconto = function(desconto){
    this.preco = this.preco - ((this.preco / 100) * desconto)
}


function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco, cor)
}

Camiseta.prototype = Object.create(Produto.prototype)// instanciando  prototype de Camizeta com Produto
Camiseta.prototype.constructor = Camiseta  // Mudanso o constructor para Camizeta

// const p1 = new Produto('camiseta', 100)
// p1.desconto(10)
// console.log(p1);

const camiseta = new Camiseta('aaaa', 12, 'verde')
// Object.setPrototypeOf(camiseta, Produto.prototype)// instanciando  prototype de Camizeta com Produto  ---2
camiseta.aumento(100)
console.log(camiseta);