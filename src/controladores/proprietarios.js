const { default: mongoose } = require("mongoose");
const jwt = require('jsonwebtoken');
const PropietariosSchema = require("../database/schemas/Proprietarios");
const ProprietarioModel = mongoose.model('proprietarios',PropietariosSchema)
const secret = process.env.SECRET
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

const loginProprietario = async(req,res) =>{
   const {username,password} = req.body;

   try{
      const buscarUsuario = await ProprietarioModel.findOne({username})
      
      if(!buscarUsuario){
         res.status(400).send({mensagem: "Usuário ou senha incorretos."})
      }
   
      if(buscarUsuario && buscarUsuario.password != password){
         res.status(400).send({mensagem: "Usuário ou senha incorretos."})
      }
      
      var token = jwt.sign({ username }, secret,{
         expiresIn: "8h",
      });
      // const {password: aa, ...user} = buscarUsuario
      // console.log(buscarUsuario)
      // console.log(token)
      res.status(200).send({
         id: buscarUsuario._id,
         username:buscarUsuario.username,
         token
      })
   }catch(error){
      console.log(error)
   }
   
  
}

module.exports = {
    cadastrarProprietarios,
    loginProprietario
}