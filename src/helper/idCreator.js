import store from "store";

// get all todos from redux store
const items = store.getState().db.todos;
console.log(items);

export default function idCreator(date) {
    for (const key in items) {
        if (items[key] === date) {
            const todoList = items[key];
            const previousTodo = todoList[todoList.length - 1];
            const previousId = previousTodo.id.split("_");

            // create a new id by selecting previous todo
            return `${date}_${Number(previousId[1]) + 1}`
        }
    }
    // if no todo created then fresh id return
    return `${date}_0`
}
