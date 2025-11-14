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

console.log(getHumanChoice());