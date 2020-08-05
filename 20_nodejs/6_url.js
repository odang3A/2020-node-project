//기본모듈
//url: URL 처리하는 모듈
const url = require("url");
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    //string -> object
    //127.0.0.1:3000/hello
    //Query String
    const obj = url.parse(req.url, true);
    console.log(obj);
    const year = obj.query.year;
    const cls = obj.query.class;
    const name = obj.query.name;

    //화면에 "3학년 6반 강현우입니다." 출력
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end(`${year}학년 ${cls}반 ${name}입니다. hello.`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});