const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  res.send('<form action="/" method="POST">Nome do Cliente: <input type="text" nome="nome"><button>Enviar</button></form>');
})

app.post('/', (req, res) => {
  res.send('Recebir o formulário')
})

app.listen(3000, ()=>{
  console.log('Servidor rodando na porta 3000.\n Acessar http://localhost:3000');
})