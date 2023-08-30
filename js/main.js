const form = document.querySelector("#register-form");
const firstName = document.querySelector("#name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitForm = document.querySelector("#form-button");
const firstNameImageError = document.querySelector("#first-name-image-error");
// prettier-ignore
const firstNameMessageError = document.querySelector("#first-name-message-error");
const lastNameImageError = document.querySelector("#last-name-image-error");
const lastNameMessageError = document.querySelector("#last-name-message-error");
const emailImageError = document.querySelector("#email-image-error");
const emailMessageError = document.querySelector("#email-message-error");
const passwordImageError = document.querySelector("#password-image-error");
const passwordMessageError = document.querySelector("#password-message-error");
const error = document.querySelectorAll("small");
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let isError = false;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});

function validInput(message, image) {
  message.classList.add("hide");
  image.classList.add("hide");
  isError = false;
}

function invalidInput(input, image, message) {
  input.classList.remove("hide");
  image.classList.remove("hide");
  input.innerText = message;
  isError = true;
}

function validateForm() {
  firstName.value.trim() === ""
    ? invalidInput(
        firstNameMessageError,
        firstNameImageError,
        "First Name cannot be empty"
      )
    : validInput(firstNameMessageError, firstNameImageError);

  lastName.value.trim() === ""
    ? invalidInput(
        lastNameMessageError,
        lastNameImageError,
        "Last Name cannot be empty"
      )
    : validInput(lastNameMessageError, lastNameImageError);

  email.value.trim() === ""
    ? invalidInput(emailMessageError, emailImageError, "E-mail cannot be empty")
    : validInput(emailMessageError, emailImageError);

  password.value.trim() === ""
    ? invalidInput(
        passwordMessageError,
        passwordImageError,
        "Password cannot be empty"
      )
    : validInput(passwordMessageError, passwordImageError);

  if (firstName.value.length > 1 && firstName.value.length < 3) {
    invalidInput(
      firstNameMessageError,
      firstNameImageError,
      "First Name must have at least 3 characters"
    );
  }

  if (lastName.value.length > 1 && lastName.value.length < 3) {
    invalidInput(
      lastNameMessageError,
      lastNameImageError,
      "Last Name must have at least 3 characters"
    );
  }

  if (email.value.length > 1 && !email.value.match(pattern)) {
    document.getElementById("email").placeholder = "email@example.com";
    invalidInput(
      emailMessageError,
      emailImageError,
      "Looks like this is not an e-mail"
    );
    email.value = "";
  }

  if (password.value.length > 1 && password.value.length < 5) {
    invalidInput(
      passwordMessageError,
      passwordImageError,
      "Password must have at least 4 characters"
    );
  }

  if (!isError) return alert("Submission successful");
}
