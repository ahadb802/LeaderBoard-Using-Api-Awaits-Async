import renderScore from './renderScore.js';

const getData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TNm1CNGjVKvWjBG9X4u9/scores/', {
    method: 'GET',
  });
  const data = response.json();
  data.then((object) => renderScore(object.result));
};

export default getData;