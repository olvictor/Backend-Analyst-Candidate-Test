const express = require("express");
const { cadastrarProprietarios } = require("../controladores/proprietarios");
const { cadastrarCategoria } = require("../controladores/Categorias");
const { cadastrarProduto } = require("../controladores/produtos");
const rotas = express();

rotas.post("/proprietarios", cadastrarProprietarios)
rotas.post("/categorias",cadastrarCategoria)
rotas.post("/produtos",cadastrarProduto)
module.exports = rotas;