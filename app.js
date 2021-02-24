/* function to randomly generate computer choice of rock,paper or scissors*/

function computerPlay() {
    let r = Math.floor(Math.random() * 3);         
    if(r === 0){
        return "Rock";
    }
    else if(r === 1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

//console.log(computerPlay());

//playRound function for a single round for player and cpu choice
function playRound(playerSelection,computerSelection){
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();

    if(p === "rock"){
        if(c === "paper"){
            computer_score += 1;
            return "You lose! Paper beats Rock";
        }
        else if(c === "scissors"){
            player_score += 1;
            return "You win! Rock beats Scissors";
        }
        else{
            return "Match tied! Same choice";
        }
    }
    else if(p === "paper"){
        if(c === "rock"){
            player_score += 1;
            return "You win! Paper beats Rock";
        }
        else if(c === "scissors"){
            computer_score += 1;
            return "You lose! Scissors beats Paper";
        }
        else{
            return "Match tied! Same choice";
        }
    }
    else if(p === "scissors"){
        if(c === "rock"){
            computer_score += 1;
            return "You lose! Rock beats Scissors";
        }
        else if(c === "paper"){
            player_score += 1;
            return "You win! Scissors beat Paper";
        }
        else{
            return "Match tied! Same choice";
        }
    }
  
}

//function for resetting score
function resetAll(){
    player_score = 0;
    computer_score = 0;
    showScore();
    return;
}

//function for displaying game result after 5 rounds completed
function update(){
    showScore();
    if(player_score === 5){
        alert('YOU WIN!');
        resetAll();
    }
    else if(computer_score === 5){
        alert('YOU LOSE!');
        resetAll();
    }
    return;
}

//function for displaying score to user
function showScore(){
    player.textContent = 'Player : ' + player_score;
    computer.textContent = 'Computer : ' + computer_score;
    return;
}

function para(){
    result.innerHTML = "<p>" +returned+" </p>";
    page.appendChild(result);
    return;
}

//selectors
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#btn');
let player_score = 0;
let computer_score = 0;
let returned = "";

//event click listeners for rock, paper, and scissors
rock.addEventListener('click', ()=>{

    returned = playRound('rock',computerPlay());
    showScore();
    update();
    para();
    console.log(returned);

});

paper.addEventListener('click', ()=>{
   
    returned = playRound('paper',computerPlay());
    showScore();
    update();
    para();
    console.log(returned);
});

scissors.addEventListener('click', ()=>{
  
    returned = playRound('scissors',computerPlay());
    showScore();
    update();
    para();
    console.log(returned);
});

reset.addEventListener('click', ()=>{
    resetAll();
    update();
});

const playerid = document.getElementById(player);
const computerid = document.getElementById(computer);

const result = document.createElement('div');
const page = document.querySelector('.page');






