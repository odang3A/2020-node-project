//기본모듈
//fs: 파일시스템을 다루기 위한 모듈
const fs = require("fs");

//파일 읽기
//동기식    (호출한 순서대로 실행)
try {
    const data = fs.readFileSync("hello.txt", "utf-8");
    console.log(data);
} catch(exception) {
    console.error("동기식 Error: " + exception);
    return;
}
console.log("동기식 읽기 완료");

//비동기식
fs.readFile("hello.txt", "utf-8", (err, data) => {
    if(err) {
        console.error("비동기식 Error: " + err);
    } else {
        console.log(data);
    }
});
console.log("비동기식 읽기 완료");