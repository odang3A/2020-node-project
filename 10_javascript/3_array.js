//2. 배열
//배열 선언
var arr = [1, 2, 3, 4, 5];
console.log(arr.length);
console.log(arr[arr.length-1]);

var arr2 = [1, 2, "apple", "banana"];
console.log(arr2[2]);

//반복문
for(i=0;i<arr2.length;i++) {
    console.log(arr2[i]);

}

//for-in
for(i in arr2) {
    console.log(i, arr2[i]);    //i가 index
}

//for-of (ES6)
for(i of arr2) {
    console.log(i);
}

//splice 함수
//index, howmany, elements
let a = ["a", "b", "c"];
a.splice(1, 0, "d");    //a, b, d, c
console.log(a);

a.splice(2, 1, "x", "y");   //a, d, x, y, c
console.log(a);

const b = [1, 2, 3, 4, 5];
const result = b.find((item) => item >= 3); // 3
console.log(result);

const result2 = b.filter((item) => item >= 5);  //[ 5 ]
console.log(result2);

const result3 = b.map((item) => item * 2);
console.log(result3);