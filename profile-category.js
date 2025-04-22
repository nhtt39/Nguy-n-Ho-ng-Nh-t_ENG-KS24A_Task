const changePasswordBtn = document.getElementById("change-password-btn");
const passwordModal = document.getElementById("password-modal");
const cancelBtn = document.getElementById("cancel-btn");
const saveBtn = document.getElementById("save-btn");

changePasswordBtn.addEventListener("click", () => {
  passwordModal.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  passwordModal.style.display = "none";
});

saveBtn.addEventListener("click", () => {
  passwordModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === passwordModal) {
    passwordModal.style.display = "none";
  }
});
