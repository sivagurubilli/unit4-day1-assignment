const express = require("express");

const app =express()



app.get("/",function(req,res){
   
   return res.send("hello")
})

app.get("/books",function(req,res){
    return res.send({
        book1:"lord of rings",
        book2:"wings of fire",
        book3:"the auto bio-grafy",
        book4:"the martian"
    })
    
})

app.listen(4000,()=>{
    console.log("listen 4000")
})