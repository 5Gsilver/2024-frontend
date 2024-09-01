/* 
.controls .btns li을 클릭했을때
article img src값 변경

getAttribute("속성") - DOM의 해당속성 알아내기
DOM.setAttribute("속성", "값") - DOM의 해당속성 변경하기
*/ 

//요소들을 변수로 저장

const img = document.querySelector(".showBox	img");
const btns = document.querySelectorAll(".btns li");
const tiles = document.querySelectorAll("#gallery h1");

console.log(btns)
//버튼을 클릭했을 때 이벤트구문

// btns[0].addEventListener("click", (e) => {
// 	let imgsrc = btns[0].querySelector("a").getAttribute("herf");
// 	console.log(imgsrc);
// 	img.setAttribute("src", imgsrc);
// })

// btns[1].addEventListener("click", (e) => {
// 	let imgsrc = btns[1].querySelector("a").getAttribute("herf");
// 	console.log(imgsrc);
// 	img.setAttribute("src", imgsrc);
// })

// btns[2].addEventListener("click", (e) => {
// 	let imgsrc = btns[2].querySelector("a").getAttribute("herf");
// 	console.log(imgsrc);
// 	img.setAttribute("src", imgsrc);
// })

// btns[3].addEventListener("click", (e) => {
// 	let imgsrc = btns[3].querySelector("a").getAttribute("herf");
// 	console.log(imgsrc);
// 	img.setAttribute("src", imgsrc);
// })

// btns[4].addEventListener("click", (e) => {
// 	let imgsrc = btns[4].querySelector("a").getAttribute("herf");
// 	console.log(imgsrc);
// 	img.setAttribute("src", imgsrc);
// })


// 반목문의 요소의 갯수만큼 반복
for (let el of btns){
	// 버튼을 클릭했을때
	el.addEventListener("click", (e) => {
		//링크이동 방지
		e.preventDefault();
		//  버튼의 자식 a태그의 href속성값을  찾아서 변수에 저장
		let imgsrc = el.querySelector("a").getAttribute("href");
		console.log(imgsrc);
		// .showBox이미지에 src속성값을 위에서 변수에 저장한 값으로 변경
		img.setAttribute("src", imgsrc);

		//버튼 활성화 함수 호출
		activition(el, btns);

		//h1의 텍스트를 버튼의 텍스트로 교체
		let txt = el.querySelector("a").innerText;
		title.innerText = txt;
	});
}

function activition(el , items){
	//반목을 돌면서 모든 버튼에 on제거
	for (let el of btns){
		el.classlist.remove("on");
	}
	//클릭한 버튼에 on클래스 추가
	el.classlist.add("on");
}

//버튼을 클릭했을때 이벤트구문
/*
btns[0].addEventListener("click", (e) => {
	let imgsrc = btns[0].querySelector("a").getAttribute("herf");
	console.log(imgsrc);
	img.setAttribute("src", imgsrc);
})		
*/ 

