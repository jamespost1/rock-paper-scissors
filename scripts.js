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
    const resultMsg = document.querySelector("#result");
    const score = document.querySelector("#score");

    if(computerChoice.toLowerCase()===humanChoice.toLowerCase()){
        resultMsg.textContent="Draw! No points rewarded";
    } else if (
    (computerChoice==="rock"&&humanChoice==="paper") || 
    (computerChoice==="paper"&&humanChoice==="scissors") || 
    (computerChoice==="scissors"&&humanChoice==="rock")
    ) {
        humanScore++;
        resultMsg.textContent=`You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultMsg.textContent=`You lose this round! ${computerChoice} beats ${humanChoice}`;
    }

    score.textContent=`🧍 You: ${humanScore} | Computer: ${computerScore} 🤖`;


    
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