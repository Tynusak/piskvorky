const buttons = document.querySelectorAll('button');
const players = ['circle', 'cross'];
let a = 0;
const activePlayerIcon = document.querySelector('#activePlayer');

const move = (evt) => {
  evt.target.classList.add(`game__field--${players[a]}`);
  a += 1;
  if (a === players.length) {
    a = 0;
  }
  players[a];
  activePlayerIcon.src = `images/${players[a]}.svg`;
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', move);
}
