/*

*/

const express = require("express");
const path = require("path");
const routes = require('./routes')

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(routes)

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3000.\n Acesse http://localhost:3001");
});
