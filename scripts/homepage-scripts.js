// hamburger menu on mobile
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}))


// hand moving script

// async function moveHand() {
//     handElement = document.querySelector('.js-hand-emoji');
//     handElement.classList.add('hand-emoji-move');
//     await wait(4000);
//     handElement.classList.remove('hand-emoji-move');

// }

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function moveHand() {
    const handElement = document.querySelector('.js-hand-emoji');
    handElement.classList.add('hand-emoji-move');
    await wait(800); // time hand stays rotated
    handElement.classList.remove('hand-emoji-move');
  }
  
  async function loopHandMotion() {
    while (true) {
      await moveHand();
      await wait(5000); // delay between motions
    }
  }
  
  loopHandMotion(); // Start the animation loop
  
  


// scroll skills funtions

function handleClickCheckBox2(checkbox, event) {
    if (checkbox.checked) {
      document.querySelector(".skill-box-container")
      .classList.add('skill-box-container-moved');


    //   uncheck the other box
    document.querySelector('.scroll-box-1').checked = false; 
      
    } else {
        event.preventDefault();
    }
  }
  

  function handleClickCheckBox1(checkbox, event) {

    if (checkbox.checked){
        document.querySelector(".skill-box-container")
        .classList.remove('skill-box-container-moved');
        document.querySelector('.scroll-box-2').checked = false; 
    }

    else {
        event.preventDefault();
    }
  }