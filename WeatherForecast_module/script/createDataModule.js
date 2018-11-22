var createDataModule = function () {

    var willGetWeatherForecast = function () {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.onload = function () {
                if (this.status === 200) {
                    var weatherData = JSON.parse(this.response);
                    resolve(weatherData);
                }
                if (this.status !== 200 || this.readyState !== 4) {
                    var reason = new Error("No such city");
                    reject(reason);
                }
            };
            var cityName = document.getElementById("nameCity").value;
            var getByCityNameUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=5a89a2e3b9ca1a2289ec47b92fd5d22d";

            xhr.open('GET', getByCityNameUrl, true);
            xhr.send();

        })
    };
    return {
        willGetWeatherForecast: willGetWeatherForecast
    }
};
