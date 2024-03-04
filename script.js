// Tache2 exo1
function menubar() {
    let tog = document.querySelector(".menu-data");
    let element = document.getElementById("Menu-bar");
  
    if (tog) {
      tog.classList.remove("animate__fadeOut");
      element.style.display = "none";
      tog.style.zIndex = "1";
      tog.classList.add("animate__fadeIn");
    }
  }
  
  function closebar() {
    let tog = document.querySelector(".menu-data");
    let element = document.getElementById("Menu-bar");
    if (tog) {
      tog.classList.remove("animate__fadeIn");
      tog.style.zIndex = "-20";
      element.style.display = "block";
      tog.classList.add("animate__fadeOut");
    }
  }
  


