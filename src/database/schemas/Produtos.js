const mongoose = require("mongoose")

const ProdutosSchema = new mongoose.Schema({
    titulo: {
        type: String,
        require: true
    },
    descricao:{
        type: String,
        require:true
    },
    preco: {
        type:Number,
        require:true
    },
    categoria: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Categorias'
    },
    ID_do_proprietario:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Proprietarios'
    }
});


module.exports = ProdutosSchema