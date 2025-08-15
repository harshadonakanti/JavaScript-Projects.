let gameSeq =[];
let userSeq =[];
let h3 = document.querySelector("h3");// for level update
let started = false;
let level =0;

let btns =["green", "orange", "blue", "violet"];

document.addEventListener("keypress", function(){ //1
  if(started== false){
    started = true;
    levelUp();
  } 
});
function levelUp(){  //
  userSeq =[];
  level++;
  h3.textContent = `Level ${level}`;
  let randomIdx = Math.floor(Math.random()* btns.length);
  let randomCol = btns[randomIdx];
  let randomBtn = document.querySelector(`.${randomCol}`);
    gameSeq.push(randomCol);
  gameFlash(randomBtn); // here gameFlash Went as Callback
}
function gameFlash(btn){  
    btn.classList.add("flash");
    setTimeout(function (){
      btn.classList.remove("flash");
    },250);
}

let allBtns = document.querySelectorAll(".btn");
for(click of allBtns){
  click.addEventListener("click", btnPress);//  <== here, btnPress called, then btnPress funtion inside userFlash Immediately performed then inside it checkAns is returned
}
function btnPress(){ //
  let btn = this;
  userFlash(btn); 
  
  let userCol = btn.getAttribute("id");
 userSeq.push(userCol);
      checkAns(userSeq.length - 1);
}
function userFlash(btn){ //
    btn.classList.add("userFlash");
    setTimeout(function (){
      btn.classList.remove("userFlash");
    },250);
}
let highSc =0;
function checkAns(idx){
  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length === gameSeq.length){
      setTimeout(levelUp, 1000);
    }
  }
  else {
    let score = level * 10;
    h3.innerHTML= `game over! you're Score <b>${level * 10},</b> <br> press any key To Start Again `;
      if(score>highSc){
        highSc = score;
        let highScore = document.querySelector("#score");
       highScore.textContent= `High Score: ${highSc}`;
       }
       
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
}
function reset(){
  started = false;
  gameSeq = [];
  userSeq =[];
  level =0;
}


