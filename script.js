const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn') ;
const todoList = document.querySelector('.todo-list');




todoBtn.addEventListener('click', addTodo);



// Functions


function addTodo(e){
    e.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value; // "hey"
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);



    // console.log('hello');
}