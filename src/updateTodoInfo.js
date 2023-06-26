export default function updateTodoInfo(todo) {
    let newName = document.querySelector('#editTodoName');
    let newDate = document.querySelector('#editTodoDate');
    let newUrgency = document.querySelector('#editTodoUrgency');

    todo.name = newName.value;
    todo.date = newDate.value;
    todo.urgency = newUrgency.value;
    return todo;
}