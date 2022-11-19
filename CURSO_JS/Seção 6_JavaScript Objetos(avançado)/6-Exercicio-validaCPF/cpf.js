function Cpf(cpf) {
  this.cpf = cpf;
}
Cpf.prototype.valida = function () {
  if (typeof this.cpf === "undefined") return false;
  if (this.cpf.length < 11) return false;
  let cpfParcial = this.cpf.slice(0, -2)
    cpfParcial = cpfParcial.replace(/\D+/g, "")
  const digito1 = cpf.criaDigito(cpfParcial)
  const digito2 = cpf.criaDigito(digito1)
  if (this.cpf.replace(/\D+/g, "") === digito2) {
    console.log('CPF Válido');
  }
  else{
    console.log('CPF Inválido');
  }
  
};

Cpf.prototype.criaDigito = function (valo){
    const primeiroDigito = []
    for (const i of valo) {
        primeiroDigito.push(i)
    }
   if (valo.length = 9) {
    let valor = valo.length + 1
    const array = primeiroDigito.reduce((acumulador, val) => {
      // retorna os valoeres acumulados do array
      acumulador += (+val * valor)
      valor--
      return acumulador
  }, 0)
    const digito1 = 11 - (array % 11)
    if (digito1 <= 9) valo.concat(String(digito1))
    else valo.concat("0")
   }
   if (valo.length < 9) {
    let valor = valo.length + 1
    const array2 = segundoDigito.reduce((acumulador, val) => {
      // retorna os valoeres acumulados do array
      acumulador += (+val * valor)
      valor--
      return acumulador
  }, 0)
    const digito2 = 11 - (array2 % 11)
    if (digito2 <= 9) valo.concat(String(digito2))
      else valo.concat("0")
  }
   
}
const cpf = new Cpf('04550760303');
cpf.valida()
