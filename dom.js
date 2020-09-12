
const display = (() => {
const cont = document.getElementById('game');
let cellBloc = document.getElementsByClassName('cell');
let reset = document.getElementById('reset_id');
let isX = true
let sign = null;

const next = () => {
    if (isX){
        document.getElementById('play').innerHTML = play1;
    }
    else {
        document.getElementById('play').innerHTML = play2;
    }
};


 const board = () => {
    if (validateForm()){
        display.gameBoard();
    }
};


const validateForm = () => {
  const name = document.getElementById('uname').value;
  const author = document.getElementById('uname2').value;
  if (name === '' || author === '') {
    return false;
  }
  return true;
};


const checkWin= () => {
    let topLEft = cellBloc[0].classList[3];
    let topMiddle = cellBloc[1].classList[3];
    let topRight = cellBloc[2].classList[3];
    let middleLeft = cellBloc[3].classList[3];
    let middleMiddle = cellBloc[4].classList[3];
    let middleRight = cellBloc[5].classList[3];
    let botomleft = cellBloc[6].classList[3];
    let botomMiddle = cellBloc[7].classList[3];
    let botomRight = cellBloc[8].classList[3];
    
    if ((topLEft && topLEft===topMiddle&& topLEft===topRight) || (topLEft && topLEft === middleLeft && topLEft === botomleft) || (topLEft && topLEft===middleMiddle&& topLEft===botomRight)){
        sign = topLEft;
         win();
        console.log(sign);
    }
    
    else if ((topMiddle && topMiddle === topLEft && topMiddle===topRight) || (topMiddle && topMiddle===middleMiddle && topMiddle===botomMiddle)){
        sign =topMiddle;
    }
    
    else if ((topRight && topRight === topLEft && topRight===topMiddle) || (topRight && topRight === middleRight && topRight===botomRight) || (topRight && topRight===middleMiddle&& topLEft===botomleft)){
       sign=topRight;
    }
    
    else if ((middleLeft && middleLeft === topLEft && middleLeft===botomleft) || (middleLeft && middleLeft === middleMiddle && middleLeft===middleRight)){
        sign = middleLeft;
    }
    
    else if ((middleMiddle && middleMiddle === middleLeft && middleMiddle=== middleRight) || (middleMiddle && middleMiddle === topMiddle && middleMiddle===botomMiddle)){
     sign = middleMiddle;
    }
    
    else if ((middleRight && middleRight === middleLeft && middleRight=== middleMiddle) || (middleRight && middleRight === topRight && middleRight===botomRight)){
       sign =middleRight;
    }
     else if ((botomleft && botomleft === middleLeft && botomleft === topLEft) || (botomleft && botomleft === botomMiddle && botomleft === botomRight) || (botomleft && botomleft===middleMiddle && botomleft===topRight)){
       sign =botomleft;
    }
    
     else if ((botomMiddle && botomMiddle===middleMiddle && botomMiddle === topMiddle) || (botomMiddle && botomMiddle === botomleft && botomMiddle ===botomRight)){
       sign = botomMiddle;
    }
    
        else if ((botomRight && botomRight === middleRight && botomRight === topRight) || (botomRight && botomRight === botomMiddle && botomRight ===botomleft ) || (botomRight && botomRight === middleMiddle && botomRight === topLEft )){
          sign = botomRight;
    }
    
    
}


const win = () => {
    
 cont.innerHTML = `
  <h1 class="head" id="winner"> </h1>

    <div class="status_reset">
 <button onclick="display.gameBoard()">Reset</button> 
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
  
      if (sign === 'x') {
        document.getElementById('winner').innerHTML = play1 +" WON!!!!";
    }
        else if (sign === 't') {
        document.getElementById('winner').innerHTML = play2 +  " WON!!!!";
    }
}


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
    <button type="submit" class="btn btn-primary" onclick="display.chooseSign()">Submit</button>
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


const chooseSign = () => {
let playerOne = document.getElementById('uname').value;
let playerTwo = document.getElementById('uname2').value;
  window.play1 = playerOne;
  window.play2 = playerTwo;
  if (validateForm()) {
  cont.innerHTML = `
   <h1 class="head">TIC TAC TOE JS</h1>
  <div class="form_div"> 
  <h4 class="player">${playerOne} Welcome, your sign is: X<h4>
  <h4 class="player">${playerTwo} Welcome, your sign is: 0<h4>
  <button type="submit" class="btn btn-primary" onclick="display.gameBoard()">NEXT</button>
  <h6>Click to start the game<h6>
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
  } 
  else {
    welcome();   
  }
 

};


const change = (e) => {
    const allClass = e.target.classList;
    const location =e.target.classList[2];
    
    if (allClass[3]!='x' && allClass[3]!='t') {
        
            if (isX === true){
        e.target.classList.add('x');
        isX = false;
        checkWin();
        next();
    }
    else {
      e.target.classList.add('t');
        isX = true;

        checkWin();
        next();
    }
}

 }
    



const gameBoard = () => {
    isX = true;
 cont.innerHTML = `
  <h1 class="head"> SCORE </h1>

    <div class="status_reset">
 
   <div class="status"> <span id="play"> </span>is next</div>
 <button onclick="display.gameBoard()">Reset</button> 
  </div>
  <div class=" gameboard">

<div class="grid-game"> 
   <div class="cell cellPlay top-left"></div>
   <div class="cell cellPlay top-middle"> </div>
   <div class="cell cellPlay top-right"> </div>
   <div class="cell cellPlay middle-left"> </div>
   <div class="cell cellPlay middle-middle"> </div>
   <div class="cell cellPlay middle-righ"> </div>
   <div class="cell cellPlay botom-left"> </div>
   <div class="cell cellPlay botom-middle"> </div>
   <div class="cell cellPlay bottom-right"> </div>
  </div>
   
  </div>
  `;
   document.getElementById('play').innerHTML = play1;
    for ( const cell of cellBloc) {
    cell.addEventListener('click', change);
}
};
return {welcome, chooseSign, gameBoard};
})();

