  /*
  
  //문서에서 #title을 찾아서 변수 title에 담기
  const title = document.querySelector("#title");
  //콘솔창에 title을 출력
  console.log(title); 


  const frame = document.querySelector("#wrap"); 
  console.log(frame);

  const box1 = document.querySelector("#wrap .box1"); 
  console.log(box1); 

  const item = document.querySelector("#wrap article"); 
  console.log(item); 

  // const items = document.querySelectorAll("#wrap article"); 
  // console.log(items); 
  // console.log(items[0]); 
  // console.log(items[1]); 
  // console.log(items[2]); 

  const items = document.querySelectorAll("#wrap article"); 
  

  for(let item of items){
    console.log(item);
  }

  */
/*
  변수 : 변할 수 있는 값 
  상수 : 변하지 않고 고정되어 있는 값 

  변수 초기화& 변수 선언 - 변수만드는 방법

  var (es5) let , const (es6)

  //변수선언 
  var num1; 
  //변수에 값 대입
  num1 = 1; 

  //변수 초기화 - 변수를 선언하면서 값을 대입 
  var num1 = 1; 
  console.log(num1); 

   num1 = 2; 
  console.log(num1); 
    */
  /* 
 //let 
  let num2; 
  num2 =1; 
  console.log(num2); 
  //값은 바꿀 수 있음 
  num2 = 2; 
  console.log(num2); 
  //하지만 이미 선언한 변수명은 다시 선언할 수 없음 
  let num2 = 3; 
  console.log(num2); 
  */
/*
  //const 
  //const로 정의된 상수값은 다시 바꿀 수 없음 
  const num3 =3; 
  num3= 4; 
  console.log(num3);

  */

  /*
  자료형 
  string (문자열)
  number (숫자)
  array (배열) - 대괄호 안에 요소들을 쉼표로 구분하여 나열
  boolean(참거짓) - true /false 
  object(객체) - 중괄호 안에 속성과 속성값을 쌍으로 나열
  null - 값이 비어있다는 뜻 
  undefined - 정의가 되어있는 않다는 뜻으로 일조의 코드오류

  typeof - 자료형 검사 
  */
/*

  const name1 = "홍길동"; 
  console.log(typeof name1); 

  const age = 20; 
  console.log(typeof age); 

  const isFemale = false; 
  console.log(typeof isFemale); 
  
  const fruits = ["apple", "banana", "mango"]; 
  console.log(fruits[0]); 
  console.log(typeof fruits); 

  const pos = null; 
  console.log(typeof pos);

  const student = {
    name: "홍길동", 
    age: 20, 
    isFemale :false
  }
  console.log(student);  
  console.log(student.age); //키값 불러오기 객체.키 
  console.log(typeof student); 
  console.log(student["isFemale"]); 
*/

/*
연산자 
*/
/*
let result; 
//더하기 
result = parseInt(0.1 + 0.2); 
console.log(result); 
//빼기 
result = 3 - 2; 
console.log(result); 
//나누기 
result = 4 / 2; 
console.log(result); 
//곱하기 
result = 3 * 2; 
console.log(result); 
//나머지 구하기 
result = 6 % 4; 
console.log(result); 
//제곱 
result = 3 ** 2; 
console.log(result); 

//문자열로 변환 String() , .toString() 
let num5 = String(123);
console.log(typeof num5);  

num5 = (123).toString(); 
console.log(typeof num5);  

result = String(false); 
console.log(typeof result); 

result = true.toString(); 
console.log(typeof result); 
*/
//문자열을 숫자로 변환 
result = Number("3"); 
console.log(typeof result);
result = Number(""); //빈문자열은 숫자로 바꾸면 0 이 return
console.log(typeof result); 
/*
let y = "5"; 
let x = +y;
console.log(typeof x); 

let n = "홍길동"; 
let m = +n; 
console.log(m);//NaN Not a Number

result = Number(false); 
console.log(result); //0 
result = Number(true); 
console.log(result); //1 

result = "5"+2; 
console.log(typeof result); //52 string

result = "5"-2; 
console.log(typeof result); //3
*/

/*
반복문 
for문 : 특정횟수만큼 구문안쪽의 코드 실행 
for/of반복문 : 반복되는 객체의 값만큼 반복 
for/in반복문 : 객체속성만큼 반복

for문 
for(초기변수값; 반복횟수; 변수값증감){
//코드 실행 
}

for(let i=0; i<group.length; i++){
//코드실행 
}

*/
/*
const items = document.querySelectorAll("#wrap article"); 
console.log(items); 
for(let i=0; i<items.length; i++){
  console.log(i); 
  console.log(items[i]);
}

//0 이 출력되고 값이 1증가하여 1 
//3보다 작아야 하는 조건 만족 -> 1출력 -> 값 1증가 2 
//3보다 작아야하는 조건만족 -> 2출력 -> 값 1증가 3 
//3보다 작아야 하는 조건불만족 -> 출력하지 않고 구문종료 
*/
/*
// 안녕하세요 5번 출력하기 
//먼저 빈문자열 만들어서 변수에 저장 
let txt=''; 
//5번 반복하는 반복문 만들기 
for(let i=0; i<5; i++){
  //빈문자열에 안녕하세요 문자열 더하기 
  // txt+="안녕하세요"+ i + "<br>"; 
  txt+=`안녕하세요 ${i} <br>`;
}
// 처음 빈문자열에 1번실행하면 안녕하세요 텍스트를 더하고 종료 
// 두번째실행하면 "안녕하세요" + "안녕하세요"

document.querySelector(".txt").innerHTML = txt; 
*/

/*
//for/of문 
const cars = ["BMW", "Volvo", "Mini"]; 

let txt = ''; 
for(let item of cars){
  txt+= item + "<br>"; 
}

document.querySelector(".txt").innerHTML = txt; 

const items = document.querySelectorAll("#wrap article"); 

for(let item of items){
  console.log(item);
}
*/
/*
//for/in반복문 - 객체반복문 

let person = {
  firstName : "Hong", 
  lastName : "Gildong", 
  age :20 
}

let txt = ''; 
for(let x in person){
  txt += person[x] + " "; 
}

document.querySelector(".txt").innerHTML = txt; 
*/
/*
console.log() : 콘솔창에 출력 
innerHTML : html요소안에 출력 (주의: 요소가 전체적으로 덮어쓰기 됨) 
window.alert() : 경고창을 띄우면서 출력 
.innerText() :  요소 안에 텍스트 출력 
.textContent : 요소 안에 텍스트 출력 


let txt = "안녕하세요"; 
// document.querySelector(".txt").innerHTML = txt; 
// window.alert("안녕하세요!");
*/

// let txt = "안녕"; 
// document.querySelector(".txt").innerText = txt; 

// let person = "홍길동 님"; 
// document.querySelector(".txt").textContent = person;

//화면에 보이는 텍스트 return해줌 
let txt = document.querySelector(".txt").innerText; 
console.log(txt); 
//dispaly:none으로 처리한 텍스트도 return해줌 
let txt1 = document.querySelector(".txt").textContent; 
console.log(txt1);

// const list = document.querySelector(".list"); 
// console.log(list);
// const items = list.children; 
// console.log(items);
// // console.log(items[0]);
// // console.log(items[1]);
// // console.log(items[2]);
// // console.log(items[3]);

// const item2 = document.querySelector(".list2"); 
// console.log(item2.parentElement);

const li = document.querySelector("li");
//직계부모 선택하기  
const pr = li.parentElement; 
console.log(pr);
//가까운 부모중 선택하기 
const main = li.closest('main'); 
console.log(main); 

const list3 = document.querySelector(".list3"); 
//이전형제요소 선택하기 
console.log(list3.previousElementSibling); 
//다음형제요소 선택하기 
console.log(list3.nextElementSibling); 


// string관련 메소드 

let text = "Hello world"; 
console.log(text.length); //11 

//indexOf 특정문자에서 시작하는 부분의 특정 문자열의 위치 반환 
console.log(text.indexOf("o")); //4 
console.log(text.indexOf("x")); //-1 찾는 값이 없을때는 -1 반환 

//search 특정문자에서 시작하는 부분의 특정 문자열의 위치 반환 
console.log(text.search("o")); //4 
console.log(text.search("x")); //-1 찾는 값이 없을때는 -1 반환

//slice(시작위치, 끝위치) 특정 문자에서 순서값을 넣어서 문자열 자르기 
console.log(text.slice(3, 6)); //lo
//substring(시작위치, 끝위치) 특정 문자에서 특정부분의 순서값을 넣어서 문자열을 자르기 
console.log(text.substring(3,6)) //lo
//substr(시작위치, 갯수) 특정문자에서 특정위치부터 특정갯수만큼 문자열 자르기 
console.log(text.substr(3,6)); //lo wor 

//replace("원래문자열", "바뀔문자열") 원래문자열을 바뀔문자열로 바꿈 
console.log(text.replace("world", "JS"));  //Hello JS 

//toUpperCase() 대문자로 바꾸기 
console.log(text.toUpperCase()); //HELLO WORLD 

//toLowerCase() 소문자로 바꾸기 
console.log(text.toLowerCase()); //hello world 

//concat() 두개의 문자열 연결 
let text2 = " JS"; 
console.log(text.concat(text2)); //Hello World JS 

//split("구분점"); 구분점을 기준으로 문자열을 분리해서 배열로 반환 
console.log(text.split(" ")); // ["Hello", 'world"] 
