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


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, USA",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, USA",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-760446-wallpaper.jpg"
  },
  {
    templeName: "Rexburg",
    location: "Rexburg, Idaho",
    dedicated: "2008, February, 10",
    area: 57504,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-775365-wallpaper.jpg"
  },
  {
    templeName: "Oklahoma City",
    location: "Olkahoma City, Oklahoma",
    dedicated: "2019, May, 19",
    area: 10890,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oklahoma-city-oklahoma/400x250/1-Oklahoma-City-Temple-2231521.jpg"
  },
];


function createTempleCard(temple) {
  let card = document.createElement("section");
  card.classList.add("temple_card");

  let name = document.createElement("h3");
  let location = document.createElement("p");
  let dedication = document.createElement("p");
  let area = document.createElement("p");
  let img = document.createElement("img");

  name.textContent = temple.templeName;
  location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
  dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
  area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
  img.setAttribute("src", temple.imageUrl);
  img.setAttribute("alt", `${temple.templeName} Temple`);
  img.setAttribute("loading", "lazy");

  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedication);
  card.appendChild(area);
  card.appendChild(img);

  return card;
}

function displayTemples(filteredTemples) {
  const templeContainer = document.querySelector('.temples_list');
  templeContainer.innerHTML = '';

  filteredTemples.forEach(temple => {
    let templeCard = createTempleCard(temple);
    templeContainer.appendChild(templeCard);
  });
}

displayTemples(temples);


document.querySelectorAll('.navigation a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const filter = event.target.dataset.filter;
    let filteredTemples = [];

    if (filter === 'home') {
      filteredTemples = temples;
    } else if (filter === 'old') {
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    } else if (filter === 'new') {
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    } else if (filter === 'large') {
      filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (filter === 'small') {
      filteredTemples = temples.filter(temple => temple.area < 10000);
    }
    displayTemples(filteredTemples);
  });
});

