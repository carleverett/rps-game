function computerPlay(){
    let choices = ["rock" , "paper", "scissors"];

    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function playRound(){
    let selection = prompt("Please choose either rock, paper, or scissors and type the choice into the input box.");

    const playerSelection = selection.slice(0).toLowerCase();
    const computerSelection = computerPlay();

    let playerScore = 0;
    let computerScore = 0;

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