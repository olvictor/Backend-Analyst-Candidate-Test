const express = require("express");
const { cadastrarProprietarios } = require("../controladores/proprietarios");
const { cadastrarCategoria } = require("../controladores/Categorias");
const rotas = express();

rotas.post("/proprietarios", cadastrarProprietarios)
rotas.post("/categorias",cadastrarCategoria)

module.exports = rotas;