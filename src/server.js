const express = require("express")
const server = express()

server.engine('html', require('ejs').renderFile);
server.use(express.static("public"))
server.use(express.static("src/views"))


server.use(express.urlencoded({ extended: true }))


server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/index", (req, res) => {
    return res.render("index.html")
})



server.get("/cadastro", (req, res) => {

    return res.render("cadastro.html")
})

server.get("/negocios", (req, res) => {

    return res.render("negocios.html")
})

server.listen(process.env.PORT || 5000)
