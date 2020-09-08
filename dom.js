const display = (() => {

const cont = document.getElementById('game');

const welcome = () => {
  cont.innerHTML = `  
  <h1 class="head">TIC TAC TOE JS</h1>
  <form action="/action_page.php" class="was-validated form_div">
    <div class="form-group ">
      <label for="uname">PLAYER 1:</label>
      <input type="text" class="form-control" id="uname" placeholder="NAME PLAYER1" name="uname" required>
    </div>
    <div class="form-group ">
      <label for="uname">PLAYER 2:</label>
      <input type="text" class="form-control" id="uname2" placeholder="NAME PLAYER2" name="uname" required>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;
};

const chooseSign = () => {
let playerOne = document.getElementById('uname').value;
let playerTwo = document.getElementById('uname2').value;

};

return {welcome, chooseSign};
})();

