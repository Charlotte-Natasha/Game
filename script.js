let computerScore = 0;
let playerScore = 0;
let rounds = 0;

const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

const playerPlay = () => {
    result = confirm("Let's play Rock, Paper, Scissors");
    if (playRound) {
        let playerPlay = prompt("Please enter: Rock, Paper or Scissors.");
        playerPlay = playerPlay.toLowerCase();
        if (
            playerPlay === "rock" ||
            playerPlay === "paper" ||
            playerPlay === "scissors"
        ) {
        return playerPlay;
    } else {
        console.log("Error, please type a valid input");
    }
    }
};

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "Sorry player, Computer won!";
        } else {
            return "Congratulations, you won!";
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "Sorry player, Computer won!";
        } else {
            return "Congratulations, you won!";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "Sorry player, Computer won!";
        } else {
            return "Congratulations, you won!";
        }
    }
};

const endGame = (playerScore, computerScore) => {
    if (playerScore > computerScore ) {
        console.log(
            `Game Over! \nFinal score: \n${playerScore} to ${computerScore}`
        );
    } else if (computerScore > playerScore) {
        console.log(
            `Game Over! \nFinal score: \n${playerScore} to ${computerScore}`
        );
    } else {
        console.log(
            `Game Over! \nIt's a tie!!🍻 \nFinal score: \n${playerScore} to ${computerScore}`
        );
    }
}

function game() {
    do {
        console.log(playRound(playerPlay(), computerPlay()));
    } while (rounds < 5);

        endGame();
    }

game();


