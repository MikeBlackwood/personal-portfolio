let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submitBtn = document.getElementById("submit-email");
let restBtn = document.getElementById("reset-form");
let form = document.getElementById("email-form");

function resetEmailForm()
{
    console.log(firstName);
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
}

