const elDirectorInfo = document.querySelectorAll(".director");
const elDirectorButton = document.querySelectorAll(".director__button");

elDirectorButton.forEach(function(elDirectorButton, index) {
  elDirectorButton.addEventListener("click", function () {
    elDirectorInfo[index].classList.toggle("director__info--open")
  });
});