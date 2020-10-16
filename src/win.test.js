import {gameBoard} from './dom.js';
 gameBoard.gameArray = ['X', 'X', '', '', '', '', '', '', ''];
test('make sure wrong combination do not win the game', () => {
  expect(gameBoard.checkWin()).toBe(false);
});

test('make sure right combination do win the game', () => {
	gameBoard.gameArray = ['X', 'X', 'X', '', '', '', '', '', ''];
  expect(gameBoard.checkWin()).toBe(false);
});