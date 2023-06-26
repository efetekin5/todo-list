import projectSelection from "./projectSelection";
import { createProject } from "./createProject";
import { getCurrentProject } from ".";
import { getProjects } from ".";
import deleteProject from "./deleteProject";


export function createProjectDiv(projectName, i) {
    
    let newProject = document.createElement('div');
    newProject.classList.add('addedProject');
    newProject.setAttribute('id', i);

    let span = document.createElement('span');
    span.textContent = projectName;
    span.addEventListener('click', (event) => {
        projectSelection(event.target.parentElement.id, getProjects());
    })

    let img = document.createElement('img');
    img.src = 'remove.png';
    img.setAttribute('id', 'removeIcon');
    img.addEventListener('click', () => {
        console.log(i);
        deleteProject(i);
    })


    newProject.appendChild(span);
    newProject.appendChild(img);



    let allProjects = document.querySelector('.allProjects');
    allProjects.appendChild(newProject);
    

    const project = createProject(projectName, i);

    return project;
}