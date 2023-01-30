let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("form");
let error = document.getElementById("error");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  for (let cred of credentials) {
    if (cred.username === username.value && cred.password === password.value) {
      location.replace("../html/main.html");
      return;
    }
  }
  error.style.display = "block";
}
