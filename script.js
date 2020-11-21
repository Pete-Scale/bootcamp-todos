var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos(){
    for(var i = 0; i < todos.length; i++){
        // create li element
        var li = document.createElement('li')
        // add todo text to li
        li.innerText = todos[i]
        // apend li to todoList
        todoList.appendChild(li)
    }
}

renderTodos()