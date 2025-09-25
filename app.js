console.log("Welcome to Rock-Paper-Scissor Game!");
console.log("Type 'exit' to end the game.");

const choices = ['rock', 'paper', 'scissor'];
let count = 0;

function getCompChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];    
}

function game(userChoice, compChoice){
    if(userChoice===compChoice){
        return "It's a tie!";  
    }
    else if((userChoice==="rock" && compChoice==="scissor") || (userChoice==="paper" && compChoice==="rock") || (userChoice==="scissor" && compChoice==="paper")){
        count++;
        return "You win!";
    }
    else if((userChoice==="rock" && compChoice==="paper") || (userChoice==="paper" && compChoice==="scissor") || (userChoice==="scissor" && compChoice==="rock")){
        return "Computer wins!";
    }       
}

while(true){
    let userChoice = prompt("Enter your choice: rock, paper or scissor");

    if(userChoice === null){
        break;
    }

    userChoice = userChoice.toLowerCase();
    if(!choices.includes(userChoice) && userChoice !== "exit"){
        console.log("Invalid choice! Please choose rock, paper or scissor.");
        continue;
    }

    if(userChoice==="exit" || userChoice==="Exit"){
        break;
    }
    
    let compChoice = getCompChoice();

    console.log("Your choice : " + userChoice);    
    console.log("Computer choice : " + compChoice); 

    console.log(game(userChoice, compChoice));
}      

console.log("Your total score is: " + count);