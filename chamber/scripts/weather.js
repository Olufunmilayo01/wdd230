const apiKey = "9247bc4618a6dd5b62d8d1ac5a976342";
const city = "Lagos";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function fetchWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Extract current weather
    const currentTemp = data.list[0].main.temp;
    const description = data.list[0].weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`;

    document.getElementById("temperature").textContent = `${currentTemp}°C`;
    document.getElementById("description").textContent = description;
    document.getElementById("weather-icon").src = icon;
    document.getElementById("weather-icon").alt = description;

    // Extract 3-day forecast
    const forecastSection = document.getElementById("forecast");
    forecastSection.innerHTML = ""; // Clear previous forecast

    for (let i = 1; i <= 3; i++) {
      let forecast = data.list[i * 8]; // Every 24 hours
      let temp = forecast.main.temp;
      let date = new Date(forecast.dt_txt).toDateString();

      let forecastItem = `<p>${date}: ${temp}°C</p>`;
      forecastSection.innerHTML += forecastItem;
    }
  } catch (error) {
    console.error("Weather data fetch error:", error);
  }
}

fetchWeather();
