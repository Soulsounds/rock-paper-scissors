//create variable for playerScore and cpuScore

const playerScore = 0;
const cpuScore = 0;

//create variable for player turn and make value uppercase
//const playerTurn = prompt('Select rock, paper, or scissors.');
const playerChoice = playerTurn.toUpperCase();

//pop up message if correct value not entered in


console.log(playerChoice)

//create array for rock, paper, and scissors
const rps = ['ROCK', 'PAPER', 'SCISSORS'];

//create variable that chooses items in rps at random
const cpuChoice = rps[Math.floor(Math.random() * rps.length)]
console.log(cpuChoice)

//create conditional for player picks
function checkWinner(){
  if(playerChoice === cpuChoice){
    console.log('Tie!')
  } else if(playerChoice === 'ROCK'){
    if(cpuChoice === 'PAPER'){
      console.log('You Lose! Paper covers rock.')
    } else{
      console.log('You win! Rock smashes scissors.')
    }
  }

  else if(playerChoice === 'PAPER'){
    if(cpuChoice === 'SCISSORS'){
      console.log('You lose! Scissors cuts paper.')
    }
    else{
      console.log('You win! Paper covers rock.')
    }
  }

  else if(playerChoice === 'SCISSORS'){
    if(cpuChoice === 'ROCK'){
      console.log('You lose! Rock crushes scissors.')
    } else{
      console.log('You win! Scissors cuts paper.')
    }
  }
}

console.log(checkWinner())
