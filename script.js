'use strict';

let targetNumber = Math.round(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(targetNumber);
document.querySelector('.check').addEventListener('click', () => {
  let currentGuess = Number(document.querySelector('.guess').value);

  if (!currentGuess) {
    document.querySelector('.message').textContent = 'no numbers';
  } else if (currentGuess === targetNumber) {
    document.querySelector('.number').innerHTML = currentGuess;
    document.querySelector('.message').innerHTML = 'Correct Number.';
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').innerHTML = highScore;
    }
  } else if (currentGuess > targetNumber) {
    document.querySelector('.message').innerHTML = 'To High!';
    score--;
  } else {
    document.querySelector('.message').innerHTML = 'TO Low!';
    score--;
  }

  document.querySelector('.score').innerHTML = score;
});

document.querySelector('.again').addEventListener('click', () => {
  targetNumber = Math.round(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').innerHTML = score;
  document.querySelector('.message').innerHTML = 'Start guessing...';
});
