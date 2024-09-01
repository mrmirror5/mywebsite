document.getElementById("refreshButton").addEventListener('click', function() {
  location.reload()
});

document.getElementById("alertButton").addEventListener('click', function() {
  alert('Painoit nappia!');
});



const leftButton =document.getElementById("scroll-left");
const rightButton =document.getElementById("scroll-right");
const body = document.getElementById("the_body");

  
let red = 255
let green = 244
let blue = 149

leftButton.addEventListener("click", function(){
  red = red-10
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})

rightButton.addEventListener("click", function(){
  red = red+10
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})