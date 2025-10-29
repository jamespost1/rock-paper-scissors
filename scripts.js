let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let val = Math.trunc((Math.random()*10)%3);
    if(val===0){
        return "Rock";
    } else if (val===1){
        return "Paper";
    } else if(val===2){
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, Scissors says SHOOT! Input your move:");
    
    if(choice===null){
        console.log("Game canceled")
    }
    choice = choice.trim().toLowerCase();

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        choice = prompt("Please input a valid move: Rock | Paper | Scissors");
        if (choice === null) return null;
        choice = choice.trim().toLowerCase();
    }

    return choice;
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
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  let computerDecision = getComputerChoice();
  playRound(rock,computerDecision);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  let computerDecision = getComputerChoice();
  playRound(paper,computerDecision);
});

const scissors = document.querySelector("#scissors");
scissor.addEventListener("click", () => {
  let computerDecision = getComputerChoice();
  playRound(scissors,computerDecision);
});

const score = document.querySelector("#score");
score.textContent = "You: " + humanScore + " Computer: " + computerScore;