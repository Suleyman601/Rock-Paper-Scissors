function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3 + 1);

  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    return "Tie";
  }

  if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection == "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    return "you win";
  } else {
    return "you lose";
  }
}

function game() {
  for (let i = 0; i < 5; ++i) {
    let computerChoice = computerPlay();
    let playerChoice = prompt("Enter choice");
    playerChoice.toLowerCase();
    console.log(`Round ${i + 1}`);
    console.log(`Computer: ${computerChoice}`);
    console.log(`playerChoice: ${playerChoice}`);
    console.log(playRound(computerChoice, playerChoice));
    console.log("\n");
  }
}
game();
