import { getWeather } from "./servers.js";
import { addCity } from "./operations.js"; //

const form = document.querySelector(".form");
const cardCity = document.querySelector("#cardCity");
const tempElem = document.querySelector("#temp");
const cardBtn = document.querySelector("#cardBtn");
const cardText = document.querySelector("#disclaimer");

function selectCity(event) {
  event.preventDefault();
  getWeather()
    .then((data) => {
      cardBtn.classList.add("card__btn-elect");
      cardCity.textContent = data.name;
      tempElem.textContent = Math.round(data.main.temp - 273.15) + `°`;
      cardText.textContent = data.weather[0]["description"];

      const picture = document.getElementById("picture");
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
      picture.setAttribute("src", iconUrl);
    })

    .catch((error) => console.error(error));
}

form.addEventListener("submit", selectCity);

cardBtn.addEventListener("click", addCity);
