import render from './render.js';

const postRequest = async () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  try {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TNm1CNGjVKvWjBG9X4u9/scores/', {
      method: 'POST',

      body: JSON.stringify({ user: name, score }),

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } catch (error) {
    console.log(error);
  }

  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
  render();
};

export default postRequest;