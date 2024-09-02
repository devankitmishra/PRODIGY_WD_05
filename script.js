async function getWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value;

    if (!location) {
      alert('Please enter a location.');
      return;
    }

    const apiKey = 'API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok) {
        displayWeather(data);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert('Error fetching weather data.');
      console.error(error);
    }
  }

  function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');

    weatherInfo.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>${data.weather[0].description}, Temperature: ${data.main.temp} °C, Humidity: ${data.main.humidity}%, Wind Speed: ${data.wind.speed} m/s</p>
    `;
  }