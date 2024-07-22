const app = document.getElementById("app");
const list = document.createElement("ul");
const cardCity = document.getElementById("cardCity");
app.append(list);

let cities = [];

export function addCity() {
  inputCity.value = "";
  const item = document.createElement("li");
  const city = document.createElement("p");

  city.textContent = cardCity.textContent;
  item.classList.add("item");

  const itemBtn = document.createElement("button");
  itemBtn.classList.add("item__btn");
  itemBtn.textContent = "";
  itemBtn.addEventListener("click", deleteCity);

  city.addEventListener("click", (e) => {
    inputCity.value = e.currentTarget.textContent.trim();
  });

  if (cities.includes(city.textContent)) {
    alert("Такой город уже есть в списке");
    return;
  }
  cities.push(city.textContent);
  list.append(item);
  item.append(city, itemBtn);
}

function deleteCity(event) {
  let item = event.target.closest(".item");
  item.remove();

  let index = cities.indexOf(item.firstElementChild.textContent);
  if (index !== -1) {
    cities.splice(index, 1);
  }
}
