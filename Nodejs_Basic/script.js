// http -protocol
// yahi protocol hai ya rule hai jisko   follow kare bina aap naa hi kuch bhej skate HTMLOListElement, na hi kuch manga sakte ho

const http = require("http");

const server  = http.createServer(
    function(req, res){
        res.end("hello world")
})

server.listen(3000);