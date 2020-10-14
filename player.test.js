
import {Player} from './dom';

const player = Player('Safa');
test('initializes a player wtih name', () => {
  expect(player.getName).toBe('Abdoulaye');
});