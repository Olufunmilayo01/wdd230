// document.addEventListener("DOMContentLoaded", () => {
//   const membersContainer = document.querySelector("#members-container");
//   const toggleGrid = document.querySelector("#grid-view");
//   const toggleList = document.querySelector("#list-view");

//   async function fetchMembers() {
//     try {
//       const response = await fetch("data/members.json");
//       const data = await response.json();
//       displayMembers(data); // Default view is grid
//     } catch (error) {
//       console.error("Error fetching members:", error);
//     }
//   }

//   function displayMembers(members) {
//     membersContainer.innerHTML = ""; // Clear previous content

//     members.forEach((member) => {
//       const memberDiv = document.createElement("div");
//       memberDiv.classList.add("member");

//       memberDiv.innerHTML = `
//                 <img src="images/${member.image}" alt="${member.name}">
//                 <div class="info">
//                     <h3>${member.name}</h3>
//                     <p>${member.address}</p>
//                     <p>${member.phone}</p>
//                     <a href="${
//                       member.website
//                     }" target="_blank">Visit Website</a>
//                     <p class="membership ${member.membership.toLowerCase()}">${
//         member.membership
//       } Member</p>
//                 </div>
//             `;

//       membersContainer.appendChild(memberDiv);
//     });
//   }

//   // Toggle between Grid and List View
//   toggleGrid.addEventListener("click", () => {
//     membersContainer.classList.add("grid");
//     membersContainer.classList.remove("list");
//   });

//   toggleList.addEventListener("click", () => {
//     membersContainer.classList.add("list");
//     membersContainer.classList.remove("grid");
//   });

//   fetchMembers(); // Load data on page load
// });

document.addEventListener("DOMContentLoaded", () => {
  const membersContainer = document.querySelector("#members-container");
  const toggleGrid = document.querySelector("#grid-view");
  const toggleList = document.querySelector("#list-view");

  async function fetchMembers() {
    try {
      const response = await fetch("data/members.json");
      const data = await response.json();
      displayMembers(data); // Default view is grid
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  }

  function displayMembers(members) {
    membersContainer.innerHTML = ""; // Clear previous content

    members.forEach((member) => {
      const memberDiv = document.createElement("div");
      memberDiv.classList.add("member");

      memberDiv.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <div class="info">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${
                      member.website
                    }" target="_blank">Visit Website</a>
                </div>
                <p class="membership ${member.membership.toLowerCase()}">${
        member.membership
      } Member</p>
            `;

      membersContainer.appendChild(memberDiv);
    });
  }

  // Toggle between Grid and List View
  toggleGrid.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
    toggleGrid.classList.add("active");
    toggleList.classList.remove("active");
  });

  toggleList.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
    toggleList.classList.add("active");
    toggleGrid.classList.remove("active");
  });

  fetchMembers(); // Load data on page load
});
