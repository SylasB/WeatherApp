window.onload = getWeather();
function getWeather() {
const location = document.getElementById('locationInput').value;
const currentTemp = document.getElementById('currentTemp');
const feelsLike = document.getElementById('feelsLike');
const windSpeed = document.getElementById('currentWind');
const humidity = document.getElementById('currentHumidity');
const currentLocation = document.getElementById('searchLocation');
const errorMsg = document.getElementById('errorMsg');
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=35840eb6941e2c32e1c9644356825fa4`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
      
    })
    .then(function(response) {
        temperature = Math.ceil((response.main.temp - 273.15) *1.8) + 32;
        feelsLikeTemp = Math.ceil((response.main.feels_like - 273.15) *1.8) + 32;

            currentTemp.textContent = `${temperature}\u00B0F`
  
            feelsLike.textContent = `Feels Like: ${feelsLikeTemp}\u00B0F`

            windSpeed.textContent = `Wind Speed: ${response.wind.speed} MPH`;


            humidity.textContent = `Humidity: ${response.main.humidity}%`;


            currentLocation.textContent = `${response.name}`;
        
        errorMsg.className = 'hidden';
        errorMsg.textContent = '';
    })
    .catch(function() {
        errorMsg.className = 'activeError';
        errorMsg.textContent = 'Please Enter A City'
        console.log('ERROR');
    });
}