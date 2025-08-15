const max = prompt("enter the max number");
const random = Math.floor(Math.random() * max)+ 1;

let guess= prompt("guess the number");
while(true){
if(guess=="Quit"){
  console.log("you Quit");
  break;
}

 if(guess==random){
          let h2= document.querySelector("h2");
               h2.textContent = `Your guess is correct, congrats! The number was ${random}`;
      // console.log();
      break;
}

  else if(guess<random){
    guess =prompt(" you have enter the too small number");
  }

  else{
     guess =prompt(" you have enter the too large number");
  }
}