function computerPlay(){
    let choices = ["rock" , "paper", "scissors"];

    let compChoice = choices[Math.floor(Math.random() * choices.length)];   
    return compChoice;
}


let playerScore = 0;
let computerScore = 0;

function playRound(){
    let selection = prompt("Please choose either rock, paper, or scissors and type the choice into the input box.");

    const playerSelection = selection.slice(0).toLowerCase();
    const computerSelection = computerPlay();

    if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose! Paper beats rock."); 
        computerScore++;}
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win! Paper beats scissors."); 
        playerScore++;}
    else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("You win! Paper beats rock.");
        playerScore++;}
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You lose! Scissors beat paper.");
        computerScore++;}
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose! Rock beats scissors.");
        computerScore++;}
    else if(playerSelection === "scissors" && computerSelection === "paper"){ 
        console.log("You win! Scissors beat paper.");
        playerScore++;}
    else(console.log("No winner. Try again."));

    console.log(`Score: Player: ${playerScore}, Computer: ${computerScore}`);
}

function game(){
    for(i = 1; i<=5; i++){
        playRound();
    }

    if(computerScore > playerScore){
        alert("Sorry! You have lost this round of five.")
    }
    else if(playerScore > computerScore){
        alert("Congratulations! You have won this round of five.")
    }
    else if(playerScore = computerScore){
        alert("This round of five has ended in a tie.")
    }
    
    computerScore = 0;
    playerScore = 0;
}