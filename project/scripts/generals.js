const year = document.getElementById("currentyear");

const today = new Date();
const currentYear = today.getFullYear();
year.textContent = currentYear;