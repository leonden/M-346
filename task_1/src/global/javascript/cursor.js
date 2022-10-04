// CURSOR

function cursorMove() {
  var cursorOuter = document.querySelector(".cursor-outer");
  var cursorInner = document.querySelector(".cursor-inner");
  document.addEventListener("mousemove", function (e) {
    cursorOuter.style.cssText = cursorInner.style.cssText =
      "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  });
}

function detectDevice() {
  if ("ontouchstart" in document.documentElement) {
    document.styleSheets[1].disabled = true;
    const cursorOuter = document.querySelector(".cursor-outer");
    const cursorInner = document.querySelector(".cursor-inner");
    cursorOuter.remove();
    cursorInner.remove();
  } else {
    cursorMove();
  }
}

function hoverOverLink() {
  const cursorInner = document.querySelector(".cursor-inner");
  // all links
  const links = document.querySelectorAll("a");
  // all accordion labels
  const labels = document.querySelectorAll(".label");

  // links
  for (let i = 0; i < links.length; i++) {
    // hover start
    links[i].addEventListener("mouseover", function (event) {
      cursorInner.classList.add("cursor-active");
    });

    // hover finish
    links[i].addEventListener("mouseout", function (event) {
      cursorInner.classList.remove("cursor-active");
    });
  }

  // accordion
  for (let i = 0; i < labels.length; i++) {
    // hover start
    labels[i].addEventListener("mouseover", function (event) {
      cursorInner.classList.add("cursor-active");
    });

    // hover finish
    labels[i].addEventListener("mouseout", function (event) {
      cursorInner.classList.remove("cursor-active");
    });
  }
}

detectDevice();
hoverOverLink();
