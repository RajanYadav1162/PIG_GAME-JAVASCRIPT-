// .,...............content................
const global1 = document.querySelector('#score--0');
const global2 = document.querySelector('#score--1');
const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');

// ......button..............
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

//...... card image

const cardImg = document.querySelector('img');

// active 1 section

const active1 = document.querySelector('#active1');
// end active1 section

// active2 section

const active2 = document.querySelector('#active2');
// end active2 section
let c1, g1, c2, g2, chance;
c1 = c2 = g1 = g2 = 0;
chance = 1;

// .......player 1........

// function to genrate random cube and and assign to current
//  OR RollDice btn handler
const generateRandomAndAssignToCurrent = (isHoldPressed = false) => {
  cardImg.classList.add('rotate-center');

  setTimeout(() => {
    cardImg.classList.remove('rotate-center');
  }, 500);
  if (!isHoldPressed) {
    c1 = Math.floor(Math.random() * 6) + 1;
    cardImg.src = `dice-${c1}.png`;
  } else {
    if (chance === 1) {
      chance = 2;
      active1.classList.remove('player--active');
      active2.classList.add('player--active');
    } else {
      active2.classList.remove('player--active');
      active1.classList.add('player--active');

      chance = 1;
    }
    c1 = 0;
  }
  if (c1 === 1 && chance === 1) {
    chance = 2;
    g1 = 0;
    c1 = 0;
    current1.textContent = 0;
    global1.textContent = 0;
    active1.classList.remove('player--active');
    active2.classList.add('player--active');
  } else {
    if (c1 === 1 && chance === 2) {
      chance = 1;
      g2 = 0;
      c1 = 0;
      current2.textContent = 0;
      global2.textContent = 0;
      active2.classList.remove('player--active');
      active1.classList.add('player--active');
    }
  }

  if (chance === 1) {
    current1.textContent = c1;
    g1 += c1;
    global1.textContent = g1;
  } else {
    current2.textContent = c1;
    g2 += c1;
    global2.textContent = g2;
  }
  if (g1 >= 30) {
    alert('PLAYER 1 IS WINNNER!');
  }
  if (g2 >= 30) {
    alert('PLAYER 2 IS WINNNER!');
  }
};

holdBtn.addEventListener('click', () => generateRandomAndAssignToCurrent(true));

rollDiceBtn.addEventListener('click', () => generateRandomAndAssignToCurrent());
