document.addEventListener("DOMContentLoaded", () => {
  let openBtn = document.querySelector("#open-btn");
  let closeBtn = document.querySelector("#close-btn");
  let logOut = document.querySelector("#log-out");
  let signUp = document.querySelector(".sign-up");
  let userName = document.querySelector("#text");
  let password = document.querySelector("#password");
  let submit = document.querySelector("#submit");
  let profileName = document.querySelector("#profile-name");
  let profile = document.querySelector(".profile");
  let username = localStorage.getItem("username");

  // Check if a username is already stored and display it
  if (username) {
    openBtn.style.display = "none";
    profileName.innerText = username;
    profile.style.display = "block";
  }

  openBtn.addEventListener("click", () => {
    signUp.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    signUp.style.display = "none";
  });

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (userName.value.trim() === "" || password.value.trim() === "") {
      alert("Please fill in both fields.");
      return;
    }
    localStorage.setItem("username", userName.value);
    signUp.style.display = "none";
    openBtn.style.display = "none";
    profileName.innerText = userName.value;
    profile.style.display = "block";
  });

  logOut.addEventListener("click", () => {
    localStorage.removeItem("username");
    profile.style.display = "none";
    openBtn.style.display = "block";
  });
});
