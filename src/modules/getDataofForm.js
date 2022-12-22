import render from './render.js';

const getDataofForm = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TNm1CNGjVKvWjBG9X4u9/scores/', {
    method: 'GET',
  });
  const data = response.json();
  data.then((object) => render(object.result));
};

export default getDataofForm;