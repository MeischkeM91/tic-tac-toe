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
            if(pl1.turn == true){
                cell.classList.add('x-mark');
                pl1.cellsMarked.push(e.target.id);
                pl1.turn = false;
                pl2.turn = true;
            }
            else if(pl2.turn == true){
                cell.classList.add('o-mark');
                pl2.cellsMarked.push(e.target.id);
                pl1.turn = true;
                pl2.turn = false;
            }

        })
    });
        
})();


