// const box = document.querySelector('#box');

// //box에 mouseenter 했을 때
// box.addEventListener('mouseenter', () => {
// 	box.style.backgroundColor = 'hotpink';
// });

// //box에서 mouseleave 했을 때
// box.addEventListener('mouseleave', () => {
// 	box.style.backgroundColor = 'lightblue';
// });

// /*
// e.currentTarget : 이벤트가 발생한 요소
// */

// box.addEventListener('mouseenter', (e) => {
// 	console.log(e.currentTarget);
// 	// e.currentTarget.style.backgroundColor = 'hotpink';
// });

// let list = document.querySelectorAll('.list');
// for (let el of list) {
// 	el.addEventListener('click', (e) => {
// 		console.log(e.currentTarget);
// 	});
// }

// const btnplus = document.querySelector('.btnplus');
// const btnminus = document.querySelector('.btnminus');
// const box2 = document.querySelector('#box2');

// let num = 0;
// let count = 45;
// btnplus.addEventListener('click', () => {
// 	++num;
// 	console.log(num);
// 	box2.style.transform = `rotate(${num * count}deg)`;
// });

// btnminus.addEventListener('click', () => {
// 	--num;
// 	console.log(num);
// 	box2.style.transform = `rotate(${num * count}deg)`;
// });

// const wrap = document.querySelector('#wrap');

// wrap.addEventListener('click', () => {
// 	//wrap.queryselector("article").style.backgroundColor = "red";

// 	//클래스 on이 이미 있는지 판단
// 	let ison = wrap.classList.contains('on');
// 	console.log(ison);

// 	if (ison) {
// 		wrap.classList.remove('on');
// 	} else {	
// 		wrap.classList.add('on');
// 	}
// });


//toggle 메소드
// wrap.addEventListener('click', () => {
// 	wrap.classList.toggle('on');
// });


//삼항연산자
// (ison) ? wrap.classList.remove('on') : wrap.classList.add('on');


/*
함수의 이해

//함수 호출
함수();

함수정의 
function 함수() {
//실행 코드

자주쓰는 실행 코드들을 블록단위로 묶어 패키지화 한 것
자주쓰는 코드들을 기능별로 묶어서 재사용하기 편하게 만든 것
*/

// plus();	

// function plus(num1 , num2) {
// 	console.log(num1 + num2);
// }	

// 인수값을 자료형 검사 (typeof)해서
//숫자가 아니라면
//console.log('숫자를 입력하세요');

function plus(num1, num2) {
	if (typeof num1 !== 'number' && typeof num2 !== 'number') {
		console.log('숫자를 입력하세요');                                                          
		console.log(num1 + num2);
	}}

	//연산부호에 따라
	//+라면 plus()
	//-라면 minus()
	//*라면 multiply()
	// /라면 divide()

calc(2, 3, '+');
calc(2, 3, '-');
calc(2, 3, '*');
calc(2, 3, '/');

function calc(num1, num2, type){
	if(type ==='+') plus(num1, num2);
	if(type ==='-') minus(num1, num2);
	if(type ==='*') multiply(num1, num2);
	if(type ==='/') divide(num1, num2);
}


/* 
함수의 반환값
- 함수의 실행 결과를 반환하는 것
- 함수 안에서 내보내고 싶은 값을 return 키워드를 사용해서 반환
- return 키워드를 만나면 함수는 종료
- 리턴값을 쓰는 이유는 함수의 결과를 다른 변수에 저장하거나 
	다른 함수의 인수로 사용하기 위함
*/


//함수 내부의 값을 밖으로 반환하기 위한 리턴문
function plus2(num1, num2) {
	let result = num1 + num2;
	console.log(result);
	return result;
}

let abc = plus2(2, 3);
console.log(abc);

//함수 종료를 위한 리턴문
function minus2(num1, num2){
	//num1 num2 인수값중 하나라도 입력하지 않으면
	if(num1 == undefined || num2 == undefined){
		//에러메세지 출력
		console.error('인수를 입력하세요');
		return;
	}
	
	//result에 결과를 담아서
	let result = num1 - num2;
	//콘슬문으로 출력
	console.log(result);
} 
