function clickBtn(){
	alert('clicked button!');
}

const btn = document.querySelector('#btn');

btn.onclick = ()=>{
	console.log('1');
}


btn.onclick = ()=>{
	console.log('2');
}


btn.onclick = ()=>{
	console.log('3');
}

//onclick - 한 요소에 이벤트가 여러개일 때 기존 등록했던 이벤트 덮어쓰기 됨

btn.addEventListener('click', ()=>{
	console.log('click1');
});
btn.addEventListener('click', ()=>{
	console.log('click2');
});

//addEventListener - 여러개의 이벤트를 등록할 수 있음

const section = document.querySelector('section');
const article =	document.querySelector('article');
const p = document.querySelector('p');

p.addEventListener('click', (event3	)=>{
	console.log('event');
});
