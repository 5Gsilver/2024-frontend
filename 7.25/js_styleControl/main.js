//#box를 찾아서 변수에 담음 
const box = document.querySelector("#box"); 

console.dir(box); 

box.style.width ="300px"; 
box.style.height = "500px"; 
box.style.backgroundColor = "pink"; 
box.style.border = "none"; 
box.transform = "rotate(20deg)"; 

/*
//이벤트타겟에 이벤트를 실행했을 때 
이벤트타겟(요소).addEventListener("이벤트타입", function(){
//실행구문이 실행 
}); 

//es6 화살표함수 
요소.addEventListener("이벤트타입", ()=>{
  
  })
*/
// 클릭이벤트 
//a요소를 찾아서 link라는 변수에 담아 
const link = document.querySelector("a"); 
console.log(link); 

//링크를 클릭했을 때 
link.addEventListener("click", (e)=>{
  console.log(e);
  e.preventDefault(); 
  //아래 코드 실행 
  console.log("링크를 클릭했습니다"); 
})

//box1을 클릭했을 때 박스 배경이 핑크로 변경 
//45도 rotate

const box1 = document.querySelector("#box1"); 

box1.addEventListener("click", ()=>{

  // box1.style.backgroundColor = "pink"; 
  // box1.style.transform = 'rotate(45deg)';
  box1.style.cssText = "background-color:pink; transform:rotate(45deg)";
})