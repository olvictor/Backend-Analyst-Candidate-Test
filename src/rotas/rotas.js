const express = require("express");
const { cadastrarProprietarios } = require("../controladores/proprietarios");
const rotas = express();

rotas.post("/proprietarios", cadastrarProprietarios)


module.exports = rotas;