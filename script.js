window.onload = getWeather();
function getWeather() {
const currentTemp = document.getElementById('currentTemp');
const windSpeed = document.getElementById('currentWind');
const humidity = document.getElementById('currentHumidity');
fetch('https://api.openweathermap.org/data/2.5/weather?q=Denver&APPID=35840eb6941e2c32e1c9644356825fa4', {mode: 'cors'})
    .then(function(response) {
      return response.json();
      
    })
    .then(function(response) {
        console.log(response);
        console.log(response.main.temp);
            currentTemp.textContent = `Current Temperature: ${response.main.temp} Degrees `

        console.log(response.wind.speed);
            windSpeed.textContent = `Wind Speed: ${response.wind.speed} MPH`;

        console.log(response.main.humidity);
            humidity.textContent = `Humidity: ${response.main.humidity}%`;
    });
}