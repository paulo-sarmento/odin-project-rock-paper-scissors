const playerPanel = document.querySelector('.playerPanel > img')
const playerOptions = document.querySelectorAll('.playerOptions > .btn')

const machinePanel = document.querySelector('.machinePanel > img')
const machineOptions = document.querySelectorAll('.machineOptions > .btn > img')

const pcChoicesBtn = document.querySelectorAll('.machineOptions > .btn')

const result = document.querySelector('.result')
const winner = document.querySelector('.winner')

//pega o nó filho do botão clicado neste caso o <img> e passa o seu src como parámetro da função showPlayerChoice e
//também passa como parámetro da função playRound o atributo alt da imagem clicado. ou seja. pedra, papel ou tesoura

let getPlayerPick = (e) => {
  let btn = e.currentTarget
  let img = btn.children

  displayActivePick(playerOptions, btn)

  let playerPick = img[0].getAttribute("alt")
  displayPick(playerPanel, img[0].src)

  playRound(playerPick)
}

let displayActivePick = (options, btn) => {
  let optionsArray = Array.from(options)
  
  optionsArray.forEach(btn => {
    btn.classList.remove('active')
  })
  
  setTimeout( () => btn.classList.add('active'), 100 ) 
}

//recebe como parámetro um src e altera o src da imagem da escolha do usuário
let displayPick = (panel, src) => {
  return panel.src = src
}

let options = ['rock', 'paper', 'scissors']

const machinePlay = () => options[Math.floor(Math.random() * 3)]

let displayMachinePick = (machinePick) => {
  machineOptions.forEach(option => {
    if(machinePick == option.getAttribute('alt')) {
      displayPick(machinePanel, option.src)
      displayActivePick(pcChoicesBtn, option.parentNode)
    }
  })
}

let playerScoreCount = 0
let pcScoreCount = 0

const playerScore = document.querySelector('#playerScore')
const pcScore = document.querySelector('#pcScore')
const gameWinner = document.querySelector('.gameWinner')

const checkWinner = (playerScore, machineScore, displayPlayerScore, displayMachineScore) => {
  if(playerScore == 5) {
    gameWinner.innerText = 'Game Winner is You!'
    playerScore = 0
    machineScore = 0
    displayPlayerScore.innerText = playerScore
    displayMachineScore.innerText = machineScore
  }
  if(machineScore == 5) {
    gameWinner.innerText = 'Game Winner is Machine!'
    playerScore = 0
    machineScore = 0
    displayPlayerScore.innerText = playerScore
    displayMachineScore.innerText = machineScore
  } 
}

const playRound = (playerPick) => {

  let machinePick = machinePlay()
  displayMachinePick(machinePick)

  playerPick = playerPick.charAt(0).toUpperCase() + playerPick.slice(1)
  machinePick = machinePick.charAt(0).toUpperCase() + machinePick.slice(1)

  
  switch (playerPick) {
    case 'Rock':
      if (machinePick === 'Scissors') {
        result.innerText = `${playerPick} and ${machinePick}`
        winner.innerText = 'Round winner is: Player'
        playerScoreCount++;
        playerScore.innerText = playerScoreCount
      }
      else if (machinePick === playerPick) {
        result.innerText = `${playerPick} and ${machinePick}. It's a tie.`
        winner.innerText = 'Round winner is:'
      } else {
        result.innerText = `${playerPick} and ${machinePick}`
        winner.innerText = 'Round winner is: Machine'
        pcScoreCount++
        pcScore.innerText = pcScoreCount
      }
    break;
    case 'Paper':
      if (machinePick === 'Rock') {
        result.innerText = `${playerPick} and ${machinePick}`
        winner.innerText = 'Round winner is: Player'
        playerScoreCount++;
        playerScore.innerText = playerScoreCount
      } 
      else if (machinePick === playerPick) {
        result.innerText = `${playerPick} and ${machinePick}. It's a tie.`
        winner.innerText = 'Round winner is:'
      } else {
        result.innerText = `${playerPick} and ${machinePick}.`
        winner.innerText = 'Round winner is: Machine'
        pcScoreCount++
        pcScore.innerText = pcScoreCount
      }
    break;
    case 'Scissors':
      if (machinePick === 'Paper') {
        result.innerText = `${playerPick} and ${machinePick}`
        winner.innerText = 'Round winner is: Player'
        playerScoreCount++;
        playerScore.innerText = playerScoreCount
      }  
      else if (machinePick === playerPick) {
        result.innerText = `${playerPick} and ${machinePick}. It's a tie.`
        winner.innerText = 'Round winner is:'
      } else {
        result.innerText = `${playerPick} and ${machinePick}.`
        winner.innerText = 'Round winner is: Machine'
        pcScoreCount++
        pcScore.innerText = pcScoreCount
      }
    break;
  }

  checkWinner(playerScoreCount, pcScoreCount, playerScore, pcScore)

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
                  
                  //adiciona escutador de eventos em cada botão de escolha do jogador e chama a função getPlayerChoice   
                  
playerOptions.forEach(option => {
option.addEventListener('click', getPlayerPick)
})
