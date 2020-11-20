const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn') ;
const todoList = document.querySelector('.todo-list');
// Pour le function filterTodo
const filterOption = document.querySelector('.filter-todo');

// console.log(todoList);
document.addEventListener('DOMContentLoaded', getTodos)
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)
// console.log(todoList);

// Functions


function addTodo(e){
    e.preventDefault();

    // création d'un div .todo qui engloble une todo
    const todoDiv = document.createElement('div');
    todoDiv.setAttribute("id", "todo");
    todoDiv.classList.add('todo'); 

    // Créatioin de la li todo-list
    const newTodo = document.createElement('li');
    // Ajout de la valeur de INPUT dans todo-item
    newTodo.innerText = todoInput.value; // "hey"
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // ADD TO LOCALSTORAGE FUNCTION
    saveLocalTodos(todoInput.value)
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
        removeLocalStorage(todo)
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
function filterTodo(e) {
    const todos = todoList.childNodes;
    // console.log(todos,e)
    todos.forEach(todo => {
        switch (e.target.value) {
        case "all":
            todo.style = "display:flex"
            //console.log("all");
            //console.log(todo.classList?.contains("todo"));
            break;
        case "completed":
            // console.log("completed");
            if (!todo.classList?.contains('completed')) {
                // console.log("all completed");
                todo.style = "display:none"
            }
            break;
        case "uncompleted":
            if (todo.classList?.contains('completed')) {
                // console.log("all completed");
                todo.style = "display:none"
            }else{
                todo.style = "display:flex"
            }
            // console.log("uncompleted");
            break;
          default:
            break;
        }
    })
}

function saveLocalTodos(todo) {
    // console.log(todo);
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos))
}
function getTodos(){
    console.log("hello");
    // let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }


    todos.forEach(todo => {
          // création d'un div .todo qui engloble une todo
        const todoDiv = document.createElement('div');
        todoDiv.setAttribute("id", "todo");
        todoDiv.classList.add('todo'); 

        // Créatioin de la li todo-list
        const newTodo = document.createElement('li');
        // Ajout de la valeur de INPUT dans todo-item
        newTodo.innerText = todo; // "hey"
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
    });
}

function removeLocalStorage(todo){
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    // console.log(todo);
    // console.log(todo.children);
    // console.log(todo.children[0]);
    // console.log(todo.children[0].innerText);
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1)
    // console.log(todos.splice(todos.indexOf(todoIndex),1));
    localStorage.setItem("todos", JSON.stringify(todos))

}