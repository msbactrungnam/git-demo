let todos = [];
const ulElement = document.querySelector("ul");
let limit = 10;
let page = 1;
let T_index = null;
function getData(){
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`).then(function(res){
        todos = res.data;
        render();
    });
}
function render(){
    const todoElements = todos.map(function (todo) {
        return `
        <li>
            <span>${todo.title} 
            <button id="edit" style="margin: 5px;" type="submit">Edit</button>
            <button id="delete" type="submit">Delete</button></span>
        </li>
        `;
    });
    ulElement.innerHTML = todoElements.join("");
    const deleteButtons = document.querySelectorAll("#delete");
    deleteButtons.forEach(function(deleteButton, index) {
        deleteButton.addEventListener("click", function() {
            handleDelete(index);
        });
    });

    const editButtons = document.querySelectorAll("#edit");
    editButtons.forEach(function(editButton, index) {
        editButton.addEventListener("click", function() {
            handleEdit(index);
        });
    });
}
getData();
function handleBack(){
    if (page == 1) return;
    page = page - 1;
    getData();
}
function handleNext(){
    if (todos.length < limit ) return;
    page = page + 1;
    getData();
}
function addTodo(todo){
    axios.post("https://jsonplaceholder.typicode.com/todos",todo).then(function(res){
        if(res.data){
            getData();
        }
    })
    
}
function handleSubmit(e){
    e.preventDefault();
    const input = document.querySelector("input");
    const value = input.value.trim();
    if(!value) return alert("Nhập dữ liệu!");

    if (T_index !== null) {
        const updatedTodo = {
            ...todos[T_index],
            title: value
        };
        axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo)
            .then(function(res) {
                if(res.data){
                    const editBtn = document.querySelector("#btn");
                    todos[T_index] = updatedTodo;
                    render();
                    T_index = null;
                    input.value = "";
                    editBtn.innerText = "Add";
                }
            })
    } else {
        addTodo({
            userId: 1,
            title: value,
            completed: false,
        });
        input.value = "";
    }
}

function handleDelete(id){
    axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(function(res) {
        if(res.data){
            getData();
        }
    })
}

function handleEdit(index) {
    const editBtn = document.querySelector("#btn");
    editBtn.innerText = "Edit";
    T_index = index;
    const input = document.querySelector("input");
    input.value = todos[index].title;
}