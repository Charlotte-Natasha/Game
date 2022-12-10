let computerScore = 0;
let playerScore = 0;
let rounds = 0;
let stop = false;

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
    
    if (result) {
        let playerPlay = prompt("Please enter: Rock, Paper or Scissors.");
        if (playerPlay === null){
            console.log("Error, please type a valid input");
            return;
        }
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
    else{
        alert("Sorry, Try again next time");
        endGame();
        stop = true;
        
    }
};

const playRound = (playerSelection, computerSelection) => {
    
    if (playerSelection === computerSelection) {
        return `It's a tie! \n You played: ${playerSelection} Computer played: ${computerSelection}`;
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore += 1;
            return `Sorry player, Computer won! \n You played: ${playerSelection} Computer played: ${computerSelection} `;
        } else {
            playerScore += 1;
            return `Congratulations, you won! \n You played: ${playerSelection} Computer played: ${computerSelection}`;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore += 1;
            return `Sorry player, Computer won! \n You played: ${playerSelection} Computer played: ${computerSelection}`;
        } else {
            playerScore +=1
            return `Congratulations, you won! \n You played: ${playerSelection} Computer played: ${computerSelection}`;
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore += 1;
            return `Sorry player, Computer won! \n You played: ${playerSelection} Computer played: ${computerSelection}`;
        } else {
            playerScore += 1;
            return `Congratulations, you won! \n You played: ${playerSelection} Computer played: ${computerSelection}`;
        }
    }
};

const endGame = () => {
    
    if (playerScore > computerScore ) {
        console.log(
            `Game Over! \nFinal score: \n Player: ${playerScore} -- Computer: ${computerScore}`
        );
    } else if (computerScore > playerScore) {
        console.log(
            `Game Over! \nFinal score: \n Player: ${playerScore} -- Computer: ${computerScore}`
        );
    } else {
        console.log(
            `Game Over! \nIt's a tie!!🍻 \nFinal score: \n Player: ${playerScore} -- Computer: ${computerScore}`
        );
    }
}

function game() {
    do {
        console.log(playRound(playerPlay(), computerPlay()));
        rounds += 1;
    } while (rounds < 5 && stop == false);

        endGame();
    }

game();