const display = (() => {

const cont = document.getElementById('game');
let cellBloc = document.getElementsByClassName('cell');
let reset = document.getElementById('reset_id');
console.log('reset')
let isX = true


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
    console.log(topLEft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, botomleft, botomMiddle, botomRight);
    
    if ((topLEft && topLEft===topMiddle&& topLEft===topRight) || (topLEft && topLEft===middleLeft&& topLEft===botomleft) || (topLEft && topLEft===middleMiddle&& topLEft===botomRight)){
        console.log(topLEft);
    }
    
    else if ((topMiddle && topMiddle === topLEft && topMiddle===topRight) || (topMiddle && topMiddle===middleMiddle && topMiddle===botomMiddle)){
        console.log(topLEft);
    }
    
    else if ((topRight && topRight === topLEft && topRight===topMiddle) || (topRight && topRight === middleRight && topRight===botomRight) || (topRight && topRight===middleMiddle&& topLEft===botomleft)){
        console.log(topLEft);
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
console.log (playerOne, playerTwo);
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
 

};


const change = (e) => {
    const allClass = e.target.classList;
    const location =e.target.classList[2];
    
    if (allClass[3]!='x' && allClass[3]!='t') {
        
            if (isX === true){
        e.target.classList.add('x');
        isX = false;
        checkWin()
    }
    else {
      e.target.classList.add('t');
        isX = true;

        checkWin()
    }
}

 }
    



const gameBoard = () => {
    isX = true
 cont.innerHTML = `
  <h1 class="head"> SCORE </h1>

    <div class="status_reset">
 
   <div class="status"> Abdoulaye is next</div>
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
    for ( const cell of cellBloc) {
    cell.addEventListener('click', change);
}
};
return {welcome, chooseSign, gameBoard};
})();

