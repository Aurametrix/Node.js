const Game = (size = 8) => {
  
  // initialize the board
  const board = [];
  for (let i = 0; i < size; ++i) {
    board[i] = [];
    for (let j = 0; j < size; ++j) {
      board[i][j] = '←→↓↑'[Math.floor(Math.random() * 4)];
    }
  }
  
  // initialize the position
  let initialPosition = [
    2 + Math.floor(Math.random() * (size - 4)), 
    2 + Math.floor(Math.random() * (size - 4))
  ];
  
  // ???
  let [x, y] = initialPosition;
  
  const MOVE = {
    "←": ([x, y]) => [x - 1, y],
    "→": ([x, y]) => [x + 1, y],
    "↓": ([x, y]) => [x, y - 1],
    "↑": ([x, y]) => [x, y + 1] 
  };
  while (x >= 0 && y >=0 && x < size && y < size) {
    const arrow = board[x][y];
    
    // ???
    
    [x, y] = MOVE[arrow]([x, y]);
  }
  // ???
};
