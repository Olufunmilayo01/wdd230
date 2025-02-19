async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    const members = data.members.filter(
      (member) => member.membership === "Gold" || member.membership === "Silver"
    );

    const randomMembers = members.sort(() => 0.5 - Math.random()).slice(0, 2);
    const spotlightSection = document.getElementById("spotlights");

    spotlightSection.innerHTML = "";
    randomMembers.forEach((member) => {
      spotlightSection.innerHTML += `
        <div class="spotlight">
          <img src="images/${member.image}" alt="${member.name}" />
          <h3>${member.name}</h3>
          <p>${member.description}</p>
        </div>`;
    });
  } catch (error) {
    console.error("Error loading spotlights:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadSpotlights);
