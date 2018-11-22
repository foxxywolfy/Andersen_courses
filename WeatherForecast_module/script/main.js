var dataModule = createDataModule();
var showDataModule = createShowDataModule();

document.getElementById("btnSubmit").addEventListener("click", function () {
    getWeather();
});

document.getElementById("nameCity").addEventListener("keydown", function () {
    if (event.code === "Enter") {
        getWeather();
    }
});

function getWeather() {
    dataModule.willGetWeatherForecast()
        .then(function (result) {
            console.log(result);
            showDataModule.showData(result);
        })
        .catch(function (error) {
            console.log(error.message);
        })
}