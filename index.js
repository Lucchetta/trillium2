function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

/* function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#precipitation").innerHTML = response.data.main.speed;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#decription").innerHTML =
    response.data.weather[0].main;
} 
function search(event) {
  event.preventDefault();
  //let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  //let city = document.querySelector("#city-input").value;
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    //{city}&app=${apiKey}&units=metric`;
  //axios.get(apiUrl).then(displayWeatherCondition);
}
*/
function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#rain").innerHTML = response.rain;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  // document.querySelector("#description"DocumentFragment).innerHTML =
  // response.data.weather[0].main;
  // document.querySelector
}

function search(event, unit) {
  let apiKey = "87a4d33f9276aba60312862a75e60dce";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  search(city, `metric`);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
function searchLocation(position) {
  let apiKey = "87a4d33f9276aba60312862a75e60dce";
  let city = position.coords.latitude;
  city = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleClickF(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  let fahrenheit = convertToF(temperature.innerHTML);
  temperature.innerHTML = fahrenheit;
  let fLink = document.querySelector("#fahrenheit-link");
  fLink.disabled = true;
  let cLink = document.querySelector("#celsius-link");
  cLink.disabled = false;
}
function handleClickC(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  let celsius = convertToC(temperature.innerHTML);
  temperature.innerHTML = celsius;
}
function convertToF(celsius) {
  // make the given fahrenheit variable equal the given celsius value
  // multiply the given celsius value by 9/5 then add 32
  //let celsius =  (32°F − 32) × 5/9 ;
  let fahrenheit = Math.round((celsius * 9) / 5 + 32);

  return fahrenheit;
  //event.preventDefault();
  //let city = document.querySelector("#city").value;
  //search(city, `imperial`);
}
function convertToC(fahrenheit) {
  let celsius = Math.round((fahrenheit - 32) / 1.8);
  return celsius;
}

//convertToF(32);

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
search("NewYork");

let fLink = document.querySelector("#fahrenheit-link");
fLink.addEventListener("click", handleClickF);
let cLink = document.querySelector("#celsius-link");
cLink.addEventListener("click", handleClickC);
cLink.disabled = true;
// if(document. getElementById('button'). clicked == true)
// {
// alert("button was clicked");
// }
/* let fahrenheitLink = document.removeEventListenerqueryselector(
  "#fahrenheit-link"
);
 fahrenheitLink.addEventListener("click", convertToFahrenheit);
// let celciusLink = document.querySelector("#celcius-link");
*/
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
