function computerPlay(){
    let choices = ["rock" , "paper", "scissors"];

    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(compChoice);
}

function playerSelection(){
    let selection = prompt("Please choose either rock, paper, or scissors and type the choice into the input box.");

    let choice = selection.slice(0).toLowerCase();
    console.log(choice);
}