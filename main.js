let playerScore = 0;
let computerScore = 0;
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
  document.getElementById('result').textContent = '';
  document.getElementById('computerSelect').textContent = 'Computer: ' + computerSelection;
  document.getElementById('playerSelect').textContent = 'Player: ' + playerSelection;
  

  if (computerSelection === playerSelection)
    return;

  if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    ++playerScore;
    document.getElementById('playerScore').textContent = 'Player: ' + playerScore;
  } else {
    ++computerScore;
    document.getElementById('computerScore').textContent = 'Computer: ' + computerScore;
  }

  if(playerScore === 5){
    document.getElementById('result').textContent = 'You Win';
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScore').textContent = 'Player: ' + playerScore;
    document.getElementById('computerScore').textContent = 'Computer: ' + computerScore;
  }

  if(computerScore === 5){
    document.getElementById('result').textContent = 'You Lose';
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScore').textContent = 'Player: ' + playerScore;
    document.getElementById('computerScore').textContent = 'Computer: ' + computerScore;
  }

}

function play(e){
  playRound(computerPlay(), e.target.value);
}
let buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', play));

