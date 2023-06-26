import { getCurrentProject } from "./index";


export const createTodo = () => {
    let name = document.querySelector('#newTask').value;
    let date = document.querySelector('#date').value;
    let urgency = document.querySelector('#urgency').value;
    let index = getCurrentProject().todos.length;

    return {name, date, urgency, index}
}