function getWeatherForecast() {
    var cityName = document.getElementById("nameCity").value;
    var getByCityNameUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=5a89a2e3b9ca1a2289ec47b92fd5d22d";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', getByCityNameUrl, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) {
            return;
        }
        if (this.status === 200) {
            var weatherData = JSON.parse(xhr.responseText);
            renderHTML(weatherData);
        }
        if (this.status !== 200) {
            alert("No such city");
            return;
        }
    }
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function isCloseBlock() {
    if(document.getElementById("results").style.display !== "none"){
        document.getElementById("results").style.display = "block";
    }
    else{
        document.getElementById("results").style.display = "none";
    }
}
function convertedKelvinToCelsius(data) {
    return (data - 273.15).toFixed(2);
}

function checkEnter(event) {
    if (event.code === "Enter") {
        getWeatherForecast();
    }
}

function renderHTML(data) {
    isCloseBlock();
    var getHeadline = document.getElementById("city");
    var iconWeather = document.getElementById("icon-weather");
    var cityTemperature = document.getElementById("city-temperature");
    var cityPressure = document.getElementById("city-pressure");
    var cityHumidity = document.getElementById("city-humidity");
    var cityWindSpeed = document.getElementById("city-windSpeed");
    var nameCity = data.name;
    var temp = data.main.temp;
    var main = data.weather[0].main;
    var pressure = data.main.pressure;
    var humidity = data.main.humidity;
    var windSpeed = data.wind.speed;
    var image = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    getHeadline.innerHTML = nameCity;
    cityTemperature.innerHTML = "Temperature is: " + convertedKelvinToCelsius(temp) + "C&#176";
    cityPressure.innerHTML = "Pressure: " + pressure + " mBar";
    cityHumidity.innerHTML = "Humidity: " + humidity + "%";
    cityWindSpeed.innerHTML = "Wind speed:" + windSpeed + "km/h";
    iconWeather.src = image;
}