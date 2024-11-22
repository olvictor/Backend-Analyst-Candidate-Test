const express = require("express");
const databaseConnect = require("./database/db");
const app =  express();
const rotas = require("./rotas/rotas");
require('dotenv').config();

const PORT = process.env.PORT
const db = databaseConnect();

app.use(express.json())
app.use(rotas)
app.listen(PORT,()=>{
  console.log(`Servidor aberto na porta ${PORT}`)
})