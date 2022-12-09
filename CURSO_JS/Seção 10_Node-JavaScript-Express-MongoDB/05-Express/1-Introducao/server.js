const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  res.send('Hello World')
})
app.get('/contato', (req, res)=>{
  res.send('Essa é a nossa página de contato')
})
app.listen(3000, ()=>{
  console.log('Acessar http://localhost:3000');
  console.log('Servidor Rodndo na Porta 3000')
})