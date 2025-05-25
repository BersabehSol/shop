let register = document.querySelector("#register");
let email = document.querySelector("#email");
let userName = document.querySelector("#text");
let password = document.querySelector("#password");

register.addEventListener("click", function () {
  // Store the username in localStorage
  localStorage.setItem("username", userName.value);

  // Redirect to the homepage
  window.location.href =
    "C:/Users/Administrator/OneDrive/Documents/IP Assignment II/Landing Page/index.html";
});
