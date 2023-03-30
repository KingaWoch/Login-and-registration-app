// forms display

const loginBtn = document.getElementById("login-btn"),
  registrationBtn = document.getElementById("registration-btn"),
  loginForm = document.getElementById("login-form"),
  registrationForm = document.getElementById("registration-form");

loginBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
  registrationForm.classList.remove("active");
  loginBtn.classList.add("hidden");
  registrationBtn.classList.remove("hidden");
});

registrationBtn.addEventListener("click", () => {
  loginForm.classList.remove("active");
  registrationForm.classList.add("active");
  registrationBtn.classList.add("hidden");
  loginBtn.classList.remove("hidden");
});

/* form validation   */

const userName = document.getElementById("username"),
  userNameError = document.querySelector(".username-error-text"),
  password = document.getElementById("password"),
  passwordError = document.querySelector(".password-error-text"),
  email = document.getElementById("email"),
  emailError = document.querySelector(".email-error-text"),
  email2 = document.getElementById("email2"),
  email2Error = document.querySelector(".email2-error-text");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userNameValue = userName.value,
    passwordValue = password.value,
    emailValue = email.value,
    email2Value = email2.value;

  // username validation

  const userNameRexEx = /^[a-zA-Z\s]{6,16}$/;
  if (!userNameValue.match(userNameRexEx)) {
    userName.classList.add("invalid");
    userNameError.innerHTML = "Musi zawierać od 6 do 16 liter";
  } else {
    userName.classList.remove("invalid");
    userNameError.innerHTML = "";
  }

  // password validation

  const passwordRegEx = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[\W_]).{8,}$/;

  if (!passwordValue.match(passwordRegEx)) {
    password.classList.add("invalid");
    passwordError.innerHTML = "Zły format";
  } else {
    password.classList.remove("invalid");
    passwordError.innerHTML = "";
  }

  // email validation

  const emailRexEx = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

  if (!emailValue.match(emailRexEx)) {
    email.classList.add("invalid");
    emailError.innerHTML = "Zły format";
  } else {
    email.classList.remove("invalid");
    emailError.innerHTML = "";
  }

  // email2 validation
  if (emailValue !== email2Value || !email2Value) {
    email2.classList.add("invalid");
    email2Error.innerHTML = "Potwierdź email";
  } else if (!emailValue.match(emailRexEx)) {
    email2.classList.add("invalid");
    email2Error.innerHTML = "Zły format";
  } else {
    email2.classList.remove("invalid");
    email2Error.innerHTML = "";
  }

  localStorage.setItem("username", userNameValue);
  localStorage.setItem("password", passwordValue);
  localStorage.setItem("email", emailValue);
  localStorage.setItem("email2", email2Value);

  if (
    userNameValue.match(userNameRexEx) &&
    passwordValue.match(passwordRegEx) &&
    emailValue.match(emailRexEx) &&
    emailValue === email2Value
  ) {
    window.location.href = "history.html";
  }
});

const loginUserName = document.getElementById("login-username"),
  loginUserNameError = document.querySelector(".login-username-error-text"),
  loginPassword = document.getElementById("login-password"),
  loginPasswordError = document.querySelector(".login-password-error-text");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const loginUserNameValue = loginUserName.value,
    loginPasswordValue = loginPassword.value;

  // login username validation

  const userNameRexEx = /^[a-zA-Z\s]{6,16}$/;
  if (!loginUserNameValue.match(userNameRexEx)) {
    loginUserName.classList.add("invalid");
    loginUserNameError.innerHTML = "Nieprawidłowa nazwa użytkownika/Email";
  } else {
    userName.classList.remove("invalid");
    userNameError.innerHTML = "";
  }

  // login password validation

  const passwordRegEx = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[\W_]).{8,}$/;

  if (!loginPasswordValue.match(passwordRegEx)) {
    loginPassword.classList.add("invalid");
    loginPasswordError.innerHTML = "Nieprawidłowe hasło";
  } else {
    password.classList.remove("invalid");
    passwordError.innerHTML = "";
  }

  localStorage.setItem("login-username", loginUserNameValue);
  localStorage.setItem("login-password", loginPasswordValue);

  if (
    loginUserNameValue.match(userNameRexEx) &&
    loginPasswordValue.match(passwordRegEx)
  ) {
    window.location.href = "history.html";
  }
});
