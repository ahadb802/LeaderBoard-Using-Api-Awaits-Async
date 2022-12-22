import renderScore from './renderScore.js';

const addScoreToForm = async () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TNm1CNGjVKvWjBG9X4u9/scores/', {
    method: 'POST',

    body: JSON.stringify({ user: name, score }),

    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
  renderScore();
};

const addScore = () => {
  const form = document.querySelector('#score-btn');
  form.addEventListener('click', (e) => {
    e.preventDefault();
    addScoreToForm();
    e.target.reset();
  });
};

export default addScore;