const cont = document.getElementById('game');
const cellBloc = document.getElementsByClassName('cell');
const round = document.getElementById('play');
const btnNext = document.getElementById('next');

let playerOne = null;
let playerTwo = null;
let isX = true;
let sign = null;
let draw = 0;
const index = (el) => [...el.parentElement.children].indexOf(el);

const Player = (name) => {
  const getName = () => name;
  return { getName };
};

const gameBoard = (() => {
  let gameArray = ['', '', '', '', '', '', '', '', ''];


  const win = () => {
    cont.innerHTML = `
  <h1 class="head" id="winner"> </h1>
    <div class="status_reset">
    <div class="status"> <span id="play">  </span></div>
 <button onclick="gameBoard.reset()">Reset</button> 
  </div>
  <div class=" gameboard">
<div class="grid-game"> 
   <div class="cell cellPlay w"> w</div>
   <div class="cell cellPlay w">w </div>
   <div class="cell cellPlay w">w </div>
   <div class="cell cellPlay w">w </div>
   <div class="cell cellPlay w"> w</div>
   <div class="cell cellPlay w"> w</div>
   <div class="cell cellPlay w">w </div>
   <div class="cell cellPlay w">w </div>
   <div class="cell cellPlay w"> w</div>
  </div>
   
  </div>
  `;
  };


  const checkWin = () => {
    const topLEft = gameArray[0];
    const topMiddle = gameArray[1];
    const topRight = gameArray[2];
    const middleLeft = gameArray[3];
    const middleMiddle = gameArray[4];
    const middleRight = gameArray[5];
    const botomleft = gameArray[6];
    const botomMiddle = gameArray[7];
    const botomRight = gameArray[8];
    /* eslint-disable max-len */
    if ((topLEft && topLEft === topMiddle && topLEft === topRight) || (topLEft && topLEft === middleLeft && topLEft === botomleft) || (topLEft && topLEft === middleMiddle && topLEft === botomRight)) {
      sign = topLEft;
      win();
      isX = null;
    } else if ((topMiddle && topMiddle === topLEft && topMiddle === topRight) || (topMiddle && topMiddle === middleMiddle && topMiddle === botomMiddle)) {
      sign = topMiddle;
      win();
      isX = null;
    } else if ((topRight && topRight === topLEft && topRight === topMiddle) || (topRight && topRight === middleRight && topRight === botomRight) || (topRight && topRight === middleMiddle && topLEft === botomleft)) {
      sign = topRight;
      win();
      isX = null;
    } else if ((middleLeft && middleLeft === topLEft && middleLeft === botomleft) || (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight)) {
      sign = middleLeft;
      win();
      isX = null;
    } else if ((middleMiddle && middleMiddle === middleLeft && middleMiddle === middleRight) || (middleMiddle && middleMiddle === topMiddle && middleMiddle === botomMiddle)) {
      sign = middleMiddle;
      win();
      isX = null;
    } else if ((middleRight && middleRight === middleLeft && middleRight === middleMiddle) || (middleRight && middleRight === topRight && middleRight === botomRight)) {
      sign = middleRight;
      win();
      isX = null;
    } else if ((botomleft && botomleft === middleLeft && botomleft === topLEft) || (botomleft && botomleft === botomMiddle && botomleft === botomRight) || (botomleft && botomleft === middleMiddle && botomleft === topRight)) {
      sign = botomleft;
      win();
      isX = null;
    } else if ((botomMiddle && botomMiddle === middleMiddle && botomMiddle === topMiddle) || (botomMiddle && botomMiddle === botomleft && botomMiddle === botomRight)) {
      sign = botomMiddle;
      win();
      isX = null;
    } else if ((botomRight && botomRight === middleRight && botomRight === topRight) || (botomRight && botomRight === botomMiddle && botomRight === botomleft) || (botomRight && botomRight === middleMiddle && botomRight === topLEft)) {
      sign = botomRight;
      win();
      isX = null;
    }
  };

  /* eslint-enable max-len */
  const next = () => {
    const round = document.getElementById('play');
    if (isX) {
      round.innerHTML = `${playerOne.getName()} is next`;
    } else if (isX === null) {
      if (sign === 'X') {
        round.innerHTML = `${playerOne.getName()} WON`;
        isX = true;
      } else {
        round.innerHTML = `${playerTwo.getName()} WON`;
        isX = true;
      }
    } else {
      round.innerHTML = `${playerTwo.getName()} is next`;
    }


    if (draw === 9 && isX !== null) {
      isX = true;
      round.innerHTML = 'DRAW GAME!!!!!!!';
    }
  };


  const renderBoard = () => {
    let i = 0;
    for (let j = 0; j < cellBloc.length; j += 1) {
      cellBloc[j].innerHTML = gameArray[i];
      i += 1;
    }
  };

  const change = (e) => {
    const allClass = e.target.classList;

    if (allClass[3] !== 'x' && allClass[3] !== 't') {
      if (isX === true) {
        isX = false;
        const ind = index(e.target);
        e.target.classList.add('x');
        draw += 1;
        gameArray[ind] = 'X';
        renderBoard();
        checkWin();
        next();
      } else {
        isX = true;
        const ind = index(e.target);
        e.target.classList.add('t');
        draw += 1;
        gameArray[ind] = '0';
        renderBoard();
        checkWin();
        next();
      }
    }
  };


  const clickEvent = () => {
    for (let i = 0; i < cellBloc.length; i += 1) {
      cellBloc[i].addEventListener('click', change);
    }
  };


  const reset = () => {
    gameArray = ['', '', '', '', '', '', '', '', ''];
    renderBoard();
    clickEvent();
    next();
    draw = 0;
  };


  return {
    reset, clickEvent, renderBoard, next,
  };
})();


const gameController = (() => {
  const diplayBoard = () => {
    cont.innerHTML = `
  <h1 class="head" id="winner"> </h1>
    <div class="status_reset">
    <div class="status"> <span id="play">  </span></div>
 <button onclick="gameBoard.reset()">Reset</button> 
  </div>
  <div class=" gameboard">
<div class="grid-game"> 
   <div class="cell cellPlay w"> </div>
   <div class="cell cellPlay w"> </div>
   <div class="cell cellPlay w"> </div>
   <div class="cell cellPlay w"> </div>
   <div class="cell cellPlay w"></div>
   <div class="cell cellPlay w"></div>
   <div class="cell cellPlay w"> </div>
   <div class="cell cellPlay w"> </div>
   <div class="cell cellPlay w"></div>
  </div>
   
  </div>
  `;
  };

  const createPlayers = () => {
    const nameOne = document.getElementById('form3').value;
    const nameTwo = document.getElementById('form2').value;
    if ((nameOne !== '') && (nameTwo !== '')) {
      playerOne = Player(nameOne);
      playerTwo = Player(nameTwo);
      round.innerHTML = '';
      diplayBoard();
      gameBoard.renderBoard();
      gameBoard.clickEvent();
      gameBoard.next();
    } else {
      round.innerHTML = 'ENTER VALID NAMES';
    }
  };


  return {
    createPlayers,
  };
})();


btnNext.addEventListener('click', gameController.createPlayers);
