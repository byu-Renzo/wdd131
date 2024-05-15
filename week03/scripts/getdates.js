const year = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

const today = new Date();
const currentYear = today.getFullYear();

year.textContent = currentYear;

const LastModifiedDate = new Date(document.lastModified);

const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
};

const formattedDate = LastModifiedDate.toLocaleDateString(undefined, options);

lastModified.textContent = formattedDate;