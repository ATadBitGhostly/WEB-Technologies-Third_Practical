document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page refresh

    // Clear any existing alerts
    clearAlerts();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const errors = [];

    // Validation

    if (name === "") {
      errors.push("Name is required.");
    }

    if (email === "") {
      errors.push("Email is required.");
    } else if (!isValidEmail(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (message === "") {
      errors.push("Message is required.");
    } else if (message.length < 20) {
      errors.push("Message must be at least 20 characters long.");
    }

    if (errors.length > 0) {
      showAlert(errors, "danger");
    } else {
      showAlert(["Your message has been sent successfully!"], "success");
      form.reset();
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Creates and inserts a Bootstrap alert above the form
  function showAlert(messages, type) {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", `alert-${type}`, "alert-dismissible", "fade", "show");
    alertDiv.setAttribute("role", "alert");
    alertDiv.setAttribute("id", "formAlert");

    if (messages.length === 1) {
      alertDiv.textContent = messages[0];
    } else {
      const ul = document.createElement("ul");
      ul.classList.add("mb-0");
      messages.forEach((msg) => {
        const li = document.createElement("li");
        li.textContent = msg;
        ul.appendChild(li);
      });
      alertDiv.appendChild(ul);
    }

    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.classList.add("btn-close");
    closeBtn.setAttribute("data-bs-dismiss", "alert");
    closeBtn.setAttribute("aria-label", "Close");
    alertDiv.appendChild(closeBtn);

    // Insert alert before the form
    form.parentNode.insertBefore(alertDiv, form);
  }

  function clearAlerts() {
    const existing = document.getElementById("formAlert");
    if (existing) {
      existing.remove();
    }
  }
});