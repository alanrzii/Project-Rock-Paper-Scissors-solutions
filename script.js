function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  document.getElementById("player").textContent =
    "Player chose: " + playerChoice;

  document.getElementById("computer").textContent =
    "Computer chose: " + computerChoice;

  document.getElementById("outcome").textContent = result;
}
