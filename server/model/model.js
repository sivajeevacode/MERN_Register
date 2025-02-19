const mongoose = require("mongoose");

const userSchema  = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const userModel = mongoose.model("registers",userSchema);

module.exports = userModel;