import { getCurrentProject, getProjects } from ".";
import projectSelection from "./projectSelection";
import { updateProjects } from ".";
import { createProjectDiv } from "./createProjectDiv";

export default function deleteProject(id) {

    console.log(id);
    let allProjects = getProjects();
    console.log(allProjects);
    let deletedProject = allProjects.findIndex(project => project.id == id);
    allProjects.splice(deletedProject, 1);

    updateProjects(allProjects);    
    let currentProject = getCurrentProject();


    let projectDiv = document.querySelector('.allProjects');
    projectDiv.innerHTML = '';
    let i = 0;
    allProjects.forEach(project => {
        createProjectDiv(project.name, i);
        i++;
    });

    
    localStorage.setItem('projects', JSON.stringify(allProjects));

}