const main = document.querySelectorAll(".main");

const heigth2 = document.documentElement.clientHeight;

const screenWidth = document.documentElement.clientWidth;

for (i = 0; i < main.length; i++) {
  main[i].style.minHeight = `${heigth2}px`;
}

const clickToSee = document.querySelector(".portfolio-second-p");

window.onload = function () {
  if (screenWidth < 768) {
    clickToSee.innerHTML = "Tap to see more";
  } else {
    clickToSee.innerHTML = "Click to see more";
  }
};
