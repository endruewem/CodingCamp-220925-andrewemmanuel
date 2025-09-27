document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("nameModal");
  const modalInput = document.getElementById("modalNameInput");
  const modalSubmit = document.getElementById("modalSubmit");
  const modalSkip = document.getElementById("modalSkip");
  const usernameSpan = document.getElementById("username");

  openModal();

  function openModal() {
    modal.classList.add("active");
    setTimeout(() => modalInput.focus(), 200);
  }

  function closeModal(nameValue) {
    modal.classList.remove("active");
    if (nameValue && nameValue.trim() !== "") {
      usernameSpan.textContent = nameValue.trim();
    } else {
      usernameSpan.textContent = "Guest";
    }
  }

  modalSubmit.addEventListener("click", () => {
    closeModal(modalInput.value);
  });

  modalSkip.addEventListener("click", () => {
    closeModal("");
  });

  modalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      closeModal(modalInput.value);
    }
  });
});

(function () {
  const form = document.getElementById("contactForm");
  const output = document.getElementById("formOutput");

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phoneDigits = phone.replace(/[\s\-()+]/g, "");
    if (!/^\d+$/.test(phoneDigits)) {
      alert("Phone number must contain only digits (you may include +, spaces or - which will be ignored).");
      return;
    }

    output.innerHTML = `
      <h3>Submitted Data:</h3>
      <p><strong>Name:</strong> ${escapeHTML(name)}</p>
      <p><strong>Email:</strong> ${escapeHTML(email)}</p>
      <p><strong>Phone:</strong> ${escapeHTML(phone)}</p>
      <p><strong>Message:</strong> ${escapeHTML(message)}</p>
    `;

    form.reset();
  });

  function escapeHTML(s) {
    return s.replace(/[&<>"']/g, function (m) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
    });
  }
})();
