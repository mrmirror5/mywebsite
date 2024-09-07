document.getElementById("refreshButton").addEventListener('click', function() {
  location.reload()
});

document.getElementById("alertButton").addEventListener('click', function() {
  alert('Painoit nappia!');
});



const leftButton =document.getElementById("scroll-left");
const rightButton =document.getElementById("scroll-right");
const body = document.getElementById("the_body");
const header = document.querySelector(".header");

// Nuolet ohjaavat väriä ja vaihtavat punaisen arvoa!  
let red = 255
let green = 244
let blue = 149

leftButton.addEventListener("click", function(){
  if (red>0){
    red = red-10
  }
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  /*header.style.backgroundColor = `rgb(${red}, ${green-150}, ${blue-15})`;*/
})

rightButton.addEventListener("click", function(){
  if (red<=255){
    red = red+10
  }
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})


  
function btn_clr() {
  
}