import './styles.css';
import getDataofForm from './modules/getDataofForm.js';
import add from './modules/add.js';

add();

document.querySelector('#refresh-btn').addEventListener('click', () => {
  getDataofForm();
});

window.addEventListener('load', () => {
  getDataofForm();
});