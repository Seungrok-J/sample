// 객체의 구조 : {key:value, key:value,...}
// key : 객체의 property(속성), 문자열로 표현
// value : property의 값
// value에 들어갈수 있는 것 :  기본 자료형, 배열, 개체타입 데이터, 또는 함수

// 나를 정의하는 객체
// let person = {
//     'name': 'luke', 
//     'age': '27', 
//     'gender': 'male',
//     "info": function () {
//         console.log(this.name, this.age, this.gender);
//     }
// };
// person.age = 28;
// person.info();

// 객체의 종류
// 1. 내장객체(Built-in Object)
// -JavaScript 엔진에 내장되어 있는 객체
// -JS엔진이 구동되는 시점에 제공
// 종류 : Object, Function, Array, String, Number, Boolean, Date, RegExp, Error
let today =new Date();
console.log(today);
let t_year = today.getFullYear();
let t_month = today.getMonth();
let t_date = today.getDate();
let t_day= today.getDay();
console.log(t_year, t_month, t_date);

if(t_day == 0) {
    day ="sunday";
}else if(t_day == 1) {
    day ="monday";
}else if(t_day == 2) {
    day ="tuesday";
}else if(t_day == 3) {
    day ="wednesday";
}else if(t_day == 4) {
    day ="thursday";
}else if(t_day == 5) {
    day ="friday";
}else if(t_day == 6) {
    day ="saturday";
}
document.write(`오늘은 ${t_year}년 ${t_month+1}월 ${t_date}일 ${day}`)

// 2. 브라우저객체(Native Object)
// - BOM(브라우저객체모델) / DOM(문서객체모델)
// BOM의 종류: Window, Location, Navigator, Screen, History
// DOM의 종류: Document, Element, Node, Event, Range, StyleSheet, StyleSheetList, CSSStyleRule



// 3. 사용자 정의 객체(Hosted Object)
// - 사용자가 직접 만든 객체
// - JavaScript 엔진이 구동되는 시점에 생성
 
