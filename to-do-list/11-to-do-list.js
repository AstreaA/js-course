const todoList = []
function addTodo() {
  const inputElement = document.querySelector('.js-todo-input')
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
}

function removeTodo() {
  
}

const todoList2 = []
function addTodo2() {
  const inputElement = document.querySelector('.js-todo-input2')
  const name = inputElement.value;
  todoList2.push(name);

  let todoListHTML = '';

  for (let i = 0; i < todoList2.length; i++) {
    const todo = todoList2[i];
    const html = `
    <p>${todo} 
      <button onclick="
        todoList.splice(${i}, 1);
        
      ">
      Delete</button>
    </p>`;
    todoListHTML += html;
  }

  document.querySelector('.js-output')
    .innerHTML = todoListHTML;
    

  inputElement.value = '';
  

}