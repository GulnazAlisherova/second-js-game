var character = document.getElementById("character");
var interval;

function moveLeft() {
  var left =
  parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  character.style.left = left + 2 + "px";
}
function moveRight() {
  var left =
  parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  character.style.left = left - 2 + "px";
}

document.addEventListener("keydown", event =>{
  if(event.key==="ArrowLeft"){

  }
  if(event.key==="ArrowLeft"){
    
  }
});