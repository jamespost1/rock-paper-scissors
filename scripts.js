let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const val = Math.trunc((Math.random()*10)%3);
    if(val===0){
        return "Rock";
    } else if (val===1){
        return "Paper";
    } else if(val===2){
        return "Scissors";
    }
}


function playRound(humanChoice, computerChoice){
    if(computerChoice.toLowerCase()===humanChoice.toLowerCase()){
        console.log("Draw! No points rewarded");
    } else if(computerChoice.toLowerCase()==="rock"&&humanChoice.toLowerCase()==="paper"){
        console.log("Paper covers rock! +1 point to you");
        humanScore++;
    } else if(computerChoice.toLowerCase()==="rock"&&humanChoice.toLowerCase()==="scissors"){
        console.log("Rock beats scissors! +1 point to the computer");
        computerScore++;
    } else if(computerChoice.toLowerCase()==="paper"&&humanChoice.toLowerCase()==="rock"){
        console.log("Paper covers rock! +1 point to the computer");
        computerScore++;
    } else if(computerChoice.toLowerCase()==="paper"&&humanChoice.toLowerCase()==="scissors"){
        console.log("Scissors cut paper! +1 point to you");
        humanScore++;
    } else if(computerChoice.toLowerCase()==="scissors"&&humanChoice.toLowerCase()==="rock"){
        console.log("Rock beats scissors! +1 point to you");
        humanScore++;
    } else if(computerChoice.toLowerCase()==="scissors"&&humanChoice.toLowerCase()==="paper"){
        console.log("Scissors cut paper! +1 point to the computer");
        computerScore++;
    }
    const score = document.querySelector("#score");
    score.textContent = `You: ${humanScore} Computer: ${computerScore}`;
    
    if(humanScore===5){
        score.textContent = `You win! You: ${humanScore} Computer: ${computerScore}`;
    } else if(computerScore===5){
        score.textContent = `Computer wins! You: ${humanScore} Computer: ${computerScore}`;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

const score = document.querySelector("#score");
score.textContent = `You: ${humanScore} Computer: ${computerScore}`;