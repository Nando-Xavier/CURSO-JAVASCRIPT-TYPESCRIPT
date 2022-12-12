const express = require('express')
const path = require('path')

const app = express()

/* 
         Criar   | Ler   | Atualizar   |  APAGAR
CRUD --> CREATE, | READ, | UPDADE,     |  DELETE
         POST    | GET   | PUT         |  DELETAR
*/

app.get('/', (req,res) =>{
  res.send('<form action="/contato" method="POST">Nome:<br><input type="text" name="name"><button>Enviar</button></form>')
});

app.get('/contato', (req,res) =>{
  res.send('Olá <strong>Mundo</strong>')
});

app.post('/contato', (req, res)=>{
  res.send('Formulario rcebido')
})

app.listen(3000, ()=>{
  console.log('Servidor rodando na porta 3000.\n Acesse http://localhost:3000');
})


/* 
1- instalar o nodemon como depedencias de desenvolvedor---- npm i nodemon --save-dev.
2- depois tem q criar um script no packge.json ---- "start": nodemon <nome-arquivo.js>
3- pra iniciar o nodemon---- npm rum start ou npm start

*/