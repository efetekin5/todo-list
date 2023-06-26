import { compareAsc, format, parseISO } from 'date-fns';

export default function sortTodos(currentProject) {

    currentProject.todos.sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));
    return currentProject;
}