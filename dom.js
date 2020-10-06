const cont = document.getElementById('game');
const cellBloc = document.getElementsByClassName('cell');
const last = document.getElementById('winner');
const round = document.getElementById('play');
const btnNext = document.getElementById('next');

let playerOne = null;
let playerTwo = null;
let isX = true;
let sign = null;
const index = (el) => [...el.parentElement.children].indexOf(el);

const Player = (name) => {
    
const getName = () => name;

return {getName};

};

//board Module
const gameBoard = (() => {
    const newArray = ['','','','','','','','',''];
    let gameArray = ['','','','','','','','',''];
    let gameOver = false;



      const win = () => {
    cont.innerHTML = `
  <h1 class="head" id="winner"> </h1>
    <div class="status_reset">
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
  // winner();
  };
  


      const checkWin = () => {
    
const topLEft = gameArray[0];
const topMiddle = gameArray[1];
const topRight = gameArray[2];
const middleLeft = gameArray[3];
const middleMiddle = gameArray[4];
const middleRight =gameArray[5];
const botomleft = gameArray[6];
const botomMiddle =  gameArray[7];
const botomRight = gameArray[8];

    if ((topLEft && topLEft === topMiddle && topLEft === topRight) || (topLEft && topLEft === middleLeft && topLEft === botomleft) || (topLEft && topLEft === middleMiddle && topLEft === botomRight)) {
      sign = topLEft;
      win();
    } else if ((topMiddle && topMiddle === topLEft && topMiddle === topRight) || (topMiddle && topMiddle === middleMiddle && topMiddle === botomMiddle)) {
      sign = topMiddle;
      win();
    } else if ((topRight && topRight === topLEft && topRight === topMiddle) || (topRight && topRight === middleRight && topRight === botomRight) || (topRight && topRight === middleMiddle && topLEft === botomleft)) {
      sign = topRight;
      win();
    } else if ((middleLeft && middleLeft === topLEft && middleLeft === botomleft) || (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight)) {
      sign = middleLeft;
      win();
    } else if ((middleMiddle && middleMiddle === middleLeft && middleMiddle === middleRight) || (middleMiddle && middleMiddle === topMiddle && middleMiddle === botomMiddle)) {
      sign = middleMiddle;
      win();
    } else if ((middleRight && middleRight === middleLeft && middleRight === middleMiddle) || (middleRight && middleRight === topRight && middleRight === botomRight)) {
      sign = middleRight;
      win();
    } else if ((botomleft && botomleft === middleLeft && botomleft === topLEft) || (botomleft && botomleft === botomMiddle && botomleft === botomRight) || (botomleft && botomleft === middleMiddle && botomleft === topRight)) {
      sign = botomleft;
      win();
    } else if ((botomMiddle && botomMiddle === middleMiddle && botomMiddle === topMiddle) || (botomMiddle && botomMiddle === botomleft && botomMiddle === botomRight)) {
      sign = botomMiddle;
      win();
    } else if ((botomRight && botomRight === middleRight && botomRight === topRight) || (botomRight && botomRight === botomMiddle && botomRight === botomleft) || (botomRight && botomRight === middleMiddle && botomRight === topLEft)) {
      sign = botomRight;
      win();
    }
  };




  
   const change = (e) => {
    const allClass = e.target.classList;
    console.log('inside');

    if (allClass[3] !== 'x' && allClass[3] !== 't') {
      if (isX === true) {
        isX = false;
        let ind = index(e.target);
        e.target.classList.add('x');
        console.log(e.target);
        gameArray[ind]='x'
        renderBoard();
        checkWin();
        // next();
      } else {
        isX = true;
        let ind = index(e.target);
        e.target.classList.add('t');
        gameArray[ind]='0'
        console.log(e.target);
        renderBoard();
        checkWin();
        // next();
      }
    }
  };




  const clickEvent = () => {
    for (const cell of cellBloc) {
      cell.addEventListener('click', change);
    }
  };


  const renderBoard = () => {
      let i=0;
    for (const cell of cellBloc ) {
      cell.innerHTML= gameArray[i];
      i++;
    }
  };

  const reset = () => {
    gameArray=['','','','','','','','',''];
    renderBoard();
    clickEvent();
  }



    return {
        reset, clickEvent, renderBoard
    }
})();













const gameController = (() => {





const createPlayers = () => {
let nameOne = document.getElementById('form3').value;
let nameTwo = document.getElementById('form2').value;
if ((nameOne !=='') && (nameTwo !=='')) {
 playerOne = Player(nameOne);
 playerTwo = Player(nameTwo);
 round.innerHTML =''
 diplayBoard();
 gameBoard.renderBoard();
gameBoard.clickEvent();
}
else {
  round.innerHTML ='ENTER VALID NAMES'
}


};

const validateForm = () => {
    const name1 = document.getElementById('form3').value;
    const name2 = document.getElementById('form2').value;
    if (name1 === '' || name2 === '') {
      return false;
    }
   return true;
};

const diplayBoard = () => {
      cont.innerHTML = `
  <h1 class="head" id="winner"> </h1>
    <div class="status_reset">
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
  }
  


    return {
        createPlayers, validateForm
    }

})();


btnNext.addEventListener('click', gameController.createPlayers);



// const winner = () => {
  
//     if (sign === 'x') {
//       last.innerHTML = `${playerOne.getName()} WON!!!!`;
//     } else if (sign === 't') {
//       last.innerHTML = `${playerTwo.getName()} WON!!!!`;
//     }
// };

  

  const next = () => {
    if (isX) {
      round.innerHTML = playerOne.getName();
    } else {
      round.innerHTML = playerTwo.getName();
    }
  };

  // const validateForm = () => {
  //   const name = document.getElementById('uname').value;
  //   const author = document.getElementById('uname2').value;
  //   if (name === '' || author === '') {
  //     return false;
  //   }
  //   return true;
  // };
  





// const display = (() => {

  


  const welcome = () => {
    cont.innerHTML = `  
  <h1 class="head">TIC TAC TOE JS</h1>
  <div class="was-validated form_div">
    <div class="form-group ">
      <label for="uname">PLAYER 1:</label>
      <input type="text" class="form-control" id="uname" placeholder="NAME PLAYER1" name="uname" required>
    </div>
    <div class="form-group ">
      <label for="uname">PLAYER 2:</label>
      <input type="text" class="form-control" id="uname2" placeholder="NAME PLAYER2" name="uname" required>
    </div>
    <button type="submit" class="btn btn-primary" onclick="createplayers()">Submit</button>
  </div>
  <div class=" gameboard">
    <div class="grid-game"> 
   <div class="cell"> </div>
   <div class="cell"> </div>
   <div class="cell"> </div>
   <div class="cell"> </div>
   <div class="cell"> </div>
   <div class="cell"> </div>
   <div class="cell"> </div>
   <div class="cell"> </div>
   <div class="cell"> </div>
  </div>
   
  </div>
  `;
  };


//   const chooseSign = () => {
//     if (validateForm()) {
//       cont.innerHTML = `
//    <h1 class="head">TIC TAC TOE JS</h1>
//   <div class="form_div"> 
//   <h4 class="player"> Welcome, ${playerOne.getName()} your sign is: X<h4>
//   <h4 class="player"> Welcome, ${playerTwo.getName()} your sign is: 0<h4>
//   <button type="submit" class="btn btn-primary" onclick="display.renderBoard()">NEXT</button>
//   <h6>Click to start the game<h6>
//   </div>
//   <div class=" gameboard">
//    <div class="grid-game"> 
//    <div class="cell"> </div>
//    <div class="cell"> </div>
//    <div class="cell"> </div>
//    <div class="cell"> </div>
//    <div class="cell"> </div>
//    <div class="cell"> </div>
//    <div class="cell"> </div>
//    <div class="cell"> </div>
//    <div class="cell"> </div>
//   </div>
   
//   </div>  
//   `;
//     } else {
//       welcome();
//     }
//   };




//   return { welcome, chooseSign, renderBoard };
// })();



// //logics