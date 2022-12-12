const express = require('express')
const route = express.Router()
const homrcontrolle = require('./controllers/home-controlle')
const contato_controler = require('./controllers/contato-controller')



route.get('/', homrcontrolle.paguinaInicial);
route.get('/contato', contato_controler.contato);
route.post('/', homrcontrolle.enviaForm)

// route.get('/', (req,res) =>{
//   res.send('<form action="/" method="POST">Nome:<br><input type="text" name="name"><button>Enviar</button></form>')
// });
module.exports = route