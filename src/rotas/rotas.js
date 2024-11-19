const express = require("express");
const { cadastrarProprietarios } = require("../controladores/proprietarios");
const { cadastrarCategoria } = require("../controladores/Categorias");
const { cadastrarProduto, buscarProdutos } = require("../controladores/produtos");
const rotas = express();

rotas.post("/proprietarios", cadastrarProprietarios)
rotas.post("/categorias",cadastrarCategoria)


// PRODUTOS
rotas.post("/produtos",cadastrarProduto)
rotas.get("/produtos",buscarProdutos)
module.exports = rotas;