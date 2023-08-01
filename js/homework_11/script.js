const API =
  "https://api.openweathermap.org/data/2.5/weather?lat=50.45&lon=30.52&appid=e1d4ea1b041d4f9f71b2c143d3c55345";

// const APIKey = "e1d4ea1b041d4f9f71b2c143d3c55345";

getData();

function getData() {
  fetch(API)
    .then((res) => res.json())
    .then((weather) => saveInLocalStorage(weather));
  setTimeout(getData, 7200000);
}

function saveInLocalStorage(weather) {
  localStorage.setItem("weather", JSON.stringify(weather));
  showWeather();
}

function showWeather() {
  let weather = JSON.parse(localStorage.getItem("weather"));
  console.log(weather);
  let weatherContainer = document.createElement("div");
  weatherContainer.classList.add("weather-container");
  checkContainers();
  weatherContainer.innerHTML = `
  <h2>${Math.round(weather.main.temp - 273)}°</h2>
  <p>Feels like: ${Math.round(weather.main.feels_like - 273)}°</p>
  <p>Humidity: ${weather.main.humidity}%</p>
  <p>Wind speed: ${weather.wind.speed}m/s</p>
  <p>Cloudiness: ${weather.clouds.all}%</p>
  <p>Pressure: ${weather.main.pressure}hPa</p>`;
  document.body.prepend(weatherContainer);
}

function checkContainers() {
  let containers = document.querySelectorAll(".weather-container");
  if (containers.length > 0) {
    document.querySelector(".weather-container").remove();
  }
}
