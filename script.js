// Player factory function
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
    // Create two players for the game
    const pl1 = Player('Player 1', 'X', true);
    const pl2 = Player('Player 2', 'O', false);
    // Add click event for each cell
    boardCells.forEach(cell => {
        cell.addEventListener('click', e => {
            let cell =e.target;
            if(pl1.turn == true && !cell.classList.contains('o-mark')){
                cell.classList.add('x-mark');  // add class to div to add mark
                pl1.cellsMarked.push(e.target.id);  // add the cell "number" to cellsMarked arr
                pl1.turn = false;  // Switch players turn
                pl2.turn = true;
            }
            else if(pl2.turn == true && !cell.classList.contains('x-mark')){
                cell.classList.add('o-mark');  // add class to div to add mark
                pl2.cellsMarked.push(e.target.id);  // add the cell "number" to cellsMarked arr
                pl1.turn = true;  // Switch players turn
                pl2.turn = false;
            }
        });
    });      
})();


