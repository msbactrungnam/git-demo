let todos = [];
const ulElement = document.querySelector("ul");
let limit = 10;
let page = 1;
function getData(){
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`).then(function(res){
        todos = res.data;
        render();
    })
}
function render(){
    const todoElements = todos.map(function (todo) {
        return `
        <li>
            <span>${todo.title} <button style="margin: 5px;" type="submit">Edit</button><button type="submit">Delete</button></span>
        </li>
        `;
    });
    ulElement.innerHTML = todoElements.join("");
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
    addTodo({
        userId: 1,
        title: value,
        complete: false,
    })
    input.value = "";
}