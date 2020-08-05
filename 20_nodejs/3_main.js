//모듈 사용하기
const calc2 = require("./3_module");
const calc3 = require("./3_module2");

//3_module.js
console.log(calc2.calc.add(1, 2));    //exports.calc = myCalc
console.log(calc2.calc.sub(1, 2));    //

//3_module2.js
console.log(calc3.mul(2, 3));   //module.exports = myCalc {};
console.log(calc3.div(2, 3));

console.log(exports === module.exports);    //true