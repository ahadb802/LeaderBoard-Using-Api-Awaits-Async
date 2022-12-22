import renderScore from './renderScore.js';

const addScoreToForm = async () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/emOTTVg2fUdz/scores/', {
    method: 'POST',
    body: JSON.stringify({ user: name, score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  renderScore();
};

const addScore = () => {
  const form = document.querySelector('.score-btn');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addScoreToForm();
    e.target.reset();
  });
};

export default addScore;