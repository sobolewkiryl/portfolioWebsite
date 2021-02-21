const name = document.querySelector("#name");

const email = document.querySelector("#email");

const message = document.querySelector("#message");

const button = document.querySelector(".contact-button");

button.onclick = function () {
  if (name.value == "" || email.value == "" || message.value == "") {
    alert("Please fill all fields properly");
    button.preventDefault();
  }
};
