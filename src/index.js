import './styles.css';
import getData from './modules/getData.js';
import addScore from './modules/addScoreToForm.js';

addScore();

document.querySelector('#refresh-btn').addEventListener('click', () => {
  getData();
});

window.addEventListener('load', () => {
  getData();
});