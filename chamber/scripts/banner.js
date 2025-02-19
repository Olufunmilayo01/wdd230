const today = new Date().getDay(); // 0 = Sunday, 1 = Monday...
const banner = document.getElementById("meet-greet-banner");

if (today >= 1 && today <= 3) { // Mon-Wed
  banner.style.display = "block";
}

document.getElementById("close-banner").addEventListener("click", () => {
  banner.style.display = "none";
});
