import {createProjectDiv} from "./createProjectDiv";
import projectSelection from "./projectSelection";
import createTodoDiv from './createTodoDiv';
import { createProject } from "./createProject";
import {createTodo} from "./createTodo";
import deleteProject from "./deleteProject";


let projects = JSON.parse(localStorage.getItem('projects')) || [];
let currentProject = JSON.parse(localStorage.getItem('currentProject')) || createProject('currentProject', 0);
console.log(projects);

let i = 0;


projects.forEach((project) => {
    project.id = i;
    createProjectDiv(project.name, i);
    projectSelection(currentProject.id, projects);
    i++;
});



let projectButton = document.querySelector('#projectButton');
projectButton.addEventListener('click', () => {
    if(document.querySelector('#newProject').value != '') {
        let projectName = document.querySelector('#newProject');
        console.log(i);
        let project = createProjectDiv(projectName.value, i);
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));
        projectName.value = '';
        i++;
    }
});


let todoButton = document.querySelector('#todoButton');
todoButton.addEventListener('click', (event) => {
    if(document.querySelector('#newTask').value != '') {
        let newTodo = createTodo();
        currentProject.todos.push(newTodo);
        createTodoDiv(newTodo);
        localStorage.setItem('projects', JSON.stringify(projects));
        projectSelection(currentProject.id, projects, event);
    } else {
        document.querySelector('#newTask').value = 'Enter task name';
        document.querySelector('#newTask').addEventListener('click', () => {
            document.querySelector('#newTask').value = '';
        }), {once : true};
    }
});


document.addEventListener('mousedown', (event) => {
    let selectedDiv = document.querySelector('.projectFocused');
    
    if(event.target.parentElement && event.target.parentElement.classList.contains('addedProject') && selectedDiv) {
        let divs = document.querySelectorAll('.projectFocused');
        divs.forEach((div) => {
            div.classList = 'addedProject';
        })
    }
});



export function getCurrentProject() {
    return currentProject;
}

export function getProjects() {
    return projects;
}

export function updateProjects(updatedProjects) {
    projects = updatedProjects;
}

export function updateCurrentProject(updatedProject) {
    currentProject = updatedProject;
}