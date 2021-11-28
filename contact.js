let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submitBtn = document.getElementById("submit-email");
let restBtn = document.getElementById("reset-form");
let form = document.getElementById("email-form");
let submitBTn = document.getElementById("submit-form");
function resetEmailForm()
{
    firstName.style.borderColor = "#212529"
    lastName.style.borderColor = "#212529"
    email.style.borderColor = "#212529"
    message.style.borderColor = "#212529"
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
}


function submitForm()
{
    if(firstName.value == "")
    {
        firstName.style.borderColor = "red"
    }
    if(lastName.value == "")
    {
        lastName.style.borderColor = "red"
    }
    if(email.value == "" || !email.value.includes("@"))
    {
        email.style.borderColor = "red"
    }
    if(message.value == "")
    {
        message.style.borderColor = "red"
    }
}

