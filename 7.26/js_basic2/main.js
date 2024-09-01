/*
변수명 작성시 유의점
1.숫자로 시작 불가
2. 특수문자 사용 불가(_,$)사용 가능
3. - 사용불가 (예약어 - 시스템에 이미 할당 뺄셈의 기능을 담당하는 예약어)
4. 예약어 사용 불가 (fuction, if, for)
5.대소문자 구분 (apple, APPLE은 서로 다른 변수)
6. 한글 불가 (특정상황에서는 오류.. 가급적 안쓰는게 좋음)
*/ 

/*
연산자 : 특정값을 도출하기 위한 연산을 처리하는 식별자


산술연산자 : +-.*%**
대입 연산자 : 특정값을 대입하기 이한 연산 = += -= *=
비교 연산자 : 복수개의 값을 서로 비교하기 위한 연산 (boolean ,ture ,false)

후위 연산자 : 변수 초기값을 먼저 활용하고 그 뒤에 값 연산 처리
전위 연산자 : 변수 초기값에서 연산을 먼저하고 그 뒤에 연산된 값을 활용
*/

let num = 0 
num += 1;
console.log(num);
num++;
console.log(num);
num-=1;
console.log(num);
num--;
console.log(num);


/*
=
*/

let result =  (2 > 3);
console.log(result) // false
result = (2 < 3);
console.log(result)  //true

result = (3 == "3");
console.log(result);

result = ( 3==="3");
console.log(result)

result = 1;
console.log(result++) // 1
console.log(result++); //2



/*
조건문
if(조건문){
	//조건의 겂이 참일때 이곳의 코드가 실행
}

if(조건문){
//조건이 참일때 이곳의 코드가 실행
}else{
//조건이 거짓일 때 이곳의 코드가 실행
}

if(조건){
	조건의 참일때 이곳의 코드가 실행
}else if(조건문2){
	조건문2가 참일때 이곳의 코드가 실행
}else{
	모든 조건문이 거짓일때 이곳의 코드가 실행
}
*/ 

const main = document.querySelector("main");

let now = new Date();
console.log(now.getHours());
now = now.getHours();

if(now >= 0 && now < 9){
	main.style.backgroundColor = 'pink';
}
if(now <= 17){
	main.style.backgroundColor = 'lightblue';
}
if(now <= 24);{
	main.style.backgroundColor = 'violet';
}



 