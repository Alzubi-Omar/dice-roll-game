/**
 * Utility function to generate a random dice roll
 */
export function rollDiceValue() {
  return Math.trunc(Math.random() * 6) + 1;
}

/**
 * Utility function to update dice image
 */
export function updateDiceImage(dice) {
  const diceElement = document.getElementById("dice");
  diceElement.classList.remove("hidden");
  diceElement.src = `assets/images/dice-${dice}.png`;
}
