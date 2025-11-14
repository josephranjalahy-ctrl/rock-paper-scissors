console.log("Hello World");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";
  return "scissors";
}

function getHumanChoice () {
    let choice = prompt("Make your choice");

    if (choice == "rock") return "rock";
    if (choice == "paper") return "paper";
    if (choice == "scissors") return "scissors";
    return "Not an expected value"
}

let humanScore = 0
let ComputerScore = 0

function playRound() {
    let human = getHumanChoice();
    let computer = getComputerChoice();

    if (human === computer) {
        return "Tie game!";
    }

    if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        return "You win! " + human + " beats " + computer;
    }

    return "You lose! " + computer + " beats " + human;
}

console.log(playRound());