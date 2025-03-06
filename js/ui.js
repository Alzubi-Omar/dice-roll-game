/**
 * Initialize UI elements and event listeners
 */
export function initUI() {
  // Modal elements
  const modal = document.getElementById("rules-modal");
  const overlay = document.getElementById("modal-overlay");
  const closeModalBtn = document.querySelector(".modal__close");
  const showRulesBtn = document.getElementById("show-rules");

  // Set up modal event listeners
  showRulesBtn.addEventListener("click", () => {
    modal.classList.add("active");
    overlay.classList.add("active");
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Keyboard accessibility for modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      overlay.classList.remove("active");
    }
  });

  // Add animation to footer logo
  const footerLogo = document.querySelector(".footer-logo");

  if (footerLogo) {
    footerLogo.addEventListener("mouseenter", () => {
      footerLogo.classList.add("shake");
    });

    footerLogo.addEventListener("mouseleave", () => {
      footerLogo.classList.remove("shake");
    });
  }
}

/**
 * Update UI based on game state
 */
export function updateUI(state) {
  // Reset scores display
  document.getElementById("score--0").textContent = state.scores[0];
  document.getElementById("score--1").textContent = state.scores[1];
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;

  // Hide dice
  document.getElementById("dice").classList.add("hidden");

  // Reset player classes
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
}

/**
 * Toggle active player in the UI
 */
export function toggleActivePlayer() {
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
}

/**
 * Show the winner in the UI
 */
export function showWinner(winner) {
  document.querySelector(`.player--${winner}`).classList.add("player--winner");
  document
    .querySelector(`.player--${winner}`)
    .classList.remove("player--active");
}
