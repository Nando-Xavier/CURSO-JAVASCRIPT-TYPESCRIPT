module.exports = class Endereco {
  constructor(rua, numero, bairro, cidade, estado) {
    (this.rua = rua),
      (this.numero = numero),
      (this.bairro = bairro),
      (this.cidade = cidade),
      (this.estado = estado);
  }

  meuEndereco() {
    return `Rua ${this.rua}, nª ${this.numero} ${this.bairro}, ${this.cidade}/${this.estado}`;
  }
};
// const endereco = new Endereço("18", 176, "conceição", "balsas", "MA");
