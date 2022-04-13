const Player = (name, mark, turn) => {
    this.name = name;
    this.mark = mark;
    this.turn = turn;
    let cellsMarked = [];
    return {name, mark, turn, cellsMarked};
};


// Gameboard object holds gameboard in arr and handles the gameflow
const gameboard = (() => {
    const boardCells = document.querySelectorAll('.grid-cell');
    let board = [];
    const pl1 = Player('Player 1', 'X', true);
    const pl2 = Player('Player 2', 'O', false);

    boardCells.forEach(cell => {
        cell.addEventListener('click', e => {
            let cell =e.target;
            cell.classList.add('x-mark');
        })
    });
        
})();


