import addTodo from './addTodo.js';

const addInput = document.querySelector('#name');
const addScore = document.querySelector('#score');
const submit = document.querySelector('.score-btn');

const todos = localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.getItem('toDoList')) : [];
let index = todos.length;
const todoDiv = document.querySelector('.score-list');

const render = () => {
  if (todos !== null) {
    todoDiv.innerHTML = '';
    todos.forEach((todo) => {
      todoDiv.innerHTML += `
      <li ><span>${todo.name}</span> <span>${todo.score}</span> </li>
      `;
    });
  }
};

submit.addEventListener('click', () => {
  if (addInput.value !== '' && addScore.value !== '') {
    const todoVal = addInput.value;
    const score = addScore.value;
    addInput.value = '';
    index += 1;
    const updTodo = addTodo({ index, name: todoVal, score }, todos);
    localStorage.setItem('toDoList', JSON.stringify(updTodo));
    render();
  }
});

window.onload = render();