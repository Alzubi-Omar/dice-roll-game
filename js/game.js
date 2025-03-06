import { updateUI, toggleActivePlayer, showWinner } from "./ui.js";
import { rollDiceValue, updateDiceImage } from "./utils.js";

// Game state
const state = {
  scores: [0, 0],
  currentScore: 0,
  activePlayer: 0,
  playing: false,
};

/**
 * Initialize the game state
 */
export function initGame() {
  state.scores = [0, 0];
  state.currentScore = 0;
  state.activePlayer = 0;
  state.playing = true;

  // Update the UI with initial state
  updateUI(state);

  // Add event listeners for game buttons
  document.getElementById("btn-roll").addEventListener("click", rollDice);
  document.getElementById("btn-hold").addEventListener("click", holdScore);
  document.getElementById("btn-new").addEventListener("click", startNewGame);
}

/**
 * Roll the dice and update game state
 */
export function rollDice() {
  if (!state.playing) return;

  // Generate random dice value (1-6)
  const dice = rollDiceValue();

  // Update UI to show dice
  updateDiceImage(dice);

  // Process dice result
  if (dice !== 1) {
    // Add dice value to current score
    state.currentScore += dice;
    document.getElementById(`current--${state.activePlayer}`).textContent =
      state.currentScore;
  } else {
    // Switch to next player
    switchPlayer();
  }
}

/**
 * Hold current score and switch player
 */
export function holdScore() {
  if (!state.playing) return;

  // Add current score to active player's score
  state.scores[state.activePlayer] += state.currentScore;

  // Update UI
  document.getElementById(`score--${state.activePlayer}`).textContent =
    state.scores[state.activePlayer];

  // Hide the dice when holding the score
  document.getElementById("dice").classList.add("hidden");

  // Check if player won
  if (state.scores[state.activePlayer] >= 100) {
    state.playing = false;

    // Update UI to show winner
    showWinner(state.activePlayer);
  } else {
    // Switch to next player
    switchPlayer();
  }
}

/**
 * Switch to the next player
 */
function switchPlayer() {
  // Reset current player's current score
  document.getElementById(`current--${state.activePlayer}`).textContent = 0;

  // Switch active player
  state.activePlayer = state.activePlayer === 0 ? 1 : 0;
  state.currentScore = 0;

  // Toggle active player visually
  toggleActivePlayer();
}

/**
 * Start a new game
 */
export function startNewGame() {
  initGame();
  updateUI(state); // Ensure UI is updated
}
