// Select elements
const startBox = document.getElementById('start');
const endBox = document.getElementById('end');
const boundaries = document.querySelectorAll('.boundary');
const status = document.getElementById('status');

let gameStarted = false;
let gameLost = false;

// Function to handle game start
function handleStart() {
    gameStarted = true;
    gameLost = false;
    startGame(boundaries, status);
}

// Function to handle game loss
function handleLoss() {
    if (gameStarted) {
        gameLost = true;
        loseGame(boundaries, status);
    }
}

// Function to handle game win
function handleWin() {
    if (gameStarted && !gameLost) {
        winGame(status);
    }
}

// mouseover event listeners
startBox.addEventListener('mouseover', handleStart);
endBox.addEventListener('mouseover', handleWin);
boundaries.forEach(boundary => boundary.addEventListener('mouseover', handleLoss));

// Reset game if mouse leaves the game area (to avoid cheating)
document.getElementById('game').addEventListener('mouseleave', () => {
    if (gameStarted) {
        status.textContent = 'You left the game area! Try again.';
        gameStarted = false;
        boundaries.forEach(boundary => boundary.classList.remove('youlose'));
    }
});