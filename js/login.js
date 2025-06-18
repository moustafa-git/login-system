"use-strict";

//LOGIN LOGIC

let records = [];

if (localStorage.getItem("users")) {
  records = JSON.parse(localStorage.getItem("users"));
}

// DOM ELEMENTS
const emailInput = document.getElementById("email-login");
const passwordInput = document.getElementById("password-login");
const loginForm = document.querySelector(".login-form");
const invalidLogin = document.getElementById("invalid-login");
const fail = document.getElementById("fail");

function validateLogin() {
  let flag = false;
  records.forEach((user) => {
    if (
      user.email === emailInput.value &&
      user.password === passwordInput.value
    ) {
      flag = true;
    }
  });

  return flag;
}

function setSession() {
  localStorage.setItem("session", emailInput.value);
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailInput.value && passwordInput.value) {
    fail.classList.add("d-none");
    if (validateLogin()) {
      invalidLogin.classList.add("d-none");
      console.log("success");
      setSession();
      window.location.href = "home.html";
    } else {
      invalidLogin.classList.remove("d-none");
    }
  } else {
    fail.classList.remove("d-none");
  }
});
