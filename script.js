let choice;
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = function() {
    choices = ["rock", "paper", "scissors"];
    selectedChoiceNum = Math.floor(Math.random() * 3);
    return choices[selectedChoiceNum];
};

let playRound = function(humanChoice, computerChoice) {
    const humanScoreText = document.getElementById('player-score-para');
    const computerScoreText = document.getElementById('computer-score-para');
    humanScoreText.textContent = `You :- ${humanScore}`;
    computerScoreText.textContent = `Computer :- ${computerScore}`;
    if (humanScore < 5 && computerScore < 5) {
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
    } else if (humanScore == 5) {
        const winnerPara = document.getElementById('winner-para');
        winnerPara.textContent = `${humanScore} : ${computerScore} => You win the game!`;
    } else {
        const winnerPara = document.getElementById('winner-para');
        winnerPara.textContent = `${humanScore} : ${computerScore} => You lose :(`;
    }
};

document.addEventListener('DOMContentLoaded', (event) => {
    const rockButton = document.getElementById('rock-button');
    const paperButton = document.getElementById('paper-button');
    const scissorsButton = document.getElementById('scissors-button');

    rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()))
    paperButton.addEventListener('click', () => playRound('paper', getComputerChoice()))
    scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice()))
});

document.getElementById('refreshBtn').onclick = function() {
    location.reload();
};