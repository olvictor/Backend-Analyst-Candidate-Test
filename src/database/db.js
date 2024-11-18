const mongoose = require("mongoose");
require("dotenv").config();
const URLDB = process.env.MONGODB_URL

const databaseConnect = async () =>{
    try{
       const connect = await mongoose.connect(URLDB)
       return connect
    }catch(error){
        console.log(error)
    }
}

module.exports = databaseConnect