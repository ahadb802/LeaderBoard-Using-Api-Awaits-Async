import render from './render.js';

const getting = async () => {
  const Pname = document.querySelector('#name').value;
  const Pscore = document.querySelector('#score').value;
  try {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TNm1CNGjVKvWjBG9X4u9/scores/', {
    method: 'POST',

    body: JSON.stringify({ user: Pname, Pscore }),

    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  } catch (error) {
    console.log(error)
  }
  
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
  render();
};

const add = () => {
  const data = document.querySelector('#score-btn');
  data.addEventListener('click', (e) => {
    e.preventDefault();
    getting();
    e.target.reset();
  });
};

export default add;