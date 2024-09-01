/*
array : 값만 쉼표로 구분해서 대괄호안에 나열 
*/

//배열만드는 법 대괄호안에 0개이상의 요소를 넣는다 
const numbers = [1]; 
console.log(numbers); 

//배열만드는 법 - Array.of 
const arr = Array.of(1,2,3, "string"); 
console.log(arr); 

//배열만드는 법 - Array.from 
//const result = Array.from({length:2, 0:'a', 1:'b'}); 
//console.log(result); 

const result1 = Array.from('Hello'); 
console.log(result1); 

const result2 = Array.from({length:3}, (_, i)=>i +1); 
console.log(result2); 

//배열요소에 접근 - 배열명[순번]
const numbers1 = [1,2]; 
console.log(numbers[0]); //1
console.log(numbers[4]); //undefined 

//배열의 요소값 변경 배열명[순번] = 값 
numbers1[0] = 0; 
console.log(numbers1);

numbers1[100] = 100; 
console.log(numbers1); // [0,2, empty*98, 100] 희소배열

//배열 요소의 갯수 - 배열.length 
console.log(numbers1.length); 

//split("") 구분점을 기준으로 나눠서 배열로 반환 
let fruit = "apple banana melon"; 
fruit = fruit.split(" "); 
console.log(fruit); 

//join() - 배열을 구분점을 주어서 문자열로 변환 
let fruit1 = ["apple", "banana", "melon"]; 
fruit1 = fruit1.join(" ");
console.log(fruit1);  

//toString() - 배열을 문자열로 변환 
// fruit1 = fruit1.toString(); 
// console.log(fruit1); 

const arr2 = [1,2,3]; 

//delete 연산자 - 객체의 프로퍼티 삭제 
delete arr2[1]; 
console.log(arr2); //[1, empty, 3]


//splice(순번, 제거할 요소갯수 ) 
let fruit3 = [ "apple", "banana", "melon"]; 
// fruit3.splice(1,1); //1번째 banana 삭제 
// console.log(fruit3); // ['apple', 'melon']

// fruit3.splice(1); //1번째부터 모두 삭제 
// console.log(fruit3); 

//splice(순번, 제거할 요소갯수, 추가할요소)
fruit3.splice(1,1, 'orange'); 
console.log(fruit3);['apple', 'orange']  /['apple', 'orange', 'melon']

//indexOf 
const arr3 = [1,2,2,3]; 
console.log(arr.indexOf(2)); //배열에서 처음 발견된 값의 순번 반환 
console.log(arr3.indexOf(4)); //-1 찾는값이 없을 때 -1반환

console.log(arr3.indexOf(2,2)); //2
//두번째 인수는 검색시작위치

const foods = ['apple', 'banana', 'orange']; 
if(foods.indexOf('orange') === -1){
  foods.push("orange"); 
}
console.log(foods); //['apple', 'banana', 'orange']

console.log(foods.lastIndexOf("orange")); //2 

//includes() - 배열에 해당요소가 있는지 검색 true/false 반환
if(!foods.includes('orange')){
  foods.push('orange'); 
}
console.log(foods); 

console.log(foods.includes("apple")); //true 
console.log(foods.includes("pie")); //false 

//배열에 요소 추가  - 배열명[순번] = 요소 
let numbers2 = [1,2,3,4]; 
//numbers2[6] = 6; 

//배열명[배열명.length] = 요소 
numbers2[numbers2.length] = 5; 
console.log(numbers2); 


//배열.push(요소) 배열의 끝에 요소 추가 
const fruit2 = ['melon', 'banana', 'apple']; 
fruit2.push("orange"); 
console.log(fruit2); 
fruit2.push('lemen','strawberry'); 
console.log(fruit2); 

//pop() 배열의 끝의 마지막 요소를 제거 
const arr1 =[1,2]; 
let result3 = arr1.pop(); 
console.log(result3); //2 배열에서 제거된 요소 
console.log(arr1); // [1]

//unshift() - 배열의 앞부분에 요소를 추가 
const arr4 = [1,2]; 
let result4 = arr4.unshift(3,4); 
console.log(result4);  //4 배열의 변경된 length값 반환
console.log(arr4); //[3,4,1,2]

//shift() - 배열의 앞부분에서 요소를 제거 
let result5 = arr4.shift(); 
console.log(result5); //3  
console.log(arr4); // [4, 1, 2]


//concat - 새로운 배열을 생성해서 두 개의 배열을 합침
const foods1 = ['orange', 'melon']; 
const foods2 = ['banana', 'apple']; 

const newFoods = foods1.concat(foods2); 
console.log(newFoods); 
console.log(foods1); 
console.log(foods2); 


const arr5 = [3,4]; 

let result = [1,2].concat(arr5); 
console.log(result); //[1,2,3,4]

result = result.concat(5,6); 
console.log(result); //[1, 2, 3, 4, 5, 6]

result = [1,2].concat([3,4]); 
console.log(result); //[1, 2, 3, 4]

//스프레드 연산자 ... 
result = [...[1,2], ...[3,4]];
console.log(result); //[1, 2, 3, 4]

const arr6= [1,2]; 
const newArr = [...arr6, 3]; 
console.log(newArr); //[1, 2, 3]

console.log(...[1,2,3]); //1 2 3
console.log(..."Hello"); //H e l l o


const todos = ['할일1', '할일2', '할일3']; 
for(const i in todos){
  console.log(`${i}번째 할일: ${todos[i]}`); 
}

//배열전용반복문  
//forEach()  

const colors = ['red','blue','green']; 
colors.forEach(function(el, index, arr){
  console.log(el); 
  console.log(index); 
  console.log(arr); 
});

//map() 
colors.map((el,index,arr)=>{
  console.log(el); 
  console.log(index); 
  console.log(arr); 
}); 


const classmate = ['철수','영희', '훈이']; 
const newClassmate = classmate.map((item)=>(item+"어린이"))
console.log(newClassmate); 


 //item.name: "", school:"" 
const classmate1 = [
  {name:"철수"}, 
  {name:"영희"}, 
  {name:"훈이"}
]; 

const newclassmate1 = classmate1.map((item)=>
({name: item.name + "어린이", school :"떡잎유치원"}))

console.log(newclassmate1); 

//filter -배열의 원소를 필터링해줌 
const num =[1,2,3,4,5,6,7,8,9,10]; 
let newNum = num.filter((item)=>(item>=8)); 
console.log(newNum); 