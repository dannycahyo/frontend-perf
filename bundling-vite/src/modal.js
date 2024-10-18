export function showModal() {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
          <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Modal Title</h2>
            <p>This is a modal popup!</p>
          </div>
        `;
  document.body.appendChild(modal);

  const closeButton = modal.querySelector(".close-button");
  closeButton.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
}
