
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

nameInput.addEventListener('input', function(event) {
    const input = event.target.value;
    const regex = /^[A-Z][a-zA-Z]{0,32}$/; 

    if (!regex.test(input)) {
        nameInput.value = nameInput.value.slice(0, -1); 
        nameError.textContent = "*Only alphabets are allowed, maximum 32 characters.";
    } else {
        nameError.textContent = "";
    }
});

const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

phoneInput.addEventListener('input', function(event) {
    const input = event.target.value;
    const regex = /^[0-9]{1,10}$/;

    if (!regex.test(input)) {
        phoneInput.value = phoneInput.value.slice(0, -1); 
        phoneError.textContent = "*Only digits are allowed, maximum 10 characters.";
    } else {
        phoneError.textContent = "";
    }
});

// Password Input
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

passwordInput.addEventListener('input', function(event) {
    const input = event.target.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*]).{8}$/


    if (!regex.test(input)) {
        passwordInput.value = passwordInput.value.slice(0, 8); // Remove the last character
        passwordError.textContent = "*Only alphanumeric characters and special characters are allowed, maximum 8 characters.";
    } else {
        passwordError.textContent = "";
    }
});

// Confirm Password Input
const confirmPasswordInput = document.getElementById("confirmPassword");
const confirmPasswordError = document.getElementById("confirmPasswordError");

confirmPasswordInput.addEventListener('input', function(event) {
    const input = event.target.value;
    const password = passwordInput.value;

    if (input !== password) {
        confirmPasswordError.textContent = "*Passwords do not match.";
    } else {
        confirmPasswordError.textContent = "";
    }
});


// const passwordField = document.getElementById("password");
// const togglePassword = document.querySelector(".password-toggle-icon i");

// togglePassword.addEventListener("click", function () {
//   if (passwordField.type === "password") {
//     passwordField.type = "text";
//     togglePassword.classList.remove("fa-eye");
//     togglePassword.classList.add("fa-eye-slash");
//   } else {
//     passwordField.type = "password";
//     togglePassword.classList.remove("fa-eye-slash");
//     togglePassword.classList.add("fa-eye");
//   }
// });
