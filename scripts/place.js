const temperature = document.getElementById("temperature");
const windSpeed = document.getElementById("wind");
const windchill = document.getElementById("windchill");

let temp = 62;
let wind = 9;
let tempCelsius = Math.round((temp - 32) * (5 / 9));
let windKph = Math.round(wind * 1.609344);

const calculateWindChill = (temp, wind) => {
  if ((temp <= 50 && wind > 3)) {

    const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));

    return `${((windChill - 32) * (5 / 9)).toFixed(1)} °C`;

  } else {
    return "N/A";
  }
};

const windChill = calculateWindChill(temp, wind);

temperature.innerHTML = `<strong>Temperature:</strong> ${tempCelsius} °C`;
windSpeed.innerHTML = `<strong>Wind:</strong> ${windKph} km/h`;
windchill.innerHTML = `<strong>Wind Chill:</strong> ${windChill}`;