var p1button=document.querySelector("#p1");
var p2button=document.querySelector("#p2");
var p1Value=document.querySelector("#p1throw");
var p2Value=document.querySelector("#p2throw");
var p1score=0;
var p2score=0;
var gameover=false;
var activeBtn1=false;
var activeBtn2=true;
var score1=[];
var score2=[];
var counter=1;
var rounds=3;
var head2head1=document.querySelector("#p1RoundScore");
var head2head2=document.querySelector("#p2RoundScore");
var p1count=0;//for checking who has won
var p2count=0;//for checking who has won
var player1Display=document.querySelector(".playerName1");
var player2Display=document.querySelector(".playerName2");

p1button.addEventListener("click", function(){
if(!gameover&&!activeBtn1){
//Roll the dice
p1score=Math.ceil(Math.random()*6);
//change dice value on display
p1Value.textContent=p1score;
//change dice image on display
var p1image="images/"+p1score+".png";
document.querySelector(".p1DiceImg").setAttribute("src", p1image);
score1.push(p1score);
console.log(score1);
}
p1button.classList.remove("active");
p2button.classList.add("active");

activeBtn1=!activeBtn1;
activeBtn2=!activeBtn2;
});

p2button.addEventListener("click", function(){
if(!gameover&&!activeBtn2){
//Roll the dice
p2score=Math.ceil(Math.random()*6);
//change dice value on display
p2Value.textContent=p2score;
//change dice image on display
var p2image="images/"+p2score+".png";
document.querySelector(".p2DiceImg").setAttribute("src", p2image);
score2.push(p2score);
console.log(score2);
console.log("No. of rounds="+rounds);
console.log("Rounds completed="+counter);
gameFinish();

p2button.classList.remove("active");
p1button.classList.add("active");
}
});

function gameFinish(){
	if(counter<=rounds){
	if(score1[counter-1]>score2[counter-1]){
		head2head1.textContent++;
		p1count++;	
	} else if(score1[counter-1]<score2[counter-1]) {
		head2head2.textContent++;
		p2count++;	
	}
	console.log("score1="+p1count);
	console.log("score2="+p2count);
	counter++;
console.log("Next round="+counter);
}
var winningScore=Math.floor(rounds/2)+1;
console.log("Score needed="+winningScore);
activeBtn1=!activeBtn1;
activeBtn2=!activeBtn2;
if(p1count===winningScore||p2count===winningScore||counter>rounds){
	gameover=true;

	if(p1count>p2count){
		player1Display.textContent="WINNER!";
		player2Display.classList.add("hidden");
	} else if(p1count<p2count){
		player2Display.textContent="WINNER!";
		player1Display.classList.add("hidden");
	} else if(p1count===p2count) {
		player1Display.textContent="GAME TIED!";
		player2Display.textContent="GAME TIED!";
	}
}
}

document.querySelector("#numberRounds").addEventListener("change", function(){
	document.querySelector("#roundDisplay").textContent=this.value;
	rounds=Number(this.value);
	reset();
})

document.getElementById("resetBtn").addEventListener("click", function(){
	reset();
})
 
function reset(){
	counter=1;
	score1=[];
	score2=[];
	p1count=0;
	p2count=0;
	p1Value.textContent=0;
	p2Value.textContent=0;
	head2head1.textContent=0;
	head2head2.textContent=0;
	gameover=false;
	player1Display.classList.remove("hidden");
	player2Display.classList.remove("hidden");
	player1Display.textContent="Player 1";
	player2Display.textContent="Player 2";
	activeBtn1=false;
	activeBtn2=true;
}