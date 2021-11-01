export const playGame = (playerGesture) => {
  let computerGesture;
  let result;

  const n = Math.ceil(Math.random() * 3);

  switch (n) {
    case 1:
      computerGesture = 'rock';
    case 2:
      computerGesture = 'paper';
    case 3:
      computerGesture = 'scissors';
  }

  console.log('computerGesture', computerGesture);
  console.log('playerGesture', playerGesture);

  if (playerGesture === 'rock' && computerGesture === 'rock') {
    result = 'draw!';
  } else if (playerGesture === 'rock' && computerGesture === 'paper') {
    result = 'computer wins!';
  } else if (playerGesture === 'rock' && computerGesture === 'scissors') {
    result = 'player wins!';
  } else if (playerGesture === 'paper' && computerGesture === 'rock') {
    result = 'player wins!';
  } else if (playerGesture === 'paper' && computerGesture === 'paper') {
    result = 'draw!';
  } else if (playerGesture === 'paper' && computerGesture === 'scissors') {
    result = 'computer wins!';
  } else if (playerGesture === 'scissors' && computerGesture === 'rock') {
    result = 'computer wins!';
  } else if (playerGesture === 'scissors' && computerGesture === 'paper') {
    result = 'player wins!';
  } else {
    result = 'draw!';
  }

  return result;
};
