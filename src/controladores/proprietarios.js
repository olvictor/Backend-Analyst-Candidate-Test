const { default: mongoose } = require("mongoose");
const PropietariosSchema = require("../database/schemas/Proprietarios");
const ProprietarioModel = mongoose.model('proprietarios',PropietariosSchema)

const cadastrarProprietarios = async (req,res) =>{
    const {username, password} = req.body
    const proprietario = new ProprietarioModel({
       username,
       password
    })
    try{
       await proprietario.save()
       res.status(201).send(`Usuario ${username} cadastrado com sucesso.`)
    }catch(error){
       error.errorResponse.code = 11000 ? res.status(400).send("Usuario já cadastrado") : res.status(500).send("Erro interno do servidor")
    }
}


module.exports = {
    cadastrarProprietarios
}