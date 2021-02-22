const id = '1cd38fdfb4e576db86733fbddac42215'
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?'
const renderApp = document.querySelector('#renderWeather')
const buttonSearch = document.querySelector('#buttonSearch')
const inputCity = document.querySelector('#city')
renderApp.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

function createWeather()  {
    let city = inputCity.value
    window.fetch(`${baseUrl}q=${city}&appid=${id}`)
    .then((respuesta) => respuesta.json())
    .then((responseJson)  =>  {
        const weatherName = document.createElement('h2');
        weatherName.textContent = responseJson.name
        weatherName.className = 'text-4xl'

    

        const weatherImg = document.createElement('img');
        weatherImg.src = `http://openweathermap.org/img/w/${responseJson.weather[0].icon}.png`
        weatherImg.className = 'mx-auto w-28'

        const weatherMain = document.createElement('h3');
        weatherMain.textContent = responseJson.weather[0].main
        weatherMain.className = 'text-3xl'

        const celcius = Math.floor(fromKelvinToCelcius(responseJson.main.temp)) 
        const weatherTemp = document.createElement('h3')
        weatherTemp.textContent = `${celcius}°C`
        weatherTemp.className = 'text-3xl'

        const container = document.createElement('div')
        container.append( weatherName,  weatherImg, weatherMain, weatherTemp)
        container.className = 'bg-gradient-to-r from-green-400 to-blue-500 mx-12 text-white rounded-2xl shadow-2xl  my-6';

        

        renderApp.append(container)
         inputCity.value = ""
    })
}

buttonSearch.addEventListener('click', createWeather)

const fromKelvinToCelcius = (kelvin) => {
    const celcius = kelvin - 273
    return celcius
}