const express = require("express")

const app = express()

app.use(allbooks)
app.use(singlebook)


app.get("/books",(req,res,next)=>{
    return res.send({route:"books"})
})

app.get("/books/:name", (req,res)=>{
    return res.send({route:"/books",bookname:req.name})
}) 


function allbooks(req,res,next){
console.log("fetching all books")
next()
}

function singlebook(req,res,next){
    
    if(req.path == "/books/harry"){
        req.name = "harrypoter"
    }else if(req.path == "/books/lord"){
        req.name ="lordofrings"
    }
    next()
}

app.listen(4000,()=>{
    console.log("listen")
})