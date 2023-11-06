

/*Game*/
const player01=document.querySelector(`.player01`);
const p01Submit=document.querySelector(`.p01Submit`);
const p01Num=document.querySelector(`.p01Num`);
const p02Turn=document.querySelector(`.p02Turn`);
const player02=document.querySelector(`.player02`);
const p02Num=document.querySelector(`.p02Num`);
const tryCounts=document.querySelectorAll(`.try`);
const triesLeftCount=document.querySelector(`.triesLeftCount`);
const p02Submit=document.querySelector(`.p02Submit`);
let randNum;
const p02triesArr=[];
let tCnt=tryCounts.length;

player02.style.display=`none`;

p01Submit.addEventListener(`click`,()=>{
	const p01NumLoading=document.querySelector(`.p01NumLoading`);
	p01NumLoading.style.display=`block`;
	setTimeout(()=>{
		randNum=Math.round(Math.random()*10);
		console.log(`The machine has set the number to ${randNum}`);
		p01Num.textContent=`Guess The number ?`;
		p01Submit.style.display=`none`;
		p02Turn.style.display=`block`;
	},);
});

p02Turn.addEventListener(`click`,()=>{
	player01.style.display=`none`;
	player02.style.display=`block`;
	triesLeftCount.textContent=tryCounts.length;
});

p02Submit.addEventListener(`click`,()=>{
	let popUp=document.querySelector(`.popUp`);
	p02triesArr.push(p02Num.value);
	console.log(p02triesArr);
	for(let n=0;n<p02triesArr.length;n++){
		if(p02triesArr[n]==randNum){
			console.log(`It matched!`);
			player02.style.display=`none`;
			popUp.style.backgroundImage=`url('./images/win.png')`;
			popUp.style.display=`grid`;
		}else{
			console.log(`Try again`);
			tryCounts[n].classList.add(`tried`);
			tLeft=tCnt-p02triesArr.length;
			triesLeftCount.textContent=tLeft;
			if(tLeft<0){
				player02.style.display=`none`;
				console.log(`Game Over`);
				popUp.style.backgroundImage=`url('./images/lost.jpg')`;
				popUp.style.display=`grid`;
			}
		}
		p02Num.value=``;
	}
});
/*Game ends*/