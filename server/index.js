const express = require("express");
const cors = require("cors");
const mongoose  =require("mongoose");
const PORT = process.env.PORT || 3000;
const userModel = require("./model/model")
const app =express();

app.use(cors(
    {
    origin:["https://mern-register-frontend.vercel.app"],
    methods:["POST","GET"],
    credentials:true
    }
));
app.use(express.json());

mongoose.connect("mongodb+srv://sivajeeva459:siva123@cluster0.yxfdq.mongodb.net/first?retryWrites=true&w=majority&appName=Cluster0");

app.get("/",(req,res)=>{
    res.json("hello")
})

app.post("/register",(req,res)=>{
    const {name,email,password} = req.body;
    userModel.findOne({email:email})
    .then((user)=>{
        if(user)
        {
            res.json("already account created");
        }
        else
        {
            userModel.create({name:name,email:email,password:password});
            res.json("account successfully created");
        }
    }).catch((err)=>{
        console.log("error founded",err);
    })

})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
