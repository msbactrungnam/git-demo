const todos = [];
let todoIndex = null;
const todoList = document.querySelector("ul");
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
event.preventDefault();
const input = form.elements["todo"];
const value = input.value;

if (value.trim() === "") {
    alert("Bạn chưa nhập thông tin!");
} else {
    if (todoIndex == null) {
    todos.push(value);
    } else {
    todos.splice(todoIndex, 1, value);
    }
    reset();
    render();
}
});

function render() {
    const todoElements = todos.map(function (todo) {
        return `
        <li>
            <span>${todo}</span>
            <button id="edit">Edit</button>
            <button id="delete">Delete</button>
        </li>
        `;
    });
    
    todoList.innerHTML = todoElements.join("");
    const deleteButtons = document.querySelectorAll("#delete");
    const editButtons = document.querySelectorAll("#edit");
    deleteButtons.forEach(function (deleteButton, index) {
        deleteButton.addEventListener("click", function () {
        handleDelete(index);
        });
    });
    editButtons.forEach(function (editButton, index) {
        editButton.addEventListener("click", function () {
        handleEdit(index);
        });
    });
}

function handleDelete(index) {
todos.splice(index, 1);
render();
}

function handleEdit(index) {
const input = form.elements["todo"];
input.value = todos[index];
const button = document.querySelector("#btn");
button.innerText = "Edit";
todoIndex = index;
render();
}

function reset(){
    input.value = "";
    todoIndex = null;
    const button = form.querySelector("button");
    button.innerText = "Add";
}

function initialApp() {
render();
}

initialApp();