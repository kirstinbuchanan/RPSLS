import { playGame } from '../src/helpers/api/rounds';
import { expect, test } from '@jest/globals';
import { computerGesture } from '../__mocks__/mocks';

describe('Game Logic', () => {
  test('it should declare the computer a winner if player chose a losing hand', () => {
    if (computerGesture === 'scissors') {
      expect(playGame({ playerGesture: 'paper' })).toBe('Scissors cut paper, computer wins!');
    }
    if (computerGesture === 'paper') {
      expect(playGame({ playerGesture: 'rock' })).toBe('Paper covers rock, computer wins!');
    }
  });

  test('it should declare the player a winner if the computer chose a losing hand', () => {
    if (computerGesture === 'scissors') {
      expect(playGame({ playerGesture: 'rock' })).toBe('Rock crushes scissors, player wins!');
    }
    if (computerGesture === 'paper') {
      expect(playGame({ playerGesture: 'scissors' })).toBe('Scissors cut paper, player wins!');
    }
  });

  test('it should declare a draw if the player and computer chose the same hand', () => {
    if (computerGesture === 'scissors') {
      expect(playGame({ playerGesture: 'scissors' })).toBe('Draw!');
    }
    if (computerGesture === 'paper') {
      expect(playGame({ playerGesture: 'paper' })).toBe('Draw!');
    }
  });
});
