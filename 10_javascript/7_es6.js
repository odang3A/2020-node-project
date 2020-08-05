//6. ES6
//let(함수 레벨 스코프 -> 블록 레벨 스코프)
//const(상수)
let a = 10;
const b = 100;

//템플린 문자열(`: 백틱 사용)
let name = "펭", name2 = "수";
//My name is 펭 수.
let name3 = "My name is " + name + " " + name2 + ".";
console.log(name3);

let name4 = `My name is ${name} ${name2}.`;
console.log(name4);

//화살표 함수 (arrow function)
function hello(){
    console.log("hello");
}
hello();

var hello = function() {
    console.log("hello1");
}
hello();

(function() {
    console.log("hello2");
})();

(() => {
    console.log("hello3");
})();

(() => console.log("hello4"))();

var add = ((a, b) => a + b)(2, 3);

console.log(add);