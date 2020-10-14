//API_KEY es una constante en el otro archivo que no subo al git



let xhr = new XMLHttpRequest();

function queryWeather() {
    console.log('queryWeather...');
    const city = $('#id-city').val();
    console.log('city:', city);

    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + API_KEY + '&units=metric');
    xhr.send();
}

xhr.onload = function () {
    if (xhr.status != 200) {
        console.log(`Ha ocurrido un error con código ${xhr.status} y mensaje ${xhr.statusText}`);
    } else {
        console.log(`Respuesta ${xhr.response}`);
        const parseWeather = JSON.parse(xhr.response);
        console.log('Respuesta parseada', parseWeather);
        paintWeatherOnPage(parseWeather);
    }
}

function paintWeatherOnPage(parsedWeather) {
    console.log('coord.lon:', parsedWeather.coord.lon);
    $('#weather').empty();
    let divContent = '';
    divContent += `<h3>Coordenadas:</h3><p>longitud: ${parsedWeather.coord.lon}</p><p>latitud: ${parsedWeather.coord.lat}</p>`;
    divContent += `<h3>Previsión por días:</h3>`;
    for (const weatherDay of parsedWeather.weather) {
        const srcImage = getSrcImageWeather(weatherDay.id);
        divContent += `<div class="image-weather-div"><img src="${srcImage}"></div>`;
        divContent += `<p>id: ${weatherDay.id}</p>`;
        divContent += `<p>main: ${weatherDay.main}</p>`;
        divContent += `<p>description: ${weatherDay.description}</p>`;
        divContent += `<p>icon: ${weatherDay.icon}</p>`;
    }
    divContent += `<h3>Base:</h3><p>${parsedWeather.base}</p>`;
    divContent += '<h3>Principal:</h3>';
    divContent += `<p>Temperatura: ${parsedWeather.main.temp}</p>`;
    divContent += `<p>Temperatura2: ${parsedWeather.main.feels_like}</p>`;
    divContent += `<p>Temperatura mínima: ${parsedWeather.main.temp_min}</p>`;
    divContent += `<p>Temperatura máxima: ${parsedWeather.main.temp_max}</p>`;
    divContent += `<p>Presión: ${parsedWeather.main.pressure}</p>`;
    divContent += `<p>Humedad: ${parsedWeather.main.humidity}</p>`;

    divContent += `<h3>Visivilidad:</h3><p>${parsedWeather.visibility}</p>`;

    divContent += '<h3>Viento:</h3>';
    divContent += `<p>Velocidad: ${parsedWeather.wind.speed}</p>`;
    divContent += `<p>deg: ${parsedWeather.wind.deg}</p>`;

    // divContent += '<h3>Rain:</h3>';
    // divContent += `<p>1h: ${parsedWeather['rain.1h']}</p>`;

    divContent += '<h3>Nubes:</h3>';
    divContent += `<p>Todo: ${parsedWeather.clouds.all}</p>`;

    divContent += `<h3>Fecha:</h3><p>${parsedWeather.dt}</p>`;

    divContent += '<h3>Sys:</h3>';
    divContent += `<p>type: ${parsedWeather.sys.type}</p>`;
    divContent += `<p>id: ${parsedWeather.sys.id}</p>`;
    divContent += `<p>country: ${parsedWeather.sys.country}</p>`;
    divContent += `<p>sunrise: ${parsedWeather.sys.sunrise}</p>`;
    divContent += `<p>sunset: ${parsedWeather.sys.sunset}</p>`;

    divContent += `<h3>Timezone:</h3><p>${parsedWeather.timezone}</p>`;

    divContent += `<h3>Id:</h3><p>${parsedWeather.id}</p>`;

    divContent += `<h3>name:</h3><p>${parsedWeather.name}</p>`;

    divContent += `<h3>cod:</h3><p>${parsedWeather.cod}</p>`;

    const weatherDiv = $('#weather').append(divContent);

}

/**
 * 
 * @param {*} weatherId id del tiempo
 * @param {*} dayOrNigth este valor representa día y noche, d, n aunque ahora no lo uso
 */
function getSrcImageWeather(weatherId, dayOrNigth) {
    let result = '';
    switch (weatherId) {
        case 200:
            result = 'http://openweathermap.org/img/wn/11d@2x.png';
            break;
        case 201:
            result = 'http://openweathermap.org/img/wn/11d@2x.png';
            break;
        case 202:
            result = 'http://openweathermap.org/img/wn/11d@2x.png';
            break;
        case 210:
            result = 'http://openweathermap.org/img/wn/11d@2x.png';
            break;
        case 211:
            result = 'http://openweathermap.org/img/wn/11d@2x.png';
            break;
        case 212:
            result = 'http://openweathermap.org/img/wn/11d@2x.png';
            break;
        case 221:
            result = 'http://openweathermap.org/img/wn/11d@2x.png';
            break;
        case 230:
            result = 'http://openweathermap.org/img/wn/11d@2x.png';
            break;
        case 231:
            result = 'http://openweathermap.org/img/wn/11d@2x.png';
            break;
        case 232:
            result = 'http://openweathermap.org/img/wn/11d@2x.png';
            break;
            //Drizzle
        case 300:
            result = 'http://openweathermap.org/img/wn/09d@2x.png';
            break;
        case 301:
            result = 'http://openweathermap.org/img/wn/09d@2x.png';
            break;
        case 302:
            result = 'http://openweathermap.org/img/wn/09d@2x.png';
            break;
        case 310:
            result = 'http://openweathermap.org/img/wn/09d@2x.png';
            break;
        case 311:
            result = 'http://openweathermap.org/img/wn/09d@2x.png';
            break;
        case 312:
            result = 'http://openweathermap.org/img/wn/09d@2x.png';
            break;
        case 313:
            result = 'http://openweathermap.org/img/wn/09d@2x.png';
            break;
        case 314:
            result = 'http://openweathermap.org/img/wn/09d@2x.png';
            break;
        case 321:
            result = 'http://openweathermap.org/img/wn/09d@2x.png';
            break;
            //Rain
        case 500:
            result = 'http://openweathermap.org/img/wn/10d@2x.png';
            break;
        case 501:
            result = 'http://openweathermap.org/img/wn/10d@2x.png';
            break;
        case 502:
            result = 'http://openweathermap.org/img/wn/10d@2x.png';
            break;
        case 503:
            result = 'http://openweathermap.org/img/wn/10d@2x.png';
            break;
        case 504:
            result = 'http://openweathermap.org/img/wn/10d@2x.png';
            break;
        case 511:
            result = 'http://openweathermap.org/img/wn/13d@2x.png';
            break;
        case 520:
            result = 'http://openweathermap.org/img/wn/09d@2x.png';
            break;
        case 521:
            result = 'http://openweathermap.org/img/wn/09d@2x.png';
            break;
        case 522:
            result = 'http://openweathermap.org/img/wn/09d@2x.png';
            break;
        case 531:
            result = 'http://openweathermap.org/img/wn/09d@2x.png';
            break;
            //Snow
        case 600:
            result = 'http://openweathermap.org/img/wn/13d@2x.png';
            break;
        case 601:
            result = 'http://openweathermap.org/img/wn/13d@2x.png';
            break;
        case 602:
            result = 'http://openweathermap.org/img/wn/13d@2x.png';
            break;
        case 611:
            result = 'http://openweathermap.org/img/wn/13d@2x.png';
            break;
        case 612:
            result = 'http://openweathermap.org/img/wn/13d@2x.png';
            break;
        case 613:
            result = 'http://openweathermap.org/img/wn/13d@2x.png';
            break;
        case 615:
            result = 'http://openweathermap.org/img/wn/13d@2x.png';
            break;
        case 616:
            result = 'http://openweathermap.org/img/wn/13d@2x.png';
            break;
        case 620:
            result = 'http://openweathermap.org/img/wn/13d@2x.png';
            break;
        case 621:
            result = 'http://openweathermap.org/img/wn/13d@2x.png';
            break;
        case 622:
            result = 'http://openweathermap.org/img/wn/13d@2x.png';
            break;
            //Atmosphere
        case 701:
            result = 'http://openweathermap.org/img/wn/50d@2x.png';
            break;
        case 711:
            result = 'http://openweathermap.org/img/wn/50d@2x.png';
            break;
        case 721:
            result = 'http://openweathermap.org/img/wn/50d@2x.png';
            break;
        case 731:
            result = 'http://openweathermap.org/img/wn/50d@2x.png';
            break;
        case 741:
            result = 'http://openweathermap.org/img/wn/50d@2x.png';
            break;
        case 751:
            result = 'http://openweathermap.org/img/wn/50d@2x.png';
            break;
        case 761:
            result = 'http://openweathermap.org/img/wn/50d@2x.png';
            break;
        case 762:
            result = 'http://openweathermap.org/img/wn/50d@2x.png';
            break;
        case 771:
            result = 'http://openweathermap.org/img/wn/50d@2x.png';
            break;
        case 781:
            result = 'http://openweathermap.org/img/wn/50d@2x.png';
            break;
            //clear
        case 800:
            result = 'http://openweathermap.org/img/wn/01d@2x.png';
            break;
            // clouds
        case 801:
            result = 'http://openweathermap.org/img/wn/02d@2x.png';
            break;
        case 802:
            result = 'http://openweathermap.org/img/wn/03d@2x.png';
            break;
        case 803:
            result = 'http://openweathermap.org/img/wn/04d@2x.png';
            break;
        case 804:
            result = 'http://openweathermap.org/img/wn/04d@2x.png';
            break;
        default:
            console.log('weather default');
            break;
    }
    return result;
}