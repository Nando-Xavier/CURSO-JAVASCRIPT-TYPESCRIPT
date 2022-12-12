exports.paguinaInicial = (req, res) => {
  res.send('<form action="/" method="POST">Nome:<br><input type="text" name="name"><button>Enviar</button></form>')
}

exports.enviaForm = (req, res) => {
  res.send('Oi recebir o formulario')
}