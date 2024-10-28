// Utility functions and event handlers

function startGame(boundaries, status) {
    boundaries.forEach(boundary => boundary.classList.remove('youlose'));
    status.textContent = 'Game started! Navigate to the "E" without touching the walls.';
}

function loseGame(boundaries, status) {
    boundaries.forEach(boundary => boundary.classList.add('youlose'));
    status.textContent = 'You lost! Try again.';
}

function winGame(status) {
    status.textContent = 'You win! Congratulations!';
}