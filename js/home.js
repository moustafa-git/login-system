"use-strict";

// DOM ELEMENTS
const welcomeTitle = document.querySelector(".welcome-title");
const logout = document.querySelector(".nav-button");

const userEmail = localStorage.getItem("session");
const records = JSON.parse(localStorage.getItem("users"));
let username = "";

records.forEach((user) => {
  if (user.email === userEmail) username = user.name;
});

welcomeTitle.innerHTML = `Welcome ${username}`;

logout.addEventListener("click", () => {
  window.location.href = "index.html";
});
