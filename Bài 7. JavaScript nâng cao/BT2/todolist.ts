class ToDo {
    date: number;
    works: string[];

    constructor(date: number, works: string[]) {
        this.date = date;
        this.works = works;
    }
}

class ToDoList {
    todos_list: ToDo[];

    constructor() {
        this.todos_list = [];
    }

    addToDos(todo: ToDo) {
    const check = this.todos_list.some(todos => todos.date === todo.date);
    
        if (!check) {
            return this.todos_list.push(todo);
        } else {
            return console.error(`Da co viec can lam vao ngay nay!`);
        }
    }
}

const todo_1 = new ToDo(16012023, ["Birthday", "Moi mn di an"]);
const todo_2 = new ToDo(30042023, ["Nghi le", "Di ve que"]);

const todoList = new ToDoList();
todoList.addToDos(todo_1);
todoList.addToDos(todo_2);
todoList.addToDos(new ToDo(30042023, ["Di sinh nhat ban"]));

console.log(todoList);