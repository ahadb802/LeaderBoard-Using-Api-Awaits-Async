const toDoObject = JSON.parse(localStorage.getItem('todoList')) || [];

class Todo {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.index = toDoObject.length + 1;
  }

  addTodo = () => {
    toDoObject.push(this);
  };

  static removeTodo = (index) => {
    toDoObject.splice(index - 1, 1);
  };
}

export { Todo, toDoObject };
