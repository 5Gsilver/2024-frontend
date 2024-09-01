/*
DOM 탐색
자바스크립트에서 선택할 수 있는 HTML요소
*/ 

const _ul = document.getElementsByTagName("ul")[0];
console.log(_ul); 

const items = document.getElementsByClassName("item")[2];
console.log(items);

const list4 = document.getElementById("list4");
console.log(list4);

const ul = document.querySelector("ul");

const $items = document.querySelectorAll(".item");
console.log($item);

// const $list4 = document.querySelector("ul #list4");
// console.log($list4);

// for(let el of ul){
// 	console.log(el);
// }

$items[0].addEventListener("click",()=>{
	console.log("click!!");
})

$items[1].addEventListener("click",()=>{
	console.log("click!!");
})

$items[2].addEventListener("click",()=>{
	console.log("click!!");
})

$items[3].addEventListener("click",()=>{
	console.log("click!!");
})


for(let el of $items){
	el.addEventListener("click",()=>{
		console.log("click!!");
	})
}

for (let i=0; i<$items.length; i++){
	$items[i].addEventListener("click",()=>{
		console.log("click!!");
	})
}