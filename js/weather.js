const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "1dfba7be46de741d46b698a08142fc69";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

///https://api.openweathermap.org/data/2.5/weather?lat=37.54819310015661&lon=126.72305796230079&appid=1dfba7be46de741d46b698a08142fc69&units=metric 
//집
//https://api.openweathermap.org/data/2.5/weather?lat=37.544908698783345&lon=126.72680995443014&appid=1dfba7be46de741d46b698a08142fc69&units=metric