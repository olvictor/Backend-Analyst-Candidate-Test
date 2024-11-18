const mongoose = require("mongoose")

const CategoriasSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    ID_do_proprietário:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Proprietarios'
    }
});


module.exports = CategoriasSchema