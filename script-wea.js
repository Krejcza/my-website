const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=50.092777&lon=15.807426&appid=';
const apiKey = '0d6ad72d49a7ad53e18459699d5f5bb0';

const weatherIcon = document.querySelector('.weather-icon');

async function weatherCall() {
   try {
      const response = await fetch(apiUrl + apiKey)
      if (!response.ok) {
         throw new Error('Chyba při získávání dat z API')
      }

      const data = await response.json();
      document.querySelector('.temp').textContent = Math.floor(data.main.temp) + ' °C'
      document.querySelector('.humidity').textContent = data.main.humidity + ' %'
      document.querySelector('.visibility').textContent = (Math.round(data.visibility / 1000 *100)/100).toFixed(1) + ' km'
      document.querySelector('.wind-speed').textContent = Math.round(data.wind.speed * 10) / 10 + ' km/h'

      if(data.weather[0].main === 'Thunderstorm'){
         weatherIcon.src = 'images/thunderstorm.png'
      } else if(data.weather[0].main === 'Drizzle'){
         weatherIcon.src = 'images/drizzle.png'
      } else if(data.weather[0].main === 'Snow'){
         weatherIcon.src = 'images/snow.png'
      } else if(data.weather[0].main === 'Clear'){
         weatherIcon.src = 'images/clear.png'
      } else if(data.weather[0].description === 'few clouds'){
         weatherIcon.src = 'images/few-clouds.png'
      } else if (data.weather[0].description === 'scattered clouds' || 
         data.weather[0].description === 'broken clouds' || 
         data.weather[0].description === 'overcast clouds') {
         weatherIcon.src = 'images/scattered-clouds.png'
      } else if (data.weather[0].description === 'light rain' || data.weather[0].description === 'shower rain' || data.weather[0].description === 'light intensity shower rain' || data.weather[0].description === 'moderate rain'){
         weatherIcon.src = 'images/light-rain.png'
      } else if (data.weather[0].description === 'heavy intensity rain' || data.weather[0].description === 'very heavy rain' || data.weather[0].description === 'extreme rain' || data.weather[0].description === 'freezing rain' || data.weather[0].description === 'heavy intensity shower rain' || data.weather[0].description === 'ragged shower rain'){
         weatherIcon.src = 'images/very-heavy-rain.png'
      } else if (data.weather[0].description === 'mist'){weatherIcon.src = 'images/mist.png'
      } else if (data.weather[0].description === 'haze'){
         weatherIcon.src = 'images/haze.png'
      } else if (data.weather[0].description === 'tornado'){
         weatherIcon.src = 'images/tornado.png'
      } else if(data.weather[0].description === 'smoke' || data.weather[0].description === 'sand/dust whirls' || data.weather[0].description === 'fog' || data.weather[0].description === 'sand' || data.weather[0].description === 'dust' || data.weather[0].description === 'volcanic ash' || data.weather[0].description === 'squalls'){
         weatherIcon.src = 'images/fog.png'
      }
      
      }
      catch (error) {
      console.error('Chyba při získávání dat:', error);
   }
}

weatherCall();
