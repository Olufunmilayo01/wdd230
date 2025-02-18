import data from "./data/weather.json" assert { type: "json" };
console.log(data);

document.addEventListener("DOMContentLoaded", (event) => {
  const currentYear = new Date().getFullYear();
  // Set the copyright year in the first paragraph of the footer
  document.getElementById("currentYear").textContent = ` ${currentYear}`;

  // Get the last modified date of the document
  const lastModified = document.lastModified;
  // Set the last modified date in the second paragraph of the footer
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modified: ${lastModified}`;
});

const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector(".menuLinks");

hamburgerElement.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamburgerElement.classList.toggle("open");

  if (navElement.classList.contains("open")) {
    hamburgerElement.textContent = "❎";
  } else {
    hamburgerElement.textContent = "☰";
  }
});

const darkModeButton = document.querySelector("#darkModeButton");
const mainElement = document.querySelector("main");

// Toggle Dark Mode
darkModeButton.addEventListener("click", () => {
  mainElement.classList.toggle("dark-mode");

  // Change button text based on mode
  if (mainElement.classList.contains("dark-mode")) {
    darkModeButton.textContent = "☀";
  } else {
    darkModeButton.textContent = "🌙";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let count = localStorage.getItem("visitCount") || 0;
  count++;
  localStorage.setItem("visitCount", count);
  document.getElementById("visit-count").textContent = count;
});

const apiKey = "9247bc4618a6dd5b62d8d1ac5a976342";
const city = "Lagos";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    document.querySelector("#temperature").textContent = `${data.main.temp}°C`;
    document.querySelector("#condition").textContent =
      data.weather[0].description;
    document
      .querySelector("#weather-icon")
      .setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      );
    document
      .querySelector("#weather-icon")
      .setAttribute("alt", data.weather[0].description);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeather();
