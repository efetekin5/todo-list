import createTodoDiv from "./createTodoDiv";
import { updateCurrentProject } from ".";
import sortTodos from "./sortTodos";

export default function selectProject(id, projects) {
  let div = document.getElementById(id);
  div.classList = "projectFocused";
  let newCurrentProject = projects[id];
  let displayDiv = document.querySelector(".allTodos");
  displayDiv.innerHTML = "";

  newCurrentProject = sortTodos(newCurrentProject);

  newCurrentProject.todos.forEach((todo) => {
    createTodoDiv(todo);
  });

  updateCurrentProject(newCurrentProject);
  return newCurrentProject;
}
