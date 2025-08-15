let btn= document.querySelector(".btn");
btn.addEventListener("click",function(){
  let randomColour = getNewColor();
  let h1 = document.querySelector("h1");
    h1.innerText= randomColour;

    let div= document.querySelector("div");
      div.style.backgroundColor= randomColour;
});

function getNewColor(){
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random()* 255);
    let colour = `rgb(${red}, ${green}, ${blue})`;
    return colour;
}