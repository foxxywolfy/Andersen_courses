var createShowDataModule = function () {

    var getHeadline = document.getElementById("city");
    var iconWeather = document.getElementById("icon-weather");
    var cityTemperature = document.getElementById("city-temperature");
    var cityPressure = document.getElementById("city-pressure");
    var cityHumidity = document.getElementById("city-humidity");
    var cityWindSpeed = document.getElementById("city-windSpeed");

    function isCloseBlock() {
        if (document.getElementById("results").style.display !== "none") {
            document.getElementById("results").style.display = "block";
        }
        else {
            document.getElementById("results").style.display = "none";
        }
    }

    function convertedKelvinToCelsius(data) {
        (data - 273.15).toFixed(2);
    }

    function showData(data) {
        isCloseBlock();
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

    return {
        showData: showData
    }
};