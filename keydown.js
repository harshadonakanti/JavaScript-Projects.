let h1= document.querySelector("h1");
window.addEventListener("keydown",function(dets){
     if(dets.key === " "){
      h1.textContent = "Spc";
     }
     else{
      h1.textContent = dets.key;
     }

});