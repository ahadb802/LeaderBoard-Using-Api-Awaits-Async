import postRequest from './postRequest.js';

const add = () => {
  const data = document.querySelector('#score-btn');
  data.addEventListener('click', () => {
    postRequest();
  });
};

export default add;