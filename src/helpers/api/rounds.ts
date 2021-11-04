export const playGame = ({ playerGesture }: { playerGesture: string }) => {
  let result;
  let computerGesture;

  const n = Math.ceil(Math.random() * 5);

  switch (n) {
    case 1:
      computerGesture = 'rock';
      break;
    case 2:
      computerGesture = 'paper';
      break;
    case 3:
      computerGesture = 'scissors';
      break;
    case 4:
      computerGesture = 'lizard';
      break;
    case 5:
      computerGesture = 'spock';
      break;
  }

  const messages = {
    win: 'Player wins!',
    draw: 'Draw!',
    lose: 'Computer wins!',
  };

  if (playerGesture === 'rock') {
    switch (computerGesture) {
      case 'rock':
        result = messages.draw;
        break;
      case 'spock':
        result = messages.lose;
        break;
      case 'lizard':
        result = messages.win;
        break;
      case 'paper':
        result = messages.lose;
        break;
      case 'scissors':
        result = messages.win;
        break;
    }
  } else if (playerGesture === 'paper') {
    switch (computerGesture) {
      case 'rock':
        result = messages.win;
        break;
      case 'spock':
        result = messages.win;
        break;
      case 'lizard':
        result = messages.lose;
        break;
      case 'paper':
        result = messages.draw;
        break;
      case 'scissors':
        result = messages.lose;
        break;
    }
  } else if (playerGesture === 'scissors') {
    switch (computerGesture) {
      case 'rock':
        result = messages.lose;
        break;
      case 'spock':
        result = messages.lose;
        break;
      case 'lizard':
        result = messages.win;
        break;
      case 'paper':
        result = messages.win;
        break;
      case 'scissors':
        result = messages.draw;
        break;
    }
  } else if (playerGesture === 'spock') {
    switch (computerGesture) {
      case 'rock':
        result = messages.win;
        break;
      case 'spock':
        result = messages.draw;
        break;
      case 'lizard':
        result = messages.lose;
        break;
      case 'paper':
        result = messages.lose;
        break;
      case 'scissors':
        result = messages.win;
        break;
    }
  } else if (playerGesture === 'lizard') {
    switch (computerGesture) {
      case 'rock':
        result = messages.lose;
        break;
      case 'spock':
        result = messages.win;
        break;
      case 'lizard':
        result = messages.draw;
        break;
      case 'paper':
        result = messages.win;
        break;
      case 'scissors':
        result = messages.lose;
        break;
    }
  }

  return { result, computerGesture };
};
