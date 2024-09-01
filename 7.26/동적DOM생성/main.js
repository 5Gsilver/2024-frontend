/* 
1. main태그를 찾아서 변수에 저장

2. 빈문자열을 만들어 변수에 저장 

3.article을 만들어 텍스트변수에 추가 

4.화면에 출력 
*/

const main = document.querySelector("main"); 

//빈문자열 변수로 저장 
let tags = ""; 

//반복문으로 10번 반복 
for(let i=0; i<10; i++){
  //기존 빈 변수에 article문자열을 계속 누적해서 붙여줌 
  tags += `<article>
              <img src="img/pic${i}.jpg"/>
        </article>
`; 
}

console.log(tags); 

main.innerHTML = tags; 