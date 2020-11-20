const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn') ;
const todoList = document.querySelector('.todo-list');


// console.log(todoList);

todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// console.log(todoList);

// Functions


function addTodo(e){
    e.preventDefault();
    // création d'un div .todo qui engloble une todo
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Créatioin de la li todo-list
    const newTodo = document.createElement('li');
    // Ajout de la valeur de INPUT dans todo-item
    newTodo.innerText = todoInput.value; // "hey"
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Création du btn check
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    // Création du btn poubelle
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // ecriture du code de la div.todo dans la ul.todo-list
    todoList.appendChild(todoDiv);
    // Clear Input after validate
    todoInput.value = ""

    // console.log('hello');
}

function deleteCheck(e){
    // console.log(e.target);
    const item = e.target;
    if (item.classList[0] === 'trash-btn' ) {
        todo = item.parentElement;
        todo.classList.add('fall');
        // console.log(item.parentElement);
            // setTimeout(() => {
                // todo.remove()
            // }, 1000);
        todo.addEventListener('transitionend', () => {
            todo.remove()
        }
        )
    }
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}