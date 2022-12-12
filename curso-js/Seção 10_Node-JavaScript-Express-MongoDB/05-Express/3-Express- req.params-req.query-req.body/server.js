const express = require('express')
const path = require('path')

const app = express()
app.use(express.urlencoded({
  extended:true
}))



//req.params-- É um objeto que recebe os parametros enviados(:nom que queremos pro parametro) se colocar um ? quer dizer que parametro é opcional
//req.query-- É um objeto que recebe os parametros enviado e que começa com ? logo após a rota, sendo q os parameros são separados por um &
//req.body-- somente em POST e PUT, e pre ter aesso ao req.body precisamos pedir pro express usar a função urlencoded() com um objeto como parametro: --------app.use(express.urlencoded({extended:true}))---------


app.get('/', (req,res) =>{
  res.send('<form action="/" method="POST">Nome:<br><input type="text" name="name"><button>Enviar</button></form>')
});

app.get('/testes/?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.query)
})

app.post('/', (req, res)=>{
  console.log(req.body)
  res.send('Formulario rcebido')
})

app.listen(3001, ()=>{
  console.log('Servidor rodando na porta 3000.\n Acesse http://localhost:3001');
})   