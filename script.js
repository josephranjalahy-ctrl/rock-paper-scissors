console.log("Hello World!");

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

// Same, but in a switch statement

// function getHumanChoice() {
  // let answer = prompt("Enter a value");

  // switch (answer) {
    // case "rock":
      // return "rock";
    // case "paper":
      // return "paper";
    // case "scissors":
      // return "scissors";
    // default:
      // return "Not a valid answer";
  // }
// }