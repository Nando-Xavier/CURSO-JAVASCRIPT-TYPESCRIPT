// classe para criar autores
module.exports = class Author {
  constructor(name, nationality, biograph) {
    (this.name = name),
      (this.nationality = nationality),
      (this.biograph = biograph);
  }
};
