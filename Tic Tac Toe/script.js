let turnMusic = new Audio('./ting.mp3');
let gameOver = new Audio('./gameover.mp3');
let turn = 'X';
let reset = document.getElementById('reset');
let winner = document.getElementById('win');
let winText = document.querySelector('.win');

// function to change the turn
const changeTurn = () => {
    turn = turn === 'X' ? 'O' : 'X';
}

// function to check for win
const checkWin = () => {
    let boxText = document.getElementsByClassName('box-text');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]


    wins.forEach(win => {
        if ((boxText[win[0]].innerText === boxText[win[1]].innerText) && (boxText[win[2]].innerText === boxText[win[1]].innerText) && (boxText[win[0]].innerText !== '')) {
            winText.style.opacity = '1';
            boxText[win[0]].style.color = 'green'
            boxText[win[1]].style.color = 'green'
            boxText[win[2]].style.color = 'green'
            winner.innerText = boxText[win[0]].innerText;
        }

    });
}



// game logic 

const boxes = document.getElementsByClassName('box');
let count = 0
Array.from(boxes).forEach(box => {
    let boxText = box.querySelector('.box-text');
    box.addEventListener('click', () => {
        count += 1;
        if (count === 9) {
            winText.style.opacity = '1';
            winText.innerText = 'Match Draw'
        }
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            changeTurn();
            turnMusic.play()
            checkWin();
            document.querySelector('.box-cover').style.left = turn === 'X' ? '0px' : '100px';
        }
    })
});



// reset game

reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.box-text');
    Array.from(boxTexts).forEach(boxText => {
        boxText.style.color = 'white'
        boxText.innerText = '';
        turn = 'X';
        document.querySelector('.box-cover').style.left = turn === 'X' ? '0px' : '100px';
    })
    count = 0
    winText.style.opacity = '0';
})


