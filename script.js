const apiKey = "cb6ca8d4649008e0ab80371a54251905";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("cityname");
const searchBtn = document.getElementById("submit");
const weatherIcon = document.getElementsByClassName("weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

        if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "./mist.png";
         } else if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "./clouds.png";
         } else if (data.weather[0].main == 'Drizzle'){
            weatherIcon.src = "./drizzle.png";
         } else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = "./snow.png";
         } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./rain.png";
         } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "./clear.png";
         } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "./drizzle.png";
        }
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    }


searchBtn.onclick = function (){
    checkWeather(searchBox.value);
}
