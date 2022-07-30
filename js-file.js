function func() {
    this.style.backgroundColor = 'black';
}



function makeBoard(size) {
    const boardWrapper = document.querySelector('.boardWrapper');
    const board = document.createElement('div');
    board.className = 'board';
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    boardWrapper.appendChild(board);
    for (i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        board.appendChild(square);
        square.addEventListener('mouseover', func);
    }
}

function resetBoard() {
    const b = document.querySelector('.board');
    b.remove();
}


function changeSize() {
    let s=prompt("enter size");
    while(s>64)
    s=prompt("enter size <= 64");
    resetBoard();
    makeBoard(s);
}







makeBoard(16);
const sizeBtn = document.querySelector('.sizeBtn');
sizeBtn.addEventListener('click', changeSize);
