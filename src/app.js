function checkEmail() {
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("email-confirm").value;
  return email === confirmEmail && email.endsWith("@aston.ac.uk");
}

function checkDate() {
  const selectedDate = new Date(document.getElementById("date").value);
  return selectedDate > new Date();
}

function validateForm() {
  let isValid = true;

  const emailError = document.getElementById("email-error");
  const dateError = document.getElementById("date-error");
  const phoneError = document.getElementById("phone-error");

  // Check email validity
  if (!checkEmail()) {
    emailError.innerText = "Emails must match and use an Aston domain.";
    isValid = false;
  } else {
    emailError.innerText = "";
  }

  // Phone number validation
  const phoneNumber = document.getElementById("phone-number").value;
  if (phoneNumber && phoneNumber.length < 10) {
    phoneError.innerText = "Please enter a valid phone number.";
    isValid = false;
  } else {
    phoneError.innerText = "";
  }

  // Check date validity (future date)
  if (!checkDate()) {
    dateError.innerText = "Please select a future date.";
    isValid = false;
  } else {
    dateError.innerText = "";
  }

  // If validation fails, prevent form submission
  if (!isValid) {
    return false;
  }

  return true; // Proceed with form submission if everything is valid
}
