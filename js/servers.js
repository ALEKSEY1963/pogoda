const serverUrl = "http://api.openweathermap.org/data/2.5/weather";

// const apiKey = "869cd47085e43a6dbddf20b31c56fe9a";
const apiKey = "7c92749279ca33a5f06b710a0e5f8c24";

export function getWeather() {
  const myInput = document.querySelector("input");
  const cityName = myInput.value;
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

  return fetch(url).then((response) => {
    if (response.status === 404) {
      throw new Error("City not found");
    }
    return response.json();
  });
}
