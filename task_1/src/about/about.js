// ACCORDION START

const contentBoxes = document.getElementsByClassName("content-box");

function closeAll() {
  for (let i = 0; i < contentBoxes.length; i++) {
    contentBoxes[i].classList.remove("active");
  }
}

function handleEvents() {
  for (let i = 0; i < contentBoxes.length; i++) {
    contentBoxes[i].addEventListener("click", function () {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        closeAll();
        this.classList.toggle("active");
      }
    });
  }
}

handleEvents();

// ACCORDION END
