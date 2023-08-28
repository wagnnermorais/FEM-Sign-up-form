const form = document.querySelector("#register-form");
const firstName = document.querySelector("#name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitForm = document.querySelector("#form-button");
const firstNameImageError = document.querySelector("#first-name-message-error");
const firstNameMessageError = document.querySelector("#first-name-image-error");
const lastNameImageError = document.querySelector("#last-name-message-error");
const lastNameMessageError = document.querySelector("#last-name-image-error");
const emailImageError = document.querySelector("#email-image-error");
const emailMessageError = document.querySelector("#email-message-error");
const passwordImageError = document.querySelector("#password-image-error");
const passwordMessageError = document.querySelector("#password-message-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const nameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  function invalidInput(message, image) {
    message.classList.remove("hide");
    image.classList.remove("hide");
  }

  function validInput(message, image) {
    message.classList.add("hide");
    image.classList.add("hide");
  }

  nameValue === ""
    ? invalidInput(firstNameMessageError, firstNameImageError)
    : validInput(firstNameMessageError, firstNameImageError);

  lastNameValue === ""
    ? invalidInput(lastNameMessageError, lastNameImageError)
    : validInput(lastNameMessageError, lastNameImageError);

  emailValue === ""
    ? invalidInput(emailMessageError, emailImageError)
    : validInput(emailMessageError, emailImageError);

  passwordValue === ""
    ? invalidInput(passwordMessageError, passwordImageError)
    : validInput(passwordMessageError, passwordImageError);
}
