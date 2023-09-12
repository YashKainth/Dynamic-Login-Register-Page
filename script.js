function toggleForm(formType) {
  const loginForm = document.querySelector(".login-form");
  const registerForm = document.querySelector(".register-form");

  if (formType === "register") {
    loginForm.classList.remove("active");
    loginForm.classList.add("inactive");
    registerForm.classList.add("active");
    registerForm.classList.remove("inactive");
  } else if (formType === "login") {
    loginForm.classList.remove("inactive");
    loginForm.classList.add("active");
    registerForm.classList.add("inactive");
    registerForm.classList.remove("active");
  }
}
