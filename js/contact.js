function sendForm() {
  let name = document.getElementById("name").value;
 let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");

  let isValid = true;

  if (name === "") {
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  if (email === "" || !validateEmail(email)) {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  if (!isValid) {
    return;
  }

  let formData = {
    name: name,
    email: email,
    message: message,
  };

  console.log(formData);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  document.getElementById("nameError").style.display = "none";
  document.getElementById("emailError").style.display = "none";
}

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}
