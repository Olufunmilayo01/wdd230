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

const hamburgerElement = document.querySelector(".hamburger");
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

// // Lazy Loading Images
// document.addEventListener("DOMContentLoaded", function () {
//   const lazyImages = document.querySelectorAll(".lazy-load");
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const img = entry.target;
//         img.src = img.getAttribute("data-src");
//         img.classList.remove("lazy-load");
//         observer.unobserve(img);
//       }
//     });
//   });
//   lazyImages.forEach((img) => observer.observe(img));
// });

// Lazy Loading for Mobile Only

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy-load");

  if (window.innerWidth <= 768) {
    // Mobile-only lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute("data-src");
            img.removeAttribute("data-src");
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: "100px" }
    ); // Trigger earlier for smooth loading

    lazyImages.forEach((img) => observer.observe(img));
  } else {
    // On Desktop: Load all images immediately
    lazyImages.forEach((img) => {
      img.src = img.getAttribute("data-src");
      img.removeAttribute("data-src");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const visitMessage = document.getElementById("visitMessage");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    visitMessage.textContent =
      "Welcome! Let us know if you have any questions.";
  } else {
    const daysPassed = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (daysPassed < 1) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysPassed === 1) {
      visitMessage.textContent = "You last visited 1 day ago.";
    } else {
      visitMessage.textContent = `You last visited ${daysPassed} days ago.`;
    }
  }

  localStorage.setItem("lastVisit", now);
});
