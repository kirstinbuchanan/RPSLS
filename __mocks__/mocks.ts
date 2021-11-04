export let computerGesture: string;

export let n = Math.ceil(Math.random() * 5);

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
