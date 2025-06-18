"use-strict";

// SIGN UP LOGIC

let records = [];

if (localStorage.getItem("users")) {
  records = JSON.parse(localStorage.getItem("users"));
}
console.log(records);

// DOM ELEMENTS
const form = document.querySelector(".login-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const success = document.getElementById("success");
const fail = document.getElementById("fail");
const emailInvalid = document.getElementById("email-invalid");
const userExist = document.getElementById("user-exists");

// REGEX VALIDATION
const nameValidation = /^[A-Za-z\s]{1,}$/;
const emailValidation = /^[\w.-]+@(mail|google|yahoo|yandex|gmail)\.com$/;
const passwordValidation = /^.{1,}$/;

function userExists() {
  let flag = false;
  records.forEach((user) => {
    if (user.name === nameInput.value) {
      flag = true;
    }
  });

  return flag;
}

function inputValidation() {
  const nameValid = nameValidation.test(nameInput.value.trim());
  const emailValid = emailValidation.test(emailInput.value.trim());
  const passwordValid = passwordValidation.test(passwordInput.value);

  if (nameValid && emailValid && passwordValid) {
    success.classList.remove("d-none");
    fail.classList.add("d-none");
    emailInvalid.classList.add("d-none");
    userExist.classList.add("d-none");
    storeInputs();
  } else {
    success.classList.add("d-none");
    if (!emailValid) {
      emailInvalid.classList.remove("d-none");
    } else {
      fail.classList.remove("d-none");
    }
  }
}

function storeInputs() {
  records.push({
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  });

  localStorage.setItem("users", JSON.stringify(records));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userExists()) {
    userExist.classList.remove("d-none");
    success.classList.add("d-none");
    return;
  }
  inputValidation();
});
