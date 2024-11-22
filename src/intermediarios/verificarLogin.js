const secret = process.env.SECRET
const PropietariosSchema = require("../database/schemas/Proprietarios")
const { default: mongoose } = require("mongoose")
const proprimetarioModel = mongoose.model('proprietarios',PropietariosSchema)
const jwt = require("jsonwebtoken")

const verificarLogin = async (req,res,next) =>{
    const {authorization} = req.headers

    const token = authorization.replace("Bearer ","")
    if(!authorization){
        res.status(400).send({mensagem: "Não autorizado."})
    }
    try{
        const {username} =  jwt.verify(token,secret);
        const buscarProprietario = await proprimetarioModel.findOne({username})
        if(!username){
            res.status(400).send("acesso negado.")
        }
        if(!buscarProprietario){
            res.status(400).send({mensagem: "acesso negado."})
        }
        req.usuario = buscarProprietario;
        next();
    }catch(error){
        res.status(400).send("Token inválido");
    }
}

module.exports = verificarLogin