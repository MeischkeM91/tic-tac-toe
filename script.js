// Player factory function
const Player = (name, mark, turn) => {
    this.name = name;
    this.mark = mark;
    this.turn = turn;
    let cellsMarked = [];
    return {name, mark, turn, cellsMarked};
};
// Create two players for the game
const pl1 = Player('Player 1', 'X', true);
const pl2 = Player('Player 2', 'O', false);

// Array for the Grid
const boardCells = document.querySelectorAll('.grid-cell');
// Manip results-display with DOM
const resultsDisplay = document.querySelector('.results-display');
const winVerbiage = document.querySelector('.win-verbiage');

// Gameboard object holds gameboard in arr and handles the gameflow
const gameboard = (() => {
    // Create var for our mark classes
    const xClass = 'x-mark';
    const oClass = 'o-mark';
    let board = [];
    let turns = 0;

    // Add click event for each cell
    boardCells.forEach(cell => {
        cell.addEventListener('click', e => {
            let cell =e.target;
            if(pl1.turn == true && !cell.classList.contains(oClass) && !cell.classList.contains(xClass)){
                cell.classList.add(xClass);  // add class to div to add mark
                pl1.cellsMarked.push(e.target.id);  // add the cell "number" to cellsMarked arr
                if (checkWin(xClass)){
                    displayWin(pl1.name);
                }
                else if(!checkWin(xClass) && turns==8){
                    displayTie();
                }
                turns++;
                console.log(turns);
                pl1.turn = false;  // Switch players turn
                pl2.turn = true;
            }
            else if(pl2.turn == true && !cell.classList.contains(xClass) && !cell.classList.contains(oClass)){
                cell.classList.add(oClass);  // add class to div to add mark
                pl2.cellsMarked.push(e.target.id);  // add the cell "number" to cellsMarked arr
                if (checkWin(oClass)){
                    displayWin(pl2.name);
                }
                else if(!checkWin(oClass) && turns==9){
                    displayTie();
                }
                turns++;
                console.log(turns);
                pl1.turn = true;  // Switch players turn
                pl2.turn = false;
            }
        });
    });      
})();

const winCombinations =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkWin(mark){
    return winCombinations.some(comb => {
        return comb.every(ind =>{
            return boardCells[ind].classList.contains(mark)
        })
    })
};

const displayWin = (name) =>{
    resultsDisplay.style.display = 'flex';
    winVerbiage.innerText = `${name} is the Winner!`;
}

const displayTie = () =>{
    resultsDisplay.style.display = 'flex';
    winVerbiage.innerText = `It's a Tie! How Lame.`;
}