function Produto(nome, preço, estoque) {
    // definir uma propriedade
    Object.defineProperty(this, "estoque", {
        enumerable: true, // mostra a chave
        value: estoque, // define o valor
        writable: true, // pode alterar
        configurable: true, // pode configurar
    })

    // definir varias propriedades
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // define o valor
            writable: true, // pode alterar
            configurable: true, // pode configurar 
        },
        preço: {
            enumerable: true, // mostra a chave
        value: preço, // define o valor
        writable: true, // pode alterar
        configurable: true, // pode configurar
        }
    })
}

const produto= {}
Object.defineProperties(produto, {
    nome: {
        enumerable: true, // mostra a chave
        value: 'aaaaaa', // define o valor
        writable: true, // pode alterar
        configurable: true, // pode configurar 
    },
    preço: {
        enumerable: true, // mostra a chave
    value: 10, // define o valor
    writable: true, // pode alterar
    configurable: true, // pode configurar
    }
})

console.log(produto);


