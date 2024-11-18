const mongoose = require("mongoose")

const CategoriasSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    ID_do_proprietario:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'proprietarios',
        unique:true,
        required: true
    }
});


module.exports = CategoriasSchema