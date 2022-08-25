let players = ['x', 'o'];
let dimentionX = 2;
let dimentionY = 3;

let board;

function startGame() {
  // 1
board = [];

for (let i = 0; i < dimentionY; i++) {
  board[i] = [];
  for(let j = 0; j < dimentionX; j++) {
    board[i][j] = '';
  }
}
console.log(board);
  // 3 
  renderBoard(board);
}
let count = 0;

function click() {
  count++
  renderBoard(board);
  console.log(`Мы кликнули мышью ${count} раз`);

}

