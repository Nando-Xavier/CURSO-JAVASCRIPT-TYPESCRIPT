const pessoa = {
	nome: 'Fernando',
	sobrenome: 'Xavier',
	idade: 31,
	endereco: {
		rua: 'Sargento Cardoso',
		numero: {
			n1: 1,
			n2: 2,
			n3: 3
		}
	}
};


const {nome, sobrenome, idade, endereco,endereco:{rua, numero, numero: {n1, n2, n3}}} = pessoa