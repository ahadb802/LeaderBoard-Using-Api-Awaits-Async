import './styles.css';
import getDataofForm from './modules/getDataofForm.js';
import add from './modules/addScore.js';

add();

document.querySelector('#refresh-btn').addEventListener('click', () => {
  getDataofForm();
});

window.addEventListener('load', () => {
  getDataofForm();
});