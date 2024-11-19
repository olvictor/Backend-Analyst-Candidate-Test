const { default: mongoose, mongo } = require("mongoose")
const PropietariosSchema = require("../database/schemas/Proprietarios")
const CategoriasSchema = require("../database/schemas/Categorias")
const ProdutosSchema = require("../database/schemas/Produtos")
const proprietarioModel = mongoose.model("proprietarios",PropietariosSchema)
const categoriaModel = mongoose.model("categorias",CategoriasSchema)
const produtoModel = mongoose.model("produtos",ProdutosSchema)
const cadastrarProduto = async(req,res) =>{
    const {ID_do_proprietário, categoria,titulo,descricao,preco} = req.body

    const buscarProprietario = await proprietarioModel.findOne({username: ID_do_proprietário})
    const buscarCategoria = await categoriaModel.findOne({titulo: categoria})
    console.log(buscarProprietario)
    console.log(buscarCategoria)

    
    if(!buscarProprietario || !buscarCategoria){
        res.status(400).send("Proprietário ou categoria inválidos.")
    }
    try{
        const novoProduto = new produtoModel({
            titulo,
            descricao,
            preco ,
            categoria:buscarCategoria,
            ID_do_proprietário:buscarProprietario._id
        })
        await novoProduto.save()
        res.send("Produto cadastrado com sucesso.")

    }catch(error){
        console.log(error)
    }
}

module.exports = {
    cadastrarProduto
}