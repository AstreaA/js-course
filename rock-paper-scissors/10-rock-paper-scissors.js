let randomNumber = 0;
let computerMove = '';
let result = '';

const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
updateScore();


/*
if (!score) {
    const score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
*/
function playGame(playerMove) {
    computerMove = pickComputerMove();

    if (playerMove === 'scissors'){
        if (computerMove === 'rock') {
            result = 'You Lose';
        }

        else if (computerMove === 'paper') {
            result = 'You win!';
        }

        else if (computerMove === 'scissors') {
            result = 'Nonce';
        }
    }

    else if (playerMove === 'paper'){
        if (computerMove === 'rock') {
            result = 'You win!';
        }

        else if (computerMove === 'paper') {
            result = 'Nonce';
        }

        else if (computerMove === 'scissors') {
            result = 'You Lose';
        }
        
    }

    else if (playerMove === 'rock'){
        if (computerMove === 'rock') {
            result = 'Nonce';
        }

        else if (computerMove === 'paper') {
            result = 'You Lose';
        }

        else if (computerMove === 'scissors') {
            result = 'You win!';
        }
        
    }


    if (result === 'You win!') {
        score.wins += 1;
    }
    else if (result === 'You Lose') {
        score.losses += 1;
    }
    else if (result === 'Nonce') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.result')
        .innerHTML = result;
    document.querySelector('.your-choises')
        .innerHTML =`You <img src="${playerMove}-emoji.png" class="move-icon">
        <img src="${computerMove}-emoji.png" class="move-icon">
        Computer`;


    updateScore();

    //alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
//Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`)

}
function updateScore () {
    document.querySelector('.js-score')
        .innerHTML =`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function pickComputerMove() {
    randomNumber = Math.random();

    if (randomNumber>= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
        }

    else if (randomNumber >= 1/3 && randomNumber <2/3) {
        computerMove = 'paper';
    }

    else if (randomNumber >= 2/3 && randomNumber <= 1) {
        computerMove = 'scissors';
    }
    return computerMove
}