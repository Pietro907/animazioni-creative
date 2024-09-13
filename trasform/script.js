
/* the door */
/* open the door on click */
function openDoor() {
  const elDoor1 = document.getElementsByClassName("door1");
  const elChain = document.getElementsByClassName("chain");
  console.log(elChain[0], elChain[1]);

  if (
    elDoor1[0].classList.contains("animation_close") &&
    elChain[0].classList.contains("chain_close") &&
    elChain[1].classList.contains("chain_close")
  ) {
    elDoor1[0].classList.remove("animation_close");
    elChain[0].classList.remove("chain_close");
    elChain[1].classList.remove("chain_close");
  }
  elDoor1[0].classList.add("animation_open");
  elChain[0].classList.add("chain_open");
  elChain[1].classList.add("chain_open");

  setTimeout(() => {
    elDoor1[0].style.height = "150px";
    elChain[0].style.height = "345px";
    elChain[1].style.height = "345px";
  }, 500);

  console.log(elDoor1);
}

/* close the door on click */
function closeDoor() {
  const elDoor1 = document.getElementsByClassName("door1");
  const elChain = document.getElementsByClassName("chain");

  if (
    elDoor1[0].classList.contains("animation_open") &&
    elChain[0].classList.contains("chain_open") &&
    elChain[1].classList.contains("chain_open")
  ) {
    elDoor1[0].classList.remove("animation_open");
    elChain[0].classList.remove("chain_open");
    elChain[1].classList.remove("chain_open");
  }
  elDoor1[0].classList.add("animation_close");
  elChain[0].classList.add("chain_close");
  elChain[1].classList.add("chain_close");
  
  setTimeout(()=>{ 
    elDoor1[0].style.height = "200px";
    elChain[0].style.height = "0px";
    elChain[1].style.height = "0px";
  }, 2500);


  console.log(elDoor1);
}

/* end the door */

/* a big img */



/* end a big img */