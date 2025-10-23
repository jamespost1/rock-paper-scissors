function getComputerChoice(){
    let val = Math.trunc((Math.random()*10)%3);
    if(val==0){
        return "Rock";
    } else if (val==1){
        return "Paper";
    } else if(val==2){
        return "Scissors";
    }
}

function getHumanChoice(){
    prompt("Rock, Paper, Scissors says SHOOT! Input your move:")
}