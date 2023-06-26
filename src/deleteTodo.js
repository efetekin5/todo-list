import { getCurrentProject, getProjects } from ".";
import selectProject from "./selectProject";

export default function deleteTodo(index) {
  
  let currentProject = getCurrentProject();
  let todoToDelete = currentProject.todos.find((todo) => todo.index == index);

  let todoIndex = todoToDelete.index;
  currentProject.todos.splice(todoIndex, 1);


  let i = 0;
  currentProject.todos.forEach((todo) => {
    todo.index = i;
    i++;
  });

  let allProjects = getProjects();
  selectProject(currentProject.id, allProjects);
  
  localStorage.setItem("projects", JSON.stringify(allProjects));
}
