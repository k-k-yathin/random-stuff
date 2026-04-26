let todos = [];

const input = document.getElementById("todo-input");
const button = document.getElementById("todo-btn");
const list = document.getElementById("todo-list");

button.addEventListener("click", addTodo);

input.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        addTodo();
    }
});

function addTodo() {
    const value = input.value.trim();

    if(value === "") return;

    todos.push({ text: value , completed : false});
    input.value = "";

    render();
}

function render() {
    list.innerHTML = "";
    todos.forEach((todo, index) => {

        const li = document.createElement("li");
        li.innerText = todo.text;

        if (todo.completed) {
            li.style.textDecoration = "line-through";
        }

        li.onclick = () => {
            toggleTodo(index);
        };

        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";

        delBtn.onclick = (e) => {
            e.stopPropagation();
            deleteTodo(index);
        };

        li.appendChild(delBtn);
        list.appendChild(li);
    });

}

function deleteTodo(index) {
    todos.splice(index, 1);
    render();
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    render();
}

function clearAll() {
    todos = [];
    render();
}