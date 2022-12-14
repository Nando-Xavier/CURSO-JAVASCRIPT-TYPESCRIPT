exports.paguinaInicial = (req, res) => {
  res.render("index")
};

exports.enviaForm = (req, res) => {
  res.send("Oi recebir o formulario");
};
