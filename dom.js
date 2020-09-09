const display = (() => {

const cont = document.getElementById('game');

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

const gameBoard = () => {
 cont.innerHTML = `
  <h1 class="head"> SCORE </h1>
  <div class=" gameboard">

  <div class="status_reset">
 
   <div class="status"> Abdoulaye is next</div>
   <div class="reset"> Reset</div>
  </div>

    <div class="grid-game"> 
   <div class="cell"></div>
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



  `
};
return {welcome, chooseSign, gameBoard};
})();

