//각 버튼을 클릭했을 때 
//클릭한 버튼은 활성화 - on 추가 
//나머지 버튼은 비활성화 - on 제거 
//해당하는 박스가 활성화 -on 추가 
//나머지 박스는 비활성화 - on 제거 

//tab을 찾아서 변수로 저장 
const tab = document.querySelector("#tab");
//tab의 자식요소인 ul li를 모두 찾아 변수로 저장  
const btns = tab.querySelectorAll("ul li"); 
//tab의 자식요소인 article div를 모두 찾아 변수로 저장 
const boxs = tab.querySelectorAll("article div"); 

//forEach로 btns의 갯수만큼 반복을 돌면서 
btns.forEach((el,index)=>{
  //각 버튼을 클릭했을 때 
  el.addEventListener("click", ()=>{
    //버튼활성화 함수 호출 
    activation(btns, index); 
    //박스활성화 함수호출
    activation(boxs, index); 
  })
})

//활성화함수 정의 
function activation(items, index){
  //모든박스 비활성화 
  for(let el of items){
    el.classList.remove("on"); 
  }
  //해당순번 박스 활성화 
  items[index].classList.add("on"); 
}

/*
for(let el of boxs){
    el.classList.remove("on"); 
  }
  //해당순번 박스 활성화 
  boxs[index].classList.add("on");

*/