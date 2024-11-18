const express = require("express");
const databaseConnect = require("./database/db");
const app =  express();
const mongoose = require("mongoose");
const userSchema = require("./database/Schema");
const PropietariosSchema = require("./database/schemas/Proprietarios");
const rotas = require("./rotas/rotas");
require('dotenv').config();

const PORT = process.env.PORT
const db = databaseConnect();

app.use(express.json())
app.use(rotas)
app.listen(PORT,()=>{
  console.log(`Servidor aberto na porta ${PORT}`)
})