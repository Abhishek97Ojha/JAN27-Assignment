var state = {
    todos: [],
};

var todoList = document.getElementById('todo-list');
var work = document.getElementById('work');
var btn = document.getElementById('btn-add');

btn.addEventListener('click', addTodoItem);

function addTodoItem(e) {
    console.log("hello")
    e.preventDefault();
    if (work.value !== "") {
        state.todos.push(work.value);
        addItemShow(work.value);
        work.value = "";
    }
}

function addItemShow(item) {
    var div = document.createElement('div');
    div.className = 'list';
    div.innerHTML = `<span id="item-${item}">${item}</span>
    <button id="bt" onclick="double('${item}')">Double</button>
    <i onclick="deleteItem('${item}')" class="fa fa-times" aria-hidden="true"></i>`;
    todoList.appendChild(div);
}

function deleteItem(item) {
    // console.log(item);
    var index = state.todos.indexOf(item);
    state.todos.splice(index, 1);
    //   console.log(state.todos);
    renderArray();
}

function renderArray() {
    todoList.innerHTML = "";
    // console.log(state.todos);
    for (i in state.todos) {
        addItemShow(state.todos[i]);
    }
}

function double(item) {
    // console.log(item);
    var index = state.todos.indexOf(item);
    state.todos[index] = item + item;
    renderArray();
}

renderArray();