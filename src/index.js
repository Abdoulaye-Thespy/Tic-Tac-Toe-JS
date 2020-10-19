const cont = document.getElementById('game');
const cellBloc = document.getElementsByClassName('cell');
const round = document.getElementById('play');
const btnNext = document.getElementById('next');
let gameArray = ['', '', '', '', '', '', '', '', ''];
let playerOne = null;
let playerTwo = null;
let isX = true;
let sign = null;
let draw = 0;
const index = (el) => [...el.parentElement.children].indexOf(el);

export const Player = (name) => {
  const getName = () => name;
  return { getName, name };
};

export const gameBoard = (() => {


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


 const checkWin = (gameArrayNew) => {
    const topLEft = gameArrayNew[0];
    const topMiddle = gameArrayNew[1];
    const topRight = gameArrayNew[2];
    const middleLeft = gameArrayNew[3];
    const middleMiddle = gameArrayNew[4];
    const middleRight = gameArrayNew[5];
    const botomleft = gameArrayNew[6];
    const botomMiddle = gameArrayNew[7];
    const botomRight =gameArrayNew[8];
    /* eslint-disable max-len */
    if ((topLEft && topLEft === topMiddle && topLEft === topRight) || (topLEft && topLEft === middleLeft && topLEft === botomleft) || (topLEft && topLEft === middleMiddle && topLEft === botomRight)) {
      sign = topLEft;
      isX = null;
      return true;
    } else if ((topMiddle && topMiddle === topLEft && topMiddle === topRight) || (topMiddle && topMiddle === middleMiddle && topMiddle === botomMiddle)) {
      sign = topMiddle;
      isX = null;
      return true;
    } else if ((topRight && topRight === topLEft && topRight === topMiddle) || (topRight && topRight === middleRight && topRight === botomRight) || (topRight && topRight === middleMiddle && topLEft === botomleft)) {
      sign = topRight;
      isX = null;
      return true;
    } else if ((middleLeft && middleLeft === topLEft && middleLeft === botomleft) || (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight)) {
      sign = middleLeft;
      isX = null;
      return true;
    } else if ((middleMiddle && middleMiddle === middleLeft && middleMiddle === middleRight) || (middleMiddle && middleMiddle === topMiddle && middleMiddle === botomMiddle)) {
      sign = middleMiddle;
      isX = null;
      return true;
    } else if ((middleRight && middleRight === middleLeft && middleRight === middleMiddle) || (middleRight && middleRight === topRight && middleRight === botomRight)) {
      sign = middleRight;
      isX = null;
      return true;
    } else if ((botomleft && botomleft === middleLeft && botomleft === topLEft) || (botomleft && botomleft === botomMiddle && botomleft === botomRight) || (botomleft && botomleft === middleMiddle && botomleft === topRight)) {
      sign = botomleft;
      isX = null;
      return true;
    } else if ((botomMiddle && botomMiddle === middleMiddle && botomMiddle === topMiddle) || (botomMiddle && botomMiddle === botomleft && botomMiddle === botomRight)) {
      sign = botomMiddle;
      isX = null;
      return true;
    } else if ((botomRight && botomRight === middleRight && botomRight === topRight) || (botomRight && botomRight === botomMiddle && botomRight === botomleft) || (botomRight && botomRight === middleMiddle && botomRight === topLEft)) {
      sign = botomRight;
      isX = null;
      return true;
    }

    return false;
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
        if(checkWin(gameArray))
          win();
        next();
      } else {
        isX = true;
        const ind = index(e.target);
        e.target.classList.add('t');
        draw += 1;
        gameArray[ind] = '0';
        renderBoard();
        if(checkWin(gameArray))
          win();
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
    reset, clickEvent, renderBoard, next,checkWin, gameArray,
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

if(btnNext){
btnNext.addEventListener('click', gameController.createPlayers);
}
