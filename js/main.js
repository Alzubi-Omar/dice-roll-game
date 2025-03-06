// Import modules
import { initGame } from "./game.js";
import { initUI } from "./ui.js";

// Initialize the game when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize UI elements
  initUI();

  // Initialize the game
  initGame();

  // Update copyright year
  const currentYear = new Date().getFullYear();
  document.getElementById("copyright").textContent = `© ${currentYear}`;
});
