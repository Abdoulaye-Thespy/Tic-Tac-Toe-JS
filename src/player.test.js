
import {Player} from './index.js';
const name ='Abdoulaye'
const player = Player(name);
test('initializes a player with name', () => {
  expect(player.name).toBe('Abdoulaye');
});