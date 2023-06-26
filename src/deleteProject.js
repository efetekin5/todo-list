import { getCurrentProject, getProjects } from ".";
import selectProject from "./selectProject";
import { updateProjects } from ".";
import { createProjectDiv } from "./createProjectDiv";

export default function deleteProject(id) {

  let allProjects = getProjects();

  let projectIndex = allProjects.findIndex((project) => project.id == id);
  allProjects.splice(projectIndex, 1);

  updateProjects(allProjects);

  let projectDiv = document.querySelector(".allProjects");
  projectDiv.innerHTML = "";
  
  let i = 0;
  allProjects.forEach((project) => {
    createProjectDiv(project.name, i);
    i++;
  });

  localStorage.setItem("projects", JSON.stringify(allProjects));
}
