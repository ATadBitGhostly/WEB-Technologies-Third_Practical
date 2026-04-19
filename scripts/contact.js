// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   clearAlerts();

//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const message = document.getElementById("message").value.trim();

//   const errors = [];

//   if (name === "") errors.push("Name is required.");
//   if (email === "") errors.push("Email is required.");
//   else if (!isValidEmail(email)) errors.push("Invalid email.");

//   if (message === "") errors.push("Message is required.");
//   else if (message.length < 20) errors.push("Message too short.");

//   if (errors.length > 0) {
//     showAlert(errors, "danger");
//     return;
//   }

//   form.submit();
// });