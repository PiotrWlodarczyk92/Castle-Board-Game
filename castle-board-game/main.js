import './style.css'

let game = document.getElementById("game");

let board = [
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 2, 1, 0, 1, 2, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 4, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 2, 1, 1, 1, 2, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 3, 1, 1, 1, 3, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 4, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 1, 3, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
]

function buildBoard() {
  for (let i = 0; i < board.length; i++) {
    let row = document.createElement("div"); // create div for each row
    row.classList.add("row")
    game.appendChild(row)
      for (let j = 0; j < board[i].length; j++) {
      let col = document.createElement("div");  // create div for each case
      let piece = document.createElement("div");
      piece.classList.add("piece")
      col.classList.add("col")
      row.appendChild(col)
      col.appendChild(piece)

      if (board[i][j] > 0 && board[i][j] != 4) {
        col.classList.add("wall")
        if (board[i][j] == 2) {
          piece.classList.add("player_one_piece")
        } else if (board[i][j] == 3) {
          piece.classList.add("player_two_piece")
        }
    } else if (board[i][j] == 4) {
        col.classList.add("main-square")
    }
    piece.addEventListener('click', movePiece)
  }
  
  }

function movePiece(e) {
  let piece = e.target;
  piece.classList.add("marked")
}

}

buildBoard()