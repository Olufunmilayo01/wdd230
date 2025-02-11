// Password Matching Validation
document.querySelector("form").addEventListener("submit", function (event) {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let errorMessage = document.getElementById("passwordError");

  if (password !== confirmPassword) {
    event.preventDefault();
    errorMessage.textContent = "Passwords do not match!";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("password").focus();
  } else {
    errorMessage.textContent = "";
  }
});

// Select the range input and the display span
const ratingInput = document.getElementById("rating");
const ratingValue = document.getElementById("ratingValue");

// Function to update the displayed value
function updateRatingValue() {
  ratingValue.textContent = ratingInput.value;
}

// Update the value on input and change events
ratingInput.addEventListener("input", updateRatingValue);
ratingInput.addEventListener("change", updateRatingValue);
