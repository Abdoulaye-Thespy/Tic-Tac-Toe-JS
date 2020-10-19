import {gameBoard} from './index.js';
 let gameArrayTest = ['X', 'X', '', '', '', '', '', '', ''];
test('make sure wrong combination do not win the game', () => {
  expect(gameBoard.checkWin(gameArrayTest)).toBe(false);
});

test('make sure right combination do win the game', () => {
	let gameArrayTest = ['X', 'X', 'X', '', '', '', '', '', ''];
  expect(gameBoard.checkWin(gameArrayTest)).toBe(true);
});