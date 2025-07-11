console.log(localStorage.getItem('score'));

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

// if (score === null) {
//   score = {
//     wins0,
//     losses: 0,
//     ties: 0
//   }
// }


function playGame(playerMove) {
  let result
  const computerMove = pickComputerMove();

if (playerMove === 'rock') {

  if (computerMove === 'rock') {
    result = 'Tie.'
  }
  else if (computerMove === 'paper') {
    result = 'You lost!'
  }
  else if (computerMove == 'scissors'){
    result = 'You won!'
  }
}

else if (playerMove === 'paper') {
  
  if (computerMove === 'rock') {
    result = 'You won!'
  }
  else if (computerMove === 'paper') {
    result = 'Tie.'
  }
  else if (computerMove == 'scissors'){
    result = 'You lost!'
  }
}

else if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
    result = 'You lost!'
  }
  else if (computerMove === 'paper') {
    result = 'You won!'
  }
  else if (computerMove == 'scissors'){
    result = 'Tie.'
  }
}
  if (result === 'You won!') {
    score.wins ++
  }

  else if (result === 'You lost!') {
    score.losses ++
  }

  else if (result === 'Tie.') {
    score.ties ++
  }


  localStorage.setItem('score', JSON.stringify(score));


  gameResultEmoji(playerMove, computerMove)
  UpdateGameResult(result)
 
  console.log(result)
  console.log(`Wins: ${score.wins}, Losses: ${score.losses} and Ties: ${score.ties}.`)

}


function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = "rock"
  }
  else if (1/3 <= randomNumber && randomNumber < 2/3){
    computerMove = "paper"
    }
  else if (randomNumber >= 2/3){
    computerMove = "scissors"
  }

  return computerMove;
}    

function UpdateGameResult(result) {
  const scoreElement = document.querySelector('.game-result');
  scoreElement.innerText = result;


  const previousScoreElement = document.querySelector('.JS-score');
  previousScoreElement
    .innerText = `Wins: ${score.wins}, Losses: ${score.losses} and Ties: ${score.ties}.`;
}

function ResetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');

  UpdateGameResult()

  document.querySelector('.game-result').innerText = '-';

  document.querySelector('.JS-moves').innerText = ``
}

function gameResultEmoji(playerMove, computerMove) {
  let playerMoveEmoji = '';
  let computerMoveEmoji = '';

  if (playerMove === 'rock') {
    playerMoveEmoji = '🪨';
  }
  else if (playerMove === 'paper') {
    playerMoveEmoji = '🧻';
  }
  else if (playerMove === 'scissors') {
    playerMoveEmoji = '✂️';
  }

  if (computerMove === 'rock') {
    computerMoveEmoji = '🪨';
  }
  else if (computerMove === 'paper') {
    computerMoveEmoji = '🧻';
  }
  else if (computerMove === 'scissors') {
    computerMoveEmoji = '✂️';
  }
  console.log(playerMove)
  console.log(computerMove)
  document.querySelector('.JS-moves').innerText = `You played ${playerMoveEmoji} ${playerMove} vs computer played ${computerMoveEmoji}`
}