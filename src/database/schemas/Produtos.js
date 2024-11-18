const mongoose = require("mongoose")

const ProdutosSchema = new mongoose.Schema({
    título: String,
    descrição: String,
    preco: Number,
    categoria: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Categorias'
    },
    ID_do_proprietário:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Proprietarios'
    }
});


module.exports = ProdutosSchema