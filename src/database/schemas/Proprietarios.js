const mongoose = require("mongoose")

const PropietariosSchema = new mongoose.Schema({
    username: {
       type: String,
       unique: true,
       require: true 
    },
    password:{
        type:String,
        require:true
    }
});


module.exports = PropietariosSchema