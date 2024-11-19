const { default: mongoose } = require("mongoose");
const CategoriasSchema = require("../database/schemas/Categorias");
const PropietariosSchema = require("../database/schemas/Proprietarios");
const categoriasModel = mongoose.model('categorias',CategoriasSchema)
const proprietarioModel = mongoose.model('proprietarios',PropietariosSchema)

const cadastrarCategoria = async(req,res) => {

    const proprietario = await proprietarioModel.findOne({username:"proprietario1"})

    if(!proprietario){
        res.status(400).send("Proprietário não encontrado")
    }
    const categoria = new categoriasModel({
        titulo: "testando",
        descricao: "descricao de categoria",
        ID_do_proprietario: proprietario._id
    })
    try{
        await categoria.save();
        res.send("categoria cadastrada com sucesso")
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    cadastrarCategoria
}