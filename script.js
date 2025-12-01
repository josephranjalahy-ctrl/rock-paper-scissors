function getComputerChoice() {
  let result = Math.floor((Math.random()) * 3);

  if (result == 0) return "rock";
  if (result == 1) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  let answer = prompt("Enter a value").toLowerCase();

  if (answer == "rock") return "rock";
  if (answer == "paper") return "paper";
  if (answer == "scissors") return "scissors";
  else return "Not a valid answer";
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  if (humanChoice == computerChoice) return "Tie game!";

  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    return "You lose! Paper beats rock";
  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    return "You won! Paper beats rock";
  }
  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    return "You won! Rock beats scissors";
  }
  if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    return "You lose! Scissors beats rock";
  }

  else {
    humanScore++;
    return "You won! Scissors beats paper";
}
}