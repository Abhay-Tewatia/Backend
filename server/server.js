const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {

   const filepath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

   const extName = String(path.extname(filepath)).toLowerCase();

   const mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
   }

   const contentType = mimeTypes[extName] || 'application/octet-stream';

   fs.readFile(filepath, (err, data) => {
      if (err) {
         if (err.code === 'ENOENT') {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found Broooo</h1>');
         } else {
            res.writeHead(500);
            res.end('Server Error');
         }
      } else {
         res.writeHead(200, { 'Content-Type': contentType });
         res.end(data, 'utf-8');
      }
   });

});

server.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`);
});

// res.end() = response ko finish karna (browser ko data bhejna + connection close karna)
// writeHead = response ka “header section” likhna