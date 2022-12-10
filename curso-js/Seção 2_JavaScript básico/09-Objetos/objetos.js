const pessoa_0 = {
  nome: "Fernando",
  sobrenome: "Pereira Xavier",
  anoNascimento: 1990,
  idade: 31,
  cpf: 04550760303,
};
/*ACESSANDO VALORES DENTRO DE UM OBJETO
pessoa.nome ----> acessa 'Fernando'
pessoa.sobrenome ----> acessa 'Perera Xavier'
pessoa.anoNacimento ----> acessa '1990'
pessoa.idade ----> acessa '31'
pessoa.cpf ----> acessa '04550760303'
*/

/*Apagando atributos de um objetos
delet objeto.nome do atributo
*/



/* Função para criar objeto */
function criaPessoa1(nome, sobrenome, anoNascimento, idade, cpf) {
    return {
        nome, sobrenome, anoNascimento, idade, cpf
    }
}

const pessoa1 = criaPessoa1('Fernando', 'Pereira Xavier', 1990, 21, '04550760303')

// console.log(pessoa1.nome);



/* TAMBEM PODEMOS CRIAR FUNÇÕES DENTRO DE OBJETOS CHAMADOS MÉTODOS
    E PARA REFERENCIAR A QUALQUER VALOR DENTRO DO OBJETOS USAMOS A PALAVRA "THIS".
*/
const pessoa_1 = {
    nome: "Fernando",
    sobrenome: "Pereira Xavier",
    anoNascimento: 1990,
    idade: 31,
    cpf: 04550760303,
    anoAtual (){
        console.log(`O ano atual é ${this.anoNascimento + this.idade}`);
    }
  };

//   console.log(pessoa_1.anoAtual());


function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}
const p1 = new Pessoa("Fernando", "Xavier")
console.log(p1.nome);