const express = require("express");
const route = express.Router();
const homrcontrolle = require("./src/controllers/home-controlle");
const contato_controler = require("./src/controllers/contato-controller");
//./src/controllers/home-controlle
//

route.get("/", homrcontrolle.paguinaInicial);
route.get("/contato", contato_controler.contato);
// route.post('/', homrcontrolle.enviaForm)

// route.get('/', (req,res) =>{
//   res.send('<form action="/" method="POST">Nome:<br><input type="text" name="name"><button>Enviar</button></form>')
// });
module.exports = route;
