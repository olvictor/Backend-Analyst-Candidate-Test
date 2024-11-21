const apicache = require("apicache")
const cache = apicache.options({
    debug: true
  }).middleware;
const { default: mongoose} = require("mongoose")
const PropietariosSchema = require("../database/schemas/Proprietarios")
const CategoriasSchema = require("../database/schemas/Categorias")
const ProdutosSchema = require("../database/schemas/Produtos")
const proprietarioModel = mongoose.model("proprietarios",PropietariosSchema)
const categoriaModel = mongoose.model("categorias",CategoriasSchema)
const produtoModel = mongoose.model("produtos",ProdutosSchema)

 cadastrarProduto = async(req,res) => {
    const {ID_do_proprietário, categoria,titulo,descricao,preco} = req.body

    const buscarProprietario = await proprietarioModel.findOne({username: ID_do_proprietário})
    const buscarCategoria = await categoriaModel.findOne({titulo: categoria})

    
    if(!buscarProprietario || !buscarCategoria){
        res.status(400).send("Proprietário ou categoria inválidos.")
    }
    try{
        const novoProduto = new produtoModel({
            titulo,
            descricao,
            preco ,
            categoria:buscarCategoria,
            ID_do_proprietario:buscarProprietario._id
        })
        await novoProduto.save()
        res.send("Produto cadastrado com sucesso.")

    }catch(error){
        res.status(400).send("Erro interno do servidor.")
    }
}


const buscarProdutos = async(req,res) =>{

  const buscarProprietario =  await proprietarioModel.findOne({username:"proprietario1"})

  const produtos =  await produtoModel.find({ID_do_proprietario: buscarProprietario._id})
  res.send(produtos)
}

module.exports = {
    cadastrarProduto,
    buscarProdutos
}