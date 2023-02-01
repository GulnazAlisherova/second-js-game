var character = document.getElementById("character");

function moveLeft(){
  var left = window.getComputedStyle(character).getPropertyValue("left");
}