//4. 객체

//객체 선언
let a = {};     //빈 객체
let b = new Object();
console.log(typeof a);

//객체: 속성, 메소드 추가
//object.속성명, object["속성명"]
let Person = {};
Person.age = 19;
Person["name"] = "철수";

console.log("%d, %s", Person.age, Person["name"]);

//key : value
let Person2 = {
    age: 20,
    name: "영희"
};

console.log("%d, %s", Person2["age"], Person2.name);

let Person3 = {
    age: 21,
    name: "윤호"
};

Person3.print = function() {
    console.log("저는 %d살 %s입니다", this.age, this.name);
};

Person3.print();

let Person4 = {
    age: 10,
    name: "펭수",
    print: function() {
        console.log("저는 %d살 %s입니다.", this.age, this.name);
    }
};

Person4.print();

//Friends 배열 -> 객체 두개 (no, name)
let Friends = [
    {
        1: 1,
        2: "철수"
    },
    {
        no: 2,
        name: "영희"
    }
];

console.log(Friends);
console.log(typeof Friends[0]["1"]);
//영희 출력
console.log(Friends[1].name);
console.log(Friends[1]["name"]);

let grades = {
    data: {
        kor: 100,
        mat: 90,
        eng: 95
    },
    //print: function() {
    print() {
        for(subject in this.data) {     //key
            //console.log(subject + ": " + this.data.subject); -> 안됨
            //console.log(subject + ": " + this.data["subject"]); -> 안됨
            console.log(subject + ": " + this.data[subject]);
        }
    }
};

grades.print();

//수학 점수
console.log(grades.data.mat);
console.log(grades.data["mat"]);
console.log(grades["data"].mat);
console.log(grades["data"]["mat"]);

let id = 1;
let name = "홍길동"
//key: value    //key, value가 같을 경우 생략 가능
let obj = {
    id,
    name
}

console.log("%d, %s", obj.id, obj.name);