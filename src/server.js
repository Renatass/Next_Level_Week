const express = require("express")
const server = express() 


//Configurar pasta publica
server.use(express.static("public"))

//utilzando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})
//configurar caminhos da aplicação
//página inicial
//req: Requisição
//res: Resposta
server.get("/", (req, res) =>{
   return res.render("index.html", {title:"Teste"})
})

server.get("/create-point", (req, res) =>{
   return res.render("create-point.html")
})

server.get("/search", (req, res) =>{
   return res.render("search-results.html")
})




//ligar o servidor
server.listen(3000)

