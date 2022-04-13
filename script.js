// Gameboard object holds gameboard in arr and handles the gameflow
const gameboard = (() => {
    const boardCells = document.querySelectorAll('.grid-cell');
    let board = [];

    boardCells.forEach(cell => {
        cell.addEventListener('click', e => {
            let cell =e.target;
            cell.classList.add('x-mark');
        })});

})();

const Player = (name, mark) => {
    const getName = () => name;
    const getMark = () => mark;
};

