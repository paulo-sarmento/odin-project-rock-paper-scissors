const displayPlayerChoice = document.querySelector('#playerChoice')
const displayPcChoice = document.querySelector('#pcChoice')

const playerChoices = document.querySelectorAll('.playerChoices > .btn')
const pcChoices = document.querySelectorAll('.pcChoices > .btn')

//pega o nó filho do botão clicado neste caso o <img> e passa o seu src como parámetro da função showPlayerChoice e
//também passa como parámetro da função playRound o atributo alt da imagem clicado. ou seja. pedra, papel ou tesoura
let getPlayerChoice = (e) => {
    let btn = e.currentTarget
    isActive(btn)
    let img = btn.children
    let choice = img[0].getAttribute("alt")
    showPlayerChoice(img[0].src)
    playRound(choice)
}

//recebe como parámetro um src e altera o src da imagem da escolha do usuário
let showPlayerChoice = (src) => {
    return displayPlayerChoice.src = src
}

//adiciona escutador de eventos em cada botão de escolha do jogador e chama a função getPlayerChoice
let playerChoice = playerChoices.forEach(btn => {
    btn.addEventListener('click', getPlayerChoice)
})

let isActive = (btn) => {
    btn.classList.add('active')
    let arr = Array.from(playerChoices)
    
    let filterPlayerChoice = arr.filter(btn => {
        let btnClassList = btn.classList.value
        let check = /active/.test(btnClassList)
        return check
    })

    console.log(filterPlayerChoice)

    if(filterPlayerChoice.length > 1) {
        filterPlayerChoice.forEach(btn => {
            btn.classList.remove('active')
        })
    }
    btn.classList.add('active')
}

let choices = ['rock', 'paper', 'scissors']

const computerPlay = () => choices[Math.floor(Math.random() * 3)]

let playerScoreCount = 0
let pcScoreCount = 0

const playerScore = document.querySelector('#playerScore')
const pcScore = document.querySelector('#pcScore')

const playRound = (playerChoice) => {
    let computerChoice = computerPlay()
    switch (playerChoice) {
        case 'rock':
            if (computerChoice === 'scissors') {
                console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
                console.log(`escolha do jogador ${playerChoice} escolha da máquina ${computerChoice}`)
                playerScoreCount++;
                playerScore.innerText = playerScoreCount
            }
            else if (computerChoice === playerChoice) {
                console.log(`${computerChoice} and ${playerChoice} = draw`)
                console.log(`escolha do jogador ${playerChoice} escolha da máquina ${computerChoice}`)
            } else {
                console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
                console.log(`escolha do jogador ${playerChoice} escolha da máquina ${computerChoice}`)
                pcScoreCount++
                pcScore.innerText = pcScoreCount
            }
        break;
        case 'paper':
            if (computerChoice === 'rock') {
                console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
                console.log(`escolha do jogador ${playerChoice} escolha da máquina ${computerChoice}`)
                playerScoreCount++;
                playerScore.innerText = playerScoreCount
            } 
            else if (computerChoice === playerChoice) {
                console.log(`${computerChoice} and ${playerChoice} = draw`)
                console.log(`escolha do jogador ${playerChoice} escolha da máquina ${computerChoice}`)
            } else {
                console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
                console.log(`escolha do jogador ${playerChoice} escolha da máquina ${computerChoice}`)
                pcScoreCount++
                pcScore.innerText = pcScoreCount
            }
        break;
        case 'scissors':
            if (computerChoice === 'paper') {
                console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
                console.log(`escolha do jogador ${playerChoice} escolha da máquina ${computerChoice}`)
                playerScoreCount++;
                playerScore.innerText = playerScoreCount
            } 
            
            else if (computerChoice === playerChoice) {
                console.log(`${computerChoice} and ${playerChoice} = draw`)
                console.log(`escolha do jogador ${playerChoice} escolha da máquina ${computerChoice}`)
            } else {
                console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
                console.log(`escolha do jogador ${playerChoice} escolha da máquina ${computerChoice}`)
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
