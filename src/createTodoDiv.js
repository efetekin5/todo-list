import deleteTodo from "./deleteTodo";
import editTodo from "./editTodo";

export default function createTodoDiv(todo) {
    
    let name = document.querySelector('#newTask');
    let date = document.querySelector('#date');

    let div = document.createElement('div');
    div.classList.add('task');

    let taskName = document.createElement('span');
    taskName.textContent = todo.name;
    taskName.id = 'taskName';

    let taskDate = document.createElement('span');
    taskDate.textContent = todo.date;
    taskDate.id = 'taskDate';

    let taskUrgency = document.createElement('div');
    taskUrgency.textContent = todo.urgency;
    taskUrgency.id = 'taskUrgency';

    let editImg = document.createElement('img');
    editImg.src = '../dist/edit.png';
    editImg.setAttribute('id', 'taskIcon');
    editImg.addEventListener('click', () => {
        editTodo(todo);
    })

    let removeImg = document.createElement('img');
    removeImg.src = '../dist/remove.png';
    removeImg.setAttribute('id', 'taskIcon');
    removeImg.addEventListener('click', () => {
        deleteTodo(todo.index);
    })

    
    div.appendChild(taskName);
    div.appendChild(taskDate);
    div.appendChild(taskUrgency);
    div.appendChild(editImg);
    div.appendChild(removeImg);

    let displayDiv = document.querySelector('.allTodos');
    displayDiv.appendChild(div);

    name.value = '';
    date.value = '';
}