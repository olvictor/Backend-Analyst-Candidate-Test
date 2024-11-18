const express = require("express");
const databaseConnect = require("./database/db");
const app =  express();
const mongoose = require("mongoose");
const userSchema = require("./database/Schema");
require('dotenv').config();

const PORT = process.env.PORT
const db = databaseConnect();
const UserModel = mongoose.model('users', userSchema);

app.get("/",async(req,res)=>{
  // const usuario = new UserModel({
  //   username: "aaaaa",
  //   password: "123"
  // })
  // usuario.save()

  console.log( await UserModel.find())
  res.send("askopaskopaskop")
})

app.listen(PORT,()=>{
  console.log("skaopakopskapo")
})