const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    let filePath = "./public" + req.url;

    if(filePath === "./public/"){
        filePath = "./public/index.html";
    }

    const ext = path.extname(filePath);

    let contentType = "text/plain";

    if(ext === ".html") contentType = "text/html";
    if(ext === ".css") contentType = "text/css";
    if(ext === ".js") contentType = "application/javascript";

    fs.readFile(filePath, (err, data) => {
        if(err){
            res.statusCode = 404;
            res.end("404 Not Found");
        } else {
            res.setHeader("Content-Type", contentType);
            res.end(data);
        }
    });

});

server.listen(3000, () => {
    console.log("Server running on port 3000 🚀");
});