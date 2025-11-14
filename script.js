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

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const human = getHumanChoice();
    const computer = getComputerChoice();

    if (human === computer) {
        console.log("Tie this round!");
        return;
    }

    const playerWins =
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper");

    if (playerWins) {
        humanScore++;
        console.log("You win this round! " + human + " beats " + computer);
    } else {
        computerScore++;
        console.log("CPU wins this round! " + computer + " beats " + human);
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i);
        playRound();
    }

    console.log("Final score — You:", humanScore, "CPU:", computerScore);

    if (humanScore > computerScore) {
        return "🎉 You won the game!";
    }

    if (computerScore > humanScore) {
        return "💀 CPU won the game!";
    }

    return "🤝 It's a tie overall!";
}

console.log(playGame());
