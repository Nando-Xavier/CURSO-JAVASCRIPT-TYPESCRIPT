const nome = "Fernando"
const sobrenome = "Xavier"

const falaNome = ()=>{
    console.log(nome + " " + sobrenome);
}
// falaNome() 

module.exports.nome = nome
module.exports.sobrenome = sobrenome
exports.fala = falaNome
this.qualquerCoisa = "O que eu quiser exportar"

module.exports = function(x, y) {
    return x * y
}

console.log();