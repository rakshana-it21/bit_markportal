const express=require("express");
const path=require("path")
const bcrypt=require("bcrypt")

const app=express();
app.set('view engine','ejs')
const port=9000;
app.listen(port,()=>{
    console.log("running server")
})