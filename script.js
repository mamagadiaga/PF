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
  




// Tache2 exo1
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-button");
    const images = document.querySelectorAll(".image");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const filter = button.getAttribute("data-filter");
            images.forEach(image => {
                if (filter === "all" || image.classList.contains(filter)) {
                    image.classList.remove("hidden");
                } else {
                    image.classList.add("hidden");
                }
            });
        });
    });
});
