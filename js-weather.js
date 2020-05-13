const weather = document.querySelector('.js-weather');


const API_KEY = '4575acf1d238e9d95fc8ba42ebda2a52';

function getWeather(lat, lon) {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json.weather[0].main);
        console.log(json);
        const place = json.name;
        const temp = json.main.temp;
        const weather1 = json.weather[0].main;
        weather.innerText = `현재위치: ${place}
        날씨: ${weather1} 
        기온: ${temp}˚c`; 
    });
}

function saveCoordsObj(coordsObj) {
    localStorage.setItem('coords', JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoordsObj(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoFail() {
    console.log('cant access geo location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail);
}

function loadLocation() {
    const loadedCoords = localStorage.getItem('coords');
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadLocation();
}
init();
