const mongoose = require("mongoose")

const AuthenticationSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}) 

const AuthenticModel = mongoose.model("signingUp", AuthenticationSchema)
module.exports=AuthenticModel
