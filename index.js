const displayPlayerChoice = document.querySelector('#playerChoice')
const displayPcChoice = document.querySelector('#pcChoice')

const playerChoices = document.querySelectorAll('.playerChoices > .btn')
const pcChoices = document.querySelectorAll('.pcChoices > .btn > img')

const pcChoicesBtn = document.querySelectorAll('.pcChoices > .btn')

const result = document.querySelector('.result')
const winner = document.querySelector('.winner')

//pega o nó filho do botão clicado neste caso o <img> e passa o seu src como parámetro da função showPlayerChoice e
//também passa como parámetro da função playRound o atributo alt da imagem clicado. ou seja. pedra, papel ou tesoura
let getPlayerChoice = (e) => {
    let btn = e.currentTarget
    activeChoice(playerChoices, btn)
    let img = btn.children
    let playerChoice = img[0].getAttribute("alt")
    showChoice(displayPlayerChoice, img[0].src)
    playRound(playerChoice)
}

let getPcChoice = (computerChoice) => {
    console.log(pcChoices.parentNode)
    pcChoices.forEach(choice => {
        if(computerChoice == choice.getAttribute('alt')) {
            showChoice(displayPcChoice, choice.src)
            activeChoice(pcChoicesBtn, choice.parentNode)
        }
    })
}

//recebe como parámetro um src e altera o src da imagem da escolha do usuário
let showChoice = (display, src) => {
    return display.src = src
}

//adiciona escutador de eventos em cada botão de escolha do jogador e chama a função getPlayerChoice
let playerChoice = playerChoices.forEach(btn => {
    btn.addEventListener('click', getPlayerChoice)
})

let activeChoice = (array, btn) => {
    let arr = Array.from(array)

    arr.forEach(btn => {
        btn.classList.remove('active')
    })

    setTimeout(() => btn.classList.add('active'), 100) 
}

let choices = ['rock', 'paper', 'scissors']

const computerPlay = () => choices[Math.floor(Math.random() * 3)]

let playerScoreCount = 0
let pcScoreCount = 0

const playerScore = document.querySelector('#playerScore')
const pcScore = document.querySelector('#pcScore')

const playRound = (playerChoice) => {
    let computerChoice = computerPlay()
    getPcChoice(computerChoice)
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    console.log(playerChoice)
    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)

    switch (playerChoice) {
        case 'Rock':
            if (computerChoice === 'Scissors') {
                result.innerText = `${playerChoice} and ${computerChoice}`
                winner.innerText = 'Winner is: Player'
                playerScoreCount++;
                playerScore.innerText = playerScoreCount
            }
            else if (computerChoice === playerChoice) {
                result.innerText = `${playerChoice} and ${computerChoice}. It's a tie.`
                winner.innerText = 'Winner is:'
            } else {
                result.innerText = `${playerChoice} and ${computerChoice}`
                winner.innerText = 'Winner is: Machine'
                pcScoreCount++
                pcScore.innerText = pcScoreCount
            }
        break;
        case 'Paper':
            if (computerChoice === 'Rock') {
                result.innerText = `${playerChoice} and ${computerChoice}`
                winner.innerText = 'Winner is: Player'
                playerScoreCount++;
                playerScore.innerText = playerScoreCount
            } 
            else if (computerChoice === playerChoice) {
                result.innerText = `${playerChoice} and ${computerChoice}. It's a tie.`
                winner.innerText = 'Winner is:'
            } else {
                result.innerText = `${playerChoice} and ${computerChoice}.`
                winner.innerText = 'Winner is: Machine'
                pcScoreCount++
                pcScore.innerText = pcScoreCount
            }
        break;
        case 'Scissors':
            if (computerChoice === 'Paper') {
                result.innerText = `${playerChoice} and ${computerChoice}`
                winner.innerText = 'Winner is: Player'
                playerScoreCount++;
                playerScore.innerText = playerScoreCount
            } 
            
            else if (computerChoice === playerChoice) {
                result.innerText = `${playerChoice} and ${computerChoice}. It's a tie.`
                winner.innerText = 'Winner is:'
            } else {
                result.innerText = `${playerChoice} and ${computerChoice}.`
                winner.innerText = 'Winner is: Machine'
                pcScoreCount++
                pcScore.innerText = pcScoreCount
            }
        break;
    }

}


    // for (let i = 0; i < 5; i++) {
    //     let playerChoice = playerPlay()
    //     let computerChoice = computerPlay()
    //     playRound(playerChoice, computerChoice)
    // }
    
    // if (playerScoreCount > computerScore) {
    //     console.log(`Player Score: ${playerScore}. Computer Score: ${computerScore}. Player is the Winner`)
    // } else if (playerScore == computerScore) {
    //     console.log(`Player Score: ${playerScore}. Computer Score: ${computerScore}. Draw`)
    // } else {
    //     console.log(`Player Score: ${playerScore}. Computer Score: ${computerScore}. Computer is the Winner`)
    // }

// }
