/* 
article을 변수에 담아 

article을 클릭했을 때 
비디오를 
.play() 재생
.pause() 중지

article을 클릭했을 때 
aside에 on을 추가하여 활성화 
h2 p video article에 맞춰서 속성변경/ 텍스트변경 /경로 변경 

getAttribute("속성명")
setAttribute("속성명", 속성값)
.innerText 
*/


const items = document.querySelectorAll("article"); 
console.log(items); 

for(let el of items){
  el.addEventListener("mouseenter", ()=>{
    el.querySelector("video").play(); 
  })
  
  el.addEventListener("mouseleave", ()=>{
    el.querySelector("video").pause(); 
  })
}

