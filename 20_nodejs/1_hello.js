//웹 어플리케이션 = 프런트엔드(화면) + 백엔드(서버), 풀스택
//JS => 프론트엔드 (브라우저 내에서 동작)
//HTML, CSS, Javascript

//1. 크롬 V8 엔진 -> 용도 변경(브라우저 밖에서도 쓸수 있게)
//2. 이벤트 기반의 비동기 I/O
//3. 모듈 시스템 가반 -> 파일 형태로 모듈 관리 (CommonJS 표준 스펙)

//Node.js로 Hello, World 출력
//1. REPL
//2. 콘솔에 출력
console.log('Hello, World');

//3. 웹 서버로 출력
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//HTTP request(요청), response(응답)
const server = http.createServer((req, res) => {
    const url = req.url;
    // console.log(1 == "1");  //값만 비교
    // console.log(1 === "1"); //값 + 타입 비교
    if(url === "/") {
        res.statusCode = 200;   //http status code 200 = OK
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World');
    } else if(url === "/html") {    //127.0.0.1:3000/html
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<!DOCTYPE html");
        res.write("<html>");
        res.write("<body><h1>Hello, World</h1></body>");
        res.end("</html>");
    } else if(url === "/json") {    //127.0.0.1:3000/json
        const data = { msg: "Hello, World" };
        res.statusCode = 200;   //http status code 200 = OK
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    } else {    //그 외 url인 경우 404, Not Found 출력
        // res.statusCode = 404;
        // res.setHeader('Content-Type', 'text/plain');
        // res.end("404, Not Found");
        const data = { msg: "404, Not Found" };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data.msg);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});