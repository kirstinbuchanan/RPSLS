import playGame from '../src/helpers/api/rounds';
import { expect, test } from '@jest/globals';
import { computerGesture } from '../__mocks__/mocks';

describe('Game Logic', () => {
  test('it should declare the computer a winner if player chose a losing hand', async () => {
    if (computerGesture === 'scissors') {
      expect(await playGame({ playerGesture: 'paper' })).toBe('Computer wins!');
    }
    if (computerGesture === 'paper') {
      expect(await playGame({ playerGesture: 'rock' })).toBe('Computer wins!');
    }
  });

  test('it should declare the player a winner if the computer chose a losing hand', async () => {
    if (computerGesture === 'scissors') {
      expect(await playGame({ playerGesture: 'rock' }).toBe('Player wins!'));
    }
    if (computerGesture === 'paper') {
      expect(await playGame({ playerGesture: 'scissors' })).toBe('Player wins!');
    }
  });

  test('it should declare a draw if the player and computer chose the same hand', async () => {
    if (computerGesture === 'scissors') {
      expect(await playGame({ playerGesture: 'scissors' })).toBe('Draw!');
    }
    if (computerGesture === 'paper') {
      expect(await playGame({ playerGesture: 'paper' })).toBe('Draw!');
    }
  });
});
