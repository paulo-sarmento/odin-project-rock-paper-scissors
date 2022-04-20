let choices = ['rock', 'paper', 'scissors']

const computerPlay = () => choices[Math.floor(Math.random() * 3)]
const playerPlay = () => {
    let choice = prompt('Choose Rock, Paper or Scissors')
    return choice.toLowerCase()
}

const game = () => {
    let playerScore = 0
    let computerScore = 0

    const playRound = (playerChoice, computerChoice) => {
        switch (playerChoice) {
            case 'rock':
                if (computerChoice === 'scissors') {
                    console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
                    playerScore++;
                }
                else if (computerChoice === playerChoice) {
                    return console.log(`${computerChoice} and ${playerChoice} = draw`)
                } else {
                    console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
                    computerScore++
                }
            break;
            case 'paper':
                if (computerChoice === 'rock') {
                    console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
                    playerScore++
                } 
                
                else if (computerChoice === playerChoice) {
                    return console.log(`${computerChoice} and ${playerChoice} = draw`)
                } else {
                    return console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
                    computerScore++
                }
            break;
            case 'scissors':
                if (computerChoice === 'paper') {
                    console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
                    playerScore++
                } 
                
                else if (computerChoice === playerChoice) {
                    console.log(`${computerChoice} and ${playerChoice} = draw`)
                } else {
                    console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
                    computerScore++
                }
            break;
        }
    
    }

    for (let i = 0; i < 5; i++) {
        let playerChoice = playerPlay()
        let computerChoice = computerPlay()
        playRound(playerChoice, computerChoice)
    }
    
    if (playerScore > computerScore) {
        console.log(`Player Score: ${playerScore}. Computer Score: ${computerScore}. Player is the Winner`)
    } else if (playerScore == computerScore) {
        console.log(`Player Score: ${playerScore}. Computer Score: ${computerScore}. Draw`)
    } else {
        console.log(`Player Score: ${playerScore}. Computer Score: ${computerScore}. Computer is the Winner`)
    }

}

game()