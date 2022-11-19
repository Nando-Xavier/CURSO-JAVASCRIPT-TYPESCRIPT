/*GETTER E SETTER ---> são uma maneira de proterger uma propriedade de um determinado objeto, 
onde get é responsavel por obter o valor e set é responsavel por setar ou mudar um valor*/

const pessoas = [
  { id: 1, nome: "fernando" },
  { id: 2, nome: "railma" },
  { id: 3, nome: "eliza" },
];
const novasPessoa = {}
for (const pessoa of pessoas) {
    // const {id} = pessoa
    // novasPessoa[id] = {...pessoa}
    console.log(pessoa);
}
console.log(novasPessoa);
