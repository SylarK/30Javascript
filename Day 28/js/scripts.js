const statusDisplay = document.querySelector('.game-status');

/* Declaração de variáveis */

let gameActive = true;
let currentPlayer = 'X';
let gameState = ['','','','','','','','',''];

/* Declaração de mensagens */
const winner            = () => `Jogador ${changePlayer(currentPlayer)} ganhou!`;
const draw              = () => `O jogo terminou em empate!`;
const currentPlayerTurn = () => `É a vez do Jogador ${changePlayer(currentPlayer)} `;

/* Atribuindo a mensagem inicial para o começo do jogo */
statusDisplay.innerHTML = currentPlayerTurn();

/* Condições para ganhar o jogo */

const winnigConditions = [
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

/* Funções */

function changePlayer(player){

    if(player == 'X'){
        return 1;
    } else {
        return 2;
    }

}

function handleCellPlayed(clickedCell, clickedCellIndex){

    // Necessário atualizar o status do game, e também atualizar a interface do usuário

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

}

function handlePlayerChange(){

    // Alternando jogadores
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    statusDisplay.innerHTML = currentPlayerTurn();

}

function handleResultValidation(){

    let roundWon = false;
    for (let i = 0; i <= 7; i++){
        const winCondition = winnigConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if (a === '' || b === '' || c === ''){
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        } 

    }

    if(roundWon){
        statusDisplay.innerHTML = winner();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if(roundDraw){
        statusDisplay.innerHTML = draw();
        gameActive = false;
        return;
    }

    handlePlayerChange();

}

function handleCellClick(clickedCellEvent){

    const clickedCell = clickedCellEvent.target;

    // Recuperando data-cell-index
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    // Verificando se cell já está sendo usado ou status do game está inativo
    if(gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    // Passando pela verificação acim, podemos prosseguir.
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();

}

function handleRestartGame(){

    gameActive = true;
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');

}

/* Eventos */
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game-restart').addEventListener('click', handleRestartGame);