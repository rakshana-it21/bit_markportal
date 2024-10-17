const express=require("express");
const path=require("path")
const bcrypt=require("bcrypt")

const app=express();
app.set('view engine','ejs')
const port=9000;
app.get("/",(req,res)=>{
    res.render("Faculty_login")
})
app.get("Sign_up",(req,res)=>{
    res.render("Sign_up");
})
app.listen(port,()=>{
    console.log("running server")
})