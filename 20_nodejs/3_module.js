//모듈 만들기
//exports.xxx
/*
exports.add = (a, b) => {
    a + b;
}
exports.sub = (a, b) => {
    a - b;
}
exports.mul = (a, b) => {
    a * b;
}
exports.div = (a, b) => {
    a / b;
}
*/

let myCalc = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    }
}

exports.calc = myCalc;