/*
날짜 관련 메소드  
Date() 객체 

//new 를 붙여서 복사하여 호출 
const now = new Date(); 
console.log(now);

const days = ['Sunday', 'Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saterday']; 

//연도 
console.log(now.getFullYear()); 

//월 0~11 
console.log(now.getMonth() + 1); 

//일
console.log(now.getDate()); //31

//요일 0~6 
console.log(days[now.getDay()]); //3 수요일 

//시간 
console.log(now.getHours());  //13

//분
console.log(now.getMinutes()); //29 

//초 
console.log(now.getSeconds()); //24
*/

const hours = document.querySelector(".hours"); 
const min = document.querySelector(".minutes"); 
const sec = document.querySelector(".seconds"); 

setInterval(()=>{
  let now = new Date(); 

  hours.innerText = now.getHours();
  min.innerText = now.getMinutes(); 
  sec.innerText = now.getSeconds(); 
},1000)



/*
//정해진시간마다 안쪽의 코드 실행 
setInterval(()=>{
  //실행코드 
  }, 반복시간)

//delay시간 후에 안쪽의 코드 실행 
setTimeout(()=>{
 //실행코드 
  },delay)
*/

console.log("1");
setTimeout(()=>{
  console.log('2'); 
},3000); 
console.log('3'); 