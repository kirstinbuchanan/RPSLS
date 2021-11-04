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

  if (playerGesture === 'rock') {
    switch (computerGesture) {
      case 'rock':
        result = 'draw!';
        break;
      case 'spock':
        result = 'Spock vaporizes rock, computer wins!';
        break;
      case 'lizard':
        result = 'Rock crushes lizard, player wins!';
        break;
      case 'paper':
        result = 'Paper covers rock, computer wins!';
        break;
      case 'scissors':
        result = 'Rock crushes scissors, player wins!';
        break;
    }
  } else if (playerGesture === 'paper') {
    switch (computerGesture) {
      case 'rock':
        result = 'Paper covers rock, player wins!';
        break;
      case 'spock':
        result = 'Paper disproves spock, player wins!';
        break;
      case 'lizard':
        result = 'Lizard poisons Spock, computer wins!';
        break;
      case 'paper':
        result = 'draw!';
        break;
      case 'scissors':
        result = 'Scissors cut paper, computer wins!';
        break;
    }
  } else if (playerGesture === 'scissors') {
    switch (computerGesture) {
      case 'rock':
        result = 'Rock crushes scissors, computer wins!';
        break;
      case 'spock':
        result = 'Spock destroys scissors, computer wins!';
        break;
      case 'lizard':
        result = 'Scissors behead lizard, player wins!';
        break;
      case 'paper':
        result = 'Scissors cut paper, player wins!';
        break;
      case 'scissors':
        result = 'draw!';
        break;
    }
  } else if (playerGesture === 'spock') {
    switch (computerGesture) {
      case 'rock':
        result = 'Spock crushes rock, player wins!';
        break;
      case 'spock':
        result = 'draw!';
        break;
      case 'lizard':
        result = 'Lizard poisons Spock, computer wins!';
        break;
      case 'paper':
        result = 'Paper disproves Spock, computer wins!';
        break;
      case 'scissors':
        result = 'Spock crushes scissors, player wins!';
        break;
    }
  } else if (playerGesture === 'lizard') {
    switch (computerGesture) {
      case 'rock':
        result = 'Rock crushes lizard, computer wins!';
        break;
      case 'spock':
        result = 'Lizard poisons Spock, player wins!';
        break;
      case 'lizard':
        result = 'draw!';
        break;
      case 'paper':
        result = 'Lizard eats paper, player wins!';
        break;
      case 'scissors':
        result = 'Scissors behead lizard, computer wins!';
        break;
    }
  }

  return { result, computerGesture };
};
