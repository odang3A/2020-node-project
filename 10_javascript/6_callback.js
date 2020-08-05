//5. 콜백 함수

function print(result) {
    console.log(result);
}

//동기식 처리
function add(a, b) {
    var sum = a + b;
    return sum;
}

print(add(1, 2));

//비동기식 처리
function add2(a, b, callback) {
    var sum = a + b;
    callback(sum);
}

add2(1, 2, print);

//익명함수
add2(1, 2, function(result) {
    console.log(result);
});

add2(1, 2, (result) => console.log(result));