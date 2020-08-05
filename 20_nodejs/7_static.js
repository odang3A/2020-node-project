const http = require("http");
const path = require("path");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

//127.0.0.1:3000/dog.jpg
const server = http.createServer((req, res) => {
    const obj = path.parse(req.url);
    const filename = obj.base;   //dog.jpg
    //D:\NodeProjects\디미고\응용 프로그래밍\20_nodejs\images\dog.js
    const imagePath = `${__dirname}${path.sep}images${path.sep}${filename}`;
    
    fs.readFile(imagePath, (err, data) => {
        if(err) {
            res.statusCode = 404;
            res.end("404, Not Found");
            return;
        }
        res.statusCode = 200;
        //text/plain, text/html, application/json
        res.setHeader("Content-Type", "image/jpeg; charset=utf-8");
        res.end(data);
    });
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});