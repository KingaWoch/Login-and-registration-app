
const loginBtn = document.getElementById("login-btn");
const registrationBtn = document.getElementById("registration-btn");
const loginForm = document.getElementById("login-form");
const registrationForm = document.getElementById("registration-form");

loginBtn.addEventListener("click", function() {
    loginForm.style.display = "block";
    registrationForm.style.display = "none";
    loginBtn.style.display = "none"
    registrationBtn.style.display = "block";
});

registrationBtn.addEventListener("click", function() {
    loginForm.style.display = "none";
    registrationForm.style.display = "block";
    registrationBtn.style.display = "none";
    loginBtn.style.display = "block";
});


/* getting values from the form   */

const userName = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const email2 = document.getElementById("email2");


registrationForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const userNameValue = userName.value;
    const passwordValue = password.value;
    const emailValue = email.value;
    const email2Value = email2.value;

    localStorage.setItem("username", userNameValue);
    localStorage.setItem("password", passwordValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("email2", email2Value);

    window.location.href = "history.html";
})

const loginUserName = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const loginUserNameValue = loginUserName.value;
    const loginPasswordValue = loginPassword.value;

    localStorage.setItem("login-username", loginUserNameValue);
    localStorage.setItem("login-password", loginPasswordValue);

    window.location.href = "history.html";
})


