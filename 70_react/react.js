// 1. Spread 연산자 (ES6, 전개 연산자)
// 배열
const num = [1, 2, 3, 4, 5];

console.log(num);
console.log(...num);
console.log([...num]);
console.log([...num, 6]);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a, b, rest);

// 객체
const std = { id: 1, name: "홍길동" };
const std2 = { addr: "안산", phone: "010-1111-2222" };
const std3 = { ...std, ...std2};

console.log(std3);


// 2. 비구조화 할당(구조 분해 할당)
// 배열
const arr = [1, 2, 3];
console.log(arr[0], arr[1], arr[2]);

// const one = arr[0];
const [one, two, three] = arr;
console.log(one, two, three);

// 객체
const obj = {
    id: 1,
    text: "hello",
};
console.log(obj.id, obj.text);

// const id = obj.id;
const { id, text } = obj;
console.log(id, text);

const arrobj = [
    { id: 1, text: "hello" },
    { id: 2, text: "hi" },
    { id: 3, text: "bye" },
];

const [first, second, third] = arrobj;
console.log(first, second, third);

// const id1 = arrobj[0].id;
const [
    { id: id1, text: text1 },
    { id: id2, text: text2 },
    { id: id3, text: text3 },
] = arrobj;
console.log(id1, text1);
console.log(id2, text2);
console.log(id3, text3);

let c = 1, d = 2;
[c, d] = [d, c];
console.log(c, d);


// 3. 불변성 유지
// 객체
const object = {
    a: 1,
    b: 2,
};
object.b = 3;   // (X) -> 불변성이 깨짐

const  newObject = {
    ...object,  // 기존 값을 집어넣고
    b: 3,       // 새로운 값으로 덮어씀
};  // (O) -> 불변성 유지

// 배열
const todo = [
    {
        id: 1,
        text: "아침밥 먹기",
        done: true,
    },
    {
        id: 2,
        text: "점심밥 먹기",
        done: false,
    },
];

/*
// 불변성이 깨짐
// 추가
todo.push({
    id: 3,
    text: "저녁밥 먹기",
    done: false,
});
console.log(todo);

// 삭제
todo.splice(1, 1);
console.log(todo);

// 수정
const selected = todo.find((item) => item.id === 3);
selected.done = !selected.done;
console.log(todo);
*/

// 불변성 유지
// 추가
const inserted = todo.concat({
    id: 3,
    text: "저녁밥 먹기",
    done: false,
});

inserted[0].done = false;
console.log(todo[0].done, inserted[0].done);
console.log("************");    // map 사용

console.log(todo);
console.log(inserted);

// 삭제
const filtered = inserted.filter((item) => item.id !== 2);
console.log(filtered);

// 수정
const toggled = filtered.map((item) => item.id === 3 ? 
    {...item, done: !item.done} : item );
console.log(toggled);


// 4. 라이브러리 가져오기
// node.js : CommonJS에 정의된 require 사용
//const moment = require("moment");

// ES6(ES2015)에서 새로 도입된 키워드
// react :
//import moment from "moment";

// 내보내기
// node.js
module.exports = {};

// react
//export default 컴포넌트명;

// ES6 : 계산된 속성명(computed property name)
const key = "name";
const obj2 = {
    [key]: "value",
}

console.log(obj2.key);
console.log(obj2.name);

let i = 0;
const obj3 = {
    ["key" + ++i]: i,
    ["key" + ++i]: i,
    ["key" + ++i]: i,
}

console.log(obj3);