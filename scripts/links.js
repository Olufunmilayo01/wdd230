const baseURL = "https://olufunmilayo01.github.io/wdd230/";
const linksURL = "https://olufunmilayo01.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error("Error fetching links:", error);
  }
}

function displayLinks(weeks) {
  const activityList = document.querySelector("#activity-links");
  activityList.innerHTML = ""; // Clear existing content

  weeks.forEach((week) => {
    let weekLine = document.createElement("p"); // Create a paragraph for each week
    weekLine.innerHTML = `<strong>${week.week}:</strong> `;

    let linkTexts = week.links.map(
      (link) =>
        `<a href="${baseURL + link.url}" target="_blank">${link.title}</a>`
    );

    weekLine.innerHTML += linkTexts.join(" | "); // Join links with a separator
    activityList.appendChild(weekLine);
  });
}

getLinks();
