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
    let weekItem = document.createElement("h3");
    weekItem.textContent = week.week;
    activityList.appendChild(weekItem);

    let linkList = document.createElement("ul");

    week.links.forEach((link) => {
      let listItem = document.createElement("li");
      let anchor = document.createElement("a");
      anchor.href = baseURL + link.url;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      linkList.appendChild(listItem);
    });

    activityList.appendChild(linkList);
  });
}

getLinks();
