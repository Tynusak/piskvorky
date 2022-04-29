const buttons = document.querySelectorAll('.empty');
const players = ['circle', 'cross'];
let a = 0;
const fieldSize = 10;

const getSymbol = (evt_target) => {
  if (evt_target.classList.contains('game__field--circle')) {
    return 'circle';
  } else if (evt_target.classList.contains('game__field--cross')) {
    return 'cross';
  }
};

const getField = (row, column) => {
  return buttons[row * fieldSize + column];
};

const getPosition = (evt_target) => {
  let buttonIndex = 0;
  while (buttonIndex < buttons.length && evt_target !== buttons[buttonIndex]) {
    buttonIndex++;
  }
  return {
    row: Math.floor(buttonIndex / fieldSize),
    column: buttonIndex % fieldSize,
  };
};

const move = (evt) => {
  evt.target.classList.add(`game__field--${players[a]}`);
  evt.target.disabled = true;

  a += 1;
  if (a === players.length) {
    a = 0;
  }
  document.querySelector('#activePlayer').src = `images/${players[a]}.svg`;
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', move);
}
