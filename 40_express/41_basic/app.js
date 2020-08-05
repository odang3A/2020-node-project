const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();
const port = 3000;

//true: qs(확장모듈), false: querystring(기본모듈)
app.use(bodyParser.urlencoded({ extended: false }));

//바디메시지가 JSON 형식으로 전달되는 경우
app.use(bodyParser.json());

//정적파일 위치 설정
//127.0.0.1:3000/music.html
app.use("/", express.static("public"));
//127.0.0.1:3000/static/music.html
//app.use("/static", express.static("public"));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);

//로깅 미들웨어 설정
app.use(logger("dev")); //tiny < dev < short < common < combined


//GET방식
//127.0.0.1:3000/hello
app.get("/", (req, res) => res.send("Hello, World!!"));

//QueryString 방식
//127.0.0.1:3000?singer=아이유&title=좋은날
app.get("/music", (req, res) => {
    //console.log(req);
    //아이유의 좋은날입니다.
    //비구조화 할당
    const { singer, title } = req.query;
    res.send(`query string(get) -> ${singer}의 ${title}입니다`);
});

//URL 파라미터 방식(get) (REST API)
//html://127.0.0.1:3000/music/아이유/좋은날
app.get("/music/:singer/:title", (req, res) => {
    //비구조화 할당
    const { singer, title } = req.params;
    res.send(`url parameter(get) -> ${singer}의 ${title}입니다.`);
});


//POST 방식
//content-type: x-www-form-urlencoded
app.post("/music", (req, res) => {
    //비구조화 할당
    const { singer, title } = req.body;
    res.send(`urlencoded(post) -> ${singer}의 ${title}입니다.`)
});

//URL 파라미터 방식(post) (REST API)
app.post("/music/:singer/:title", (req, res) => {
    //객체 구조 분해 할당 (비구조화)
    const { singer, title } = req.params;
    res.send(`url parameter(post) -> ${singer}의 ${title}`);
});


//PUT
//JSON으로 전송
app.put("/music/:id", (req, res) => {
    const id = req.params.id;
    const { singer, title } = req.body;
    // {id} -> 아이유의 좋은날로 수정됨
    res.send(`${id} -> ${singer}의 ${title}로 수정됨`);
});


//여기까지 내려왔다는 것은 위에서 처리가 되지 않음
app.use((req, res, next) => {
    //const error = new Error("없는 페이지입니다!!");
    //error.code = 404;
    //next(error);
    throw new Error();
});

//오류 처리 미들웨어
app.use((err, req, res, next) => {
    //if(err.code) res.status(err.code);
    //else res.status(500);   //Internal Server Error
    res.status(err.code || 500);
    //if(err.message) res.send(err.message);
    //else res.send("Internal Server Error");
    res.send(err.message || "Internal Server Error");
});

/*
    CRUD
    create, read, update, delete
    HTTP Method: GET(조회), POST(생성), PUT(수정), DELETE(삭제)
    HTTP Message = Header + Body
    GET: Hdader부에 데이터를 전송, 길이의 제한 있음, Caching 있음
    POST: Body부에 데이터를 전송, 길이의 제한 없음, Caching 없음
    채용시스템: company.com/apply?id=10002 -> 해킹사고
*/

//GET (조회)
// - query string -> req.query.xxx
// - url parameter -> req.params.xxx
//POST (생성)
// - form body -> req.body.xxx (body-parser)
// - url parameter -> req.params.xxx
//PUT (수정)
//DELETE (삭제)

//REST API
//1. HTTP 용청 시 자원을 명시 (명사)
// ex) GET /users, GET /users/1
// test.com/users : GET, users/1 : GET (조회)
// test.com/users : POST (생성)
// test.com/users : PUT (수정)
// test.com/users : DELETE (삭제)
// (bad case)
// test.com/users/search
// test.com/users/cerate
// test.com/users/update
// test.com/users/delete

/*
    const a = (b) => (c) => b * c;
    babel
*/