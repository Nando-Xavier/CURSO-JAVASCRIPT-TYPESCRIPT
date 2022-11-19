/* Javascript e baseado em prottipos para passar propriedades e métodos de om objeto para outro.*/

/* Podemos manipular os prototype criando assim uma cadeia de proto e fazendo com que outros abjetos acessem o prototype de de outro objeto e assim poder acessar as chaves de objetoA usando o ObjetoB.
   EM OBJETOS LITERAIS
Object.setPrototypeOf(objeto a receber o proto, objeto prototipo)

   EM OBJETOS DE FUNÇÕES CONSTRUTORAS
nome_função_construtora.setPrototypeOf(objeto a receber o proto, objeto prototipo)

NÃO É RECOMENDAVEL MANIPULAR A CHAVE PROTO DE UM OBJETO POS PODE CALSAR PROBLEMAS DE DESEMPENHO NA MAQUINA.
PARA ACESSAR O PROTO É RECOMENDAVEL UTILIZAR UMA FUNÇÃO PROPRIA
Object.getPrototypeOf(nome do objeto)

>>> PODEMOS USAR UMA FUNÇÃO CREATE() PARA CRIAR UM OBJ COM TODOS OS MOLDES DE UM PROTOTIPO E SETAR 
OS CHAVES COM SEUS ATRIBUTOS.
const object = Object.create(objPrototipo, 
    {
    chaves1{
        enumerable: true, // mostra a chave
        value: nome, // define o valor
        writable: true, // pode alterar
        configurable: true, // pode configurar 
    },
    chaves2{
        enumerable: true, // mostra a chave
        value: nome, // define o valor
        writable: true, // pode alterar
        configurable: true, // pode configurar 
    }
})
*/ 


function DisNome(params) {
    this.nome = params
}
DisNome.prototype.chamaNome = (params) => {
    console.log(`meu  nome é ${params}`);
}
const nome1 = new DisNome('Fernando') 
// nome1.chamaNome('fernando')

// console.log(nome1);
 const obj = {
    nome: 'fernando'
 }
 
 const obj2 = {
    sobrenome: "pereira xavier"
 }
 Object.setPrototypeOf(obj2, obj)
//  Object.setPrototypeOf(obj, DisNome.prototype)
//  obj.chamaNome('paulo')

function nome(nome, idade) {
    return {
        nome,
        idade
    }
}
const nome2 = nome('fer', 31)
// console.log(nome1);

const data = new Date()
// console.dir(obj);

const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

const objC = {
    chaveC: 'C'
}

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function Produto (nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(porcentagem) {
    this.preco = this.preco - ((this.preco / 100) * porcentagem)
}
Produto.prototype.aumento = function(porcentagem) {
    this.preco = this.preco + ((this.preco / 100) * porcentagem)
}
const p1 = new Produto('camisa', 100)

// SETANDO O PROTOTYPE DE UM OBJETO LITERAL COMO O PROTO DE UMA FUNÇÃO CONSTRUTURA
 const p2 = {
    nome: "caneca",
    preco: 15
 }
 Object.setPrototypeOf(p2, Produto.prototype)/*Essa função altera o constructor original para o 
 construtor do prototipo */
//  p2.aumento(10)
//  console.log(p2);


// CRINDO UM OBJ CON UMA FUNÇÃO CRIADORA E SETANDO O PROTO E PRORIEDADES

const p3 = Object.create(Produto.prototype, {
    preco:{
        configurable:true,
        writable: true,
        enumerable: true,
        value:50
    },
    nome:{
        configurable:true,
        writable: true,
        enumerable: true,
        value: "sapato"
    }
})
p3.aumento(50)
console.log(p3);
