const express = require("express");
const apicache = require("apicache")
let cache = apicache.middleware
const { cadastrarProprietarios } = require("../controladores/proprietarios");
const { cadastrarCategoria } = require("../controladores/Categorias");
const { cadastrarProduto, buscarProdutos } = require("../controladores/produtos");
const rotas = express();


// PROPRIETARIOS
rotas.post("/proprietarios", cadastrarProprietarios)

// CATEGORIAS
rotas.post("/categorias",cadastrarCategoria)


// PRODUTOS
rotas.post("/produtos",cadastrarProduto)
rotas.get("/produtos", cache('5 minutos'),buscarProdutos)
module.exports = rotas;