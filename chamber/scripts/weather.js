const apiKey = "9247bc4618a6dd5b62d8d1ac5a976342";
const city = "Lagos";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

async function fetchWeather() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();
    console.log("Weather data:", data); // Debugging

    // Extract current weather
    const currentTemp = data.list[0].main.temp;
    const description = data.list[0].weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

    document.getElementById("temperature").textContent = `${currentTemp}°C`;
    document.getElementById("description").textContent = description;
    document.getElementById("weather-icon").src = icon;
    document.getElementById("weather-icon").alt = description;

    // Extract 3-day forecast
    const forecastSection = document.getElementById("forecast");
    forecastSection.innerHTML = ""; // Clear previous content

    const dailyForecasts = {};

    data.list.forEach((item) => {
      const date = new Date(item.dt_txt).toDateString();
      if (!dailyForecasts[date] && item.dt_txt.includes("12:00:00")) {
        dailyForecasts[date] = item;
      }
    });

    Object.keys(dailyForecasts)
      .slice(0, 3)
      .forEach((date) => {
        const forecast = dailyForecasts[date];
        const temp = forecast.main.temp;
        const icon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

        let forecastItem = `
        <div class="forecast-item">
          <img src="${icon}" alt="${forecast.weather[0].description}" />
          <p>${date}</p>
          <p>${temp}°C</p>
        </div>`;
        forecastSection.innerHTML += forecastItem;
      });
  } catch (error) {
    console.error("Weather data fetch error:", error);
    document.getElementById(
      "forecast"
    ).innerHTML = `<p>Failed to load weather data.</p>`;
  }
}

fetchWeather();
