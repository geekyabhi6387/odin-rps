let choice;
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = function() {
    choices = ["rock", "paper", "scissors"];
    selectedChoiceNum = Math.floor(Math.random() * 3);
    return choices[selectedChoiceNum];
}

let getHumanChoice = function() {
    choice = prompt("Rock, paper or scissors");
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Please enter either rock, paper or scissors!");
    }
}

let playRound = function(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
}

let playGame = function() {
    for (let n = 0; n < 5; n++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`${humanScore} : ${computerScore} => You win the game!`);
    } else if (humanScore < computerScore) {
        console.log(`${humanScore} : ${computerScore} => You lose the game!`);
    } else {
        console.log(`${humanScore} : ${computerScore} => The game is tied!`);
    }
}

playGame();
