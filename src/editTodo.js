import updateTodoInfo from "./updateTodoInfo";
import { getCurrentProject } from ".";
import { getProjects } from ".";
import projectSelection from "./projectSelection";

export default function editTodo(todo) {

    let editForm = document.createElement('div');
    editForm.classList.add('editTodo');

    let nameInput = document.createElement('input');
    nameInput.id = 'editTodoName';
    nameInput.type = 'text';
    nameInput.placeholder = 'New name';
    nameInput.required = true;

    let dateInput = document.createElement('input');
    dateInput.id = 'editTodoDate';
    dateInput.type = 'date';
    dateInput.required = true;

    let urgencyInput = document.createElement('select');
    urgencyInput.id = 'editTodoUrgency';

    let option1 = document.createElement('option');
    option1.value = 'urgent';
    option1.textContent = 'Urgent';
    let option2 = document.createElement('option');
    option2.value = 'nonurgent';
    option2.textContent = 'Nonurgent';
    urgencyInput.appendChild(option1);
    urgencyInput.appendChild(option2);

    let editButton = document.createElement('button');
    editButton.id = 'editButton';
    editButton.type = 'button';
    editButton.textContent = 'Update';

    editButton.addEventListener('click', () => {
        todo = updateTodoInfo(todo);
        body.removeChild(overlay);
        body.removeChild(editForm);
        let currentProject = getCurrentProject();
        let projects = getProjects();
        console.log(currentProject.id);
        projectSelection(currentProject.id, projects);
        localStorage.setItem('projects', JSON.stringify(projects));
    });

    editForm.appendChild(nameInput);
    editForm.appendChild(dateInput);
    editForm.appendChild(urgencyInput);
    editForm.appendChild(editButton);

    let overlay = document.createElement('div');
    overlay.classList.add('overlay');

    let body = document.getElementsByTagName('body')[0];
    body.appendChild(overlay);
    body.appendChild(editForm);

}