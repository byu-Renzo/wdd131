const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");
const mavElements = document.querySelectorAll(".navigation a");
const templesTitle = document.getElementById("temples_title");

mavElements.forEach((a) => {
  a.addEventListener("click", () => {
    templesTitle.textContent = a.innerHTML;
  });
});

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});