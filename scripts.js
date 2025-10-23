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

function playGame(){
    for(let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        if(humanSelection===null){
            console.log("Game ended early");
            return;
        }
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore>computerScore){
        console.log("You won in a best of 5!")
    } else {
        console.log("You lost in a best of 5.")
    }
}


playGame();